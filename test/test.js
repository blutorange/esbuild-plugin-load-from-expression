import { build } from "esbuild";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { loadFromExpressionPlugin } from "../index.js";

console.log("Running IT tests with esbuild...");

const dirname = path.dirname(fileURLToPath(import.meta.url));

await fs.rm(path.join(dirname, "dist"), { force: true, recursive: true });

// Run esbuild with plugin

await build({
	entryPoints: ["src/script.js"],
	outdir: "./dist/",
	absWorkingDir: dirname,
	bundle: true,
	legalComments: "none",
	loader: {
		".png": "base64",
		".svg": "base64",
	},
	plugins: [
		loadFromExpressionPlugin({
			expressions: {
				importSpecifier: {
					jquery: "window.jQuery",
				},
				modulePath: {
					"moment/moment.js": "window.moment",
				},
			},
		}),
	],
});

// Assert generated build output matches our expectations

const distDirFiles = await fs.readdir(path.join(dirname, "dist"), {
	recursive: true,
});
const expectedDirFiles = await fs.readdir(path.join(dirname, "expected"), {
	recursive: true,
});

const distFiles = (
	await Promise.all(
		distDirFiles.map(async (file) =>
			(await fs.stat(path.join(dirname, "dist", file))).isFile()
				? file
				: undefined,
		),
	)
)
	.filter((x) => x !== undefined)
	.sort();

const expectedFiles = (
	await Promise.all(
		expectedDirFiles.map(async (file) =>
			(await fs.stat(path.join(dirname, "expected", file))).isFile()
				? file
				: undefined,
		),
	)
)
	.filter((x) => x !== undefined)
	.sort();

if (distFiles.length !== expectedFiles.length) {
	throw new Error(
		`Expected ${expectedFiles.length} generated files, but got ${distFiles.length}`,
	);
}

for (let i = 0; i < expectedFiles.length; i += 1) {
	const file = expectedFiles[i];
	const isText = [".js", ".css"].includes(path.extname(file));

	const distFileContent = await fs.readFile(path.join(dirname, "dist", file), {
		encoding: isText ? "utf8" : "base64",
	});
	const expectedFileContent = await fs.readFile(
		path.join(dirname, "expected", file),
		{ encoding: isText ? "utf8" : "base64" },
	);

	const normalizedDistFileContent = normalizeContent(file, distFileContent);
	const normalizedExpectedFileContent = normalizeContent(file, expectedFileContent);

	if (normalizedDistFileContent !== normalizedExpectedFileContent) {
		throw new Error(
			`Expected file ${file} to have content: \n\n${normalizedExpectedFileContent}\n\nBut was:\n\n${normalizedDistFileContent}`,
		);
	}
}

console.log("IT tests successful");


/**
 * @param {string} file 
 * @param {string} content 
 */
function normalizeContent(file, content) {
	if (file.endsWith(".js")) {
		return content.split(/\r\n|\n/)
			.map(line => line.trim())
			.map(line => line.replace(/(\.\.[\\\/])+/g, "../"))
			.filter(line => line.length > 0)
			.filter(line => !line.startsWith("//"))
			.join("\n");
	}
	if (file.endsWith(".css")) {
		return content.replace(/[\r\n\s]+/g, "");
	}
	return content;
}