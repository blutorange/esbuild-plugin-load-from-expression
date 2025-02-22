[![npm version](https://img.shields.io/npm/v/@xenorange/esbuild-plugin-load-from-expression)](https://www.npmjs.com/package/@xenorange/esbuild-plugin-load-from-expression) [![build status](https://github.com/blutorange/esbuild-plugin-load-from-expression/actions/workflows/node.js.yml/badge.svg)](https://github.com/blutorange/esbuild-plugin-load-from-expression/actions)

[esbuild](https://esbuild.github.io/) plugin for replacing an import with an
arbitrary expression, such as `import $ from "jquery"` with `window.$`. Supports
the cases where a module imports another file from itself via a relative import.

__Requires [Yarn PnP](https://yarnpkg.com/advanced/pnp-spec)__, i.e. you must
use the yarn package manager and set `nodeLinker: pnp` in your `.yarnrc.yml`.

# Motivation

Let's you replace a (bare) import specified such as `import ("jquery")` with
an arbitrary expression such as `window.$`.

If that is you're only use case, just use [@fal-works/esbuild-plugin-global-externals](https://github.com/fal-works/esbuild-plugin-global-externals).

This plugin supports an additional use case. To illustrate, let's take the
module `moment`. This module contains a file `locales/de.js`. That file
has an import statement `import("../moment")`, which resolves to the file
`moment.js` within the `moment` module.

Also assume we want to load `moment/moment.js` from the global variable
`window.moment`, because moment was already loaded by another script file. But
that script file did not load the locales, so we only want to include
`locales/de.js` in our bundle, but not the moment library itself.

With the `@fal-works/esbuild-plugin-global-externals` plugin, you would have to
use:

```js
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";

esbuild.build({
  entryPoints: ["src/main.js"],
  outfile: "dist/bundle.js",
  bundle: true,
  plugins: [globalExternals( {
    "../moment": "window.moment",
  })],
});
```

While that would work, this is also dangerous: The import specified `../moment`
could also be used in a completely different file or module. But we only want
to target the resolved file `moment.js` from the module `moment`.

This plugin let's you do that. To do so, it needs to resolve import specifiers
such as `../moment` relative to the importing file `locales/de.js`. The
[Yarn PnP API](https://yarnpkg.com/advanced/pnpapi) offers a simple and reliable
way to do so. So for now, this plugin requires that you use the yarn package
manager with PnP enabled. I may add support for other package managers, and
contributions would be welcome!

# Usage

See also [test/test.js](test/test.js) and [test/expected](test/expected) for an example.

```js
import { loadFromExpressionPlugin } from "@xenorange/esbuild-plugin-load-from-expression";

await esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  // ...your other settings...
  plugins: [
    loadFromExpressionPlugin({
      expressions: {
        // You can target either an import specifier such as import("jquery")
        importSpecifier: {
          "jquery": "window.jQuery",
        },

        // Or a resolved path within a module. E.g. when import("../moment")
        // is used by the file "locales/de.js" from the module "moment", this
        // import resolves to the file "moment.js" from the module "moment"
        // To target this resolved file, use:
        modulePath: {
          "moment/moment.js": "window.moment",
        },
      },
    }),
  ],
});
```

Options are as follows. Relative paths are resolved against the
[esbuild working directory](https://esbuild.github.io/api/#working-directory).

* `expressions` - Either bare import specifiers or a paths within a module to
replace with an expression.
  * `expressions.importSpecified` - Target an import specifier, such as
  `import("jquery")`. The key is the import specifier (e.g. `"jquery"`), the
  value is the expression from which to load the module (e.g. `window.$`).
  * `expressions.modulePath` - Target a resolved path within a module. E.g. when
  `import("../moment")` is used by the file `locales/de.js` from the module
  `moment`, this import resolves to the file `moment.js` from the module
  `moment`. You could also add an `importSpecifier` for `../moment`, but that
  runs the risk of being ambiguous: this import specifier could also appear in
  another file or module. To target the resolved file `moment.js` from the
  module `moment` specifically, use this `modulePath` option:
  `{ modulePath: { "moment/moment.js": "window.moment" } }`. The key is the
  module name and the path to a file within that module, e.g.
  `moment/moment.js`, the value is the expression from which to load that file,
  e.g. `window.moment`.

# Release

Check `CHANGELOG.md` and `package.json` for the version. Then:

```sh
yarn npm publish --access public
git tag -a x.y.z
git push origin x.y.z
```

Then create a github release and set version to next snapshot.
