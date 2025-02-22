import * as path from "node:path";
import pnpApi from "pnpapi";

/**
 * @typedef {Object} LoadFromExpressionPluginOptions
 * @property {LoadFromExpressionPluginExpressions} expressions Define imports
 * and expression from where to load these imports.
 */
undefined;

/**
 * @typedef {Object} LoadFromExpressionPluginExpressions
 * @property {Record<string, string>} [importSpecifier] Target an import
 * specifier, such as `import("jquery")`. The key is the import specifier (e.g.
 * `"jquery"`), the value is the expression from which to load the module (e.g.
 * `window.$`).
 * @property {Record<string, string>} [modulePath] Target a resolved path within
 * a module. E.g. when `import("../moment")` is used by the file `locales/de.js`
 * from the module `moment`, this import resolves to the file `moment.js` from
 * the module `moment`. You could also add an `importSpecifier` for `../moment`,
 * but that runs the risk of being ambiguous: this import specifier could also
 * appear in another file or module. To target the resolved file `moment.js`
 * from the module `moment` specifically, use this `modulePath` option:
 * ```js
 * { modulePath: { "moment/moment.js": "window.moment" } }
 * ```
 * The key is the module name and the path to a file within that module, e.g.
 * `moment/moment.js`, the value is the expression from which to load that file,
 * e.g. `window.moment`.
 */
undefined;

const NamespaceImportSpecifier = "load-from-expression/bare";
const NamespaceModulePath = "load-from-expression/module-path";

/**
 * Creates a regexp pattern that matches the given literal text.
 * @param {string} text A piece of literal text.
 * @returns {string} The resulting RegExp pattern.
 */
function escapeRegExp(text) {
	return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Appends the suffix if missing, otherwise does nothing.
 * @param {string} value Value to process.
 * @param {string} suffix Suffix to append.
 * @returns {string} The value with the suffix appended.
 */
function appendIfMissing(value, suffix) {
    return value.endsWith(suffix) ? value : value + suffix;
}

/**
 * Returns the default value when the given value is empty.
 * @param {string | undefined | null} value Value to check.
 * @param {string} defaultValue Default value to use as a fallback.
 * @returns {string} The value when non-empty, or the default otherwise.
 */
function defaultIfEmpty(value, defaultValue) {
	return value !== undefined && value !== null && value.length > 0
		? value
		: defaultValue;
}

/**
 * Resolves a request to a path using the PnP API, relative against an importer.
 * @param {string} request The requested path.
 * @param {string} importer The path of the module that imports the requested path.
 * @returns {string} The resolved path.
 */
function resolveRequest(request, importer) {
	let error;
	try {
		const resolved = pnpApi.resolveRequest(request, importer);
		if (resolved !== null) {
			return resolved;
		}
	} catch (e) {
		error = e;
	}

	// Try *.ts extension if *.js extension is requested.
	if (request.endsWith(".js")) {
		try {
			const resolved = pnpApi.resolveRequest(
				`${request.substring(0, request.length - 3)}.ts`,
				importer,
			);
			if (resolved !== null) {
				return resolved;
			}
		} catch (e) {
			error ??= e;
		}
	}

	// Try *.tsx extension if *.jsx extension is requested.
	if (request.endsWith(".jsx")) {
		try {
			const resolved = pnpApi.resolveRequest(
				`${request.substring(0, request.length - 4)}.tsx`,
				importer,
			);
			if (resolved !== null) {
				return resolved;
			}
		} catch (e) {
			error ??= e;
		}
	}

	throw new Error(
		`Could not resolve request: <${request}> against importer: <${importer}>: ${error}`,
	);
}

/**
 * @param {string} resolved
 */
function resolveToPackagePath(resolved) {
	const locator = pnpApi.findPackageLocator(resolved ?? "");
	if (!locator || !locator.name) {
		throw new Error(`Could not find package locator for ${resolved}`);
	}
	const packageInfo = pnpApi.getPackageInformation(locator);
	// Normalize \ to / for Windows paths
	const relative = path.relative(packageInfo.packageLocation, resolved).replace(/\\/g, "/");
	return relative !== "" ? `${locator.name}/${relative}` : locator.name;
}

/**
 * An ESBuild plugin that allows to load modules from an expression. E.g.
 * you can load `import $ from "jquery"` from `window.JQuery` instead.
 *
 * Usage:
 *
 * ```js
 * import { loadFromExpressionPlugin } from "@xenorange/esbuild-plugin-load-from-expression";
 * esbuild.build({
 *     entryPoints: ["src/index.js"],
 *     bundle: true,
 *     // ...your other settings...
 *     plugins: [
 *         loadFromExpressionPlugin({
 *             expressions: {
 *                 // You can target either an import specifier such as import("jquery")
 *                 importSpecifier: {
 *                     "jquery": "window.jQuery",
 *                 },
 *
 *                 // Or a resolved path within a module. E.g. when import("../moment")
 *                 // is used by the file "locales/de.js" from the module "moment", this
 *                 // import resolves to the file "moment.js" from the module "moment"
 *                 // To target this resolved file, use:
 *                 modulePath: {
 *                     "moment/moment.js": "window.moment",
 *                 },
 *          },
 *     ],
 * });
 * ```
 * @param {LoadFromExpressionPluginOptions} options Options that define which
 * modules and files from modules to load from expressions.
 * @returns {import("esbuild").Plugin} An new esbuild plugin that loads the
 * specified modules from the given expressions.
 */
export function loadFromExpressionPlugin(options) {
	return {
		name: "load-from-expression",
		setup(build) {
			const cwd = appendIfMissing(defaultIfEmpty(build.initialOptions.absWorkingDir, process.cwd()), path.sep);

			// Bare import specifiers
			const importSpecifier = options.expressions.importSpecifier ?? {};
			if (Object.keys(importSpecifier).length > 0) {
				const pattern = `^(${Object.keys(importSpecifier).map(escapeRegExp).join("|")})$`;
				build.onResolve({ filter: new RegExp(pattern) }, (args) => {
					return { namespace: NamespaceImportSpecifier, path: args.path };
				});
				build.onLoad(
					{ filter: /.*/, namespace: NamespaceImportSpecifier },
					(args) => {
						const expression = importSpecifier[args.path];
						return {
							contents: `module.exports = ${expression};`,
							loader: "js",
						};
					},
				);
			}

			// Paths within a module
			const modulePath = options.expressions.modulePath ?? {};
			if (Object.keys(modulePath).length > 0) {
				build.onResolve({ filter: /.*/ }, (args) => {
					const resolved = resolveRequest(args.path, defaultIfEmpty(args.importer, cwd));
					const packagePath = resolveToPackagePath(resolved);
					if (packagePath in modulePath) {
						return { path: packagePath, namespace: NamespaceModulePath };
					}
					return undefined;
				});
				build.onLoad(
					{ filter: /.*/, namespace: NamespaceModulePath },
					(args) => {
						const expression = modulePath[args.path];
						if (expression === undefined) {
							throw new Error(`No expression found for <${args.path}>`);
						}
						return {
							contents: `module.exports = ${expression};`,
							loader: "js",
						};
					},
				);
			}
		},
	};
}
