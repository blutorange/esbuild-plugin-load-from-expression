"use strict";
(() => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
for (var name in all)
__defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
if (from && typeof from === "object" || typeof from === "function") {
for (let key of __getOwnPropNames(from))
if (!__hasOwnProp.call(to, key) && key !== except)
__defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
}
return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
mod
));
var require_moment = __commonJS({
"load-from-expression/module-path:moment/moment.js"(exports, module) {
module.exports = window.moment;
}
});
var require_component_emitter = __commonJS({
"../.yarn/berry/cache/component-emitter-npm-2.0.0-c0940bc1cd-10c0.zip/node_modules/component-emitter/index.js"(exports, module) {
function Emitter3(object2) {
if (object2) {
return mixin(object2);
}
this._callbacks = /* @__PURE__ */ new Map();
}
function mixin(object2) {
Object.assign(object2, Emitter3.prototype);
object2._callbacks = /* @__PURE__ */ new Map();
return object2;
}
Emitter3.prototype.on = function(event2, listener) {
const callbacks = this._callbacks.get(event2) ?? [];
callbacks.push(listener);
this._callbacks.set(event2, callbacks);
return this;
};
Emitter3.prototype.once = function(event2, listener) {
const on = (...arguments_) => {
this.off(event2, on);
listener.apply(this, arguments_);
};
on.fn = listener;
this.on(event2, on);
return this;
};
Emitter3.prototype.off = function(event2, listener) {
if (event2 === void 0 && listener === void 0) {
this._callbacks.clear();
return this;
}
if (listener === void 0) {
this._callbacks.delete(event2);
return this;
}
const callbacks = this._callbacks.get(event2);
if (callbacks) {
for (const [index, callback] of callbacks.entries()) {
if (callback === listener || callback.fn === listener) {
callbacks.splice(index, 1);
break;
}
}
if (callbacks.length === 0) {
this._callbacks.delete(event2);
} else {
this._callbacks.set(event2, callbacks);
}
}
return this;
};
Emitter3.prototype.emit = function(event2, ...arguments_) {
const callbacks = this._callbacks.get(event2);
if (callbacks) {
const callbacksCopy = [...callbacks];
for (const callback of callbacksCopy) {
callback.apply(this, arguments_);
}
}
return this;
};
Emitter3.prototype.listeners = function(event2) {
return this._callbacks.get(event2) ?? [];
};
Emitter3.prototype.listenerCount = function(event2) {
if (event2) {
return this.listeners(event2).length;
}
let totalCount = 0;
for (const callbacks of this._callbacks.values()) {
totalCount += callbacks.length;
}
return totalCount;
};
Emitter3.prototype.hasListeners = function(event2) {
return this.listenerCount(event2) > 0;
};
Emitter3.prototype.addEventListener = Emitter3.prototype.on;
Emitter3.prototype.removeListener = Emitter3.prototype.off;
Emitter3.prototype.removeEventListener = Emitter3.prototype.off;
Emitter3.prototype.removeAllListeners = Emitter3.prototype.off;
if (typeof module !== "undefined") {
module.exports = Emitter3;
}
}
});
var require_default = __commonJS({
"../.yarn/berry/cache/cssfilter-npm-0.0.10-28e06ce546-10c0.zip/node_modules/cssfilter/lib/default.js"(exports) {
function getDefaultWhiteList() {
var whiteList = {};
whiteList["align-content"] = false;
whiteList["align-items"] = false;
whiteList["align-self"] = false;
whiteList["alignment-adjust"] = false;
whiteList["alignment-baseline"] = false;
whiteList["all"] = false;
whiteList["anchor-point"] = false;
whiteList["animation"] = false;
whiteList["animation-delay"] = false;
whiteList["animation-direction"] = false;
whiteList["animation-duration"] = false;
whiteList["animation-fill-mode"] = false;
whiteList["animation-iteration-count"] = false;
whiteList["animation-name"] = false;
whiteList["animation-play-state"] = false;
whiteList["animation-timing-function"] = false;
whiteList["azimuth"] = false;
whiteList["backface-visibility"] = false;
whiteList["background"] = true;
whiteList["background-attachment"] = true;
whiteList["background-clip"] = true;
whiteList["background-color"] = true;
whiteList["background-image"] = true;
whiteList["background-origin"] = true;
whiteList["background-position"] = true;
whiteList["background-repeat"] = true;
whiteList["background-size"] = true;
whiteList["baseline-shift"] = false;
whiteList["binding"] = false;
whiteList["bleed"] = false;
whiteList["bookmark-label"] = false;
whiteList["bookmark-level"] = false;
whiteList["bookmark-state"] = false;
whiteList["border"] = true;
whiteList["border-bottom"] = true;
whiteList["border-bottom-color"] = true;
whiteList["border-bottom-left-radius"] = true;
whiteList["border-bottom-right-radius"] = true;
whiteList["border-bottom-style"] = true;
whiteList["border-bottom-width"] = true;
whiteList["border-collapse"] = true;
whiteList["border-color"] = true;
whiteList["border-image"] = true;
whiteList["border-image-outset"] = true;
whiteList["border-image-repeat"] = true;
whiteList["border-image-slice"] = true;
whiteList["border-image-source"] = true;
whiteList["border-image-width"] = true;
whiteList["border-left"] = true;
whiteList["border-left-color"] = true;
whiteList["border-left-style"] = true;
whiteList["border-left-width"] = true;
whiteList["border-radius"] = true;
whiteList["border-right"] = true;
whiteList["border-right-color"] = true;
whiteList["border-right-style"] = true;
whiteList["border-right-width"] = true;
whiteList["border-spacing"] = true;
whiteList["border-style"] = true;
whiteList["border-top"] = true;
whiteList["border-top-color"] = true;
whiteList["border-top-left-radius"] = true;
whiteList["border-top-right-radius"] = true;
whiteList["border-top-style"] = true;
whiteList["border-top-width"] = true;
whiteList["border-width"] = true;
whiteList["bottom"] = false;
whiteList["box-decoration-break"] = true;
whiteList["box-shadow"] = true;
whiteList["box-sizing"] = true;
whiteList["box-snap"] = true;
whiteList["box-suppress"] = true;
whiteList["break-after"] = true;
whiteList["break-before"] = true;
whiteList["break-inside"] = true;
whiteList["caption-side"] = false;
whiteList["chains"] = false;
whiteList["clear"] = true;
whiteList["clip"] = false;
whiteList["clip-path"] = false;
whiteList["clip-rule"] = false;
whiteList["color"] = true;
whiteList["color-interpolation-filters"] = true;
whiteList["column-count"] = false;
whiteList["column-fill"] = false;
whiteList["column-gap"] = false;
whiteList["column-rule"] = false;
whiteList["column-rule-color"] = false;
whiteList["column-rule-style"] = false;
whiteList["column-rule-width"] = false;
whiteList["column-span"] = false;
whiteList["column-width"] = false;
whiteList["columns"] = false;
whiteList["contain"] = false;
whiteList["content"] = false;
whiteList["counter-increment"] = false;
whiteList["counter-reset"] = false;
whiteList["counter-set"] = false;
whiteList["crop"] = false;
whiteList["cue"] = false;
whiteList["cue-after"] = false;
whiteList["cue-before"] = false;
whiteList["cursor"] = false;
whiteList["direction"] = false;
whiteList["display"] = true;
whiteList["display-inside"] = true;
whiteList["display-list"] = true;
whiteList["display-outside"] = true;
whiteList["dominant-baseline"] = false;
whiteList["elevation"] = false;
whiteList["empty-cells"] = false;
whiteList["filter"] = false;
whiteList["flex"] = false;
whiteList["flex-basis"] = false;
whiteList["flex-direction"] = false;
whiteList["flex-flow"] = false;
whiteList["flex-grow"] = false;
whiteList["flex-shrink"] = false;
whiteList["flex-wrap"] = false;
whiteList["float"] = false;
whiteList["float-offset"] = false;
whiteList["flood-color"] = false;
whiteList["flood-opacity"] = false;
whiteList["flow-from"] = false;
whiteList["flow-into"] = false;
whiteList["font"] = true;
whiteList["font-family"] = true;
whiteList["font-feature-settings"] = true;
whiteList["font-kerning"] = true;
whiteList["font-language-override"] = true;
whiteList["font-size"] = true;
whiteList["font-size-adjust"] = true;
whiteList["font-stretch"] = true;
whiteList["font-style"] = true;
whiteList["font-synthesis"] = true;
whiteList["font-variant"] = true;
whiteList["font-variant-alternates"] = true;
whiteList["font-variant-caps"] = true;
whiteList["font-variant-east-asian"] = true;
whiteList["font-variant-ligatures"] = true;
whiteList["font-variant-numeric"] = true;
whiteList["font-variant-position"] = true;
whiteList["font-weight"] = true;
whiteList["grid"] = false;
whiteList["grid-area"] = false;
whiteList["grid-auto-columns"] = false;
whiteList["grid-auto-flow"] = false;
whiteList["grid-auto-rows"] = false;
whiteList["grid-column"] = false;
whiteList["grid-column-end"] = false;
whiteList["grid-column-start"] = false;
whiteList["grid-row"] = false;
whiteList["grid-row-end"] = false;
whiteList["grid-row-start"] = false;
whiteList["grid-template"] = false;
whiteList["grid-template-areas"] = false;
whiteList["grid-template-columns"] = false;
whiteList["grid-template-rows"] = false;
whiteList["hanging-punctuation"] = false;
whiteList["height"] = true;
whiteList["hyphens"] = false;
whiteList["icon"] = false;
whiteList["image-orientation"] = false;
whiteList["image-resolution"] = false;
whiteList["ime-mode"] = false;
whiteList["initial-letters"] = false;
whiteList["inline-box-align"] = false;
whiteList["justify-content"] = false;
whiteList["justify-items"] = false;
whiteList["justify-self"] = false;
whiteList["left"] = false;
whiteList["letter-spacing"] = true;
whiteList["lighting-color"] = true;
whiteList["line-box-contain"] = false;
whiteList["line-break"] = false;
whiteList["line-grid"] = false;
whiteList["line-height"] = false;
whiteList["line-snap"] = false;
whiteList["line-stacking"] = false;
whiteList["line-stacking-ruby"] = false;
whiteList["line-stacking-shift"] = false;
whiteList["line-stacking-strategy"] = false;
whiteList["list-style"] = true;
whiteList["list-style-image"] = true;
whiteList["list-style-position"] = true;
whiteList["list-style-type"] = true;
whiteList["margin"] = true;
whiteList["margin-bottom"] = true;
whiteList["margin-left"] = true;
whiteList["margin-right"] = true;
whiteList["margin-top"] = true;
whiteList["marker-offset"] = false;
whiteList["marker-side"] = false;
whiteList["marks"] = false;
whiteList["mask"] = false;
whiteList["mask-box"] = false;
whiteList["mask-box-outset"] = false;
whiteList["mask-box-repeat"] = false;
whiteList["mask-box-slice"] = false;
whiteList["mask-box-source"] = false;
whiteList["mask-box-width"] = false;
whiteList["mask-clip"] = false;
whiteList["mask-image"] = false;
whiteList["mask-origin"] = false;
whiteList["mask-position"] = false;
whiteList["mask-repeat"] = false;
whiteList["mask-size"] = false;
whiteList["mask-source-type"] = false;
whiteList["mask-type"] = false;
whiteList["max-height"] = true;
whiteList["max-lines"] = false;
whiteList["max-width"] = true;
whiteList["min-height"] = true;
whiteList["min-width"] = true;
whiteList["move-to"] = false;
whiteList["nav-down"] = false;
whiteList["nav-index"] = false;
whiteList["nav-left"] = false;
whiteList["nav-right"] = false;
whiteList["nav-up"] = false;
whiteList["object-fit"] = false;
whiteList["object-position"] = false;
whiteList["opacity"] = false;
whiteList["order"] = false;
whiteList["orphans"] = false;
whiteList["outline"] = false;
whiteList["outline-color"] = false;
whiteList["outline-offset"] = false;
whiteList["outline-style"] = false;
whiteList["outline-width"] = false;
whiteList["overflow"] = false;
whiteList["overflow-wrap"] = false;
whiteList["overflow-x"] = false;
whiteList["overflow-y"] = false;
whiteList["padding"] = true;
whiteList["padding-bottom"] = true;
whiteList["padding-left"] = true;
whiteList["padding-right"] = true;
whiteList["padding-top"] = true;
whiteList["page"] = false;
whiteList["page-break-after"] = false;
whiteList["page-break-before"] = false;
whiteList["page-break-inside"] = false;
whiteList["page-policy"] = false;
whiteList["pause"] = false;
whiteList["pause-after"] = false;
whiteList["pause-before"] = false;
whiteList["perspective"] = false;
whiteList["perspective-origin"] = false;
whiteList["pitch"] = false;
whiteList["pitch-range"] = false;
whiteList["play-during"] = false;
whiteList["position"] = false;
whiteList["presentation-level"] = false;
whiteList["quotes"] = false;
whiteList["region-fragment"] = false;
whiteList["resize"] = false;
whiteList["rest"] = false;
whiteList["rest-after"] = false;
whiteList["rest-before"] = false;
whiteList["richness"] = false;
whiteList["right"] = false;
whiteList["rotation"] = false;
whiteList["rotation-point"] = false;
whiteList["ruby-align"] = false;
whiteList["ruby-merge"] = false;
whiteList["ruby-position"] = false;
whiteList["shape-image-threshold"] = false;
whiteList["shape-outside"] = false;
whiteList["shape-margin"] = false;
whiteList["size"] = false;
whiteList["speak"] = false;
whiteList["speak-as"] = false;
whiteList["speak-header"] = false;
whiteList["speak-numeral"] = false;
whiteList["speak-punctuation"] = false;
whiteList["speech-rate"] = false;
whiteList["stress"] = false;
whiteList["string-set"] = false;
whiteList["tab-size"] = false;
whiteList["table-layout"] = false;
whiteList["text-align"] = true;
whiteList["text-align-last"] = true;
whiteList["text-combine-upright"] = true;
whiteList["text-decoration"] = true;
whiteList["text-decoration-color"] = true;
whiteList["text-decoration-line"] = true;
whiteList["text-decoration-skip"] = true;
whiteList["text-decoration-style"] = true;
whiteList["text-emphasis"] = true;
whiteList["text-emphasis-color"] = true;
whiteList["text-emphasis-position"] = true;
whiteList["text-emphasis-style"] = true;
whiteList["text-height"] = true;
whiteList["text-indent"] = true;
whiteList["text-justify"] = true;
whiteList["text-orientation"] = true;
whiteList["text-overflow"] = true;
whiteList["text-shadow"] = true;
whiteList["text-space-collapse"] = true;
whiteList["text-transform"] = true;
whiteList["text-underline-position"] = true;
whiteList["text-wrap"] = true;
whiteList["top"] = false;
whiteList["transform"] = false;
whiteList["transform-origin"] = false;
whiteList["transform-style"] = false;
whiteList["transition"] = false;
whiteList["transition-delay"] = false;
whiteList["transition-duration"] = false;
whiteList["transition-property"] = false;
whiteList["transition-timing-function"] = false;
whiteList["unicode-bidi"] = false;
whiteList["vertical-align"] = false;
whiteList["visibility"] = false;
whiteList["voice-balance"] = false;
whiteList["voice-duration"] = false;
whiteList["voice-family"] = false;
whiteList["voice-pitch"] = false;
whiteList["voice-range"] = false;
whiteList["voice-rate"] = false;
whiteList["voice-stress"] = false;
whiteList["voice-volume"] = false;
whiteList["volume"] = false;
whiteList["white-space"] = false;
whiteList["widows"] = false;
whiteList["width"] = true;
whiteList["will-change"] = false;
whiteList["word-break"] = true;
whiteList["word-spacing"] = true;
whiteList["word-wrap"] = true;
whiteList["wrap-flow"] = false;
whiteList["wrap-through"] = false;
whiteList["writing-mode"] = false;
whiteList["z-index"] = false;
return whiteList;
}
function onAttr(name, value, options) {
}
function onIgnoreAttr(name, value, options) {
}
var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
function safeAttrValue(name, value) {
if (REGEXP_URL_JAVASCRIPT.test(value)) return "";
return value;
}
exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;
}
});
var require_util = __commonJS({
"../.yarn/berry/cache/cssfilter-npm-0.0.10-28e06ce546-10c0.zip/node_modules/cssfilter/lib/util.js"(exports, module) {
module.exports = {
indexOf: function(arr, item) {
var i, j;
if (Array.prototype.indexOf) {
return arr.indexOf(item);
}
for (i = 0, j = arr.length; i < j; i++) {
if (arr[i] === item) {
return i;
}
}
return -1;
},
forEach: function(arr, fn, scope) {
var i, j;
if (Array.prototype.forEach) {
return arr.forEach(fn, scope);
}
for (i = 0, j = arr.length; i < j; i++) {
fn.call(scope, arr[i], i, arr);
}
},
trim: function(str) {
if (String.prototype.trim) {
return str.trim();
}
return str.replace(/(^\s*)|(\s*$)/g, "");
},
trimRight: function(str) {
if (String.prototype.trimRight) {
return str.trimRight();
}
return str.replace(/(\s*$)/g, "");
}
};
}
});
var require_parser = __commonJS({
"../.yarn/berry/cache/cssfilter-npm-0.0.10-28e06ce546-10c0.zip/node_modules/cssfilter/lib/parser.js"(exports, module) {
var _ = require_util();
function parseStyle(css, onAttr) {
css = _.trimRight(css);
if (css[css.length - 1] !== ";") css += ";";
var cssLength = css.length;
var isParenthesisOpen = false;
var lastPos = 0;
var i = 0;
var retCSS = "";
function addNewAttr() {
if (!isParenthesisOpen) {
var source = _.trim(css.slice(lastPos, i));
var j2 = source.indexOf(":");
if (j2 !== -1) {
var name = _.trim(source.slice(0, j2));
var value = _.trim(source.slice(j2 + 1));
if (name) {
var ret = onAttr(lastPos, retCSS.length, name, value, source);
if (ret) retCSS += ret + "; ";
}
}
}
lastPos = i + 1;
}
for (; i < cssLength; i++) {
var c = css[i];
if (c === "/" && css[i + 1] === "*") {
var j = css.indexOf("*/", i + 2);
if (j === -1) break;
i = j + 1;
lastPos = i + 1;
isParenthesisOpen = false;
} else if (c === "(") {
isParenthesisOpen = true;
} else if (c === ")") {
isParenthesisOpen = false;
} else if (c === ";") {
if (isParenthesisOpen) {
} else {
addNewAttr();
}
} else if (c === "\n") {
addNewAttr();
}
}
return _.trim(retCSS);
}
module.exports = parseStyle;
}
});
var require_css = __commonJS({
"../.yarn/berry/cache/cssfilter-npm-0.0.10-28e06ce546-10c0.zip/node_modules/cssfilter/lib/css.js"(exports, module) {
var DEFAULT = require_default();
var parseStyle = require_parser();
var _ = require_util();
function isNull(obj) {
return obj === void 0 || obj === null;
}
function shallowCopyObject(obj) {
var ret = {};
for (var i in obj) {
ret[i] = obj[i];
}
return ret;
}
function FilterCSS(options) {
options = shallowCopyObject(options || {});
options.whiteList = options.whiteList || DEFAULT.whiteList;
options.onAttr = options.onAttr || DEFAULT.onAttr;
options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
this.options = options;
}
FilterCSS.prototype.process = function(css) {
css = css || "";
css = css.toString();
if (!css) return "";
var me = this;
var options = me.options;
var whiteList = options.whiteList;
var onAttr = options.onAttr;
var onIgnoreAttr = options.onIgnoreAttr;
var safeAttrValue = options.safeAttrValue;
var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
var check = whiteList[name];
var isWhite = false;
if (check === true) isWhite = check;
else if (typeof check === "function") isWhite = check(value);
else if (check instanceof RegExp) isWhite = check.test(value);
if (isWhite !== true) isWhite = false;
value = safeAttrValue(name, value);
if (!value) return;
var opts = {
position,
sourcePosition,
source,
isWhite
};
if (isWhite) {
var ret = onAttr(name, value, opts);
if (isNull(ret)) {
return name + ":" + value;
} else {
return ret;
}
} else {
var ret = onIgnoreAttr(name, value, opts);
if (!isNull(ret)) {
return ret;
}
}
});
return retCSS;
};
module.exports = FilterCSS;
}
});
var require_lib = __commonJS({
"../.yarn/berry/cache/cssfilter-npm-0.0.10-28e06ce546-10c0.zip/node_modules/cssfilter/lib/index.js"(exports, module) {
var DEFAULT = require_default();
var FilterCSS = require_css();
function filterCSS(html, options) {
var xss = new FilterCSS(options);
return xss.process(html);
}
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (i in DEFAULT) exports[i] = DEFAULT[i];
var i;
if (typeof window !== "undefined") {
window.filterCSS = module.exports;
}
}
});
var require_util2 = __commonJS({
"../.yarn/berry/cache/xss-npm-1.0.15-a70a62f810-10c0.zip/node_modules/xss/lib/util.js"(exports, module) {
module.exports = {
indexOf: function(arr, item) {
var i, j;
if (Array.prototype.indexOf) {
return arr.indexOf(item);
}
for (i = 0, j = arr.length; i < j; i++) {
if (arr[i] === item) {
return i;
}
}
return -1;
},
forEach: function(arr, fn, scope) {
var i, j;
if (Array.prototype.forEach) {
return arr.forEach(fn, scope);
}
for (i = 0, j = arr.length; i < j; i++) {
fn.call(scope, arr[i], i, arr);
}
},
trim: function(str) {
if (String.prototype.trim) {
return str.trim();
}
return str.replace(/(^\s*)|(\s*$)/g, "");
},
spaceIndex: function(str) {
var reg = /\s|\n|\t/;
var match = reg.exec(str);
return match ? match.index : -1;
}
};
}
});
var require_default2 = __commonJS({
"../.yarn/berry/cache/xss-npm-1.0.15-a70a62f810-10c0.zip/node_modules/xss/lib/default.js"(exports) {
var FilterCSS = require_lib().FilterCSS;
var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
var _ = require_util2();
function getDefaultWhiteList() {
return {
a: ["target", "href", "title"],
abbr: ["title"],
address: [],
area: ["shape", "coords", "href", "alt"],
article: [],
aside: [],
audio: [
"autoplay",
"controls",
"crossorigin",
"loop",
"muted",
"preload",
"src"
],
b: [],
bdi: ["dir"],
bdo: ["dir"],
big: [],
blockquote: ["cite"],
br: [],
caption: [],
center: [],
cite: [],
code: [],
col: ["align", "valign", "span", "width"],
colgroup: ["align", "valign", "span", "width"],
dd: [],
del: ["datetime"],
details: ["open"],
div: [],
dl: [],
dt: [],
em: [],
figcaption: [],
figure: [],
font: ["color", "size", "face"],
footer: [],
h1: [],
h2: [],
h3: [],
h4: [],
h5: [],
h6: [],
header: [],
hr: [],
i: [],
img: ["src", "alt", "title", "width", "height", "loading"],
ins: ["datetime"],
kbd: [],
li: [],
mark: [],
nav: [],
ol: [],
p: [],
pre: [],
s: [],
section: [],
small: [],
span: [],
sub: [],
summary: [],
sup: [],
strong: [],
strike: [],
table: ["width", "border", "align", "valign"],
tbody: ["align", "valign"],
td: ["width", "rowspan", "colspan", "align", "valign"],
tfoot: ["align", "valign"],
th: ["width", "rowspan", "colspan", "align", "valign"],
thead: ["align", "valign"],
tr: ["rowspan", "align", "valign"],
tt: [],
u: [],
ul: [],
video: [
"autoplay",
"controls",
"crossorigin",
"loop",
"muted",
"playsinline",
"poster",
"preload",
"src",
"height",
"width"
]
};
}
var defaultCSSFilter = new FilterCSS();
function onTag(tag, html, options) {
}
function onIgnoreTag(tag, html, options) {
}
function onTagAttr(tag, name, value) {
}
function onIgnoreTagAttr(tag, name, value) {
}
function escapeHtml(html) {
return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
function safeAttrValue(tag, name, value, cssFilter) {
value = friendlyAttrValue(value);
if (name === "href" || name === "src") {
value = _.trim(value);
if (value === "#") return "#";
if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
return "";
}
} else if (name === "background") {
REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
return "";
}
} else if (name === "style") {
REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
return "";
}
REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
return "";
}
}
if (cssFilter !== false) {
cssFilter = cssFilter || defaultCSSFilter;
value = cssFilter.process(value);
}
}
value = escapeAttrValue(value);
return value;
}
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
function escapeQuote(str) {
return str.replace(REGEXP_QUOTE, "&quot;");
}
function unescapeQuote(str) {
return str.replace(REGEXP_QUOTE_2, '"');
}
function escapeHtmlEntities(str) {
return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
});
}
function escapeDangerHtml5Entities(str) {
return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
function clearNonPrintableCharacter(str) {
var str2 = "";
for (var i = 0, len = str.length; i < len; i++) {
str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
}
return _.trim(str2);
}
function friendlyAttrValue(str) {
str = unescapeQuote(str);
str = escapeHtmlEntities(str);
str = escapeDangerHtml5Entities(str);
str = clearNonPrintableCharacter(str);
return str;
}
function escapeAttrValue(str) {
str = escapeQuote(str);
str = escapeHtml(str);
return str;
}
function onIgnoreTagStripAll() {
return "";
}
function StripTagBody(tags, next) {
if (typeof next !== "function") {
next = function() {
};
}
var isRemoveAllTag = !Array.isArray(tags);
function isRemoveTag(tag) {
if (isRemoveAllTag) return true;
return _.indexOf(tags, tag) !== -1;
}
var removeList = [];
var posStart = false;
return {
onIgnoreTag: function(tag, html, options) {
if (isRemoveTag(tag)) {
if (options.isClosing) {
var ret = "[/removed]";
var end = options.position + ret.length;
removeList.push([
posStart !== false ? posStart : options.position,
end
]);
posStart = false;
return ret;
} else {
if (!posStart) {
posStart = options.position;
}
return "[removed]";
}
} else {
return next(tag, html, options);
}
},
remove: function(html) {
var rethtml = "";
var lastPos = 0;
_.forEach(removeList, function(pos) {
rethtml += html.slice(lastPos, pos[0]);
lastPos = pos[1];
});
rethtml += html.slice(lastPos);
return rethtml;
}
};
}
function stripCommentTag(html) {
var retHtml = "";
var lastPos = 0;
while (lastPos < html.length) {
var i = html.indexOf("<!--", lastPos);
if (i === -1) {
retHtml += html.slice(lastPos);
break;
}
retHtml += html.slice(lastPos, i);
var j = html.indexOf("-->", i);
if (j === -1) {
break;
}
lastPos = j + 3;
}
return retHtml;
}
function stripBlankChar(html) {
var chars = html.split("");
chars = chars.filter(function(char) {
var c = char.charCodeAt(0);
if (c === 127) return false;
if (c <= 31) {
if (c === 10 || c === 13) return true;
return false;
}
return true;
});
return chars.join("");
}
exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.attributeWrapSign = '"';
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
}
});
var require_parser2 = __commonJS({
"../.yarn/berry/cache/xss-npm-1.0.15-a70a62f810-10c0.zip/node_modules/xss/lib/parser.js"(exports) {
var _ = require_util2();
function getTagName(html) {
var i = _.spaceIndex(html);
var tagName;
if (i === -1) {
tagName = html.slice(1, -1);
} else {
tagName = html.slice(1, i + 1);
}
tagName = _.trim(tagName).toLowerCase();
if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
return tagName;
}
function isClosing(html) {
return html.slice(0, 2) === "</";
}
function parseTag(html, onTag, escapeHtml) {
"use strict";
var rethtml = "";
var lastPos = 0;
var tagStart = false;
var quoteStart = false;
var currentPos = 0;
var len = html.length;
var currentTagName = "";
var currentHtml = "";
chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
var c = html.charAt(currentPos);
if (tagStart === false) {
if (c === "<") {
tagStart = currentPos;
continue;
}
} else {
if (quoteStart === false) {
if (c === "<") {
rethtml += escapeHtml(html.slice(lastPos, currentPos));
tagStart = currentPos;
lastPos = currentPos;
continue;
}
if (c === ">" || currentPos === len - 1) {
rethtml += escapeHtml(html.slice(lastPos, tagStart));
currentHtml = html.slice(tagStart, currentPos + 1);
currentTagName = getTagName(currentHtml);
rethtml += onTag(
tagStart,
rethtml.length,
currentTagName,
currentHtml,
isClosing(currentHtml)
);
lastPos = currentPos + 1;
tagStart = false;
continue;
}
if (c === '"' || c === "'") {
var i = 1;
var ic = html.charAt(currentPos - i);
while (ic.trim() === "" || ic === "=") {
if (ic === "=") {
quoteStart = c;
continue chariterator;
}
ic = html.charAt(currentPos - ++i);
}
}
} else {
if (c === quoteStart) {
quoteStart = false;
continue;
}
}
}
}
if (lastPos < len) {
rethtml += escapeHtml(html.substr(lastPos));
}
return rethtml;
}
var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
function parseAttr(html, onAttr) {
"use strict";
var lastPos = 0;
var lastMarkPos = 0;
var retAttrs = [];
var tmpName = false;
var len = html.length;
function addAttr(name, value) {
name = _.trim(name);
name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
if (name.length < 1) return;
var ret = onAttr(name, value || "");
if (ret) retAttrs.push(ret);
}
for (var i = 0; i < len; i++) {
var c = html.charAt(i);
var v, j;
if (tmpName === false && c === "=") {
tmpName = html.slice(lastPos, i);
lastPos = i + 1;
lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
continue;
}
if (tmpName !== false) {
if (i === lastMarkPos) {
j = html.indexOf(c, i + 1);
if (j === -1) {
break;
} else {
v = _.trim(html.slice(lastMarkPos + 1, j));
addAttr(tmpName, v);
tmpName = false;
i = j;
lastPos = i + 1;
continue;
}
}
}
if (/\s|\n|\t/.test(c)) {
html = html.replace(/\s|\n|\t/g, " ");
if (tmpName === false) {
j = findNextEqual(html, i);
if (j === -1) {
v = _.trim(html.slice(lastPos, i));
addAttr(v);
tmpName = false;
lastPos = i + 1;
continue;
} else {
i = j - 1;
continue;
}
} else {
j = findBeforeEqual(html, i - 1);
if (j === -1) {
v = _.trim(html.slice(lastPos, i));
v = stripQuoteWrap(v);
addAttr(tmpName, v);
tmpName = false;
lastPos = i + 1;
continue;
} else {
continue;
}
}
}
}
if (lastPos < html.length) {
if (tmpName === false) {
addAttr(html.slice(lastPos));
} else {
addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
}
}
return _.trim(retAttrs.join(" "));
}
function findNextEqual(str, i) {
for (; i < str.length; i++) {
var c = str[i];
if (c === " ") continue;
if (c === "=") return i;
return -1;
}
}
function findNextQuotationMark(str, i) {
for (; i < str.length; i++) {
var c = str[i];
if (c === " ") continue;
if (c === "'" || c === '"') return i;
return -1;
}
}
function findBeforeEqual(str, i) {
for (; i > 0; i--) {
var c = str[i];
if (c === " ") continue;
if (c === "=") return i;
return -1;
}
}
function isQuoteWrapString(text) {
if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
return true;
} else {
return false;
}
}
function stripQuoteWrap(text) {
if (isQuoteWrapString(text)) {
return text.substr(1, text.length - 2);
} else {
return text;
}
}
exports.parseTag = parseTag;
exports.parseAttr = parseAttr;
}
});
var require_xss = __commonJS({
"../.yarn/berry/cache/xss-npm-1.0.15-a70a62f810-10c0.zip/node_modules/xss/lib/xss.js"(exports, module) {
var FilterCSS = require_lib().FilterCSS;
var DEFAULT = require_default2();
var parser = require_parser2();
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = require_util2();
function isNull(obj) {
return obj === void 0 || obj === null;
}
function getAttrs(html) {
var i = _.spaceIndex(html);
if (i === -1) {
return {
html: "",
closing: html[html.length - 2] === "/"
};
}
html = _.trim(html.slice(i + 1, -1));
var isClosing = html[html.length - 1] === "/";
if (isClosing) html = _.trim(html.slice(0, -1));
return {
html,
closing: isClosing
};
}
function shallowCopyObject(obj) {
var ret = {};
for (var i in obj) {
ret[i] = obj[i];
}
return ret;
}
function keysToLowerCase(obj) {
var ret = {};
for (var i in obj) {
if (Array.isArray(obj[i])) {
ret[i.toLowerCase()] = obj[i].map(function(item) {
return item.toLowerCase();
});
} else {
ret[i.toLowerCase()] = obj[i];
}
}
return ret;
}
function FilterXSS(options) {
options = shallowCopyObject(options || {});
if (options.stripIgnoreTag) {
if (options.onIgnoreTag) {
console.error(
'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
);
}
options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
}
if (options.whiteList || options.allowList) {
options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
} else {
options.whiteList = DEFAULT.whiteList;
}
this.attributeWrapSign = options.singleQuotedAttributeValue === true ? "'" : DEFAULT.attributeWrapSign;
options.onTag = options.onTag || DEFAULT.onTag;
options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
this.options = options;
if (options.css === false) {
this.cssFilter = false;
} else {
options.css = options.css || {};
this.cssFilter = new FilterCSS(options.css);
}
}
FilterXSS.prototype.process = function(html) {
html = html || "";
html = html.toString();
if (!html) return "";
var me = this;
var options = me.options;
var whiteList = options.whiteList;
var onTag = options.onTag;
var onIgnoreTag = options.onIgnoreTag;
var onTagAttr = options.onTagAttr;
var onIgnoreTagAttr = options.onIgnoreTagAttr;
var safeAttrValue = options.safeAttrValue;
var escapeHtml = options.escapeHtml;
var attributeWrapSign = me.attributeWrapSign;
var cssFilter = me.cssFilter;
if (options.stripBlankChar) {
html = DEFAULT.stripBlankChar(html);
}
if (!options.allowCommentTag) {
html = DEFAULT.stripCommentTag(html);
}
var stripIgnoreTagBody = false;
if (options.stripIgnoreTagBody) {
stripIgnoreTagBody = DEFAULT.StripTagBody(
options.stripIgnoreTagBody,
onIgnoreTag
);
onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
}
var retHtml = parseTag(
html,
function(sourcePosition, position, tag, html2, isClosing) {
var info = {
sourcePosition,
position,
isClosing,
isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
};
var ret = onTag(tag, html2, info);
if (!isNull(ret)) return ret;
if (info.isWhite) {
if (info.isClosing) {
return "</" + tag + ">";
}
var attrs = getAttrs(html2);
var whiteAttrList = whiteList[tag];
var attrsHtml = parseAttr(attrs.html, function(name, value) {
var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
if (!isNull(ret2)) return ret2;
if (isWhiteAttr) {
value = safeAttrValue(tag, name, value, cssFilter);
if (value) {
return name + "=" + attributeWrapSign + value + attributeWrapSign;
} else {
return name;
}
} else {
ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
if (!isNull(ret2)) return ret2;
return;
}
});
html2 = "<" + tag;
if (attrsHtml) html2 += " " + attrsHtml;
if (attrs.closing) html2 += " /";
html2 += ">";
return html2;
} else {
ret = onIgnoreTag(tag, html2, info);
if (!isNull(ret)) return ret;
return escapeHtml(html2);
}
},
escapeHtml
);
if (stripIgnoreTagBody) {
retHtml = stripIgnoreTagBody.remove(retHtml);
}
return retHtml;
};
module.exports = FilterXSS;
}
});
var require_lib2 = __commonJS({
"../.yarn/berry/cache/xss-npm-1.0.15-a70a62f810-10c0.zip/node_modules/xss/lib/index.js"(exports, module) {
var DEFAULT = require_default2();
var parser = require_parser2();
var FilterXSS = require_xss();
function filterXSS(html, options) {
var xss = new FilterXSS(options);
return xss.process(html);
}
exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;
(function() {
for (var i in DEFAULT) {
exports[i] = DEFAULT[i];
}
for (var j in parser) {
exports[j] = parser[j];
}
})();
if (typeof window !== "undefined") {
window.filterXSS = module.exports;
}
function isWorkerEnv() {
return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
}
if (isWorkerEnv()) {
self.filterXSS = module.exports;
}
}
});
var import_moment = __toESM(require_moment(), 1);
var vis_util_exports = {};
__export(vis_util_exports, {
Activator: () => Activator,
Alea: () => Alea,
ColorPicker: () => ColorPicker2,
Configurator: () => Configurator2,
DELETE: () => DELETE,
HSVToHex: () => HSVToHex,
HSVToRGB: () => HSVToRGB,
Hammer: () => Hammer2,
Popup: () => Popup2,
RGBToHSV: () => RGBToHSV,
RGBToHex: () => RGBToHex,
VALIDATOR_PRINT_STYLE: () => VALIDATOR_PRINT_STYLE,
Validator: () => Validator2,
addClassName: () => addClassName,
addCssText: () => addCssText,
binarySearchCustom: () => binarySearchCustom,
binarySearchValue: () => binarySearchValue,
bridgeObject: () => bridgeObject,
copyAndExtendArray: () => copyAndExtendArray,
copyArray: () => copyArray,
deepExtend: () => deepExtend,
deepObjectAssign: () => deepObjectAssign,
easingFunctions: () => easingFunctions,
equalArray: () => equalArray,
extend: () => extend2,
fillIfDefined: () => fillIfDefined,
forEach: () => forEach,
getAbsoluteLeft: () => getAbsoluteLeft,
getAbsoluteRight: () => getAbsoluteRight,
getAbsoluteTop: () => getAbsoluteTop,
getScrollBarWidth: () => getScrollBarWidth,
getTarget: () => getTarget,
getType: () => getType,
hasParent: () => hasParent2,
hexToHSV: () => hexToHSV,
hexToRGB: () => hexToRGB,
insertSort: () => insertSort,
isDate: () => isDate,
isNumber: () => isNumber,
isObject: () => isObject,
isString: () => isString,
isValidHex: () => isValidHex,
isValidRGB: () => isValidRGB,
isValidRGBA: () => isValidRGBA,
mergeOptions: () => mergeOptions,
option: () => option,
overrideOpacity: () => overrideOpacity,
parseColor: () => parseColor,
preventDefault: () => preventDefault,
pureDeepObjectAssign: () => pureDeepObjectAssign,
recursiveDOMDelete: () => recursiveDOMDelete,
removeClassName: () => removeClassName,
removeCssText: () => removeCssText,
selectiveBridgeObject: () => selectiveBridgeObject,
selectiveDeepExtend: () => selectiveDeepExtend,
selectiveExtend: () => selectiveExtend,
selectiveNotDeepExtend: () => selectiveNotDeepExtend,
throttle: () => throttle,
toArray: () => toArray2,
topMost: () => topMost,
updateProperty: () => updateProperty
});
var import_component_emitter = __toESM(require_component_emitter(), 1);
function _extends() {
_extends = Object.assign || function(target) {
for (var i = 1; i < arguments.length; i++) {
var source = arguments[i];
for (var key in source) {
if (Object.prototype.hasOwnProperty.call(source, key)) {
target[key] = source[key];
}
}
}
return target;
};
return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
subClass.prototype = Object.create(superClass.prototype);
subClass.prototype.constructor = subClass;
subClass.__proto__ = superClass;
}
function _assertThisInitialized(self2) {
if (self2 === void 0) {
throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
}
return self2;
}
var assign;
if (typeof Object.assign !== "function") {
assign = function assign2(target) {
if (target === void 0 || target === null) {
throw new TypeError("Cannot convert undefined or null to object");
}
var output = Object(target);
for (var index = 1; index < arguments.length; index++) {
var source = arguments[index];
if (source !== void 0 && source !== null) {
for (var nextKey in source) {
if (source.hasOwnProperty(nextKey)) {
output[nextKey] = source[nextKey];
}
}
}
}
return output;
};
} else {
assign = Object.assign;
}
var assign$1 = assign;
var VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
var TEST_ELEMENT = typeof document === "undefined" ? {
style: {}
} : document.createElement("div");
var TYPE_FUNCTION = "function";
var round = Math.round;
var abs = Math.abs;
var now = Date.now;
function prefixed(obj, property) {
var prefix;
var prop;
var camelProp = property[0].toUpperCase() + property.slice(1);
var i = 0;
while (i < VENDOR_PREFIXES.length) {
prefix = VENDOR_PREFIXES[i];
prop = prefix ? prefix + camelProp : property;
if (prop in obj) {
return prop;
}
i++;
}
return void 0;
}
var win;
if (typeof window === "undefined") {
win = {};
} else {
win = window;
}
var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== void 0;
function getTouchActionProps() {
if (!NATIVE_TOUCH_ACTION) {
return false;
}
var touchMap = {};
var cssSupports = win.CSS && win.CSS.supports;
["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
return touchMap[val] = cssSupports ? win.CSS.supports("touch-action", val) : true;
});
return touchMap;
}
var TOUCH_ACTION_COMPUTE = "compute";
var TOUCH_ACTION_AUTO = "auto";
var TOUCH_ACTION_MANIPULATION = "manipulation";
var TOUCH_ACTION_NONE = "none";
var TOUCH_ACTION_PAN_X = "pan-x";
var TOUCH_ACTION_PAN_Y = "pan-y";
var TOUCH_ACTION_MAP = getTouchActionProps();
var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = "ontouchstart" in win;
var SUPPORT_POINTER_EVENTS = prefixed(win, "PointerEvent") !== void 0;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
var INPUT_TYPE_TOUCH = "touch";
var INPUT_TYPE_PEN = "pen";
var INPUT_TYPE_MOUSE = "mouse";
var INPUT_TYPE_KINECT = "kinect";
var COMPUTE_INTERVAL = 25;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
var PROPS_XY = ["x", "y"];
var PROPS_CLIENT_XY = ["clientX", "clientY"];
function each(obj, iterator, context) {
var i;
if (!obj) {
return;
}
if (obj.forEach) {
obj.forEach(iterator, context);
} else if (obj.length !== void 0) {
i = 0;
while (i < obj.length) {
iterator.call(context, obj[i], i, obj);
i++;
}
} else {
for (i in obj) {
obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
}
}
}
function boolOrFn(val, args) {
if (typeof val === TYPE_FUNCTION) {
return val.apply(args ? args[0] || void 0 : void 0, args);
}
return val;
}
function inStr(str, find) {
return str.indexOf(find) > -1;
}
function cleanTouchActions(actions) {
if (inStr(actions, TOUCH_ACTION_NONE)) {
return TOUCH_ACTION_NONE;
}
var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
if (hasPanX && hasPanY) {
return TOUCH_ACTION_NONE;
}
if (hasPanX || hasPanY) {
return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
}
if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
return TOUCH_ACTION_MANIPULATION;
}
return TOUCH_ACTION_AUTO;
}
var TouchAction = /* @__PURE__ */ function() {
function TouchAction2(manager, value) {
this.manager = manager;
this.set(value);
}
var _proto = TouchAction2.prototype;
_proto.set = function set(value) {
if (value === TOUCH_ACTION_COMPUTE) {
value = this.compute();
}
if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
}
this.actions = value.toLowerCase().trim();
};
_proto.update = function update() {
this.set(this.manager.options.touchAction);
};
_proto.compute = function compute() {
var actions = [];
each(this.manager.recognizers, function(recognizer) {
if (boolOrFn(recognizer.options.enable, [recognizer])) {
actions = actions.concat(recognizer.getTouchAction());
}
});
return cleanTouchActions(actions.join(" "));
};
_proto.preventDefaults = function preventDefaults(input) {
var srcEvent = input.srcEvent;
var direction = input.offsetDirection;
if (this.manager.session.prevented) {
srcEvent.preventDefault();
return;
}
var actions = this.actions;
var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
if (hasNone) {
var isTapPointer = input.pointers.length === 1;
var isTapMovement = input.distance < 2;
var isTapTouchTime = input.deltaTime < 250;
if (isTapPointer && isTapMovement && isTapTouchTime) {
return;
}
}
if (hasPanX && hasPanY) {
return;
}
if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
return this.preventSrc(srcEvent);
}
};
_proto.preventSrc = function preventSrc(srcEvent) {
this.manager.session.prevented = true;
srcEvent.preventDefault();
};
return TouchAction2;
}();
function hasParent(node, parent) {
while (node) {
if (node === parent) {
return true;
}
node = node.parentNode;
}
return false;
}
function getCenter(pointers) {
var pointersLength = pointers.length;
if (pointersLength === 1) {
return {
x: round(pointers[0].clientX),
y: round(pointers[0].clientY)
};
}
var x = 0;
var y = 0;
var i = 0;
while (i < pointersLength) {
x += pointers[i].clientX;
y += pointers[i].clientY;
i++;
}
return {
x: round(x / pointersLength),
y: round(y / pointersLength)
};
}
function simpleCloneInputData(input) {
var pointers = [];
var i = 0;
while (i < input.pointers.length) {
pointers[i] = {
clientX: round(input.pointers[i].clientX),
clientY: round(input.pointers[i].clientY)
};
i++;
}
return {
timeStamp: now(),
pointers,
center: getCenter(pointers),
deltaX: input.deltaX,
deltaY: input.deltaY
};
}
function getDistance(p1, p2, props) {
if (!props) {
props = PROPS_XY;
}
var x = p2[props[0]] - p1[props[0]];
var y = p2[props[1]] - p1[props[1]];
return Math.sqrt(x * x + y * y);
}
function getAngle(p1, p2, props) {
if (!props) {
props = PROPS_XY;
}
var x = p2[props[0]] - p1[props[0]];
var y = p2[props[1]] - p1[props[1]];
return Math.atan2(y, x) * 180 / Math.PI;
}
function getDirection(x, y) {
if (x === y) {
return DIRECTION_NONE;
}
if (abs(x) >= abs(y)) {
return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
}
return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
function computeDeltaXY(session, input) {
var center = input.center;
var offset = session.offsetDelta || {};
var prevDelta = session.prevDelta || {};
var prevInput = session.prevInput || {};
if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
prevDelta = session.prevDelta = {
x: prevInput.deltaX || 0,
y: prevInput.deltaY || 0
};
offset = session.offsetDelta = {
x: center.x,
y: center.y
};
}
input.deltaX = prevDelta.x + (center.x - offset.x);
input.deltaY = prevDelta.y + (center.y - offset.y);
}
function getVelocity(deltaTime, x, y) {
return {
x: x / deltaTime || 0,
y: y / deltaTime || 0
};
}
function getScale(start, end) {
return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}
function getRotation(start, end) {
return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}
function computeIntervalInputData(session, input) {
var last = session.lastInterval || input;
var deltaTime = input.timeStamp - last.timeStamp;
var velocity;
var velocityX;
var velocityY;
var direction;
if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === void 0)) {
var deltaX = input.deltaX - last.deltaX;
var deltaY = input.deltaY - last.deltaY;
var v = getVelocity(deltaTime, deltaX, deltaY);
velocityX = v.x;
velocityY = v.y;
velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
direction = getDirection(deltaX, deltaY);
session.lastInterval = input;
} else {
velocity = last.velocity;
velocityX = last.velocityX;
velocityY = last.velocityY;
direction = last.direction;
}
input.velocity = velocity;
input.velocityX = velocityX;
input.velocityY = velocityY;
input.direction = direction;
}
function computeInputData(manager, input) {
var session = manager.session;
var pointers = input.pointers;
var pointersLength = pointers.length;
if (!session.firstInput) {
session.firstInput = simpleCloneInputData(input);
}
if (pointersLength > 1 && !session.firstMultiple) {
session.firstMultiple = simpleCloneInputData(input);
} else if (pointersLength === 1) {
session.firstMultiple = false;
}
var firstInput = session.firstInput, firstMultiple = session.firstMultiple;
var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
var center = input.center = getCenter(pointers);
input.timeStamp = now();
input.deltaTime = input.timeStamp - firstInput.timeStamp;
input.angle = getAngle(offsetCenter, center);
input.distance = getDistance(offsetCenter, center);
computeDeltaXY(session, input);
input.offsetDirection = getDirection(input.deltaX, input.deltaY);
var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
input.overallVelocityX = overallVelocity.x;
input.overallVelocityY = overallVelocity.y;
input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
computeIntervalInputData(session, input);
var target = manager.element;
var srcEvent = input.srcEvent;
var srcEventTarget;
if (srcEvent.composedPath) {
srcEventTarget = srcEvent.composedPath()[0];
} else if (srcEvent.path) {
srcEventTarget = srcEvent.path[0];
} else {
srcEventTarget = srcEvent.target;
}
if (hasParent(srcEventTarget, target)) {
target = srcEventTarget;
}
input.target = target;
}
function inputHandler(manager, eventType, input) {
var pointersLen = input.pointers.length;
var changedPointersLen = input.changedPointers.length;
var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
input.isFirst = !!isFirst;
input.isFinal = !!isFinal;
if (isFirst) {
manager.session = {};
}
input.eventType = eventType;
computeInputData(manager, input);
manager.emit("hammer.input", input);
manager.recognize(input);
manager.session.prevInput = input;
}
function splitStr(str) {
return str.trim().split(/\s+/g);
}
function addEventListeners(target, types, handler) {
each(splitStr(types), function(type) {
target.addEventListener(type, handler, false);
});
}
function removeEventListeners(target, types, handler) {
each(splitStr(types), function(type) {
target.removeEventListener(type, handler, false);
});
}
function getWindowForElement(element) {
var doc = element.ownerDocument || element;
return doc.defaultView || doc.parentWindow || window;
}
var Input = /* @__PURE__ */ function() {
function Input2(manager, callback) {
var self2 = this;
this.manager = manager;
this.callback = callback;
this.element = manager.element;
this.target = manager.options.inputTarget;
this.domHandler = function(ev) {
if (boolOrFn(manager.options.enable, [manager])) {
self2.handler(ev);
}
};
this.init();
}
var _proto = Input2.prototype;
_proto.handler = function handler() {
};
_proto.init = function init() {
this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
};
_proto.destroy = function destroy() {
this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
};
return Input2;
}();
function inArray(src, find, findByKey) {
if (src.indexOf && !findByKey) {
return src.indexOf(find);
} else {
var i = 0;
while (i < src.length) {
if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
return i;
}
i++;
}
return -1;
}
}
var POINTER_INPUT_MAP = {
pointerdown: INPUT_START,
pointermove: INPUT_MOVE,
pointerup: INPUT_END,
pointercancel: INPUT_CANCEL,
pointerout: INPUT_CANCEL
};
var IE10_POINTER_TYPE_ENUM = {
2: INPUT_TYPE_TOUCH,
3: INPUT_TYPE_PEN,
4: INPUT_TYPE_MOUSE,
5: INPUT_TYPE_KINECT
};
var POINTER_ELEMENT_EVENTS = "pointerdown";
var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
if (win.MSPointerEvent && !win.PointerEvent) {
POINTER_ELEMENT_EVENTS = "MSPointerDown";
POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
}
var PointerEventInput = /* @__PURE__ */ function(_Input) {
_inheritsLoose(PointerEventInput2, _Input);
function PointerEventInput2() {
var _this;
var proto = PointerEventInput2.prototype;
proto.evEl = POINTER_ELEMENT_EVENTS;
proto.evWin = POINTER_WINDOW_EVENTS;
_this = _Input.apply(this, arguments) || this;
_this.store = _this.manager.session.pointerEvents = [];
return _this;
}
var _proto = PointerEventInput2.prototype;
_proto.handler = function handler(ev) {
var store = this.store;
var removePointer = false;
var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
var isTouch = pointerType === INPUT_TYPE_TOUCH;
var storeIndex = inArray(store, ev.pointerId, "pointerId");
if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
if (storeIndex < 0) {
store.push(ev);
storeIndex = store.length - 1;
}
} else if (eventType & (INPUT_END | INPUT_CANCEL)) {
removePointer = true;
}
if (storeIndex < 0) {
return;
}
store[storeIndex] = ev;
this.callback(this.manager, eventType, {
pointers: store,
changedPointers: [ev],
pointerType,
srcEvent: ev
});
if (removePointer) {
store.splice(storeIndex, 1);
}
};
return PointerEventInput2;
}(Input);
function toArray(obj) {
return Array.prototype.slice.call(obj, 0);
}
function uniqueArray(src, key, sort) {
var results = [];
var values = [];
var i = 0;
while (i < src.length) {
var val = key ? src[i][key] : src[i];
if (inArray(values, val) < 0) {
results.push(src[i]);
}
values[i] = val;
i++;
}
if (sort) {
if (!key) {
results = results.sort();
} else {
results = results.sort(function(a, b) {
return a[key] > b[key];
});
}
}
return results;
}
var TOUCH_INPUT_MAP = {
touchstart: INPUT_START,
touchmove: INPUT_MOVE,
touchend: INPUT_END,
touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
var TouchInput = /* @__PURE__ */ function(_Input) {
_inheritsLoose(TouchInput2, _Input);
function TouchInput2() {
var _this;
TouchInput2.prototype.evTarget = TOUCH_TARGET_EVENTS;
_this = _Input.apply(this, arguments) || this;
_this.targetIds = {};
return _this;
}
var _proto = TouchInput2.prototype;
_proto.handler = function handler(ev) {
var type = TOUCH_INPUT_MAP[ev.type];
var touches = getTouches.call(this, ev, type);
if (!touches) {
return;
}
this.callback(this.manager, type, {
pointers: touches[0],
changedPointers: touches[1],
pointerType: INPUT_TYPE_TOUCH,
srcEvent: ev
});
};
return TouchInput2;
}(Input);
function getTouches(ev, type) {
var allTouches = toArray(ev.touches);
var targetIds = this.targetIds;
if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
targetIds[allTouches[0].identifier] = true;
return [allTouches, allTouches];
}
var i;
var targetTouches;
var changedTouches = toArray(ev.changedTouches);
var changedTargetTouches = [];
var target = this.target;
targetTouches = allTouches.filter(function(touch) {
return hasParent(touch.target, target);
});
if (type === INPUT_START) {
i = 0;
while (i < targetTouches.length) {
targetIds[targetTouches[i].identifier] = true;
i++;
}
}
i = 0;
while (i < changedTouches.length) {
if (targetIds[changedTouches[i].identifier]) {
changedTargetTouches.push(changedTouches[i]);
}
if (type & (INPUT_END | INPUT_CANCEL)) {
delete targetIds[changedTouches[i].identifier];
}
i++;
}
if (!changedTargetTouches.length) {
return;
}
return [
uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
changedTargetTouches
];
}
var MOUSE_INPUT_MAP = {
mousedown: INPUT_START,
mousemove: INPUT_MOVE,
mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = "mousedown";
var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
var MouseInput = /* @__PURE__ */ function(_Input) {
_inheritsLoose(MouseInput2, _Input);
function MouseInput2() {
var _this;
var proto = MouseInput2.prototype;
proto.evEl = MOUSE_ELEMENT_EVENTS;
proto.evWin = MOUSE_WINDOW_EVENTS;
_this = _Input.apply(this, arguments) || this;
_this.pressed = false;
return _this;
}
var _proto = MouseInput2.prototype;
_proto.handler = function handler(ev) {
var eventType = MOUSE_INPUT_MAP[ev.type];
if (eventType & INPUT_START && ev.button === 0) {
this.pressed = true;
}
if (eventType & INPUT_MOVE && ev.which !== 1) {
eventType = INPUT_END;
}
if (!this.pressed) {
return;
}
if (eventType & INPUT_END) {
this.pressed = false;
}
this.callback(this.manager, eventType, {
pointers: [ev],
changedPointers: [ev],
pointerType: INPUT_TYPE_MOUSE,
srcEvent: ev
});
};
return MouseInput2;
}(Input);
var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;
function setLastTouch(eventData) {
var _eventData$changedPoi = eventData.changedPointers, touch = _eventData$changedPoi[0];
if (touch.identifier === this.primaryTouch) {
var lastTouch = {
x: touch.clientX,
y: touch.clientY
};
var lts = this.lastTouches;
this.lastTouches.push(lastTouch);
var removeLastTouch = function removeLastTouch2() {
var i = lts.indexOf(lastTouch);
if (i > -1) {
lts.splice(i, 1);
}
};
setTimeout(removeLastTouch, DEDUP_TIMEOUT);
}
}
function recordTouches(eventType, eventData) {
if (eventType & INPUT_START) {
this.primaryTouch = eventData.changedPointers[0].identifier;
setLastTouch.call(this, eventData);
} else if (eventType & (INPUT_END | INPUT_CANCEL)) {
setLastTouch.call(this, eventData);
}
}
function isSyntheticEvent(eventData) {
var x = eventData.srcEvent.clientX;
var y = eventData.srcEvent.clientY;
for (var i = 0; i < this.lastTouches.length; i++) {
var t = this.lastTouches[i];
var dx = Math.abs(x - t.x);
var dy = Math.abs(y - t.y);
if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
return true;
}
}
return false;
}
var TouchMouseInput = /* @__PURE__ */ function() {
var TouchMouseInput2 = /* @__PURE__ */ function(_Input) {
_inheritsLoose(TouchMouseInput3, _Input);
function TouchMouseInput3(_manager, callback) {
var _this;
_this = _Input.call(this, _manager, callback) || this;
_this.handler = function(manager, inputEvent, inputData) {
var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;
if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
return;
}
if (isTouch) {
recordTouches.call(_assertThisInitialized(_assertThisInitialized(_this)), inputEvent, inputData);
} else if (isMouse && isSyntheticEvent.call(_assertThisInitialized(_assertThisInitialized(_this)), inputData)) {
return;
}
_this.callback(manager, inputEvent, inputData);
};
_this.touch = new TouchInput(_this.manager, _this.handler);
_this.mouse = new MouseInput(_this.manager, _this.handler);
_this.primaryTouch = null;
_this.lastTouches = [];
return _this;
}
var _proto = TouchMouseInput3.prototype;
_proto.destroy = function destroy() {
this.touch.destroy();
this.mouse.destroy();
};
return TouchMouseInput3;
}(Input);
return TouchMouseInput2;
}();
function createInputInstance(manager) {
var Type;
var inputClass = manager.options.inputClass;
if (inputClass) {
Type = inputClass;
} else if (SUPPORT_POINTER_EVENTS) {
Type = PointerEventInput;
} else if (SUPPORT_ONLY_TOUCH) {
Type = TouchInput;
} else if (!SUPPORT_TOUCH) {
Type = MouseInput;
} else {
Type = TouchMouseInput;
}
return new Type(manager, inputHandler);
}
function invokeArrayArg(arg, fn, context) {
if (Array.isArray(arg)) {
each(arg, context[fn], context);
return true;
}
return false;
}
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;
var _uniqueId = 1;
function uniqueId() {
return _uniqueId++;
}
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
var manager = recognizer.manager;
if (manager) {
return manager.get(otherRecognizer);
}
return otherRecognizer;
}
function stateStr(state) {
if (state & STATE_CANCELLED) {
return "cancel";
} else if (state & STATE_ENDED) {
return "end";
} else if (state & STATE_CHANGED) {
return "move";
} else if (state & STATE_BEGAN) {
return "start";
}
return "";
}
var Recognizer = /* @__PURE__ */ function() {
function Recognizer2(options) {
if (options === void 0) {
options = {};
}
this.options = _extends({
enable: true
}, options);
this.id = uniqueId();
this.manager = null;
this.state = STATE_POSSIBLE;
this.simultaneous = {};
this.requireFail = [];
}
var _proto = Recognizer2.prototype;
_proto.set = function set(options) {
assign$1(this.options, options);
this.manager && this.manager.touchAction.update();
return this;
};
_proto.recognizeWith = function recognizeWith(otherRecognizer) {
if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) {
return this;
}
var simultaneous = this.simultaneous;
otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
if (!simultaneous[otherRecognizer.id]) {
simultaneous[otherRecognizer.id] = otherRecognizer;
otherRecognizer.recognizeWith(this);
}
return this;
};
_proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) {
return this;
}
otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
delete this.simultaneous[otherRecognizer.id];
return this;
};
_proto.requireFailure = function requireFailure(otherRecognizer) {
if (invokeArrayArg(otherRecognizer, "requireFailure", this)) {
return this;
}
var requireFail = this.requireFail;
otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
if (inArray(requireFail, otherRecognizer) === -1) {
requireFail.push(otherRecognizer);
otherRecognizer.requireFailure(this);
}
return this;
};
_proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) {
return this;
}
otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
var index = inArray(this.requireFail, otherRecognizer);
if (index > -1) {
this.requireFail.splice(index, 1);
}
return this;
};
_proto.hasRequireFailures = function hasRequireFailures() {
return this.requireFail.length > 0;
};
_proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
return !!this.simultaneous[otherRecognizer.id];
};
_proto.emit = function emit(input) {
var self2 = this;
var state = this.state;
function emit2(event2) {
self2.manager.emit(event2, input);
}
if (state < STATE_ENDED) {
emit2(self2.options.event + stateStr(state));
}
emit2(self2.options.event);
if (input.additionalEvent) {
emit2(input.additionalEvent);
}
if (state >= STATE_ENDED) {
emit2(self2.options.event + stateStr(state));
}
};
_proto.tryEmit = function tryEmit(input) {
if (this.canEmit()) {
return this.emit(input);
}
this.state = STATE_FAILED;
};
_proto.canEmit = function canEmit() {
var i = 0;
while (i < this.requireFail.length) {
if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
return false;
}
i++;
}
return true;
};
_proto.recognize = function recognize(inputData) {
var inputDataClone = assign$1({}, inputData);
if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
this.reset();
this.state = STATE_FAILED;
return;
}
if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
this.state = STATE_POSSIBLE;
}
this.state = this.process(inputDataClone);
if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
this.tryEmit(inputDataClone);
}
};
_proto.process = function process(inputData) {
};
_proto.getTouchAction = function getTouchAction() {
};
_proto.reset = function reset() {
};
return Recognizer2;
}();
var TapRecognizer = /* @__PURE__ */ function(_Recognizer) {
_inheritsLoose(TapRecognizer2, _Recognizer);
function TapRecognizer2(options) {
var _this;
if (options === void 0) {
options = {};
}
_this = _Recognizer.call(this, _extends({
event: "tap",
pointers: 1,
taps: 1,
interval: 300,
time: 250,
threshold: 9,
posThreshold: 10
}, options)) || this;
_this.pTime = false;
_this.pCenter = false;
_this._timer = null;
_this._input = null;
_this.count = 0;
return _this;
}
var _proto = TapRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
return [TOUCH_ACTION_MANIPULATION];
};
_proto.process = function process(input) {
var _this2 = this;
var options = this.options;
var validPointers = input.pointers.length === options.pointers;
var validMovement = input.distance < options.threshold;
var validTouchTime = input.deltaTime < options.time;
this.reset();
if (input.eventType & INPUT_START && this.count === 0) {
return this.failTimeout();
}
if (validMovement && validTouchTime && validPointers) {
if (input.eventType !== INPUT_END) {
return this.failTimeout();
}
var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
this.pTime = input.timeStamp;
this.pCenter = input.center;
if (!validMultiTap || !validInterval) {
this.count = 1;
} else {
this.count += 1;
}
this._input = input;
var tapCount = this.count % options.taps;
if (tapCount === 0) {
if (!this.hasRequireFailures()) {
return STATE_RECOGNIZED;
} else {
this._timer = setTimeout(function() {
_this2.state = STATE_RECOGNIZED;
_this2.tryEmit();
}, options.interval);
return STATE_BEGAN;
}
}
}
return STATE_FAILED;
};
_proto.failTimeout = function failTimeout() {
var _this3 = this;
this._timer = setTimeout(function() {
_this3.state = STATE_FAILED;
}, this.options.interval);
return STATE_FAILED;
};
_proto.reset = function reset() {
clearTimeout(this._timer);
};
_proto.emit = function emit() {
if (this.state === STATE_RECOGNIZED) {
this._input.tapCount = this.count;
this.manager.emit(this.options.event, this._input);
}
};
return TapRecognizer2;
}(Recognizer);
var AttrRecognizer = /* @__PURE__ */ function(_Recognizer) {
_inheritsLoose(AttrRecognizer2, _Recognizer);
function AttrRecognizer2(options) {
if (options === void 0) {
options = {};
}
return _Recognizer.call(this, _extends({
pointers: 1
}, options)) || this;
}
var _proto = AttrRecognizer2.prototype;
_proto.attrTest = function attrTest(input) {
var optionPointers = this.options.pointers;
return optionPointers === 0 || input.pointers.length === optionPointers;
};
_proto.process = function process(input) {
var state = this.state;
var eventType = input.eventType;
var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
var isValid = this.attrTest(input);
if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
return state | STATE_CANCELLED;
} else if (isRecognized || isValid) {
if (eventType & INPUT_END) {
return state | STATE_ENDED;
} else if (!(state & STATE_BEGAN)) {
return STATE_BEGAN;
}
return state | STATE_CHANGED;
}
return STATE_FAILED;
};
return AttrRecognizer2;
}(Recognizer);
function directionStr(direction) {
if (direction === DIRECTION_DOWN) {
return "down";
} else if (direction === DIRECTION_UP) {
return "up";
} else if (direction === DIRECTION_LEFT) {
return "left";
} else if (direction === DIRECTION_RIGHT) {
return "right";
}
return "";
}
var PanRecognizer = /* @__PURE__ */ function(_AttrRecognizer) {
_inheritsLoose(PanRecognizer2, _AttrRecognizer);
function PanRecognizer2(options) {
var _this;
if (options === void 0) {
options = {};
}
_this = _AttrRecognizer.call(this, _extends({
event: "pan",
threshold: 10,
pointers: 1,
direction: DIRECTION_ALL
}, options)) || this;
_this.pX = null;
_this.pY = null;
return _this;
}
var _proto = PanRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
var direction = this.options.direction;
var actions = [];
if (direction & DIRECTION_HORIZONTAL) {
actions.push(TOUCH_ACTION_PAN_Y);
}
if (direction & DIRECTION_VERTICAL) {
actions.push(TOUCH_ACTION_PAN_X);
}
return actions;
};
_proto.directionTest = function directionTest(input) {
var options = this.options;
var hasMoved = true;
var distance = input.distance;
var direction = input.direction;
var x = input.deltaX;
var y = input.deltaY;
if (!(direction & options.direction)) {
if (options.direction & DIRECTION_HORIZONTAL) {
direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
hasMoved = x !== this.pX;
distance = Math.abs(input.deltaX);
} else {
direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
hasMoved = y !== this.pY;
distance = Math.abs(input.deltaY);
}
}
input.direction = direction;
return hasMoved && distance > options.threshold && direction & options.direction;
};
_proto.attrTest = function attrTest(input) {
return AttrRecognizer.prototype.attrTest.call(this, input) && // replace with a super call
(this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
};
_proto.emit = function emit(input) {
this.pX = input.deltaX;
this.pY = input.deltaY;
var direction = directionStr(input.direction);
if (direction) {
input.additionalEvent = this.options.event + direction;
}
_AttrRecognizer.prototype.emit.call(this, input);
};
return PanRecognizer2;
}(AttrRecognizer);
var SwipeRecognizer = /* @__PURE__ */ function(_AttrRecognizer) {
_inheritsLoose(SwipeRecognizer2, _AttrRecognizer);
function SwipeRecognizer2(options) {
if (options === void 0) {
options = {};
}
return _AttrRecognizer.call(this, _extends({
event: "swipe",
threshold: 10,
velocity: 0.3,
direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
pointers: 1
}, options)) || this;
}
var _proto = SwipeRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
return PanRecognizer.prototype.getTouchAction.call(this);
};
_proto.attrTest = function attrTest(input) {
var direction = this.options.direction;
var velocity;
if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
velocity = input.overallVelocity;
} else if (direction & DIRECTION_HORIZONTAL) {
velocity = input.overallVelocityX;
} else if (direction & DIRECTION_VERTICAL) {
velocity = input.overallVelocityY;
}
return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
};
_proto.emit = function emit(input) {
var direction = directionStr(input.offsetDirection);
if (direction) {
this.manager.emit(this.options.event + direction, input);
}
this.manager.emit(this.options.event, input);
};
return SwipeRecognizer2;
}(AttrRecognizer);
var PinchRecognizer = /* @__PURE__ */ function(_AttrRecognizer) {
_inheritsLoose(PinchRecognizer2, _AttrRecognizer);
function PinchRecognizer2(options) {
if (options === void 0) {
options = {};
}
return _AttrRecognizer.call(this, _extends({
event: "pinch",
threshold: 0,
pointers: 2
}, options)) || this;
}
var _proto = PinchRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
return [TOUCH_ACTION_NONE];
};
_proto.attrTest = function attrTest(input) {
return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
};
_proto.emit = function emit(input) {
if (input.scale !== 1) {
var inOut = input.scale < 1 ? "in" : "out";
input.additionalEvent = this.options.event + inOut;
}
_AttrRecognizer.prototype.emit.call(this, input);
};
return PinchRecognizer2;
}(AttrRecognizer);
var RotateRecognizer = /* @__PURE__ */ function(_AttrRecognizer) {
_inheritsLoose(RotateRecognizer2, _AttrRecognizer);
function RotateRecognizer2(options) {
if (options === void 0) {
options = {};
}
return _AttrRecognizer.call(this, _extends({
event: "rotate",
threshold: 0,
pointers: 2
}, options)) || this;
}
var _proto = RotateRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
return [TOUCH_ACTION_NONE];
};
_proto.attrTest = function attrTest(input) {
return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
};
return RotateRecognizer2;
}(AttrRecognizer);
var PressRecognizer = /* @__PURE__ */ function(_Recognizer) {
_inheritsLoose(PressRecognizer2, _Recognizer);
function PressRecognizer2(options) {
var _this;
if (options === void 0) {
options = {};
}
_this = _Recognizer.call(this, _extends({
event: "press",
pointers: 1,
time: 251,
threshold: 9
}, options)) || this;
_this._timer = null;
_this._input = null;
return _this;
}
var _proto = PressRecognizer2.prototype;
_proto.getTouchAction = function getTouchAction() {
return [TOUCH_ACTION_AUTO];
};
_proto.process = function process(input) {
var _this2 = this;
var options = this.options;
var validPointers = input.pointers.length === options.pointers;
var validMovement = input.distance < options.threshold;
var validTime = input.deltaTime > options.time;
this._input = input;
if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
this.reset();
} else if (input.eventType & INPUT_START) {
this.reset();
this._timer = setTimeout(function() {
_this2.state = STATE_RECOGNIZED;
_this2.tryEmit();
}, options.time);
} else if (input.eventType & INPUT_END) {
return STATE_RECOGNIZED;
}
return STATE_FAILED;
};
_proto.reset = function reset() {
clearTimeout(this._timer);
};
_proto.emit = function emit(input) {
if (this.state !== STATE_RECOGNIZED) {
return;
}
if (input && input.eventType & INPUT_END) {
this.manager.emit(this.options.event + "up", input);
} else {
this._input.timeStamp = now();
this.manager.emit(this.options.event, this._input);
}
};
return PressRecognizer2;
}(Recognizer);
var defaults = {
/**
* @private
* set if DOM events are being triggered.
* But this is slower and unused by simple implementations, so disabled by default.
* @type {Boolean}
* @default false
*/
domEvents: false,
/**
* @private
* The value for the touchAction property/fallback.
* When set to `compute` it will magically set the correct value based on the added recognizers.
* @type {String}
* @default compute
*/
touchAction: TOUCH_ACTION_COMPUTE,
/**
* @private
* @type {Boolean}
* @default true
*/
enable: true,
/**
* @private
* EXPERIMENTAL FEATURE -- can be removed/changed
* Change the parent input target element.
* If Null, then it is being set the to main element.
* @type {Null|EventTarget}
* @default null
*/
inputTarget: null,
/**
* @private
* force an input class
* @type {Null|Function}
* @default null
*/
inputClass: null,
/**
* @private
* Some CSS properties can be used to improve the working of Hammer.
* Add them to this method and they will be set when creating a new Manager.
* @namespace
*/
cssProps: {
/**
* @private
* Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
* @type {String}
* @default 'none'
*/
userSelect: "none",
/**
* @private
* Disable the Windows Phone grippers when pressing an element.
* @type {String}
* @default 'none'
*/
touchSelect: "none",
/**
* @private
* Disables the default callout shown when you touch and hold a touch target.
* On iOS, when you touch and hold a touch target such as a link, Safari displays
* a callout containing information about the link. This property allows you to disable that callout.
* @type {String}
* @default 'none'
*/
touchCallout: "none",
/**
* @private
* Specifies whether zooming is enabled. Used by IE10>
* @type {String}
* @default 'none'
*/
contentZooming: "none",
/**
* @private
* Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
* @type {String}
* @default 'none'
*/
userDrag: "none",
/**
* @private
* Overrides the highlight color shown when the user taps a link or a JavaScript
* clickable element in iOS. This property obeys the alpha value, if specified.
* @type {String}
* @default 'rgba(0,0,0,0)'
*/
tapHighlightColor: "rgba(0,0,0,0)"
}
};
var preset = [[RotateRecognizer, {
enable: false
}], [PinchRecognizer, {
enable: false
}, ["rotate"]], [SwipeRecognizer, {
direction: DIRECTION_HORIZONTAL
}], [PanRecognizer, {
direction: DIRECTION_HORIZONTAL
}, ["swipe"]], [TapRecognizer], [TapRecognizer, {
event: "doubletap",
taps: 2
}, ["tap"]], [PressRecognizer]];
var STOP = 1;
var FORCED_STOP = 2;
function toggleCssProps(manager, add) {
var element = manager.element;
if (!element.style) {
return;
}
var prop;
each(manager.options.cssProps, function(value, name) {
prop = prefixed(element.style, name);
if (add) {
manager.oldCssProps[prop] = element.style[prop];
element.style[prop] = value;
} else {
element.style[prop] = manager.oldCssProps[prop] || "";
}
});
if (!add) {
manager.oldCssProps = {};
}
}
function triggerDomEvent(event2, data) {
var gestureEvent = document.createEvent("Event");
gestureEvent.initEvent(event2, true, true);
gestureEvent.gesture = data;
data.target.dispatchEvent(gestureEvent);
}
var Manager = /* @__PURE__ */ function() {
function Manager2(element, options) {
var _this = this;
this.options = assign$1({}, defaults, options || {});
this.options.inputTarget = this.options.inputTarget || element;
this.handlers = {};
this.session = {};
this.recognizers = [];
this.oldCssProps = {};
this.element = element;
this.input = createInputInstance(this);
this.touchAction = new TouchAction(this, this.options.touchAction);
toggleCssProps(this, true);
each(this.options.recognizers, function(item) {
var recognizer = _this.add(new item[0](item[1]));
item[2] && recognizer.recognizeWith(item[2]);
item[3] && recognizer.requireFailure(item[3]);
}, this);
}
var _proto = Manager2.prototype;
_proto.set = function set(options) {
assign$1(this.options, options);
if (options.touchAction) {
this.touchAction.update();
}
if (options.inputTarget) {
this.input.destroy();
this.input.target = options.inputTarget;
this.input.init();
}
return this;
};
_proto.stop = function stop(force) {
this.session.stopped = force ? FORCED_STOP : STOP;
};
_proto.recognize = function recognize(inputData) {
var session = this.session;
if (session.stopped) {
return;
}
this.touchAction.preventDefaults(inputData);
var recognizer;
var recognizers = this.recognizers;
var curRecognizer = session.curRecognizer;
if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
session.curRecognizer = null;
curRecognizer = null;
}
var i = 0;
while (i < recognizers.length) {
recognizer = recognizers[i];
if (session.stopped !== FORCED_STOP && // 1
(!curRecognizer || recognizer === curRecognizer || // 2
recognizer.canRecognizeWith(curRecognizer))) {
recognizer.recognize(inputData);
} else {
recognizer.reset();
}
if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
session.curRecognizer = recognizer;
curRecognizer = recognizer;
}
i++;
}
};
_proto.get = function get(recognizer) {
if (recognizer instanceof Recognizer) {
return recognizer;
}
var recognizers = this.recognizers;
for (var i = 0; i < recognizers.length; i++) {
if (recognizers[i].options.event === recognizer) {
return recognizers[i];
}
}
return null;
};
_proto.add = function add(recognizer) {
if (invokeArrayArg(recognizer, "add", this)) {
return this;
}
var existing = this.get(recognizer.options.event);
if (existing) {
this.remove(existing);
}
this.recognizers.push(recognizer);
recognizer.manager = this;
this.touchAction.update();
return recognizer;
};
_proto.remove = function remove(recognizer) {
if (invokeArrayArg(recognizer, "remove", this)) {
return this;
}
var targetRecognizer = this.get(recognizer);
if (recognizer) {
var recognizers = this.recognizers;
var index = inArray(recognizers, targetRecognizer);
if (index !== -1) {
recognizers.splice(index, 1);
this.touchAction.update();
}
}
return this;
};
_proto.on = function on(events, handler) {
if (events === void 0 || handler === void 0) {
return this;
}
var handlers = this.handlers;
each(splitStr(events), function(event2) {
handlers[event2] = handlers[event2] || [];
handlers[event2].push(handler);
});
return this;
};
_proto.off = function off(events, handler) {
if (events === void 0) {
return this;
}
var handlers = this.handlers;
each(splitStr(events), function(event2) {
if (!handler) {
delete handlers[event2];
} else {
handlers[event2] && handlers[event2].splice(inArray(handlers[event2], handler), 1);
}
});
return this;
};
_proto.emit = function emit(event2, data) {
if (this.options.domEvents) {
triggerDomEvent(event2, data);
}
var handlers = this.handlers[event2] && this.handlers[event2].slice();
if (!handlers || !handlers.length) {
return;
}
data.type = event2;
data.preventDefault = function() {
data.srcEvent.preventDefault();
};
var i = 0;
while (i < handlers.length) {
handlers[i](data);
i++;
}
};
_proto.destroy = function destroy() {
this.element && toggleCssProps(this, false);
this.handlers = {};
this.session = {};
this.input.destroy();
this.element = null;
};
return Manager2;
}();
var SINGLE_TOUCH_INPUT_MAP = {
touchstart: INPUT_START,
touchmove: INPUT_MOVE,
touchend: INPUT_END,
touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
var SingleTouchInput = /* @__PURE__ */ function(_Input) {
_inheritsLoose(SingleTouchInput2, _Input);
function SingleTouchInput2() {
var _this;
var proto = SingleTouchInput2.prototype;
proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
_this = _Input.apply(this, arguments) || this;
_this.started = false;
return _this;
}
var _proto = SingleTouchInput2.prototype;
_proto.handler = function handler(ev) {
var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
if (type === INPUT_START) {
this.started = true;
}
if (!this.started) {
return;
}
var touches = normalizeSingleTouches.call(this, ev, type);
if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
this.started = false;
}
this.callback(this.manager, type, {
pointers: touches[0],
changedPointers: touches[1],
pointerType: INPUT_TYPE_TOUCH,
srcEvent: ev
});
};
return SingleTouchInput2;
}(Input);
function normalizeSingleTouches(ev, type) {
var all = toArray(ev.touches);
var changed = toArray(ev.changedTouches);
if (type & (INPUT_END | INPUT_CANCEL)) {
all = uniqueArray(all.concat(changed), "identifier", true);
}
return [all, changed];
}
function deprecate(method, name, message) {
var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
return function() {
var e = new Error("get-stack-trace");
var stack2 = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
var log = window.console && (window.console.warn || window.console.log);
if (log) {
log.call(window.console, deprecationMessage, stack2);
}
return method.apply(this, arguments);
};
}
var extend = deprecate(function(dest, src, merge2) {
var keys = Object.keys(src);
var i = 0;
while (i < keys.length) {
if (!merge2 || merge2 && dest[keys[i]] === void 0) {
dest[keys[i]] = src[keys[i]];
}
i++;
}
return dest;
}, "extend", "Use `assign`.");
var merge = deprecate(function(dest, src) {
return extend(dest, src, true);
}, "merge", "Use `assign`.");
function inherit(child, base, properties) {
var baseP = base.prototype;
var childP;
childP = child.prototype = Object.create(baseP);
childP.constructor = child;
childP._super = baseP;
if (properties) {
assign$1(childP, properties);
}
}
function bindFn(fn, context) {
return function boundFn() {
return fn.apply(context, arguments);
};
}
var Hammer = /* @__PURE__ */ function() {
var Hammer4 = (
/**
* @private
* @const {string}
*/
function Hammer5(element, options) {
if (options === void 0) {
options = {};
}
return new Manager(element, _extends({
recognizers: preset.concat()
}, options));
}
);
Hammer4.VERSION = "2.0.17-rc";
Hammer4.DIRECTION_ALL = DIRECTION_ALL;
Hammer4.DIRECTION_DOWN = DIRECTION_DOWN;
Hammer4.DIRECTION_LEFT = DIRECTION_LEFT;
Hammer4.DIRECTION_RIGHT = DIRECTION_RIGHT;
Hammer4.DIRECTION_UP = DIRECTION_UP;
Hammer4.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
Hammer4.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
Hammer4.DIRECTION_NONE = DIRECTION_NONE;
Hammer4.DIRECTION_DOWN = DIRECTION_DOWN;
Hammer4.INPUT_START = INPUT_START;
Hammer4.INPUT_MOVE = INPUT_MOVE;
Hammer4.INPUT_END = INPUT_END;
Hammer4.INPUT_CANCEL = INPUT_CANCEL;
Hammer4.STATE_POSSIBLE = STATE_POSSIBLE;
Hammer4.STATE_BEGAN = STATE_BEGAN;
Hammer4.STATE_CHANGED = STATE_CHANGED;
Hammer4.STATE_ENDED = STATE_ENDED;
Hammer4.STATE_RECOGNIZED = STATE_RECOGNIZED;
Hammer4.STATE_CANCELLED = STATE_CANCELLED;
Hammer4.STATE_FAILED = STATE_FAILED;
Hammer4.Manager = Manager;
Hammer4.Input = Input;
Hammer4.TouchAction = TouchAction;
Hammer4.TouchInput = TouchInput;
Hammer4.MouseInput = MouseInput;
Hammer4.PointerEventInput = PointerEventInput;
Hammer4.TouchMouseInput = TouchMouseInput;
Hammer4.SingleTouchInput = SingleTouchInput;
Hammer4.Recognizer = Recognizer;
Hammer4.AttrRecognizer = AttrRecognizer;
Hammer4.Tap = TapRecognizer;
Hammer4.Pan = PanRecognizer;
Hammer4.Swipe = SwipeRecognizer;
Hammer4.Pinch = PinchRecognizer;
Hammer4.Rotate = RotateRecognizer;
Hammer4.Press = PressRecognizer;
Hammer4.on = addEventListeners;
Hammer4.off = removeEventListeners;
Hammer4.each = each;
Hammer4.merge = merge;
Hammer4.extend = extend;
Hammer4.bindFn = bindFn;
Hammer4.assign = assign$1;
Hammer4.inherit = inherit;
Hammer4.bindFn = bindFn;
Hammer4.prefixed = prefixed;
Hammer4.toArray = toArray;
Hammer4.inArray = inArray;
Hammer4.uniqueArray = uniqueArray;
Hammer4.splitStr = splitStr;
Hammer4.boolOrFn = boolOrFn;
Hammer4.hasParent = hasParent;
Hammer4.addEventListeners = addEventListeners;
Hammer4.removeEventListeners = removeEventListeners;
Hammer4.defaults = assign$1({}, defaults, {
preset
});
return Hammer4;
}();
var defaults$1 = Hammer.defaults;
var hammer_esm_default = Hammer;
var DELETE = Symbol("DELETE");
function pureDeepObjectAssign(base, ...updates) {
return deepObjectAssign({}, base, ...updates);
}
function deepObjectAssign(...values) {
const merged = deepObjectAssignNonentry(...values);
stripDelete(merged);
return merged;
}
function deepObjectAssignNonentry(...values) {
if (values.length < 2) {
return values[0];
} else if (values.length > 2) {
return deepObjectAssignNonentry(deepObjectAssign(values[0], values[1]), ...values.slice(2));
}
const a = values[0];
const b = values[1];
if (a instanceof Date && b instanceof Date) {
a.setTime(b.getTime());
return a;
}
for (const prop of Reflect.ownKeys(b)) {
if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;
else if (b[prop] === DELETE) {
delete a[prop];
} else if (a[prop] !== null && b[prop] !== null && typeof a[prop] === "object" && typeof b[prop] === "object" && !Array.isArray(a[prop]) && !Array.isArray(b[prop])) {
a[prop] = deepObjectAssignNonentry(a[prop], b[prop]);
} else {
a[prop] = clone(b[prop]);
}
}
return a;
}
function clone(a) {
if (Array.isArray(a)) {
return a.map((value) => clone(value));
} else if (typeof a === "object" && a !== null) {
if (a instanceof Date) {
return new Date(a.getTime());
}
return deepObjectAssignNonentry({}, a);
} else {
return a;
}
}
function stripDelete(a) {
for (const prop of Object.keys(a)) {
if (a[prop] === DELETE) {
delete a[prop];
} else if (typeof a[prop] === "object" && a[prop] !== null) {
stripDelete(a[prop]);
}
}
}
function Alea(...seed) {
return AleaImplementation(seed.length ? seed : [Date.now()]);
}
function AleaImplementation(seed) {
let [s0, s1, s2] = mashSeed(seed);
let c = 1;
const random = () => {
const t = 2091639 * s0 + c * 23283064365386963e-26;
s0 = s1;
s1 = s2;
return s2 = t - (c = t | 0);
};
random.uint32 = () => random() * 4294967296;
random.fract53 = () => random() + (random() * 2097152 | 0) * 11102230246251565e-32;
random.algorithm = "Alea";
random.seed = seed;
random.version = "0.9";
return random;
}
function mashSeed(...seed) {
const mash = Mash();
let s0 = mash(" ");
let s1 = mash(" ");
let s2 = mash(" ");
for (let i = 0; i < seed.length; i++) {
s0 -= mash(seed[i]);
if (s0 < 0) {
s0 += 1;
}
s1 -= mash(seed[i]);
if (s1 < 0) {
s1 += 1;
}
s2 -= mash(seed[i]);
if (s2 < 0) {
s2 += 1;
}
}
return [s0, s1, s2];
}
function Mash() {
let n = 4022871197;
return function(data) {
const string2 = data.toString();
for (let i = 0; i < string2.length; i++) {
n += string2.charCodeAt(i);
let h = 0.02519603282416938 * n;
n = h >>> 0;
h -= n;
h *= n;
n = h >>> 0;
h -= n;
n += h * 4294967296;
}
return (n >>> 0) * 23283064365386963e-26;
};
}
function hammerMock() {
const noop = () => {
};
return {
on: noop,
off: noop,
destroy: noop,
emit: noop,
get() {
return {
set: noop
};
}
};
}
var Hammer$1 = typeof window !== "undefined" ? window.Hammer || hammer_esm_default : function() {
return hammerMock();
};
function Activator$1(container) {
this._cleanupQueue = [];
this.active = false;
this._dom = {
container,
overlay: document.createElement("div")
};
this._dom.overlay.classList.add("vis-overlay");
this._dom.container.appendChild(this._dom.overlay);
this._cleanupQueue.push(() => {
this._dom.overlay.parentNode.removeChild(this._dom.overlay);
});
const hammer = Hammer$1(this._dom.overlay);
hammer.on("tap", this._onTapOverlay.bind(this));
this._cleanupQueue.push(() => {
hammer.destroy();
});
const events = [
"tap",
"doubletap",
"press",
"pinch",
"pan",
"panstart",
"panmove",
"panend"
];
events.forEach((event2) => {
hammer.on(event2, (event3) => {
event3.srcEvent.stopPropagation();
});
});
if (document && document.body) {
this._onClick = (event2) => {
if (!_hasParent(event2.target, container)) {
this.deactivate();
}
};
document.body.addEventListener("click", this._onClick);
this._cleanupQueue.push(() => {
document.body.removeEventListener("click", this._onClick);
});
}
this._escListener = (event2) => {
if ("key" in event2 ? event2.key === "Escape" : event2.keyCode === 27) {
this.deactivate();
}
};
}
(0, import_component_emitter.default)(Activator$1.prototype);
Activator$1.current = null;
Activator$1.prototype.destroy = function() {
this.deactivate();
for (const callback of this._cleanupQueue.splice(0).reverse()) {
callback();
}
};
Activator$1.prototype.activate = function() {
if (Activator$1.current) {
Activator$1.current.deactivate();
}
Activator$1.current = this;
this.active = true;
this._dom.overlay.style.display = "none";
this._dom.container.classList.add("vis-active");
this.emit("change");
this.emit("activate");
document.body.addEventListener("keydown", this._escListener);
};
Activator$1.prototype.deactivate = function() {
this.active = false;
this._dom.overlay.style.display = "block";
this._dom.container.classList.remove("vis-active");
document.body.removeEventListener("keydown", this._escListener);
this.emit("change");
this.emit("deactivate");
};
Activator$1.prototype._onTapOverlay = function(event2) {
this.activate();
event2.srcEvent.stopPropagation();
};
function _hasParent(element, parent) {
while (element) {
if (element === parent) {
return true;
}
element = element.parentNode;
}
return false;
}
var ASPDateRegex = /^\/?Date\((-?\d+)/i;
var fullHexRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var shortHexRE = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
var rgbRE = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i;
var rgbaRE = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;
function isNumber(value) {
return value instanceof Number || typeof value === "number";
}
function recursiveDOMDelete(DOMobject) {
if (DOMobject) {
while (DOMobject.hasChildNodes() === true) {
const child = DOMobject.firstChild;
if (child) {
recursiveDOMDelete(child);
DOMobject.removeChild(child);
}
}
}
}
function isString(value) {
return value instanceof String || typeof value === "string";
}
function isObject(value) {
return typeof value === "object" && value !== null;
}
function isDate(value) {
if (value instanceof Date) {
return true;
} else if (isString(value)) {
const match = ASPDateRegex.exec(value);
if (match) {
return true;
} else if (!isNaN(Date.parse(value))) {
return true;
}
}
return false;
}
function copyOrDelete(a, b, prop, allowDeletion) {
let doDeletion = false;
if (allowDeletion === true) {
doDeletion = b[prop] === null && a[prop] !== void 0;
}
if (doDeletion) {
delete a[prop];
} else {
a[prop] = b[prop];
}
}
function fillIfDefined(a, b, allowDeletion = false) {
for (const prop in a) {
if (b[prop] !== void 0) {
if (b[prop] === null || typeof b[prop] !== "object") {
copyOrDelete(a, b, prop, allowDeletion);
} else {
const aProp = a[prop];
const bProp = b[prop];
if (isObject(aProp) && isObject(bProp)) {
fillIfDefined(aProp, bProp, allowDeletion);
}
}
}
}
}
var extend2 = Object.assign;
function selectiveExtend(props, a, ...others) {
if (!Array.isArray(props)) {
throw new Error("Array with property names expected as first argument");
}
for (const other of others) {
for (let p = 0; p < props.length; p++) {
const prop = props[p];
if (other && Object.prototype.hasOwnProperty.call(other, prop)) {
a[prop] = other[prop];
}
}
}
return a;
}
function selectiveDeepExtend(props, a, b, allowDeletion = false) {
if (Array.isArray(b)) {
throw new TypeError("Arrays are not supported by deepExtend");
}
for (let p = 0; p < props.length; p++) {
const prop = props[p];
if (Object.prototype.hasOwnProperty.call(b, prop)) {
if (b[prop] && b[prop].constructor === Object) {
if (a[prop] === void 0) {
a[prop] = {};
}
if (a[prop].constructor === Object) {
deepExtend(a[prop], b[prop], false, allowDeletion);
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
} else if (Array.isArray(b[prop])) {
throw new TypeError("Arrays are not supported by deepExtend");
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
}
}
return a;
}
function selectiveNotDeepExtend(propsToExclude, a, b, allowDeletion = false) {
if (Array.isArray(b)) {
throw new TypeError("Arrays are not supported by deepExtend");
}
for (const prop in b) {
if (!Object.prototype.hasOwnProperty.call(b, prop)) {
continue;
}
if (propsToExclude.includes(prop)) {
continue;
}
if (b[prop] && b[prop].constructor === Object) {
if (a[prop] === void 0) {
a[prop] = {};
}
if (a[prop].constructor === Object) {
deepExtend(a[prop], b[prop]);
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
} else if (Array.isArray(b[prop])) {
a[prop] = [];
for (let i = 0; i < b[prop].length; i++) {
a[prop].push(b[prop][i]);
}
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
}
return a;
}
function deepExtend(a, b, protoExtend = false, allowDeletion = false) {
for (const prop in b) {
if (Object.prototype.hasOwnProperty.call(b, prop) || protoExtend === true) {
if (typeof b[prop] === "object" && b[prop] !== null && Object.getPrototypeOf(b[prop]) === Object.prototype) {
if (a[prop] === void 0) {
a[prop] = deepExtend({}, b[prop], protoExtend);
} else if (typeof a[prop] === "object" && a[prop] !== null && Object.getPrototypeOf(a[prop]) === Object.prototype) {
deepExtend(a[prop], b[prop], protoExtend);
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
} else if (Array.isArray(b[prop])) {
a[prop] = b[prop].slice();
} else {
copyOrDelete(a, b, prop, allowDeletion);
}
}
}
return a;
}
function equalArray(a, b) {
if (a.length !== b.length) {
return false;
}
for (let i = 0, len = a.length; i < len; i++) {
if (a[i] != b[i]) {
return false;
}
}
return true;
}
function getType(object2) {
const type = typeof object2;
if (type === "object") {
if (object2 === null) {
return "null";
}
if (object2 instanceof Boolean) {
return "Boolean";
}
if (object2 instanceof Number) {
return "Number";
}
if (object2 instanceof String) {
return "String";
}
if (Array.isArray(object2)) {
return "Array";
}
if (object2 instanceof Date) {
return "Date";
}
return "Object";
}
if (type === "number") {
return "Number";
}
if (type === "boolean") {
return "Boolean";
}
if (type === "string") {
return "String";
}
if (type === void 0) {
return "undefined";
}
return type;
}
function copyAndExtendArray(arr, newValue) {
return [...arr, newValue];
}
function copyArray(arr) {
return arr.slice();
}
function getAbsoluteLeft(elem) {
return elem.getBoundingClientRect().left;
}
function getAbsoluteRight(elem) {
return elem.getBoundingClientRect().right;
}
function getAbsoluteTop(elem) {
return elem.getBoundingClientRect().top;
}
function addClassName(elem, classNames) {
let classes = elem.className.split(" ");
const newClasses = classNames.split(" ");
classes = classes.concat(newClasses.filter(function(className) {
return !classes.includes(className);
}));
elem.className = classes.join(" ");
}
function removeClassName(elem, classNames) {
let classes = elem.className.split(" ");
const oldClasses = classNames.split(" ");
classes = classes.filter(function(className) {
return !oldClasses.includes(className);
});
elem.className = classes.join(" ");
}
function forEach(object2, callback) {
if (Array.isArray(object2)) {
const len = object2.length;
for (let i = 0; i < len; i++) {
callback(object2[i], i, object2);
}
} else {
for (const key in object2) {
if (Object.prototype.hasOwnProperty.call(object2, key)) {
callback(object2[key], key, object2);
}
}
}
}
var toArray2 = Object.values;
function updateProperty(object2, key, value) {
if (object2[key] !== value) {
object2[key] = value;
return true;
} else {
return false;
}
}
function throttle(fn) {
let scheduled = false;
return () => {
if (!scheduled) {
scheduled = true;
requestAnimationFrame(() => {
scheduled = false;
fn();
});
}
};
}
function preventDefault(event2) {
if (!event2) {
event2 = window.event;
}
if (!event2) ;
else if (event2.preventDefault) {
event2.preventDefault();
} else {
event2.returnValue = false;
}
}
function getTarget(event2 = window.event) {
let target = null;
if (!event2) ;
else if (event2.target) {
target = event2.target;
} else if (event2.srcElement) {
target = event2.srcElement;
}
if (!(target instanceof Element)) {
return null;
}
if (target.nodeType != null && target.nodeType == 3) {
target = target.parentNode;
if (!(target instanceof Element)) {
return null;
}
}
return target;
}
function hasParent2(element, parent) {
let elem = element;
while (elem) {
if (elem === parent) {
return true;
} else if (elem.parentNode) {
elem = elem.parentNode;
} else {
return false;
}
}
return false;
}
var option = {
/**
* Convert a value into a boolean.
* @param value - Value to be converted intoboolean, a function will be executed as `(() => unknown)`.
* @param defaultValue - If the value or the return value of the function == null then this will be returned.
* @returns Corresponding boolean value, if none then the default value, if none then null.
*/
asBoolean(value, defaultValue) {
if (typeof value == "function") {
value = value();
}
if (value != null) {
return value != false;
}
return defaultValue || null;
},
/**
* Convert a value into a number.
* @param value - Value to be converted intonumber, a function will be executed as `(() => unknown)`.
* @param defaultValue - If the value or the return value of the function == null then this will be returned.
* @returns Corresponding **boxed** number value, if none then the default value, if none then null.
*/
asNumber(value, defaultValue) {
if (typeof value == "function") {
value = value();
}
if (value != null) {
return Number(value) || defaultValue || null;
}
return defaultValue || null;
},
/**
* Convert a value into a string.
* @param value - Value to be converted intostring, a function will be executed as `(() => unknown)`.
* @param defaultValue - If the value or the return value of the function == null then this will be returned.
* @returns Corresponding **boxed** string value, if none then the default value, if none then null.
*/
asString(value, defaultValue) {
if (typeof value == "function") {
value = value();
}
if (value != null) {
return String(value);
}
return defaultValue || null;
},
/**
* Convert a value into a size.
* @param value - Value to be converted intosize, a function will be executed as `(() => unknown)`.
* @param defaultValue - If the value or the return value of the function == null then this will be returned.
* @returns Corresponding string value (number + 'px'), if none then the default value, if none then null.
*/
asSize(value, defaultValue) {
if (typeof value == "function") {
value = value();
}
if (isString(value)) {
return value;
} else if (isNumber(value)) {
return value + "px";
} else {
return defaultValue || null;
}
},
/**
* Convert a value into a DOM Element.
* @param value - Value to be converted into DOM Element, a function will be executed as `(() => unknown)`.
* @param defaultValue - If the value or the return value of the function == null then this will be returned.
* @returns The DOM Element, if none then the default value, if none then null.
*/
asElement(value, defaultValue) {
if (typeof value == "function") {
value = value();
}
return value || defaultValue || null;
}
};
function hexToRGB(hex) {
let result;
switch (hex.length) {
case 3:
case 4:
result = shortHexRE.exec(hex);
return result ? {
r: parseInt(result[1] + result[1], 16),
g: parseInt(result[2] + result[2], 16),
b: parseInt(result[3] + result[3], 16)
} : null;
case 6:
case 7:
result = fullHexRE.exec(hex);
return result ? {
r: parseInt(result[1], 16),
g: parseInt(result[2], 16),
b: parseInt(result[3], 16)
} : null;
default:
return null;
}
}
function overrideOpacity(color, opacity) {
if (color.includes("rgba")) {
return color;
} else if (color.includes("rgb")) {
const rgb = color.substr(color.indexOf("(") + 1).replace(")", "").split(",");
return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
} else {
const rgb = hexToRGB(color);
if (rgb == null) {
return color;
} else {
return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacity + ")";
}
}
}
function RGBToHex(red, green, blue) {
return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}
function parseColor(inputColor, defaultColor) {
if (isString(inputColor)) {
let colorStr = inputColor;
if (isValidRGB(colorStr)) {
const rgb = colorStr.substr(4).substr(0, colorStr.length - 5).split(",").map(function(value) {
return parseInt(value);
});
colorStr = RGBToHex(rgb[0], rgb[1], rgb[2]);
}
if (isValidHex(colorStr) === true) {
const hsv = hexToHSV(colorStr);
const lighterColorHSV = {
h: hsv.h,
s: hsv.s * 0.8,
v: Math.min(1, hsv.v * 1.02)
};
const darkerColorHSV = {
h: hsv.h,
s: Math.min(1, hsv.s * 1.25),
v: hsv.v * 0.8
};
const darkerColorHex = HSVToHex(darkerColorHSV.h, darkerColorHSV.s, darkerColorHSV.v);
const lighterColorHex = HSVToHex(lighterColorHSV.h, lighterColorHSV.s, lighterColorHSV.v);
return {
background: colorStr,
border: darkerColorHex,
highlight: {
background: lighterColorHex,
border: darkerColorHex
},
hover: {
background: lighterColorHex,
border: darkerColorHex
}
};
} else {
return {
background: colorStr,
border: colorStr,
highlight: {
background: colorStr,
border: colorStr
},
hover: {
background: colorStr,
border: colorStr
}
};
}
} else {
if (defaultColor) {
const color = {
background: inputColor.background || defaultColor.background,
border: inputColor.border || defaultColor.border,
highlight: isString(inputColor.highlight) ? {
border: inputColor.highlight,
background: inputColor.highlight
} : {
background: inputColor.highlight && inputColor.highlight.background || defaultColor.highlight.background,
border: inputColor.highlight && inputColor.highlight.border || defaultColor.highlight.border
},
hover: isString(inputColor.hover) ? {
border: inputColor.hover,
background: inputColor.hover
} : {
border: inputColor.hover && inputColor.hover.border || defaultColor.hover.border,
background: inputColor.hover && inputColor.hover.background || defaultColor.hover.background
}
};
return color;
} else {
const color = {
background: inputColor.background || void 0,
border: inputColor.border || void 0,
highlight: isString(inputColor.highlight) ? {
border: inputColor.highlight,
background: inputColor.highlight
} : {
background: inputColor.highlight && inputColor.highlight.background || void 0,
border: inputColor.highlight && inputColor.highlight.border || void 0
},
hover: isString(inputColor.hover) ? {
border: inputColor.hover,
background: inputColor.hover
} : {
border: inputColor.hover && inputColor.hover.border || void 0,
background: inputColor.hover && inputColor.hover.background || void 0
}
};
return color;
}
}
}
function RGBToHSV(red, green, blue) {
red = red / 255;
green = green / 255;
blue = blue / 255;
const minRGB = Math.min(red, Math.min(green, blue));
const maxRGB = Math.max(red, Math.max(green, blue));
if (minRGB === maxRGB) {
return { h: 0, s: 0, v: minRGB };
}
const d = red === minRGB ? green - blue : blue === minRGB ? red - green : blue - red;
const h = red === minRGB ? 3 : blue === minRGB ? 1 : 5;
const hue = 60 * (h - d / (maxRGB - minRGB)) / 360;
const saturation = (maxRGB - minRGB) / maxRGB;
const value = maxRGB;
return { h: hue, s: saturation, v: value };
}
function splitCSSText(cssText) {
const tmpEllement = document.createElement("div");
const styles = {};
tmpEllement.style.cssText = cssText;
for (let i = 0; i < tmpEllement.style.length; ++i) {
styles[tmpEllement.style[i]] = tmpEllement.style.getPropertyValue(tmpEllement.style[i]);
}
return styles;
}
function addCssText(element, cssText) {
const cssStyle = splitCSSText(cssText);
for (const [key, value] of Object.entries(cssStyle)) {
element.style.setProperty(key, value);
}
}
function removeCssText(element, cssText) {
const cssStyle = splitCSSText(cssText);
for (const key of Object.keys(cssStyle)) {
element.style.removeProperty(key);
}
}
function HSVToRGB(h, s, v) {
let r;
let g;
let b;
const i = Math.floor(h * 6);
const f = h * 6 - i;
const p = v * (1 - s);
const q = v * (1 - f * s);
const t = v * (1 - (1 - f) * s);
switch (i % 6) {
case 0:
r = v, g = t, b = p;
break;
case 1:
r = q, g = v, b = p;
break;
case 2:
r = p, g = v, b = t;
break;
case 3:
r = p, g = q, b = v;
break;
case 4:
r = t, g = p, b = v;
break;
case 5:
r = v, g = p, b = q;
break;
}
return {
r: Math.floor(r * 255),
g: Math.floor(g * 255),
b: Math.floor(b * 255)
};
}
function HSVToHex(h, s, v) {
const rgb = HSVToRGB(h, s, v);
return RGBToHex(rgb.r, rgb.g, rgb.b);
}
function hexToHSV(hex) {
const rgb = hexToRGB(hex);
if (!rgb) {
throw new TypeError(`'${hex}' is not a valid color.`);
}
return RGBToHSV(rgb.r, rgb.g, rgb.b);
}
function isValidHex(hex) {
const isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
return isOk;
}
function isValidRGB(rgb) {
return rgbRE.test(rgb);
}
function isValidRGBA(rgba) {
return rgbaRE.test(rgba);
}
function selectiveBridgeObject(fields, referenceObject) {
if (referenceObject !== null && typeof referenceObject === "object") {
const objectTo = Object.create(referenceObject);
for (let i = 0; i < fields.length; i++) {
if (Object.prototype.hasOwnProperty.call(referenceObject, fields[i])) {
if (typeof referenceObject[fields[i]] == "object") {
objectTo[fields[i]] = bridgeObject(referenceObject[fields[i]]);
}
}
}
return objectTo;
} else {
return null;
}
}
function bridgeObject(referenceObject) {
if (referenceObject === null || typeof referenceObject !== "object") {
return null;
}
if (referenceObject instanceof Element) {
return referenceObject;
}
const objectTo = Object.create(referenceObject);
for (const i in referenceObject) {
if (Object.prototype.hasOwnProperty.call(referenceObject, i)) {
if (typeof referenceObject[i] == "object") {
objectTo[i] = bridgeObject(referenceObject[i]);
}
}
}
return objectTo;
}
function insertSort(a, compare) {
for (let i = 0; i < a.length; i++) {
const k = a[i];
let j;
for (j = i; j > 0 && compare(k, a[j - 1]) < 0; j--) {
a[j] = a[j - 1];
}
a[j] = k;
}
return a;
}
function mergeOptions(mergeTarget, options, option2, globalOptions = {}) {
const isPresent = function(obj) {
return obj !== null && obj !== void 0;
};
const isObject2 = function(obj) {
return obj !== null && typeof obj === "object";
};
const isEmpty = function(obj) {
for (const x in obj) {
if (Object.prototype.hasOwnProperty.call(obj, x)) {
return false;
}
}
return true;
};
if (!isObject2(mergeTarget)) {
throw new Error("Parameter mergeTarget must be an object");
}
if (!isObject2(options)) {
throw new Error("Parameter options must be an object");
}
if (!isPresent(option2)) {
throw new Error("Parameter option must have a value");
}
if (!isObject2(globalOptions)) {
throw new Error("Parameter globalOptions must be an object");
}
const doMerge = function(target, options2, option3) {
if (!isObject2(target[option3])) {
target[option3] = {};
}
const src = options2[option3];
const dst = target[option3];
for (const prop in src) {
if (Object.prototype.hasOwnProperty.call(src, prop)) {
dst[prop] = src[prop];
}
}
};
const srcOption = options[option2];
const globalPassed = isObject2(globalOptions) && !isEmpty(globalOptions);
const globalOption = globalPassed ? globalOptions[option2] : void 0;
const globalEnabled = globalOption ? globalOption.enabled : void 0;
if (srcOption === void 0) {
return;
}
if (typeof srcOption === "boolean") {
if (!isObject2(mergeTarget[option2])) {
mergeTarget[option2] = {};
}
mergeTarget[option2].enabled = srcOption;
return;
}
if (srcOption === null && !isObject2(mergeTarget[option2])) {
if (isPresent(globalOption)) {
mergeTarget[option2] = Object.create(globalOption);
} else {
return;
}
}
if (!isObject2(srcOption)) {
return;
}
let enabled = true;
if (srcOption.enabled !== void 0) {
enabled = srcOption.enabled;
} else {
if (globalEnabled !== void 0) {
enabled = globalOption.enabled;
}
}
doMerge(mergeTarget, options, option2);
mergeTarget[option2].enabled = enabled;
}
function binarySearchCustom(orderedItems, comparator, field, field2) {
const maxIterations = 1e4;
let iteration = 0;
let low = 0;
let high = orderedItems.length - 1;
while (low <= high && iteration < maxIterations) {
const middle = Math.floor((low + high) / 2);
const item = orderedItems[middle];
const value = field2 === void 0 ? item[field] : item[field][field2];
const searchResult = comparator(value);
if (searchResult == 0) {
return middle;
} else if (searchResult == -1) {
low = middle + 1;
} else {
high = middle - 1;
}
iteration++;
}
return -1;
}
function binarySearchValue(orderedItems, target, field, sidePreference, comparator) {
const maxIterations = 1e4;
let iteration = 0;
let low = 0;
let high = orderedItems.length - 1;
let prevValue;
let value;
let nextValue;
let middle;
comparator = comparator != void 0 ? comparator : function(a, b) {
return a == b ? 0 : a < b ? -1 : 1;
};
while (low <= high && iteration < maxIterations) {
middle = Math.floor(0.5 * (high + low));
prevValue = orderedItems[Math.max(0, middle - 1)][field];
value = orderedItems[middle][field];
nextValue = orderedItems[Math.min(orderedItems.length - 1, middle + 1)][field];
if (comparator(value, target) == 0) {
return middle;
} else if (comparator(prevValue, target) < 0 && comparator(value, target) > 0) {
return sidePreference == "before" ? Math.max(0, middle - 1) : middle;
} else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
return sidePreference == "before" ? middle : Math.min(orderedItems.length - 1, middle + 1);
} else {
if (comparator(value, target) < 0) {
low = middle + 1;
} else {
high = middle - 1;
}
}
iteration++;
}
return -1;
}
var easingFunctions = {
/**
* Provides no easing and no acceleration.
* @param t - Time.
* @returns Value at time t.
*/
linear(t) {
return t;
},
/**
* Accelerate from zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeInQuad(t) {
return t * t;
},
/**
* Decelerate to zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeOutQuad(t) {
return t * (2 - t);
},
/**
* Accelerate until halfway, then decelerate.
* @param t - Time.
* @returns Value at time t.
*/
easeInOutQuad(t) {
return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
},
/**
* Accelerate from zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeInCubic(t) {
return t * t * t;
},
/**
* Decelerate to zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeOutCubic(t) {
return --t * t * t + 1;
},
/**
* Accelerate until halfway, then decelerate.
* @param t - Time.
* @returns Value at time t.
*/
easeInOutCubic(t) {
return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
},
/**
* Accelerate from zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeInQuart(t) {
return t * t * t * t;
},
/**
* Decelerate to zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeOutQuart(t) {
return 1 - --t * t * t * t;
},
/**
* Accelerate until halfway, then decelerate.
* @param t - Time.
* @returns Value at time t.
*/
easeInOutQuart(t) {
return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
},
/**
* Accelerate from zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeInQuint(t) {
return t * t * t * t * t;
},
/**
* Decelerate to zero velocity.
* @param t - Time.
* @returns Value at time t.
*/
easeOutQuint(t) {
return 1 + --t * t * t * t * t;
},
/**
* Accelerate until halfway, then decelerate.
* @param t - Time.
* @returns Value at time t.
*/
easeInOutQuint(t) {
return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}
};
function getScrollBarWidth() {
const inner = document.createElement("p");
inner.style.width = "100%";
inner.style.height = "200px";
const outer = document.createElement("div");
outer.style.position = "absolute";
outer.style.top = "0px";
outer.style.left = "0px";
outer.style.visibility = "hidden";
outer.style.width = "200px";
outer.style.height = "150px";
outer.style.overflow = "hidden";
outer.appendChild(inner);
document.body.appendChild(outer);
const w1 = inner.offsetWidth;
outer.style.overflow = "scroll";
let w2 = inner.offsetWidth;
if (w1 == w2) {
w2 = outer.clientWidth;
}
document.body.removeChild(outer);
return w1 - w2;
}
function topMost(pile, accessors) {
let candidate;
if (!Array.isArray(accessors)) {
accessors = [accessors];
}
for (const member of pile) {
if (member) {
candidate = member[accessors[0]];
for (let i = 1; i < accessors.length; i++) {
if (candidate) {
candidate = candidate[accessors[i]];
}
}
if (typeof candidate !== "undefined") {
break;
}
}
}
return candidate;
}
var htmlColors = {
black: "#000000",
navy: "#000080",
darkblue: "#00008B",
mediumblue: "#0000CD",
blue: "#0000FF",
darkgreen: "#006400",
green: "#008000",
teal: "#008080",
darkcyan: "#008B8B",
deepskyblue: "#00BFFF",
darkturquoise: "#00CED1",
mediumspringgreen: "#00FA9A",
lime: "#00FF00",
springgreen: "#00FF7F",
aqua: "#00FFFF",
cyan: "#00FFFF",
midnightblue: "#191970",
dodgerblue: "#1E90FF",
lightseagreen: "#20B2AA",
forestgreen: "#228B22",
seagreen: "#2E8B57",
darkslategray: "#2F4F4F",
limegreen: "#32CD32",
mediumseagreen: "#3CB371",
turquoise: "#40E0D0",
royalblue: "#4169E1",
steelblue: "#4682B4",
darkslateblue: "#483D8B",
mediumturquoise: "#48D1CC",
indigo: "#4B0082",
darkolivegreen: "#556B2F",
cadetblue: "#5F9EA0",
cornflowerblue: "#6495ED",
mediumaquamarine: "#66CDAA",
dimgray: "#696969",
slateblue: "#6A5ACD",
olivedrab: "#6B8E23",
slategray: "#708090",
lightslategray: "#778899",
mediumslateblue: "#7B68EE",
lawngreen: "#7CFC00",
chartreuse: "#7FFF00",
aquamarine: "#7FFFD4",
maroon: "#800000",
purple: "#800080",
olive: "#808000",
gray: "#808080",
skyblue: "#87CEEB",
lightskyblue: "#87CEFA",
blueviolet: "#8A2BE2",
darkred: "#8B0000",
darkmagenta: "#8B008B",
saddlebrown: "#8B4513",
darkseagreen: "#8FBC8F",
lightgreen: "#90EE90",
mediumpurple: "#9370D8",
darkviolet: "#9400D3",
palegreen: "#98FB98",
darkorchid: "#9932CC",
yellowgreen: "#9ACD32",
sienna: "#A0522D",
brown: "#A52A2A",
darkgray: "#A9A9A9",
lightblue: "#ADD8E6",
greenyellow: "#ADFF2F",
paleturquoise: "#AFEEEE",
lightsteelblue: "#B0C4DE",
powderblue: "#B0E0E6",
firebrick: "#B22222",
darkgoldenrod: "#B8860B",
mediumorchid: "#BA55D3",
rosybrown: "#BC8F8F",
darkkhaki: "#BDB76B",
silver: "#C0C0C0",
mediumvioletred: "#C71585",
indianred: "#CD5C5C",
peru: "#CD853F",
chocolate: "#D2691E",
tan: "#D2B48C",
lightgrey: "#D3D3D3",
palevioletred: "#D87093",
thistle: "#D8BFD8",
orchid: "#DA70D6",
goldenrod: "#DAA520",
crimson: "#DC143C",
gainsboro: "#DCDCDC",
plum: "#DDA0DD",
burlywood: "#DEB887",
lightcyan: "#E0FFFF",
lavender: "#E6E6FA",
darksalmon: "#E9967A",
violet: "#EE82EE",
palegoldenrod: "#EEE8AA",
lightcoral: "#F08080",
khaki: "#F0E68C",
aliceblue: "#F0F8FF",
honeydew: "#F0FFF0",
azure: "#F0FFFF",
sandybrown: "#F4A460",
wheat: "#F5DEB3",
beige: "#F5F5DC",
whitesmoke: "#F5F5F5",
mintcream: "#F5FFFA",
ghostwhite: "#F8F8FF",
salmon: "#FA8072",
antiquewhite: "#FAEBD7",
linen: "#FAF0E6",
lightgoldenrodyellow: "#FAFAD2",
oldlace: "#FDF5E6",
red: "#FF0000",
fuchsia: "#FF00FF",
magenta: "#FF00FF",
deeppink: "#FF1493",
orangered: "#FF4500",
tomato: "#FF6347",
hotpink: "#FF69B4",
coral: "#FF7F50",
darkorange: "#FF8C00",
lightsalmon: "#FFA07A",
orange: "#FFA500",
lightpink: "#FFB6C1",
pink: "#FFC0CB",
gold: "#FFD700",
peachpuff: "#FFDAB9",
navajowhite: "#FFDEAD",
moccasin: "#FFE4B5",
bisque: "#FFE4C4",
mistyrose: "#FFE4E1",
blanchedalmond: "#FFEBCD",
papayawhip: "#FFEFD5",
lavenderblush: "#FFF0F5",
seashell: "#FFF5EE",
cornsilk: "#FFF8DC",
lemonchiffon: "#FFFACD",
floralwhite: "#FFFAF0",
snow: "#FFFAFA",
yellow: "#FFFF00",
lightyellow: "#FFFFE0",
ivory: "#FFFFF0",
white: "#FFFFFF"
};
var ColorPicker$1 = class ColorPicker {
/**
* @param {number} [pixelRatio]
*/
constructor(pixelRatio = 1) {
this.pixelRatio = pixelRatio;
this.generated = false;
this.centerCoordinates = { x: 289 / 2, y: 289 / 2 };
this.r = 289 * 0.49;
this.color = { r: 255, g: 255, b: 255, a: 1 };
this.hueCircle = void 0;
this.initialColor = { r: 255, g: 255, b: 255, a: 1 };
this.previousColor = void 0;
this.applied = false;
this.updateCallback = () => {
};
this.closeCallback = () => {
};
this._create();
}
/**
* this inserts the colorPicker into a div from the DOM
* @param {Element} container
*/
insertTo(container) {
if (this.hammer !== void 0) {
this.hammer.destroy();
this.hammer = void 0;
}
this.container = container;
this.container.appendChild(this.frame);
this._bindHammer();
this._setSize();
}
/**
* the callback is executed on apply and save. Bind it to the application
* @param {Function} callback
*/
setUpdateCallback(callback) {
if (typeof callback === "function") {
this.updateCallback = callback;
} else {
throw new Error(
"Function attempted to set as colorPicker update callback is not a function."
);
}
}
/**
* the callback is executed on apply and save. Bind it to the application
* @param {Function} callback
*/
setCloseCallback(callback) {
if (typeof callback === "function") {
this.closeCallback = callback;
} else {
throw new Error(
"Function attempted to set as colorPicker closing callback is not a function."
);
}
}
/**
*
* @param {string} color
* @returns {string}
* @private
*/
_isColorString(color) {
if (typeof color === "string") {
return htmlColors[color];
}
}
/**
* Set the color of the colorPicker
* Supported formats:
* 'red'                   --> HTML color string
* '#ffffff'               --> hex string
* 'rgb(255,255,255)'      --> rgb string
* 'rgba(255,255,255,1.0)' --> rgba string
* {r:255,g:255,b:255}     --> rgb object
* {r:255,g:255,b:255,a:1.0} --> rgba object
* @param {string | object} color
* @param {boolean} [setInitial]
*/
setColor(color, setInitial = true) {
if (color === "none") {
return;
}
let rgba;
const htmlColor = this._isColorString(color);
if (htmlColor !== void 0) {
color = htmlColor;
}
if (isString(color) === true) {
if (isValidRGB(color) === true) {
const rgbaArray = color.substr(4).substr(0, color.length - 5).split(",");
rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: 1 };
} else if (isValidRGBA(color) === true) {
const rgbaArray = color.substr(5).substr(0, color.length - 6).split(",");
rgba = {
r: rgbaArray[0],
g: rgbaArray[1],
b: rgbaArray[2],
a: rgbaArray[3]
};
} else if (isValidHex(color) === true) {
const rgbObj = hexToRGB(color);
rgba = { r: rgbObj.r, g: rgbObj.g, b: rgbObj.b, a: 1 };
}
} else {
if (color instanceof Object) {
if (color.r !== void 0 && color.g !== void 0 && color.b !== void 0) {
const alpha = color.a !== void 0 ? color.a : "1.0";
rgba = { r: color.r, g: color.g, b: color.b, a: alpha };
}
}
}
if (rgba === void 0) {
throw new Error(
"Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + JSON.stringify(color)
);
} else {
this._setColor(rgba, setInitial);
}
}
/**
* this shows the color picker.
* The hue circle is constructed once and stored.
*/
show() {
if (this.closeCallback !== void 0) {
this.closeCallback();
this.closeCallback = void 0;
}
this.applied = false;
this.frame.style.display = "block";
this._generateHueCircle();
}
/**
* Hide the picker. Is called by the cancel button.
* Optional boolean to store the previous color for easy access later on.
* @param {boolean} [storePrevious]
* @private
*/
_hide(storePrevious = true) {
if (storePrevious === true) {
this.previousColor = Object.assign({}, this.color);
}
if (this.applied === true) {
this.updateCallback(this.initialColor);
}
this.frame.style.display = "none";
setTimeout(() => {
if (this.closeCallback !== void 0) {
this.closeCallback();
this.closeCallback = void 0;
}
}, 0);
}
/**
* bound to the save button. Saves and hides.
* @private
*/
_save() {
this.updateCallback(this.color);
this.applied = false;
this._hide();
}
/**
* Bound to apply button. Saves but does not close. Is undone by the cancel button.
* @private
*/
_apply() {
this.applied = true;
this.updateCallback(this.color);
this._updatePicker(this.color);
}
/**
* load the color from the previous session.
* @private
*/
_loadLast() {
if (this.previousColor !== void 0) {
this.setColor(this.previousColor, false);
} else {
alert("There is no last color to load...");
}
}
/**
* set the color, place the picker
* @param {object} rgba
* @param {boolean} [setInitial]
* @private
*/
_setColor(rgba, setInitial = true) {
if (setInitial === true) {
this.initialColor = Object.assign({}, rgba);
}
this.color = rgba;
const hsv = RGBToHSV(rgba.r, rgba.g, rgba.b);
const angleConvert = 2 * Math.PI;
const radius = this.r * hsv.s;
const x = this.centerCoordinates.x + radius * Math.sin(angleConvert * hsv.h);
const y = this.centerCoordinates.y + radius * Math.cos(angleConvert * hsv.h);
this.colorPickerSelector.style.left = x - 0.5 * this.colorPickerSelector.clientWidth + "px";
this.colorPickerSelector.style.top = y - 0.5 * this.colorPickerSelector.clientHeight + "px";
this._updatePicker(rgba);
}
/**
* bound to opacity control
* @param {number} value
* @private
*/
_setOpacity(value) {
this.color.a = value / 100;
this._updatePicker(this.color);
}
/**
* bound to brightness control
* @param {number} value
* @private
*/
_setBrightness(value) {
const hsv = RGBToHSV(this.color.r, this.color.g, this.color.b);
hsv.v = value / 100;
const rgba = HSVToRGB(hsv.h, hsv.s, hsv.v);
rgba["a"] = this.color.a;
this.color = rgba;
this._updatePicker();
}
/**
* update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
* @param {object} rgba
* @private
*/
_updatePicker(rgba = this.color) {
const hsv = RGBToHSV(rgba.r, rgba.g, rgba.b);
const ctx = this.colorPickerCanvas.getContext("2d");
if (this.pixelRation === void 0) {
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
}
ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
const w = this.colorPickerCanvas.clientWidth;
const h = this.colorPickerCanvas.clientHeight;
ctx.clearRect(0, 0, w, h);
ctx.putImageData(this.hueCircle, 0, 0);
ctx.fillStyle = "rgba(0,0,0," + (1 - hsv.v) + ")";
ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
ctx.fill();
this.brightnessRange.value = 100 * hsv.v;
this.opacityRange.value = 100 * rgba.a;
this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
}
/**
* used by create to set the size of the canvas.
* @private
*/
_setSize() {
this.colorPickerCanvas.style.width = "100%";
this.colorPickerCanvas.style.height = "100%";
this.colorPickerCanvas.width = 289 * this.pixelRatio;
this.colorPickerCanvas.height = 289 * this.pixelRatio;
}
/**
* create all dom elements
* TODO: cleanup, lots of similar dom elements
* @private
*/
_create() {
this.frame = document.createElement("div");
this.frame.className = "vis-color-picker";
this.colorPickerDiv = document.createElement("div");
this.colorPickerSelector = document.createElement("div");
this.colorPickerSelector.className = "vis-selector";
this.colorPickerDiv.appendChild(this.colorPickerSelector);
this.colorPickerCanvas = document.createElement("canvas");
this.colorPickerDiv.appendChild(this.colorPickerCanvas);
if (!this.colorPickerCanvas.getContext) {
const noCanvas = document.createElement("DIV");
noCanvas.style.color = "red";
noCanvas.style.fontWeight = "bold";
noCanvas.style.padding = "10px";
noCanvas.innerText = "Error: your browser does not support HTML canvas";
this.colorPickerCanvas.appendChild(noCanvas);
} else {
const ctx = this.colorPickerCanvas.getContext("2d");
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
}
this.colorPickerDiv.className = "vis-color";
this.opacityDiv = document.createElement("div");
this.opacityDiv.className = "vis-opacity";
this.brightnessDiv = document.createElement("div");
this.brightnessDiv.className = "vis-brightness";
this.arrowDiv = document.createElement("div");
this.arrowDiv.className = "vis-arrow";
this.opacityRange = document.createElement("input");
try {
this.opacityRange.type = "range";
this.opacityRange.min = "0";
this.opacityRange.max = "100";
} catch (err) {
}
this.opacityRange.value = "100";
this.opacityRange.className = "vis-range";
this.brightnessRange = document.createElement("input");
try {
this.brightnessRange.type = "range";
this.brightnessRange.min = "0";
this.brightnessRange.max = "100";
} catch (err) {
}
this.brightnessRange.value = "100";
this.brightnessRange.className = "vis-range";
this.opacityDiv.appendChild(this.opacityRange);
this.brightnessDiv.appendChild(this.brightnessRange);
const me = this;
this.opacityRange.onchange = function() {
me._setOpacity(this.value);
};
this.opacityRange.oninput = function() {
me._setOpacity(this.value);
};
this.brightnessRange.onchange = function() {
me._setBrightness(this.value);
};
this.brightnessRange.oninput = function() {
me._setBrightness(this.value);
};
this.brightnessLabel = document.createElement("div");
this.brightnessLabel.className = "vis-label vis-brightness";
this.brightnessLabel.innerText = "brightness:";
this.opacityLabel = document.createElement("div");
this.opacityLabel.className = "vis-label vis-opacity";
this.opacityLabel.innerText = "opacity:";
this.newColorDiv = document.createElement("div");
this.newColorDiv.className = "vis-new-color";
this.newColorDiv.innerText = "new";
this.initialColorDiv = document.createElement("div");
this.initialColorDiv.className = "vis-initial-color";
this.initialColorDiv.innerText = "initial";
this.cancelButton = document.createElement("div");
this.cancelButton.className = "vis-button vis-cancel";
this.cancelButton.innerText = "cancel";
this.cancelButton.onclick = this._hide.bind(this, false);
this.applyButton = document.createElement("div");
this.applyButton.className = "vis-button vis-apply";
this.applyButton.innerText = "apply";
this.applyButton.onclick = this._apply.bind(this);
this.saveButton = document.createElement("div");
this.saveButton.className = "vis-button vis-save";
this.saveButton.innerText = "save";
this.saveButton.onclick = this._save.bind(this);
this.loadButton = document.createElement("div");
this.loadButton.className = "vis-button vis-load";
this.loadButton.innerText = "load last";
this.loadButton.onclick = this._loadLast.bind(this);
this.frame.appendChild(this.colorPickerDiv);
this.frame.appendChild(this.arrowDiv);
this.frame.appendChild(this.brightnessLabel);
this.frame.appendChild(this.brightnessDiv);
this.frame.appendChild(this.opacityLabel);
this.frame.appendChild(this.opacityDiv);
this.frame.appendChild(this.newColorDiv);
this.frame.appendChild(this.initialColorDiv);
this.frame.appendChild(this.cancelButton);
this.frame.appendChild(this.applyButton);
this.frame.appendChild(this.saveButton);
this.frame.appendChild(this.loadButton);
}
/**
* bind hammer to the color picker
* @private
*/
_bindHammer() {
this.drag = {};
this.pinch = {};
this.hammer = new Hammer$1(this.colorPickerCanvas);
this.hammer.get("pinch").set({ enable: true });
this.hammer.on("hammer.input", (event2) => {
if (event2.isFirst) {
this._moveSelector(event2);
}
});
this.hammer.on("tap", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panstart", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panmove", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panend", (event2) => {
this._moveSelector(event2);
});
}
/**
* generate the hue circle. This is relatively heavy (200ms) and is done only once on the first time it is shown.
* @private
*/
_generateHueCircle() {
if (this.generated === false) {
const ctx = this.colorPickerCanvas.getContext("2d");
if (this.pixelRation === void 0) {
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
}
ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
const w = this.colorPickerCanvas.clientWidth;
const h = this.colorPickerCanvas.clientHeight;
ctx.clearRect(0, 0, w, h);
let x, y, hue, sat;
this.centerCoordinates = { x: w * 0.5, y: h * 0.5 };
this.r = 0.49 * w;
const angleConvert = 2 * Math.PI / 360;
const hfac = 1 / 360;
const sfac = 1 / this.r;
let rgb;
for (hue = 0; hue < 360; hue++) {
for (sat = 0; sat < this.r; sat++) {
x = this.centerCoordinates.x + sat * Math.sin(angleConvert * hue);
y = this.centerCoordinates.y + sat * Math.cos(angleConvert * hue);
rgb = HSVToRGB(hue * hfac, sat * sfac, 1);
ctx.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
ctx.fillRect(x - 0.5, y - 0.5, 2, 2);
}
}
ctx.strokeStyle = "rgba(0,0,0,1)";
ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
ctx.stroke();
this.hueCircle = ctx.getImageData(0, 0, w, h);
}
this.generated = true;
}
/**
* move the selector. This is called by hammer functions.
* @param {Event}  event   The event
* @private
*/
_moveSelector(event2) {
const rect = this.colorPickerDiv.getBoundingClientRect();
const left = event2.center.x - rect.left;
const top = event2.center.y - rect.top;
const centerY = 0.5 * this.colorPickerDiv.clientHeight;
const centerX = 0.5 * this.colorPickerDiv.clientWidth;
const x = left - centerX;
const y = top - centerY;
const angle = Math.atan2(x, y);
const radius = 0.98 * Math.min(Math.sqrt(x * x + y * y), centerX);
const newTop = Math.cos(angle) * radius + centerY;
const newLeft = Math.sin(angle) * radius + centerX;
this.colorPickerSelector.style.top = newTop - 0.5 * this.colorPickerSelector.clientHeight + "px";
this.colorPickerSelector.style.left = newLeft - 0.5 * this.colorPickerSelector.clientWidth + "px";
let h = angle / (2 * Math.PI);
h = h < 0 ? h + 1 : h;
const s = radius / this.r;
const hsv = RGBToHSV(this.color.r, this.color.g, this.color.b);
hsv.h = h;
hsv.s = s;
const rgba = HSVToRGB(hsv.h, hsv.s, hsv.v);
rgba["a"] = this.color.a;
this.color = rgba;
this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
}
};
function wrapInTag(...rest) {
if (rest.length < 1) {
throw new TypeError("Invalid arguments.");
} else if (rest.length === 1) {
return document.createTextNode(rest[0]);
} else {
const element = document.createElement(rest[0]);
element.appendChild(wrapInTag(...rest.slice(1)));
return element;
}
}
var Configurator$1 = class Configurator {
/**
* @param {object} parentModule        | the location where parentModule.setOptions() can be called
* @param {object} defaultContainer    | the default container of the module
* @param {object} configureOptions    | the fully configured and predefined options set found in allOptions.js
* @param {number} pixelRatio          | canvas pixel ratio
* @param {Function} hideOption        | custom logic to dynamically hide options
*/
constructor(parentModule, defaultContainer, configureOptions2, pixelRatio = 1, hideOption = () => false) {
this.parent = parentModule;
this.changedOptions = [];
this.container = defaultContainer;
this.allowCreation = false;
this.hideOption = hideOption;
this.options = {};
this.initialized = false;
this.popupCounter = 0;
this.defaultOptions = {
enabled: false,
filter: true,
container: void 0,
showButton: true
};
Object.assign(this.options, this.defaultOptions);
this.configureOptions = configureOptions2;
this.moduleOptions = {};
this.domElements = [];
this.popupDiv = {};
this.popupLimit = 5;
this.popupHistory = {};
this.colorPicker = new ColorPicker$1(pixelRatio);
this.wrapper = void 0;
}
/**
* refresh all options.
* Because all modules parse their options by themselves, we just use their options. We copy them here.
* @param {object} options
*/
setOptions(options) {
if (options !== void 0) {
this.popupHistory = {};
this._removePopup();
let enabled = true;
if (typeof options === "string") {
this.options.filter = options;
} else if (Array.isArray(options)) {
this.options.filter = options.join();
} else if (typeof options === "object") {
if (options == null) {
throw new TypeError("options cannot be null");
}
if (options.container !== void 0) {
this.options.container = options.container;
}
if (options.filter !== void 0) {
this.options.filter = options.filter;
}
if (options.showButton !== void 0) {
this.options.showButton = options.showButton;
}
if (options.enabled !== void 0) {
enabled = options.enabled;
}
} else if (typeof options === "boolean") {
this.options.filter = true;
enabled = options;
} else if (typeof options === "function") {
this.options.filter = options;
enabled = true;
}
if (this.options.filter === false) {
enabled = false;
}
this.options.enabled = enabled;
}
this._clean();
}
/**
*
* @param {object} moduleOptions
*/
setModuleOptions(moduleOptions) {
this.moduleOptions = moduleOptions;
if (this.options.enabled === true) {
this._clean();
if (this.options.container !== void 0) {
this.container = this.options.container;
}
this._create();
}
}
/**
* Create all DOM elements
* @private
*/
_create() {
this._clean();
this.changedOptions = [];
const filter = this.options.filter;
let counter = 0;
let show = false;
for (const option2 in this.configureOptions) {
if (Object.prototype.hasOwnProperty.call(this.configureOptions, option2)) {
this.allowCreation = false;
show = false;
if (typeof filter === "function") {
show = filter(option2, []);
show = show || this._handleObject(this.configureOptions[option2], [option2], true);
} else if (filter === true || filter.indexOf(option2) !== -1) {
show = true;
}
if (show !== false) {
this.allowCreation = true;
if (counter > 0) {
this._makeItem([]);
}
this._makeHeader(option2);
this._handleObject(this.configureOptions[option2], [option2]);
}
counter++;
}
}
this._makeButton();
this._push();
}
/**
* draw all DOM elements on the screen
* @private
*/
_push() {
this.wrapper = document.createElement("div");
this.wrapper.className = "vis-configuration-wrapper";
this.container.appendChild(this.wrapper);
for (let i = 0; i < this.domElements.length; i++) {
this.wrapper.appendChild(this.domElements[i]);
}
this._showPopupIfNeeded();
}
/**
* delete all DOM elements
* @private
*/
_clean() {
for (let i = 0; i < this.domElements.length; i++) {
this.wrapper.removeChild(this.domElements[i]);
}
if (this.wrapper !== void 0) {
this.container.removeChild(this.wrapper);
this.wrapper = void 0;
}
this.domElements = [];
this._removePopup();
}
/**
* get the value from the actualOptions if it exists
* @param {Array} path    | where to look for the actual option
* @returns {*}
* @private
*/
_getValue(path) {
let base = this.moduleOptions;
for (let i = 0; i < path.length; i++) {
if (base[path[i]] !== void 0) {
base = base[path[i]];
} else {
base = void 0;
break;
}
}
return base;
}
/**
* all option elements are wrapped in an item
* @param {Array} path    | where to look for the actual option
* @param {Array.<Element>} domElements
* @returns {number}
* @private
*/
_makeItem(path, ...domElements) {
if (this.allowCreation === true) {
const item = document.createElement("div");
item.className = "vis-configuration vis-config-item vis-config-s" + path.length;
domElements.forEach((element) => {
item.appendChild(element);
});
this.domElements.push(item);
return this.domElements.length;
}
return 0;
}
/**
* header for major subjects
* @param {string} name
* @private
*/
_makeHeader(name) {
const div = document.createElement("div");
div.className = "vis-configuration vis-config-header";
div.innerText = name;
this._makeItem([], div);
}
/**
* make a label, if it is an object label, it gets different styling.
* @param {string} name
* @param {Array} path    | where to look for the actual option
* @param {string} objectLabel
* @returns {HTMLElement}
* @private
*/
_makeLabel(name, path, objectLabel = false) {
const div = document.createElement("div");
div.className = "vis-configuration vis-config-label vis-config-s" + path.length;
if (objectLabel === true) {
while (div.firstChild) {
div.removeChild(div.firstChild);
}
div.appendChild(wrapInTag("i", "b", name));
} else {
div.innerText = name + ":";
}
return div;
}
/**
* make a dropdown list for multiple possible string optoins
* @param {Array.<number>} arr
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_makeDropdown(arr, value, path) {
const select = document.createElement("select");
select.className = "vis-configuration vis-config-select";
let selectedValue = 0;
if (value !== void 0) {
if (arr.indexOf(value) !== -1) {
selectedValue = arr.indexOf(value);
}
}
for (let i = 0; i < arr.length; i++) {
const option2 = document.createElement("option");
option2.value = arr[i];
if (i === selectedValue) {
option2.selected = "selected";
}
option2.innerText = arr[i];
select.appendChild(option2);
}
const me = this;
select.onchange = function() {
me._update(this.value, path);
};
const label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, select);
}
/**
* make a range object for numeric options
* @param {Array.<number>} arr
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_makeRange(arr, value, path) {
const defaultValue = arr[0];
const min = arr[1];
const max = arr[2];
const step = arr[3];
const range = document.createElement("input");
range.className = "vis-configuration vis-config-range";
try {
range.type = "range";
range.min = min;
range.max = max;
} catch (err) {
}
range.step = step;
let popupString = "";
let popupValue = 0;
if (value !== void 0) {
const factor = 1.2;
if (value < 0 && value * factor < min) {
range.min = Math.ceil(value * factor);
popupValue = range.min;
popupString = "range increased";
} else if (value / factor < min) {
range.min = Math.ceil(value / factor);
popupValue = range.min;
popupString = "range increased";
}
if (value * factor > max && max !== 1) {
range.max = Math.ceil(value * factor);
popupValue = range.max;
popupString = "range increased";
}
range.value = value;
} else {
range.value = defaultValue;
}
const input = document.createElement("input");
input.className = "vis-configuration vis-config-rangeinput";
input.value = range.value;
const me = this;
range.onchange = function() {
input.value = this.value;
me._update(Number(this.value), path);
};
range.oninput = function() {
input.value = this.value;
};
const label = this._makeLabel(path[path.length - 1], path);
const itemIndex = this._makeItem(path, label, range, input);
if (popupString !== "" && this.popupHistory[itemIndex] !== popupValue) {
this.popupHistory[itemIndex] = popupValue;
this._setupPopup(popupString, itemIndex);
}
}
/**
* make a button object
* @private
*/
_makeButton() {
if (this.options.showButton === true) {
const generateButton = document.createElement("div");
generateButton.className = "vis-configuration vis-config-button";
generateButton.innerText = "generate options";
generateButton.onclick = () => {
this._printOptions();
};
generateButton.onmouseover = () => {
generateButton.className = "vis-configuration vis-config-button hover";
};
generateButton.onmouseout = () => {
generateButton.className = "vis-configuration vis-config-button";
};
this.optionsContainer = document.createElement("div");
this.optionsContainer.className = "vis-configuration vis-config-option-container";
this.domElements.push(this.optionsContainer);
this.domElements.push(generateButton);
}
}
/**
* prepare the popup
* @param {string} string
* @param {number} index
* @private
*/
_setupPopup(string2, index) {
if (this.initialized === true && this.allowCreation === true && this.popupCounter < this.popupLimit) {
const div = document.createElement("div");
div.id = "vis-configuration-popup";
div.className = "vis-configuration-popup";
div.innerText = string2;
div.onclick = () => {
this._removePopup();
};
this.popupCounter += 1;
this.popupDiv = { html: div, index };
}
}
/**
* remove the popup from the dom
* @private
*/
_removePopup() {
if (this.popupDiv.html !== void 0) {
this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);
clearTimeout(this.popupDiv.hideTimeout);
clearTimeout(this.popupDiv.deleteTimeout);
this.popupDiv = {};
}
}
/**
* Show the popup if it is needed.
* @private
*/
_showPopupIfNeeded() {
if (this.popupDiv.html !== void 0) {
const correspondingElement = this.domElements[this.popupDiv.index];
const rect = correspondingElement.getBoundingClientRect();
this.popupDiv.html.style.left = rect.left + "px";
this.popupDiv.html.style.top = rect.top - 30 + "px";
document.body.appendChild(this.popupDiv.html);
this.popupDiv.hideTimeout = setTimeout(() => {
this.popupDiv.html.style.opacity = 0;
}, 1500);
this.popupDiv.deleteTimeout = setTimeout(() => {
this._removePopup();
}, 1800);
}
}
/**
* make a checkbox for boolean options.
* @param {number} defaultValue
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_makeCheckbox(defaultValue, value, path) {
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "vis-configuration vis-config-checkbox";
checkbox.checked = defaultValue;
if (value !== void 0) {
checkbox.checked = value;
if (value !== defaultValue) {
if (typeof defaultValue === "object") {
if (value !== defaultValue.enabled) {
this.changedOptions.push({ path, value });
}
} else {
this.changedOptions.push({ path, value });
}
}
}
const me = this;
checkbox.onchange = function() {
me._update(this.checked, path);
};
const label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, checkbox);
}
/**
* make a text input field for string options.
* @param {number} defaultValue
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_makeTextInput(defaultValue, value, path) {
const checkbox = document.createElement("input");
checkbox.type = "text";
checkbox.className = "vis-configuration vis-config-text";
checkbox.value = value;
if (value !== defaultValue) {
this.changedOptions.push({ path, value });
}
const me = this;
checkbox.onchange = function() {
me._update(this.value, path);
};
const label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, checkbox);
}
/**
* make a color field with a color picker for color fields
* @param {Array.<number>} arr
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_makeColorField(arr, value, path) {
const defaultColor = arr[1];
const div = document.createElement("div");
value = value === void 0 ? defaultColor : value;
if (value !== "none") {
div.className = "vis-configuration vis-config-colorBlock";
div.style.backgroundColor = value;
} else {
div.className = "vis-configuration vis-config-colorBlock none";
}
value = value === void 0 ? defaultColor : value;
div.onclick = () => {
this._showColorPicker(value, div, path);
};
const label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, div);
}
/**
* used by the color buttons to call the color picker.
* @param {number} value
* @param {HTMLElement} div
* @param {Array} path    | where to look for the actual option
* @private
*/
_showColorPicker(value, div, path) {
div.onclick = function() {
};
this.colorPicker.insertTo(div);
this.colorPicker.show();
this.colorPicker.setColor(value);
this.colorPicker.setUpdateCallback((color) => {
const colorString = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
div.style.backgroundColor = colorString;
this._update(colorString, path);
});
this.colorPicker.setCloseCallback(() => {
div.onclick = () => {
this._showColorPicker(value, div, path);
};
});
}
/**
* parse an object and draw the correct items
* @param {object} obj
* @param {Array} [path]    | where to look for the actual option
* @param {boolean} [checkOnly]
* @returns {boolean}
* @private
*/
_handleObject(obj, path = [], checkOnly = false) {
let show = false;
const filter = this.options.filter;
let visibleInSet = false;
for (const subObj in obj) {
if (Object.prototype.hasOwnProperty.call(obj, subObj)) {
show = true;
const item = obj[subObj];
const newPath = copyAndExtendArray(path, subObj);
if (typeof filter === "function") {
show = filter(subObj, path);
if (show === false) {
if (!Array.isArray(item) && typeof item !== "string" && typeof item !== "boolean" && item instanceof Object) {
this.allowCreation = false;
show = this._handleObject(item, newPath, true);
this.allowCreation = checkOnly === false;
}
}
}
if (show !== false) {
visibleInSet = true;
const value = this._getValue(newPath);
if (Array.isArray(item)) {
this._handleArray(item, value, newPath);
} else if (typeof item === "string") {
this._makeTextInput(item, value, newPath);
} else if (typeof item === "boolean") {
this._makeCheckbox(item, value, newPath);
} else if (item instanceof Object) {
if (!this.hideOption(path, subObj, this.moduleOptions)) {
if (item.enabled !== void 0) {
const enabledPath = copyAndExtendArray(newPath, "enabled");
const enabledValue = this._getValue(enabledPath);
if (enabledValue === true) {
const label = this._makeLabel(subObj, newPath, true);
this._makeItem(newPath, label);
visibleInSet = this._handleObject(item, newPath) || visibleInSet;
} else {
this._makeCheckbox(item, enabledValue, newPath);
}
} else {
const label = this._makeLabel(subObj, newPath, true);
this._makeItem(newPath, label);
visibleInSet = this._handleObject(item, newPath) || visibleInSet;
}
}
} else {
console.error("dont know how to handle", item, subObj, newPath);
}
}
}
}
return visibleInSet;
}
/**
* handle the array type of option
* @param {Array.<number>} arr
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_handleArray(arr, value, path) {
if (typeof arr[0] === "string" && arr[0] === "color") {
this._makeColorField(arr, value, path);
if (arr[1] !== value) {
this.changedOptions.push({ path, value });
}
} else if (typeof arr[0] === "string") {
this._makeDropdown(arr, value, path);
if (arr[0] !== value) {
this.changedOptions.push({ path, value });
}
} else if (typeof arr[0] === "number") {
this._makeRange(arr, value, path);
if (arr[0] !== value) {
this.changedOptions.push({ path, value: Number(value) });
}
}
}
/**
* called to update the network with the new settings.
* @param {number} value
* @param {Array} path    | where to look for the actual option
* @private
*/
_update(value, path) {
const options = this._constructOptions(value, path);
if (this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit) {
this.parent.body.emitter.emit("configChange", options);
}
this.initialized = true;
this.parent.setOptions(options);
}
/**
*
* @param {string | boolean} value
* @param {Array.<string>} path
* @param {{}} optionsObj
* @returns {{}}
* @private
*/
_constructOptions(value, path, optionsObj = {}) {
let pointer = optionsObj;
value = value === "true" ? true : value;
value = value === "false" ? false : value;
for (let i = 0; i < path.length; i++) {
if (path[i] !== "global") {
if (pointer[path[i]] === void 0) {
pointer[path[i]] = {};
}
if (i !== path.length - 1) {
pointer = pointer[path[i]];
} else {
pointer[path[i]] = value;
}
}
}
return optionsObj;
}
/**
* @private
*/
_printOptions() {
const options = this.getOptions();
while (this.optionsContainer.firstChild) {
this.optionsContainer.removeChild(this.optionsContainer.firstChild);
}
this.optionsContainer.appendChild(
wrapInTag("pre", "const options = " + JSON.stringify(options, null, 2))
);
}
/**
*
* @returns {{}} options
*/
getOptions() {
const options = {};
for (let i = 0; i < this.changedOptions.length; i++) {
this._constructOptions(
this.changedOptions[i].value,
this.changedOptions[i].path,
options
);
}
return options;
}
};
var Popup$1 = class Popup {
/**
* @param {Element} container       The container object.
* @param {string}  overflowMethod  How the popup should act to overflowing ('flip' or 'cap')
*/
constructor(container, overflowMethod) {
this.container = container;
this.overflowMethod = overflowMethod || "cap";
this.x = 0;
this.y = 0;
this.padding = 5;
this.hidden = false;
this.frame = document.createElement("div");
this.frame.className = "vis-tooltip";
this.container.appendChild(this.frame);
}
/**
* @param {number} x   Horizontal position of the popup window
* @param {number} y   Vertical position of the popup window
*/
setPosition(x, y) {
this.x = parseInt(x);
this.y = parseInt(y);
}
/**
* Set the content for the popup window. This can be HTML code or text.
* @param {string | Element} content
*/
setText(content) {
if (content instanceof Element) {
while (this.frame.firstChild) {
this.frame.removeChild(this.frame.firstChild);
}
this.frame.appendChild(content);
} else {
this.frame.innerText = content;
}
}
/**
* Show the popup window
* @param {boolean} [doShow]    Show or hide the window
*/
show(doShow) {
if (doShow === void 0) {
doShow = true;
}
if (doShow === true) {
const height = this.frame.clientHeight;
const width = this.frame.clientWidth;
const maxHeight = this.frame.parentNode.clientHeight;
const maxWidth = this.frame.parentNode.clientWidth;
let left = 0, top = 0;
if (this.overflowMethod == "flip") {
let isLeft = false, isTop = true;
if (this.y - height < this.padding) {
isTop = false;
}
if (this.x + width > maxWidth - this.padding) {
isLeft = true;
}
if (isLeft) {
left = this.x - width;
} else {
left = this.x;
}
if (isTop) {
top = this.y - height;
} else {
top = this.y;
}
} else {
top = this.y - height;
if (top + height + this.padding > maxHeight) {
top = maxHeight - height - this.padding;
}
if (top < this.padding) {
top = this.padding;
}
left = this.x;
if (left + width + this.padding > maxWidth) {
left = maxWidth - width - this.padding;
}
if (left < this.padding) {
left = this.padding;
}
}
this.frame.style.left = left + "px";
this.frame.style.top = top + "px";
this.frame.style.visibility = "visible";
this.hidden = false;
} else {
this.hide();
}
}
/**
* Hide the popup window
*/
hide() {
this.hidden = true;
this.frame.style.left = "0";
this.frame.style.top = "0";
this.frame.style.visibility = "hidden";
}
/**
* Remove the popup window
*/
destroy() {
this.frame.parentNode.removeChild(this.frame);
}
};
var errorFound = false;
var allOptions;
var VALIDATOR_PRINT_STYLE$1 = "background: #FFeeee; color: #dd0000";
var Validator$1 = class Validator {
/**
* Main function to be called
* @param {object} options
* @param {object} referenceOptions
* @param {object} subObject
* @returns {boolean}
* @static
*/
static validate(options, referenceOptions, subObject) {
errorFound = false;
allOptions = referenceOptions;
let usedOptions = referenceOptions;
if (subObject !== void 0) {
usedOptions = referenceOptions[subObject];
}
Validator.parse(options, usedOptions, []);
return errorFound;
}
/**
* Will traverse an object recursively and check every value
* @param {object} options
* @param {object} referenceOptions
* @param {Array} path    | where to look for the actual option
* @static
*/
static parse(options, referenceOptions, path) {
for (const option2 in options) {
if (Object.prototype.hasOwnProperty.call(options, option2)) {
Validator.check(option2, options, referenceOptions, path);
}
}
}
/**
* Check every value. If the value is an object, call the parse function on that object.
* @param {string} option
* @param {object} options
* @param {object} referenceOptions
* @param {Array} path    | where to look for the actual option
* @static
*/
static check(option2, options, referenceOptions, path) {
if (referenceOptions[option2] === void 0 && referenceOptions.__any__ === void 0) {
Validator.getSuggestion(option2, referenceOptions, path);
return;
}
let referenceOption = option2;
let is_object = true;
if (referenceOptions[option2] === void 0 && referenceOptions.__any__ !== void 0) {
referenceOption = "__any__";
is_object = Validator.getType(options[option2]) === "object";
}
let refOptionObj = referenceOptions[referenceOption];
if (is_object && refOptionObj.__type__ !== void 0) {
refOptionObj = refOptionObj.__type__;
}
Validator.checkFields(
option2,
options,
referenceOptions,
referenceOption,
refOptionObj,
path
);
}
/**
*
* @param {string}  option           | the option property
* @param {object}  options          | The supplied options object
* @param {object}  referenceOptions | The reference options containing all options and their allowed formats
* @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
* @param {string}  refOptionObj     | This is the type object from the reference options
* @param {Array}   path             | where in the object is the option
* @static
*/
static checkFields(option2, options, referenceOptions, referenceOption, refOptionObj, path) {
const log = function(message) {
console.error(
"%c" + message + Validator.printLocation(path, option2),
VALIDATOR_PRINT_STYLE$1
);
};
const optionType = Validator.getType(options[option2]);
const refOptionType = refOptionObj[optionType];
if (refOptionType !== void 0) {
if (Validator.getType(refOptionType) === "array" && refOptionType.indexOf(options[option2]) === -1) {
log(
'Invalid option detected in "' + option2 + '". Allowed values are:' + Validator.print(refOptionType) + ' not "' + options[option2] + '". '
);
errorFound = true;
} else if (optionType === "object" && referenceOption !== "__any__") {
path = copyAndExtendArray(path, option2);
Validator.parse(
options[option2],
referenceOptions[referenceOption],
path
);
}
} else if (refOptionObj["any"] === void 0) {
log(
'Invalid type received for "' + option2 + '". Expected: ' + Validator.print(Object.keys(refOptionObj)) + ". Received [" + optionType + '] "' + options[option2] + '"'
);
errorFound = true;
}
}
/**
*
* @param {object | boolean | number | string | Array.<number> | Date | Node | Moment | undefined | null} object
* @returns {string}
* @static
*/
static getType(object2) {
const type = typeof object2;
if (type === "object") {
if (object2 === null) {
return "null";
}
if (object2 instanceof Boolean) {
return "boolean";
}
if (object2 instanceof Number) {
return "number";
}
if (object2 instanceof String) {
return "string";
}
if (Array.isArray(object2)) {
return "array";
}
if (object2 instanceof Date) {
return "date";
}
if (object2.nodeType !== void 0) {
return "dom";
}
if (object2._isAMomentObject === true) {
return "moment";
}
return "object";
} else if (type === "number") {
return "number";
} else if (type === "boolean") {
return "boolean";
} else if (type === "string") {
return "string";
} else if (type === void 0) {
return "undefined";
}
return type;
}
/**
* @param {string} option
* @param {object} options
* @param {Array.<string>} path
* @static
*/
static getSuggestion(option2, options, path) {
const localSearch = Validator.findInOptions(option2, options, path, false);
const globalSearch = Validator.findInOptions(option2, allOptions, [], true);
const localSearchThreshold = 8;
const globalSearchThreshold = 4;
let msg;
if (localSearch.indexMatch !== void 0) {
msg = " in " + Validator.printLocation(localSearch.path, option2, "") + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
} else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
msg = " in " + Validator.printLocation(localSearch.path, option2, "") + "Perhaps it was misplaced? Matching option found at: " + Validator.printLocation(
globalSearch.path,
globalSearch.closestMatch,
""
);
} else if (localSearch.distance <= localSearchThreshold) {
msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator.printLocation(localSearch.path, option2);
} else {
msg = ". Did you mean one of these: " + Validator.print(Object.keys(options)) + Validator.printLocation(path, option2);
}
console.error(
'%cUnknown option detected: "' + option2 + '"' + msg,
VALIDATOR_PRINT_STYLE$1
);
errorFound = true;
}
/**
* traverse the options in search for a match.
* @param {string} option
* @param {object} options
* @param {Array} path    | where to look for the actual option
* @param {boolean} [recursive]
* @returns {{closestMatch: string, path: Array, distance: number}}
* @static
*/
static findInOptions(option2, options, path, recursive = false) {
let min = 1e9;
let closestMatch = "";
let closestMatchPath = [];
const lowerCaseOption = option2.toLowerCase();
let indexMatch = void 0;
for (const op in options) {
let distance;
if (options[op].__type__ !== void 0 && recursive === true) {
const result = Validator.findInOptions(
option2,
options[op],
copyAndExtendArray(path, op)
);
if (min > result.distance) {
closestMatch = result.closestMatch;
closestMatchPath = result.path;
min = result.distance;
indexMatch = result.indexMatch;
}
} else {
if (op.toLowerCase().indexOf(lowerCaseOption) !== -1) {
indexMatch = op;
}
distance = Validator.levenshteinDistance(option2, op);
if (min > distance) {
closestMatch = op;
closestMatchPath = copyArray(path);
min = distance;
}
}
}
return {
closestMatch,
path: closestMatchPath,
distance: min,
indexMatch
};
}
/**
* @param {Array.<string>} path
* @param {object} option
* @param {string} prefix
* @returns {string}
* @static
*/
static printLocation(path, option2, prefix = "Problem value found at: \n") {
let str = "\n\n" + prefix + "options = {\n";
for (let i = 0; i < path.length; i++) {
for (let j = 0; j < i + 1; j++) {
str += "  ";
}
str += path[i] + ": {\n";
}
for (let j = 0; j < path.length + 1; j++) {
str += "  ";
}
str += option2 + "\n";
for (let i = 0; i < path.length + 1; i++) {
for (let j = 0; j < path.length - i; j++) {
str += "  ";
}
str += "}\n";
}
return str + "\n\n";
}
/**
* @param {object} options
* @returns {string}
* @static
*/
static print(options) {
return JSON.stringify(options).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
}
/**
*  Compute the edit distance between the two given strings
*  http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
*
*  Copyright (c) 2011 Andrei Mackenzie
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* @param {string} a
* @param {string} b
* @returns {Array.<Array.<number>>}}
* @static
*/
static levenshteinDistance(a, b) {
if (a.length === 0) return b.length;
if (b.length === 0) return a.length;
const matrix = [];
let i;
for (i = 0; i <= b.length; i++) {
matrix[i] = [i];
}
let j;
for (j = 0; j <= a.length; j++) {
matrix[0][j] = j;
}
for (i = 1; i <= b.length; i++) {
for (j = 1; j <= a.length; j++) {
if (b.charAt(i - 1) == a.charAt(j - 1)) {
matrix[i][j] = matrix[i - 1][j - 1];
} else {
matrix[i][j] = Math.min(
matrix[i - 1][j - 1] + 1,
Math.min(
matrix[i][j - 1] + 1,
matrix[i - 1][j] + 1
)
);
}
}
}
return matrix[b.length][a.length];
}
};
var Activator = Activator$1;
var ColorPicker2 = ColorPicker$1;
var Configurator2 = Configurator$1;
var Hammer2 = Hammer$1;
var Popup2 = Popup$1;
var VALIDATOR_PRINT_STYLE = VALIDATOR_PRINT_STYLE$1;
var Validator2 = Validator$1;
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
if (!getRandomValues) {
if (typeof crypto === "undefined" || !crypto.getRandomValues) {
throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
}
getRandomValues = crypto.getRandomValues.bind(crypto);
}
return getRandomValues(rnds8);
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };
function v4(options, buf, offset) {
if (native_default.randomUUID && !buf && !options) {
return native_default.randomUUID();
}
options = options || {};
const rnds = options.random ?? options.rng?.() ?? rng();
if (rnds.length < 16) {
throw new Error("Random bytes length must be >= 16");
}
rnds[6] = rnds[6] & 15 | 64;
rnds[8] = rnds[8] & 63 | 128;
if (buf) {
offset = offset || 0;
if (offset < 0 || offset + 16 > buf.length) {
throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
}
for (let i = 0; i < 16; ++i) {
buf[offset + i] = rnds[i];
}
return buf;
}
return unsafeStringify(rnds);
}
var v4_default = v4;
function createNewDataPipeFrom(from) {
return new DataPipeUnderConstruction(from);
}
var SimpleDataPipe = class {
_source;
_transformers;
_target;
/**
* Bound listeners for use with `DataInterface['on' | 'off']`.
*/
_listeners = {
add: this._add.bind(this),
remove: this._remove.bind(this),
update: this._update.bind(this)
};
/**
* Create a new data pipe.
* @param source - The data set or data view that will be observed.
* @param transformers - An array of transforming functions to be used to
* filter or transform the items in the pipe.
* @param target - The data set or data view that will receive the items.
*/
constructor(source, transformers, target) {
this._source = source;
this._transformers = transformers;
this._target = target;
}
/** @inheritDoc */
all() {
this._target.update(this._transformItems(this._source.get()));
return this;
}
/** @inheritDoc */
start() {
this._source.on("add", this._listeners.add);
this._source.on("remove", this._listeners.remove);
this._source.on("update", this._listeners.update);
return this;
}
/** @inheritDoc */
stop() {
this._source.off("add", this._listeners.add);
this._source.off("remove", this._listeners.remove);
this._source.off("update", this._listeners.update);
return this;
}
/**
* Apply the transformers to the items.
* @param items - The items to be transformed.
* @returns The transformed items.
*/
_transformItems(items) {
return this._transformers.reduce((items2, transform) => {
return transform(items2);
}, items);
}
/**
* Handle an add event.
* @param _name - Ignored.
* @param payload - The payload containing the ids of the added items.
*/
_add(_name, payload) {
if (payload == null) {
return;
}
this._target.add(this._transformItems(this._source.get(payload.items)));
}
/**
* Handle an update event.
* @param _name - Ignored.
* @param payload - The payload containing the ids of the updated items.
*/
_update(_name, payload) {
if (payload == null) {
return;
}
this._target.update(this._transformItems(this._source.get(payload.items)));
}
/**
* Handle a remove event.
* @param _name - Ignored.
* @param payload - The payload containing the data of the removed items.
*/
_remove(_name, payload) {
if (payload == null) {
return;
}
this._target.remove(this._transformItems(payload.oldData));
}
};
var DataPipeUnderConstruction = class {
_source;
/**
* Array transformers used to transform items within the pipe. This is typed
* as any for the sake of simplicity.
*/
_transformers = [];
/**
* Create a new data pipe factory. This is an internal constructor that
* should never be called from outside of this file.
* @param source - The source data set or data view for this pipe.
*/
constructor(source) {
this._source = source;
}
/**
* Filter the items.
* @param callback - A filtering function that returns true if given item
* should be piped and false if not.
* @returns This factory for further configuration.
*/
filter(callback) {
this._transformers.push((input) => input.filter(callback));
return this;
}
/**
* Map each source item to a new type.
* @param callback - A mapping function that takes a source item and returns
* corresponding mapped item.
* @typeParam TI - Target item type.
* @typeParam TP - Target item type's id property name.
* @returns This factory for further configuration.
*/
map(callback) {
this._transformers.push((input) => input.map(callback));
return this;
}
/**
* Map each source item to zero or more items of a new type.
* @param callback - A mapping function that takes a source item and returns
* an array of corresponding mapped items.
* @typeParam TI - Target item type.
* @typeParam TP - Target item type's id property name.
* @returns This factory for further configuration.
*/
flatMap(callback) {
this._transformers.push((input) => input.flatMap(callback));
return this;
}
/**
* Connect this pipe to given data set.
* @param target - The data set that will receive the items from this pipe.
* @returns The pipe connected between given data sets and performing
* configured transformation on the processed items.
*/
to(target) {
return new SimpleDataPipe(this._source, this._transformers, target);
}
};
function isId(value) {
return typeof value === "string" || typeof value === "number";
}
var Queue = class _Queue {
/** Delay in milliseconds. If defined the queue will be periodically flushed. */
delay;
/** Maximum number of entries in the queue before it will be flushed. */
max;
_queue = [];
_timeout = null;
_extended = null;
/**
* Construct a new Queue.
* @param options - Queue configuration.
*/
constructor(options) {
this.delay = null;
this.max = Infinity;
this.setOptions(options);
}
/**
* Update the configuration of the queue.
* @param options - Queue configuration.
*/
setOptions(options) {
if (options && typeof options.delay !== "undefined") {
this.delay = options.delay;
}
if (options && typeof options.max !== "undefined") {
this.max = options.max;
}
this._flushIfNeeded();
}
/**
* Extend an object with queuing functionality.
* The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
* @param object - The object to be extended.
* @param options - Additional options.
* @returns The created queue.
*/
static extend(object2, options) {
const queue = new _Queue(options);
if (object2.flush !== void 0) {
throw new Error("Target object already has a property flush");
}
object2.flush = () => {
queue.flush();
};
const methods = [
{
name: "flush",
original: void 0
}
];
if (options && options.replace) {
for (let i = 0; i < options.replace.length; i++) {
const name = options.replace[i];
methods.push({
name,
original: object2[name]
});
queue.replace(object2, name);
}
}
queue._extended = {
object: object2,
methods
};
return queue;
}
/**
* Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
*/
destroy() {
this.flush();
if (this._extended) {
const object2 = this._extended.object;
const methods = this._extended.methods;
for (let i = 0; i < methods.length; i++) {
const method = methods[i];
if (method.original) {
object2[method.name] = method.original;
} else {
delete object2[method.name];
}
}
this._extended = null;
}
}
/**
* Replace a method on an object with a queued version.
* @param object - Object having the method.
* @param method - The method name.
*/
replace(object2, method) {
const me = this;
const original = object2[method];
if (!original) {
throw new Error("Method " + method + " undefined");
}
object2[method] = function(...args) {
me.queue({
args,
fn: original,
context: this
});
};
}
/**
* Queue a call.
* @param entry - The function or entry to be queued.
*/
queue(entry) {
if (typeof entry === "function") {
this._queue.push({ fn: entry });
} else {
this._queue.push(entry);
}
this._flushIfNeeded();
}
/**
* Check whether the queue needs to be flushed.
*/
_flushIfNeeded() {
if (this._queue.length > this.max) {
this.flush();
}
if (this._timeout != null) {
clearTimeout(this._timeout);
this._timeout = null;
}
if (this.queue.length > 0 && typeof this.delay === "number") {
this._timeout = setTimeout(() => {
this.flush();
}, this.delay);
}
}
/**
* Flush all queued calls
*/
flush() {
this._queue.splice(0).forEach((entry) => {
entry.fn.apply(entry.context || entry.fn, entry.args || []);
});
}
};
var DataSetPart = class _DataSetPart {
_subscribers = {
"*": [],
add: [],
remove: [],
update: []
};
/**
* Trigger an event
* @param event - Event name.
* @param payload - Event payload.
* @param senderId - Id of the sender.
*/
_trigger(event2, payload, senderId) {
if (event2 === "*") {
throw new Error("Cannot trigger event *");
}
[...this._subscribers[event2], ...this._subscribers["*"]].forEach((subscriber) => {
subscriber(event2, payload, senderId != null ? senderId : null);
});
}
/**
* Subscribe to an event, add an event listener.
* @remarks Non-function callbacks are ignored.
* @param event - Event name.
* @param callback - Callback method.
*/
on(event2, callback) {
if (typeof callback === "function") {
this._subscribers[event2].push(callback);
}
}
/**
* Unsubscribe from an event, remove an event listener.
* @remarks If the same callback was subscribed more than once **all** occurences will be removed.
* @param event - Event name.
* @param callback - Callback method.
*/
off(event2, callback) {
this._subscribers[event2] = this._subscribers[event2].filter((subscriber) => subscriber !== callback);
}
/**
* @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
*/
subscribe = _DataSetPart.prototype.on;
/**
* @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
*/
unsubscribe = _DataSetPart.prototype.off;
/* develblock:start */
get testLeakSubscribers() {
return this._subscribers;
}
};
var DataStream = class _DataStream {
_pairs;
/**
* Create a new data stream.
* @param pairs - The id, item pairs.
*/
constructor(pairs) {
this._pairs = pairs;
}
/**
* Return an iterable of key, value pairs for every entry in the stream.
*/
*[Symbol.iterator]() {
for (const [id, item] of this._pairs) {
yield [id, item];
}
}
/**
* Return an iterable of key, value pairs for every entry in the stream.
*/
*entries() {
for (const [id, item] of this._pairs) {
yield [id, item];
}
}
/**
* Return an iterable of keys in the stream.
*/
*keys() {
for (const [id] of this._pairs) {
yield id;
}
}
/**
* Return an iterable of values in the stream.
*/
*values() {
for (const [, item] of this._pairs) {
yield item;
}
}
/**
* Return an array containing all the ids in this stream.
* @remarks
* The array may contain duplicities.
* @returns The array with all ids from this stream.
*/
toIdArray() {
return [...this._pairs].map((pair) => pair[0]);
}
/**
* Return an array containing all the items in this stream.
* @remarks
* The array may contain duplicities.
* @returns The array with all items from this stream.
*/
toItemArray() {
return [...this._pairs].map((pair) => pair[1]);
}
/**
* Return an array containing all the entries in this stream.
* @remarks
* The array may contain duplicities.
* @returns The array with all entries from this stream.
*/
toEntryArray() {
return [...this._pairs];
}
/**
* Return an object map containing all the items in this stream accessible by ids.
* @remarks
* In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
* @returns The object map of all id → item pairs from this stream.
*/
toObjectMap() {
const map = /* @__PURE__ */ Object.create(null);
for (const [id, item] of this._pairs) {
map[id] = item;
}
return map;
}
/**
* Return a map containing all the items in this stream accessible by ids.
* @returns The map of all id → item pairs from this stream.
*/
toMap() {
return new Map(this._pairs);
}
/**
* Return a set containing all the (unique) ids in this stream.
* @returns The set of all ids from this stream.
*/
toIdSet() {
return new Set(this.toIdArray());
}
/**
* Return a set containing all the (unique) items in this stream.
* @returns The set of all items from this stream.
*/
toItemSet() {
return new Set(this.toItemArray());
}
/**
* Cache the items from this stream.
* @remarks
* This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
* It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
*
* ## Example
* ```javascript
* const ds = new DataSet([…])
*
* const cachedStream = ds.stream()
*   .filter(…)
*   .sort(…)
*   .map(…)
*   .cached(…) // Data are fetched, processed and cached here.
*
* ds.clear()
* chachedStream // Still has all the items.
* ```
* @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
*/
cache() {
return new _DataStream([...this._pairs]);
}
/**
* Get the distinct values of given property.
* @param callback - The function that picks and possibly converts the property.
* @typeParam T - The type of the distinct value.
* @returns A set of all distinct properties.
*/
distinct(callback) {
const set = /* @__PURE__ */ new Set();
for (const [id, item] of this._pairs) {
set.add(callback(item, id));
}
return set;
}
/**
* Filter the items of the stream.
* @param callback - The function that decides whether an item will be included.
* @returns A new data stream with the filtered items.
*/
filter(callback) {
const pairs = this._pairs;
return new _DataStream({
*[Symbol.iterator]() {
for (const [id, item] of pairs) {
if (callback(item, id)) {
yield [id, item];
}
}
}
});
}
/**
* Execute a callback for each item of the stream.
* @param callback - The function that will be invoked for each item.
*/
forEach(callback) {
for (const [id, item] of this._pairs) {
callback(item, id);
}
}
/**
* Map the items into a different type.
* @param callback - The function that does the conversion.
* @typeParam Mapped - The type of the item after mapping.
* @returns A new data stream with the mapped items.
*/
map(callback) {
const pairs = this._pairs;
return new _DataStream({
*[Symbol.iterator]() {
for (const [id, item] of pairs) {
yield [id, callback(item, id)];
}
}
});
}
/**
* Get the item with the maximum value of given property.
* @param callback - The function that picks and possibly converts the property.
* @returns The item with the maximum if found otherwise null.
*/
max(callback) {
const iter = this._pairs[Symbol.iterator]();
let curr = iter.next();
if (curr.done) {
return null;
}
let maxItem = curr.value[1];
let maxValue = callback(curr.value[1], curr.value[0]);
while (!(curr = iter.next()).done) {
const [id, item] = curr.value;
const value = callback(item, id);
if (value > maxValue) {
maxValue = value;
maxItem = item;
}
}
return maxItem;
}
/**
* Get the item with the minimum value of given property.
* @param callback - The function that picks and possibly converts the property.
* @returns The item with the minimum if found otherwise null.
*/
min(callback) {
const iter = this._pairs[Symbol.iterator]();
let curr = iter.next();
if (curr.done) {
return null;
}
let minItem = curr.value[1];
let minValue = callback(curr.value[1], curr.value[0]);
while (!(curr = iter.next()).done) {
const [id, item] = curr.value;
const value = callback(item, id);
if (value < minValue) {
minValue = value;
minItem = item;
}
}
return minItem;
}
/**
* Reduce the items into a single value.
* @param callback - The function that does the reduction.
* @param accumulator - The initial value of the accumulator.
* @typeParam T - The type of the accumulated value.
* @returns The reduced value.
*/
reduce(callback, accumulator) {
for (const [id, item] of this._pairs) {
accumulator = callback(accumulator, item, id);
}
return accumulator;
}
/**
* Sort the items.
* @param callback - Item comparator.
* @returns A new stream with sorted items.
*/
sort(callback) {
return new _DataStream({
[Symbol.iterator]: () => [...this._pairs].sort(([idA, itemA], [idB, itemB]) => callback(itemA, itemB, idA, idB))[Symbol.iterator]()
});
}
};
function ensureFullItem(item, idProp) {
if (item[idProp] == null) {
item[idProp] = v4_default();
}
return item;
}
var DataSet = class extends DataSetPart {
/** Flush all queued calls. */
flush;
/** @inheritDoc */
length;
/** @inheritDoc */
get idProp() {
return this._idProp;
}
_options;
_data;
_idProp;
_queue = null;
/**
* Construct a new DataSet.
* @param data - Initial data or options.
* @param options - Options (type error if data is also options).
*/
constructor(data, options) {
super();
if (data && !Array.isArray(data)) {
options = data;
data = [];
}
this._options = options || {};
this._data = /* @__PURE__ */ new Map();
this.length = 0;
this._idProp = this._options.fieldId || "id";
if (data && data.length) {
this.add(data);
}
this.setOptions(options);
}
/**
* Set new options.
* @param options - The new options.
*/
setOptions(options) {
if (options && options.queue !== void 0) {
if (options.queue === false) {
if (this._queue) {
this._queue.destroy();
this._queue = null;
}
} else {
if (!this._queue) {
this._queue = Queue.extend(this, {
replace: ["add", "update", "remove"]
});
}
if (options.queue && typeof options.queue === "object") {
this._queue.setOptions(options.queue);
}
}
}
}
/**
* Add a data item or an array with items.
*
* After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
*
* ## Example
*
* ```javascript
* // create a DataSet
* const data = new vis.DataSet()
*
* // add items
* const ids = data.add([
* { id: 1, text: 'item 1' },
* { id: 2, text: 'item 2' },
* { text: 'item without an id' }
* ])
*
* console.log(ids) // [1, 2, '<UUIDv4>']
* ```
* @param data - Items to be added (ids will be generated if missing).
* @param senderId - Sender id.
* @returns addedIds - Array with the ids (generated if not present) of the added items.
* @throws When an item with the same id as any of the added items already exists.
*/
add(data, senderId) {
const addedIds = [];
let id;
if (Array.isArray(data)) {
const idsToAdd = data.map((d) => d[this._idProp]);
if (idsToAdd.some((id2) => this._data.has(id2))) {
throw new Error("A duplicate id was found in the parameter array.");
}
for (let i = 0, len = data.length; i < len; i++) {
id = this._addItem(data[i]);
addedIds.push(id);
}
} else if (data && typeof data === "object") {
id = this._addItem(data);
addedIds.push(id);
} else {
throw new Error("Unknown dataType");
}
if (addedIds.length) {
this._trigger("add", { items: addedIds }, senderId);
}
return addedIds;
}
/**
* Update existing items. When an item does not exist, it will be created.
* @remarks
* The provided properties will be merged in the existing item. When an item does not exist, it will be created.
*
* After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
*
* ## Example
*
* ```javascript
* // create a DataSet
* const data = new vis.DataSet([
*   { id: 1, text: 'item 1' },
*   { id: 2, text: 'item 2' },
*   { id: 3, text: 'item 3' }
* ])
*
* // update items
* const ids = data.update([
*   { id: 2, text: 'item 2 (updated)' },
*   { id: 4, text: 'item 4 (new)' }
* ])
*
* console.log(ids) // [2, 4]
* ```
*
* ## Warning for TypeScript users
* This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
* @param data - Items to be updated (if the id is already present) or added (if the id is missing).
* @param senderId - Sender id.
* @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
* @throws When the supplied data is neither an item nor an array of items.
*/
update(data, senderId) {
const addedIds = [];
const updatedIds = [];
const oldData = [];
const updatedData = [];
const idProp = this._idProp;
const addOrUpdate = (item) => {
const origId = item[idProp];
if (origId != null && this._data.has(origId)) {
const fullItem = item;
const oldItem = Object.assign({}, this._data.get(origId));
const id = this._updateItem(fullItem);
updatedIds.push(id);
updatedData.push(fullItem);
oldData.push(oldItem);
} else {
const id = this._addItem(item);
addedIds.push(id);
}
};
if (Array.isArray(data)) {
for (let i = 0, len = data.length; i < len; i++) {
if (data[i] && typeof data[i] === "object") {
addOrUpdate(data[i]);
} else {
console.warn("Ignoring input item, which is not an object at index " + i);
}
}
} else if (data && typeof data === "object") {
addOrUpdate(data);
} else {
throw new Error("Unknown dataType");
}
if (addedIds.length) {
this._trigger("add", { items: addedIds }, senderId);
}
if (updatedIds.length) {
const props = { items: updatedIds, oldData, data: updatedData };
this._trigger("update", props, senderId);
}
return addedIds.concat(updatedIds);
}
/**
* Update existing items. When an item does not exist, an error will be thrown.
* @remarks
* The provided properties will be deeply merged into the existing item.
* When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
*
* After the items are updated, the DataSet will trigger an event `update`.
* When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
*
* ## Example
*
* ```javascript
* // create a DataSet
* const data = new vis.DataSet([
*   { id: 1, text: 'item 1' },
*   { id: 2, text: 'item 2' },
*   { id: 3, text: 'item 3' },
* ])
*
* // update items
* const ids = data.update([
*   { id: 2, text: 'item 2 (updated)' }, // works
*   // { id: 4, text: 'item 4 (new)' }, // would throw
*   // { text: 'item 4 (new)' }, // would also throw
* ])
*
* console.log(ids) // [2]
* ```
* @param data - Updates (the id and optionally other props) to the items in this data set.
* @param senderId - Sender id.
* @returns updatedIds - The ids of the updated items.
* @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
*/
updateOnly(data, senderId) {
if (!Array.isArray(data)) {
data = [data];
}
const updateEventData = data.map((update) => {
const oldData = this._data.get(update[this._idProp]);
if (oldData == null) {
throw new Error("Updating non-existent items is not allowed.");
}
return { oldData, update };
}).map(({ oldData, update }) => {
const id = oldData[this._idProp];
const updatedData = pureDeepObjectAssign(oldData, update);
this._data.set(id, updatedData);
return {
id,
oldData,
updatedData
};
});
if (updateEventData.length) {
const props = {
items: updateEventData.map((value) => value.id),
oldData: updateEventData.map((value) => value.oldData),
data: updateEventData.map((value) => value.updatedData)
};
this._trigger("update", props, senderId);
return props.items;
} else {
return [];
}
}
/** @inheritDoc */
get(first, second) {
let id = void 0;
let ids = void 0;
let options = void 0;
if (isId(first)) {
id = first;
options = second;
} else if (Array.isArray(first)) {
ids = first;
options = second;
} else {
options = first;
}
const returnType = options && options.returnType === "Object" ? "Object" : "Array";
const filter = options && options.filter;
const items = [];
let item = void 0;
let itemIds = void 0;
let itemId = void 0;
if (id != null) {
item = this._data.get(id);
if (item && filter && !filter(item)) {
item = void 0;
}
} else if (ids != null) {
for (let i = 0, len = ids.length; i < len; i++) {
item = this._data.get(ids[i]);
if (item != null && (!filter || filter(item))) {
items.push(item);
}
}
} else {
itemIds = [...this._data.keys()];
for (let i = 0, len = itemIds.length; i < len; i++) {
itemId = itemIds[i];
item = this._data.get(itemId);
if (item != null && (!filter || filter(item))) {
items.push(item);
}
}
}
if (options && options.order && id == void 0) {
this._sort(items, options.order);
}
if (options && options.fields) {
const fields = options.fields;
if (id != void 0 && item != null) {
item = this._filterFields(item, fields);
} else {
for (let i = 0, len = items.length; i < len; i++) {
items[i] = this._filterFields(items[i], fields);
}
}
}
if (returnType == "Object") {
const result = {};
for (let i = 0, len = items.length; i < len; i++) {
const resultant = items[i];
const id2 = resultant[this._idProp];
result[id2] = resultant;
}
return result;
} else {
if (id != null) {
return item ?? null;
} else {
return items;
}
}
}
/** @inheritDoc */
getIds(options) {
const data = this._data;
const filter = options && options.filter;
const order = options && options.order;
const itemIds = [...data.keys()];
const ids = [];
if (filter) {
if (order) {
const items = [];
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = this._data.get(id);
if (item != null && filter(item)) {
items.push(item);
}
}
this._sort(items, order);
for (let i = 0, len = items.length; i < len; i++) {
ids.push(items[i][this._idProp]);
}
} else {
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = this._data.get(id);
if (item != null && filter(item)) {
ids.push(item[this._idProp]);
}
}
}
} else {
if (order) {
const items = [];
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
items.push(data.get(id));
}
this._sort(items, order);
for (let i = 0, len = items.length; i < len; i++) {
ids.push(items[i][this._idProp]);
}
} else {
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = data.get(id);
if (item != null) {
ids.push(item[this._idProp]);
}
}
}
}
return ids;
}
/** @inheritDoc */
getDataSet() {
return this;
}
/** @inheritDoc */
forEach(callback, options) {
const filter = options && options.filter;
const data = this._data;
const itemIds = [...data.keys()];
if (options && options.order) {
const items = this.get(options);
for (let i = 0, len = items.length; i < len; i++) {
const item = items[i];
const id = item[this._idProp];
callback(item, id);
}
} else {
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = this._data.get(id);
if (item != null && (!filter || filter(item))) {
callback(item, id);
}
}
}
}
/** @inheritDoc */
map(callback, options) {
const filter = options && options.filter;
const mappedItems = [];
const data = this._data;
const itemIds = [...data.keys()];
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = this._data.get(id);
if (item != null && (!filter || filter(item))) {
mappedItems.push(callback(item, id));
}
}
if (options && options.order) {
this._sort(mappedItems, options.order);
}
return mappedItems;
}
/**
* Filter the fields of an item.
* @param item - The item whose fields should be filtered.
* @param fields - The names of the fields that will be kept.
* @typeParam K - Field name type.
* @returns The item without any additional fields.
*/
_filterFields(item, fields) {
if (!item) {
return item;
}
return (Array.isArray(fields) ? (
fields
) : (
Object.keys(fields)
)).reduce((filteredItem, field) => {
filteredItem[field] = item[field];
return filteredItem;
}, {});
}
/**
* Sort the provided array with items.
* @param items - Items to be sorted in place.
* @param order - A field name or custom sort function.
* @typeParam T - The type of the items in the items array.
*/
_sort(items, order) {
if (typeof order === "string") {
const name = order;
items.sort((a, b) => {
const av = a[name];
const bv = b[name];
return av > bv ? 1 : av < bv ? -1 : 0;
});
} else if (typeof order === "function") {
items.sort(order);
} else {
throw new TypeError("Order must be a function or a string");
}
}
/**
* Remove an item or multiple items by “reference” (only the id is used) or by id.
*
* The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
*
* After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
*
* ## Example
* ```javascript
* // create a DataSet
* const data = new vis.DataSet([
* { id: 1, text: 'item 1' },
* { id: 2, text: 'item 2' },
* { id: 3, text: 'item 3' }
* ])
*
* // remove items
* const ids = data.remove([2, { id: 3 }, 4])
*
* console.log(ids) // [2, 3]
* ```
* @param id - One or more items or ids of items to be removed.
* @param senderId - Sender id.
* @returns The ids of the removed items.
*/
remove(id, senderId) {
const removedIds = [];
const removedItems = [];
const ids = Array.isArray(id) ? id : [id];
for (let i = 0, len = ids.length; i < len; i++) {
const item = this._remove(ids[i]);
if (item) {
const itemId = item[this._idProp];
if (itemId != null) {
removedIds.push(itemId);
removedItems.push(item);
}
}
}
if (removedIds.length) {
this._trigger("remove", { items: removedIds, oldData: removedItems }, senderId);
}
return removedIds;
}
/**
* Remove an item by its id or reference.
* @param id - Id of an item or the item itself.
* @returns The removed item if removed, null otherwise.
*/
_remove(id) {
let ident;
if (isId(id)) {
ident = id;
} else if (id && typeof id === "object") {
ident = id[this._idProp];
}
if (ident != null && this._data.has(ident)) {
const item = this._data.get(ident) || null;
this._data.delete(ident);
--this.length;
return item;
}
return null;
}
/**
* Clear the entire data set.
*
* After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
* @param senderId - Sender id.
* @returns removedIds - The ids of all removed items.
*/
clear(senderId) {
const ids = [...this._data.keys()];
const items = [];
for (let i = 0, len = ids.length; i < len; i++) {
items.push(this._data.get(ids[i]));
}
this._data.clear();
this.length = 0;
this._trigger("remove", { items: ids, oldData: items }, senderId);
return ids;
}
/**
* Find the item with maximum value of a specified field.
* @param field - Name of the property that should be searched for max value.
* @returns Item containing max value, or null if no items.
*/
max(field) {
let max = null;
let maxField = null;
for (const item of this._data.values()) {
const itemField = item[field];
if (typeof itemField === "number" && (maxField == null || itemField > maxField)) {
max = item;
maxField = itemField;
}
}
return max || null;
}
/**
* Find the item with minimum value of a specified field.
* @param field - Name of the property that should be searched for min value.
* @returns Item containing min value, or null if no items.
*/
min(field) {
let min = null;
let minField = null;
for (const item of this._data.values()) {
const itemField = item[field];
if (typeof itemField === "number" && (minField == null || itemField < minField)) {
min = item;
minField = itemField;
}
}
return min || null;
}
/**
* Find all distinct values of a specified field
* @param prop - The property name whose distinct values should be returned.
* @returns Unordered array containing all distinct values. Items without specified property are ignored.
*/
distinct(prop) {
const data = this._data;
const itemIds = [...data.keys()];
const values = [];
let count = 0;
for (let i = 0, len = itemIds.length; i < len; i++) {
const id = itemIds[i];
const item = data.get(id);
const value = item[prop];
let exists = false;
for (let j = 0; j < count; j++) {
if (values[j] == value) {
exists = true;
break;
}
}
if (!exists && value !== void 0) {
values[count] = value;
count++;
}
}
return values;
}
/**
* Add a single item. Will fail when an item with the same id already exists.
* @param item - A new item to be added.
* @returns Added item's id. An id is generated when it is not present in the item.
*/
_addItem(item) {
const fullItem = ensureFullItem(item, this._idProp);
const id = fullItem[this._idProp];
if (this._data.has(id)) {
throw new Error("Cannot add item: item with id " + id + " already exists");
}
this._data.set(id, fullItem);
++this.length;
return id;
}
/**
* Update a single item: merge with existing item.
* Will fail when the item has no id, or when there does not exist an item with the same id.
* @param update - The new item
* @returns The id of the updated item.
*/
_updateItem(update) {
const id = update[this._idProp];
if (id == null) {
throw new Error("Cannot update item: item has no id (item: " + JSON.stringify(update) + ")");
}
const item = this._data.get(id);
if (!item) {
throw new Error("Cannot update item: no item with id " + id + " found");
}
this._data.set(id, { ...item, ...update });
return id;
}
/** @inheritDoc */
stream(ids) {
if (ids) {
const data = this._data;
return new DataStream({
*[Symbol.iterator]() {
for (const id of ids) {
const item = data.get(id);
if (item != null) {
yield [id, item];
}
}
}
});
} else {
return new DataStream({
[Symbol.iterator]: this._data.entries.bind(this._data)
});
}
}
/* develblock:start */
get testLeakData() {
return this._data;
}
get testLeakIdProp() {
return this._idProp;
}
get testLeakOptions() {
return this._options;
}
get testLeakQueue() {
return this._queue;
}
set testLeakQueue(v) {
this._queue = v;
}
};
function isDataSetLike(idProp, v) {
return typeof v === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof v.forEach === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof v.map === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
}
function isDataViewLike(idProp, v) {
return typeof v === "object" && v !== null && idProp === v.idProp && typeof v.forEach === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof v.map === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
}
console.warn("You're running a development build.");
var import_xss = __toESM(require_lib2(), 1);
var import_component_emitter2 = __toESM(require_component_emitter(), 1);
var _firstTarget = null;
function propagating(hammer, options) {
var _options = options || {
preventDefault: false
};
if (hammer.Manager) {
var Hammer4 = hammer;
var PropagatingHammer = function(element2, options2) {
var o = Object.create(_options);
if (options2) Hammer4.assign(o, options2);
return propagating(new Hammer4(element2, o), o);
};
Hammer4.assign(PropagatingHammer, Hammer4);
PropagatingHammer.Manager = function(element2, options2) {
var o = Object.create(_options);
if (options2) Hammer4.assign(o, options2);
return propagating(new Hammer4.Manager(element2, o), o);
};
return PropagatingHammer;
}
var wrapper = Object.create(hammer);
var element = hammer.element;
if (!element.hammer) element.hammer = [];
element.hammer.push(wrapper);
hammer.on("hammer.input", function(event2) {
if (_options.preventDefault === true || _options.preventDefault === event2.pointerType) {
event2.preventDefault();
}
if (event2.isFirst) {
_firstTarget = event2.target;
}
});
wrapper._handlers = {};
wrapper.on = function(events, handler) {
split(events).forEach(function(event2) {
var _handlers = wrapper._handlers[event2];
if (!_handlers) {
wrapper._handlers[event2] = _handlers = [];
hammer.on(event2, propagatedHandler);
}
_handlers.push(handler);
});
return wrapper;
};
wrapper.off = function(events, handler) {
split(events).forEach(function(event2) {
var _handlers = wrapper._handlers[event2];
if (_handlers) {
_handlers = handler ? _handlers.filter(function(h) {
return h !== handler;
}) : [];
if (_handlers.length > 0) {
wrapper._handlers[event2] = _handlers;
} else {
hammer.off(event2, propagatedHandler);
delete wrapper._handlers[event2];
}
}
});
return wrapper;
};
wrapper.emit = function(eventType, event2) {
_firstTarget = event2.target;
hammer.emit(eventType, event2);
};
wrapper.destroy = function() {
var hammers = hammer.element.hammer;
var idx = hammers.indexOf(wrapper);
if (idx !== -1) hammers.splice(idx, 1);
if (!hammers.length) delete hammer.element.hammer;
wrapper._handlers = {};
hammer.destroy();
};
function split(events) {
return events.match(/[^ ]+/g);
}
function propagatedHandler(event2) {
if (event2.type !== "hammer.input") {
if (!event2.srcEvent._handled) {
event2.srcEvent._handled = {};
}
if (event2.srcEvent._handled[event2.type]) {
return;
} else {
event2.srcEvent._handled[event2.type] = true;
}
}
var stopped = false;
event2.stopPropagation = function() {
stopped = true;
};
var srcStop = event2.srcEvent.stopPropagation.bind(event2.srcEvent);
if (typeof srcStop == "function") {
event2.srcEvent.stopPropagation = function() {
srcStop();
event2.stopPropagation();
};
}
event2.firstTarget = _firstTarget;
var elem = _firstTarget.isConnected ? _firstTarget : event2.target;
while (elem && !stopped) {
var elemHammer = elem.hammer;
if (elemHammer) {
var _handlers;
for (var k = 0; k < elemHammer.length; k++) {
_handlers = elemHammer[k]._handlers[event2.type];
if (_handlers) for (var i = 0; i < _handlers.length && !stopped; i++) {
_handlers[i](event2);
}
}
}
elem = elem.parentNode;
}
}
return wrapper;
}
function keycharm(options) {
var preventDefault2 = options && options.preventDefault || false;
var container = options && options.container || window;
var _exportFunctions = {};
var _bound = { keydown: {}, keyup: {} };
var _keys = {};
var i;
for (i = 97; i <= 122; i++) {
_keys[String.fromCharCode(i)] = { code: 65 + (i - 97), shift: false };
}
for (i = 65; i <= 90; i++) {
_keys[String.fromCharCode(i)] = { code: i, shift: true };
}
for (i = 0; i <= 9; i++) {
_keys["" + i] = { code: 48 + i, shift: false };
}
for (i = 1; i <= 12; i++) {
_keys["F" + i] = { code: 111 + i, shift: false };
}
for (i = 0; i <= 9; i++) {
_keys["num" + i] = { code: 96 + i, shift: false };
}
_keys["num*"] = { code: 106, shift: false };
_keys["num+"] = { code: 107, shift: false };
_keys["num-"] = { code: 109, shift: false };
_keys["num/"] = { code: 111, shift: false };
_keys["num."] = { code: 110, shift: false };
_keys["left"] = { code: 37, shift: false };
_keys["up"] = { code: 38, shift: false };
_keys["right"] = { code: 39, shift: false };
_keys["down"] = { code: 40, shift: false };
_keys["space"] = { code: 32, shift: false };
_keys["enter"] = { code: 13, shift: false };
_keys["shift"] = { code: 16, shift: void 0 };
_keys["esc"] = { code: 27, shift: false };
_keys["backspace"] = { code: 8, shift: false };
_keys["tab"] = { code: 9, shift: false };
_keys["ctrl"] = { code: 17, shift: false };
_keys["alt"] = { code: 18, shift: false };
_keys["delete"] = { code: 46, shift: false };
_keys["pageup"] = { code: 33, shift: false };
_keys["pagedown"] = { code: 34, shift: false };
_keys["="] = { code: 187, shift: false };
_keys["-"] = { code: 189, shift: false };
_keys["]"] = { code: 221, shift: false };
_keys["["] = { code: 219, shift: false };
var down = function(event2) {
handleEvent(event2, "keydown");
};
var up = function(event2) {
handleEvent(event2, "keyup");
};
var handleEvent = function(event2, type) {
if (_bound[type][event2.keyCode] !== void 0) {
var bound = _bound[type][event2.keyCode];
for (var i2 = 0; i2 < bound.length; i2++) {
if (bound[i2].shift === void 0) {
bound[i2].fn(event2);
} else if (bound[i2].shift == true && event2.shiftKey == true) {
bound[i2].fn(event2);
} else if (bound[i2].shift == false && event2.shiftKey == false) {
bound[i2].fn(event2);
}
}
if (preventDefault2 == true) {
event2.preventDefault();
}
}
};
_exportFunctions.bind = function(key, callback, type) {
if (type === void 0) {
type = "keydown";
}
if (_keys[key] === void 0) {
throw new Error("unsupported key: " + key);
}
if (_bound[type][_keys[key].code] === void 0) {
_bound[type][_keys[key].code] = [];
}
_bound[type][_keys[key].code].push({ fn: callback, shift: _keys[key].shift });
};
_exportFunctions.bindAll = function(callback, type) {
if (type === void 0) {
type = "keydown";
}
for (var key in _keys) {
if (_keys.hasOwnProperty(key)) {
_exportFunctions.bind(key, callback, type);
}
}
};
_exportFunctions.getKey = function(event2) {
for (var key in _keys) {
if (_keys.hasOwnProperty(key)) {
if (event2.shiftKey == true && _keys[key].shift == true && event2.keyCode == _keys[key].code) {
return key;
} else if (event2.shiftKey == false && _keys[key].shift == false && event2.keyCode == _keys[key].code) {
return key;
} else if (event2.keyCode == _keys[key].code && key == "shift") {
return key;
}
}
}
return "unknown key, currently not supported";
};
_exportFunctions.unbind = function(key, callback, type) {
if (type === void 0) {
type = "keydown";
}
if (_keys[key] === void 0) {
throw new Error("unsupported key: " + key);
}
if (callback !== void 0) {
var newBindings = [];
var bound = _bound[type][_keys[key].code];
if (bound !== void 0) {
for (var i2 = 0; i2 < bound.length; i2++) {
if (!(bound[i2].fn == callback && bound[i2].shift == _keys[key].shift)) {
newBindings.push(_bound[type][_keys[key].code][i2]);
}
}
}
_bound[type][_keys[key].code] = newBindings;
} else {
_bound[type][_keys[key].code] = [];
}
};
_exportFunctions.reset = function() {
_bound = { keydown: {}, keyup: {} };
};
_exportFunctions.destroy = function() {
_bound = { keydown: {}, keyup: {} };
container.removeEventListener("keydown", down, true);
container.removeEventListener("keyup", up, true);
};
container.addEventListener("keydown", down, true);
container.addEventListener("keyup", up, true);
return _exportFunctions;
}
var moment$2 = typeof window !== "undefined" && window["moment"] || import_moment.default;
function isDataViewLike2(obj) {
if (!obj) {
return false;
}
let idProp = obj.idProp ?? obj._idProp;
if (!idProp) {
return false;
}
return isDataViewLike(idProp, obj);
}
var ASPDateRegex2 = /^\/?Date\((-?\d+)/i;
var NumericRegex = /^\d+$/;
function convert(object2, type) {
let match;
if (object2 === void 0) {
return void 0;
}
if (object2 === null) {
return null;
}
if (!type) {
return object2;
}
if (!(typeof type === "string") && !(type instanceof String)) {
throw new Error("Type must be a string");
}
switch (type) {
case "boolean":
case "Boolean":
return Boolean(object2);
case "number":
case "Number":
if (isString(object2) && !isNaN(Date.parse(object2))) {
return (0, import_moment.default)(object2).valueOf();
} else {
return Number(object2.valueOf());
}
case "string":
case "String":
return String(object2);
case "Date":
try {
return convert(object2, "Moment").toDate();
} catch (e) {
if (e instanceof TypeError) {
throw new TypeError(
"Cannot convert object of type " + getType(object2) + " to type " + type
);
} else {
throw e;
}
}
case "Moment":
if (isNumber(object2)) {
return (0, import_moment.default)(object2);
}
if (object2 instanceof Date) {
return (0, import_moment.default)(object2.valueOf());
} else if (import_moment.default.isMoment(object2)) {
return (0, import_moment.default)(object2);
}
if (isString(object2)) {
match = ASPDateRegex2.exec(object2);
if (match) {
return (0, import_moment.default)(Number(match[1]));
}
match = NumericRegex.exec(object2);
if (match) {
return (0, import_moment.default)(Number(object2));
}
return (0, import_moment.default)(object2);
} else {
throw new TypeError(
"Cannot convert object of type " + getType(object2) + " to type " + type
);
}
case "ISODate":
if (isNumber(object2)) {
return new Date(object2);
} else if (object2 instanceof Date) {
return object2.toISOString();
} else if (import_moment.default.isMoment(object2)) {
return object2.toDate().toISOString();
} else if (isString(object2)) {
match = ASPDateRegex2.exec(object2);
if (match) {
return new Date(Number(match[1])).toISOString();
} else {
return (0, import_moment.default)(object2).format();
}
} else {
throw new Error(
"Cannot convert object of type " + getType(object2) + " to type ISODate"
);
}
case "ASPDate":
if (isNumber(object2)) {
return "/Date(" + object2 + ")/";
} else if (object2 instanceof Date || import_moment.default.isMoment(object2)) {
return "/Date(" + object2.valueOf() + ")/";
} else if (isString(object2)) {
match = ASPDateRegex2.exec(object2);
let value;
if (match) {
value = new Date(Number(match[1])).valueOf();
} else {
value = new Date(object2).valueOf();
}
return "/Date(" + value + ")/";
} else {
throw new Error(
"Cannot convert object of type " + getType(object2) + " to type ASPDate"
);
}
default:
throw new Error(`Unknown type ${type}`);
}
}
function typeCoerceDataSet(rawDS, type = { start: "Date", end: "Date" }) {
const idProp = rawDS._idProp;
const coercedDS = new DataSet({ fieldId: idProp });
const pipe = createNewDataPipeFrom(rawDS).map(
(item) => Object.keys(item).reduce((acc, key) => {
acc[key] = convert(item[key], type[key]);
return acc;
}, {})
).to(coercedDS);
pipe.all().start();
return {
add: (...args) => rawDS.getDataSet().add(...args),
remove: (...args) => rawDS.getDataSet().remove(...args),
update: (...args) => rawDS.getDataSet().update(...args),
updateOnly: (...args) => rawDS.getDataSet().updateOnly(...args),
clear: (...args) => rawDS.getDataSet().clear(...args),
forEach: coercedDS.forEach.bind(coercedDS),
get: coercedDS.get.bind(coercedDS),
getIds: coercedDS.getIds.bind(coercedDS),
off: coercedDS.off.bind(coercedDS),
on: coercedDS.on.bind(coercedDS),
get length() {
return coercedDS.length;
},
idProp,
type,
rawDS,
coercedDS,
dispose: () => pipe.stop()
};
}
var setupXSSCleaner = (options) => {
const customXSS = new import_xss.default.FilterXSS(options);
return (input) => {
if (typeof input === "string") {
return customXSS.process(input);
}
return input;
};
};
var setupNoOpCleaner = (string2) => string2;
var configuredXSSProtection = setupXSSCleaner();
var setupXSSProtection = (options) => {
if (!options) {
return;
}
if (options.disabled === true) {
configuredXSSProtection = setupNoOpCleaner;
console.warn("You disabled XSS protection for vis-Timeline. I sure hope you know what you're doing!");
} else {
if (options.filterOptions) {
configuredXSSProtection = setupXSSCleaner(options.filterOptions);
}
}
};
var availableUtils = {
...vis_util_exports,
convert,
setupXSSProtection
};
Object.defineProperty(availableUtils, "xss", {
get: function() {
return configuredXSSProtection;
}
});
var Component = class {
/**
* @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} [body]
* @param {Object} [options]
*/
constructor(body, options) {
this.options = null;
this.props = null;
}
/**
* Set options for the component. The new options will be merged into the
* current options.
* @param {Object} options
*/
setOptions(options) {
if (options) {
availableUtils.extend(this.options, options);
}
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
return false;
}
/**
* Destroy the component. Cleanup DOM and event listeners
*/
destroy() {
}
/**
* Test whether the component is resized since the last time _isResized() was
* called.
* @return {Boolean} Returns true if the component is resized
* @protected
*/
_isResized() {
const resized = this.props._previousWidth !== this.props.width || this.props._previousHeight !== this.props.height;
this.props._previousWidth = this.props.width;
this.props._previousHeight = this.props.height;
return resized;
}
};
function convertHiddenOptions(moment2, body, hiddenDates) {
if (hiddenDates && !Array.isArray(hiddenDates)) {
return convertHiddenOptions(moment2, body, [hiddenDates]);
}
body.hiddenDates = [];
if (hiddenDates) {
if (Array.isArray(hiddenDates) == true) {
for (let i = 0; i < hiddenDates.length; i++) {
if (hiddenDates[i].repeat === void 0) {
const dateItem = {};
dateItem.start = moment2(hiddenDates[i].start).toDate().valueOf();
dateItem.end = moment2(hiddenDates[i].end).toDate().valueOf();
body.hiddenDates.push(dateItem);
}
}
body.hiddenDates.sort((a, b) => a.start - b.start);
}
}
}
function updateHiddenDates(moment2, body, hiddenDates) {
if (hiddenDates && !Array.isArray(hiddenDates)) {
return updateHiddenDates(moment2, body, [hiddenDates]);
}
if (hiddenDates && body.domProps.centerContainer.width !== void 0) {
convertHiddenOptions(moment2, body, hiddenDates);
const start = moment2(body.range.start);
const end = moment2(body.range.end);
const totalRange = body.range.end - body.range.start;
const pixelTime = totalRange / body.domProps.centerContainer.width;
for (let i = 0; i < hiddenDates.length; i++) {
if (hiddenDates[i].repeat !== void 0) {
let startDate = moment2(hiddenDates[i].start);
let endDate = moment2(hiddenDates[i].end);
if (startDate._d == "Invalid Date") {
throw new Error(`Supplied start date is not valid: ${hiddenDates[i].start}`);
}
if (endDate._d == "Invalid Date") {
throw new Error(`Supplied end date is not valid: ${hiddenDates[i].end}`);
}
const duration = endDate - startDate;
if (duration >= 4 * pixelTime) {
let offset = 0;
let runUntil = end.clone();
switch (hiddenDates[i].repeat) {
case "daily":
if (startDate.day() != endDate.day()) {
offset = 1;
}
startDate = startDate.dayOfYear(start.dayOfYear()).year(start.year()).subtract(7, "days");
endDate = endDate.dayOfYear(start.dayOfYear()).year(start.year()).subtract(7 - offset, "days");
runUntil.add(1, "weeks");
break;
case "weekly": {
const dayOffset = endDate.diff(startDate, "days");
const day = startDate.day();
startDate = startDate.date(start.date()).month(start.month()).year(start.year());
endDate = startDate.clone();
startDate = startDate.day(day).subtract(1, "weeks");
endDate = endDate.day(day).add(dayOffset, "days").subtract(1, "weeks");
runUntil.add(1, "weeks");
break;
}
case "monthly":
if (startDate.month() != endDate.month()) {
offset = 1;
}
startDate = startDate.month(start.month()).year(start.year()).subtract(1, "months");
endDate = endDate.month(start.month()).year(start.year()).subtract(1, "months").add(offset, "months");
runUntil.add(1, "months");
break;
case "yearly":
if (startDate.year() != endDate.year()) {
offset = 1;
}
startDate = startDate.year(start.year()).subtract(1, "years");
endDate = endDate.year(start.year()).subtract(1, "years").add(offset, "years");
runUntil.add(1, "years");
break;
default:
console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", hiddenDates[i].repeat);
return;
}
while (startDate < runUntil) {
body.hiddenDates.push({ start: startDate.valueOf(), end: endDate.valueOf() });
switch (hiddenDates[i].repeat) {
case "daily":
startDate = startDate.add(1, "days");
endDate = endDate.add(1, "days");
break;
case "weekly":
startDate = startDate.add(1, "weeks");
endDate = endDate.add(1, "weeks");
break;
case "monthly":
startDate = startDate.add(1, "months");
endDate = endDate.add(1, "months");
break;
case "yearly":
startDate = startDate.add(1, "y");
endDate = endDate.add(1, "y");
break;
default:
console.log("Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:", hiddenDates[i].repeat);
return;
}
}
body.hiddenDates.push({ start: startDate.valueOf(), end: endDate.valueOf() });
}
}
}
removeDuplicates(body);
const startHidden = getIsHidden(body.range.start, body.hiddenDates);
const endHidden = getIsHidden(body.range.end, body.hiddenDates);
let rangeStart = body.range.start;
let rangeEnd = body.range.end;
if (startHidden.hidden == true) {
rangeStart = body.range.startToFront == true ? startHidden.startDate - 1 : startHidden.endDate + 1;
}
if (endHidden.hidden == true) {
rangeEnd = body.range.endToFront == true ? endHidden.startDate - 1 : endHidden.endDate + 1;
}
if (startHidden.hidden == true || endHidden.hidden == true) {
body.range._applyRange(rangeStart, rangeEnd);
}
}
}
function removeDuplicates(body) {
const hiddenDates = body.hiddenDates;
const safeDates = [];
for (var i = 0; i < hiddenDates.length; i++) {
for (let j = 0; j < hiddenDates.length; j++) {
if (i != j && hiddenDates[j].remove != true && hiddenDates[i].remove != true) {
if (hiddenDates[j].start >= hiddenDates[i].start && hiddenDates[j].end <= hiddenDates[i].end) {
hiddenDates[j].remove = true;
} else if (hiddenDates[j].start >= hiddenDates[i].start && hiddenDates[j].start <= hiddenDates[i].end) {
hiddenDates[i].end = hiddenDates[j].end;
hiddenDates[j].remove = true;
} else if (hiddenDates[j].end >= hiddenDates[i].start && hiddenDates[j].end <= hiddenDates[i].end) {
hiddenDates[i].start = hiddenDates[j].start;
hiddenDates[j].remove = true;
}
}
}
}
for (i = 0; i < hiddenDates.length; i++) {
if (hiddenDates[i].remove !== true) {
safeDates.push(hiddenDates[i]);
}
}
body.hiddenDates = safeDates;
body.hiddenDates.sort((a, b) => a.start - b.start);
}
function stepOverHiddenDates(moment2, timeStep, previousTime) {
let stepInHidden = false;
const currentValue = timeStep.current.valueOf();
for (let i = 0; i < timeStep.hiddenDates.length; i++) {
const startDate = timeStep.hiddenDates[i].start;
var endDate = timeStep.hiddenDates[i].end;
if (currentValue >= startDate && currentValue < endDate) {
stepInHidden = true;
break;
}
}
if (stepInHidden == true && currentValue < timeStep._end.valueOf() && currentValue != previousTime) {
const prevValue = moment2(previousTime);
const newValue = moment2(endDate);
if (prevValue.year() != newValue.year()) {
timeStep.switchedYear = true;
} else if (prevValue.month() != newValue.month()) {
timeStep.switchedMonth = true;
} else if (prevValue.dayOfYear() != newValue.dayOfYear()) {
timeStep.switchedDay = true;
}
timeStep.current = newValue;
}
}
function toScreen(Core2, time, width) {
let conversion;
if (Core2.body.hiddenDates.length == 0) {
conversion = Core2.range.conversion(width);
return (time.valueOf() - conversion.offset) * conversion.scale;
} else {
const hidden = getIsHidden(time, Core2.body.hiddenDates);
if (hidden.hidden == true) {
time = hidden.startDate;
}
const duration = getHiddenDurationBetween(Core2.body.hiddenDates, Core2.range.start, Core2.range.end);
if (time < Core2.range.start) {
conversion = Core2.range.conversion(width, duration);
const hiddenBeforeStart = getHiddenDurationBeforeStart(Core2.body.hiddenDates, time, conversion.offset);
time = Core2.options.moment(time).toDate().valueOf();
time = time + hiddenBeforeStart;
return -(conversion.offset - time.valueOf()) * conversion.scale;
} else if (time > Core2.range.end) {
const rangeAfterEnd = { start: Core2.range.start, end: time };
time = correctTimeForHidden(Core2.options.moment, Core2.body.hiddenDates, rangeAfterEnd, time);
conversion = Core2.range.conversion(width, duration);
return (time.valueOf() - conversion.offset) * conversion.scale;
} else {
time = correctTimeForHidden(Core2.options.moment, Core2.body.hiddenDates, Core2.range, time);
conversion = Core2.range.conversion(width, duration);
return (time.valueOf() - conversion.offset) * conversion.scale;
}
}
}
function toTime(Core2, x, width) {
if (Core2.body.hiddenDates.length == 0) {
const conversion = Core2.range.conversion(width);
return new Date(x / conversion.scale + conversion.offset);
} else {
const hiddenDuration = getHiddenDurationBetween(Core2.body.hiddenDates, Core2.range.start, Core2.range.end);
const totalDuration = Core2.range.end - Core2.range.start - hiddenDuration;
const partialDuration = totalDuration * x / width;
const accumulatedHiddenDuration = getAccumulatedHiddenDuration(Core2.body.hiddenDates, Core2.range, partialDuration);
return new Date(accumulatedHiddenDuration + partialDuration + Core2.range.start);
}
}
function getHiddenDurationBetween(hiddenDates, start, end) {
let duration = 0;
for (let i = 0; i < hiddenDates.length; i++) {
const startDate = hiddenDates[i].start;
const endDate = hiddenDates[i].end;
if (startDate >= start && endDate < end) {
duration += endDate - startDate;
}
}
return duration;
}
function getHiddenDurationBeforeStart(hiddenDates, start, end) {
let duration = 0;
for (let i = 0; i < hiddenDates.length; i++) {
const startDate = hiddenDates[i].start;
const endDate = hiddenDates[i].end;
if (startDate >= start && endDate <= end) {
duration += endDate - startDate;
}
}
return duration;
}
function correctTimeForHidden(moment2, hiddenDates, range, time) {
time = moment2(time).toDate().valueOf();
time -= getHiddenDurationBefore(moment2, hiddenDates, range, time);
return time;
}
function getHiddenDurationBefore(moment2, hiddenDates, range, time) {
let timeOffset = 0;
time = moment2(time).toDate().valueOf();
for (let i = 0; i < hiddenDates.length; i++) {
const startDate = hiddenDates[i].start;
const endDate = hiddenDates[i].end;
if (startDate >= range.start && endDate < range.end) {
if (time >= endDate) {
timeOffset += endDate - startDate;
}
}
}
return timeOffset;
}
function getAccumulatedHiddenDuration(hiddenDates, range, requiredDuration) {
let hiddenDuration = 0;
let duration = 0;
let previousPoint = range.start;
for (let i = 0; i < hiddenDates.length; i++) {
const startDate = hiddenDates[i].start;
const endDate = hiddenDates[i].end;
if (startDate >= range.start && endDate < range.end) {
duration += startDate - previousPoint;
previousPoint = endDate;
if (duration >= requiredDuration) {
break;
} else {
hiddenDuration += endDate - startDate;
}
}
}
return hiddenDuration;
}
function snapAwayFromHidden(hiddenDates, time, direction, correctionEnabled) {
const isHidden = getIsHidden(time, hiddenDates);
if (isHidden.hidden == true) {
if (direction < 0) {
if (correctionEnabled == true) {
return isHidden.startDate - (isHidden.endDate - time) - 1;
} else {
return isHidden.startDate - 1;
}
} else {
if (correctionEnabled == true) {
return isHidden.endDate + (time - isHidden.startDate) + 1;
} else {
return isHidden.endDate + 1;
}
}
} else {
return time;
}
}
function getIsHidden(time, hiddenDates) {
for (let i = 0; i < hiddenDates.length; i++) {
var startDate = hiddenDates[i].start;
var endDate = hiddenDates[i].end;
if (time >= startDate && time < endDate) {
return { hidden: true, startDate, endDate };
}
}
return { hidden: false, startDate, endDate };
}
var Range = class _Range extends Component {
/**
* @param {{dom: Object, domProps: Object, emitter: Emitter}} body
* @param {Object} [options]    See description at Range.setOptions
* @constructor Range
* @extends Component
*/
constructor(body, options) {
super();
const now2 = moment$2().hours(0).minutes(0).seconds(0).milliseconds(0);
const start = now2.clone().add(-3, "days").valueOf();
const end = now2.clone().add(3, "days").valueOf();
this.millisecondsPerPixelCache = void 0;
if (options === void 0) {
this.start = start;
this.end = end;
} else {
this.start = options.start || start;
this.end = options.end || end;
}
this.rolling = false;
this.body = body;
this.deltaDifference = 0;
this.scaleOffset = 0;
this.startToFront = false;
this.endToFront = true;
this.defaultOptions = {
rtl: false,
start: null,
end: null,
moment: moment$2,
direction: "horizontal",
moveable: true,
zoomable: true,
min: null,
max: null,
zoomMin: 10,
zoomMax: 1e3 * 60 * 60 * 24 * 365 * 1e4,
rollingMode: {
follow: false,
offset: 0.5
}
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.props = {
touch: {}
};
this.animationTimer = null;
this.body.emitter.on("panstart", this._onDragStart.bind(this));
this.body.emitter.on("panmove", this._onDrag.bind(this));
this.body.emitter.on("panend", this._onDragEnd.bind(this));
this.body.emitter.on("mousewheel", this._onMouseWheel.bind(this));
this.body.emitter.on("touch", this._onTouch.bind(this));
this.body.emitter.on("pinch", this._onPinch.bind(this));
this.body.dom.rollingModeBtn.addEventListener("click", this.startRolling.bind(this));
this.setOptions(options);
}
/**
* Set options for the range controller
* @param {Object} options      Available options:
*                              {number | Date | String} start  Start date for the range
*                              {number | Date | String} end    End date for the range
*                              {number} min    Minimum value for start
*                              {number} max    Maximum value for end
*                              {number} zoomMin    Set a minimum value for
*                                                  (end - start).
*                              {number} zoomMax    Set a maximum value for
*                                                  (end - start).
*                              {boolean} moveable Enable moving of the range
*                                                 by dragging. True by default
*                              {boolean} zoomable Enable zooming of the range
*                                                 by pinching/scrolling. True by default
*/
setOptions(options) {
if (options) {
const fields = [
"animation",
"direction",
"min",
"max",
"zoomMin",
"zoomMax",
"moveable",
"zoomable",
"moment",
"activate",
"hiddenDates",
"zoomKey",
"zoomFriction",
"rtl",
"showCurrentTime",
"rollingMode",
"horizontalScroll"
];
availableUtils.selectiveExtend(fields, this.options, options);
if (options.rollingMode && options.rollingMode.follow) {
this.startRolling();
}
if ("start" in options || "end" in options) {
this.setRange(options.start, options.end);
}
}
}
/**
* Start auto refreshing the current time bar
*/
startRolling() {
const me = this;
function update() {
me.stopRolling();
me.rolling = true;
let interval = me.end - me.start;
const t = availableUtils.convert(/* @__PURE__ */ new Date(), "Date").valueOf();
const rollingModeOffset = me.options.rollingMode && me.options.rollingMode.offset || 0.5;
const start = t - interval * rollingModeOffset;
const end = t + interval * (1 - rollingModeOffset);
const options = {
animation: false
};
me.setRange(start, end, options);
const scale = me.conversion(me.body.domProps.center.width).scale;
interval = 1 / scale / 10;
if (interval < 30) interval = 30;
if (interval > 1e3) interval = 1e3;
me.body.dom.rollingModeBtn.style.visibility = "hidden";
me.currentTimeTimer = setTimeout(update, interval);
}
update();
}
/**
* Stop auto refreshing the current time bar
*/
stopRolling() {
if (this.currentTimeTimer !== void 0) {
clearTimeout(this.currentTimeTimer);
this.rolling = false;
this.body.dom.rollingModeBtn.style.visibility = "visible";
}
}
/**
* Set a new start and end range
* @param {Date | number | string} start
* @param {Date | number | string} end
* @param {Object} options      Available options:
*                              {boolean | {duration: number, easingFunction: string}} [animation=false]
*                                    If true, the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
*                              {boolean} [byUser=false]
*                              {Event}  event  Mouse event
* @param {Function} callback     a callback function to be executed at the end of this function
* @param {Function} frameCallback    a callback function executed each frame of the range animation.
*                                    The callback will be passed three parameters:
*                                    {number} easeCoefficient    an easing coefficent
*                                    {boolean} willDraw          If true the caller will redraw after the callback completes
*                                    {boolean} done              If true then animation is ending after the current frame
* @return {void}
*/
setRange(start, end, options, callback, frameCallback) {
if (!options) {
options = {};
}
if (options.byUser !== true) {
options.byUser = false;
}
const me = this;
const finalStart = start != void 0 ? availableUtils.convert(start, "Date").valueOf() : null;
const finalEnd = end != void 0 ? availableUtils.convert(end, "Date").valueOf() : null;
this._cancelAnimation();
this.millisecondsPerPixelCache = void 0;
if (options.animation) {
const initStart = this.start;
const initEnd = this.end;
const duration = typeof options.animation === "object" && "duration" in options.animation ? options.animation.duration : 500;
const easingName = typeof options.animation === "object" && "easingFunction" in options.animation ? options.animation.easingFunction : "easeInOutQuad";
const easingFunction = availableUtils.easingFunctions[easingName];
if (!easingFunction) {
throw new Error(`Unknown easing function ${JSON.stringify(easingName)}. Choose from: ${Object.keys(availableUtils.easingFunctions).join(", ")}`);
}
const initTime = Date.now();
let anyChanged = false;
const next = () => {
if (!me.props.touch.dragging) {
const now2 = Date.now();
const time = now2 - initTime;
const ease = easingFunction(time / duration);
const done = time > duration;
const s = done || finalStart === null ? finalStart : initStart + (finalStart - initStart) * ease;
const e = done || finalEnd === null ? finalEnd : initEnd + (finalEnd - initEnd) * ease;
changed = me._applyRange(s, e);
updateHiddenDates(me.options.moment, me.body, me.options.hiddenDates);
anyChanged = anyChanged || changed;
const params = {
start: new Date(me.start),
end: new Date(me.end),
byUser: options.byUser,
event: options.event
};
if (frameCallback) {
frameCallback(ease, changed, done);
}
if (changed) {
me.body.emitter.emit("rangechange", params);
}
if (done) {
if (anyChanged) {
me.body.emitter.emit("rangechanged", params);
if (callback) {
return callback();
}
}
} else {
me.animationTimer = setTimeout(next, 20);
}
}
};
return next();
} else {
var changed = this._applyRange(finalStart, finalEnd);
updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates);
if (changed) {
const params = {
start: new Date(this.start),
end: new Date(this.end),
byUser: options.byUser,
event: options.event
};
this.body.emitter.emit("rangechange", params);
clearTimeout(me.timeoutID);
me.timeoutID = setTimeout(() => {
me.body.emitter.emit("rangechanged", params);
}, 200);
if (callback) {
return callback();
}
}
}
}
/**
* Get the number of milliseconds per pixel.
*
* @returns {undefined|number}
*/
getMillisecondsPerPixel() {
if (this.millisecondsPerPixelCache === void 0) {
this.millisecondsPerPixelCache = (this.end - this.start) / this.body.dom.center.clientWidth;
}
return this.millisecondsPerPixelCache;
}
/**
* Stop an animation
* @private
*/
_cancelAnimation() {
if (this.animationTimer) {
clearTimeout(this.animationTimer);
this.animationTimer = null;
}
}
/**
* Set a new start and end range. This method is the same as setRange, but
* does not trigger a range change and range changed event, and it returns
* true when the range is changed
* @param {number} [start]
* @param {number} [end]
* @return {boolean} changed
* @private
*/
_applyRange(start, end) {
let newStart = start != null ? availableUtils.convert(start, "Date").valueOf() : this.start;
let newEnd = end != null ? availableUtils.convert(end, "Date").valueOf() : this.end;
const max = this.options.max != null ? availableUtils.convert(this.options.max, "Date").valueOf() : null;
const min = this.options.min != null ? availableUtils.convert(this.options.min, "Date").valueOf() : null;
let diff;
if (isNaN(newStart) || newStart === null) {
throw new Error(`Invalid start "${start}"`);
}
if (isNaN(newEnd) || newEnd === null) {
throw new Error(`Invalid end "${end}"`);
}
if (newEnd < newStart) {
newEnd = newStart;
}
if (min !== null) {
if (newStart < min) {
diff = min - newStart;
newStart += diff;
newEnd += diff;
if (max != null) {
if (newEnd > max) {
newEnd = max;
}
}
}
}
if (max !== null) {
if (newEnd > max) {
diff = newEnd - max;
newStart -= diff;
newEnd -= diff;
if (min != null) {
if (newStart < min) {
newStart = min;
}
}
}
}
if (this.options.zoomMin !== null) {
let zoomMin = parseFloat(this.options.zoomMin);
if (zoomMin < 0) {
zoomMin = 0;
}
if (newEnd - newStart < zoomMin) {
const compensation = 0.5;
if (this.end - this.start === zoomMin && newStart >= this.start - compensation && newEnd <= this.end) {
newStart = this.start;
newEnd = this.end;
} else {
diff = zoomMin - (newEnd - newStart);
newStart -= diff / 2;
newEnd += diff / 2;
}
}
}
if (this.options.zoomMax !== null) {
let zoomMax = parseFloat(this.options.zoomMax);
if (zoomMax < 0) {
zoomMax = 0;
}
if (newEnd - newStart > zoomMax) {
if (this.end - this.start === zoomMax && newStart < this.start && newEnd > this.end) {
newStart = this.start;
newEnd = this.end;
} else {
diff = newEnd - newStart - zoomMax;
newStart += diff / 2;
newEnd -= diff / 2;
}
}
}
const changed = this.start != newStart || this.end != newEnd;
if (!(newStart >= this.start && newStart <= this.end || newEnd >= this.start && newEnd <= this.end) && !(this.start >= newStart && this.start <= newEnd || this.end >= newStart && this.end <= newEnd)) {
this.body.emitter.emit("checkRangedItems");
}
this.start = newStart;
this.end = newEnd;
return changed;
}
/**
* Retrieve the current range.
* @return {Object} An object with start and end properties
*/
getRange() {
return {
start: this.start,
end: this.end
};
}
/**
* Calculate the conversion offset and scale for current range, based on
* the provided width
* @param {number} width
* @param {number} [totalHidden=0]
* @returns {{offset: number, scale: number}} conversion
*/
conversion(width, totalHidden) {
return _Range.conversion(this.start, this.end, width, totalHidden);
}
/**
* Static method to calculate the conversion offset and scale for a range,
* based on the provided start, end, and width
* @param {number} start
* @param {number} end
* @param {number} width
* @param {number} [totalHidden=0]
* @returns {{offset: number, scale: number}} conversion
*/
static conversion(start, end, width, totalHidden) {
if (totalHidden === void 0) {
totalHidden = 0;
}
if (width != 0 && end - start != 0) {
return {
offset: start,
scale: width / (end - start - totalHidden)
};
} else {
return {
offset: 0,
scale: 1
};
}
}
/**
* Start dragging horizontally or vertically
* @param {Event} event
* @private
*/
_onDragStart(event2) {
this.deltaDifference = 0;
this.previousDelta = 0;
if (!this.options.moveable) return;
if (!this._isInsideRange(event2)) return;
if (!this.props.touch.allowDragging) return;
this.stopRolling();
this.props.touch.start = this.start;
this.props.touch.end = this.end;
this.props.touch.dragging = true;
if (this.body.dom.root) {
this.body.dom.root.style.cursor = "move";
}
}
/**
* Perform dragging operation
* @param {Event} event
* @private
*/
_onDrag(event2) {
if (!event2) return;
if (!this.props.touch.dragging) return;
if (!this.options.moveable) return;
if (!this.props.touch.allowDragging) return;
const direction = this.options.direction;
validateDirection(direction);
let delta = direction == "horizontal" ? event2.deltaX : event2.deltaY;
delta -= this.deltaDifference;
let interval = this.props.touch.end - this.props.touch.start;
const duration = getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
interval -= duration;
const width = direction == "horizontal" ? this.body.domProps.center.width : this.body.domProps.center.height;
let diffRange;
if (this.options.rtl) {
diffRange = delta / width * interval;
} else {
diffRange = -delta / width * interval;
}
const newStart = this.props.touch.start + diffRange;
const newEnd = this.props.touch.end + diffRange;
const safeStart = snapAwayFromHidden(this.body.hiddenDates, newStart, this.previousDelta - delta, true);
const safeEnd = snapAwayFromHidden(this.body.hiddenDates, newEnd, this.previousDelta - delta, true);
if (safeStart != newStart || safeEnd != newEnd) {
this.deltaDifference += delta;
this.props.touch.start = safeStart;
this.props.touch.end = safeEnd;
this._onDrag(event2);
return;
}
this.previousDelta = delta;
this._applyRange(newStart, newEnd);
const startDate = new Date(this.start);
const endDate = new Date(this.end);
this.body.emitter.emit("rangechange", {
start: startDate,
end: endDate,
byUser: true,
event: event2
});
this.body.emitter.emit("panmove");
}
/**
* Stop dragging operation
* @param {event} event
* @private
*/
_onDragEnd(event2) {
if (!this.props.touch.dragging) return;
if (!this.options.moveable) return;
if (!this.props.touch.allowDragging) return;
this.props.touch.dragging = false;
if (this.body.dom.root) {
this.body.dom.root.style.cursor = "auto";
}
this.body.emitter.emit("rangechanged", {
start: new Date(this.start),
end: new Date(this.end),
byUser: true,
event: event2
});
}
/**
* Event handler for mouse wheel event, used to zoom
* Code from http://adomas.org/javascript-mouse-wheel/
* @param {Event} event
* @private
*/
_onMouseWheel(event2) {
let delta = 0;
if (event2.wheelDelta) {
delta = event2.wheelDelta / 120;
} else if (event2.detail) {
delta = -event2.detail / 3;
} else if (event2.deltaY) {
delta = -event2.deltaY / 3;
}
if (this.options.zoomKey && !event2[this.options.zoomKey] && this.options.zoomable || !this.options.zoomable && this.options.moveable) {
return;
}
if (!(this.options.zoomable && this.options.moveable)) return;
if (!this._isInsideRange(event2)) return;
if (delta) {
const zoomFriction = this.options.zoomFriction || 5;
let scale;
if (delta < 0) {
scale = 1 - delta / zoomFriction;
} else {
scale = 1 / (1 + delta / zoomFriction);
}
let pointerDate;
if (this.rolling) {
const rollingModeOffset = this.options.rollingMode && this.options.rollingMode.offset || 0.5;
pointerDate = this.start + (this.end - this.start) * rollingModeOffset;
} else {
const pointer = this.getPointer({ x: event2.clientX, y: event2.clientY }, this.body.dom.center);
pointerDate = this._pointerToDate(pointer);
}
this.zoom(scale, pointerDate, delta, event2);
event2.preventDefault();
}
}
/**
* Start of a touch gesture
* @param {Event} event
* @private
*/
_onTouch(event2) {
this.props.touch.start = this.start;
this.props.touch.end = this.end;
this.props.touch.allowDragging = true;
this.props.touch.center = null;
this.props.touch.centerDate = null;
this.scaleOffset = 0;
this.deltaDifference = 0;
availableUtils.preventDefault(event2);
}
/**
* Handle pinch event
* @param {Event} event
* @private
*/
_onPinch(event2) {
if (!(this.options.zoomable && this.options.moveable)) return;
availableUtils.preventDefault(event2);
this.props.touch.allowDragging = false;
if (!this.props.touch.center) {
this.props.touch.center = this.getPointer(event2.center, this.body.dom.center);
this.props.touch.centerDate = this._pointerToDate(this.props.touch.center);
}
this.stopRolling();
const scale = 1 / (event2.scale + this.scaleOffset);
const centerDate = this.props.touch.centerDate;
const hiddenDuration = getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
const hiddenDurationBefore = getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, centerDate);
const hiddenDurationAfter = hiddenDuration - hiddenDurationBefore;
let newStart = centerDate - hiddenDurationBefore + (this.props.touch.start - (centerDate - hiddenDurationBefore)) * scale;
let newEnd = centerDate + hiddenDurationAfter + (this.props.touch.end - (centerDate + hiddenDurationAfter)) * scale;
this.startToFront = 1 - scale <= 0;
this.endToFront = scale - 1 <= 0;
const safeStart = snapAwayFromHidden(this.body.hiddenDates, newStart, 1 - scale, true);
const safeEnd = snapAwayFromHidden(this.body.hiddenDates, newEnd, scale - 1, true);
if (safeStart != newStart || safeEnd != newEnd) {
this.props.touch.start = safeStart;
this.props.touch.end = safeEnd;
this.scaleOffset = 1 - event2.scale;
newStart = safeStart;
newEnd = safeEnd;
}
const options = {
animation: false,
byUser: true,
event: event2
};
this.setRange(newStart, newEnd, options);
this.startToFront = false;
this.endToFront = true;
}
/**
* Test whether the mouse from a mouse event is inside the visible window,
* between the current start and end date
* @param {Object} event
* @return {boolean} Returns true when inside the visible window
* @private
*/
_isInsideRange(event2) {
const clientX = event2.center ? event2.center.x : event2.clientX;
const centerContainerRect = this.body.dom.centerContainer.getBoundingClientRect();
const x = this.options.rtl ? clientX - centerContainerRect.left : centerContainerRect.right - clientX;
const time = this.body.util.toTime(x);
return time >= this.start && time <= this.end;
}
/**
* Helper function to calculate the center date for zooming
* @param {{x: number, y: number}} pointer
* @return {number} date
* @private
*/
_pointerToDate(pointer) {
let conversion;
const direction = this.options.direction;
validateDirection(direction);
if (direction == "horizontal") {
return this.body.util.toTime(pointer.x).valueOf();
} else {
const height = this.body.domProps.center.height;
conversion = this.conversion(height);
return pointer.y / conversion.scale + conversion.offset;
}
}
/**
* Get the pointer location relative to the location of the dom element
* @param {{x: number, y: number}} touch
* @param {Element} element   HTML DOM element
* @return {{x: number, y: number}} pointer
* @private
*/
getPointer(touch, element) {
const elementRect = element.getBoundingClientRect();
if (this.options.rtl) {
return {
x: elementRect.right - touch.x,
y: touch.y - elementRect.top
};
} else {
return {
x: touch.x - elementRect.left,
y: touch.y - elementRect.top
};
}
}
/**
* Zoom the range the given scale in or out. Start and end date will
* be adjusted, and the timeline will be redrawn. You can optionally give a
* date around which to zoom.
* For example, try scale = 0.9 or 1.1
* @param {number} scale      Scaling factor. Values above 1 will zoom out,
*                            values below 1 will zoom in.
* @param {number} [center]   Value representing a date around which will
*                            be zoomed.
* @param {number} delta
* @param {Event} event
*/
zoom(scale, center, delta, event2) {
if (center == null) {
center = (this.start + this.end) / 2;
}
const hiddenDuration = getHiddenDurationBetween(this.body.hiddenDates, this.start, this.end);
const hiddenDurationBefore = getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this, center);
const hiddenDurationAfter = hiddenDuration - hiddenDurationBefore;
let newStart = center - hiddenDurationBefore + (this.start - (center - hiddenDurationBefore)) * scale;
let newEnd = center + hiddenDurationAfter + (this.end - (center + hiddenDurationAfter)) * scale;
this.startToFront = delta > 0 ? false : true;
this.endToFront = -delta > 0 ? false : true;
const safeStart = snapAwayFromHidden(this.body.hiddenDates, newStart, delta, true);
const safeEnd = snapAwayFromHidden(this.body.hiddenDates, newEnd, -delta, true);
if (safeStart != newStart || safeEnd != newEnd) {
newStart = safeStart;
newEnd = safeEnd;
}
const options = {
animation: false,
byUser: true,
event: event2
};
this.setRange(newStart, newEnd, options);
this.startToFront = false;
this.endToFront = true;
}
/**
* Move the range with a given delta to the left or right. Start and end
* value will be adjusted. For example, try delta = 0.1 or -0.1
* @param {number}  delta     Moving amount. Positive value will move right,
*                            negative value will move left
*/
move(delta) {
const diff = this.end - this.start;
const newStart = this.start + diff * delta;
const newEnd = this.end + diff * delta;
this.start = newStart;
this.end = newEnd;
}
/**
* Move the range to a new center point
* @param {number} moveTo      New center point of the range
*/
moveTo(moveTo) {
const center = (this.start + this.end) / 2;
const diff = center - moveTo;
const newStart = this.start - diff;
const newEnd = this.end - diff;
const options = {
animation: false,
byUser: true,
event: null
};
this.setRange(newStart, newEnd, options);
}
/**
* Destroy the Range
*/
destroy() {
this.stopRolling();
}
};
function validateDirection(direction) {
if (direction != "horizontal" && direction != "vertical") {
throw new TypeError(`Unknown direction "${direction}". Choose "horizontal" or "vertical".`);
}
}
function hammerMock2() {
const noop = () => {
};
return {
on: noop,
off: noop,
destroy: noop,
emit: noop,
get(m) {
return {
set: noop
};
}
};
}
var modifiedHammer;
if (typeof window !== "undefined") {
const OurHammer = window["Hammer"] || hammer_esm_default;
modifiedHammer = propagating(OurHammer, {
preventDefault: "mouse"
});
} else {
modifiedHammer = function() {
return hammerMock2();
};
}
var Hammer3 = modifiedHammer;
function onTouch(hammer, callback) {
callback.inputHandler = function(event2) {
if (event2.isFirst) {
callback(event2);
}
};
hammer.on("hammer.input", callback.inputHandler);
}
function onRelease(hammer, callback) {
callback.inputHandler = function(event2) {
if (event2.isFinal) {
callback(event2);
}
};
return hammer.on("hammer.input", callback.inputHandler);
}
function disablePreventDefaultVertically(pinchRecognizer) {
const TOUCH_ACTION_PAN_Y2 = "pan-y";
pinchRecognizer.getTouchAction = function() {
return [TOUCH_ACTION_PAN_Y2];
};
return pinchRecognizer;
}
var TimeStep = class _TimeStep {
/**
* @param {Date} [start]         The start date, for example new Date(2010, 9, 21)
*                               or new Date(2010, 9, 21, 23, 45, 00)
* @param {Date} [end]           The end date
* @param {number} [minimumStep] Optional. Minimum step size in milliseconds
* @param {Date|Array.<Date>} [hiddenDates] Optional.
* @param {{showMajorLabels: boolean, showWeekScale: boolean}} [options] Optional.
* @constructor  TimeStep
*/
constructor(start, end, minimumStep, hiddenDates, options) {
this.moment = options && options.moment || moment$2;
this.options = options ? options : {};
this.current = this.moment();
this._start = this.moment();
this._end = this.moment();
this.autoScale = true;
this.scale = "day";
this.step = 1;
this.setRange(start, end, minimumStep);
this.switchedDay = false;
this.switchedMonth = false;
this.switchedYear = false;
if (Array.isArray(hiddenDates)) {
this.hiddenDates = hiddenDates;
} else if (hiddenDates != void 0) {
this.hiddenDates = [hiddenDates];
} else {
this.hiddenDates = [];
}
this.format = _TimeStep.FORMAT;
}
/**
* Set custom constructor function for moment. Can be used to set dates
* to UTC or to set a utcOffset.
* @param {function} moment
*/
setMoment(moment2) {
this.moment = moment2;
this.current = this.moment(this.current.valueOf());
this._start = this.moment(this._start.valueOf());
this._end = this.moment(this._end.valueOf());
}
/**
* Set custom formatting for the minor an major labels of the TimeStep.
* Both `minorLabels` and `majorLabels` are an Object with properties:
* 'millisecond', 'second', 'minute', 'hour', 'weekday', 'day', 'week', 'month', 'year'.
* @param {{minorLabels: Object, majorLabels: Object}} format
*/
setFormat(format) {
const defaultFormat = availableUtils.deepExtend({}, _TimeStep.FORMAT);
this.format = availableUtils.deepExtend(defaultFormat, format);
}
/**
* Set a new range
* If minimumStep is provided, the step size is chosen as close as possible
* to the minimumStep but larger than minimumStep. If minimumStep is not
* provided, the scale is set to 1 DAY.
* The minimumStep should correspond with the onscreen size of about 6 characters
* @param {Date} [start]      The start date and time.
* @param {Date} [end]        The end date and time.
* @param {int} [minimumStep] Optional. Minimum step size in milliseconds
*/
setRange(start, end, minimumStep) {
if (!(start instanceof Date) || !(end instanceof Date)) {
throw "No legal start or end date in method setRange";
}
this._start = start != void 0 ? this.moment(start.valueOf()) : Date.now();
this._end = end != void 0 ? this.moment(end.valueOf()) : Date.now();
if (this.autoScale) {
this.setMinimumStep(minimumStep);
}
}
/**
* Set the range iterator to the start date.
*/
start() {
this.current = this._start.clone();
this.roundToMinor();
}
/**
* Round the current date to the first minor date value
* This must be executed once when the current date is set to start Date
*/
roundToMinor() {
if (this.scale == "week") {
this.current.weekday(0);
}
switch (this.scale) {
case "year":
this.current = this.current.year(this.step * Math.floor(this.current.year() / this.step)).month(0);
case "month":
this.current = this.current.date(1);
case "week":
case "day":
case "weekday":
this.current = this.current.hours(0);
case "hour":
this.current = this.current.minutes(0);
case "minute":
this.current = this.current.seconds(0);
case "second":
this.current = this.current.milliseconds(0);
}
if (this.step != 1) {
let priorCurrent = this.current.clone();
switch (this.scale) {
case "millisecond":
this.current = this.current.subtract(this.current.milliseconds() % this.step, "milliseconds");
break;
case "second":
this.current = this.current.subtract(this.current.seconds() % this.step, "seconds");
break;
case "minute":
this.current = this.current.subtract(this.current.minutes() % this.step, "minutes");
break;
case "hour":
this.current = this.current.subtract(this.current.hours() % this.step, "hours");
break;
case "weekday":
case "day":
this.current = this.current.subtract((this.current.date() - 1) % this.step, "day");
break;
case "week":
this.current = this.current.subtract(this.current.week() % this.step, "week");
break;
case "month":
this.current = this.current.subtract(this.current.month() % this.step, "month");
break;
case "year":
this.current = this.current.subtract(this.current.year() % this.step, "year");
break;
}
if (!priorCurrent.isSame(this.current)) {
this.current = this.moment(snapAwayFromHidden(this.hiddenDates, this.current.valueOf(), -1, true));
}
}
}
/**
* Check if the there is a next step
* @return {boolean}  true if the current date has not passed the end date
*/
hasNext() {
return this.current.valueOf() <= this._end.valueOf();
}
/**
* Do the next step
*/
next() {
const prev = this.current.valueOf();
switch (this.scale) {
case "millisecond":
this.current = this.current.add(this.step, "millisecond");
break;
case "second":
this.current = this.current.add(this.step, "second");
break;
case "minute":
this.current = this.current.add(this.step, "minute");
break;
case "hour":
this.current = this.current.add(this.step, "hour");
if (this.current.month() < 6) {
this.current = this.current.subtract(this.current.hours() % this.step, "hour");
} else {
if (this.current.hours() % this.step !== 0) {
this.current = this.current.add(this.step - this.current.hours() % this.step, "hour");
}
}
break;
case "weekday":
case "day":
this.current = this.current.add(this.step, "day");
break;
case "week":
if (this.current.weekday() !== 0) {
this.current = this.current.weekday(0).add(this.step, "week");
} else if (this.options.showMajorLabels === false) {
this.current = this.current.add(this.step, "week");
} else {
const nextWeek = this.current.clone();
nextWeek.add(1, "week");
if (nextWeek.isSame(this.current, "month")) {
this.current = this.current.add(this.step, "week");
} else {
this.current = this.current.add(this.step, "week").date(1);
}
}
break;
case "month":
this.current = this.current.add(this.step, "month");
break;
case "year":
this.current = this.current.add(this.step, "year");
break;
}
if (this.step != 1) {
switch (this.scale) {
case "millisecond":
if (this.current.milliseconds() > 0 && this.current.milliseconds() < this.step) this.current = this.current.milliseconds(0);
break;
case "second":
if (this.current.seconds() > 0 && this.current.seconds() < this.step) this.current = this.current.seconds(0);
break;
case "minute":
if (this.current.minutes() > 0 && this.current.minutes() < this.step) this.current = this.current.minutes(0);
break;
case "hour":
if (this.current.hours() > 0 && this.current.hours() < this.step) this.current = this.current.hours(0);
break;
case "weekday":
case "day":
if (this.current.date() < this.step + 1) this.current = this.current.date(1);
break;
case "week":
if (this.current.week() < this.step) this.current = this.current.week(1);
break;
case "month":
if (this.current.month() < this.step) this.current = this.current.month(0);
break;
}
}
if (this.current.valueOf() == prev) {
this.current = this._end.clone();
}
this.switchedDay = false;
this.switchedMonth = false;
this.switchedYear = false;
stepOverHiddenDates(this.moment, this, prev);
}
/**
* Get the current datetime
* @return {Moment}  current The current date
*/
getCurrent() {
return this.current.clone();
}
/**
* Set a custom scale. Autoscaling will be disabled.
* For example setScale('minute', 5) will result
* in minor steps of 5 minutes, and major steps of an hour.
*
* @param {{scale: string, step: number}} params
*                               An object containing two properties:
*                               - A string 'scale'. Choose from 'millisecond', 'second',
*                                 'minute', 'hour', 'weekday', 'day', 'week', 'month', 'year'.
*                               - A number 'step'. A step size, by default 1.
*                                 Choose for example 1, 2, 5, or 10.
*/
setScale(params) {
if (params && typeof params.scale == "string") {
this.scale = params.scale;
this.step = params.step > 0 ? params.step : 1;
this.autoScale = false;
}
}
/**
* Enable or disable autoscaling
* @param {boolean} enable  If true, autoascaling is set true
*/
setAutoScale(enable) {
this.autoScale = enable;
}
/**
* Automatically determine the scale that bests fits the provided minimum step
* @param {number} [minimumStep]  The minimum step size in milliseconds
*/
setMinimumStep(minimumStep) {
if (minimumStep == void 0) {
return;
}
const stepYear = 1e3 * 60 * 60 * 24 * 30 * 12;
const stepMonth = 1e3 * 60 * 60 * 24 * 30;
const stepDay = 1e3 * 60 * 60 * 24;
const stepHour = 1e3 * 60 * 60;
const stepMinute = 1e3 * 60;
const stepSecond = 1e3;
const stepMillisecond = 1;
if (stepYear * 1e3 > minimumStep) {
this.scale = "year";
this.step = 1e3;
}
if (stepYear * 500 > minimumStep) {
this.scale = "year";
this.step = 500;
}
if (stepYear * 100 > minimumStep) {
this.scale = "year";
this.step = 100;
}
if (stepYear * 50 > minimumStep) {
this.scale = "year";
this.step = 50;
}
if (stepYear * 10 > minimumStep) {
this.scale = "year";
this.step = 10;
}
if (stepYear * 5 > minimumStep) {
this.scale = "year";
this.step = 5;
}
if (stepYear > minimumStep) {
this.scale = "year";
this.step = 1;
}
if (stepMonth * 3 > minimumStep) {
this.scale = "month";
this.step = 3;
}
if (stepMonth > minimumStep) {
this.scale = "month";
this.step = 1;
}
if (stepDay * 7 > minimumStep && this.options.showWeekScale) {
this.scale = "week";
this.step = 1;
}
if (stepDay * 2 > minimumStep) {
this.scale = "day";
this.step = 2;
}
if (stepDay > minimumStep) {
this.scale = "day";
this.step = 1;
}
if (stepDay / 2 > minimumStep) {
this.scale = "weekday";
this.step = 1;
}
if (stepHour * 4 > minimumStep) {
this.scale = "hour";
this.step = 4;
}
if (stepHour > minimumStep) {
this.scale = "hour";
this.step = 1;
}
if (stepMinute * 15 > minimumStep) {
this.scale = "minute";
this.step = 15;
}
if (stepMinute * 10 > minimumStep) {
this.scale = "minute";
this.step = 10;
}
if (stepMinute * 5 > minimumStep) {
this.scale = "minute";
this.step = 5;
}
if (stepMinute > minimumStep) {
this.scale = "minute";
this.step = 1;
}
if (stepSecond * 15 > minimumStep) {
this.scale = "second";
this.step = 15;
}
if (stepSecond * 10 > minimumStep) {
this.scale = "second";
this.step = 10;
}
if (stepSecond * 5 > minimumStep) {
this.scale = "second";
this.step = 5;
}
if (stepSecond > minimumStep) {
this.scale = "second";
this.step = 1;
}
if (stepMillisecond * 200 > minimumStep) {
this.scale = "millisecond";
this.step = 200;
}
if (stepMillisecond * 100 > minimumStep) {
this.scale = "millisecond";
this.step = 100;
}
if (stepMillisecond * 50 > minimumStep) {
this.scale = "millisecond";
this.step = 50;
}
if (stepMillisecond * 10 > minimumStep) {
this.scale = "millisecond";
this.step = 10;
}
if (stepMillisecond * 5 > minimumStep) {
this.scale = "millisecond";
this.step = 5;
}
if (stepMillisecond > minimumStep) {
this.scale = "millisecond";
this.step = 1;
}
}
/**
* Snap a date to a rounded value.
* The snap intervals are dependent on the current scale and step.
* Static function
* @param {Date} date    the date to be snapped.
* @param {string} scale Current scale, can be 'millisecond', 'second',
*                       'minute', 'hour', 'weekday, 'day', 'week', 'month', 'year'.
* @param {number} step  Current step (1, 2, 4, 5, ...
* @return {Date} snappedDate
*/
static snap(date2, scale, step) {
let clone2 = moment$2(date2);
if (scale == "year") {
const year = clone2.year() + Math.round(clone2.month() / 12);
clone2 = clone2.year(Math.round(year / step) * step).month(0).date(0).hours(0).minutes(0).seconds(0).milliseconds(0);
} else if (scale == "month") {
if (clone2.date() > 15) {
clone2 = clone2.date(1).add(1, "month");
} else {
clone2 = clone2.date(1);
}
clone2 = clone2.hours(0).minutes(0).seconds(0).milliseconds(0);
} else if (scale == "week") {
if (clone2.weekday() > 2) {
clone2 = clone2.weekday(0).add(1, "week");
} else {
clone2 = clone2.weekday(0);
}
clone2 = clone2.hours(0).minutes(0).seconds(0).milliseconds(0);
} else if (scale == "day") {
switch (step) {
case 5:
case 2:
clone2 = clone2.hours(Math.round(clone2.hours() / 24) * 24);
break;
default:
clone2 = clone2.hours(Math.round(clone2.hours() / 12) * 12);
break;
}
clone2 = clone2.minutes(0).seconds(0).milliseconds(0);
} else if (scale == "weekday") {
switch (step) {
case 5:
case 2:
clone2 = clone2.hours(Math.round(clone2.hours() / 12) * 12);
break;
default:
clone2 = clone2.hours(Math.round(clone2.hours() / 6) * 6);
break;
}
clone2 = clone2.minutes(0).seconds(0).milliseconds(0);
} else if (scale == "hour") {
switch (step) {
case 4:
clone2 = clone2.minutes(Math.round(clone2.minutes() / 60) * 60);
break;
default:
clone2 = clone2.minutes(Math.round(clone2.minutes() / 30) * 30);
break;
}
clone2 = clone2.seconds(0).milliseconds(0);
} else if (scale == "minute") {
switch (step) {
case 15:
case 10:
clone2 = clone2.minutes(Math.round(clone2.minutes() / 5) * 5).seconds(0);
break;
case 5:
clone2 = clone2.seconds(Math.round(clone2.seconds() / 60) * 60);
break;
default:
clone2 = clone2.seconds(Math.round(clone2.seconds() / 30) * 30);
break;
}
clone2 = clone2.milliseconds(0);
} else if (scale == "second") {
switch (step) {
case 15:
case 10:
clone2 = clone2.seconds(Math.round(clone2.seconds() / 5) * 5).milliseconds(0);
break;
case 5:
clone2 = clone2.milliseconds(Math.round(clone2.milliseconds() / 1e3) * 1e3);
break;
default:
clone2 = clone2.milliseconds(Math.round(clone2.milliseconds() / 500) * 500);
break;
}
} else if (scale == "millisecond") {
const _step = step > 5 ? step / 2 : 1;
clone2 = clone2.milliseconds(Math.round(clone2.milliseconds() / _step) * _step);
}
return clone2;
}
/**
* Check if the current value is a major value (for example when the step
* is DAY, a major value is each first day of the MONTH)
* @return {boolean} true if current date is major, else false.
*/
isMajor() {
if (this.switchedYear == true) {
switch (this.scale) {
case "year":
case "month":
case "week":
case "weekday":
case "day":
case "hour":
case "minute":
case "second":
case "millisecond":
return true;
default:
return false;
}
} else if (this.switchedMonth == true) {
switch (this.scale) {
case "week":
case "weekday":
case "day":
case "hour":
case "minute":
case "second":
case "millisecond":
return true;
default:
return false;
}
} else if (this.switchedDay == true) {
switch (this.scale) {
case "millisecond":
case "second":
case "minute":
case "hour":
return true;
default:
return false;
}
}
const date2 = this.moment(this.current);
switch (this.scale) {
case "millisecond":
return date2.milliseconds() == 0;
case "second":
return date2.seconds() == 0;
case "minute":
return date2.hours() == 0 && date2.minutes() == 0;
case "hour":
return date2.hours() == 0;
case "weekday":
case "day":
return this.options.showWeekScale ? date2.isoWeekday() == 1 : date2.date() == 1;
case "week":
return date2.date() == 1;
case "month":
return date2.month() == 0;
case "year":
return false;
default:
return false;
}
}
/**
* Returns formatted text for the minor axislabel, depending on the current
* date and the scale. For example when scale is MINUTE, the current time is
* formatted as "hh:mm".
* @param {Date} [date=this.current] custom date. if not provided, current date is taken
* @returns {String}
*/
getLabelMinor(date2) {
if (date2 == void 0) {
date2 = this.current;
}
if (date2 instanceof Date) {
date2 = this.moment(date2);
}
if (typeof this.format.minorLabels === "function") {
return this.format.minorLabels(date2, this.scale, this.step);
}
const format = this.format.minorLabels[this.scale];
switch (this.scale) {
case "week":
if (date2.date() === 1 && date2.weekday() !== 0) {
return "";
}
default:
return format && format.length > 0 ? this.moment(date2).format(format) : "";
}
}
/**
* Returns formatted text for the major axis label, depending on the current
* date and the scale. For example when scale is MINUTE, the major scale is
* hours, and the hour will be formatted as "hh".
* @param {Date} [date=this.current] custom date. if not provided, current date is taken
* @returns {String}
*/
getLabelMajor(date2) {
if (date2 == void 0) {
date2 = this.current;
}
if (date2 instanceof Date) {
date2 = this.moment(date2);
}
if (typeof this.format.majorLabels === "function") {
return this.format.majorLabels(date2, this.scale, this.step);
}
const format = this.format.majorLabels[this.scale];
return format && format.length > 0 ? this.moment(date2).format(format) : "";
}
/**
* get class name
* @return {string} class name
*/
getClassName() {
const _moment = this.moment;
const m = this.moment(this.current);
const current = m.locale ? m.locale("en") : m.lang("en");
const step = this.step;
const classNames = [];
function even(value) {
return value / step % 2 == 0 ? " vis-even" : " vis-odd";
}
function today(date2) {
if (date2.isSame(Date.now(), "day")) {
return " vis-today";
}
if (date2.isSame(_moment().add(1, "day"), "day")) {
return " vis-tomorrow";
}
if (date2.isSame(_moment().add(-1, "day"), "day")) {
return " vis-yesterday";
}
return "";
}
function currentWeek(date2) {
return date2.isSame(Date.now(), "week") ? " vis-current-week" : "";
}
function currentMonth(date2) {
return date2.isSame(Date.now(), "month") ? " vis-current-month" : "";
}
function currentYear(date2) {
return date2.isSame(Date.now(), "year") ? " vis-current-year" : "";
}
switch (this.scale) {
case "millisecond":
classNames.push(today(current));
classNames.push(even(current.milliseconds()));
break;
case "second":
classNames.push(today(current));
classNames.push(even(current.seconds()));
break;
case "minute":
classNames.push(today(current));
classNames.push(even(current.minutes()));
break;
case "hour":
classNames.push(`vis-h${current.hours()}${this.step == 4 ? "-h" + (current.hours() + 4) : ""}`);
classNames.push(today(current));
classNames.push(even(current.hours()));
break;
case "weekday":
classNames.push(`vis-${current.format("dddd").toLowerCase()}`);
classNames.push(today(current));
classNames.push(currentWeek(current));
classNames.push(even(current.date()));
break;
case "day":
classNames.push(`vis-day${current.date()}`);
classNames.push(`vis-${current.format("MMMM").toLowerCase()}`);
classNames.push(today(current));
classNames.push(currentMonth(current));
classNames.push(this.step <= 2 ? today(current) : "");
classNames.push(this.step <= 2 ? `vis-${current.format("dddd").toLowerCase()}` : "");
classNames.push(even(current.date() - 1));
break;
case "week":
classNames.push(`vis-week${current.format("w")}`);
classNames.push(currentWeek(current));
classNames.push(even(current.week()));
break;
case "month":
classNames.push(`vis-${current.format("MMMM").toLowerCase()}`);
classNames.push(currentMonth(current));
classNames.push(even(current.month()));
break;
case "year":
classNames.push(`vis-year${current.year()}`);
classNames.push(currentYear(current));
classNames.push(even(current.year()));
break;
}
return classNames.filter(String).join(" ");
}
};
TimeStep.FORMAT = {
minorLabels: {
millisecond: "SSS",
second: "s",
minute: "HH:mm",
hour: "HH:mm",
weekday: "ddd D",
day: "D",
week: "w",
month: "MMM",
year: "YYYY"
},
majorLabels: {
millisecond: "HH:mm:ss",
second: "D MMMM HH:mm",
minute: "ddd D MMMM",
hour: "ddd D MMMM",
weekday: "MMMM YYYY",
day: "MMMM YYYY",
week: "MMMM YYYY",
month: "YYYY",
year: ""
}
};
var TimeAxis = class extends Component {
/**
* @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} body
* @param {Object} [options]        See TimeAxis.setOptions for the available
*                                  options.
* @constructor TimeAxis
* @extends Component
*/
constructor(body, options) {
super();
this.dom = {
foreground: null,
lines: [],
majorTexts: [],
minorTexts: [],
redundant: {
lines: [],
majorTexts: [],
minorTexts: []
}
};
this.props = {
range: {
start: 0,
end: 0,
minimumStep: 0
},
lineTop: 0
};
this.defaultOptions = {
orientation: {
axis: "bottom"
},
showMinorLabels: true,
showMajorLabels: true,
showWeekScale: false,
maxMinorChars: 7,
format: availableUtils.extend({}, TimeStep.FORMAT),
moment: moment$2,
timeAxis: null
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.body = body;
this._create();
this.setOptions(options);
}
/**
* Set options for the TimeAxis.
* Parameters will be merged in current options.
* @param {Object} options  Available options:
*                          {string} [orientation.axis]
*                          {boolean} [showMinorLabels]
*                          {boolean} [showMajorLabels]
*                          {boolean} [showWeekScale]
*/
setOptions(options) {
if (options) {
availableUtils.selectiveExtend([
"showMinorLabels",
"showMajorLabels",
"showWeekScale",
"maxMinorChars",
"hiddenDates",
"timeAxis",
"moment",
"rtl"
], this.options, options);
availableUtils.selectiveDeepExtend(["format"], this.options, options);
if ("orientation" in options) {
if (typeof options.orientation === "string") {
this.options.orientation.axis = options.orientation;
} else if (typeof options.orientation === "object" && "axis" in options.orientation) {
this.options.orientation.axis = options.orientation.axis;
}
}
if ("locale" in options) {
if (typeof moment$2.locale === "function") {
moment$2.locale(options.locale);
} else {
moment$2.lang(options.locale);
}
}
}
}
/**
* Create the HTML DOM for the TimeAxis
*/
_create() {
this.dom.foreground = document.createElement("div");
this.dom.background = document.createElement("div");
this.dom.foreground.className = "vis-time-axis vis-foreground";
this.dom.background.className = "vis-time-axis vis-background";
}
/**
* Destroy the TimeAxis
*/
destroy() {
if (this.dom.foreground.parentNode) {
this.dom.foreground.parentNode.removeChild(this.dom.foreground);
}
if (this.dom.background.parentNode) {
this.dom.background.parentNode.removeChild(this.dom.background);
}
this.body = null;
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
const props = this.props;
const foreground = this.dom.foreground;
const background = this.dom.background;
const parent = this.options.orientation.axis == "top" ? this.body.dom.top : this.body.dom.bottom;
const parentChanged = foreground.parentNode !== parent;
this._calculateCharSize();
const showMinorLabels = this.options.showMinorLabels && this.options.orientation.axis !== "none";
const showMajorLabels = this.options.showMajorLabels && this.options.orientation.axis !== "none";
props.minorLabelHeight = showMinorLabels ? props.minorCharHeight : 0;
props.majorLabelHeight = showMajorLabels ? props.majorCharHeight : 0;
props.height = props.minorLabelHeight + props.majorLabelHeight;
props.width = foreground.offsetWidth;
props.minorLineHeight = this.body.domProps.root.height - props.majorLabelHeight - (this.options.orientation.axis == "top" ? this.body.domProps.bottom.height : this.body.domProps.top.height);
props.minorLineWidth = 1;
props.majorLineHeight = props.minorLineHeight + props.majorLabelHeight;
props.majorLineWidth = 1;
const foregroundNextSibling = foreground.nextSibling;
const backgroundNextSibling = background.nextSibling;
foreground.parentNode && foreground.parentNode.removeChild(foreground);
background.parentNode && background.parentNode.removeChild(background);
foreground.style.height = `${this.props.height}px`;
this._repaintLabels();
if (foregroundNextSibling) {
parent.insertBefore(foreground, foregroundNextSibling);
} else {
parent.appendChild(foreground);
}
if (backgroundNextSibling) {
this.body.dom.backgroundVertical.insertBefore(background, backgroundNextSibling);
} else {
this.body.dom.backgroundVertical.appendChild(background);
}
return this._isResized() || parentChanged;
}
/**
* Repaint major and minor text labels and vertical grid lines
* @private
*/
_repaintLabels() {
const orientation = this.options.orientation.axis;
const start = availableUtils.convert(this.body.range.start, "Number");
const end = availableUtils.convert(this.body.range.end, "Number");
const timeLabelsize = this.body.util.toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars).valueOf();
let minimumStep = timeLabelsize - getHiddenDurationBefore(this.options.moment, this.body.hiddenDates, this.body.range, timeLabelsize);
minimumStep -= this.body.util.toTime(0).valueOf();
const step = new TimeStep(new Date(start), new Date(end), minimumStep, this.body.hiddenDates, this.options);
step.setMoment(this.options.moment);
if (this.options.format) {
step.setFormat(this.options.format);
}
if (this.options.timeAxis) {
step.setScale(this.options.timeAxis);
}
this.step = step;
const dom2 = this.dom;
dom2.redundant.lines = dom2.lines;
dom2.redundant.majorTexts = dom2.majorTexts;
dom2.redundant.minorTexts = dom2.minorTexts;
dom2.lines = [];
dom2.majorTexts = [];
dom2.minorTexts = [];
let current;
let next;
let x;
let xNext;
let isMajor;
let showMinorGrid;
let width = 0;
let prevWidth;
let line;
let xFirstMajorLabel = void 0;
let count = 0;
const MAX = 1e3;
let className;
step.start();
next = step.getCurrent();
xNext = this.body.util.toScreen(next);
while (step.hasNext() && count < MAX) {
count++;
isMajor = step.isMajor();
className = step.getClassName();
current = next;
x = xNext;
step.next();
next = step.getCurrent();
xNext = this.body.util.toScreen(next);
prevWidth = width;
width = xNext - x;
switch (step.scale) {
case "week":
showMinorGrid = true;
break;
default:
showMinorGrid = width >= prevWidth * 0.4;
break;
}
if (this.options.showMinorLabels && showMinorGrid) {
var label = this._repaintMinorText(x, step.getLabelMinor(current), orientation, className);
label.style.width = `${width}px`;
}
if (isMajor && this.options.showMajorLabels) {
if (x > 0) {
if (xFirstMajorLabel == void 0) {
xFirstMajorLabel = x;
}
label = this._repaintMajorText(x, step.getLabelMajor(current), orientation, className);
}
line = this._repaintMajorLine(x, width, orientation, className);
} else {
if (showMinorGrid) {
line = this._repaintMinorLine(x, width, orientation, className);
} else {
if (line) {
line.style.width = `${parseInt(line.style.width) + width}px`;
}
}
}
}
if (count === MAX && !warnedForOverflow) {
console.warn(`Something is wrong with the Timeline scale. Limited drawing of grid lines to ${MAX} lines.`);
warnedForOverflow = true;
}
if (this.options.showMajorLabels) {
const leftTime = this.body.util.toTime(0);
const leftText = step.getLabelMajor(leftTime);
const widthText = leftText.length * (this.props.majorCharWidth || 10) + 10;
if (xFirstMajorLabel == void 0 || widthText < xFirstMajorLabel) {
this._repaintMajorText(0, leftText, orientation, className);
}
}
availableUtils.forEach(this.dom.redundant, (arr) => {
while (arr.length) {
const elem = arr.pop();
if (elem && elem.parentNode) {
elem.parentNode.removeChild(elem);
}
}
});
}
/**
* Create a minor label for the axis at position x
* @param {number} x
* @param {string} text
* @param {string} orientation   "top" or "bottom" (default)
* @param {string} className
* @return {Element} Returns the HTML element of the created label
* @private
*/
_repaintMinorText(x, text, orientation, className) {
let label = this.dom.redundant.minorTexts.shift();
if (!label) {
const content = document.createTextNode("");
label = document.createElement("div");
label.appendChild(content);
this.dom.foreground.appendChild(label);
}
this.dom.minorTexts.push(label);
label.innerHTML = availableUtils.xss(text);
let y = orientation == "top" ? this.props.majorLabelHeight : 0;
this._setXY(label, x, y);
label.className = `vis-text vis-minor ${className}`;
return label;
}
/**
* Create a Major label for the axis at position x
* @param {number} x
* @param {string} text
* @param {string} orientation   "top" or "bottom" (default)
* @param {string} className
* @return {Element} Returns the HTML element of the created label
* @private
*/
_repaintMajorText(x, text, orientation, className) {
let label = this.dom.redundant.majorTexts.shift();
if (!label) {
const content = document.createElement("div");
label = document.createElement("div");
label.appendChild(content);
this.dom.foreground.appendChild(label);
}
label.childNodes[0].innerHTML = availableUtils.xss(text);
label.className = `vis-text vis-major ${className}`;
let y = orientation == "top" ? 0 : this.props.minorLabelHeight;
this._setXY(label, x, y);
this.dom.majorTexts.push(label);
return label;
}
/**
* sets xy
* @param {string} label
* @param {number} x
* @param {number} y
* @private
*/
_setXY(label, x, y) {
const directionX = this.options.rtl ? x * -1 : x;
label.style.transform = `translate(${directionX}px, ${y}px)`;
}
/**
* Create a minor line for the axis at position x
* @param {number} left
* @param {number} width
* @param {string} orientation   "top" or "bottom" (default)
* @param {string} className
* @return {Element} Returns the created line
* @private
*/
_repaintMinorLine(left, width, orientation, className) {
let line = this.dom.redundant.lines.shift();
if (!line) {
line = document.createElement("div");
this.dom.background.appendChild(line);
}
this.dom.lines.push(line);
const props = this.props;
line.style.width = `${width}px`;
line.style.height = `${props.minorLineHeight}px`;
let y = orientation == "top" ? props.majorLabelHeight : this.body.domProps.top.height;
let x = left - props.minorLineWidth / 2;
this._setXY(line, x, y);
line.className = `vis-grid ${this.options.rtl ? "vis-vertical-rtl" : "vis-vertical"} vis-minor ${className}`;
return line;
}
/**
* Create a Major line for the axis at position x
* @param {number} left
* @param {number} width
* @param {string} orientation   "top" or "bottom" (default)
* @param {string} className
* @return {Element} Returns the created line
* @private
*/
_repaintMajorLine(left, width, orientation, className) {
let line = this.dom.redundant.lines.shift();
if (!line) {
line = document.createElement("div");
this.dom.background.appendChild(line);
}
this.dom.lines.push(line);
const props = this.props;
line.style.width = `${width}px`;
line.style.height = `${props.majorLineHeight}px`;
let y = orientation == "top" ? 0 : this.body.domProps.top.height;
let x = left - props.majorLineWidth / 2;
this._setXY(line, x, y);
line.className = `vis-grid ${this.options.rtl ? "vis-vertical-rtl" : "vis-vertical"} vis-major ${className}`;
return line;
}
/**
* Determine the size of text on the axis (both major and minor axis).
* The size is calculated only once and then cached in this.props.
* @private
*/
_calculateCharSize() {
if (!this.dom.measureCharMinor) {
this.dom.measureCharMinor = document.createElement("DIV");
this.dom.measureCharMinor.className = "vis-text vis-minor vis-measure";
this.dom.measureCharMinor.style.position = "absolute";
this.dom.measureCharMinor.appendChild(document.createTextNode("0"));
this.dom.foreground.appendChild(this.dom.measureCharMinor);
}
this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight;
this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth;
if (!this.dom.measureCharMajor) {
this.dom.measureCharMajor = document.createElement("DIV");
this.dom.measureCharMajor.className = "vis-text vis-major vis-measure";
this.dom.measureCharMajor.style.position = "absolute";
this.dom.measureCharMajor.appendChild(document.createTextNode("0"));
this.dom.foreground.appendChild(this.dom.measureCharMajor);
}
this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight;
this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth;
}
};
var warnedForOverflow = false;
function Activator2(container) {
this.active = false;
this.dom = {
container
};
this.dom.overlay = document.createElement("div");
this.dom.overlay.className = "vis-overlay";
this.dom.container.appendChild(this.dom.overlay);
this.hammer = Hammer3(this.dom.overlay);
this.hammer.on("tap", this._onTapOverlay.bind(this));
var me = this;
var events = [
"tap",
"doubletap",
"press",
"pinch",
"pan",
"panstart",
"panmove",
"panend"
];
events.forEach(function(event2) {
me.hammer.on(event2, function(event3) {
event3.stopPropagation();
});
});
if (document && document.body) {
this.onClick = function(event2) {
if (!_hasParent2(event2.target, container)) {
me.deactivate();
}
};
document.body.addEventListener("click", this.onClick);
}
if (this.keycharm !== void 0) {
this.keycharm.destroy();
}
this.keycharm = keycharm();
this.escListener = this.deactivate.bind(this);
}
(0, import_component_emitter2.default)(Activator2.prototype);
Activator2.current = null;
Activator2.prototype.destroy = function() {
this.deactivate();
this.dom.overlay.parentNode.removeChild(this.dom.overlay);
if (this.onClick) {
document.body.removeEventListener("click", this.onClick);
}
if (this.keycharm !== void 0) {
this.keycharm.destroy();
}
this.keycharm = null;
this.hammer.destroy();
this.hammer = null;
};
Activator2.prototype.activate = function() {
if (Activator2.current) {
Activator2.current.deactivate();
}
Activator2.current = this;
this.active = true;
this.dom.overlay.style.display = "none";
availableUtils.addClassName(this.dom.container, "vis-active");
this.emit("change");
this.emit("activate");
this.keycharm.bind("esc", this.escListener);
};
Activator2.prototype.deactivate = function() {
if (Activator2.current === this) {
Activator2.current = null;
}
this.active = false;
this.dom.overlay.style.display = "";
availableUtils.removeClassName(this.dom.container, "vis-active");
this.keycharm.unbind("esc", this.escListener);
this.emit("change");
this.emit("deactivate");
};
Activator2.prototype._onTapOverlay = function(event2) {
this.activate();
event2.stopPropagation();
};
function _hasParent2(element, parent) {
while (element) {
if (element === parent) {
return true;
}
element = element.parentNode;
}
return false;
}
var en = {
current: "current",
time: "time",
deleteSelected: "Delete selected"
};
var en_EN = en;
var en_US = en;
var it = {
current: "attuale",
time: "tempo",
deleteSelected: "Cancella la selezione"
};
var it_IT = it;
var it_CH = it;
var nl = {
current: "huidige",
time: "tijd",
deleteSelected: "Selectie verwijderen"
};
var nl_NL = nl;
var nl_BE = nl;
var de = {
current: "Aktuelle",
time: "Zeit",
deleteSelected: "L\xF6sche Auswahl"
};
var de_DE = de;
var fr = {
current: "actuel",
time: "heure",
deleteSelected: "Effacer la selection"
};
var fr_FR = fr;
var fr_CA = fr;
var fr_BE = fr;
var es = {
current: "corriente",
time: "hora",
deleteSelected: "Eliminar selecci\xF3n"
};
var es_ES = es;
var uk = {
current: "\u043F\u043E\u0442\u043E\u0447\u043D\u0438\u0439",
time: "\u0447\u0430\u0441",
deleteSelected: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043E\u0431\u0440\u0430\u043D\u0435"
};
var uk_UA = uk;
var ru = {
current: "\u0442\u0435\u043A\u0443\u0449\u0435\u0435",
time: "\u0432\u0440\u0435\u043C\u044F",
deleteSelected: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435"
};
var ru_RU = ru;
var pl = {
current: "aktualny",
time: "czas",
deleteSelected: "Usu\u0144 wybrane"
};
var pl_PL = pl;
var pt = {
current: "atual",
time: "data",
deleteSelected: "Apagar selecionado"
};
var pt_BR = pt;
var pt_PT = pt;
var ja = {
current: "\u73FE\u5728",
time: "\u6642\u523B",
deleteSelected: "\u9078\u629E\u3055\u308C\u305F\u3082\u306E\u3092\u524A\u9664"
};
var ja_JP = ja;
var sv = {
current: "nuvarande",
time: "tid",
deleteSelected: "Radera valda"
};
var sv_SE = sv;
var nb = {
current: "n\xE5v\xE6rende",
time: "tid",
deleteSelected: "Slett valgte"
};
var nb_NO = nb;
var nn = nb;
var nn_NO = nb;
var lt = {
current: "einamas",
time: "laikas",
deleteSelected: "Pa\u0161alinti pasirinkt\u0105"
};
var lt_LT = lt;
var locales = {
en,
en_EN,
en_US,
it,
it_IT,
it_CH,
nl,
nl_NL,
nl_BE,
de,
de_DE,
fr,
fr_FR,
fr_CA,
fr_BE,
es,
es_ES,
uk,
uk_UA,
ru,
ru_RU,
pl,
pl_PL,
pt,
pt_BR,
pt_PT,
ja,
ja_JP,
lt,
lt_LT,
sv,
sv_SE,
nb,
nn,
nb_NO,
nn_NO
};
var CustomTime = class extends Component {
/**
* @param {{range: Range, dom: Object}} body
* @param {Object} [options]        Available parameters:
*                                  {number | string} id
*                                  {string} locales
*                                  {string} locale
* @constructor CustomTime
* @extends Component
*/
constructor(body, options) {
super();
this.body = body;
this.defaultOptions = {
moment: moment$2,
locales,
locale: "en",
id: void 0,
title: void 0
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.setOptions(options);
this.options.locales = availableUtils.extend({}, locales, this.options.locales);
const defaultLocales = this.defaultOptions.locales[this.defaultOptions.locale];
Object.keys(this.options.locales).forEach((locale) => {
this.options.locales[locale] = availableUtils.extend(
{},
defaultLocales,
this.options.locales[locale]
);
});
if (options && options.time != null) {
this.customTime = options.time;
} else {
this.customTime = /* @__PURE__ */ new Date();
}
this.eventParams = {};
this._create();
}
/**
* Set options for the component. Options will be merged in current options.
* @param {Object} options  Available parameters:
*                                  {number | string} id
*                                  {string} locales
*                                  {string} locale
*/
setOptions(options) {
if (options) {
availableUtils.selectiveExtend(["moment", "locale", "locales", "id", "title", "rtl", "snap"], this.options, options);
}
}
/**
* Create the DOM for the custom time
* @private
*/
_create() {
const bar = document.createElement("div");
bar["custom-time"] = this;
bar.className = `vis-custom-time ${this.options.id || ""}`;
bar.style.position = "absolute";
bar.style.top = "0px";
bar.style.height = "100%";
this.bar = bar;
const drag = document.createElement("div");
drag.style.position = "relative";
drag.style.top = "0px";
if (this.options.rtl) {
drag.style.right = "-10px";
} else {
drag.style.left = "-10px";
}
drag.style.height = "100%";
drag.style.width = "20px";
function onMouseWheel(e) {
this.body.range._onMouseWheel(e);
}
if (drag.addEventListener) {
drag.addEventListener("mousewheel", onMouseWheel.bind(this), false);
drag.addEventListener("DOMMouseScroll", onMouseWheel.bind(this), false);
} else {
drag.attachEvent("onmousewheel", onMouseWheel.bind(this));
}
bar.appendChild(drag);
this.hammer = new Hammer3(drag);
this.hammer.on("panstart", this._onDragStart.bind(this));
this.hammer.on("panmove", this._onDrag.bind(this));
this.hammer.on("panend", this._onDragEnd.bind(this));
this.hammer.get("pan").set({ threshold: 5, direction: Hammer3.DIRECTION_ALL });
this.hammer.get("press").set({ time: 1e4 });
}
/**
* Destroy the CustomTime bar
*/
destroy() {
this.hide();
this.hammer.destroy();
this.hammer = null;
this.body = null;
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
const parent = this.body.dom.backgroundVertical;
if (this.bar.parentNode != parent) {
if (this.bar.parentNode) {
this.bar.parentNode.removeChild(this.bar);
}
parent.appendChild(this.bar);
}
const x = this.body.util.toScreen(this.customTime);
let locale = this.options.locales[this.options.locale];
if (!locale) {
if (!this.warned) {
console.warn(`WARNING: options.locales['${this.options.locale}'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization`);
this.warned = true;
}
locale = this.options.locales["en"];
}
let title = this.options.title;
if (title === void 0) {
title = `${locale.time}: ${this.options.moment(this.customTime).format("dddd, MMMM Do YYYY, H:mm:ss")}`;
title = title.charAt(0).toUpperCase() + title.substring(1);
} else if (typeof title === "function") {
title = title.call(this, this.customTime);
}
this.options.rtl ? this.bar.style.right = `${x}px` : this.bar.style.left = `${x}px`;
this.bar.title = title;
return false;
}
/**
* Remove the CustomTime from the DOM
*/
hide() {
if (this.bar.parentNode) {
this.bar.parentNode.removeChild(this.bar);
}
}
/**
* Set custom time.
* @param {Date | number | string} time
*/
setCustomTime(time) {
this.customTime = availableUtils.convert(time, "Date");
this.redraw();
}
/**
* Retrieve the current custom time.
* @return {Date} customTime
*/
getCustomTime() {
return new Date(this.customTime.valueOf());
}
/**
* Set custom marker.
* @param {string} [title] Title of the custom marker
* @param {boolean} [editable] Make the custom marker editable.
*/
setCustomMarker(title, editable) {
if (this.marker) {
this.bar.removeChild(this.marker);
}
this.marker = document.createElement("div");
this.marker.className = `vis-custom-time-marker`;
this.marker.innerHTML = availableUtils.xss(title);
this.marker.style.position = "absolute";
if (editable) {
this.marker.setAttribute("contenteditable", "true");
this.marker.addEventListener("pointerdown", () => {
this.marker.focus();
});
this.marker.addEventListener("input", this._onMarkerChange.bind(this));
this.marker.title = title;
this.marker.addEventListener("blur", (event2) => {
if (this.title != event2.target.innerHTML) {
this._onMarkerChanged(event2);
this.title = event2.target.innerHTML;
}
});
}
this.bar.appendChild(this.marker);
}
/**
* Set custom title.
* @param {Date | number | string} title
*/
setCustomTitle(title) {
this.options.title = title;
}
/**
* Start moving horizontally
* @param {Event} event
* @private
*/
_onDragStart(event2) {
this.eventParams.dragging = true;
this.eventParams.customTime = this.customTime;
event2.stopPropagation();
}
/**
* Perform moving operating.
* @param {Event} event
* @private
*/
_onDrag(event2) {
if (!this.eventParams.dragging) return;
let deltaX = this.options.rtl ? -1 * event2.deltaX : event2.deltaX;
const x = this.body.util.toScreen(this.eventParams.customTime) + deltaX;
const time = this.body.util.toTime(x);
const scale = this.body.util.getScale();
const step = this.body.util.getStep();
const snap = this.options.snap;
const snappedTime = snap ? snap(time, scale, step) : time;
this.setCustomTime(snappedTime);
this.body.emitter.emit("timechange", {
id: this.options.id,
time: new Date(this.customTime.valueOf()),
event: event2
});
event2.stopPropagation();
}
/**
* Stop moving operating.
* @param {Event} event
* @private
*/
_onDragEnd(event2) {
if (!this.eventParams.dragging) return;
this.body.emitter.emit("timechanged", {
id: this.options.id,
time: new Date(this.customTime.valueOf()),
event: event2
});
event2.stopPropagation();
}
/**
* Perform input operating.
* @param {Event} event
* @private
*/
_onMarkerChange(event2) {
this.body.emitter.emit("markerchange", {
id: this.options.id,
title: event2.target.innerHTML,
event: event2
});
event2.stopPropagation();
}
/**
* Perform change operating.
* @param {Event} event
* @private
*/
_onMarkerChanged(event2) {
this.body.emitter.emit("markerchanged", {
id: this.options.id,
title: event2.target.innerHTML,
event: event2
});
event2.stopPropagation();
}
/**
* Find a custom time from an event target:
* searches for the attribute 'custom-time' in the event target's element tree
* @param {Event} event
* @return {CustomTime | null} customTime
*/
static customTimeFromTarget(event2) {
let target = event2.target;
while (target) {
if (Object.prototype.hasOwnProperty.call(target, "custom-time")) {
return target["custom-time"];
}
target = target.parentNode;
}
return null;
}
};
var Core = class {
/**
* Create the main DOM for the Core: a root panel containing left, right,
* top, bottom, content, and background panel.
* @param {Element} container  The container element where the Core will
*                             be attached.
* @protected
*/
_create(container) {
this.dom = {};
this.dom.container = container;
this.dom.container.style.position = "relative";
this.dom.root = document.createElement("div");
this.dom.background = document.createElement("div");
this.dom.backgroundVertical = document.createElement("div");
this.dom.backgroundHorizontal = document.createElement("div");
this.dom.centerContainer = document.createElement("div");
this.dom.leftContainer = document.createElement("div");
this.dom.rightContainer = document.createElement("div");
this.dom.center = document.createElement("div");
this.dom.left = document.createElement("div");
this.dom.right = document.createElement("div");
this.dom.top = document.createElement("div");
this.dom.bottom = document.createElement("div");
this.dom.shadowTop = document.createElement("div");
this.dom.shadowBottom = document.createElement("div");
this.dom.shadowTopLeft = document.createElement("div");
this.dom.shadowBottomLeft = document.createElement("div");
this.dom.shadowTopRight = document.createElement("div");
this.dom.shadowBottomRight = document.createElement("div");
this.dom.rollingModeBtn = document.createElement("div");
this.dom.loadingScreen = document.createElement("div");
this.dom.root.className = "vis-timeline";
this.dom.background.className = "vis-panel vis-background";
this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical";
this.dom.backgroundHorizontal.className = "vis-panel vis-background vis-horizontal";
this.dom.centerContainer.className = "vis-panel vis-center";
this.dom.leftContainer.className = "vis-panel vis-left";
this.dom.rightContainer.className = "vis-panel vis-right";
this.dom.top.className = "vis-panel vis-top";
this.dom.bottom.className = "vis-panel vis-bottom";
this.dom.left.className = "vis-content";
this.dom.center.className = "vis-content";
this.dom.right.className = "vis-content";
this.dom.shadowTop.className = "vis-shadow vis-top";
this.dom.shadowBottom.className = "vis-shadow vis-bottom";
this.dom.shadowTopLeft.className = "vis-shadow vis-top";
this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom";
this.dom.shadowTopRight.className = "vis-shadow vis-top";
this.dom.shadowBottomRight.className = "vis-shadow vis-bottom";
this.dom.rollingModeBtn.className = "vis-rolling-mode-btn";
this.dom.loadingScreen.className = "vis-loading-screen";
this.dom.root.appendChild(this.dom.background);
this.dom.root.appendChild(this.dom.backgroundVertical);
this.dom.root.appendChild(this.dom.backgroundHorizontal);
this.dom.root.appendChild(this.dom.centerContainer);
this.dom.root.appendChild(this.dom.leftContainer);
this.dom.root.appendChild(this.dom.rightContainer);
this.dom.root.appendChild(this.dom.top);
this.dom.root.appendChild(this.dom.bottom);
this.dom.root.appendChild(this.dom.rollingModeBtn);
this.dom.centerContainer.appendChild(this.dom.center);
this.dom.leftContainer.appendChild(this.dom.left);
this.dom.rightContainer.appendChild(this.dom.right);
this.dom.centerContainer.appendChild(this.dom.shadowTop);
this.dom.centerContainer.appendChild(this.dom.shadowBottom);
this.dom.leftContainer.appendChild(this.dom.shadowTopLeft);
this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft);
this.dom.rightContainer.appendChild(this.dom.shadowTopRight);
this.dom.rightContainer.appendChild(this.dom.shadowBottomRight);
this.props = {
root: {},
background: {},
centerContainer: {},
leftContainer: {},
rightContainer: {},
center: {},
left: {},
right: {},
top: {},
bottom: {},
border: {},
scrollTop: 0,
scrollTopMin: 0
};
this.on("rangechange", () => {
if (this.initialDrawDone === true) {
this._redraw();
}
});
this.on("rangechanged", () => {
if (!this.initialRangeChangeDone) {
this.initialRangeChangeDone = true;
}
});
this.on("touch", this._onTouch.bind(this));
this.on("panmove", this._onDrag.bind(this));
const me = this;
this._origRedraw = this._redraw.bind(this);
this._redraw = availableUtils.throttle(this._origRedraw);
this.on("_change", (properties) => {
if (me.itemSet && me.itemSet.initialItemSetDrawn && properties && properties.queue == true) {
me._redraw();
} else {
me._origRedraw();
}
});
this.hammer = new Hammer3(this.dom.root);
const pinchRecognizer = this.hammer.get("pinch").set({ enable: true });
pinchRecognizer && disablePreventDefaultVertically(pinchRecognizer);
this.hammer.get("pan").set({ threshold: 5, direction: Hammer3.DIRECTION_ALL });
this.timelineListeners = {};
const events = [
"tap",
"doubletap",
"press",
"pinch",
"pan",
"panstart",
"panmove",
"panend"
];
events.forEach((type) => {
const listener = (event2) => {
if (me.isActive()) {
me.emit(type, event2);
}
};
me.hammer.on(type, listener);
me.timelineListeners[type] = listener;
});
onTouch(this.hammer, (event2) => {
me.emit("touch", event2);
});
onRelease(this.hammer, (event2) => {
me.emit("release", event2);
});
function onMouseWheel(event2) {
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
if (this.isActive()) {
this.emit("mousewheel", event2);
}
let deltaX = 0;
let deltaY = 0;
if ("detail" in event2) {
deltaY = event2.detail * -1;
}
if ("wheelDelta" in event2) {
deltaY = event2.wheelDelta;
}
if ("wheelDeltaY" in event2) {
deltaY = event2.wheelDeltaY;
}
if ("wheelDeltaX" in event2) {
deltaX = event2.wheelDeltaX * -1;
}
if ("axis" in event2 && event2.axis === event2.HORIZONTAL_AXIS) {
deltaX = deltaY * -1;
deltaY = 0;
}
if ("deltaY" in event2) {
deltaY = event2.deltaY * -1;
}
if ("deltaX" in event2) {
deltaX = event2.deltaX;
}
if (event2.deltaMode) {
if (event2.deltaMode === 1) {
deltaX *= LINE_HEIGHT;
deltaY *= LINE_HEIGHT;
} else {
deltaX *= LINE_HEIGHT;
deltaY *= PAGE_HEIGHT;
}
}
if (this.options.preferZoom) {
if (!this.options.zoomKey || event2[this.options.zoomKey]) return;
} else {
if (this.options.zoomKey && event2[this.options.zoomKey]) return;
}
if (!this.options.verticalScroll && !this.options.horizontalScroll) return;
if (this.options.verticalScroll && Math.abs(deltaY) >= Math.abs(deltaX)) {
const current = this.props.scrollTop;
const adjusted = current + deltaY;
if (this.isActive()) {
const newScrollTop = this._setScrollTop(adjusted);
if (newScrollTop !== current) {
this._redraw();
this.emit("scroll", event2);
event2.preventDefault();
}
}
} else if (this.options.horizontalScroll) {
const delta = Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY;
const diff = delta / 120 * (this.range.end - this.range.start) / 20;
const newStart = this.range.start + diff;
const newEnd = this.range.end + diff;
const options = {
animation: false,
byUser: true,
event: event2
};
this.range.setRange(newStart, newEnd, options);
event2.preventDefault();
}
}
const wheelType = "onwheel" in document.createElement("div") ? "wheel" : (
document.onmousewheel !== void 0 ? "mousewheel" : (
this.dom.centerContainer.addEventListener ? "DOMMouseScroll" : "onmousewheel"
)
);
this.dom.top.addEventListener ? "DOMMouseScroll" : "onmousewheel";
this.dom.bottom.addEventListener ? "DOMMouseScroll" : "onmousewheel";
this.dom.centerContainer.addEventListener(wheelType, onMouseWheel.bind(this), false);
this.dom.top.addEventListener(wheelType, onMouseWheel.bind(this), false);
this.dom.bottom.addEventListener(wheelType, onMouseWheel.bind(this), false);
function onMouseScrollSide(event2) {
if (!me.options.verticalScroll) return;
event2.preventDefault();
if (me.isActive()) {
const adjusted = -event2.target.scrollTop;
me._setScrollTop(adjusted);
me._redraw();
me.emit("scrollSide", event2);
}
}
this.dom.left.parentNode.addEventListener("scroll", onMouseScrollSide.bind(this));
this.dom.right.parentNode.addEventListener("scroll", onMouseScrollSide.bind(this));
let itemAddedToTimeline = false;
function handleDragOver(event2) {
if (event2.preventDefault) {
me.emit("dragover", me.getEventProperties(event2));
event2.preventDefault();
}
if (!(event2.target.className.indexOf("timeline") > -1)) return;
if (itemAddedToTimeline) return;
event2.dataTransfer.dropEffect = "move";
itemAddedToTimeline = true;
return false;
}
function handleDrop(event2) {
if (event2.preventDefault) {
event2.preventDefault();
}
if (event2.stopPropagation) {
event2.stopPropagation();
}
try {
var itemData = JSON.parse(event2.dataTransfer.getData("text"));
if (!itemData || !itemData.content) return;
} catch (err) {
return false;
}
itemAddedToTimeline = false;
event2.center = {
x: event2.clientX,
y: event2.clientY
};
if (itemData.target !== "item") {
me.itemSet._onAddItem(event2);
} else {
me.itemSet._onDropObjectOnItem(event2);
}
me.emit("drop", me.getEventProperties(event2));
return false;
}
this.dom.center.addEventListener("dragover", handleDragOver.bind(this), false);
this.dom.center.addEventListener("drop", handleDrop.bind(this), false);
this.customTimes = [];
this.touch = {};
this.redrawCount = 0;
this.initialDrawDone = false;
this.initialRangeChangeDone = false;
if (!container) throw new Error("No container provided");
container.appendChild(this.dom.root);
container.appendChild(this.dom.loadingScreen);
}
/**
* Set options. Options will be passed to all components loaded in the Timeline.
* @param {Object} [options]
*                           {String} orientation
*                              Vertical orientation for the Timeline,
*                              can be 'bottom' (default) or 'top'.
*                           {string | number} width
*                              Width for the timeline, a number in pixels or
*                              a css string like '1000px' or '75%'. '100%' by default.
*                           {string | number} height
*                              Fixed height for the Timeline, a number in pixels or
*                              a css string like '400px' or '75%'. If undefined,
*                              The Timeline will automatically size such that
*                              its contents fit.
*                           {string | number} minHeight
*                              Minimum height for the Timeline, a number in pixels or
*                              a css string like '400px' or '75%'.
*                           {string | number} maxHeight
*                              Maximum height for the Timeline, a number in pixels or
*                              a css string like '400px' or '75%'.
*                           {number | Date | string} start
*                              Start date for the visible window
*                           {number | Date | string} end
*                              End date for the visible window
*/
setOptions(options) {
if (options) {
const fields = [
"width",
"height",
"minHeight",
"maxHeight",
"autoResize",
"start",
"end",
"clickToUse",
"dataAttributes",
"hiddenDates",
"locale",
"locales",
"moment",
"preferZoom",
"rtl",
"zoomKey",
"horizontalScroll",
"verticalScroll",
"longSelectPressTime",
"snap"
];
availableUtils.selectiveExtend(fields, this.options, options);
this.dom.rollingModeBtn.style.visibility = "hidden";
if (this.options.rtl) {
this.dom.container.style.direction = "rtl";
this.dom.backgroundVertical.className = "vis-panel vis-background vis-vertical-rtl";
}
if (this.options.verticalScroll) {
if (this.options.rtl) {
this.dom.rightContainer.className = "vis-panel vis-right vis-vertical-scroll";
} else {
this.dom.leftContainer.className = "vis-panel vis-left vis-vertical-scroll";
}
}
if (typeof this.options.orientation !== "object") {
this.options.orientation = { item: void 0, axis: void 0 };
}
if ("orientation" in options) {
if (typeof options.orientation === "string") {
this.options.orientation = {
item: options.orientation,
axis: options.orientation
};
} else if (typeof options.orientation === "object") {
if ("item" in options.orientation) {
this.options.orientation.item = options.orientation.item;
}
if ("axis" in options.orientation) {
this.options.orientation.axis = options.orientation.axis;
}
}
}
if (this.options.orientation.axis === "both") {
if (!this.timeAxis2) {
const timeAxis2 = this.timeAxis2 = new TimeAxis(this.body, this.options);
timeAxis2.setOptions = (options2) => {
const _options = options2 ? availableUtils.extend({}, options2) : {};
_options.orientation = "top";
TimeAxis.prototype.setOptions.call(timeAxis2, _options);
};
this.components.push(timeAxis2);
}
} else {
if (this.timeAxis2) {
const index = this.components.indexOf(this.timeAxis2);
if (index !== -1) {
this.components.splice(index, 1);
}
this.timeAxis2.destroy();
this.timeAxis2 = null;
}
}
if (typeof options.drawPoints == "function") {
options.drawPoints = {
onRender: options.drawPoints
};
}
if ("hiddenDates" in this.options) {
convertHiddenOptions(this.options.moment, this.body, this.options.hiddenDates);
}
if ("clickToUse" in options) {
if (options.clickToUse) {
if (!this.activator) {
this.activator = new Activator2(this.dom.root);
}
} else {
if (this.activator) {
this.activator.destroy();
delete this.activator;
}
}
}
this._initAutoResize();
}
this.components.forEach((component) => component.setOptions(options));
if ("configure" in options) {
if (!this.configurator) {
this.configurator = this._createConfigurator();
}
this.configurator.setOptions(options.configure);
const appliedOptions = availableUtils.deepExtend({}, this.options);
this.components.forEach((component) => {
availableUtils.deepExtend(appliedOptions, component.options);
});
this.configurator.setModuleOptions({ global: appliedOptions });
}
this._redraw();
}
/**
* Returns true when the Timeline is active.
* @returns {boolean}
*/
isActive() {
return !this.activator || this.activator.active;
}
/**
* Destroy the Core, clean up all DOM elements and event listeners.
*/
destroy() {
this.setItems(null);
this.setGroups(null);
this.off();
this._stopAutoResize();
if (this.dom.root.parentNode) {
this.dom.root.parentNode.removeChild(this.dom.root);
}
this.dom = null;
if (this.activator) {
this.activator.destroy();
delete this.activator;
}
for (const event2 in this.timelineListeners) {
if (Object.prototype.hasOwnProperty.call(this.timelineListeners, event2)) {
delete this.timelineListeners[event2];
}
}
this.timelineListeners = null;
this.hammer && this.hammer.destroy();
this.hammer = null;
this.components.forEach((component) => component.destroy());
this.body = null;
}
/**
* Set a custom time bar
* @param {Date} time
* @param {number} [id=undefined] Optional id of the custom time bar to be adjusted.
*/
setCustomTime(time, id) {
const customTimes = this.customTimes.filter((component) => id === component.options.id);
if (customTimes.length === 0) {
throw new Error(`No custom time bar found with id ${JSON.stringify(id)}`);
}
if (customTimes.length > 0) {
customTimes[0].setCustomTime(time);
}
}
/**
* Retrieve the current custom time.
* @param {number} [id=undefined]    Id of the custom time bar.
* @return {Date | undefined} customTime
*/
getCustomTime(id) {
const customTimes = this.customTimes.filter((component) => component.options.id === id);
if (customTimes.length === 0) {
throw new Error(`No custom time bar found with id ${JSON.stringify(id)}`);
}
return customTimes[0].getCustomTime();
}
/**
* Set a custom marker for the custom time bar.
* @param {string} [title] Title of the custom marker.
* @param {number} [id=undefined] Id of the custom marker.
* @param {boolean} [editable=false] Make the custom marker editable.
*/
setCustomTimeMarker(title, id, editable) {
const customTimes = this.customTimes.filter((component) => component.options.id === id);
if (customTimes.length === 0) {
throw new Error(`No custom time bar found with id ${JSON.stringify(id)}`);
}
if (customTimes.length > 0) {
customTimes[0].setCustomMarker(title, editable);
}
}
/**
* Set a custom title for the custom time bar.
* @param {string} [title] Custom title
* @param {number} [id=undefined]    Id of the custom time bar.
* @returns {*}
*/
setCustomTimeTitle(title, id) {
const customTimes = this.customTimes.filter((component) => component.options.id === id);
if (customTimes.length === 0) {
throw new Error(`No custom time bar found with id ${JSON.stringify(id)}`);
}
if (customTimes.length > 0) {
return customTimes[0].setCustomTitle(title);
}
}
/**
* Retrieve meta information from an event.
* Should be overridden by classes extending Core
* @param {Event} event
* @return {Object} An object with related information.
*/
getEventProperties(event2) {
return { event: event2 };
}
/**
* Add custom vertical bar
* @param {Date | string | number} [time]  A Date, unix timestamp, or
*                                         ISO date string. Time point where
*                                         the new bar should be placed.
*                                         If not provided, `new Date()` will
*                                         be used.
* @param {number | string} [id=undefined] Id of the new bar. Optional
* @return {number | string}               Returns the id of the new bar
*/
addCustomTime(time, id) {
const timestamp = time !== void 0 ? availableUtils.convert(time, "Date") : /* @__PURE__ */ new Date();
const exists = this.customTimes.some((customTime2) => customTime2.options.id === id);
if (exists) {
throw new Error(`A custom time with id ${JSON.stringify(id)} already exists`);
}
const customTime = new CustomTime(this.body, availableUtils.extend({}, this.options, {
time: timestamp,
id,
snap: this.itemSet ? this.itemSet.options.snap : this.options.snap
}));
this.customTimes.push(customTime);
this.components.push(customTime);
this._redraw();
return id;
}
/**
* Remove previously added custom bar
* @param {int} id ID of the custom bar to be removed
* [at]returns {boolean} True if the bar exists and is removed, false otherwise
*/
removeCustomTime(id) {
const customTimes = this.customTimes.filter((bar) => bar.options.id === id);
if (customTimes.length === 0) {
throw new Error(`No custom time bar found with id ${JSON.stringify(id)}`);
}
customTimes.forEach((customTime) => {
this.customTimes.splice(this.customTimes.indexOf(customTime), 1);
this.components.splice(this.components.indexOf(customTime), 1);
customTime.destroy();
});
}
/**
* Get the id's of the currently visible items.
* @returns {Array} The ids of the visible items
*/
getVisibleItems() {
return this.itemSet && this.itemSet.getVisibleItems() || [];
}
/**
* Get the id's of the items at specific time, where a click takes place on the timeline.
* @param {Date} timeOfEvent The point in time to query items.
* @returns {Array} The ids of all items in existence at the time of event.
*/
getItemsAtCurrentTime(timeOfEvent) {
this.time = timeOfEvent;
return this.itemSet && this.itemSet.getItemsAtCurrentTime(this.time) || [];
}
/**
* Get the id's of the currently visible groups.
* @returns {Array} The ids of the visible groups
*/
getVisibleGroups() {
return this.itemSet && this.itemSet.getVisibleGroups() || [];
}
/**
* Set Core window such that it fits all items
* @param {Object} [options]  Available options:
*                                `animation: boolean | {duration: number, easingFunction: string}`
*                                    If true (default), the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
* @param {function} [callback] a callback funtion to be executed at the end of this function
*/
fit(options, callback) {
const range = this.getDataRange();
if (range.min === null && range.max === null) {
return;
}
const interval = range.max - range.min;
const min = new Date(range.min.valueOf() - interval * 0.01);
const max = new Date(range.max.valueOf() + interval * 0.01);
const animation = options && options.animation !== void 0 ? options.animation : true;
this.range.setRange(min, max, { animation }, callback);
}
/**
* Calculate the data range of the items start and end dates
* [at]returns {{min: [Date], max: [Date]}}
* @protected
*/
getDataRange() {
throw new Error("Cannot invoke abstract method getDataRange");
}
/**
* Set the visible window. Both parameters are optional, you can change only
* start or only end. Syntax:
*
*     TimeLine.setWindow(start, end)
*     TimeLine.setWindow(start, end, options)
*     TimeLine.setWindow(range)
*
* Where start and end can be a Date, number, or string, and range is an
* object with properties start and end.
*
* @param {Date | number | string | Object} [start] Start date of visible window
* @param {Date | number | string} [end]            End date of visible window
* @param {Object} [options]  Available options:
*                                `animation: boolean | {duration: number, easingFunction: string}`
*                                    If true (default), the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
* @param {function} [callback] a callback funtion to be executed at the end of this function
*/
setWindow(start, end, options, callback) {
if (typeof arguments[2] == "function") {
callback = arguments[2];
options = {};
}
let animation;
let range;
if (arguments.length == 1) {
range = arguments[0];
animation = range.animation !== void 0 ? range.animation : true;
this.range.setRange(range.start, range.end, { animation });
} else if (arguments.length == 2 && typeof arguments[1] == "function") {
range = arguments[0];
callback = arguments[1];
animation = range.animation !== void 0 ? range.animation : true;
this.range.setRange(range.start, range.end, { animation }, callback);
} else {
animation = options && options.animation !== void 0 ? options.animation : true;
this.range.setRange(start, end, { animation }, callback);
}
}
/**
* Move the window such that given time is centered on screen.
* @param {Date | number | string} time
* @param {Object} [options]  Available options:
*                                `animation: boolean | {duration: number, easingFunction: string}`
*                                    If true (default), the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
* @param {function} [callback] a callback funtion to be executed at the end of this function
*/
moveTo(time, options, callback) {
if (typeof arguments[1] == "function") {
callback = arguments[1];
options = {};
}
const interval = this.range.end - this.range.start;
const t = availableUtils.convert(time, "Date").valueOf();
const start = t - interval / 2;
const end = t + interval / 2;
const animation = options && options.animation !== void 0 ? options.animation : true;
this.range.setRange(start, end, { animation }, callback);
}
/**
* Get the visible window
* @return {{start: Date, end: Date}}   Visible range
*/
getWindow() {
const range = this.range.getRange();
return {
start: new Date(range.start),
end: new Date(range.end)
};
}
/**
* Zoom in the window such that given time is centered on screen.
* @param {number} percentage - must be between [0..1]
* @param {Object} [options]  Available options:
*                                `animation: boolean | {duration: number, easingFunction: string}`
*                                    If true (default), the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
* @param {function} [callback] a callback funtion to be executed at the end of this function
*/
zoomIn(percentage, options, callback) {
if (!percentage || percentage < 0 || percentage > 1) return;
if (typeof arguments[1] == "function") {
callback = arguments[1];
options = {};
}
const range = this.getWindow();
const start = range.start.valueOf();
const end = range.end.valueOf();
const interval = end - start;
const newInterval = interval / (1 + percentage);
const distance = (interval - newInterval) / 2;
const newStart = start + distance;
const newEnd = end - distance;
this.setWindow(newStart, newEnd, options, callback);
}
/**
* Zoom out the window such that given time is centered on screen.
* @param {number} percentage - must be between [0..1]
* @param {Object} [options]  Available options:
*                                `animation: boolean | {duration: number, easingFunction: string}`
*                                    If true (default), the range is animated
*                                    smoothly to the new window. An object can be
*                                    provided to specify duration and easing function.
*                                    Default duration is 500 ms, and default easing
*                                    function is 'easeInOutQuad'.
* @param {function} [callback] a callback funtion to be executed at the end of this function
*/
zoomOut(percentage, options, callback) {
if (!percentage || percentage < 0 || percentage > 1) return;
if (typeof arguments[1] == "function") {
callback = arguments[1];
options = {};
}
const range = this.getWindow();
const start = range.start.valueOf();
const end = range.end.valueOf();
const interval = end - start;
const newStart = start - interval * percentage / 2;
const newEnd = end + interval * percentage / 2;
this.setWindow(newStart, newEnd, options, callback);
}
/**
* Force a redraw. Can be overridden by implementations of Core
*
* Note: this function will be overridden on construction with a trottled version
*/
redraw() {
this._redraw();
}
/**
* Redraw for internal use. Redraws all components. See also the public
* method redraw.
* @protected
*/
_redraw() {
this.redrawCount++;
const dom2 = this.dom;
if (!dom2 || !dom2.container || dom2.root.offsetWidth == 0) return;
let resized = false;
const options = this.options;
const props = this.props;
updateHiddenDates(this.options.moment, this.body, this.options.hiddenDates);
if (options.orientation == "top") {
availableUtils.addClassName(dom2.root, "vis-top");
availableUtils.removeClassName(dom2.root, "vis-bottom");
} else {
availableUtils.removeClassName(dom2.root, "vis-top");
availableUtils.addClassName(dom2.root, "vis-bottom");
}
if (options.rtl) {
availableUtils.addClassName(dom2.root, "vis-rtl");
availableUtils.removeClassName(dom2.root, "vis-ltr");
} else {
availableUtils.addClassName(dom2.root, "vis-ltr");
availableUtils.removeClassName(dom2.root, "vis-rtl");
}
dom2.root.style.maxHeight = availableUtils.option.asSize(options.maxHeight, "");
dom2.root.style.minHeight = availableUtils.option.asSize(options.minHeight, "");
dom2.root.style.width = availableUtils.option.asSize(options.width, "");
const rootOffsetWidth = dom2.root.offsetWidth;
props.border.left = 1;
props.border.right = 1;
props.border.top = 1;
props.border.bottom = 1;
props.center.height = dom2.center.offsetHeight;
props.left.height = dom2.left.offsetHeight;
props.right.height = dom2.right.offsetHeight;
props.top.height = dom2.top.clientHeight || -props.border.top;
props.bottom.height = Math.round(dom2.bottom.getBoundingClientRect().height) || dom2.bottom.clientHeight || -props.border.bottom;
const contentHeight = Math.max(props.left.height, props.center.height, props.right.height);
const autoHeight = props.top.height + contentHeight + props.bottom.height + props.border.top + props.border.bottom;
dom2.root.style.height = availableUtils.option.asSize(options.height, `${autoHeight}px`);
props.root.height = dom2.root.offsetHeight;
props.background.height = props.root.height;
const containerHeight = props.root.height - props.top.height - props.bottom.height;
props.centerContainer.height = containerHeight;
props.leftContainer.height = containerHeight;
props.rightContainer.height = props.leftContainer.height;
props.root.width = rootOffsetWidth;
props.background.width = props.root.width;
if (!this.initialDrawDone) {
props.scrollbarWidth = availableUtils.getScrollBarWidth();
}
const leftContainerClientWidth = dom2.leftContainer.clientWidth;
const rightContainerClientWidth = dom2.rightContainer.clientWidth;
if (options.verticalScroll) {
if (options.rtl) {
props.left.width = leftContainerClientWidth || -props.border.left;
props.right.width = rightContainerClientWidth + props.scrollbarWidth || -props.border.right;
} else {
props.left.width = leftContainerClientWidth + props.scrollbarWidth || -props.border.left;
props.right.width = rightContainerClientWidth || -props.border.right;
}
} else {
props.left.width = leftContainerClientWidth || -props.border.left;
props.right.width = rightContainerClientWidth || -props.border.right;
}
this._setDOM();
let offset = this._updateScrollTop();
if (options.orientation.item != "top") {
offset += Math.max(props.centerContainer.height - props.center.height - props.border.top - props.border.bottom, 0);
}
dom2.center.style.transform = `translateY(${offset}px)`;
const visibilityTop = props.scrollTop == 0 ? "hidden" : "";
const visibilityBottom = props.scrollTop == props.scrollTopMin ? "hidden" : "";
dom2.shadowTop.style.visibility = visibilityTop;
dom2.shadowBottom.style.visibility = visibilityBottom;
dom2.shadowTopLeft.style.visibility = visibilityTop;
dom2.shadowBottomLeft.style.visibility = visibilityBottom;
dom2.shadowTopRight.style.visibility = visibilityTop;
dom2.shadowBottomRight.style.visibility = visibilityBottom;
if (options.verticalScroll) {
dom2.rightContainer.className = "vis-panel vis-right vis-vertical-scroll";
dom2.leftContainer.className = "vis-panel vis-left vis-vertical-scroll";
dom2.shadowTopRight.style.visibility = "hidden";
dom2.shadowBottomRight.style.visibility = "hidden";
dom2.shadowTopLeft.style.visibility = "hidden";
dom2.shadowBottomLeft.style.visibility = "hidden";
dom2.left.style.top = "0px";
dom2.right.style.top = "0px";
}
if (!options.verticalScroll || props.center.height < props.centerContainer.height) {
dom2.left.style.top = `${offset}px`;
dom2.right.style.top = `${offset}px`;
dom2.rightContainer.className = dom2.rightContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " ");
dom2.leftContainer.className = dom2.leftContainer.className.replace(new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"), " ");
props.left.width = leftContainerClientWidth || -props.border.left;
props.right.width = rightContainerClientWidth || -props.border.right;
this._setDOM();
}
const contentsOverflow = props.center.height > props.centerContainer.height;
this.hammer.get("pan").set({
direction: contentsOverflow ? Hammer3.DIRECTION_ALL : Hammer3.DIRECTION_HORIZONTAL
});
this.hammer.get("press").set({
time: this.options.longSelectPressTime
});
this.components.forEach((component) => {
resized = component.redraw() || resized;
});
const MAX_REDRAW = 5;
if (resized) {
if (this.redrawCount < MAX_REDRAW) {
this.body.emitter.emit("_change");
return;
} else {
console.log("WARNING: infinite loop in redraw?");
}
} else {
this.redrawCount = 0;
}
this.body.emitter.emit("changed");
}
/**
* sets the basic DOM components needed for the timeline\graph2d
*/
_setDOM() {
const props = this.props;
const dom2 = this.dom;
props.leftContainer.width = props.left.width;
props.rightContainer.width = props.right.width;
const centerWidth = props.root.width - props.left.width - props.right.width;
props.center.width = centerWidth;
props.centerContainer.width = centerWidth;
props.top.width = centerWidth;
props.bottom.width = centerWidth;
dom2.background.style.height = `${props.background.height}px`;
dom2.backgroundVertical.style.height = `${props.background.height}px`;
dom2.backgroundHorizontal.style.height = `${props.centerContainer.height}px`;
dom2.centerContainer.style.height = `${props.centerContainer.height}px`;
dom2.leftContainer.style.height = `${props.leftContainer.height}px`;
dom2.rightContainer.style.height = `${props.rightContainer.height}px`;
dom2.background.style.width = `${props.background.width}px`;
dom2.backgroundVertical.style.width = `${props.centerContainer.width}px`;
dom2.backgroundHorizontal.style.width = `${props.background.width}px`;
dom2.centerContainer.style.width = `${props.center.width}px`;
dom2.top.style.width = `${props.top.width}px`;
dom2.bottom.style.width = `${props.bottom.width}px`;
dom2.background.style.left = "0";
dom2.background.style.top = "0";
dom2.backgroundVertical.style.left = `${props.left.width + props.border.left}px`;
dom2.backgroundVertical.style.top = "0";
dom2.backgroundHorizontal.style.left = "0";
dom2.backgroundHorizontal.style.top = `${props.top.height}px`;
dom2.centerContainer.style.left = `${props.left.width}px`;
dom2.centerContainer.style.top = `${props.top.height}px`;
dom2.leftContainer.style.left = "0";
dom2.leftContainer.style.top = `${props.top.height}px`;
dom2.rightContainer.style.left = `${props.left.width + props.center.width}px`;
dom2.rightContainer.style.top = `${props.top.height}px`;
dom2.top.style.left = `${props.left.width}px`;
dom2.top.style.top = "0";
dom2.bottom.style.left = `${props.left.width}px`;
dom2.bottom.style.top = `${props.top.height + props.centerContainer.height}px`;
dom2.center.style.left = "0";
dom2.left.style.left = "0";
dom2.right.style.left = "0";
}
/**
* Set a current time. This can be used for example to ensure that a client's
* time is synchronized with a shared server time.
* Only applicable when option `showCurrentTime` is true.
* @param {Date | string | number} time     A Date, unix timestamp, or
*                                          ISO date string.
*/
setCurrentTime(time) {
if (!this.currentTime) {
throw new Error("Option showCurrentTime must be true");
}
this.currentTime.setCurrentTime(time);
}
/**
* Get the current time.
* Only applicable when option `showCurrentTime` is true.
* @return {Date} Returns the current time.
*/
getCurrentTime() {
if (!this.currentTime) {
throw new Error("Option showCurrentTime must be true");
}
return this.currentTime.getCurrentTime();
}
/**
* Convert a position on screen (pixels) to a datetime
* @param {int}     x    Position on the screen in pixels
* @return {Date}   time The datetime the corresponds with given position x
* @protected
* TODO: move this function to Range
*/
_toTime(x) {
return toTime(this, x, this.props.center.width);
}
/**
* Convert a position on the global screen (pixels) to a datetime
* @param {int}     x    Position on the screen in pixels
* @return {Date}   time The datetime the corresponds with given position x
* @protected
* TODO: move this function to Range
*/
_toGlobalTime(x) {
return toTime(this, x, this.props.root.width);
}
/**
* Convert a datetime (Date object) into a position on the screen
* @param {Date}   time A date
* @return {int}   x    The position on the screen in pixels which corresponds
*                      with the given date.
* @protected
* TODO: move this function to Range
*/
_toScreen(time) {
return toScreen(this, time, this.props.center.width);
}
/**
* Convert a datetime (Date object) into a position on the root
* This is used to get the pixel density estimate for the screen, not the center panel
* @param {Date}   time A date
* @return {int}   x    The position on root in pixels which corresponds
*                      with the given date.
* @protected
* TODO: move this function to Range
*/
_toGlobalScreen(time) {
return toScreen(this, time, this.props.root.width);
}
/**
* Initialize watching when option autoResize is true
* @private
*/
_initAutoResize() {
if (this.options.autoResize == true) {
this._startAutoResize();
} else {
this._stopAutoResize();
}
}
/**
* Watch for changes in the size of the container. On resize, the Panel will
* automatically redraw itself.
* @private
*/
_startAutoResize() {
const me = this;
this._stopAutoResize();
this._onResize = () => {
if (me.options.autoResize != true) {
me._stopAutoResize();
return;
}
if (me.dom.root) {
const rootOffsetHeight = me.dom.root.offsetHeight;
const rootOffsetWidth = me.dom.root.offsetWidth;
if (rootOffsetWidth != me.props.lastWidth || rootOffsetHeight != me.props.lastHeight) {
me.props.lastWidth = rootOffsetWidth;
me.props.lastHeight = rootOffsetHeight;
me.props.scrollbarWidth = availableUtils.getScrollBarWidth();
me.body.emitter.emit("_change");
}
}
};
window.addEventListener("resize", this._onResize);
if (me.dom.root) {
me.props.lastWidth = me.dom.root.offsetWidth;
me.props.lastHeight = me.dom.root.offsetHeight;
}
this.watchTimer = setInterval(this._onResize, 1e3);
}
/**
* Stop watching for a resize of the frame.
* @private
*/
_stopAutoResize() {
if (this.watchTimer) {
clearInterval(this.watchTimer);
this.watchTimer = void 0;
}
if (this._onResize) {
window.removeEventListener("resize", this._onResize);
this._onResize = null;
}
}
/**
* Start moving the timeline vertically
* @param {Event} event
* @private
*/
_onTouch(event2) {
this.touch.allowDragging = true;
this.touch.initialScrollTop = this.props.scrollTop;
}
/**
* Start moving the timeline vertically
* @param {Event} event
* @private
*/
_onPinch(event2) {
this.touch.allowDragging = false;
}
/**
* Move the timeline vertically
* @param {Event} event
* @private
*/
_onDrag(event2) {
if (!event2) return;
if (!this.touch.allowDragging) return;
const delta = event2.deltaY;
const oldScrollTop = this._getScrollTop();
const newScrollTop = this._setScrollTop(this.touch.initialScrollTop + delta);
if (this.options.verticalScroll) {
this.dom.left.parentNode.scrollTop = -this.props.scrollTop;
this.dom.right.parentNode.scrollTop = -this.props.scrollTop;
}
if (newScrollTop != oldScrollTop) {
this.emit("verticalDrag");
}
}
/**
* Apply a scrollTop
* @param {number} scrollTop
* @returns {number} scrollTop  Returns the applied scrollTop
* @private
*/
_setScrollTop(scrollTop) {
this.props.scrollTop = scrollTop;
this._updateScrollTop();
return this.props.scrollTop;
}
/**
* Update the current scrollTop when the height of  the containers has been changed
* @returns {number} scrollTop  Returns the applied scrollTop
* @private
*/
_updateScrollTop() {
const scrollTopMin = Math.min(this.props.centerContainer.height - this.props.border.top - this.props.border.bottom - this.props.center.height, 0);
if (scrollTopMin != this.props.scrollTopMin) {
if (this.options.orientation.item != "top") {
this.props.scrollTop += scrollTopMin - this.props.scrollTopMin;
}
this.props.scrollTopMin = scrollTopMin;
}
if (this.props.scrollTop > 0) this.props.scrollTop = 0;
if (this.props.scrollTop < scrollTopMin) this.props.scrollTop = scrollTopMin;
if (this.options.verticalScroll) {
this.dom.left.parentNode.scrollTop = -this.props.scrollTop;
this.dom.right.parentNode.scrollTop = -this.props.scrollTop;
}
return this.props.scrollTop;
}
/**
* Get the current scrollTop
* @returns {number} scrollTop
* @private
*/
_getScrollTop() {
return this.props.scrollTop;
}
/**
* Load a configurator
* [at]returns {Object}
* @private
*/
_createConfigurator() {
throw new Error("Cannot invoke abstract method _createConfigurator");
}
};
(0, import_component_emitter2.default)(Core.prototype);
var CurrentTime = class extends Component {
/**
* @param {{range: Range, dom: Object, domProps: Object}} body
* @param {Object} [options]        Available parameters:
*                                  {Boolean} [showCurrentTime]
*                                  {String}  [alignCurrentTime]
* @constructor CurrentTime
* @extends Component
*/
constructor(body, options) {
super();
this.body = body;
this.defaultOptions = {
rtl: false,
showCurrentTime: true,
alignCurrentTime: void 0,
moment: moment$2,
locales,
locale: "en"
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.setOptions(options);
this.options.locales = availableUtils.extend({}, locales, this.options.locales);
const defaultLocales = this.defaultOptions.locales[this.defaultOptions.locale];
Object.keys(this.options.locales).forEach((locale) => {
this.options.locales[locale] = availableUtils.extend(
{},
defaultLocales,
this.options.locales[locale]
);
});
this.offset = 0;
this._create();
}
/**
* Create the HTML DOM for the current time bar
* @private
*/
_create() {
const bar = document.createElement("div");
bar.className = "vis-current-time";
bar.style.position = "absolute";
bar.style.top = "0px";
bar.style.height = "100%";
this.bar = bar;
}
/**
* Destroy the CurrentTime bar
*/
destroy() {
this.options.showCurrentTime = false;
this.redraw();
this.body = null;
}
/**
* Set options for the component. Options will be merged in current options.
* @param {Object} options  Available parameters:
*                          {boolean} [showCurrentTime]
*                          {String}  [alignCurrentTime]
*/
setOptions(options) {
if (options) {
availableUtils.selectiveExtend(["rtl", "showCurrentTime", "alignCurrentTime", "moment", "locale", "locales"], this.options, options);
}
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
if (this.options.showCurrentTime) {
const parent = this.body.dom.backgroundVertical;
if (this.bar.parentNode != parent) {
if (this.bar.parentNode) {
this.bar.parentNode.removeChild(this.bar);
}
parent.appendChild(this.bar);
this.start();
}
let now2 = this.options.moment(Date.now() + this.offset);
if (this.options.alignCurrentTime) {
now2 = now2.startOf(this.options.alignCurrentTime);
}
const x = this.body.util.toScreen(now2);
let locale = this.options.locales[this.options.locale];
if (!locale) {
if (!this.warned) {
console.warn(`WARNING: options.locales['${this.options.locale}'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization`);
this.warned = true;
}
locale = this.options.locales["en"];
}
let title = `${locale.current} ${locale.time}: ${now2.format("dddd, MMMM Do YYYY, H:mm:ss")}`;
title = title.charAt(0).toUpperCase() + title.substring(1);
if (this.options.rtl) {
this.bar.style.transform = `translateX(${x * -1}px)`;
} else {
this.bar.style.transform = `translateX(${x}px)`;
}
this.bar.title = title;
} else {
if (this.bar.parentNode) {
this.bar.parentNode.removeChild(this.bar);
}
this.stop();
}
return false;
}
/**
* Start auto refreshing the current time bar
*/
start() {
const me = this;
function update() {
me.stop();
const scale = me.body.range.conversion(me.body.domProps.center.width).scale;
let interval = 1 / scale / 10;
if (interval < 30) interval = 30;
if (interval > 1e3) interval = 1e3;
me.redraw();
me.body.emitter.emit("currentTimeTick");
me.currentTimeTimer = setTimeout(update, interval);
}
update();
}
/**
* Stop auto refreshing the current time bar
*/
stop() {
if (this.currentTimeTimer !== void 0) {
clearTimeout(this.currentTimeTimer);
delete this.currentTimeTimer;
}
}
/**
* Set a current time. This can be used for example to ensure that a client's
* time is synchronized with a shared server time.
* @param {Date | string | number} time     A Date, unix timestamp, or
*                                          ISO date string.
*/
setCurrentTime(time) {
const t = availableUtils.convert(time, "Date").valueOf();
const now2 = Date.now();
this.offset = t - now2;
this.redraw();
}
/**
* Get the current time.
* @return {Date} Returns the current time.
*/
getCurrentTime() {
return new Date(Date.now() + this.offset);
}
};
var EPSILON = 1e-3;
function orderByStart(items) {
items.sort((a, b) => a.data.start - b.data.start);
}
function orderByEnd(items) {
items.sort((a, b) => {
const aTime = "end" in a.data ? a.data.end : a.data.start;
const bTime = "end" in b.data ? b.data.end : b.data.start;
return aTime - bTime;
});
}
function stack(items, margin, force, shouldBailItemsRedrawFunction) {
const stackingResult = performStacking(
items,
margin.item,
false,
(item) => item.stack && (force || item.top === null),
(item) => item.stack,
() => margin.axis,
shouldBailItemsRedrawFunction
);
return stackingResult === null;
}
function substack(items, margin, subgroup2) {
const subgroupHeight = performStacking(
items,
margin.item,
false,
(item) => item.stack,
() => true,
(item) => item.baseTop
);
subgroup2.height = subgroupHeight - subgroup2.top + 0.5 * margin.item.vertical;
}
function nostack(items, margin, subgroups, isStackSubgroups) {
for (let i = 0; i < items.length; i++) {
if (items[i].data.subgroup == void 0) {
items[i].top = margin.item.vertical;
continue;
}
if (items[i].data.subgroup === void 0 || !isStackSubgroups)
continue;
let newTop = 0;
for (const subgroup2 in subgroups) {
if (!Object.prototype.hasOwnProperty.call(subgroups, subgroup2) || subgroups[subgroup2].visible !== true || subgroups[subgroup2].index >= subgroups[items[i].data.subgroup].index)
continue;
newTop += subgroups[subgroup2].height;
subgroups[items[i].data.subgroup].top = newTop;
}
items[i].top = newTop + 0.5 * margin.item.vertical;
}
if (!isStackSubgroups)
stackSubgroups(items, margin, subgroups);
}
function stackSubgroups(items, margin, subgroups) {
performStacking(
Object.values(subgroups).sort((a, b) => {
if (a.index > b.index) return 1;
if (a.index < b.index) return -1;
return 0;
}),
{
vertical: 0
},
true,
() => true,
() => true,
() => 0
);
for (let i = 0; i < items.length; i++) {
if (items[i].data.subgroup !== void 0) {
items[i].top = subgroups[items[i].data.subgroup].top + 0.5 * margin.item.vertical;
}
}
}
function stackSubgroupsWithInnerStack(subgroupItems, margin, subgroups) {
let doSubStack = false;
const subgroupOrder = [];
for (let subgroup2 in subgroups) {
if (Object.prototype.hasOwnProperty.call(subgroups[subgroup2], "index")) {
subgroupOrder[subgroups[subgroup2].index] = subgroup2;
} else {
subgroupOrder.push(subgroup2);
}
}
for (let j = 0; j < subgroupOrder.length; j++) {
subgroup = subgroupOrder[j];
if (!Object.prototype.hasOwnProperty.call(subgroups, subgroup))
continue;
doSubStack = doSubStack || subgroups[subgroup].stack;
subgroups[subgroup].top = 0;
for (const otherSubgroup in subgroups) {
if (subgroups[otherSubgroup].visible && subgroups[subgroup].index > subgroups[otherSubgroup].index) {
subgroups[subgroup].top += subgroups[otherSubgroup].height;
}
}
const items = subgroupItems[subgroup];
for (let i = 0; i < items.length; i++) {
if (items[i].data.subgroup === void 0)
continue;
items[i].top = subgroups[items[i].data.subgroup].top + 0.5 * margin.item.vertical;
if (subgroups[subgroup].stack)
items[i].baseTop = items[i].top;
}
if (doSubStack && subgroups[subgroup].stack)
substack(subgroupItems[subgroup], margin, subgroups[subgroup]);
}
}
function performStacking(items, margins, compareTimes, shouldStack, shouldOthersStack, getInitialHeight, shouldBail) {
let getItemStart = (item) => item.start;
let getItemEnd = (item) => item.end;
if (!compareTimes) {
const rtl = !!(items[0] && items[0].options.rtl);
if (rtl) {
getItemStart = (item) => item.right;
} else {
getItemStart = (item) => item.left;
}
getItemEnd = (item) => getItemStart(item) + item.width + margins.horizontal;
}
const itemsToPosition = [];
const itemsAlreadyPositioned = [];
let previousStart = null;
let insertionIndex = 0;
for (const item of items) {
if (shouldStack(item)) {
itemsToPosition.push(item);
} else {
if (shouldOthersStack(item)) {
const itemStart = getItemStart(item);
if (previousStart !== null && itemStart < previousStart - EPSILON) {
insertionIndex = 0;
}
previousStart = itemStart;
insertionIndex = findIndexFrom(itemsAlreadyPositioned, (i) => getItemStart(i) - EPSILON > itemStart, insertionIndex);
itemsAlreadyPositioned.splice(insertionIndex, 0, item);
insertionIndex++;
}
}
}
previousStart = null;
let previousEnd = null;
insertionIndex = 0;
let horizontalOverlapStartIndex = 0;
let horizontalOverlapEndIndex = 0;
let maxHeight = 0;
while (itemsToPosition.length > 0) {
const item = itemsToPosition.shift();
item.top = getInitialHeight(item);
const itemStart = getItemStart(item);
const itemEnd = getItemEnd(item);
if (previousStart !== null && itemStart < previousStart - EPSILON) {
horizontalOverlapStartIndex = 0;
horizontalOverlapEndIndex = 0;
insertionIndex = 0;
previousEnd = null;
}
if (previousStart === null || itemStart > previousStart + EPSILON) {
horizontalOverlapStartIndex = findIndexFrom(itemsAlreadyPositioned, (i) => itemStart < getItemEnd(i) - EPSILON, horizontalOverlapStartIndex);
}
previousStart = itemStart;
if (previousEnd === null || previousEnd < itemEnd - EPSILON) {
horizontalOverlapEndIndex = findIndexFrom(itemsAlreadyPositioned, (i) => itemEnd < getItemStart(i) - EPSILON, Math.max(horizontalOverlapStartIndex, horizontalOverlapEndIndex));
}
if (previousEnd !== null && previousEnd - EPSILON > itemEnd) {
horizontalOverlapEndIndex = findLastIndexBetween(itemsAlreadyPositioned, (i) => itemEnd + EPSILON >= getItemStart(i), horizontalOverlapStartIndex, horizontalOverlapEndIndex) + 1;
}
previousEnd = itemEnd;
const horizontallyCollidingItems = filterBetween(
itemsAlreadyPositioned,
(i) => itemStart < getItemEnd(i) - EPSILON,
horizontalOverlapStartIndex,
horizontalOverlapEndIndex
).sort((a, b) => a.top - b.top);
for (let i2 = 0; i2 < horizontallyCollidingItems.length; i2++) {
const otherItem = horizontallyCollidingItems[i2];
if (checkVerticalSpatialCollision(item, otherItem, margins)) {
item.top = otherItem.top + otherItem.height + margins.vertical;
}
}
if (shouldOthersStack(item)) {
insertionIndex = findIndexFrom(itemsAlreadyPositioned, (i) => getItemStart(i) - EPSILON > itemStart, insertionIndex);
itemsAlreadyPositioned.splice(insertionIndex, 0, item);
if (insertionIndex < horizontalOverlapStartIndex) {
horizontalOverlapStartIndex++;
}
if (insertionIndex <= horizontalOverlapEndIndex) {
horizontalOverlapEndIndex++;
}
insertionIndex++;
}
const currentHeight = item.top + item.height;
if (currentHeight > maxHeight) {
maxHeight = currentHeight;
}
if (shouldBail && shouldBail()) {
return null;
}
}
return maxHeight;
}
function checkVerticalSpatialCollision(a, b, margin) {
return a.top - margin.vertical + EPSILON < b.top + b.height && a.top + a.height + margin.vertical - EPSILON > b.top;
}
function findIndexFrom(arr, predicate, startIndex) {
if (!startIndex) {
startIndex = 0;
}
for (let i = startIndex; i < arr.length; i++) {
if (predicate(arr[i])) {
return i;
}
}
return arr.length;
}
function findLastIndexBetween(arr, predicate, startIndex, endIndex) {
if (!startIndex) {
startIndex = 0;
}
if (!endIndex) {
endIndex = arr.length;
}
for (let i = endIndex - 1; i >= startIndex; i--) {
if (predicate(arr[i])) {
return i;
}
}
return startIndex - 1;
}
function filterBetween(arr, predicate, startIndex, endIndex) {
if (!startIndex) {
startIndex = 0;
}
if (endIndex) {
endIndex = Math.min(endIndex, arr.length);
} else {
endIndex = arr.length;
}
const result = [];
for (let i = startIndex; i < endIndex; i++) {
if (predicate(arr[i])) {
result.push(arr[i]);
}
}
return result;
}
var BACKGROUND$1 = "__background__";
var ReservedGroupIds$1 = {
BACKGROUND: BACKGROUND$1
};
var Group = class {
/**
* @param {number | string} groupId
* @param {Object} data
* @param {ItemSet} itemSet
* @constructor Group
*/
constructor(groupId, data, itemSet) {
this.groupId = groupId;
this.subgroups = {};
this.subgroupStack = {};
this.subgroupStackAll = false;
this.subgroupVisibility = {};
this.doInnerStack = false;
this.shouldBailStackItems = false;
this.subgroupIndex = 0;
this.subgroupOrderer = data && data.subgroupOrder;
this.itemSet = itemSet;
this.isVisible = null;
this.height = 0;
this.stackDirty = true;
this._disposeCallbacks = [];
if (data && data.nestedGroups) {
this.nestedGroups = data.nestedGroups;
if (data.showNested == false) {
this.showNested = false;
} else {
this.showNested = true;
}
}
if (data && data.subgroupStack) {
if (typeof data.subgroupStack === "boolean") {
this.doInnerStack = data.subgroupStack;
this.subgroupStackAll = data.subgroupStack;
} else {
for (const key in data.subgroupStack) {
if (!Object.prototype.hasOwnProperty.call(data.subgroupStack, key))
continue;
this.subgroupStack[key] = data.subgroupStack[key];
this.doInnerStack = this.doInnerStack || data.subgroupStack[key];
}
}
}
if (data && data.heightMode) {
this.heightMode = data.heightMode;
} else {
this.heightMode = itemSet.options.groupHeightMode;
}
this.nestedInGroup = null;
this.dom = {};
this.props = {
label: {
width: 0,
height: 0
}
};
this.className = null;
this.items = {};
this.visibleItems = [];
this.itemsInRange = [];
this.orderedItems = {
byStart: [],
byEnd: []
};
this.checkRangedItems = false;
const handleCheckRangedItems = () => {
this.checkRangedItems = true;
};
this.itemSet.body.emitter.on("checkRangedItems", handleCheckRangedItems);
this._disposeCallbacks.push(() => {
this.itemSet.body.emitter.off("checkRangedItems", handleCheckRangedItems);
});
this._create();
this.setData(data);
}
/**
* Create DOM elements for the group
* @private
*/
_create() {
const label = document.createElement("div");
if (this.itemSet.options.groupEditable.order) {
label.className = "vis-label draggable";
} else {
label.className = "vis-label";
}
this.dom.label = label;
const inner = document.createElement("div");
inner.className = "vis-inner";
label.appendChild(inner);
this.dom.inner = inner;
const foreground = document.createElement("div");
foreground.className = "vis-group";
foreground["vis-group"] = this;
this.dom.foreground = foreground;
this.dom.background = document.createElement("div");
this.dom.background.className = "vis-group";
this.dom.axis = document.createElement("div");
this.dom.axis.className = "vis-group";
this.dom.marker = document.createElement("div");
this.dom.marker.style.visibility = "hidden";
this.dom.marker.style.position = "absolute";
this.dom.marker.innerHTML = "";
this.dom.background.appendChild(this.dom.marker);
}
/**
* Set the group data for this group
* @param {Object} data   Group data, can contain properties content and className
*/
setData(data) {
if (this.itemSet.groupTouchParams.isDragging) return;
let content;
let templateFunction;
if (data && data.subgroupVisibility) {
for (const key in data.subgroupVisibility) {
if (!Object.prototype.hasOwnProperty.call(data.subgroupVisibility, key))
continue;
this.subgroupVisibility[key] = data.subgroupVisibility[key];
}
}
if (this.itemSet.options && this.itemSet.options.groupTemplate) {
templateFunction = this.itemSet.options.groupTemplate.bind(this);
content = templateFunction(data, this.dom.inner);
} else {
content = data && data.content;
}
if (content instanceof Element) {
while (this.dom.inner.firstChild) {
this.dom.inner.removeChild(this.dom.inner.firstChild);
}
this.dom.inner.appendChild(content);
} else if (content instanceof Object && content.isReactComponent) ;
else if (content instanceof Object) {
templateFunction(data, this.dom.inner);
} else if (content !== void 0 && content !== null) {
this.dom.inner.innerHTML = availableUtils.xss(content);
} else {
this.dom.inner.innerHTML = availableUtils.xss(this.groupId || "");
}
this.dom.label.title = data && data.title || "";
if (!this.dom.inner.firstChild) {
availableUtils.addClassName(this.dom.inner, "vis-hidden");
} else {
availableUtils.removeClassName(this.dom.inner, "vis-hidden");
}
if (data && data.nestedGroups) {
if (!this.nestedGroups || this.nestedGroups != data.nestedGroups) {
this.nestedGroups = data.nestedGroups;
}
if (data.showNested !== void 0 || this.showNested === void 0) {
if (data.showNested == false) {
this.showNested = false;
} else {
this.showNested = true;
}
}
availableUtils.addClassName(this.dom.label, "vis-nesting-group");
if (this.showNested) {
availableUtils.removeClassName(this.dom.label, "collapsed");
availableUtils.addClassName(this.dom.label, "expanded");
} else {
availableUtils.removeClassName(this.dom.label, "expanded");
availableUtils.addClassName(this.dom.label, "collapsed");
}
} else if (this.nestedGroups) {
this.nestedGroups = null;
availableUtils.removeClassName(this.dom.label, "collapsed");
availableUtils.removeClassName(this.dom.label, "expanded");
availableUtils.removeClassName(this.dom.label, "vis-nesting-group");
}
if (data && (data.treeLevel || data.nestedInGroup)) {
availableUtils.addClassName(this.dom.label, "vis-nested-group");
if (data.treeLevel) {
availableUtils.addClassName(this.dom.label, "vis-group-level-" + data.treeLevel);
} else {
availableUtils.addClassName(this.dom.label, "vis-group-level-unknown-but-gte1");
}
} else {
availableUtils.addClassName(this.dom.label, "vis-group-level-0");
}
const className = data && data.className || null;
if (className != this.className) {
if (this.className) {
availableUtils.removeClassName(this.dom.label, this.className);
availableUtils.removeClassName(this.dom.foreground, this.className);
availableUtils.removeClassName(this.dom.background, this.className);
availableUtils.removeClassName(this.dom.axis, this.className);
}
availableUtils.addClassName(this.dom.label, className);
availableUtils.addClassName(this.dom.foreground, className);
availableUtils.addClassName(this.dom.background, className);
availableUtils.addClassName(this.dom.axis, className);
this.className = className;
}
if (this.style) {
availableUtils.removeCssText(this.dom.label, this.style);
this.style = null;
}
if (data && data.style) {
availableUtils.addCssText(this.dom.label, data.style);
this.style = data.style;
}
}
/**
* Get the width of the group label
* @return {number} width
*/
getLabelWidth() {
return this.props.label.width;
}
/**
* check if group has had an initial height hange
* @returns {boolean}
*/
_didMarkerHeightChange() {
const markerHeight = this.dom.marker.clientHeight;
if (markerHeight != this.lastMarkerHeight) {
this.lastMarkerHeight = markerHeight;
const redrawQueue = {};
let redrawQueueLength = 0;
availableUtils.forEach(this.items, (item, key) => {
item.dirty = true;
if (item.displayed) {
const returnQueue = true;
redrawQueue[key] = item.redraw(returnQueue);
redrawQueueLength = redrawQueue[key].length;
}
});
const needRedraw = redrawQueueLength > 0;
if (needRedraw) {
for (let i = 0; i < redrawQueueLength; i++) {
availableUtils.forEach(redrawQueue, (fns) => {
fns[i]();
});
}
}
return true;
} else {
return false;
}
}
/**
* calculate group dimentions and position
* @param {number} pixels
*/
_calculateGroupSizeAndPosition() {
const { offsetTop, offsetLeft, offsetWidth } = this.dom.foreground;
this.top = offsetTop;
this.right = offsetLeft;
this.width = offsetWidth;
}
/**
* checks if should bail redraw of items
* @returns {boolean} should bail
*/
_shouldBailItemsRedraw() {
const me = this;
const timeoutOptions = this.itemSet.options.onTimeout;
const bailOptions = {
relativeBailingTime: this.itemSet.itemsSettingTime,
bailTimeMs: timeoutOptions && timeoutOptions.timeoutMs,
userBailFunction: timeoutOptions && timeoutOptions.callback,
shouldBailStackItems: this.shouldBailStackItems
};
let bail = null;
if (!this.itemSet.initialDrawDone) {
if (bailOptions.shouldBailStackItems) {
return true;
}
if (Math.abs(Date.now() - new Date(bailOptions.relativeBailingTime)) > bailOptions.bailTimeMs) {
if (bailOptions.userBailFunction && this.itemSet.userContinueNotBail == null) {
bailOptions.userBailFunction((didUserContinue) => {
me.itemSet.userContinueNotBail = didUserContinue;
bail = !didUserContinue;
});
} else if (me.itemSet.userContinueNotBail == false) {
bail = true;
} else {
bail = false;
}
}
}
return bail;
}
/**
* redraws items
* @param {boolean} forceRestack
* @param {boolean} lastIsVisible
* @param {number} margin
* @param {object} range
* @private
*/
_redrawItems(forceRestack, lastIsVisible, margin, range) {
const restack = forceRestack || this.stackDirty || this.isVisible && !lastIsVisible;
if (restack) {
const orderedItems = {
byEnd: this.orderedItems.byEnd.filter((item) => !item.isCluster),
byStart: this.orderedItems.byStart.filter((item) => !item.isCluster)
};
const orderedClusters = {
byEnd: [...new Set(this.orderedItems.byEnd.map((item) => item.cluster).filter((item) => !!item))],
byStart: [...new Set(this.orderedItems.byStart.map((item) => item.cluster).filter((item) => !!item))]
};
const getVisibleItems = () => {
const visibleItems = this._updateItemsInRange(orderedItems, this.visibleItems.filter((item) => !item.isCluster), range);
const visibleClusters = this._updateClustersInRange(orderedClusters, this.visibleItems.filter((item) => item.isCluster), range);
return [...visibleItems, ...visibleClusters];
};
const getVisibleItemsGroupedBySubgroup = (orderFn) => {
let visibleSubgroupsItems = {};
for (const subgroup2 in this.subgroups) {
if (!Object.prototype.hasOwnProperty.call(this.subgroups, subgroup2))
continue;
const items = this.visibleItems.filter((item) => item.data.subgroup === subgroup2);
visibleSubgroupsItems[subgroup2] = orderFn ? items.sort((a, b) => orderFn(a.data, b.data)) : items;
}
return visibleSubgroupsItems;
};
if (typeof this.itemSet.options.order === "function") {
const me = this;
if (this.doInnerStack && this.itemSet.options.stackSubgroups) {
const visibleSubgroupsItems = getVisibleItemsGroupedBySubgroup(this.itemSet.options.order);
stackSubgroupsWithInnerStack(visibleSubgroupsItems, margin, this.subgroups);
this.visibleItems = getVisibleItems();
this._updateSubGroupHeights(margin);
} else {
this.visibleItems = getVisibleItems();
this._updateSubGroupHeights(margin);
const customOrderedItems = this.visibleItems.slice().filter((item) => item.isCluster || !item.isCluster && !item.cluster).sort((a, b) => {
return me.itemSet.options.order(a.data, b.data);
});
this.shouldBailStackItems = stack(customOrderedItems, margin, true, this._shouldBailItemsRedraw.bind(this));
}
} else {
this.visibleItems = getVisibleItems();
this._updateSubGroupHeights(margin);
if (this.itemSet.options.stack) {
if (this.doInnerStack && this.itemSet.options.stackSubgroups) {
const visibleSubgroupsItems = getVisibleItemsGroupedBySubgroup();
stackSubgroupsWithInnerStack(visibleSubgroupsItems, margin, this.subgroups);
} else {
this.shouldBailStackItems = stack(this.visibleItems, margin, true, this._shouldBailItemsRedraw.bind(this));
}
} else {
nostack(this.visibleItems, margin, this.subgroups, this.itemSet.options.stackSubgroups);
}
}
for (let i = 0; i < this.visibleItems.length; i++) {
this.visibleItems[i].repositionX();
if (this.subgroupVisibility[this.visibleItems[i].data.subgroup] !== void 0) {
if (!this.subgroupVisibility[this.visibleItems[i].data.subgroup]) {
this.visibleItems[i].hide();
}
}
}
if (this.itemSet.options.cluster) {
availableUtils.forEach(this.items, (item) => {
if (item.cluster && item.displayed) {
item.hide();
}
});
}
if (this.shouldBailStackItems) {
this.itemSet.body.emitter.emit("destroyTimeline");
}
this.stackDirty = false;
}
}
/**
* check if group resized
* @param {boolean} resized
* @param {number} height
* @return {boolean} did resize
*/
_didResize(resized, height) {
resized = availableUtils.updateProperty(this, "height", height) || resized;
const labelWidth = this.dom.inner.clientWidth;
const labelHeight = this.dom.inner.clientHeight;
resized = availableUtils.updateProperty(this.props.label, "width", labelWidth) || resized;
resized = availableUtils.updateProperty(this.props.label, "height", labelHeight) || resized;
return resized;
}
/**
* apply group height
* @param {number} height
*/
_applyGroupHeight(height) {
this.dom.background.style.height = `${height}px`;
this.dom.foreground.style.height = `${height}px`;
this.dom.label.style.height = `${height}px`;
}
/**
* update vertical position of items after they are re-stacked and the height of the group is calculated
* @param {number} margin
*/
_updateItemsVerticalPosition(margin) {
for (let i = 0, ii = this.visibleItems.length; i < ii; i++) {
const item = this.visibleItems[i];
item.repositionY(margin);
if (!this.isVisible && this.groupId != ReservedGroupIds$1.BACKGROUND) {
if (item.displayed) item.hide();
}
}
}
/**
* Repaint this group
* @param {{start: number, end: number}} range
* @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
* @param {boolean} [forceRestack=false]  Force restacking of all items
* @param {boolean} [returnQueue=false]  return the queue or if the group resized
* @return {boolean} Returns true if the group is resized or the redraw queue if returnQueue=true
*/
redraw(range, margin, forceRestack, returnQueue) {
let resized = false;
const lastIsVisible = this.isVisible;
let height;
const queue = [
() => {
forceRestack = this._didMarkerHeightChange.call(this) || forceRestack;
},
this._updateSubGroupHeights.bind(this, margin),
this._calculateGroupSizeAndPosition.bind(this),
() => {
this.isVisible = this._isGroupVisible.bind(this)(range, margin);
},
() => {
this._redrawItems.bind(this)(forceRestack, lastIsVisible, margin, range);
},
this._updateSubgroupsSizes.bind(this),
() => {
height = this.height = this._calculateHeight.bind(this)(margin);
},
this._calculateGroupSizeAndPosition.bind(this),
() => {
resized = this._didResize.bind(this)(resized, height);
},
() => {
this._applyGroupHeight.bind(this)(height);
},
() => {
this._updateItemsVerticalPosition.bind(this)(margin);
},
(() => {
if (!this.isVisible && this.height) {
resized = false;
}
return resized;
}).bind(this)
];
if (returnQueue) {
return queue;
} else {
let result;
queue.forEach((fn) => {
result = fn();
});
return result;
}
}
/**
* recalculate the height of the subgroups
*
* @param {{item: timeline.Item}} margin
* @private
*/
_updateSubGroupHeights(margin) {
if (Object.keys(this.subgroups).length > 0) {
const me = this;
this._resetSubgroups();
availableUtils.forEach(this.visibleItems, (item) => {
if (item.data.subgroup !== void 0) {
me.subgroups[item.data.subgroup].height = Math.max(me.subgroups[item.data.subgroup].height, item.height + margin.item.vertical);
me.subgroups[item.data.subgroup].visible = typeof this.subgroupVisibility[item.data.subgroup] === "undefined" ? true : Boolean(this.subgroupVisibility[item.data.subgroup]);
}
});
}
}
/**
* check if group is visible
*
* @param {timeline.Range} range
* @param {{axis: timeline.DataAxis}} margin
* @returns {boolean} is visible
* @private
*/
_isGroupVisible(range, margin) {
return this.top <= range.body.domProps.centerContainer.height - range.body.domProps.scrollTop + margin.axis && this.top + this.height + margin.axis >= -range.body.domProps.scrollTop;
}
/**
* recalculate the height of the group
* @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
* @returns {number} Returns the height
* @private
*/
_calculateHeight(margin) {
let height;
let items;
if (this.heightMode === "fixed") {
items = availableUtils.toArray(this.items);
} else {
items = this.visibleItems;
}
if (!this.isVisible && this.height) {
height = Math.max(this.height, this.props.label.height);
} else if (items.length > 0) {
let min = items[0].top;
let max = items[0].top + items[0].height;
availableUtils.forEach(items, (item) => {
min = Math.min(min, item.top);
max = Math.max(max, item.top + item.height);
});
if (min > margin.axis) {
const offset = min - margin.axis;
max -= offset;
availableUtils.forEach(items, (item) => {
item.top -= offset;
});
}
height = Math.ceil(max + margin.item.vertical / 2);
if (this.heightMode !== "fitItems") {
height = Math.max(height, this.props.label.height);
}
} else {
height = this.props.label.height;
}
return height;
}
/**
* Show this group: attach to the DOM
*/
show() {
if (!this.dom.label.parentNode) {
this.itemSet.dom.labelSet.appendChild(this.dom.label);
}
if (!this.dom.foreground.parentNode) {
this.itemSet.dom.foreground.appendChild(this.dom.foreground);
}
if (!this.dom.background.parentNode) {
this.itemSet.dom.background.appendChild(this.dom.background);
}
if (!this.dom.axis.parentNode) {
this.itemSet.dom.axis.appendChild(this.dom.axis);
}
}
/**
* Hide this group: remove from the DOM
*/
hide() {
const label = this.dom.label;
if (label.parentNode) {
label.parentNode.removeChild(label);
}
const foreground = this.dom.foreground;
if (foreground.parentNode) {
foreground.parentNode.removeChild(foreground);
}
const background = this.dom.background;
if (background.parentNode) {
background.parentNode.removeChild(background);
}
const axis = this.dom.axis;
if (axis.parentNode) {
axis.parentNode.removeChild(axis);
}
}
/**
* Add an item to the group
* @param {Item} item
*/
add(item) {
this.items[item.id] = item;
item.setParent(this);
this.stackDirty = true;
if (item.data.subgroup !== void 0) {
this._addToSubgroup(item);
this.orderSubgroups();
}
if (!this.visibleItems.includes(item)) {
const range = this.itemSet.body.range;
this._checkIfVisible(item, this.visibleItems, range);
}
}
/**
* add item to subgroup
* @param {object} item
* @param {string} subgroupId
*/
_addToSubgroup(item, subgroupId = item.data.subgroup) {
if (subgroupId != void 0 && this.subgroups[subgroupId] === void 0) {
this.subgroups[subgroupId] = {
height: 0,
top: 0,
start: item.data.start,
end: item.data.end || item.data.start,
visible: false,
index: this.subgroupIndex,
items: [],
stack: this.subgroupStackAll || this.subgroupStack[subgroupId] || false
};
this.subgroupIndex++;
}
if (new Date(item.data.start) < new Date(this.subgroups[subgroupId].start)) {
this.subgroups[subgroupId].start = item.data.start;
}
const itemEnd = item.data.end || item.data.start;
if (new Date(itemEnd) > new Date(this.subgroups[subgroupId].end)) {
this.subgroups[subgroupId].end = itemEnd;
}
this.subgroups[subgroupId].items.push(item);
}
/**
* update subgroup sizes
*/
_updateSubgroupsSizes() {
const me = this;
if (me.subgroups) {
for (const subgroup2 in me.subgroups) {
if (!Object.prototype.hasOwnProperty.call(me.subgroups, subgroup2))
continue;
const initialEnd = me.subgroups[subgroup2].items[0].data.end || me.subgroups[subgroup2].items[0].data.start;
let newStart = me.subgroups[subgroup2].items[0].data.start;
let newEnd = initialEnd - 1;
me.subgroups[subgroup2].items.forEach((item) => {
if (new Date(item.data.start) < new Date(newStart)) {
newStart = item.data.start;
}
const itemEnd = item.data.end || item.data.start;
if (new Date(itemEnd) > new Date(newEnd)) {
newEnd = itemEnd;
}
});
me.subgroups[subgroup2].start = newStart;
me.subgroups[subgroup2].end = new Date(newEnd - 1);
}
}
}
/**
* order subgroups
*/
orderSubgroups() {
if (this.subgroupOrderer !== void 0) {
const sortArray = [];
if (typeof this.subgroupOrderer == "string") {
for (const subgroup2 in this.subgroups) {
if (!Object.prototype.hasOwnProperty.call(this.subgroups, subgroup2))
continue;
sortArray.push({ subgroup: subgroup2, sortField: this.subgroups[subgroup2].items[0].data[this.subgroupOrderer] });
}
sortArray.sort((a, b) => a.sortField - b.sortField);
} else if (typeof this.subgroupOrderer == "function") {
for (const subgroup2 in this.subgroups) {
if (!Object.prototype.hasOwnProperty.call(this.subgroups, subgroup2))
continue;
sortArray.push(this.subgroups[subgroup2].items[0].data);
}
sortArray.sort(this.subgroupOrderer);
}
if (sortArray.length > 0) {
for (let i = 0; i < sortArray.length; i++) {
this.subgroups[sortArray[i].subgroup].index = i;
}
}
}
}
/**
* add item to subgroup
*/
_resetSubgroups() {
for (const subgroup2 in this.subgroups) {
if (!Object.prototype.hasOwnProperty.call(this.subgroups, subgroup2))
continue;
this.subgroups[subgroup2].visible = false;
this.subgroups[subgroup2].height = 0;
}
}
/**
* Remove an item from the group
* @param {Item} item
*/
remove(item) {
delete this.items[item.id];
item.setParent(null);
this.stackDirty = true;
const index = this.visibleItems.indexOf(item);
if (index != -1) this.visibleItems.splice(index, 1);
if (item.data.subgroup !== void 0) {
this._removeFromSubgroup(item);
this.orderSubgroups();
}
}
/**
* remove item from subgroup
* @param {object} item
* @param {string} subgroupId
*/
_removeFromSubgroup(item, subgroupId = item.data.subgroup) {
if (subgroupId != void 0) {
const subgroup2 = this.subgroups[subgroupId];
if (subgroup2) {
const itemIndex = subgroup2.items.indexOf(item);
if (itemIndex >= 0) {
subgroup2.items.splice(itemIndex, 1);
if (!subgroup2.items.length) {
delete this.subgroups[subgroupId];
} else {
this._updateSubgroupsSizes();
}
}
}
}
}
/**
* Remove an item from the corresponding DataSet
* @param {Item} item
*/
removeFromDataSet(item) {
this.itemSet.removeItem(item.id);
}
/**
* Reorder the items
*/
order() {
const array2 = availableUtils.toArray(this.items);
const startArray = [];
const endArray = [];
for (let i = 0; i < array2.length; i++) {
if (array2[i].data.end !== void 0) {
endArray.push(array2[i]);
}
startArray.push(array2[i]);
}
this.orderedItems = {
byStart: startArray,
byEnd: endArray
};
orderByStart(this.orderedItems.byStart);
orderByEnd(this.orderedItems.byEnd);
}
/**
* Update the visible items
* @param {{byStart: Item[], byEnd: Item[]}} orderedItems   All items ordered by start date and by end date
* @param {Item[]} oldVisibleItems                          The previously visible items.
* @param {{start: number, end: number}} range              Visible range
* @return {Item[]} visibleItems                            The new visible items.
* @private
*/
_updateItemsInRange(orderedItems, oldVisibleItems, range) {
const visibleItems = [];
const visibleItemsLookup = {};
if (!this.isVisible && this.height !== void 0 && this.groupId != ReservedGroupIds$1.BACKGROUND) {
for (let i = 0; i < oldVisibleItems.length; i++) {
var item = oldVisibleItems[i];
if (item.displayed) item.hide();
}
return visibleItems;
}
const interval = (range.end - range.start) / 4;
const lowerBound = range.start - interval;
const upperBound = range.end + interval;
const startSearchFunction = (value) => {
if (value < lowerBound) {
return -1;
} else if (value <= upperBound) {
return 0;
} else {
return 1;
}
};
const endSearchFunction = (data) => {
const { start, end } = data;
if (end < lowerBound) {
return -1;
} else if (start <= upperBound) {
return 0;
} else {
return 1;
}
};
if (oldVisibleItems.length > 0) {
for (let i = 0; i < oldVisibleItems.length; i++) {
this._checkIfVisibleWithReference(oldVisibleItems[i], visibleItems, visibleItemsLookup, range);
}
}
const initialPosByStart = availableUtils.binarySearchCustom(orderedItems.byStart, startSearchFunction, "data", "start");
this._traceVisible(initialPosByStart, orderedItems.byStart, visibleItems, visibleItemsLookup, (item2) => item2.data.start < lowerBound || item2.data.start > upperBound);
if (this.checkRangedItems == true) {
this.checkRangedItems = false;
for (let i = 0; i < orderedItems.byEnd.length; i++) {
this._checkIfVisibleWithReference(orderedItems.byEnd[i], visibleItems, visibleItemsLookup, range);
}
} else {
const initialPosByEnd = availableUtils.binarySearchCustom(orderedItems.byEnd, endSearchFunction, "data");
this._traceVisible(initialPosByEnd, orderedItems.byEnd, visibleItems, visibleItemsLookup, (item2) => item2.data.end < lowerBound || item2.data.start > upperBound);
}
this._sortVisibleItems(orderedItems.byStart, visibleItems, visibleItemsLookup);
const redrawQueue = {};
let redrawQueueLength = 0;
for (let i = 0; i < visibleItems.length; i++) {
const item2 = visibleItems[i];
if (!item2.displayed) {
const returnQueue = true;
redrawQueue[i] = item2.redraw(returnQueue);
redrawQueueLength = redrawQueue[i].length;
}
}
const needRedraw = redrawQueueLength > 0;
if (needRedraw) {
for (let j = 0; j < redrawQueueLength; j++) {
availableUtils.forEach(redrawQueue, (fns) => {
fns[j]();
});
}
}
for (let i = 0; i < visibleItems.length; i++) {
visibleItems[i].repositionX();
}
return visibleItems;
}
/**
* trace visible items in group
* @param {number} initialPos
* @param {array} items
* @param {aray} visibleItems
* @param {object} visibleItemsLookup
* @param {function} breakCondition
*/
_traceVisible(initialPos, items, visibleItems, visibleItemsLookup, breakCondition) {
if (initialPos != -1) {
for (let i = initialPos; i >= 0; i--) {
let item = items[i];
if (breakCondition(item)) {
break;
} else {
if (!(item.isCluster && !item.hasItems()) && !item.cluster) {
if (visibleItemsLookup[item.id] === void 0) {
visibleItemsLookup[item.id] = true;
visibleItems.unshift(item);
}
}
}
}
for (let i = initialPos + 1; i < items.length; i++) {
let item = items[i];
if (breakCondition(item)) {
break;
} else {
if (!(item.isCluster && !item.hasItems()) && !item.cluster) {
if (visibleItemsLookup[item.id] === void 0) {
visibleItemsLookup[item.id] = true;
visibleItems.push(item);
}
}
}
}
}
}
/**
* by-ref reordering of visibleItems array to match
* the specified item superset order
* @param {array} orderedItems
* @param {aray} visibleItems
* @param {object} visibleItemsLookup
*/
_sortVisibleItems(orderedItems, visibleItems, visibleItemsLookup) {
visibleItems.length = 0;
for (let i = 0; i < orderedItems.length; i++) {
let item = orderedItems[i];
if (visibleItemsLookup[item.id]) {
visibleItems.push(item);
}
}
}
/**
* this function is very similar to the _checkIfInvisible() but it does not
* return booleans, hides the item if it should not be seen and always adds to
* the visibleItems.
* this one is for brute forcing and hiding.
*
* @param {Item} item
* @param {Array} visibleItems
* @param {{start:number, end:number}} range
* @private
*/
_checkIfVisible(item, visibleItems, range) {
if (item.isVisible(range)) {
if (!item.displayed) item.show();
item.repositionX();
visibleItems.push(item);
} else {
if (item.displayed) item.hide();
}
}
/**
* this function is very similar to the _checkIfInvisible() but it does not
* return booleans, hides the item if it should not be seen and always adds to
* the visibleItems.
* this one is for brute forcing and hiding.
*
* @param {Item} item
* @param {Array.<timeline.Item>} visibleItems
* @param {Object<number, boolean>} visibleItemsLookup
* @param {{start:number, end:number}} range
* @private
*/
_checkIfVisibleWithReference(item, visibleItems, visibleItemsLookup, range) {
if (item.isVisible(range)) {
if (visibleItemsLookup[item.id] === void 0) {
visibleItemsLookup[item.id] = true;
visibleItems.push(item);
}
} else {
if (item.displayed) item.hide();
}
}
/**
* Update the visible items
* @param {array} orderedClusters
* @param {array} oldVisibleClusters
* @param {{start: number, end: number}} range
* @return {Item[]} visibleItems
* @private
*/
_updateClustersInRange(orderedClusters, oldVisibleClusters, range) {
const visibleClusters = [];
const visibleClustersLookup = {};
if (oldVisibleClusters.length > 0) {
for (let i = 0; i < oldVisibleClusters.length; i++) {
this._checkIfVisibleWithReference(oldVisibleClusters[i], visibleClusters, visibleClustersLookup, range);
}
}
for (let i = 0; i < orderedClusters.byStart.length; i++) {
this._checkIfVisibleWithReference(orderedClusters.byStart[i], visibleClusters, visibleClustersLookup, range);
}
for (let i = 0; i < orderedClusters.byEnd.length; i++) {
this._checkIfVisibleWithReference(orderedClusters.byEnd[i], visibleClusters, visibleClustersLookup, range);
}
const redrawQueue = {};
let redrawQueueLength = 0;
for (let i = 0; i < visibleClusters.length; i++) {
const item = visibleClusters[i];
if (!item.displayed) {
const returnQueue = true;
redrawQueue[i] = item.redraw(returnQueue);
redrawQueueLength = redrawQueue[i].length;
}
}
const needRedraw = redrawQueueLength > 0;
if (needRedraw) {
for (var j = 0; j < redrawQueueLength; j++) {
availableUtils.forEach(redrawQueue, function(fns) {
fns[j]();
});
}
}
for (let i = 0; i < visibleClusters.length; i++) {
visibleClusters[i].repositionX();
}
return visibleClusters;
}
/**
* change item subgroup
* @param {object} item
* @param {string} oldSubgroup
* @param {string} newSubgroup
*/
changeSubgroup(item, oldSubgroup, newSubgroup) {
this._removeFromSubgroup(item, oldSubgroup);
this._addToSubgroup(item, newSubgroup);
this.orderSubgroups();
}
/**
* Call this method before you lose the last reference to an instance of this.
* It will remove listeners etc.
*/
dispose() {
this.hide();
let disposeCallback;
while (disposeCallback = this._disposeCallbacks.pop()) {
disposeCallback();
}
}
};
var BackgroundGroup = class extends Group {
/**
* @param {number | string} groupId
* @param {Object} data
* @param {ItemSet} itemSet
*/
constructor(groupId, data, itemSet) {
super(groupId, data, itemSet);
this.width = 0;
this.height = 0;
this.top = 0;
this.left = 0;
}
/**
* Repaint this group
* @param {{start: number, end: number}} range
* @param {{item: {horizontal: number, vertical: number}, axis: number}} margin
* @param {boolean} [forceRestack=false]  Force restacking of all items
* @return {boolean} Returns true if the group is resized
*/
redraw(range, margin, forceRestack) {
const resized = false;
this.visibleItems = this._updateItemsInRange(this.orderedItems, this.visibleItems, range);
this.width = this.dom.background.offsetWidth;
this.dom.background.style.height = "0";
for (let i = 0, ii = this.visibleItems.length; i < ii; i++) {
const item = this.visibleItems[i];
item.repositionY(margin);
}
return resized;
}
/**
* Show this group: attach to the DOM
*/
show() {
if (!this.dom.background.parentNode) {
this.itemSet.dom.background.appendChild(this.dom.background);
}
}
};
var Item = class {
/**
* @constructor Item
* @param {Object} data             Object containing (optional) parameters type,
*                                  start, end, content, group, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} options          Configuration options
*                                  // TODO: describe available options
*/
constructor(data, conversion, options) {
this.id = null;
this.parent = null;
this.data = data;
this.dom = null;
this.conversion = conversion || {};
this.defaultOptions = {
locales,
locale: "en"
};
this.options = availableUtils.extend({}, this.defaultOptions, options);
this.options.locales = availableUtils.extend({}, locales, this.options.locales);
const defaultLocales = this.defaultOptions.locales[this.defaultOptions.locale];
Object.keys(this.options.locales).forEach((locale) => {
this.options.locales[locale] = availableUtils.extend(
{},
defaultLocales,
this.options.locales[locale]
);
});
this.selected = false;
this.displayed = false;
this.groupShowing = true;
this.selectable = options && options.selectable || false;
this.dirty = true;
this.top = null;
this.right = null;
this.left = null;
this.width = null;
this.height = null;
this.setSelectability(data);
this.editable = null;
this._updateEditStatus();
}
/**
* Select current item
*/
select() {
if (this.selectable) {
this.selected = true;
this.dirty = true;
if (this.displayed) this.redraw();
}
}
/**
* Unselect current item
*/
unselect() {
this.selected = false;
this.dirty = true;
if (this.displayed) this.redraw();
}
/**
* Set data for the item. Existing data will be updated. The id should not
* be changed. When the item is displayed, it will be redrawn immediately.
* @param {Object} data
*/
setData(data) {
const groupChanged = data.group != void 0 && this.data.group != data.group;
if (groupChanged && this.parent != null) {
this.parent.itemSet._moveToGroup(this, data.group);
}
this.setSelectability(data);
if (this.parent) {
this.parent.stackDirty = true;
}
const subGroupChanged = data.subgroup != void 0 && this.data.subgroup != data.subgroup;
if (subGroupChanged && this.parent != null) {
this.parent.changeSubgroup(this, this.data.subgroup, data.subgroup);
}
this.data = data;
this._updateEditStatus();
this.dirty = true;
if (this.displayed) this.redraw();
}
/**
* Set whether the item can be selected.
* Can only be set/unset if the timeline's `selectable` configuration option is `true`.
* @param {Object} data `data` from `constructor` and `setData`
*/
setSelectability(data) {
if (data) {
this.selectable = typeof data.selectable === "undefined" ? true : Boolean(data.selectable);
}
}
/**
* Set a parent for the item
* @param {Group} parent
*/
setParent(parent) {
if (this.displayed) {
this.hide();
this.parent = parent;
if (this.parent) {
this.show();
}
} else {
this.parent = parent;
}
}
/**
* Check whether this item is visible inside given range
* @param {timeline.Range} range with a timestamp for start and end
* @returns {boolean} True if visible
*/
isVisible(range) {
return false;
}
/**
* Show the Item in the DOM (when not already visible)
* @return {Boolean} changed
*/
show() {
return false;
}
/**
* Hide the Item from the DOM (when visible)
* @return {Boolean} changed
*/
hide() {
return false;
}
/**
* Repaint the item
*/
redraw() {
}
/**
* Reposition the Item horizontally
*/
repositionX() {
}
/**
* Reposition the Item vertically
*/
repositionY() {
}
/**
* Repaint a drag area on the center of the item when the item is selected
* @protected
*/
_repaintDragCenter() {
if (this.selected && this.editable.updateTime && !this.dom.dragCenter) {
const me = this;
const dragCenter = document.createElement("div");
dragCenter.className = "vis-drag-center";
dragCenter.dragCenterItem = this;
this.hammerDragCenter = new Hammer3(dragCenter);
this.hammerDragCenter.on("tap", (event2) => {
me.parent.itemSet.body.emitter.emit("click", {
event: event2,
item: me.id
});
});
this.hammerDragCenter.on("doubletap", (event2) => {
event2.stopPropagation();
me.parent.itemSet._onUpdateItem(me);
me.parent.itemSet.body.emitter.emit("doubleClick", {
event: event2,
item: me.id
});
});
this.hammerDragCenter.on("panstart", (event2) => {
event2.stopPropagation();
me.parent.itemSet._onDragStart(event2);
});
this.hammerDragCenter.on("panmove", me.parent.itemSet._onDrag.bind(me.parent.itemSet));
this.hammerDragCenter.on("panend", me.parent.itemSet._onDragEnd.bind(me.parent.itemSet));
this.hammerDragCenter.get("press").set({ time: 1e4 });
if (this.dom.box) {
if (this.dom.dragLeft) {
this.dom.box.insertBefore(dragCenter, this.dom.dragLeft);
} else {
this.dom.box.appendChild(dragCenter);
}
} else if (this.dom.point) {
this.dom.point.appendChild(dragCenter);
}
this.dom.dragCenter = dragCenter;
} else if (!this.selected && this.dom.dragCenter) {
if (this.dom.dragCenter.parentNode) {
this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter);
}
this.dom.dragCenter = null;
if (this.hammerDragCenter) {
this.hammerDragCenter.destroy();
this.hammerDragCenter = null;
}
}
}
/**
* Repaint a delete button on the top right of the item when the item is selected
* @param {HTMLElement} anchor
* @protected
*/
_repaintDeleteButton(anchor) {
const editable = (this.options.editable.overrideItems || this.editable == null) && this.options.editable.remove || !this.options.editable.overrideItems && this.editable != null && this.editable.remove;
if (this.selected && editable && !this.dom.deleteButton) {
const me = this;
const deleteButton = document.createElement("div");
if (this.options.rtl) {
deleteButton.className = "vis-delete-rtl";
} else {
deleteButton.className = "vis-delete";
}
let optionsLocale = this.options.locales[this.options.locale];
if (!optionsLocale) {
if (!this.warned) {
console.warn(`WARNING: options.locales['${this.options.locale}'] not found. See https://visjs.github.io/vis-timeline/docs/timeline/#Localization`);
this.warned = true;
}
optionsLocale = this.options.locales["en"];
}
deleteButton.title = optionsLocale.deleteSelected;
this.hammerDeleteButton = new Hammer3(deleteButton).on("tap", (event2) => {
event2.stopPropagation();
me.parent.removeFromDataSet(me);
});
anchor.appendChild(deleteButton);
this.dom.deleteButton = deleteButton;
} else if ((!this.selected || !editable) && this.dom.deleteButton) {
if (this.dom.deleteButton.parentNode) {
this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton);
}
this.dom.deleteButton = null;
if (this.hammerDeleteButton) {
this.hammerDeleteButton.destroy();
this.hammerDeleteButton = null;
}
}
}
/**
* Repaint a onChange tooltip on the top right of the item when the item is selected
* @param {HTMLElement} anchor
* @protected
*/
_repaintOnItemUpdateTimeTooltip(anchor) {
if (!this.options.tooltipOnItemUpdateTime) return;
const editable = (this.options.editable.updateTime || this.data.editable === true) && this.data.editable !== false;
if (this.selected && editable && !this.dom.onItemUpdateTimeTooltip) {
const onItemUpdateTimeTooltip = document.createElement("div");
onItemUpdateTimeTooltip.className = "vis-onUpdateTime-tooltip";
anchor.appendChild(onItemUpdateTimeTooltip);
this.dom.onItemUpdateTimeTooltip = onItemUpdateTimeTooltip;
} else if (!this.selected && this.dom.onItemUpdateTimeTooltip) {
if (this.dom.onItemUpdateTimeTooltip.parentNode) {
this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(this.dom.onItemUpdateTimeTooltip);
}
this.dom.onItemUpdateTimeTooltip = null;
}
if (this.dom.onItemUpdateTimeTooltip) {
this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet.touchParams.itemIsDragging ? "visible" : "hidden";
this.dom.onItemUpdateTimeTooltip.style.transform = "translateX(-50%)";
this.dom.onItemUpdateTimeTooltip.style.left = "50%";
const tooltipOffset = 50;
const scrollTop = this.parent.itemSet.body.domProps.scrollTop;
let itemDistanceFromTop;
if (this.options.orientation.item == "top") {
itemDistanceFromTop = this.top;
} else {
itemDistanceFromTop = this.parent.height - this.top - this.height;
}
const isCloseToTop = itemDistanceFromTop + this.parent.top - tooltipOffset < -scrollTop;
if (isCloseToTop) {
this.dom.onItemUpdateTimeTooltip.style.bottom = "";
this.dom.onItemUpdateTimeTooltip.style.top = `${this.height + 2}px`;
} else {
this.dom.onItemUpdateTimeTooltip.style.top = "";
this.dom.onItemUpdateTimeTooltip.style.bottom = `${this.height + 2}px`;
}
let content;
let templateFunction;
if (this.options.tooltipOnItemUpdateTime && this.options.tooltipOnItemUpdateTime.template) {
templateFunction = this.options.tooltipOnItemUpdateTime.template.bind(this);
content = templateFunction(this.data);
} else {
content = `start: ${moment$2(this.data.start).format("MM/DD/YYYY hh:mm")}`;
if (this.data.end) {
content += `<br> end: ${moment$2(this.data.end).format("MM/DD/YYYY hh:mm")}`;
}
}
this.dom.onItemUpdateTimeTooltip.innerHTML = availableUtils.xss(content);
}
}
/**
* get item data
* @return {object}
* @private
*/
_getItemData() {
return this.parent.itemSet.itemsData.get(this.id);
}
/**
* Set HTML contents for the item
* @param {Element} element   HTML element to fill with the contents
* @private
*/
_updateContents(element) {
let content;
let changed;
let templateFunction;
let itemVisibleFrameContent;
let visibleFrameTemplateFunction;
const itemData = this._getItemData();
const frameElement = this.dom.box || this.dom.point;
const itemVisibleFrameContentElement = frameElement.getElementsByClassName("vis-item-visible-frame")[0];
if (this.options.visibleFrameTemplate) {
visibleFrameTemplateFunction = this.options.visibleFrameTemplate.bind(this);
itemVisibleFrameContent = availableUtils.xss(visibleFrameTemplateFunction(itemData, itemVisibleFrameContentElement));
} else {
itemVisibleFrameContent = "";
}
if (itemVisibleFrameContentElement) {
if (itemVisibleFrameContent instanceof Object && !(itemVisibleFrameContent instanceof Element)) {
visibleFrameTemplateFunction(itemData, itemVisibleFrameContentElement);
} else {
changed = this._contentToString(this.itemVisibleFrameContent) !== this._contentToString(itemVisibleFrameContent);
if (changed) {
if (itemVisibleFrameContent instanceof Element) {
itemVisibleFrameContentElement.innerHTML = "";
itemVisibleFrameContentElement.appendChild(itemVisibleFrameContent);
} else if (itemVisibleFrameContent != void 0) {
itemVisibleFrameContentElement.innerHTML = availableUtils.xss(itemVisibleFrameContent);
} else {
if (!(this.data.type == "background" && this.data.content === void 0)) {
throw new Error(`Property "content" missing in item ${this.id}`);
}
}
this.itemVisibleFrameContent = itemVisibleFrameContent;
}
}
}
if (this.options.template) {
templateFunction = this.options.template.bind(this);
content = templateFunction(itemData, element, this.data);
} else {
content = this.data.content;
}
if (content instanceof Object && !(content instanceof Element)) {
templateFunction(itemData, element);
} else {
changed = this._contentToString(this.content) !== this._contentToString(content);
if (changed) {
if (content instanceof Element) {
element.innerHTML = "";
element.appendChild(content);
} else if (content != void 0) {
element.innerHTML = availableUtils.xss(content);
} else {
if (!(this.data.type == "background" && this.data.content === void 0)) {
throw new Error(`Property "content" missing in item ${this.id}`);
}
}
this.content = content;
}
}
}
/**
* Process dataAttributes timeline option and set as data- attributes on dom.content
* @param {Element} element   HTML element to which the attributes will be attached
* @private
*/
_updateDataAttributes(element) {
if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
let attributes = [];
if (Array.isArray(this.options.dataAttributes)) {
attributes = this.options.dataAttributes;
} else if (this.options.dataAttributes == "all") {
attributes = Object.keys(this.data);
} else {
return;
}
for (const name of attributes) {
const value = this.data[name];
if (value != null) {
element.setAttribute(`data-${name}`, value);
} else {
element.removeAttribute(`data-${name}`);
}
}
}
}
/**
* Update custom styles of the element
* @param {Element} element
* @private
*/
_updateStyle(element) {
if (this.style) {
availableUtils.removeCssText(element, this.style);
this.style = null;
}
if (this.data.style) {
availableUtils.addCssText(element, this.data.style);
this.style = this.data.style;
}
}
/**
* Stringify the items contents
* @param {string | Element | undefined} content
* @returns {string | undefined}
* @private
*/
_contentToString(content) {
if (typeof content === "string") return content;
if (content && "outerHTML" in content) return content.outerHTML;
return content;
}
/**
* Update the editability of this item.
*/
_updateEditStatus() {
if (this.options) {
if (typeof this.options.editable === "boolean") {
this.editable = {
updateTime: this.options.editable,
updateGroup: this.options.editable,
remove: this.options.editable
};
} else if (typeof this.options.editable === "object") {
this.editable = {};
availableUtils.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.options.editable);
}
}
if (!this.options || !this.options.editable || this.options.editable.overrideItems !== true) {
if (this.data) {
if (typeof this.data.editable === "boolean") {
this.editable = {
updateTime: this.data.editable,
updateGroup: this.data.editable,
remove: this.data.editable
};
} else if (typeof this.data.editable === "object") {
this.editable = {};
availableUtils.selectiveExtend(["updateTime", "updateGroup", "remove"], this.editable, this.data.editable);
}
}
}
}
/**
* Return the width of the item left from its start date
* @return {number}
*/
getWidthLeft() {
return 0;
}
/**
* Return the width of the item right from the max of its start and end date
* @return {number}
*/
getWidthRight() {
return 0;
}
/**
* Return the title of the item
* @return {string | undefined}
*/
getTitle() {
if (this.options.tooltip && this.options.tooltip.template) {
const templateFunction = this.options.tooltip.template.bind(this);
return templateFunction(this._getItemData(), this.data);
}
return this.data.title;
}
};
Item.prototype.stack = true;
var BoxItem = class extends Item {
/**
* @param {Object} data             Object containing parameters start
*                                  content, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} [options]        Configuration options
*                                  // TODO: describe available options
*/
constructor(data, conversion, options) {
super(data, conversion, options);
this.props = {
dot: {
width: 0,
height: 0
},
line: {
width: 0,
height: 0
}
};
if (data) {
if (data.start == void 0) {
throw new Error(`Property "start" missing in item ${data}`);
}
}
}
/**
* Check whether this item is visible inside given range
* @param {{start: number, end: number}} range with a timestamp for start and end
* @returns {boolean} True if visible
*/
isVisible(range) {
if (this.cluster) {
return false;
}
let isVisible;
const align = this.data.align || this.options.align;
const widthInMs = this.width * range.getMillisecondsPerPixel();
if (align == "right") {
isVisible = this.data.start.getTime() > range.start && this.data.start.getTime() - widthInMs < range.end;
} else if (align == "left") {
isVisible = this.data.start.getTime() + widthInMs > range.start && this.data.start.getTime() < range.end;
} else {
isVisible = this.data.start.getTime() + widthInMs / 2 > range.start && this.data.start.getTime() - widthInMs / 2 < range.end;
}
return isVisible;
}
/**
* create DOM element
* @private
*/
_createDomElement() {
if (!this.dom) {
this.dom = {};
this.dom.box = document.createElement("DIV");
this.dom.content = document.createElement("DIV");
this.dom.content.className = "vis-item-content";
this.dom.box.appendChild(this.dom.content);
this.dom.line = document.createElement("DIV");
this.dom.line.className = "vis-line";
this.dom.dot = document.createElement("DIV");
this.dom.dot.className = "vis-dot";
this.dom.box["vis-item"] = this;
this.dirty = true;
}
}
/**
* append DOM element
* @private
*/
_appendDomElement() {
if (!this.parent) {
throw new Error("Cannot redraw item: no parent attached");
}
if (!this.dom.box.parentNode) {
const foreground = this.parent.dom.foreground;
if (!foreground) throw new Error("Cannot redraw item: parent has no foreground container element");
foreground.appendChild(this.dom.box);
}
if (!this.dom.line.parentNode) {
var background = this.parent.dom.background;
if (!background) throw new Error("Cannot redraw item: parent has no background container element");
background.appendChild(this.dom.line);
}
if (!this.dom.dot.parentNode) {
const axis = this.parent.dom.axis;
if (!background) throw new Error("Cannot redraw item: parent has no axis container element");
axis.appendChild(this.dom.dot);
}
this.displayed = true;
}
/**
* update dirty DOM element
* @private
*/
_updateDirtyDomComponents() {
if (this.dirty) {
this._updateContents(this.dom.content);
this._updateDataAttributes(this.dom.box);
this._updateStyle(this.dom.box);
const editable = this.editable.updateTime || this.editable.updateGroup;
const className = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (editable ? " vis-editable" : " vis-readonly");
this.dom.box.className = `vis-item vis-box${className}`;
this.dom.line.className = `vis-item vis-line${className}`;
this.dom.dot.className = `vis-item vis-dot${className}`;
}
}
/**
* get DOM components sizes
* @return {object}
* @private
*/
_getDomComponentsSizes() {
return {
previous: {
right: this.dom.box.style.right,
left: this.dom.box.style.left
},
dot: {
height: this.dom.dot.offsetHeight,
width: this.dom.dot.offsetWidth
},
line: {
width: this.dom.line.offsetWidth
},
box: {
width: this.dom.box.offsetWidth,
height: this.dom.box.offsetHeight
}
};
}
/**
* update DOM components sizes
* @param {object} sizes
* @private
*/
_updateDomComponentsSizes(sizes) {
if (this.options.rtl) {
this.dom.box.style.right = "0px";
} else {
this.dom.box.style.left = "0px";
}
this.props.dot.height = sizes.dot.height;
this.props.dot.width = sizes.dot.width;
this.props.line.width = sizes.line.width;
this.width = sizes.box.width;
this.height = sizes.box.height;
if (this.options.rtl) {
this.dom.box.style.right = sizes.previous.right;
} else {
this.dom.box.style.left = sizes.previous.left;
}
this.dirty = false;
}
/**
* repaint DOM additionals
* @private
*/
_repaintDomAdditionals() {
this._repaintOnItemUpdateTimeTooltip(this.dom.box);
this._repaintDragCenter();
this._repaintDeleteButton(this.dom.box);
}
/**
* Repaint the item
* @param {boolean} [returnQueue=false]  return the queue
* @return {boolean} the redraw queue if returnQueue=true
*/
redraw(returnQueue) {
let sizes;
const queue = [
this._createDomElement.bind(this),
this._appendDomElement.bind(this),
this._updateDirtyDomComponents.bind(this),
() => {
if (this.dirty) {
sizes = this._getDomComponentsSizes();
}
},
() => {
if (this.dirty) {
this._updateDomComponentsSizes.bind(this)(sizes);
}
},
this._repaintDomAdditionals.bind(this)
];
if (returnQueue) {
return queue;
} else {
let result;
queue.forEach((fn) => {
result = fn();
});
return result;
}
}
/**
* Show the item in the DOM (when not already visible). The items DOM will
* be created when needed.
* @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
* @return {boolean} the redraw queue if returnQueue=true
*/
show(returnQueue) {
if (!this.displayed) {
return this.redraw(returnQueue);
}
}
/**
* Hide the item from the DOM (when visible)
*/
hide() {
if (this.displayed) {
const dom2 = this.dom;
if (dom2.box.remove) dom2.box.remove();
else if (dom2.box.parentNode) dom2.box.parentNode.removeChild(dom2.box);
if (dom2.line.remove) dom2.line.remove();
else if (dom2.line.parentNode) dom2.line.parentNode.removeChild(dom2.line);
if (dom2.dot.remove) dom2.dot.remove();
else if (dom2.dot.parentNode) dom2.dot.parentNode.removeChild(dom2.dot);
this.displayed = false;
}
}
/**
* Reposition the item XY
*/
repositionXY() {
const rtl = this.options.rtl;
const repositionXY = (element, x, y, rtl2 = false) => {
if (x === void 0 && y === void 0) return;
const directionX = rtl2 ? x * -1 : x;
if (y === void 0) {
element.style.transform = `translateX(${directionX}px)`;
return;
}
if (x === void 0) {
element.style.transform = `translateY(${y}px)`;
return;
}
element.style.transform = `translate(${directionX}px, ${y}px)`;
};
repositionXY(this.dom.box, this.boxX, this.boxY, rtl);
repositionXY(this.dom.dot, this.dotX, this.dotY, rtl);
repositionXY(this.dom.line, this.lineX, this.lineY, rtl);
}
/**
* Reposition the item horizontally
* @Override
*/
repositionX() {
const start = this.conversion.toScreen(this.data.start);
const align = this.data.align === void 0 ? this.options.align : this.data.align;
const lineWidth = this.props.line.width;
const dotWidth = this.props.dot.width;
if (align == "right") {
this.boxX = start - this.width;
this.lineX = start - lineWidth;
this.dotX = start - lineWidth / 2 - dotWidth / 2;
} else if (align == "left") {
this.boxX = start;
this.lineX = start;
this.dotX = start + lineWidth / 2 - dotWidth / 2;
} else {
this.boxX = start - this.width / 2;
this.lineX = this.options.rtl ? start - lineWidth : start - lineWidth / 2;
this.dotX = start - dotWidth / 2;
}
if (this.options.rtl)
this.right = this.boxX;
else
this.left = this.boxX;
this.repositionXY();
}
/**
* Reposition the item vertically
* @Override
*/
repositionY() {
const orientation = this.options.orientation.item;
const lineStyle = this.dom.line.style;
if (orientation == "top") {
const lineHeight = this.parent.top + this.top + 1;
this.boxY = this.top || 0;
lineStyle.height = `${lineHeight}px`;
lineStyle.bottom = "";
lineStyle.top = "0";
} else {
const itemSetHeight = this.parent.itemSet.props.height;
const lineHeight = itemSetHeight - this.parent.top - this.parent.height + this.top;
this.boxY = this.parent.height - this.top - (this.height || 0);
lineStyle.height = `${lineHeight}px`;
lineStyle.top = "";
lineStyle.bottom = "0";
}
this.dotY = -this.props.dot.height / 2;
this.repositionXY();
}
/**
* Return the width of the item left from its start date
* @return {number}
*/
getWidthLeft() {
return this.width / 2;
}
/**
* Return the width of the item right from its start date
* @return {number}
*/
getWidthRight() {
return this.width / 2;
}
};
var PointItem = class extends Item {
/**
* @param {Object} data             Object containing parameters start
*                                  content, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} [options]        Configuration options
*                                  // TODO: describe available options
*/
constructor(data, conversion, options) {
super(data, conversion, options);
this.props = {
dot: {
top: 0,
width: 0,
height: 0
},
content: {
height: 0,
marginLeft: 0,
marginRight: 0
}
};
if (data) {
if (data.start == void 0) {
throw new Error(`Property "start" missing in item ${data}`);
}
}
}
/**
* Check whether this item is visible inside given range
* @param {{start: number, end: number}} range with a timestamp for start and end
* @returns {boolean} True if visible
*/
isVisible(range) {
if (this.cluster) {
return false;
}
const widthInMs = this.width * range.getMillisecondsPerPixel();
return this.data.start.getTime() + widthInMs > range.start && this.data.start < range.end;
}
/**
* create DOM element
* @private
*/
_createDomElement() {
if (!this.dom) {
this.dom = {};
this.dom.point = document.createElement("div");
this.dom.content = document.createElement("div");
this.dom.content.className = "vis-item-content";
this.dom.point.appendChild(this.dom.content);
this.dom.dot = document.createElement("div");
this.dom.point.appendChild(this.dom.dot);
this.dom.point["vis-item"] = this;
this.dirty = true;
}
}
/**
* append DOM element
* @private
*/
_appendDomElement() {
if (!this.parent) {
throw new Error("Cannot redraw item: no parent attached");
}
if (!this.dom.point.parentNode) {
const foreground = this.parent.dom.foreground;
if (!foreground) {
throw new Error("Cannot redraw item: parent has no foreground container element");
}
foreground.appendChild(this.dom.point);
}
this.displayed = true;
}
/**
* update dirty DOM components
* @private
*/
_updateDirtyDomComponents() {
if (this.dirty) {
this._updateContents(this.dom.content);
this._updateDataAttributes(this.dom.point);
this._updateStyle(this.dom.point);
const editable = this.editable.updateTime || this.editable.updateGroup;
const className = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (editable ? " vis-editable" : " vis-readonly");
this.dom.point.className = `vis-item vis-point${className}`;
this.dom.dot.className = `vis-item vis-dot${className}`;
}
}
/**
* get DOM component sizes
* @return {object}
* @private
*/
_getDomComponentsSizes() {
return {
dot: {
width: this.dom.dot.offsetWidth,
height: this.dom.dot.offsetHeight
},
content: {
width: this.dom.content.offsetWidth,
height: this.dom.content.offsetHeight
},
point: {
width: this.dom.point.offsetWidth,
height: this.dom.point.offsetHeight
}
};
}
/**
* update DOM components sizes
* @param {array} sizes
* @private
*/
_updateDomComponentsSizes(sizes) {
this.props.dot.width = sizes.dot.width;
this.props.dot.height = sizes.dot.height;
this.props.content.height = sizes.content.height;
if (this.options.rtl) {
this.dom.content.style.marginRight = `${this.props.dot.width / 2}px`;
} else {
this.dom.content.style.marginLeft = `${this.props.dot.width / 2}px`;
}
this.width = sizes.point.width;
this.height = sizes.point.height;
this.dom.dot.style.top = `${(this.height - this.props.dot.height) / 2}px`;
const dotWidth = this.props.dot.width;
const translateX = this.options.rtl ? dotWidth / 2 : dotWidth / 2 * -1;
this.dom.dot.style.transform = `translateX(${translateX}px`;
this.dirty = false;
}
/**
* Repain DOM additionals
* @private
*/
_repaintDomAdditionals() {
this._repaintOnItemUpdateTimeTooltip(this.dom.point);
this._repaintDragCenter();
this._repaintDeleteButton(this.dom.point);
}
/**
* Repaint the item
* @param {boolean} [returnQueue=false]  return the queue
* @return {boolean} the redraw queue if returnQueue=true
*/
redraw(returnQueue) {
let sizes;
const queue = [
this._createDomElement.bind(this),
this._appendDomElement.bind(this),
this._updateDirtyDomComponents.bind(this),
() => {
if (this.dirty) {
sizes = this._getDomComponentsSizes();
}
},
() => {
if (this.dirty) {
this._updateDomComponentsSizes.bind(this)(sizes);
}
},
this._repaintDomAdditionals.bind(this)
];
if (returnQueue) {
return queue;
} else {
let result;
queue.forEach((fn) => {
result = fn();
});
return result;
}
}
/**
* Reposition XY
*/
repositionXY() {
const rtl = this.options.rtl;
const repositionXY = (element, x, y, rtl2 = false) => {
if (x === void 0 && y === void 0) return;
const directionX = rtl2 ? x * -1 : x;
if (y === void 0) {
element.style.transform = `translateX(${directionX}px)`;
return;
}
if (x === void 0) {
element.style.transform = `translateY(${y}px)`;
return;
}
element.style.transform = `translate(${directionX}px, ${y}px)`;
};
repositionXY(this.dom.point, this.pointX, this.pointY, rtl);
}
/**
* Show the item in the DOM (when not already visible). The items DOM will
* be created when needed.
* @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
* @return {boolean} the redraw queue if returnQueue=true
*/
show(returnQueue) {
if (!this.displayed) {
return this.redraw(returnQueue);
}
}
/**
* Hide the item from the DOM (when visible)
*/
hide() {
if (this.displayed) {
if (this.dom.point.parentNode) {
this.dom.point.parentNode.removeChild(this.dom.point);
}
this.displayed = false;
}
}
/**
* Reposition the item horizontally
* @Override
*/
repositionX() {
const start = this.conversion.toScreen(this.data.start);
this.pointX = start;
if (this.options.rtl) {
this.right = start - this.props.dot.width;
} else {
this.left = start - this.props.dot.width;
}
this.repositionXY();
}
/**
* Reposition the item vertically
* @Override
*/
repositionY() {
const orientation = this.options.orientation.item;
if (orientation == "top") {
this.pointY = this.top;
} else {
this.pointY = this.parent.height - this.top - this.height;
}
this.repositionXY();
}
/**
* Return the width of the item left from its start date
* @return {number}
*/
getWidthLeft() {
return this.props.dot.width;
}
/**
* Return the width of the item right from  its start date
* @return {number}
*/
getWidthRight() {
return this.props.dot.width;
}
};
var RangeItem = class extends Item {
/**
* @param {Object} data             Object containing parameters start, end
*                                  content, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} [options]        Configuration options
*                                  // TODO: describe options
*/
constructor(data, conversion, options) {
super(data, conversion, options);
this.props = {
content: {
width: 0
}
};
this.overflow = false;
if (data) {
if (data.start == void 0) {
throw new Error(`Property "start" missing in item ${data.id}`);
}
if (data.end == void 0) {
throw new Error(`Property "end" missing in item ${data.id}`);
}
}
}
/**
* Check whether this item is visible inside given range
*
* @param {timeline.Range} range with a timestamp for start and end
* @returns {boolean} True if visible
*/
isVisible(range) {
if (this.cluster) {
return false;
}
return this.data.start < range.end && this.data.end > range.start;
}
/**
* create DOM elements
* @private
*/
_createDomElement() {
if (!this.dom) {
this.dom = {};
this.dom.box = document.createElement("div");
this.dom.frame = document.createElement("div");
this.dom.frame.className = "vis-item-overflow";
this.dom.box.appendChild(this.dom.frame);
this.dom.visibleFrame = document.createElement("div");
this.dom.visibleFrame.className = "vis-item-visible-frame";
this.dom.box.appendChild(this.dom.visibleFrame);
this.dom.content = document.createElement("div");
this.dom.content.className = "vis-item-content";
this.dom.frame.appendChild(this.dom.content);
this.dom.box["vis-item"] = this;
this.dirty = true;
}
}
/**
* append element to DOM
* @private
*/
_appendDomElement() {
if (!this.parent) {
throw new Error("Cannot redraw item: no parent attached");
}
if (!this.dom.box.parentNode) {
const foreground = this.parent.dom.foreground;
if (!foreground) {
throw new Error("Cannot redraw item: parent has no foreground container element");
}
foreground.appendChild(this.dom.box);
}
this.displayed = true;
}
/**
* update dirty DOM components
* @private
*/
_updateDirtyDomComponents() {
if (this.dirty) {
this._updateContents(this.dom.content);
this._updateDataAttributes(this.dom.box);
this._updateStyle(this.dom.box);
const editable = this.editable.updateTime || this.editable.updateGroup;
const className = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + (editable ? " vis-editable" : " vis-readonly");
this.dom.box.className = this.baseClassName + className;
this.dom.content.style.maxWidth = "none";
}
}
/**
* get DOM component sizes
* @return {object}
* @private
*/
_getDomComponentsSizes() {
this.overflow = window.getComputedStyle(this.dom.frame).overflow !== "hidden";
this.whiteSpace = window.getComputedStyle(this.dom.content).whiteSpace !== "nowrap";
return {
content: {
width: this.dom.content.offsetWidth
},
box: {
height: this.dom.box.offsetHeight
}
};
}
/**
* update DOM component sizes
* @param {array} sizes
* @private
*/
_updateDomComponentsSizes(sizes) {
this.props.content.width = sizes.content.width;
this.height = sizes.box.height;
this.dom.content.style.maxWidth = "";
this.dirty = false;
}
/**
* repaint DOM additional components
* @private
*/
_repaintDomAdditionals() {
this._repaintOnItemUpdateTimeTooltip(this.dom.box);
this._repaintDeleteButton(this.dom.box);
this._repaintDragCenter();
this._repaintDragLeft();
this._repaintDragRight();
}
/**
* Repaint the item
* @param {boolean} [returnQueue=false]  return the queue
* @return {boolean} the redraw queue if returnQueue=true
*/
redraw(returnQueue) {
let sizes;
const queue = [
this._createDomElement.bind(this),
this._appendDomElement.bind(this),
this._updateDirtyDomComponents.bind(this),
() => {
if (this.dirty) {
sizes = this._getDomComponentsSizes.bind(this)();
}
},
() => {
if (this.dirty) {
this._updateDomComponentsSizes.bind(this)(sizes);
}
},
this._repaintDomAdditionals.bind(this)
];
if (returnQueue) {
return queue;
} else {
let result;
queue.forEach((fn) => {
result = fn();
});
return result;
}
}
/**
* Show the item in the DOM (when not already visible). The items DOM will
* be created when needed.
* @param {boolean} [returnQueue=false]  whether to return a queue of functions to execute instead of just executing them
* @return {boolean} the redraw queue if returnQueue=true
*/
show(returnQueue) {
if (!this.displayed) {
return this.redraw(returnQueue);
}
}
/**
* Hide the item from the DOM (when visible)
*/
hide() {
if (this.displayed) {
const box = this.dom.box;
if (box.parentNode) {
box.parentNode.removeChild(box);
}
this.displayed = false;
}
}
/**
* Reposition the item horizontally
* @param {boolean} [limitSize=true] If true (default), the width of the range
*                                   item will be limited, as the browser cannot
*                                   display very wide divs. This means though
*                                   that the applied left and width may
*                                   not correspond to the ranges start and end
* @Override
*/
repositionX(limitSize) {
const parentWidth = this.parent.width;
let start = this.conversion.toScreen(this.data.start);
let end = this.conversion.toScreen(this.data.end);
const align = this.data.align === void 0 ? this.options.align : this.data.align;
let contentStartPosition;
let contentWidth;
if (this.data.limitSize !== false && (limitSize === void 0 || limitSize === true)) {
if (start < -parentWidth) {
start = -parentWidth;
}
if (end > 2 * parentWidth) {
end = 2 * parentWidth;
}
}
const boxWidth = Math.max(Math.round((end - start) * 1e3) / 1e3, 1);
if (this.overflow) {
if (this.options.rtl) {
this.right = start;
} else {
this.left = start;
}
this.width = boxWidth + this.props.content.width;
contentWidth = this.props.content.width;
} else {
if (this.options.rtl) {
this.right = start;
} else {
this.left = start;
}
this.width = boxWidth;
contentWidth = Math.min(end - start, this.props.content.width);
}
if (this.options.rtl) {
this.dom.box.style.transform = `translateX(${this.right * -1}px)`;
} else {
this.dom.box.style.transform = `translateX(${this.left}px)`;
}
this.dom.box.style.width = `${boxWidth}px`;
if (this.whiteSpace) {
this.height = this.dom.box.offsetHeight;
}
switch (align) {
case "left":
this.dom.content.style.transform = "translateX(0)";
break;
case "right":
if (this.options.rtl) {
const translateX = Math.max(boxWidth - contentWidth, 0) * -1;
this.dom.content.style.transform = `translateX(${translateX}px)`;
} else {
this.dom.content.style.transform = `translateX(${Math.max(boxWidth - contentWidth, 0)}px)`;
}
break;
case "center":
if (this.options.rtl) {
const translateX = Math.max((boxWidth - contentWidth) / 2, 0) * -1;
this.dom.content.style.transform = `translateX(${translateX}px)`;
} else {
this.dom.content.style.transform = `translateX(${Math.max((boxWidth - contentWidth) / 2, 0)}px)`;
}
break;
default:
if (this.overflow) {
if (end > 0) {
contentStartPosition = Math.max(-start, 0);
} else {
contentStartPosition = -contentWidth;
}
} else {
if (start < 0) {
contentStartPosition = -start;
} else {
contentStartPosition = 0;
}
}
if (this.options.rtl) {
const translateX = contentStartPosition * -1;
this.dom.content.style.transform = `translateX(${translateX}px)`;
} else {
this.dom.content.style.transform = `translateX(${contentStartPosition}px)`;
}
}
}
/**
* Reposition the item vertically
* @Override
*/
repositionY() {
const orientation = this.options.orientation.item;
const box = this.dom.box;
if (orientation == "top") {
box.style.top = `${this.top}px`;
} else {
box.style.top = `${this.parent.height - this.top - this.height}px`;
}
}
/**
* Repaint a drag area on the left side of the range when the range is selected
* @protected
*/
_repaintDragLeft() {
if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragLeft) {
const dragLeft = document.createElement("div");
dragLeft.className = "vis-drag-left";
dragLeft.dragLeftItem = this;
this.dom.box.appendChild(dragLeft);
this.dom.dragLeft = dragLeft;
} else if (!this.selected && !this.options.itemsAlwaysDraggable.range && this.dom.dragLeft) {
if (this.dom.dragLeft.parentNode) {
this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft);
}
this.dom.dragLeft = null;
}
}
/**
* Repaint a drag area on the right side of the range when the range is selected
* @protected
*/
_repaintDragRight() {
if ((this.selected || this.options.itemsAlwaysDraggable.range) && this.editable.updateTime && !this.dom.dragRight) {
const dragRight = document.createElement("div");
dragRight.className = "vis-drag-right";
dragRight.dragRightItem = this;
this.dom.box.appendChild(dragRight);
this.dom.dragRight = dragRight;
} else if (!this.selected && !this.options.itemsAlwaysDraggable.range && this.dom.dragRight) {
if (this.dom.dragRight.parentNode) {
this.dom.dragRight.parentNode.removeChild(this.dom.dragRight);
}
this.dom.dragRight = null;
}
}
};
RangeItem.prototype.baseClassName = "vis-item vis-range";
var BackgroundItem = class extends Item {
/**
* @constructor BackgroundItem
* @param {Object} data             Object containing parameters start, end
*                                  content, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} [options]        Configuration options
*                                  // TODO: describe options
* // TODO: implement support for the BackgroundItem just having a start, then being displayed as a sort of an annotation
*/
constructor(data, conversion, options) {
super(data, conversion, options);
this.props = {
content: {
width: 0
}
};
this.overflow = false;
if (data) {
if (data.start == void 0) {
throw new Error(`Property "start" missing in item ${data.id}`);
}
if (data.end == void 0) {
throw new Error(`Property "end" missing in item ${data.id}`);
}
}
}
/**
* Check whether this item is visible inside given range
* @param {timeline.Range} range with a timestamp for start and end
* @returns {boolean} True if visible
*/
isVisible(range) {
return this.data.start < range.end && this.data.end > range.start;
}
/**
* create DOM element
* @private
*/
_createDomElement() {
if (!this.dom) {
this.dom = {};
this.dom.box = document.createElement("div");
this.dom.frame = document.createElement("div");
this.dom.frame.className = "vis-item-overflow";
this.dom.box.appendChild(this.dom.frame);
this.dom.content = document.createElement("div");
this.dom.content.className = "vis-item-content";
this.dom.frame.appendChild(this.dom.content);
this.dirty = true;
}
}
/**
* append DOM element
* @private
*/
_appendDomElement() {
if (!this.parent) {
throw new Error("Cannot redraw item: no parent attached");
}
if (!this.dom.box.parentNode) {
const background = this.parent.dom.background;
if (!background) {
throw new Error("Cannot redraw item: parent has no background container element");
}
background.appendChild(this.dom.box);
}
this.displayed = true;
}
/**
* update DOM Dirty components
* @private
*/
_updateDirtyDomComponents() {
if (this.dirty) {
this._updateContents(this.dom.content);
this._updateDataAttributes(this.dom.content);
this._updateStyle(this.dom.box);
const className = (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "");
this.dom.box.className = this.baseClassName + className;
}
}
/**
* get DOM components sizes
* @return {object}
* @private
*/
_getDomComponentsSizes() {
this.overflow = window.getComputedStyle(this.dom.content).overflow !== "hidden";
return {
content: {
width: this.dom.content.offsetWidth
}
};
}
/**
* update DOM components sizes
* @param {object} sizes
* @private
*/
_updateDomComponentsSizes(sizes) {
this.props.content.width = sizes.content.width;
this.height = 0;
this.dirty = false;
}
/**
* repaint DOM additionals
* @private
*/
_repaintDomAdditionals() {
}
/**
* Repaint the item
* @param {boolean} [returnQueue=false]  return the queue
* @return {boolean} the redraw result or the redraw queue if returnQueue=true
*/
redraw(returnQueue) {
let sizes;
const queue = [
this._createDomElement.bind(this),
this._appendDomElement.bind(this),
this._updateDirtyDomComponents.bind(this),
() => {
if (this.dirty) {
sizes = this._getDomComponentsSizes.bind(this)();
}
},
() => {
if (this.dirty) {
this._updateDomComponentsSizes.bind(this)(sizes);
}
},
this._repaintDomAdditionals.bind(this)
];
if (returnQueue) {
return queue;
} else {
let result;
queue.forEach((fn) => {
result = fn();
});
return result;
}
}
/**
* Reposition the item vertically
* @Override
*/
repositionY(margin) {
let height;
const orientation = this.options.orientation.item;
if (this.data.subgroup !== void 0) {
const itemSubgroup = this.data.subgroup;
this.dom.box.style.height = `${this.parent.subgroups[itemSubgroup].height}px`;
if (orientation == "top") {
this.dom.box.style.top = `${this.parent.top + this.parent.subgroups[itemSubgroup].top}px`;
} else {
this.dom.box.style.top = `${this.parent.top + this.parent.height - this.parent.subgroups[itemSubgroup].top - this.parent.subgroups[itemSubgroup].height}px`;
}
this.dom.box.style.bottom = "";
} else {
if (this.parent instanceof BackgroundGroup) {
height = Math.max(
this.parent.height,
this.parent.itemSet.body.domProps.center.height,
this.parent.itemSet.body.domProps.centerContainer.height
);
this.dom.box.style.bottom = orientation == "bottom" ? "0" : "";
this.dom.box.style.top = orientation == "top" ? "0" : "";
} else {
height = this.parent.height;
this.dom.box.style.top = `${this.parent.top}px`;
this.dom.box.style.bottom = "";
}
}
this.dom.box.style.height = `${height}px`;
}
};
BackgroundItem.prototype.baseClassName = "vis-item vis-background";
BackgroundItem.prototype.stack = false;
BackgroundItem.prototype.show = RangeItem.prototype.show;
BackgroundItem.prototype.hide = RangeItem.prototype.hide;
BackgroundItem.prototype.repositionX = RangeItem.prototype.repositionX;
var Popup3 = class {
/**
* @param {Element} container       The container object.
* @param {string}  overflowMethod  How the popup should act to overflowing ('flip', 'cap' or 'none')
*/
constructor(container, overflowMethod) {
this.container = container;
this.overflowMethod = overflowMethod || "cap";
this.x = 0;
this.y = 0;
this.padding = 5;
this.hidden = false;
this.frame = document.createElement("div");
this.frame.className = "vis-tooltip";
this.container.appendChild(this.frame);
}
/**
* @param {number} x   Horizontal position of the popup window
* @param {number} y   Vertical position of the popup window
*/
setPosition(x, y) {
this.x = parseInt(x);
this.y = parseInt(y);
}
/**
* Set the content for the popup window. This can be HTML code or text.
* @param {string | Element} content
*/
setText(content) {
if (content instanceof Element) {
this.frame.innerHTML = "";
this.frame.appendChild(content);
} else {
this.frame.innerHTML = availableUtils.xss(content);
}
}
/**
* Show the popup window
* @param {boolean} [doShow]    Show or hide the window
*/
show(doShow) {
if (doShow === void 0) {
doShow = true;
}
if (doShow === true) {
var height = this.frame.clientHeight;
var width = this.frame.clientWidth;
var maxHeight = this.frame.parentNode.clientHeight;
var maxWidth = this.frame.parentNode.clientWidth;
var left = 0, top = 0;
if (this.overflowMethod == "flip" || this.overflowMethod == "none") {
let isLeft = false, isTop = true;
if (this.overflowMethod == "flip") {
if (this.y - height < this.padding) {
isTop = false;
}
if (this.x + width > maxWidth - this.padding) {
isLeft = true;
}
}
if (isLeft) {
left = this.x - width;
} else {
left = this.x;
}
if (isTop) {
top = this.y - height;
} else {
top = this.y;
}
} else {
top = this.y - height;
if (top + height + this.padding > maxHeight) {
top = maxHeight - height - this.padding;
}
if (top < this.padding) {
top = this.padding;
}
left = this.x;
if (left + width + this.padding > maxWidth) {
left = maxWidth - width - this.padding;
}
if (left < this.padding) {
left = this.padding;
}
}
this.frame.style.left = left + "px";
this.frame.style.top = top + "px";
this.frame.style.visibility = "visible";
this.hidden = false;
} else {
this.hide();
}
}
/**
* Hide the popup window
*/
hide() {
this.hidden = true;
this.frame.style.left = "0";
this.frame.style.top = "0";
this.frame.style.visibility = "hidden";
}
/**
* Remove the popup window
*/
destroy() {
this.frame.parentNode.removeChild(this.frame);
}
};
var ClusterItem = class _ClusterItem extends Item {
/**
* @constructor Item
* @param {Object} data             Object containing (optional) parameters type,
*                                  start, end, content, group, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} options          Configuration options
*                                  // TODO: describe available options
*/
constructor(data, conversion, options) {
const modifiedOptions = Object.assign({}, { fitOnDoubleClick: true }, options, { editable: false });
super(data, conversion, modifiedOptions);
this.props = {
content: {
width: 0,
height: 0
}
};
if (!data || data.uiItems == void 0) {
throw new Error('Property "uiItems" missing in item ' + data.id);
}
this.id = v4_default();
this.group = data.group;
this._setupRange();
this.emitter = this.data.eventEmitter;
this.range = this.data.range;
this.attached = false;
this.isCluster = true;
this.data.isCluster = true;
}
/**
* check if there are items
* @return {boolean}
*/
hasItems() {
return this.data.uiItems && this.data.uiItems.length && this.attached;
}
/**
* set UI items
* @param {array} items
*/
setUiItems(items) {
this.detach();
this.data.uiItems = items;
this._setupRange();
this.attach();
}
/**
* check is visible
* @param {object} range
* @return {boolean}
*/
isVisible(range) {
const rangeWidth = this.data.end ? this.data.end - this.data.start : 0;
const widthInMs = this.width * range.getMillisecondsPerPixel();
const end = Math.max(this.data.start.getTime() + rangeWidth, this.data.start.getTime() + widthInMs);
return this.data.start < range.end && end > range.start && this.hasItems();
}
/**
* get cluster data
* @return {object}
*/
getData() {
return {
isCluster: true,
id: this.id,
items: this.data.items || [],
data: this.data
};
}
/**
* redraw cluster item
* @param {boolean} returnQueue
* @return {boolean}
*/
redraw(returnQueue) {
var sizes;
var queue = [
this._createDomElement.bind(this),
this._appendDomElement.bind(this),
this._updateDirtyDomComponents.bind(this),
function() {
if (this.dirty) {
sizes = this._getDomComponentsSizes();
}
}.bind(this),
function() {
if (this.dirty) {
this._updateDomComponentsSizes.bind(this)(sizes);
}
}.bind(this),
this._repaintDomAdditionals.bind(this)
];
if (returnQueue) {
return queue;
} else {
var result;
queue.forEach(function(fn) {
result = fn();
});
return result;
}
}
/**
* show cluster item
*/
show() {
if (!this.displayed) {
this.redraw();
}
}
/**
* Hide the item from the DOM (when visible)
*/
hide() {
if (this.displayed) {
var dom2 = this.dom;
if (dom2.box.parentNode) {
dom2.box.parentNode.removeChild(dom2.box);
}
if (this.options.showStipes) {
if (dom2.line.parentNode) {
dom2.line.parentNode.removeChild(dom2.line);
}
if (dom2.dot.parentNode) {
dom2.dot.parentNode.removeChild(dom2.dot);
}
}
this.displayed = false;
}
}
/**
* reposition item x axis
*/
repositionX() {
let start = this.conversion.toScreen(this.data.start);
let end = this.data.end ? this.conversion.toScreen(this.data.end) : 0;
if (end) {
this.repositionXWithRanges(start, end);
} else {
let align = this.data.align === void 0 ? this.options.align : this.data.align;
this.repositionXWithoutRanges(start, align);
}
if (this.options.showStipes) {
this.dom.line.style.display = this._isStipeVisible() ? "block" : "none";
this.dom.dot.style.display = this._isStipeVisible() ? "block" : "none";
if (this._isStipeVisible()) {
this.repositionStype(start, end);
}
}
}
/**
* reposition item stype
* @param {date} start
* @param {date} end
*/
repositionStype(start, end) {
this.dom.line.style.display = "block";
this.dom.dot.style.display = "block";
const lineOffsetWidth = this.dom.line.offsetWidth;
const dotOffsetWidth = this.dom.dot.offsetWidth;
if (end) {
const lineOffset = lineOffsetWidth + start + (end - start) / 2;
const dotOffset = lineOffset - dotOffsetWidth / 2;
const lineOffsetDirection = this.options.rtl ? lineOffset * -1 : lineOffset;
const dotOffsetDirection = this.options.rtl ? dotOffset * -1 : dotOffset;
this.dom.line.style.transform = `translateX(${lineOffsetDirection}px)`;
this.dom.dot.style.transform = `translateX(${dotOffsetDirection}px)`;
} else {
const lineOffsetDirection = this.options.rtl ? start * -1 : start;
const dotOffsetDirection = this.options.rtl ? (start - dotOffsetWidth / 2) * -1 : start - dotOffsetWidth / 2;
this.dom.line.style.transform = `translateX(${lineOffsetDirection}px)`;
this.dom.dot.style.transform = `translateX(${dotOffsetDirection}px)`;
}
}
/**
* reposition x without ranges
* @param {date} start
* @param {string} align
*/
repositionXWithoutRanges(start, align) {
if (align == "right") {
if (this.options.rtl) {
this.right = start - this.width;
this.dom.box.style.right = this.right + "px";
} else {
this.left = start - this.width;
this.dom.box.style.left = this.left + "px";
}
} else if (align == "left") {
if (this.options.rtl) {
this.right = start;
this.dom.box.style.right = this.right + "px";
} else {
this.left = start;
this.dom.box.style.left = this.left + "px";
}
} else {
if (this.options.rtl) {
this.right = start - this.width / 2;
this.dom.box.style.right = this.right + "px";
} else {
this.left = start - this.width / 2;
this.dom.box.style.left = this.left + "px";
}
}
}
/**
* reposition x with ranges
* @param {date} start
* @param {date} end
*/
repositionXWithRanges(start, end) {
let boxWidth = Math.round(Math.max(end - start + 0.5, 1));
if (this.options.rtl) {
this.right = start;
} else {
this.left = start;
}
this.width = Math.max(boxWidth, this.minWidth || 0);
if (this.options.rtl) {
this.dom.box.style.right = this.right + "px";
} else {
this.dom.box.style.left = this.left + "px";
}
this.dom.box.style.width = boxWidth + "px";
}
/**
* reposition item y axis
*/
repositionY() {
var orientation = this.options.orientation.item;
var box = this.dom.box;
if (orientation == "top") {
box.style.top = (this.top || 0) + "px";
} else {
box.style.top = (this.parent.height - this.top - this.height || 0) + "px";
}
if (this.options.showStipes) {
if (orientation == "top") {
this.dom.line.style.top = "0";
this.dom.line.style.height = this.parent.top + this.top + 1 + "px";
this.dom.line.style.bottom = "";
} else {
var itemSetHeight = this.parent.itemSet.props.height;
var lineHeight = itemSetHeight - this.parent.top - this.parent.height + this.top;
this.dom.line.style.top = itemSetHeight - lineHeight + "px";
this.dom.line.style.bottom = "0";
}
this.dom.dot.style.top = -this.dom.dot.offsetHeight / 2 + "px";
}
}
/**
* get width left
* @return {number}
*/
getWidthLeft() {
return this.width / 2;
}
/**
* get width right
* @return {number}
*/
getWidthRight() {
return this.width / 2;
}
/**
* move cluster item
*/
move() {
this.repositionX();
this.repositionY();
}
/**
* attach
*/
attach() {
for (let item of this.data.uiItems) {
item.cluster = this;
}
this.data.items = this.data.uiItems.map((item) => item.data);
this.attached = true;
this.dirty = true;
}
/**
* detach
* @param {boolean} detachFromParent
* @return {void}
*/
detach(detachFromParent = false) {
if (!this.hasItems()) {
return;
}
for (let item of this.data.uiItems) {
delete item.cluster;
}
this.attached = false;
if (detachFromParent && this.group) {
this.group.remove(this);
this.group = null;
}
this.data.items = [];
this.dirty = true;
}
/**
* handle on double click
*/
_onDoubleClick() {
this._fit();
}
/**
* set range
*/
_setupRange() {
const stats = this.data.uiItems.map((item) => ({
start: item.data.start.valueOf(),
end: item.data.end ? item.data.end.valueOf() : item.data.start.valueOf()
}));
this.data.min = Math.min(...stats.map((s) => Math.min(s.start, s.end || s.start)));
this.data.max = Math.max(...stats.map((s) => Math.max(s.start, s.end || s.start)));
const centers = this.data.uiItems.map((item) => item.center);
const avg = centers.reduce((sum, value) => sum + value, 0) / this.data.uiItems.length;
if (this.data.uiItems.some((item) => item.data.end)) {
this.data.start = new Date(this.data.min);
this.data.end = new Date(this.data.max);
} else {
this.data.start = new Date(avg);
this.data.end = null;
}
}
/**
* get UI items
* @return {array}
*/
_getUiItems() {
if (this.data.uiItems && this.data.uiItems.length) {
return this.data.uiItems.filter((item) => item.cluster === this);
}
return [];
}
/**
* create DOM element
*/
_createDomElement() {
if (!this.dom) {
this.dom = {};
this.dom.box = document.createElement("DIV");
this.dom.content = document.createElement("DIV");
this.dom.content.className = "vis-item-content";
this.dom.box.appendChild(this.dom.content);
if (this.options.showStipes) {
this.dom.line = document.createElement("DIV");
this.dom.line.className = "vis-cluster-line";
this.dom.line.style.display = "none";
this.dom.dot = document.createElement("DIV");
this.dom.dot.className = "vis-cluster-dot";
this.dom.dot.style.display = "none";
}
if (this.options.fitOnDoubleClick) {
this.dom.box.ondblclick = _ClusterItem.prototype._onDoubleClick.bind(this);
}
this.dom.box["vis-item"] = this;
this.dirty = true;
}
}
/**
* append element to DOM
*/
_appendDomElement() {
if (!this.parent) {
throw new Error("Cannot redraw item: no parent attached");
}
if (!this.dom.box.parentNode) {
const foreground = this.parent.dom.foreground;
if (!foreground) {
throw new Error("Cannot redraw item: parent has no foreground container element");
}
foreground.appendChild(this.dom.box);
}
const background = this.parent.dom.background;
if (this.options.showStipes) {
if (!this.dom.line.parentNode) {
if (!background) throw new Error("Cannot redraw item: parent has no background container element");
background.appendChild(this.dom.line);
}
if (!this.dom.dot.parentNode) {
var axis = this.parent.dom.axis;
if (!background) throw new Error("Cannot redraw item: parent has no axis container element");
axis.appendChild(this.dom.dot);
}
}
this.displayed = true;
}
/**
* update dirty DOM components
*/
_updateDirtyDomComponents() {
if (this.dirty) {
this._updateContents(this.dom.content);
this._updateDataAttributes(this.dom.box);
this._updateStyle(this.dom.box);
const className = this.baseClassName + " " + (this.data.className ? " " + this.data.className : "") + (this.selected ? " vis-selected" : "") + " vis-readonly";
this.dom.box.className = "vis-item " + className;
if (this.options.showStipes) {
this.dom.line.className = "vis-item vis-cluster-line " + (this.selected ? " vis-selected" : "");
this.dom.dot.className = "vis-item vis-cluster-dot " + (this.selected ? " vis-selected" : "");
}
if (this.data.end) {
this.dom.content.style.maxWidth = "none";
}
}
}
/**
* get DOM components sizes
* @return {object}
*/
_getDomComponentsSizes() {
const sizes = {
previous: {
right: this.dom.box.style.right,
left: this.dom.box.style.left
},
box: {
width: this.dom.box.offsetWidth,
height: this.dom.box.offsetHeight
}
};
if (this.options.showStipes) {
sizes.dot = {
height: this.dom.dot.offsetHeight,
width: this.dom.dot.offsetWidth
};
sizes.line = {
width: this.dom.line.offsetWidth
};
}
return sizes;
}
/**
* update DOM components sizes
* @param {object} sizes
*/
_updateDomComponentsSizes(sizes) {
if (this.options.rtl) {
this.dom.box.style.right = "0px";
} else {
this.dom.box.style.left = "0px";
}
if (!this.data.end) {
this.width = sizes.box.width;
} else {
this.minWidth = sizes.box.width;
}
this.height = sizes.box.height;
if (this.options.rtl) {
this.dom.box.style.right = sizes.previous.right;
} else {
this.dom.box.style.left = sizes.previous.left;
}
this.dirty = false;
}
/**
* repaint DOM additional components
*/
_repaintDomAdditionals() {
this._repaintOnItemUpdateTimeTooltip(this.dom.box);
}
/**
* check is stripe visible
* @return {number}
* @private
*/
_isStipeVisible() {
return this.minWidth >= this.width || !this.data.end;
}
/**
* get fit range
* @return {object}
* @private
*/
_getFitRange() {
const offset = 0.05 * (this.data.max - this.data.min) / 2;
return {
fitStart: this.data.min - offset,
fitEnd: this.data.max + offset
};
}
/**
* fit
* @private
*/
_fit() {
if (this.emitter) {
const { fitStart, fitEnd } = this._getFitRange();
const fitArgs = {
start: new Date(fitStart),
end: new Date(fitEnd),
animation: true
};
this.emitter.emit("fit", fitArgs);
}
}
/**
* get item data
* @return {object}
* @private
*/
_getItemData() {
return this.data;
}
};
ClusterItem.prototype.baseClassName = "vis-item vis-range vis-cluster";
var UNGROUPED$2 = "__ungrouped__";
var ReservedGroupIds = {
UNGROUPED: UNGROUPED$2
};
var ClusterGenerator = class {
/**
* @param {ItemSet} itemSet itemsSet instance
* @constructor ClusterGenerator
*/
constructor(itemSet) {
this.itemSet = itemSet;
this.groups = {};
this.cache = {};
this.cache[-1] = [];
}
/**
* @param {Object} itemData             Object containing parameters start content, className.
* @param {{toScreen: function, toTime: function}} conversion
*                                  Conversion functions from time to screen and vice versa
* @param {Object} [options]        Configuration options
* @return {Object} newItem
*/
createClusterItem(itemData, conversion, options) {
const newItem = new ClusterItem(itemData, conversion, options);
return newItem;
}
/**
* Set the items to be clustered.
* This will clear cached clusters.
* @param {Item[]} items
* @param {Object} [options]  Available options:
*                            {boolean} applyOnChangedLevel
*                                If true (default), the changed data is applied
*                                as soon the cluster level changes. If false,
*                                The changed data is applied immediately
*/
setItems(items, options) {
this.items = items || [];
this.dataChanged = true;
this.applyOnChangedLevel = false;
if (options && options.applyOnChangedLevel) {
this.applyOnChangedLevel = options.applyOnChangedLevel;
}
}
/**
* Update the current data set: clear cache, and recalculate the clustering for
* the current level
*/
updateData() {
this.dataChanged = true;
this.applyOnChangedLevel = false;
}
/**
* Cluster the items which are too close together
* @param {array} oldClusters
* @param {number} scale      The scale of the current window : (windowWidth / (endDate - startDate))
* @param {{maxItems: number, clusterCriteria: function, titleTemplate: string}} options
* @return {array} clusters
*/
getClusters(oldClusters, scale, options) {
let { maxItems, clusterCriteria } = typeof options === "boolean" ? {} : options;
if (!clusterCriteria) {
clusterCriteria = () => true;
}
maxItems = maxItems || 1;
let level = -1;
let granularity = 2;
let timeWindow = 0;
if (scale > 0) {
if (scale >= 1) {
return [];
}
level = Math.abs(Math.round(Math.log(100 / scale) / Math.log(granularity)));
timeWindow = Math.abs(Math.pow(granularity, level));
}
if (this.dataChanged) {
const levelChanged = level != this.cacheLevel;
const applyDataNow = this.applyOnChangedLevel ? levelChanged : true;
if (applyDataNow) {
this._dropLevelsCache();
this._filterData();
}
}
this.cacheLevel = level;
let clusters = this.cache[level];
if (!clusters) {
clusters = [];
for (let groupName in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupName))
continue;
const items = this.groups[groupName];
const iMax = items.length;
let i = 0;
while (i < iMax) {
let item = items[i];
let neighbors = 1;
let j = i - 1;
while (j >= 0 && item.center - items[j].center < timeWindow / 2) {
if (!items[j].cluster && clusterCriteria(item.data, items[j].data)) {
neighbors++;
}
j--;
}
let k = i + 1;
while (k < items.length && items[k].center - item.center < timeWindow / 2) {
if (clusterCriteria(item.data, items[k].data)) {
neighbors++;
}
k++;
}
let l = clusters.length - 1;
while (l >= 0 && item.center - clusters[l].center < timeWindow) {
if (item.group == clusters[l].group && clusterCriteria(item.data, clusters[l].data)) {
neighbors++;
}
l--;
}
if (neighbors > maxItems) {
const num = neighbors - maxItems + 1;
const clusterItems = [];
let m = i;
while (clusterItems.length < num && m < items.length) {
if (clusterCriteria(items[i].data, items[m].data)) {
clusterItems.push(items[m]);
}
m++;
}
const groupId = this.itemSet.getGroupId(item.data);
const group = this.itemSet.groups[groupId] || this.itemSet.groups[ReservedGroupIds.UNGROUPED];
let cluster = this._getClusterForItems(clusterItems, group, oldClusters, options);
clusters.push(cluster);
i += num;
} else {
delete item.cluster;
i += 1;
}
}
}
this.cache[level] = clusters;
}
return clusters;
}
/**
* Filter the items per group.
* @private
*/
_filterData() {
const groups = {};
this.groups = groups;
for (const item of Object.values(this.items)) {
const groupName = item.parent ? item.parent.groupId : "";
let group = groups[groupName];
if (!group) {
group = [];
groups[groupName] = group;
}
group.push(item);
if (item.data.start) {
if (item.data.end) {
item.center = (item.data.start.valueOf() + item.data.end.valueOf()) / 2;
} else {
item.center = item.data.start.valueOf();
}
}
}
for (let currentGroupName in groups) {
if (!Object.prototype.hasOwnProperty.call(groups, currentGroupName))
continue;
groups[currentGroupName].sort((a, b) => a.center - b.center);
}
this.dataChanged = false;
}
/**
* Create new cluster or return existing
* @private
* @param {array} clusterItems
* @param {object} group
* @param {array} oldClusters
* @param {object} options
* @returns {object} cluster
*/
_getClusterForItems(clusterItems, group, oldClusters, options) {
const oldClustersLookup = (oldClusters || []).map((cluster2) => ({
cluster: cluster2,
itemsIds: new Set(cluster2.data.uiItems.map((item) => item.id))
}));
let cluster;
if (oldClustersLookup.length) {
for (let oldClusterData of oldClustersLookup) {
if (oldClusterData.itemsIds.size === clusterItems.length && clusterItems.every((clusterItem) => oldClusterData.itemsIds.has(clusterItem.id))) {
cluster = oldClusterData.cluster;
break;
}
}
}
if (cluster) {
cluster.setUiItems(clusterItems);
if (cluster.group !== group) {
if (cluster.group) {
cluster.group.remove(cluster);
}
if (group) {
group.add(cluster);
cluster.group = group;
}
}
return cluster;
}
let titleTemplate = options.titleTemplate || "";
const conversion = {
toScreen: this.itemSet.body.util.toScreen,
toTime: this.itemSet.body.util.toTime
};
const title = titleTemplate.replace(/{count}/, clusterItems.length);
const clusterContent = '<div title="' + title + '">' + clusterItems.length + "</div>";
const clusterOptions = Object.assign({}, options, this.itemSet.options);
const data = {
"content": clusterContent,
"title": title,
"group": group,
"uiItems": clusterItems,
"eventEmitter": this.itemSet.body.emitter,
"range": this.itemSet.body.range
};
cluster = this.createClusterItem(
data,
conversion,
clusterOptions
);
if (group) {
group.add(cluster);
cluster.group = group;
}
cluster.attach();
return cluster;
}
/**
* Drop cache
* @private
*/
_dropLevelsCache() {
this.cache = {};
this.cacheLevel = -1;
this.cache[this.cacheLevel] = [];
}
};
var UNGROUPED$1 = "__ungrouped__";
var BACKGROUND = "__background__";
var ItemSet = class _ItemSet extends Component {
/**
* @param {{dom: Object, domProps: Object, emitter: Emitter, range: Range}} body
* @param {Object} [options]      See ItemSet.setOptions for the available options.
* @constructor ItemSet
* @extends Component
*/
constructor(body, options) {
super();
this.body = body;
this.defaultOptions = {
type: null,
orientation: {
item: "bottom"
},
align: "auto",
stack: true,
stackSubgroups: true,
groupOrderSwap(fromGroup, toGroup, groups) {
const targetOrder = toGroup.order;
toGroup.order = fromGroup.order;
fromGroup.order = targetOrder;
},
groupOrder: "order",
selectable: true,
multiselect: false,
longSelectPressTime: 251,
itemsAlwaysDraggable: {
item: false,
range: false
},
editable: {
updateTime: false,
updateGroup: false,
add: false,
remove: false,
overrideItems: false
},
groupEditable: {
order: false,
add: false,
remove: false
},
snap: TimeStep.snap,
onDropObjectOnItem(objectData, item, callback) {
callback(item);
},
onAdd(item, callback) {
callback(item);
},
onUpdate(item, callback) {
callback(item);
},
onMove(item, callback) {
callback(item);
},
onRemove(item, callback) {
callback(item);
},
onMoving(item, callback) {
callback(item);
},
onAddGroup(item, callback) {
callback(item);
},
onMoveGroup(item, callback) {
callback(item);
},
onRemoveGroup(item, callback) {
callback(item);
},
margin: {
item: {
horizontal: 10,
vertical: 10
},
axis: 20
},
showTooltips: true,
tooltip: {
followMouse: false,
overflowMethod: "flip",
delay: 500
},
tooltipOnItemUpdateTime: false
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.options.rtl = options.rtl;
this.options.onTimeout = options.onTimeout;
this.conversion = {
toScreen: body.util.toScreen,
toTime: body.util.toTime
};
this.dom = {};
this.props = {};
this.hammer = null;
const me = this;
this.itemsData = null;
this.groupsData = null;
this.itemsSettingTime = null;
this.initialItemSetDrawn = false;
this.userContinueNotBail = null;
this.sequentialSelection = false;
this.itemListeners = {
"add"(event2, params, senderId) {
me._onAdd(params.items);
if (me.options.cluster) {
me.clusterGenerator.setItems(me.items, { applyOnChangedLevel: false });
}
me.redraw();
},
"update"(event2, params, senderId) {
me._onUpdate(params.items);
if (me.options.cluster) {
me.clusterGenerator.setItems(me.items, { applyOnChangedLevel: false });
}
me.redraw();
},
"remove"(event2, params, senderId) {
me._onRemove(params.items);
if (me.options.cluster) {
me.clusterGenerator.setItems(me.items, { applyOnChangedLevel: false });
}
me.redraw();
}
};
this.groupListeners = {
"add"(event2, params, senderId) {
me._onAddGroups(params.items);
if (me.groupsData && me.groupsData.length > 0) {
const groupsData = me.groupsData.getDataSet();
groupsData.get().forEach((groupData) => {
if (groupData.nestedGroups) {
if (groupData.showNested != false) {
groupData.showNested = true;
}
let updatedGroups = [];
groupData.nestedGroups.forEach((nestedGroupId) => {
const updatedNestedGroup = groupsData.get(nestedGroupId);
if (!updatedNestedGroup) {
return;
}
updatedNestedGroup.nestedInGroup = groupData.id;
if (groupData.showNested == false) {
updatedNestedGroup.visible = false;
}
updatedGroups = updatedGroups.concat(updatedNestedGroup);
});
groupsData.update(updatedGroups, senderId);
}
});
}
},
"update"(event2, params, senderId) {
me._onUpdateGroups(params.items);
},
"remove"(event2, params, senderId) {
me._onRemoveGroups(params.items);
}
};
this.items = {};
this.groups = {};
this.groupIds = [];
this.selection = [];
this.popup = null;
this.popupTimer = null;
this.touchParams = {};
this.groupTouchParams = {
group: null,
isDragging: false
};
this._create();
this.setOptions(options);
this.clusters = [];
}
/**
* Create the HTML DOM for the ItemSet
*/
_create() {
const frame = document.createElement("div");
frame.className = "vis-itemset";
frame["vis-itemset"] = this;
this.dom.frame = frame;
const background = document.createElement("div");
background.className = "vis-background";
frame.appendChild(background);
this.dom.background = background;
const foreground = document.createElement("div");
foreground.className = "vis-foreground";
frame.appendChild(foreground);
this.dom.foreground = foreground;
const axis = document.createElement("div");
axis.className = "vis-axis";
this.dom.axis = axis;
const labelSet = document.createElement("div");
labelSet.className = "vis-labelset";
this.dom.labelSet = labelSet;
this._updateUngrouped();
const backgroundGroup = new BackgroundGroup(BACKGROUND, null, this);
backgroundGroup.show();
this.groups[BACKGROUND] = backgroundGroup;
this.hammer = new Hammer3(this.body.dom.centerContainer);
this.hammer.on("hammer.input", (event2) => {
if (event2.isFirst) {
this._onTouch(event2);
}
});
this.hammer.on("panstart", this._onDragStart.bind(this));
this.hammer.on("panmove", this._onDrag.bind(this));
this.hammer.on("panend", this._onDragEnd.bind(this));
this.hammer.get("pan").set({ threshold: 5, direction: Hammer3.ALL });
this.hammer.get("press").set({ time: 1e4 });
this.hammer.on("tap", this._onSelectItem.bind(this));
this.hammer.on("press", this._onMultiSelectItem.bind(this));
this.hammer.get("press").set({ time: 1e4 });
this.hammer.on("doubletap", this._onAddItem.bind(this));
if (this.options.rtl) {
this.groupHammer = new Hammer3(this.body.dom.rightContainer);
} else {
this.groupHammer = new Hammer3(this.body.dom.leftContainer);
}
this.groupHammer.on("tap", this._onGroupClick.bind(this));
this.groupHammer.on("panstart", this._onGroupDragStart.bind(this));
this.groupHammer.on("panmove", this._onGroupDrag.bind(this));
this.groupHammer.on("panend", this._onGroupDragEnd.bind(this));
this.groupHammer.get("pan").set({ threshold: 5, direction: Hammer3.DIRECTION_VERTICAL });
this.body.dom.centerContainer.addEventListener("mouseover", this._onMouseOver.bind(this));
this.body.dom.centerContainer.addEventListener("mouseout", this._onMouseOut.bind(this));
this.body.dom.centerContainer.addEventListener("mousemove", this._onMouseMove.bind(this));
this.body.dom.centerContainer.addEventListener("contextmenu", this._onDragEnd.bind(this));
this.body.dom.centerContainer.addEventListener("mousewheel", this._onMouseWheel.bind(this));
this.show();
}
/**
* Set options for the ItemSet. Existing options will be extended/overwritten.
* @param {Object} [options] The following options are available:
*                           {string} type
*                              Default type for the items. Choose from 'box'
*                              (default), 'point', 'range', or 'background'.
*                              The default style can be overwritten by
*                              individual items.
*                           {string} align
*                              Alignment for the items, only applicable for
*                              BoxItem. Choose 'center' (default), 'left', or
*                              'right'.
*                           {string} orientation.item
*                              Orientation of the item set. Choose 'top' or
*                              'bottom' (default).
*                           {Function} groupOrder
*                              A sorting function for ordering groups
*                           {boolean} stack
*                              If true (default), items will be stacked on
*                              top of each other.
*                           {number} margin.axis
*                              Margin between the axis and the items in pixels.
*                              Default is 20.
*                           {number} margin.item.horizontal
*                              Horizontal margin between items in pixels.
*                              Default is 10.
*                           {number} margin.item.vertical
*                              Vertical Margin between items in pixels.
*                              Default is 10.
*                           {number} margin.item
*                              Margin between items in pixels in both horizontal
*                              and vertical direction. Default is 10.
*                           {number} margin
*                              Set margin for both axis and items in pixels.
*                           {boolean} selectable
*                              If true (default), items can be selected.
*                           {boolean} multiselect
*                              If true, multiple items can be selected.
*                              False by default.
*                           {boolean} editable
*                              Set all editable options to true or false
*                           {boolean} editable.updateTime
*                              Allow dragging an item to an other moment in time
*                           {boolean} editable.updateGroup
*                              Allow dragging an item to an other group
*                           {boolean} editable.add
*                              Allow creating new items on double tap
*                           {boolean} editable.remove
*                              Allow removing items by clicking the delete button
*                              top right of a selected item.
*                           {Function(item: Item, callback: Function)} onAdd
*                              Callback function triggered when an item is about to be added:
*                              when the user double taps an empty space in the Timeline.
*                           {Function(item: Item, callback: Function)} onUpdate
*                              Callback function fired when an item is about to be updated.
*                              This function typically has to show a dialog where the user
*                              change the item. If not implemented, nothing happens.
*                           {Function(item: Item, callback: Function)} onMove
*                              Fired when an item has been moved. If not implemented,
*                              the move action will be accepted.
*                           {Function(item: Item, callback: Function)} onRemove
*                              Fired when an item is about to be deleted.
*                              If not implemented, the item will be always removed.
*/
setOptions(options) {
if (options) {
const fields = [
"type",
"rtl",
"align",
"order",
"stack",
"stackSubgroups",
"selectable",
"multiselect",
"sequentialSelection",
"multiselectPerGroup",
"longSelectPressTime",
"groupOrder",
"dataAttributes",
"template",
"groupTemplate",
"visibleFrameTemplate",
"hide",
"snap",
"groupOrderSwap",
"showTooltips",
"tooltip",
"tooltipOnItemUpdateTime",
"groupHeightMode",
"onTimeout"
];
availableUtils.selectiveExtend(fields, this.options, options);
if ("itemsAlwaysDraggable" in options) {
if (typeof options.itemsAlwaysDraggable === "boolean") {
this.options.itemsAlwaysDraggable.item = options.itemsAlwaysDraggable;
this.options.itemsAlwaysDraggable.range = false;
} else if (typeof options.itemsAlwaysDraggable === "object") {
availableUtils.selectiveExtend(["item", "range"], this.options.itemsAlwaysDraggable, options.itemsAlwaysDraggable);
if (!this.options.itemsAlwaysDraggable.item) {
this.options.itemsAlwaysDraggable.range = false;
}
}
}
if ("sequentialSelection" in options) {
if (typeof options.sequentialSelection === "boolean") {
this.options.sequentialSelection = options.sequentialSelection;
}
}
if ("orientation" in options) {
if (typeof options.orientation === "string") {
this.options.orientation.item = options.orientation === "top" ? "top" : "bottom";
} else if (typeof options.orientation === "object" && "item" in options.orientation) {
this.options.orientation.item = options.orientation.item;
}
}
if ("margin" in options) {
if (typeof options.margin === "number") {
this.options.margin.axis = options.margin;
this.options.margin.item.horizontal = options.margin;
this.options.margin.item.vertical = options.margin;
} else if (typeof options.margin === "object") {
availableUtils.selectiveExtend(["axis"], this.options.margin, options.margin);
if ("item" in options.margin) {
if (typeof options.margin.item === "number") {
this.options.margin.item.horizontal = options.margin.item;
this.options.margin.item.vertical = options.margin.item;
} else if (typeof options.margin.item === "object") {
availableUtils.selectiveExtend(["horizontal", "vertical"], this.options.margin.item, options.margin.item);
}
}
}
}
["locale", "locales"].forEach((key) => {
if (key in options) {
this.options[key] = options[key];
}
});
if ("editable" in options) {
if (typeof options.editable === "boolean") {
this.options.editable.updateTime = options.editable;
this.options.editable.updateGroup = options.editable;
this.options.editable.add = options.editable;
this.options.editable.remove = options.editable;
this.options.editable.overrideItems = false;
} else if (typeof options.editable === "object") {
availableUtils.selectiveExtend(["updateTime", "updateGroup", "add", "remove", "overrideItems"], this.options.editable, options.editable);
}
}
if ("groupEditable" in options) {
if (typeof options.groupEditable === "boolean") {
this.options.groupEditable.order = options.groupEditable;
this.options.groupEditable.add = options.groupEditable;
this.options.groupEditable.remove = options.groupEditable;
} else if (typeof options.groupEditable === "object") {
availableUtils.selectiveExtend(["order", "add", "remove"], this.options.groupEditable, options.groupEditable);
}
}
const addCallback = (name) => {
const fn = options[name];
if (fn) {
if (!(typeof fn === "function")) {
throw new Error(`option ${name} must be a function ${name}(item, callback)`);
}
this.options[name] = fn;
}
};
["onDropObjectOnItem", "onAdd", "onUpdate", "onRemove", "onMove", "onMoving", "onAddGroup", "onMoveGroup", "onRemoveGroup"].forEach(addCallback);
if (options.cluster) {
Object.assign(this.options, {
cluster: options.cluster
});
if (!this.clusterGenerator) {
this.clusterGenerator = new ClusterGenerator(this);
}
this.clusterGenerator.setItems(this.items, { applyOnChangedLevel: false });
this.markDirty({ refreshItems: true, restackGroups: true });
this.redraw();
} else if (this.clusterGenerator) {
this._detachAllClusters();
this.clusters = [];
this.clusterGenerator = null;
this.options.cluster = void 0;
this.markDirty({ refreshItems: true, restackGroups: true });
this.redraw();
} else {
this.markDirty();
}
}
}
/**
* Mark the ItemSet dirty so it will refresh everything with next redraw.
* Optionally, all items can be marked as dirty and be refreshed.
* @param {{refreshItems: boolean}} [options]
*/
markDirty(options) {
this.groupIds = [];
if (options) {
if (options.refreshItems) {
availableUtils.forEach(this.items, (item) => {
item.dirty = true;
if (item.displayed) item.redraw();
});
}
if (options.restackGroups) {
availableUtils.forEach(this.groups, (group, key) => {
if (key === BACKGROUND) return;
group.stackDirty = true;
});
}
}
}
/**
* Destroy the ItemSet
*/
destroy() {
this.clearPopupTimer();
this.hide();
this.setItems(null);
this.setGroups(null);
this.hammer && this.hammer.destroy();
this.groupHammer && this.groupHammer.destroy();
this.hammer = null;
this.body = null;
this.conversion = null;
}
/**
* Hide the component from the DOM
*/
hide() {
if (this.dom.frame.parentNode) {
this.dom.frame.parentNode.removeChild(this.dom.frame);
}
if (this.dom.axis.parentNode) {
this.dom.axis.parentNode.removeChild(this.dom.axis);
}
if (this.dom.labelSet.parentNode) {
this.dom.labelSet.parentNode.removeChild(this.dom.labelSet);
}
}
/**
* Show the component in the DOM (when not already visible).
*/
show() {
if (!this.dom.frame.parentNode) {
this.body.dom.center.appendChild(this.dom.frame);
}
if (!this.dom.axis.parentNode) {
this.body.dom.backgroundVertical.appendChild(this.dom.axis);
}
if (!this.dom.labelSet.parentNode) {
if (this.options.rtl) {
this.body.dom.right.appendChild(this.dom.labelSet);
} else {
this.body.dom.left.appendChild(this.dom.labelSet);
}
}
}
/**
* Activates the popup timer to show the given popup after a fixed time.
* @param {Popup} popup
*/
setPopupTimer(popup) {
this.clearPopupTimer();
if (popup) {
const delay = this.options.tooltip.delay || typeof this.options.tooltip.delay === "number" ? this.options.tooltip.delay : 500;
this.popupTimer = setTimeout(
function() {
popup.show();
},
delay
);
}
}
/**
* Clears the popup timer for the tooltip.
*/
clearPopupTimer() {
if (this.popupTimer != null) {
clearTimeout(this.popupTimer);
this.popupTimer = null;
}
}
/**
* Set selected items by their id. Replaces the current selection
* Unknown id's are silently ignored.
* @param {string[] | string} [ids] An array with zero or more id's of the items to be
*                                  selected, or a single item id. If ids is undefined
*                                  or an empty array, all items will be unselected.
*/
setSelection(ids) {
if (ids == void 0) {
ids = [];
}
if (!Array.isArray(ids)) {
ids = [ids];
}
const idsToDeselect = this.selection.filter((id) => ids.indexOf(id) === -1);
for (let selectedId of idsToDeselect) {
const item = this.getItemById(selectedId);
if (item) {
item.unselect();
}
}
this.selection = [...ids];
for (let id of ids) {
const item = this.getItemById(id);
if (item) {
item.select();
}
}
}
/**
* Get the selected items by their id
* @return {Array} ids  The ids of the selected items
*/
getSelection() {
return this.selection.concat([]);
}
/**
* Get the id's of the currently visible items.
* @returns {Array} The ids of the visible items
*/
getVisibleItems() {
const range = this.body.range.getRange();
let right;
let left;
if (this.options.rtl) {
right = this.body.util.toScreen(range.start);
left = this.body.util.toScreen(range.end);
} else {
left = this.body.util.toScreen(range.start);
right = this.body.util.toScreen(range.end);
}
const ids = [];
for (const groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
continue;
const group = this.groups[groupId];
const rawVisibleItems = group.isVisible ? group.visibleItems : [];
for (const item of rawVisibleItems) {
if (this.options.rtl) {
if (item.right < left && item.right + item.width > right) {
ids.push(item.id);
}
} else {
if (item.left < right && item.left + item.width > left) {
ids.push(item.id);
}
}
}
}
return ids;
}
/**
* Get the id's of the items at specific time, where a click takes place on the timeline.
* @param {Date} timeOfEvent The point in time to query items.
* @returns {Array} The ids of all items in existence at the time of click event on the timeline.
*/
getItemsAtCurrentTime(timeOfEvent) {
let right;
let left;
if (this.options.rtl) {
right = this.body.util.toScreen(timeOfEvent);
left = this.body.util.toScreen(timeOfEvent);
} else {
left = this.body.util.toScreen(timeOfEvent);
right = this.body.util.toScreen(timeOfEvent);
}
const ids = [];
for (const groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
continue;
const group = this.groups[groupId];
const rawVisibleItems = group.isVisible ? group.visibleItems : [];
for (const item of rawVisibleItems) {
if (this.options.rtl) {
if (item.right < left && item.right + item.width > right) {
ids.push(item.id);
}
} else {
if (item.left < right && item.left + item.width > left) {
ids.push(item.id);
}
}
}
}
return ids;
}
/**
* Get the id's of the currently visible groups.
* @returns {Array} The ids of the visible groups
*/
getVisibleGroups() {
const ids = [];
for (const groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
continue;
const group = this.groups[groupId];
if (group.isVisible)
ids.push(groupId);
}
return ids;
}
/**
* get item by id
* @param {string} id
* @return {object} item
*/
getItemById(id) {
return this.items[id] || this.clusters.find((cluster) => cluster.id === id);
}
/**
* Deselect a selected item
* @param {string | number} id
* @private
*/
_deselect(id) {
const selection = this.selection;
for (let i = 0, ii = selection.length; i < ii; i++) {
if (selection[i] == id) {
selection.splice(i, 1);
break;
}
}
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
const margin = this.options.margin;
const range = this.body.range;
const asSize = availableUtils.option.asSize;
const options = this.options;
const orientation = options.orientation.item;
let resized = false;
const frame = this.dom.frame;
this.props.top = this.body.domProps.top.height + this.body.domProps.border.top;
if (this.options.rtl) {
this.props.right = this.body.domProps.right.width + this.body.domProps.border.right;
} else {
this.props.left = this.body.domProps.left.width + this.body.domProps.border.left;
}
frame.className = "vis-itemset";
if (this.options.cluster) {
this._clusterItems();
}
resized = this._orderGroups() || resized;
const visibleInterval = range.end - range.start;
const zoomed = visibleInterval != this.lastVisibleInterval || this.props.width != this.props.lastWidth;
const scrolled = range.start != this.lastRangeStart;
const changedStackOption = options.stack != this.lastStack;
const changedStackSubgroupsOption = options.stackSubgroups != this.lastStackSubgroups;
const forceRestack = zoomed || scrolled || changedStackOption || changedStackSubgroupsOption;
this.lastVisibleInterval = visibleInterval;
this.lastRangeStart = range.start;
this.lastStack = options.stack;
this.lastStackSubgroups = options.stackSubgroups;
this.props.lastWidth = this.props.width;
const firstGroup = this._firstGroup();
const firstMargin = {
item: margin.item,
axis: margin.axis
};
const nonFirstMargin = {
item: margin.item,
axis: margin.item.vertical / 2
};
let height = 0;
const minHeight = margin.axis + margin.item.vertical;
this.groups[BACKGROUND].redraw(range, nonFirstMargin, forceRestack);
const redrawQueue = {};
let redrawQueueLength = 0;
availableUtils.forEach(this.groups, (group, key) => {
if (key === BACKGROUND) return;
const groupMargin = group == firstGroup ? firstMargin : nonFirstMargin;
const returnQueue = true;
redrawQueue[key] = group.redraw(range, groupMargin, forceRestack, returnQueue);
redrawQueueLength = redrawQueue[key].length;
});
const needRedraw = redrawQueueLength > 0;
if (needRedraw) {
const redrawResults = {};
for (let i = 0; i < redrawQueueLength; i++) {
availableUtils.forEach(redrawQueue, (fns, key) => {
redrawResults[key] = fns[i]();
});
}
availableUtils.forEach(this.groups, (group, key) => {
if (key === BACKGROUND) return;
const groupResized = redrawResults[key];
resized = groupResized || resized;
height += group.height;
});
height = Math.max(height, minHeight);
}
height = Math.max(height, minHeight);
frame.style.height = asSize(height);
this.props.width = frame.offsetWidth;
this.props.height = height;
this.dom.axis.style.top = asSize(orientation == "top" ? this.body.domProps.top.height + this.body.domProps.border.top : this.body.domProps.top.height + this.body.domProps.centerContainer.height);
if (this.options.rtl) {
this.dom.axis.style.right = "0";
} else {
this.dom.axis.style.left = "0";
}
this.hammer.get("press").set({ time: this.options.longSelectPressTime });
this.initialItemSetDrawn = true;
resized = this._isResized() || resized;
return resized;
}
/**
* Get the first group, aligned with the axis
* @return {Group | null} firstGroup
* @private
*/
_firstGroup() {
const firstGroupIndex = this.options.orientation.item == "top" ? 0 : this.groupIds.length - 1;
const firstGroupId = this.groupIds[firstGroupIndex];
const firstGroup = this.groups[firstGroupId] || this.groups[UNGROUPED$1];
return firstGroup || null;
}
/**
* Create or delete the group holding all ungrouped items. This group is used when
* there are no groups specified.
* @protected
*/
_updateUngrouped() {
let ungrouped = this.groups[UNGROUPED$1];
let item;
let itemId;
if (this.groupsData) {
if (ungrouped) {
ungrouped.dispose();
delete this.groups[UNGROUPED$1];
for (itemId in this.items) {
if (!Object.prototype.hasOwnProperty.call(this.items, itemId))
continue;
item = this.items[itemId];
item.parent && item.parent.remove(item);
const groupId = this.getGroupId(item.data);
const group = this.groups[groupId];
group && group.add(item) || item.hide();
}
}
} else {
if (!ungrouped) {
const id = null;
const data = null;
ungrouped = new Group(id, data, this);
this.groups[UNGROUPED$1] = ungrouped;
for (itemId in this.items) {
if (!Object.prototype.hasOwnProperty.call(this.items, itemId))
continue;
item = this.items[itemId];
ungrouped.add(item);
}
ungrouped.show();
}
}
}
/**
* Get the element for the labelset
* @return {HTMLElement} labelSet
*/
getLabelSet() {
return this.dom.labelSet;
}
/**
* Set items
* @param {vis.DataSet | null} items
*/
setItems(items) {
this.itemsSettingTime = /* @__PURE__ */ new Date();
const me = this;
let ids;
const oldItemsData = this.itemsData;
if (!items) {
this.itemsData = null;
} else if (isDataViewLike2(items)) {
this.itemsData = typeCoerceDataSet(items);
} else {
throw new TypeError("Data must implement the interface of DataSet or DataView");
}
if (oldItemsData) {
availableUtils.forEach(this.itemListeners, (callback, event2) => {
oldItemsData.off(event2, callback);
});
oldItemsData.dispose();
ids = oldItemsData.getIds();
this._onRemove(ids);
}
if (this.itemsData) {
const id = this.id;
availableUtils.forEach(this.itemListeners, (callback, event2) => {
me.itemsData.on(event2, callback, id);
});
ids = this.itemsData.getIds();
this._onAdd(ids);
this._updateUngrouped();
}
this.body.emitter.emit("_change", { queue: true });
}
/**
* Get the current items
* @returns {vis.DataSet | null}
*/
getItems() {
return this.itemsData != null ? this.itemsData.rawDS : null;
}
/**
* Set groups
* @param {vis.DataSet} groups
*/
setGroups(groups) {
const me = this;
let ids;
if (this.groupsData) {
availableUtils.forEach(this.groupListeners, (callback, event2) => {
me.groupsData.off(event2, callback);
});
ids = this.groupsData.getIds();
this.groupsData = null;
this._onRemoveGroups(ids);
}
if (!groups) {
this.groupsData = null;
} else if (isDataViewLike2(groups)) {
this.groupsData = groups;
} else {
throw new TypeError("Data must implement the interface of DataSet or DataView");
}
if (this.groupsData) {
const groupsData = this.groupsData.getDataSet();
groupsData.get().forEach((group) => {
if (group.nestedGroups) {
group.nestedGroups.forEach((nestedGroupId) => {
const updatedNestedGroup = groupsData.get(nestedGroupId);
updatedNestedGroup.nestedInGroup = group.id;
if (group.showNested == false) {
updatedNestedGroup.visible = false;
}
groupsData.update(updatedNestedGroup);
});
}
});
const id = this.id;
availableUtils.forEach(this.groupListeners, (callback, event2) => {
me.groupsData.on(event2, callback, id);
});
ids = this.groupsData.getIds();
this._onAddGroups(ids);
}
this._updateUngrouped();
this._order();
if (this.options.cluster) {
this.clusterGenerator.updateData();
this._clusterItems();
this.markDirty({ refreshItems: true, restackGroups: true });
}
this.body.emitter.emit("_change", { queue: true });
}
/**
* Get the current groups
* @returns {vis.DataSet | null} groups
*/
getGroups() {
return this.groupsData;
}
/**
* Remove an item by its id
* @param {string | number} id
*/
removeItem(id) {
const item = this.itemsData.get(id);
if (item) {
this.options.onRemove(item, (item2) => {
if (item2) {
this.itemsData.remove(id);
}
});
}
}
/**
* Get the time of an item based on it's data and options.type
* @param {Object} itemData
* @returns {string} Returns the type
* @private
*/
_getType(itemData) {
return itemData.type || this.options.type || (itemData.end ? "range" : "box");
}
/**
* Get the group id for an item
* @param {Object} itemData
* @returns {string} Returns the groupId
* @private
*/
getGroupId(itemData) {
const type = this._getType(itemData);
if (type == "background" && itemData.group == void 0) {
return BACKGROUND;
} else {
return this.groupsData ? itemData.group : UNGROUPED$1;
}
}
/**
* Handle updated items
* @param {number[]} ids
* @protected
*/
_onUpdate(ids) {
const me = this;
ids.forEach((id) => {
const itemData = me.itemsData.get(id);
let item = me.items[id];
const type = itemData ? me._getType(itemData) : null;
const constructor = _ItemSet.types[type];
let selected;
if (item) {
if (!constructor || !(item instanceof constructor)) {
selected = item.selected;
me._removeItem(item);
item = null;
} else {
me._updateItem(item, itemData);
}
}
if (!item && itemData) {
if (constructor) {
item = new constructor(itemData, me.conversion, me.options);
item.id = id;
me._addItem(item);
if (selected) {
this.selection.push(id);
item.select();
}
} else {
throw new TypeError(`Unknown item type "${type}"`);
}
}
});
this._order();
if (this.options.cluster) {
this.clusterGenerator.setItems(this.items, { applyOnChangedLevel: false });
this._clusterItems();
}
this.body.emitter.emit("_change", { queue: true });
}
/**
* Handle removed items
* @param {number[]} ids
* @protected
*/
_onRemove(ids) {
let count = 0;
const me = this;
ids.forEach((id) => {
const item = me.items[id];
if (item) {
count++;
me._removeItem(item);
}
});
if (count) {
this._order();
this.body.emitter.emit("_change", { queue: true });
}
}
/**
* Update the order of item in all groups
* @private
*/
_order() {
availableUtils.forEach(this.groups, (group) => {
group.order();
});
}
/**
* Handle updated groups
* @param {number[]} ids
* @private
*/
_onUpdateGroups(ids) {
this._onAddGroups(ids);
}
/**
* Handle changed groups (added or updated)
* @param {number[]} ids
* @private
*/
_onAddGroups(ids) {
const me = this;
ids.forEach((id) => {
const groupData = me.groupsData.get(id);
let group = me.groups[id];
if (!group) {
if (id == UNGROUPED$1 || id == BACKGROUND) {
throw new Error(`Illegal group id. ${id} is a reserved id.`);
}
const groupOptions = Object.create(me.options);
availableUtils.extend(groupOptions, {
height: null
});
group = new Group(id, groupData, me);
me.groups[id] = group;
for (const itemId in me.items) {
if (!Object.prototype.hasOwnProperty.call(me.items, itemId))
continue;
const item = me.items[itemId];
if (item.data.group == id)
group.add(item);
}
group.order();
group.show();
} else {
group.setData(groupData);
}
});
this.body.emitter.emit("_change", { queue: true });
}
/**
* Handle removed groups
* @param {number[]} ids
* @private
*/
_onRemoveGroups(ids) {
ids.forEach((id) => {
const group = this.groups[id];
if (group) {
group.dispose();
delete this.groups[id];
}
});
if (this.options.cluster) {
this.clusterGenerator.updateData();
this._clusterItems();
}
this.markDirty({ restackGroups: !!this.options.cluster });
this.body.emitter.emit("_change", { queue: true });
}
/**
* Reorder the groups if needed
* @return {boolean} changed
* @private
*/
_orderGroups() {
if (this.groupsData) {
let groupIds = this.groupsData.getIds({
order: this.options.groupOrder
});
groupIds = this._orderNestedGroups(groupIds);
const changed = !availableUtils.equalArray(groupIds, this.groupIds);
if (changed) {
const groups = this.groups;
groupIds.forEach((groupId) => {
groups[groupId].hide();
});
groupIds.forEach((groupId) => {
groups[groupId].show();
});
this.groupIds = groupIds;
}
return changed;
} else {
return false;
}
}
/**
* Reorder the nested groups
*
* @param {Array.<number>} groupIds
* @returns {Array.<number>}
* @private
*/
_orderNestedGroups(groupIds) {
function getOrderedNestedGroups(t, groupIds2) {
let result = [];
groupIds2.forEach((groupId) => {
result.push(groupId);
const groupData = t.groupsData.get(groupId);
if (groupData.nestedGroups) {
const nestedGroupIds = t.groupsData.get({
filter(nestedGroup) {
return nestedGroup.nestedInGroup == groupId;
},
order: t.options.groupOrder
}).map((nestedGroup) => nestedGroup.id);
result = result.concat(getOrderedNestedGroups(t, nestedGroupIds));
}
});
return result;
}
const topGroupIds = groupIds.filter((groupId) => !this.groupsData.get(groupId).nestedInGroup);
return getOrderedNestedGroups(this, topGroupIds);
}
/**
* Add a new item
* @param {Item} item
* @private
*/
_addItem(item) {
this.items[item.id] = item;
const groupId = this.getGroupId(item.data);
const group = this.groups[groupId];
if (!group) {
item.groupShowing = false;
} else if (group && group.data && group.data.showNested) {
item.groupShowing = true;
}
if (group) group.add(item);
}
/**
* Update an existing item
* @param {Item} item
* @param {Object} itemData
* @private
*/
_updateItem(item, itemData) {
item.setData(itemData);
const groupId = this.getGroupId(item.data);
const group = this.groups[groupId];
if (!group) {
item.groupShowing = false;
} else if (group && group.data && group.data.showNested) {
item.groupShowing = true;
}
}
/**
* Delete an item from the ItemSet: remove it from the DOM, from the map
* with items, and from the map with visible items, and from the selection
* @param {Item} item
* @private
*/
_removeItem(item) {
item.hide();
delete this.items[item.id];
const index = this.selection.indexOf(item.id);
if (index != -1) this.selection.splice(index, 1);
item.parent && item.parent.remove(item);
if (this.popup != null) {
this.popup.hide();
}
}
/**
* Create an array containing all items being a range (having an end date)
* @param {Array.<Object>} array
* @returns {Array}
* @private
*/
_constructByEndArray(array2) {
const endArray = [];
for (let i = 0; i < array2.length; i++) {
if (array2[i] instanceof RangeItem) {
endArray.push(array2[i]);
}
}
return endArray;
}
/**
* Register the clicked item on touch, before dragStart is initiated.
*
* dragStart is initiated from a mousemove event, AFTER the mouse/touch is
* already moving. Therefore, the mouse/touch can sometimes be above an other
* DOM element than the item itself.
*
* @param {Event} event
* @private
*/
_onTouch(event2) {
this.touchParams.item = this.itemFromTarget(event2);
this.touchParams.dragLeftItem = event2.target.dragLeftItem || false;
this.touchParams.dragRightItem = event2.target.dragRightItem || false;
this.touchParams.itemProps = null;
}
/**
* Given an group id, returns the index it has.
*
* @param {number} groupId
* @returns {number} index / groupId
* @private
*/
_getGroupIndex(groupId) {
for (let i = 0; i < this.groupIds.length; i++) {
if (groupId == this.groupIds[i])
return i;
}
}
/**
* Start dragging the selected events
* @param {Event} event
* @private
*/
_onDragStart(event2) {
if (this.touchParams.itemIsDragging) {
return;
}
const item = this.touchParams.item || null;
const me = this;
let props;
if (item && (item.selected || this.options.itemsAlwaysDraggable.item)) {
if (this.options.editable.overrideItems && !this.options.editable.updateTime && !this.options.editable.updateGroup) {
return;
}
if (item.editable != null && !item.editable.updateTime && !item.editable.updateGroup && !this.options.editable.overrideItems) {
return;
}
const dragLeftItem = this.touchParams.dragLeftItem;
const dragRightItem = this.touchParams.dragRightItem;
this.touchParams.itemIsDragging = true;
this.touchParams.selectedItem = item;
if (dragLeftItem) {
props = {
item: dragLeftItem,
initialX: event2.center.x,
dragLeft: true,
data: this._cloneItemData(item.data)
};
this.touchParams.itemProps = [props];
} else if (dragRightItem) {
props = {
item: dragRightItem,
initialX: event2.center.x,
dragRight: true,
data: this._cloneItemData(item.data)
};
this.touchParams.itemProps = [props];
} else if (this.options.editable.add && (event2.srcEvent.ctrlKey || event2.srcEvent.metaKey)) {
this._onDragStartAddItem(event2);
} else {
if (this.groupIds.length < 1) {
this.redraw();
}
const baseGroupIndex = this._getGroupIndex(item.data.group);
const itemsToDrag = this.options.itemsAlwaysDraggable.item && !item.selected ? [item.id] : this.getSelection();
this.touchParams.itemProps = itemsToDrag.map((id) => {
const item2 = me.items[id];
const groupIndex = me._getGroupIndex(item2.data.group);
return {
item: item2,
initialX: event2.center.x,
groupOffset: baseGroupIndex - groupIndex,
data: this._cloneItemData(item2.data)
};
});
}
event2.stopPropagation();
} else if (this.options.editable.add && (event2.srcEvent.ctrlKey || event2.srcEvent.metaKey)) {
this._onDragStartAddItem(event2);
}
}
/**
* Start creating a new range item by dragging.
* @param {Event} event
* @private
*/
_onDragStartAddItem(event2) {
const snap = this.options.snap || null;
const frameRect = this.dom.frame.getBoundingClientRect();
const x = this.options.rtl ? frameRect.right - event2.center.x + 10 : event2.center.x - frameRect.left - 10;
const time = this.body.util.toTime(x);
const scale = this.body.util.getScale();
const step = this.body.util.getStep();
const start = snap ? snap(time, scale, step) : time;
const end = start;
const itemData = {
type: "range",
start,
end,
content: "new item"
};
const id = v4_default();
itemData[this.itemsData.idProp] = id;
const group = this.groupFromTarget(event2);
if (group) {
itemData.group = group.groupId;
}
const newItem = new RangeItem(itemData, this.conversion, this.options);
newItem.id = id;
newItem.data = this._cloneItemData(itemData);
this._addItem(newItem);
this.touchParams.selectedItem = newItem;
const props = {
item: newItem,
initialX: event2.center.x,
data: newItem.data
};
if (this.options.rtl) {
props.dragLeft = true;
} else {
props.dragRight = true;
}
this.touchParams.itemProps = [props];
event2.stopPropagation();
}
/**
* Drag selected items
* @param {Event} event
* @private
*/
_onDrag(event2) {
if (this.popup != null && this.options.showTooltips && !this.popup.hidden) {
const container = this.body.dom.centerContainer;
const containerRect = container.getBoundingClientRect();
this.popup.setPosition(
event2.center.x - containerRect.left + container.offsetLeft,
event2.center.y - containerRect.top + container.offsetTop
);
this.popup.show();
}
if (this.touchParams.itemProps) {
event2.stopPropagation();
const me = this;
const snap = this.options.snap || null;
const domRootOffsetLeft = this.body.dom.root.offsetLeft;
const xOffset = this.options.rtl ? domRootOffsetLeft + this.body.domProps.right.width : domRootOffsetLeft + this.body.domProps.left.width;
const scale = this.body.util.getScale();
const step = this.body.util.getStep();
const selectedItem = this.touchParams.selectedItem;
const updateGroupAllowed = (this.options.editable.overrideItems || selectedItem.editable == null) && this.options.editable.updateGroup || !this.options.editable.overrideItems && selectedItem.editable != null && selectedItem.editable.updateGroup;
let newGroupBase = null;
if (updateGroupAllowed && selectedItem) {
if (selectedItem.data.group != void 0) {
const group = me.groupFromTarget(event2);
if (group) {
newGroupBase = this._getGroupIndex(group.groupId);
}
}
}
this.touchParams.itemProps.forEach((props) => {
const current = me.body.util.toTime(event2.center.x - xOffset);
const initial = me.body.util.toTime(props.initialX - xOffset);
let offset;
let initialStart;
let initialEnd;
let start;
let end;
if (this.options.rtl) {
offset = -(current - initial);
} else {
offset = current - initial;
}
let itemData = this._cloneItemData(props.item.data);
if (props.item.editable != null && !props.item.editable.updateTime && !props.item.editable.updateGroup && !me.options.editable.overrideItems) {
return;
}
const updateTimeAllowed = (this.options.editable.overrideItems || selectedItem.editable == null) && this.options.editable.updateTime || !this.options.editable.overrideItems && selectedItem.editable != null && selectedItem.editable.updateTime;
if (updateTimeAllowed) {
if (props.dragLeft) {
if (this.options.rtl) {
if (itemData.end != void 0) {
initialEnd = availableUtils.convert(props.data.end, "Date");
end = new Date(initialEnd.valueOf() + offset);
itemData.end = snap ? snap(end, scale, step) : end;
}
} else {
if (itemData.start != void 0) {
initialStart = availableUtils.convert(props.data.start, "Date");
start = new Date(initialStart.valueOf() + offset);
itemData.start = snap ? snap(start, scale, step) : start;
}
}
} else if (props.dragRight) {
if (this.options.rtl) {
if (itemData.start != void 0) {
initialStart = availableUtils.convert(props.data.start, "Date");
start = new Date(initialStart.valueOf() + offset);
itemData.start = snap ? snap(start, scale, step) : start;
}
} else {
if (itemData.end != void 0) {
initialEnd = availableUtils.convert(props.data.end, "Date");
end = new Date(initialEnd.valueOf() + offset);
itemData.end = snap ? snap(end, scale, step) : end;
}
}
} else {
if (itemData.start != void 0) {
initialStart = availableUtils.convert(props.data.start, "Date").valueOf();
start = new Date(initialStart + offset);
if (itemData.end != void 0) {
initialEnd = availableUtils.convert(props.data.end, "Date");
const duration = initialEnd.valueOf() - initialStart.valueOf();
itemData.start = snap ? snap(start, scale, step) : start;
itemData.end = new Date(itemData.start.valueOf() + duration);
} else {
itemData.start = snap ? snap(start, scale, step) : start;
}
}
}
}
if (updateGroupAllowed && (!props.dragLeft && !props.dragRight) && newGroupBase != null) {
if (itemData.group != void 0) {
let newOffset = newGroupBase - props.groupOffset;
newOffset = Math.max(0, newOffset);
newOffset = Math.min(me.groupIds.length - 1, newOffset);
itemData.group = me.groupIds[newOffset];
}
}
itemData = this._cloneItemData(itemData);
me.options.onMoving(itemData, (itemData2) => {
if (itemData2) {
props.item.setData(this._cloneItemData(itemData2, "Date"));
}
});
});
this.body.emitter.emit("_change");
}
}
/**
* Move an item to another group
* @param {Item} item
* @param {string | number} groupId
* @private
*/
_moveToGroup(item, groupId) {
const group = this.groups[groupId];
if (group && group.groupId != item.data.group) {
const oldGroup = item.parent;
oldGroup.remove(item);
oldGroup.order();
item.data.group = group.groupId;
group.add(item);
group.order();
}
}
/**
* End of dragging selected items
* @param {Event} event
* @private
*/
_onDragEnd(event2) {
this.touchParams.itemIsDragging = false;
if (this.touchParams.itemProps) {
event2.stopPropagation();
const me = this;
const itemProps = this.touchParams.itemProps;
this.touchParams.itemProps = null;
itemProps.forEach((props) => {
const id = props.item.id;
const exists = me.itemsData.get(id) != null;
if (!exists) {
me.options.onAdd(props.item.data, (itemData) => {
me._removeItem(props.item);
if (itemData) {
me.itemsData.add(itemData);
}
me.body.emitter.emit("_change");
});
} else {
const itemData = this._cloneItemData(props.item.data);
me.options.onMove(itemData, (itemData2) => {
if (itemData2) {
itemData2[this.itemsData.idProp] = id;
this.itemsData.update(itemData2);
} else {
props.item.setData(props.data);
me.body.emitter.emit("_change");
}
});
}
});
}
}
/**
* On group click
* @param {Event} event
* @private
*/
_onGroupClick(event2) {
const group = this.groupFromTarget(event2);
setTimeout(() => {
this.toggleGroupShowNested(group);
}, 1);
}
/**
* Toggle show nested
* @param {object} group
* @param {boolean} force
*/
toggleGroupShowNested(group, force = void 0) {
if (!group || !group.nestedGroups) return;
const groupsData = this.groupsData.getDataSet();
if (force != void 0) {
group.showNested = !!force;
} else {
group.showNested = !group.showNested;
}
let nestingGroup = groupsData.get(group.groupId);
nestingGroup.showNested = group.showNested;
let fullNestedGroups = group.nestedGroups;
let nextLevel = fullNestedGroups;
while (nextLevel.length > 0) {
let current = nextLevel;
nextLevel = [];
for (let i = 0; i < current.length; i++) {
let node = groupsData.get(current[i]);
if (node.nestedGroups) {
nextLevel = nextLevel.concat(node.nestedGroups);
}
}
if (nextLevel.length > 0) {
fullNestedGroups = fullNestedGroups.concat(nextLevel);
}
}
var nestedGroups;
if (nestingGroup.showNested) {
var showNestedGroups = groupsData.get(nestingGroup.nestedGroups);
for (let i = 0; i < showNestedGroups.length; i++) {
let group2 = showNestedGroups[i];
if (group2.nestedGroups && group2.nestedGroups.length > 0 && (group2.showNested == void 0 || group2.showNested == true)) {
showNestedGroups.push(...groupsData.get(group2.nestedGroups));
}
}
nestedGroups = showNestedGroups.map(function(nestedGroup) {
if (nestedGroup.visible == void 0) {
nestedGroup.visible = true;
}
nestedGroup.visible = !!nestingGroup.showNested;
return nestedGroup;
});
} else {
nestedGroups = groupsData.get(fullNestedGroups).map(function(nestedGroup) {
if (nestedGroup.visible == void 0) {
nestedGroup.visible = true;
}
nestedGroup.visible = !!nestingGroup.showNested;
return nestedGroup;
});
}
groupsData.update(nestedGroups.concat(nestingGroup));
if (nestingGroup.showNested) {
availableUtils.removeClassName(group.dom.label, "collapsed");
availableUtils.addClassName(group.dom.label, "expanded");
} else {
availableUtils.removeClassName(group.dom.label, "expanded");
availableUtils.addClassName(group.dom.label, "collapsed");
}
}
/**
* Toggle group drag classname
* @param {object} group
*/
toggleGroupDragClassName(group) {
group.dom.label.classList.toggle("vis-group-is-dragging");
group.dom.foreground.classList.toggle("vis-group-is-dragging");
}
/**
* on drag start
* @param {Event} event
* @return {void}
* @private
*/
_onGroupDragStart(event2) {
if (this.groupTouchParams.isDragging) return;
if (this.options.groupEditable.order) {
this.groupTouchParams.group = this.groupFromTarget(event2);
if (this.groupTouchParams.group) {
event2.stopPropagation();
this.groupTouchParams.isDragging = true;
this.toggleGroupDragClassName(this.groupTouchParams.group);
this.groupTouchParams.originalOrder = this.groupsData.getIds({
order: this.options.groupOrder
});
}
}
}
/**
* on drag
* @param {Event} event
* @return {void}
* @private
*/
_onGroupDrag(event2) {
if (this.options.groupEditable.order && this.groupTouchParams.group) {
event2.stopPropagation();
const groupsData = this.groupsData.getDataSet();
const group = this.groupFromTarget(event2);
if (group && group.height != this.groupTouchParams.group.height) {
const movingUp = group.top < this.groupTouchParams.group.top;
const clientY = event2.center ? event2.center.y : event2.clientY;
const targetGroup = group.dom.foreground.getBoundingClientRect();
const draggedGroupHeight = this.groupTouchParams.group.height;
if (movingUp) {
if (targetGroup.top + draggedGroupHeight < clientY) {
return;
}
} else {
const targetGroupHeight = group.height;
if (targetGroup.top + targetGroupHeight - draggedGroupHeight > clientY) {
return;
}
}
}
if (group && group != this.groupTouchParams.group) {
const targetGroup = groupsData.get(group.groupId);
const draggedGroup = groupsData.get(this.groupTouchParams.group.groupId);
if (draggedGroup && targetGroup) {
this.options.groupOrderSwap(draggedGroup, targetGroup, groupsData);
groupsData.update(draggedGroup);
groupsData.update(targetGroup);
}
const newOrder = groupsData.getIds({
order: this.options.groupOrder
});
if (!availableUtils.equalArray(newOrder, this.groupTouchParams.originalOrder)) {
const origOrder = this.groupTouchParams.originalOrder;
const draggedId = this.groupTouchParams.group.groupId;
const numGroups = Math.min(origOrder.length, newOrder.length);
let curPos = 0;
let newOffset = 0;
let orgOffset = 0;
while (curPos < numGroups) {
while (curPos + newOffset < numGroups && curPos + orgOffset < numGroups && newOrder[curPos + newOffset] == origOrder[curPos + orgOffset]) {
curPos++;
}
if (curPos + newOffset >= numGroups) {
break;
}
if (newOrder[curPos + newOffset] == draggedId) {
newOffset = 1;
} else if (origOrder[curPos + orgOffset] == draggedId) {
orgOffset = 1;
} else {
const slippedPosition = newOrder.indexOf(origOrder[curPos + orgOffset]);
const switchGroup = groupsData.get(newOrder[curPos + newOffset]);
const shouldBeGroup = groupsData.get(origOrder[curPos + orgOffset]);
this.options.groupOrderSwap(switchGroup, shouldBeGroup, groupsData);
groupsData.update(switchGroup);
groupsData.update(shouldBeGroup);
const switchGroupId = newOrder[curPos + newOffset];
newOrder[curPos + newOffset] = origOrder[curPos + orgOffset];
newOrder[slippedPosition] = switchGroupId;
curPos++;
}
}
}
}
}
}
/**
* on drag end
* @param {Event} event
* @return {void}
* @private
*/
_onGroupDragEnd(event2) {
this.groupTouchParams.isDragging = false;
if (this.options.groupEditable.order && this.groupTouchParams.group) {
event2.stopPropagation();
const me = this;
const id = me.groupTouchParams.group.groupId;
const dataset = me.groupsData.getDataSet();
const groupData = availableUtils.extend({}, dataset.get(id));
me.options.onMoveGroup(groupData, (groupData2) => {
if (groupData2) {
groupData2[dataset._idProp] = id;
dataset.update(groupData2);
} else {
const newOrder = dataset.getIds({
order: me.options.groupOrder
});
if (!availableUtils.equalArray(newOrder, me.groupTouchParams.originalOrder)) {
const origOrder = me.groupTouchParams.originalOrder;
const numGroups = Math.min(origOrder.length, newOrder.length);
let curPos = 0;
while (curPos < numGroups) {
while (curPos < numGroups && newOrder[curPos] == origOrder[curPos]) {
curPos++;
}
if (curPos >= numGroups) {
break;
}
const slippedPosition = newOrder.indexOf(origOrder[curPos]);
const switchGroup = dataset.get(newOrder[curPos]);
const shouldBeGroup = dataset.get(origOrder[curPos]);
me.options.groupOrderSwap(switchGroup, shouldBeGroup, dataset);
dataset.update(switchGroup);
dataset.update(shouldBeGroup);
const switchGroupId = newOrder[curPos];
newOrder[curPos] = origOrder[curPos];
newOrder[slippedPosition] = switchGroupId;
curPos++;
}
}
}
});
me.body.emitter.emit("groupDragged", { groupId: id });
this.toggleGroupDragClassName(this.groupTouchParams.group);
this.groupTouchParams.group = null;
}
}
/**
* Handle selecting/deselecting an item when tapping it
* @param {Event} event
* @private
*/
_onSelectItem(event2) {
if (!this.options.selectable) return;
const ctrlKey = event2.srcEvent && (event2.srcEvent.ctrlKey || event2.srcEvent.metaKey);
const shiftKey = event2.srcEvent && event2.srcEvent.shiftKey;
if (ctrlKey || shiftKey) {
this._onMultiSelectItem(event2);
return;
}
const oldSelection = this.getSelection();
const item = this.itemFromTarget(event2);
const selection = item && item.selectable ? [item.id] : [];
this.setSelection(selection);
const newSelection = this.getSelection();
if (newSelection.length > 0 || oldSelection.length > 0) {
this.body.emitter.emit("select", {
items: newSelection,
event: event2
});
}
}
/**
* Handle hovering an item
* @param {Event} event
* @private
*/
_onMouseOver(event2) {
const item = this.itemFromTarget(event2);
if (!item) return;
const related = this.itemFromRelatedTarget(event2);
if (item === related) {
return;
}
const title = item.getTitle();
if (this.options.showTooltips && title) {
if (this.popup == null) {
this.popup = new Popup3(
this.body.dom.root,
this.options.tooltip.overflowMethod || "flip"
);
}
this.popup.setText(title);
const container = this.body.dom.centerContainer;
const containerRect = container.getBoundingClientRect();
this.popup.setPosition(
event2.clientX - containerRect.left + container.offsetLeft,
event2.clientY - containerRect.top + container.offsetTop
);
this.setPopupTimer(this.popup);
} else {
this.clearPopupTimer();
if (this.popup != null) {
this.popup.hide();
}
}
this.body.emitter.emit("itemover", {
item: item.id,
event: event2
});
}
/**
* on mouse start
* @param {Event} event
* @return {void}
* @private
*/
_onMouseOut(event2) {
const item = this.itemFromTarget(event2);
if (!item) return;
const related = this.itemFromRelatedTarget(event2);
if (item === related) {
return;
}
this.clearPopupTimer();
if (this.popup != null) {
this.popup.hide();
}
this.body.emitter.emit("itemout", {
item: item.id,
event: event2
});
}
/**
* on mouse move
* @param {Event} event
* @return {void}
* @private
*/
_onMouseMove(event2) {
const item = this.itemFromTarget(event2);
if (!item) return;
if (this.popupTimer != null) {
this.setPopupTimer(this.popup);
}
if (this.options.showTooltips && this.options.tooltip.followMouse && this.popup && !this.popup.hidden) {
const container = this.body.dom.centerContainer;
const containerRect = container.getBoundingClientRect();
this.popup.setPosition(
event2.clientX - containerRect.left + container.offsetLeft,
event2.clientY - containerRect.top + container.offsetTop
);
this.popup.show();
}
}
/**
* Handle mousewheel
* @param {Event}  event   The event
* @private
*/
_onMouseWheel(event2) {
if (this.touchParams.itemIsDragging) {
this._onDragEnd(event2);
}
}
/**
* Handle updates of an item on double tap
* @param {timeline.Item}  item   The item
* @private
*/
_onUpdateItem(item) {
if (!this.options.selectable) return;
if (!this.options.editable.updateTime && !this.options.editable.updateGroup) return;
const me = this;
if (item) {
const itemData = me.itemsData.get(item.id);
this.options.onUpdate(itemData, (itemData2) => {
if (itemData2) {
me.itemsData.update(itemData2);
}
});
}
}
/**
* Handle drop event of data on item
* Only called when `objectData.target === 'item'.
* @param {Event} event The event
* @private
*/
_onDropObjectOnItem(event2) {
const item = this.itemFromTarget(event2);
const objectData = JSON.parse(event2.dataTransfer.getData("text"));
this.options.onDropObjectOnItem(objectData, item);
}
/**
* Handle creation of an item on double tap or drop of a drag event
* @param {Event} event   The event
* @private
*/
_onAddItem(event2) {
if (!this.options.selectable) return;
if (!this.options.editable.add) return;
const me = this;
const snap = this.options.snap || null;
const frameRect = this.dom.frame.getBoundingClientRect();
const x = this.options.rtl ? frameRect.right - event2.center.x : event2.center.x - frameRect.left;
const start = this.body.util.toTime(x);
const scale = this.body.util.getScale();
const step = this.body.util.getStep();
let end;
let newItemData;
if (event2.type == "drop") {
newItemData = JSON.parse(event2.dataTransfer.getData("text"));
newItemData.content = newItemData.content ? newItemData.content : "new item";
newItemData.start = newItemData.start ? newItemData.start : snap ? snap(start, scale, step) : start;
newItemData.type = newItemData.type || "box";
newItemData[this.itemsData.idProp] = newItemData.id || v4_default();
if (newItemData.type == "range" && !newItemData.end) {
end = this.body.util.toTime(x + this.props.width / 5);
newItemData.end = snap ? snap(end, scale, step) : end;
}
} else {
newItemData = {
start: snap ? snap(start, scale, step) : start,
content: "new item"
};
newItemData[this.itemsData.idProp] = v4_default();
if (this.options.type === "range") {
end = this.body.util.toTime(x + this.props.width / 5);
newItemData.end = snap ? snap(end, scale, step) : end;
}
}
const group = this.groupFromTarget(event2);
if (group) {
newItemData.group = group.groupId;
}
newItemData = this._cloneItemData(newItemData);
this.options.onAdd(newItemData, (item) => {
if (item) {
me.itemsData.add(item);
if (event2.type == "drop") {
me.setSelection([item.id]);
}
}
});
}
/**
* Handle selecting/deselecting multiple items when holding an item
* @param {Event} event
* @private
*/
_onMultiSelectItem(event2) {
if (!this.options.selectable) return;
const item = this.itemFromTarget(event2);
if (item) {
let selection = this.options.multiselect ? this.getSelection() : [];
const shiftKey = event2.srcEvent && event2.srcEvent.shiftKey || false;
if ((shiftKey || this.options.sequentialSelection) && this.options.multiselect) {
const itemGroup = this.itemsData.get(item.id).group;
let lastSelectedGroup = void 0;
if (this.options.multiselectPerGroup) {
if (selection.length > 0) {
lastSelectedGroup = this.itemsData.get(selection[0]).group;
}
}
if (!this.options.multiselectPerGroup || lastSelectedGroup == void 0 || lastSelectedGroup == itemGroup) {
selection.push(item.id);
}
const range = _ItemSet._getItemRange(this.itemsData.get(selection));
if (!this.options.multiselectPerGroup || lastSelectedGroup == itemGroup) {
selection = [];
for (const id in this.items) {
if (!Object.prototype.hasOwnProperty.call(this.items, id))
continue;
const _item = this.items[id];
const start = _item.data.start;
const end = _item.data.end !== void 0 ? _item.data.end : start;
if (start >= range.min && end <= range.max && (!this.options.multiselectPerGroup || lastSelectedGroup == this.itemsData.get(_item.id).group) && !(_item instanceof BackgroundItem)) {
selection.push(_item.id);
}
}
}
} else {
const index = selection.indexOf(item.id);
if (index == -1) {
selection.push(item.id);
} else {
selection.splice(index, 1);
}
}
const filteredSelection = selection.filter((item2) => this.getItemById(item2).selectable);
this.setSelection(filteredSelection);
this.body.emitter.emit("select", {
items: this.getSelection(),
event: event2
});
}
}
/**
* Calculate the time range of a list of items
* @param {Array.<Object>} itemsData
* @return {{min: Date, max: Date}} Returns the range of the provided items
* @private
*/
static _getItemRange(itemsData) {
let max = null;
let min = null;
itemsData.forEach((data) => {
if (min == null || data.start < min) {
min = data.start;
}
if (data.end != void 0) {
if (max == null || data.end > max) {
max = data.end;
}
} else {
if (max == null || data.start > max) {
max = data.start;
}
}
});
return {
min,
max
};
}
/**
* Find an item from an element:
* searches for the attribute 'vis-item' in the element's tree
* @param {HTMLElement} element
* @return {Item | null} item
*/
itemFromElement(element) {
let cur = element;
while (cur) {
if (Object.prototype.hasOwnProperty.call(cur, "vis-item")) {
return cur["vis-item"];
}
cur = cur.parentNode;
}
return null;
}
/**
* Find an item from an event target:
* searches for the attribute 'vis-item' in the event target's element tree
* @param {Event} event
* @return {Item | null} item
*/
itemFromTarget(event2) {
return this.itemFromElement(event2.target);
}
/**
* Find an item from an event's related target:
* searches for the attribute 'vis-item' in the related target's element tree
* @param {Event} event
* @return {Item | null} item
*/
itemFromRelatedTarget(event2) {
return this.itemFromElement(event2.relatedTarget);
}
/**
* Find the Group from an event target:
* searches for the attribute 'vis-group' in the event target's element tree
* @param {Event} event
* @return {Group | null} group
*/
groupFromTarget(event2) {
const clientY = event2.center ? event2.center.y : event2.clientY;
let groupIds = this.groupIds;
if (groupIds.length <= 0 && this.groupsData) {
groupIds = this.groupsData.getIds({
order: this.options.groupOrder
});
}
for (let i = 0; i < groupIds.length; i++) {
const groupId = groupIds[i];
const group = this.groups[groupId];
const foreground = group.dom.foreground;
const foregroundRect = foreground.getBoundingClientRect();
if (clientY >= foregroundRect.top && clientY < foregroundRect.top + foreground.offsetHeight) {
return group;
}
if (this.options.orientation.item === "top") {
if (i === this.groupIds.length - 1 && clientY > foregroundRect.top) {
return group;
}
} else {
if (i === 0 && clientY < foregroundRect.top + foreground.offset) {
return group;
}
}
}
return null;
}
/**
* Find the ItemSet from an event target:
* searches for the attribute 'vis-itemset' in the event target's element tree
* @param {Event} event
* @return {ItemSet | null} item
*/
static itemSetFromTarget(event2) {
let target = event2.target;
while (target) {
if (Object.prototype.hasOwnProperty.call(target, "vis-itemset")) {
return target["vis-itemset"];
}
target = target.parentNode;
}
return null;
}
/**
* Clone the data of an item, and "normalize" it: convert the start and end date
* to the type (Date, Moment, ...) configured in the DataSet. If not configured,
* start and end are converted to Date.
* @param {Object} itemData, typically `item.data`
* @param {string} [type]  Optional Date type. If not provided, the type from the DataSet is taken
* @return {Object} The cloned object
* @private
*/
_cloneItemData(itemData, type) {
const clone2 = availableUtils.extend({}, itemData);
if (!type) {
type = this.itemsData.type;
}
if (clone2.start != void 0) {
clone2.start = availableUtils.convert(clone2.start, type && type.start || "Date");
}
if (clone2.end != void 0) {
clone2.end = availableUtils.convert(clone2.end, type && type.end || "Date");
}
return clone2;
}
/**
* cluster items
* @return {void}
* @private
*/
_clusterItems() {
if (!this.options.cluster) {
return;
}
const { scale } = this.body.range.conversion(this.body.domProps.center.width);
const clusters = this.clusterGenerator.getClusters(this.clusters, scale, this.options.cluster);
if (this.clusters != clusters) {
this._detachAllClusters();
if (clusters) {
for (let cluster of clusters) {
cluster.attach();
}
this.clusters = clusters;
}
this._updateClusters(clusters);
}
}
/**
* detach all cluster items
* @private
*/
_detachAllClusters() {
if (this.options.cluster) {
if (this.clusters && this.clusters.length) {
for (let cluster of this.clusters) {
cluster.detach();
}
}
}
}
/**
* update clusters
* @param {array} clusters
* @private
*/
_updateClusters(clusters) {
if (this.clusters && this.clusters.length) {
const newClustersIds = new Set(clusters.map((cluster) => cluster.id));
const clustersToUnselect = this.clusters.filter((cluster) => !newClustersIds.has(cluster.id));
let selectionChanged = false;
for (let cluster of clustersToUnselect) {
const selectedIdx = this.selection.indexOf(cluster.id);
if (selectedIdx !== -1) {
cluster.unselect();
this.selection.splice(selectedIdx, 1);
selectionChanged = true;
}
}
if (selectionChanged) {
const newSelection = this.getSelection();
this.body.emitter.emit("select", {
items: newSelection,
event
});
}
}
this.clusters = clusters || [];
}
};
ItemSet.types = {
background: BackgroundItem,
box: BoxItem,
range: RangeItem,
point: PointItem
};
ItemSet.prototype._onAdd = ItemSet.prototype._onUpdate;
var errorFound2 = false;
var allOptions$2;
var printStyle = "background: #FFeeee; color: #dd0000";
var Validator3 = class _Validator {
/**
* @ignore
*/
constructor() {
}
/**
* Main function to be called
* @param {Object} options
* @param {Object} referenceOptions
* @param {Object} subObject
* @returns {boolean}
* @static
*/
static validate(options, referenceOptions, subObject) {
errorFound2 = false;
allOptions$2 = referenceOptions;
let usedOptions = referenceOptions;
if (subObject !== void 0) {
usedOptions = referenceOptions[subObject];
}
_Validator.parse(options, usedOptions, []);
return errorFound2;
}
/**
* Will traverse an object recursively and check every value
* @param {Object} options
* @param {Object} referenceOptions
* @param {array} path    | where to look for the actual option
* @static
*/
static parse(options, referenceOptions, path) {
for (let option2 in options) {
if (!Object.prototype.hasOwnProperty.call(options, option2))
continue;
_Validator.check(option2, options, referenceOptions, path);
}
}
/**
* Check every value. If the value is an object, call the parse function on that object.
* @param {string} option
* @param {Object} options
* @param {Object} referenceOptions
* @param {array} path    | where to look for the actual option
* @static
*/
static check(option2, options, referenceOptions, path) {
if (referenceOptions[option2] === void 0 && referenceOptions.__any__ === void 0) {
_Validator.getSuggestion(option2, referenceOptions, path);
return;
}
let referenceOption = option2;
let is_object = true;
if (referenceOptions[option2] === void 0 && referenceOptions.__any__ !== void 0) {
referenceOption = "__any__";
is_object = _Validator.getType(options[option2]) === "object";
}
let refOptionObj = referenceOptions[referenceOption];
if (is_object && refOptionObj.__type__ !== void 0) {
refOptionObj = refOptionObj.__type__;
}
_Validator.checkFields(option2, options, referenceOptions, referenceOption, refOptionObj, path);
}
/**
*
* @param {string}  option           | the option property
* @param {Object}  options          | The supplied options object
* @param {Object}  referenceOptions | The reference options containing all options and their allowed formats
* @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
* @param {string}  refOptionObj     | This is the type object from the reference options
* @param {Array}   path             | where in the object is the option
* @static
*/
static checkFields(option2, options, referenceOptions, referenceOption, refOptionObj, path) {
let log = function(message) {
console.log("%c" + message + _Validator.printLocation(path, option2), printStyle);
};
let optionType = _Validator.getType(options[option2]);
let refOptionType = refOptionObj[optionType];
if (refOptionType !== void 0) {
if (_Validator.getType(refOptionType) === "array" && refOptionType.indexOf(options[option2]) === -1) {
log('Invalid option detected in "' + option2 + '". Allowed values are:' + _Validator.print(refOptionType) + ' not "' + options[option2] + '". ');
errorFound2 = true;
} else if (optionType === "object" && referenceOption !== "__any__") {
path = availableUtils.copyAndExtendArray(path, option2);
_Validator.parse(options[option2], referenceOptions[referenceOption], path);
}
} else if (refOptionObj["any"] === void 0) {
log('Invalid type received for "' + option2 + '". Expected: ' + _Validator.print(Object.keys(refOptionObj)) + ". Received [" + optionType + '] "' + options[option2] + '"');
errorFound2 = true;
}
}
/**
*
* @param {Object|boolean|number|string|Array.<number>|Date|Node|Moment|undefined|null} object
* @returns {string}
* @static
*/
static getType(object2) {
var type = typeof object2;
if (type === "object") {
if (object2 === null) {
return "null";
}
if (object2 instanceof Boolean) {
return "boolean";
}
if (object2 instanceof Number) {
return "number";
}
if (object2 instanceof String) {
return "string";
}
if (Array.isArray(object2)) {
return "array";
}
if (object2 instanceof Date) {
return "date";
}
if (object2.nodeType !== void 0) {
return "dom";
}
if (object2._isAMomentObject === true) {
return "moment";
}
return "object";
} else if (type === "number") {
return "number";
} else if (type === "boolean") {
return "boolean";
} else if (type === "string") {
return "string";
} else if (type === void 0) {
return "undefined";
}
return type;
}
/**
* @param {string} option
* @param {Object} options
* @param {Array.<string>} path
* @static
*/
static getSuggestion(option2, options, path) {
let localSearch = _Validator.findInOptions(option2, options, path, false);
let globalSearch = _Validator.findInOptions(option2, allOptions$2, [], true);
let localSearchThreshold = 8;
let globalSearchThreshold = 4;
let msg;
if (localSearch.indexMatch !== void 0) {
msg = " in " + _Validator.printLocation(localSearch.path, option2, "") + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
} else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
msg = " in " + _Validator.printLocation(localSearch.path, option2, "") + "Perhaps it was misplaced? Matching option found at: " + _Validator.printLocation(globalSearch.path, globalSearch.closestMatch, "");
} else if (localSearch.distance <= localSearchThreshold) {
msg = '. Did you mean "' + localSearch.closestMatch + '"?' + _Validator.printLocation(localSearch.path, option2);
} else {
msg = ". Did you mean one of these: " + _Validator.print(Object.keys(options)) + _Validator.printLocation(path, option2);
}
console.log('%cUnknown option detected: "' + option2 + '"' + msg, printStyle);
errorFound2 = true;
}
/**
* traverse the options in search for a match.
* @param {string} option
* @param {Object} options
* @param {Array} path    | where to look for the actual option
* @param {boolean} [recursive=false]
* @returns {{closestMatch: string, path: Array, distance: number}}
* @static
*/
static findInOptions(option2, options, path, recursive = false) {
let min = 1e9;
let closestMatch = "";
let closestMatchPath = [];
let lowerCaseOption = option2.toLowerCase();
let indexMatch = void 0;
for (let op in options) {
if (!Object.prototype.hasOwnProperty.call(options, op))
continue;
let distance;
if (options[op].__type__ !== void 0 && recursive === true) {
let result = _Validator.findInOptions(option2, options[op], availableUtils.copyAndExtendArray(path, op));
if (min > result.distance) {
closestMatch = result.closestMatch;
closestMatchPath = result.path;
min = result.distance;
indexMatch = result.indexMatch;
}
} else {
if (op.toLowerCase().indexOf(lowerCaseOption) !== -1) {
indexMatch = op;
}
distance = _Validator.levenshteinDistance(option2, op);
if (min > distance) {
closestMatch = op;
closestMatchPath = availableUtils.copyArray(path);
min = distance;
}
}
}
return { closestMatch, path: closestMatchPath, distance: min, indexMatch };
}
/**
* @param {Array.<string>} path
* @param {Object} option
* @param {string} prefix
* @returns {String}
* @static
*/
static printLocation(path, option2, prefix = "Problem value found at: \n") {
let str = "\n\n" + prefix + "options = {\n";
for (let i = 0; i < path.length; i++) {
for (let j = 0; j < i + 1; j++) {
str += "  ";
}
str += path[i] + ": {\n";
}
for (let j = 0; j < path.length + 1; j++) {
str += "  ";
}
str += option2 + "\n";
for (let i = 0; i < path.length + 1; i++) {
for (let j = 0; j < path.length - i; j++) {
str += "  ";
}
str += "}\n";
}
return str + "\n\n";
}
/**
* @param {Object} options
* @returns {String}
* @static
*/
static print(options) {
return JSON.stringify(options).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ", ");
}
/**
*  Compute the edit distance between the two given strings
* http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
*
* Copyright (c) 2011 Andrei Mackenzie
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @param {string} a
* @param {string} b
* @returns {Array.<Array.<number>>}}
* @static
*/
static levenshteinDistance(a, b) {
if (a.length === 0) return b.length;
if (b.length === 0) return a.length;
var matrix = [];
var i;
for (i = 0; i <= b.length; i++) {
matrix[i] = [i];
}
var j;
for (j = 0; j <= a.length; j++) {
matrix[0][j] = j;
}
for (i = 1; i <= b.length; i++) {
for (j = 1; j <= a.length; j++) {
if (b.charAt(i - 1) == a.charAt(j - 1)) {
matrix[i][j] = matrix[i - 1][j - 1];
} else {
matrix[i][j] = Math.min(
matrix[i - 1][j - 1] + 1,
Math.min(
matrix[i][j - 1] + 1,
matrix[i - 1][j] + 1
)
);
}
}
}
return matrix[b.length][a.length];
}
};
var htmlColors2 = { black: "#000000", navy: "#000080", darkblue: "#00008B", mediumblue: "#0000CD", blue: "#0000FF", darkgreen: "#006400", green: "#008000", teal: "#008080", darkcyan: "#008B8B", deepskyblue: "#00BFFF", darkturquoise: "#00CED1", mediumspringgreen: "#00FA9A", lime: "#00FF00", springgreen: "#00FF7F", aqua: "#00FFFF", cyan: "#00FFFF", midnightblue: "#191970", dodgerblue: "#1E90FF", lightseagreen: "#20B2AA", forestgreen: "#228B22", seagreen: "#2E8B57", darkslategray: "#2F4F4F", limegreen: "#32CD32", mediumseagreen: "#3CB371", turquoise: "#40E0D0", royalblue: "#4169E1", steelblue: "#4682B4", darkslateblue: "#483D8B", mediumturquoise: "#48D1CC", indigo: "#4B0082", darkolivegreen: "#556B2F", cadetblue: "#5F9EA0", cornflowerblue: "#6495ED", mediumaquamarine: "#66CDAA", dimgray: "#696969", slateblue: "#6A5ACD", olivedrab: "#6B8E23", slategray: "#708090", lightslategray: "#778899", mediumslateblue: "#7B68EE", lawngreen: "#7CFC00", chartreuse: "#7FFF00", aquamarine: "#7FFFD4", maroon: "#800000", purple: "#800080", olive: "#808000", gray: "#808080", skyblue: "#87CEEB", lightskyblue: "#87CEFA", blueviolet: "#8A2BE2", darkred: "#8B0000", darkmagenta: "#8B008B", saddlebrown: "#8B4513", darkseagreen: "#8FBC8F", lightgreen: "#90EE90", mediumpurple: "#9370D8", darkviolet: "#9400D3", palegreen: "#98FB98", darkorchid: "#9932CC", yellowgreen: "#9ACD32", sienna: "#A0522D", brown: "#A52A2A", darkgray: "#A9A9A9", lightblue: "#ADD8E6", greenyellow: "#ADFF2F", paleturquoise: "#AFEEEE", lightsteelblue: "#B0C4DE", powderblue: "#B0E0E6", firebrick: "#B22222", darkgoldenrod: "#B8860B", mediumorchid: "#BA55D3", rosybrown: "#BC8F8F", darkkhaki: "#BDB76B", silver: "#C0C0C0", mediumvioletred: "#C71585", indianred: "#CD5C5C", peru: "#CD853F", chocolate: "#D2691E", tan: "#D2B48C", lightgrey: "#D3D3D3", palevioletred: "#D87093", thistle: "#D8BFD8", orchid: "#DA70D6", goldenrod: "#DAA520", crimson: "#DC143C", gainsboro: "#DCDCDC", plum: "#DDA0DD", burlywood: "#DEB887", lightcyan: "#E0FFFF", lavender: "#E6E6FA", darksalmon: "#E9967A", violet: "#EE82EE", palegoldenrod: "#EEE8AA", lightcoral: "#F08080", khaki: "#F0E68C", aliceblue: "#F0F8FF", honeydew: "#F0FFF0", azure: "#F0FFFF", sandybrown: "#F4A460", wheat: "#F5DEB3", beige: "#F5F5DC", whitesmoke: "#F5F5F5", mintcream: "#F5FFFA", ghostwhite: "#F8F8FF", salmon: "#FA8072", antiquewhite: "#FAEBD7", linen: "#FAF0E6", lightgoldenrodyellow: "#FAFAD2", oldlace: "#FDF5E6", red: "#FF0000", fuchsia: "#FF00FF", magenta: "#FF00FF", deeppink: "#FF1493", orangered: "#FF4500", tomato: "#FF6347", hotpink: "#FF69B4", coral: "#FF7F50", darkorange: "#FF8C00", lightsalmon: "#FFA07A", orange: "#FFA500", lightpink: "#FFB6C1", pink: "#FFC0CB", gold: "#FFD700", peachpuff: "#FFDAB9", navajowhite: "#FFDEAD", moccasin: "#FFE4B5", bisque: "#FFE4C4", mistyrose: "#FFE4E1", blanchedalmond: "#FFEBCD", papayawhip: "#FFEFD5", lavenderblush: "#FFF0F5", seashell: "#FFF5EE", cornsilk: "#FFF8DC", lemonchiffon: "#FFFACD", floralwhite: "#FFFAF0", snow: "#FFFAFA", yellow: "#FFFF00", lightyellow: "#FFFFE0", ivory: "#FFFFF0", white: "#FFFFFF" };
var ColorPicker3 = class {
/**
* @param {number} [pixelRatio=1]
*/
constructor(pixelRatio = 1) {
this.pixelRatio = pixelRatio;
this.generated = false;
this.centerCoordinates = { x: 289 / 2, y: 289 / 2 };
this.r = 289 * 0.49;
this.color = { r: 255, g: 255, b: 255, a: 1 };
this.hueCircle = void 0;
this.initialColor = { r: 255, g: 255, b: 255, a: 1 };
this.previousColor = void 0;
this.applied = false;
this.updateCallback = () => {
};
this.closeCallback = () => {
};
this._create();
}
/**
* this inserts the colorPicker into a div from the DOM
* @param {Element} container
*/
insertTo(container) {
if (this.hammer !== void 0) {
this.hammer.destroy();
this.hammer = void 0;
}
this.container = container;
this.container.appendChild(this.frame);
this._bindHammer();
this._setSize();
}
/**
* the callback is executed on apply and save. Bind it to the application
* @param {function} callback
*/
setUpdateCallback(callback) {
if (typeof callback === "function") {
this.updateCallback = callback;
} else {
throw new Error("Function attempted to set as colorPicker update callback is not a function.");
}
}
/**
* the callback is executed on apply and save. Bind it to the application
* @param {function} callback
*/
setCloseCallback(callback) {
if (typeof callback === "function") {
this.closeCallback = callback;
} else {
throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
}
}
/**
*
* @param {string} color
* @returns {String}
* @private
*/
_isColorString(color) {
if (typeof color === "string") {
return htmlColors2[color];
}
}
/**
* Set the color of the colorPicker
* Supported formats:
* 'red'                   --> HTML color string
* '#ffffff'               --> hex string
* 'rgb(255,255,255)'      --> rgb string
* 'rgba(255,255,255,1.0)' --> rgba string
* {r:255,g:255,b:255}     --> rgb object
* {r:255,g:255,b:255,a:1.0} --> rgba object
* @param {string|Object} color
* @param {boolean} [setInitial=true]
*/
setColor(color, setInitial = true) {
if (color === "none") {
return;
}
let rgba;
var htmlColor = this._isColorString(color);
if (htmlColor !== void 0) {
color = htmlColor;
}
if (availableUtils.isString(color) === true) {
if (availableUtils.isValidRGB(color) === true) {
let rgbaArray = color.substr(4).substr(0, color.length - 5).split(",");
rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: 1 };
} else if (availableUtils.isValidRGBA(color) === true) {
let rgbaArray = color.substr(5).substr(0, color.length - 6).split(",");
rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: rgbaArray[3] };
} else if (availableUtils.isValidHex(color) === true) {
let rgbObj = availableUtils.hexToRGB(color);
rgba = { r: rgbObj.r, g: rgbObj.g, b: rgbObj.b, a: 1 };
}
} else {
if (color instanceof Object) {
if (color.r !== void 0 && color.g !== void 0 && color.b !== void 0) {
let alpha = color.a !== void 0 ? color.a : "1.0";
rgba = { r: color.r, g: color.g, b: color.b, a: alpha };
}
}
}
if (rgba === void 0) {
throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + JSON.stringify(color));
} else {
this._setColor(rgba, setInitial);
}
}
/**
* this shows the color picker.
* The hue circle is constructed once and stored.
*/
show() {
if (this.closeCallback !== void 0) {
this.closeCallback();
this.closeCallback = void 0;
}
this.applied = false;
this.frame.style.display = "block";
this._generateHueCircle();
}
/**
* Hide the picker. Is called by the cancel button.
* Optional boolean to store the previous color for easy access later on.
* @param {boolean} [storePrevious=true]
* @private
*/
_hide(storePrevious = true) {
if (storePrevious === true) {
this.previousColor = availableUtils.extend({}, this.color);
}
if (this.applied === true) {
this.updateCallback(this.initialColor);
}
this.frame.style.display = "none";
setTimeout(() => {
if (this.closeCallback !== void 0) {
this.closeCallback();
this.closeCallback = void 0;
}
}, 0);
}
/**
* bound to the save button. Saves and hides.
* @private
*/
_save() {
this.updateCallback(this.color);
this.applied = false;
this._hide();
}
/**
* Bound to apply button. Saves but does not close. Is undone by the cancel button.
* @private
*/
_apply() {
this.applied = true;
this.updateCallback(this.color);
this._updatePicker(this.color);
}
/**
* load the color from the previous session.
* @private
*/
_loadLast() {
if (this.previousColor !== void 0) {
this.setColor(this.previousColor, false);
} else {
alert("There is no last color to load...");
}
}
/**
* set the color, place the picker
* @param {Object} rgba
* @param {boolean} [setInitial=true]
* @private
*/
_setColor(rgba, setInitial = true) {
if (setInitial === true) {
this.initialColor = availableUtils.extend({}, rgba);
}
this.color = rgba;
let hsv = availableUtils.RGBToHSV(rgba.r, rgba.g, rgba.b);
let angleConvert = 2 * Math.PI;
let radius = this.r * hsv.s;
let x = this.centerCoordinates.x + radius * Math.sin(angleConvert * hsv.h);
let y = this.centerCoordinates.y + radius * Math.cos(angleConvert * hsv.h);
this.colorPickerSelector.style.left = x - 0.5 * this.colorPickerSelector.clientWidth + "px";
this.colorPickerSelector.style.top = y - 0.5 * this.colorPickerSelector.clientHeight + "px";
this._updatePicker(rgba);
}
/**
* bound to opacity control
* @param {number} value
* @private
*/
_setOpacity(value) {
this.color.a = value / 100;
this._updatePicker(this.color);
}
/**
* bound to brightness control
* @param {number} value
* @private
*/
_setBrightness(value) {
let hsv = availableUtils.RGBToHSV(this.color.r, this.color.g, this.color.b);
hsv.v = value / 100;
let rgba = availableUtils.HSVToRGB(hsv.h, hsv.s, hsv.v);
rgba["a"] = this.color.a;
this.color = rgba;
this._updatePicker();
}
/**
* update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
* @param {Object} rgba
* @private
*/
_updatePicker(rgba = this.color) {
let hsv = availableUtils.RGBToHSV(rgba.r, rgba.g, rgba.b);
let ctx = this.colorPickerCanvas.getContext("2d");
if (this.pixelRation === void 0) {
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
}
ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
let w = this.colorPickerCanvas.clientWidth;
let h = this.colorPickerCanvas.clientHeight;
ctx.clearRect(0, 0, w, h);
ctx.putImageData(this.hueCircle, 0, 0);
ctx.fillStyle = "rgba(0,0,0," + (1 - hsv.v) + ")";
ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
ctx.fill();
this.brightnessRange.value = 100 * hsv.v;
this.opacityRange.value = 100 * rgba.a;
this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
}
/**
* used by create to set the size of the canvas.
* @private
*/
_setSize() {
this.colorPickerCanvas.style.width = "100%";
this.colorPickerCanvas.style.height = "100%";
this.colorPickerCanvas.width = 289 * this.pixelRatio;
this.colorPickerCanvas.height = 289 * this.pixelRatio;
}
/**
* create all dom elements
* TODO: cleanup, lots of similar dom elements
* @private
*/
_create() {
this.frame = document.createElement("div");
this.frame.className = "vis-color-picker";
this.colorPickerDiv = document.createElement("div");
this.colorPickerSelector = document.createElement("div");
this.colorPickerSelector.className = "vis-selector";
this.colorPickerDiv.appendChild(this.colorPickerSelector);
this.colorPickerCanvas = document.createElement("canvas");
this.colorPickerDiv.appendChild(this.colorPickerCanvas);
if (!this.colorPickerCanvas.getContext) {
let noCanvas = document.createElement("DIV");
noCanvas.style.color = "red";
noCanvas.style.fontWeight = "bold";
noCanvas.style.padding = "10px";
noCanvas.innerHTML = "Error: your browser does not support HTML canvas";
this.colorPickerCanvas.appendChild(noCanvas);
} else {
let ctx = this.colorPickerCanvas.getContext("2d");
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
}
this.colorPickerDiv.className = "vis-color";
this.opacityDiv = document.createElement("div");
this.opacityDiv.className = "vis-opacity";
this.brightnessDiv = document.createElement("div");
this.brightnessDiv.className = "vis-brightness";
this.arrowDiv = document.createElement("div");
this.arrowDiv.className = "vis-arrow";
this.opacityRange = document.createElement("input");
try {
this.opacityRange.type = "range";
this.opacityRange.min = "0";
this.opacityRange.max = "100";
} catch (err) {
}
this.opacityRange.value = "100";
this.opacityRange.className = "vis-range";
this.brightnessRange = document.createElement("input");
try {
this.brightnessRange.type = "range";
this.brightnessRange.min = "0";
this.brightnessRange.max = "100";
} catch (err) {
}
this.brightnessRange.value = "100";
this.brightnessRange.className = "vis-range";
this.opacityDiv.appendChild(this.opacityRange);
this.brightnessDiv.appendChild(this.brightnessRange);
var me = this;
this.opacityRange.onchange = function() {
me._setOpacity(this.value);
};
this.opacityRange.oninput = function() {
me._setOpacity(this.value);
};
this.brightnessRange.onchange = function() {
me._setBrightness(this.value);
};
this.brightnessRange.oninput = function() {
me._setBrightness(this.value);
};
this.brightnessLabel = document.createElement("div");
this.brightnessLabel.className = "vis-label vis-brightness";
this.brightnessLabel.innerHTML = "brightness:";
this.opacityLabel = document.createElement("div");
this.opacityLabel.className = "vis-label vis-opacity";
this.opacityLabel.innerHTML = "opacity:";
this.newColorDiv = document.createElement("div");
this.newColorDiv.className = "vis-new-color";
this.newColorDiv.innerHTML = "new";
this.initialColorDiv = document.createElement("div");
this.initialColorDiv.className = "vis-initial-color";
this.initialColorDiv.innerHTML = "initial";
this.cancelButton = document.createElement("div");
this.cancelButton.className = "vis-button vis-cancel";
this.cancelButton.innerHTML = "cancel";
this.cancelButton.onclick = this._hide.bind(this, false);
this.applyButton = document.createElement("div");
this.applyButton.className = "vis-button vis-apply";
this.applyButton.innerHTML = "apply";
this.applyButton.onclick = this._apply.bind(this);
this.saveButton = document.createElement("div");
this.saveButton.className = "vis-button vis-save";
this.saveButton.innerHTML = "save";
this.saveButton.onclick = this._save.bind(this);
this.loadButton = document.createElement("div");
this.loadButton.className = "vis-button vis-load";
this.loadButton.innerHTML = "load last";
this.loadButton.onclick = this._loadLast.bind(this);
this.frame.appendChild(this.colorPickerDiv);
this.frame.appendChild(this.arrowDiv);
this.frame.appendChild(this.brightnessLabel);
this.frame.appendChild(this.brightnessDiv);
this.frame.appendChild(this.opacityLabel);
this.frame.appendChild(this.opacityDiv);
this.frame.appendChild(this.newColorDiv);
this.frame.appendChild(this.initialColorDiv);
this.frame.appendChild(this.cancelButton);
this.frame.appendChild(this.applyButton);
this.frame.appendChild(this.saveButton);
this.frame.appendChild(this.loadButton);
}
/**
* bind hammer to the color picker
* @private
*/
_bindHammer() {
this.drag = {};
this.pinch = {};
this.hammer = new Hammer3(this.colorPickerCanvas);
this.hammer.get("pinch").set({ enable: true });
onTouch(this.hammer, (event2) => {
this._moveSelector(event2);
});
this.hammer.on("tap", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panstart", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panmove", (event2) => {
this._moveSelector(event2);
});
this.hammer.on("panend", (event2) => {
this._moveSelector(event2);
});
}
/**
* generate the hue circle. This is relatively heavy (200ms) and is done only once on the first time it is shown.
* @private
*/
_generateHueCircle() {
if (this.generated === false) {
let ctx = this.colorPickerCanvas.getContext("2d");
if (this.pixelRation === void 0) {
this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
}
ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
let w = this.colorPickerCanvas.clientWidth;
let h = this.colorPickerCanvas.clientHeight;
ctx.clearRect(0, 0, w, h);
let x, y, hue, sat;
this.centerCoordinates = { x: w * 0.5, y: h * 0.5 };
this.r = 0.49 * w;
let angleConvert = 2 * Math.PI / 360;
let hfac = 1 / 360;
let sfac = 1 / this.r;
let rgb;
for (hue = 0; hue < 360; hue++) {
for (sat = 0; sat < this.r; sat++) {
x = this.centerCoordinates.x + sat * Math.sin(angleConvert * hue);
y = this.centerCoordinates.y + sat * Math.cos(angleConvert * hue);
rgb = availableUtils.HSVToRGB(hue * hfac, sat * sfac, 1);
ctx.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
ctx.fillRect(x - 0.5, y - 0.5, 2, 2);
}
}
ctx.strokeStyle = "rgba(0,0,0,1)";
ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
ctx.stroke();
this.hueCircle = ctx.getImageData(0, 0, w, h);
}
this.generated = true;
}
/**
* move the selector. This is called by hammer functions.
*
* @param {Event}  event   The event
* @private
*/
_moveSelector(event2) {
let rect = this.colorPickerDiv.getBoundingClientRect();
let left = event2.center.x - rect.left;
let top = event2.center.y - rect.top;
let centerY = 0.5 * this.colorPickerDiv.clientHeight;
let centerX = 0.5 * this.colorPickerDiv.clientWidth;
let x = left - centerX;
let y = top - centerY;
let angle = Math.atan2(x, y);
let radius = 0.98 * Math.min(Math.sqrt(x * x + y * y), centerX);
let newTop = Math.cos(angle) * radius + centerY;
let newLeft = Math.sin(angle) * radius + centerX;
this.colorPickerSelector.style.top = newTop - 0.5 * this.colorPickerSelector.clientHeight + "px";
this.colorPickerSelector.style.left = newLeft - 0.5 * this.colorPickerSelector.clientWidth + "px";
let h = angle / (2 * Math.PI);
h = h < 0 ? h + 1 : h;
let s = radius / this.r;
let hsv = availableUtils.RGBToHSV(this.color.r, this.color.g, this.color.b);
hsv.h = h;
hsv.s = s;
let rgba = availableUtils.HSVToRGB(hsv.h, hsv.s, hsv.v);
rgba["a"] = this.color.a;
this.color = rgba;
this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
}
};
var Configurator3 = class {
/**
* @param {Object} parentModule        | the location where parentModule.setOptions() can be called
* @param {Object} defaultContainer    | the default container of the module
* @param {Object} configureOptions    | the fully configured and predefined options set found in allOptions.js
* @param {number} pixelRatio          | canvas pixel ratio
*/
constructor(parentModule, defaultContainer, configureOptions2, pixelRatio = 1) {
this.parent = parentModule;
this.changedOptions = [];
this.container = defaultContainer;
this.allowCreation = false;
this.options = {};
this.initialized = false;
this.popupCounter = 0;
this.defaultOptions = {
enabled: false,
filter: true,
container: void 0,
showButton: true
};
availableUtils.extend(this.options, this.defaultOptions);
this.configureOptions = configureOptions2;
this.moduleOptions = {};
this.domElements = [];
this.popupDiv = {};
this.popupLimit = 5;
this.popupHistory = {};
this.colorPicker = new ColorPicker3(pixelRatio);
this.wrapper = void 0;
}
/**
* refresh all options.
* Because all modules parse their options by themselves, we just use their options. We copy them here.
*
* @param {Object} options
*/
setOptions(options) {
if (options !== void 0) {
this.popupHistory = {};
this._removePopup();
let enabled = true;
if (typeof options === "string") {
this.options.filter = options;
} else if (Array.isArray(options)) {
this.options.filter = options.join();
} else if (typeof options === "object") {
if (options == null) {
throw new TypeError("options cannot be null");
}
if (options.container !== void 0) {
this.options.container = options.container;
}
if (options.filter !== void 0) {
this.options.filter = options.filter;
}
if (options.showButton !== void 0) {
this.options.showButton = options.showButton;
}
if (options.enabled !== void 0) {
enabled = options.enabled;
}
} else if (typeof options === "boolean") {
this.options.filter = true;
enabled = options;
} else if (typeof options === "function") {
this.options.filter = options;
enabled = true;
}
if (this.options.filter === false) {
enabled = false;
}
this.options.enabled = enabled;
}
this._clean();
}
/**
*
* @param {Object} moduleOptions
*/
setModuleOptions(moduleOptions) {
this.moduleOptions = moduleOptions;
if (this.options.enabled === true) {
this._clean();
if (this.options.container !== void 0) {
this.container = this.options.container;
}
this._create();
}
}
/**
* Create all DOM elements
* @private
*/
_create() {
this._clean();
this.changedOptions = [];
let filter = this.options.filter;
let counter = 0;
let show = false;
for (let option2 in this.configureOptions) {
if (!Object.prototype.hasOwnProperty.call(this.configureOptions, option2))
continue;
this.allowCreation = false;
show = false;
if (typeof filter === "function") {
show = filter(option2, []);
show = show || this._handleObject(this.configureOptions[option2], [option2], true);
} else if (filter === true || filter.indexOf(option2) !== -1) {
show = true;
}
if (show !== false) {
this.allowCreation = true;
if (counter > 0) {
this._makeItem([]);
}
this._makeHeader(option2);
this._handleObject(this.configureOptions[option2], [option2]);
}
counter++;
}
this._makeButton();
this._push();
}
/**
* draw all DOM elements on the screen
* @private
*/
_push() {
this.wrapper = document.createElement("div");
this.wrapper.className = "vis-configuration-wrapper";
this.container.appendChild(this.wrapper);
for (var i = 0; i < this.domElements.length; i++) {
this.wrapper.appendChild(this.domElements[i]);
}
this._showPopupIfNeeded();
}
/**
* delete all DOM elements
* @private
*/
_clean() {
for (var i = 0; i < this.domElements.length; i++) {
this.wrapper.removeChild(this.domElements[i]);
}
if (this.wrapper !== void 0) {
this.container.removeChild(this.wrapper);
this.wrapper = void 0;
}
this.domElements = [];
this._removePopup();
}
/**
* get the value from the actualOptions if it exists
* @param {array} path    | where to look for the actual option
* @returns {*}
* @private
*/
_getValue(path) {
let base = this.moduleOptions;
for (let i = 0; i < path.length; i++) {
if (base[path[i]] !== void 0) {
base = base[path[i]];
} else {
base = void 0;
break;
}
}
return base;
}
/**
* all option elements are wrapped in an item
* @param {Array} path    | where to look for the actual option
* @param {Array.<Element>} domElements
* @returns {number}
* @private
*/
_makeItem(path, ...domElements) {
if (this.allowCreation === true) {
let item = document.createElement("div");
item.className = "vis-configuration vis-config-item vis-config-s" + path.length;
domElements.forEach((element) => {
item.appendChild(element);
});
this.domElements.push(item);
return this.domElements.length;
}
return 0;
}
/**
* header for major subjects
* @param {string} name
* @private
*/
_makeHeader(name) {
let div = document.createElement("div");
div.className = "vis-configuration vis-config-header";
div.innerHTML = availableUtils.xss(name);
this._makeItem([], div);
}
/**
* make a label, if it is an object label, it gets different styling.
* @param {string} name
* @param {array} path    | where to look for the actual option
* @param {string} objectLabel
* @returns {HTMLElement}
* @private
*/
_makeLabel(name, path, objectLabel = false) {
let div = document.createElement("div");
div.className = "vis-configuration vis-config-label vis-config-s" + path.length;
if (objectLabel === true) {
div.innerHTML = availableUtils.xss("<i><b>" + name + ":</b></i>");
} else {
div.innerHTML = availableUtils.xss(name + ":");
}
return div;
}
/**
* make a dropdown list for multiple possible string optoins
* @param {Array.<number>} arr
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_makeDropdown(arr, value, path) {
let select = document.createElement("select");
select.className = "vis-configuration vis-config-select";
let selectedValue = 0;
if (value !== void 0) {
if (arr.indexOf(value) !== -1) {
selectedValue = arr.indexOf(value);
}
}
for (let i = 0; i < arr.length; i++) {
let option2 = document.createElement("option");
option2.value = arr[i];
if (i === selectedValue) {
option2.selected = "selected";
}
option2.innerHTML = arr[i];
select.appendChild(option2);
}
let me = this;
select.onchange = function() {
me._update(this.value, path);
};
let label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, select);
}
/**
* make a range object for numeric options
* @param {Array.<number>} arr
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_makeRange(arr, value, path) {
let defaultValue = arr[0];
let min = arr[1];
let max = arr[2];
let step = arr[3];
let range = document.createElement("input");
range.className = "vis-configuration vis-config-range";
try {
range.type = "range";
range.min = min;
range.max = max;
} catch (err) {
}
range.step = step;
let popupString = "";
let popupValue = 0;
if (value !== void 0) {
let factor = 1.2;
if (value < 0 && value * factor < min) {
range.min = Math.ceil(value * factor);
popupValue = range.min;
popupString = "range increased";
} else if (value / factor < min) {
range.min = Math.ceil(value / factor);
popupValue = range.min;
popupString = "range increased";
}
if (value * factor > max && max !== 1) {
range.max = Math.ceil(value * factor);
popupValue = range.max;
popupString = "range increased";
}
range.value = value;
} else {
range.value = defaultValue;
}
let input = document.createElement("input");
input.className = "vis-configuration vis-config-rangeinput";
input.value = Number(range.value);
var me = this;
range.onchange = function() {
input.value = this.value;
me._update(Number(this.value), path);
};
range.oninput = function() {
input.value = this.value;
};
let label = this._makeLabel(path[path.length - 1], path);
let itemIndex = this._makeItem(path, label, range, input);
if (popupString !== "" && this.popupHistory[itemIndex] !== popupValue) {
this.popupHistory[itemIndex] = popupValue;
this._setupPopup(popupString, itemIndex);
}
}
/**
* make a button object
* @private
*/
_makeButton() {
if (this.options.showButton === true) {
let generateButton = document.createElement("div");
generateButton.className = "vis-configuration vis-config-button";
generateButton.innerHTML = "generate options";
generateButton.onclick = () => {
this._printOptions();
};
generateButton.onmouseover = () => {
generateButton.className = "vis-configuration vis-config-button hover";
};
generateButton.onmouseout = () => {
generateButton.className = "vis-configuration vis-config-button";
};
this.optionsContainer = document.createElement("div");
this.optionsContainer.className = "vis-configuration vis-config-option-container";
this.domElements.push(this.optionsContainer);
this.domElements.push(generateButton);
}
}
/**
* prepare the popup
* @param {string} string
* @param {number} index
* @private
*/
_setupPopup(string2, index) {
if (this.initialized === true && this.allowCreation === true && this.popupCounter < this.popupLimit) {
let div = document.createElement("div");
div.id = "vis-configuration-popup";
div.className = "vis-configuration-popup";
div.innerHTML = availableUtils.xss(string2);
div.onclick = () => {
this._removePopup();
};
this.popupCounter += 1;
this.popupDiv = { html: div, index };
}
}
/**
* remove the popup from the dom
* @private
*/
_removePopup() {
if (this.popupDiv.html !== void 0) {
this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);
clearTimeout(this.popupDiv.hideTimeout);
clearTimeout(this.popupDiv.deleteTimeout);
this.popupDiv = {};
}
}
/**
* Show the popup if it is needed.
* @private
*/
_showPopupIfNeeded() {
if (this.popupDiv.html !== void 0) {
let correspondingElement = this.domElements[this.popupDiv.index];
let rect = correspondingElement.getBoundingClientRect();
this.popupDiv.html.style.left = rect.left + "px";
this.popupDiv.html.style.top = rect.top - 30 + "px";
document.body.appendChild(this.popupDiv.html);
this.popupDiv.hideTimeout = setTimeout(() => {
this.popupDiv.html.style.opacity = 0;
}, 1500);
this.popupDiv.deleteTimeout = setTimeout(() => {
this._removePopup();
}, 1800);
}
}
/**
* make a checkbox for boolean options.
* @param {number} defaultValue
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_makeCheckbox(defaultValue, value, path) {
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "vis-configuration vis-config-checkbox";
checkbox.checked = defaultValue;
if (value !== void 0) {
checkbox.checked = value;
if (value !== defaultValue) {
if (typeof defaultValue === "object") {
if (value !== defaultValue.enabled) {
this.changedOptions.push({ path, value });
}
} else {
this.changedOptions.push({ path, value });
}
}
}
let me = this;
checkbox.onchange = function() {
me._update(this.checked, path);
};
let label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, checkbox);
}
/**
* make a text input field for string options.
* @param {number} defaultValue
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_makeTextInput(defaultValue, value, path) {
var checkbox = document.createElement("input");
checkbox.type = "text";
checkbox.className = "vis-configuration vis-config-text";
checkbox.value = value;
if (value !== defaultValue) {
this.changedOptions.push({ path, value });
}
let me = this;
checkbox.onchange = function() {
me._update(this.value, path);
};
let label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, checkbox);
}
/**
* make a color field with a color picker for color fields
* @param {Array.<number>} arr
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_makeColorField(arr, value, path) {
let defaultColor = arr[1];
let div = document.createElement("div");
value = value === void 0 ? defaultColor : value;
if (value !== "none") {
div.className = "vis-configuration vis-config-colorBlock";
div.style.backgroundColor = value;
} else {
div.className = "vis-configuration vis-config-colorBlock none";
}
value = value === void 0 ? defaultColor : value;
div.onclick = () => {
this._showColorPicker(value, div, path);
};
let label = this._makeLabel(path[path.length - 1], path);
this._makeItem(path, label, div);
}
/**
* used by the color buttons to call the color picker.
* @param {number} value
* @param {HTMLElement} div
* @param {array} path    | where to look for the actual option
* @private
*/
_showColorPicker(value, div, path) {
div.onclick = function() {
};
this.colorPicker.insertTo(div);
this.colorPicker.show();
this.colorPicker.setColor(value);
this.colorPicker.setUpdateCallback((color) => {
let colorString = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
div.style.backgroundColor = colorString;
this._update(colorString, path);
});
this.colorPicker.setCloseCallback(() => {
div.onclick = () => {
this._showColorPicker(value, div, path);
};
});
}
/**
* parse an object and draw the correct items
* @param {Object} obj
* @param {array} [path=[]]    | where to look for the actual option
* @param {boolean} [checkOnly=false]
* @returns {boolean}
* @private
*/
_handleObject(obj, path = [], checkOnly = false) {
let show = false;
let filter = this.options.filter;
let visibleInSet = false;
for (let subObj in obj) {
if (!Object.prototype.hasOwnProperty.call(obj, subObj))
continue;
show = true;
let item = obj[subObj];
let newPath = availableUtils.copyAndExtendArray(path, subObj);
if (typeof filter === "function") {
show = filter(subObj, path);
if (show === false) {
if (!Array.isArray(item) && typeof item !== "string" && typeof item !== "boolean" && item instanceof Object) {
this.allowCreation = false;
show = this._handleObject(item, newPath, true);
this.allowCreation = checkOnly === false;
}
}
}
if (show !== false) {
visibleInSet = true;
let value = this._getValue(newPath);
if (Array.isArray(item)) {
this._handleArray(item, value, newPath);
} else if (typeof item === "string") {
this._makeTextInput(item, value, newPath);
} else if (typeof item === "boolean") {
this._makeCheckbox(item, value, newPath);
} else if (item instanceof Object) {
let draw = true;
if (path.indexOf("physics") !== -1) {
if (this.moduleOptions.physics.solver !== subObj) {
draw = false;
}
}
if (draw === true) {
if (item.enabled !== void 0) {
let enabledPath = availableUtils.copyAndExtendArray(newPath, "enabled");
let enabledValue = this._getValue(enabledPath);
if (enabledValue === true) {
let label = this._makeLabel(subObj, newPath, true);
this._makeItem(newPath, label);
visibleInSet = this._handleObject(item, newPath) || visibleInSet;
} else {
this._makeCheckbox(item, enabledValue, newPath);
}
} else {
let label = this._makeLabel(subObj, newPath, true);
this._makeItem(newPath, label);
visibleInSet = this._handleObject(item, newPath) || visibleInSet;
}
}
} else {
console.error("dont know how to handle", item, subObj, newPath);
}
}
}
return visibleInSet;
}
/**
* handle the array type of option
* @param {Array.<number>} arr
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_handleArray(arr, value, path) {
if (typeof arr[0] === "string" && arr[0] === "color") {
this._makeColorField(arr, value, path);
if (arr[1] !== value) {
this.changedOptions.push({ path, value });
}
} else if (typeof arr[0] === "string") {
this._makeDropdown(arr, value, path);
if (arr[0] !== value) {
this.changedOptions.push({ path, value });
}
} else if (typeof arr[0] === "number") {
this._makeRange(arr, value, path);
if (arr[0] !== value) {
this.changedOptions.push({ path, value: Number(value) });
}
}
}
/**
* called to update the network with the new settings.
* @param {number} value
* @param {array} path    | where to look for the actual option
* @private
*/
_update(value, path) {
let options = this._constructOptions(value, path);
if (this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit) {
this.parent.body.emitter.emit("configChange", options);
}
this.initialized = true;
this.parent.setOptions(options);
}
/**
*
* @param {string|Boolean} value
* @param {Array.<string>} path
* @param {{}} optionsObj
* @returns {{}}
* @private
*/
_constructOptions(value, path, optionsObj = {}) {
let pointer = optionsObj;
value = value === "true" ? true : value;
value = value === "false" ? false : value;
for (let i = 0; i < path.length; i++) {
if (path[i] !== "global") {
if (pointer[path[i]] === void 0) {
pointer[path[i]] = {};
}
if (i !== path.length - 1) {
pointer = pointer[path[i]];
} else {
pointer[path[i]] = value;
}
}
}
return optionsObj;
}
/**
* @private
*/
_printOptions() {
let options = this.getOptions();
this.optionsContainer.innerHTML = "<pre>var options = " + JSON.stringify(options, null, 2) + "</pre>";
}
/**
*
* @returns {{}} options
*/
getOptions() {
let options = {};
for (var i = 0; i < this.changedOptions.length; i++) {
this._constructOptions(this.changedOptions[i].value, this.changedOptions[i].path, options);
}
return options;
}
};
function prepareElements(JSONcontainer) {
for (var elementType in JSONcontainer) {
if (!Object.prototype.hasOwnProperty.call(JSONcontainer, elementType))
continue;
JSONcontainer[elementType].redundant = JSONcontainer[elementType].used;
JSONcontainer[elementType].used = [];
}
}
function cleanupElements(JSONcontainer) {
for (var elementType in JSONcontainer) {
if (!Object.prototype.hasOwnProperty.call(JSONcontainer, elementType))
continue;
const elementTypeJsonContainer = JSONcontainer[elementType];
for (var i = 0; i < elementTypeJsonContainer.redundant.length; i++) {
elementTypeJsonContainer.redundant[i].parentNode.removeChild(elementTypeJsonContainer.redundant[i]);
}
elementTypeJsonContainer.redundant = [];
}
}
function resetElements(JSONcontainer) {
prepareElements(JSONcontainer);
cleanupElements(JSONcontainer);
prepareElements(JSONcontainer);
}
function getSVGElement(elementType, JSONcontainer, svgContainer) {
var element;
if (Object.prototype.hasOwnProperty.call(JSONcontainer, elementType)) {
if (JSONcontainer[elementType].redundant.length > 0) {
element = JSONcontainer[elementType].redundant[0];
JSONcontainer[elementType].redundant.shift();
} else {
element = document.createElementNS("http://www.w3.org/2000/svg", elementType);
svgContainer.appendChild(element);
}
} else {
element = document.createElementNS("http://www.w3.org/2000/svg", elementType);
JSONcontainer[elementType] = { used: [], redundant: [] };
svgContainer.appendChild(element);
}
JSONcontainer[elementType].used.push(element);
return element;
}
function getDOMElement(elementType, JSONcontainer, DOMContainer, insertBefore) {
var element;
if (Object.prototype.hasOwnProperty.call(JSONcontainer, elementType)) {
if (JSONcontainer[elementType].redundant.length > 0) {
element = JSONcontainer[elementType].redundant[0];
JSONcontainer[elementType].redundant.shift();
} else {
element = document.createElement(elementType);
{
DOMContainer.appendChild(element);
}
}
} else {
element = document.createElement(elementType);
JSONcontainer[elementType] = { used: [], redundant: [] };
{
DOMContainer.appendChild(element);
}
}
JSONcontainer[elementType].used.push(element);
return element;
}
function drawPoint(x, y, groupTemplate, JSONcontainer, svgContainer, labelObj) {
var point;
if (groupTemplate.style == "circle") {
point = getSVGElement("circle", JSONcontainer, svgContainer);
point.setAttributeNS(null, "cx", x);
point.setAttributeNS(null, "cy", y);
point.setAttributeNS(null, "r", 0.5 * groupTemplate.size);
} else {
point = getSVGElement("rect", JSONcontainer, svgContainer);
point.setAttributeNS(null, "x", x - 0.5 * groupTemplate.size);
point.setAttributeNS(null, "y", y - 0.5 * groupTemplate.size);
point.setAttributeNS(null, "width", groupTemplate.size);
point.setAttributeNS(null, "height", groupTemplate.size);
}
if (groupTemplate.styles !== void 0) {
point.setAttributeNS(null, "style", groupTemplate.styles);
}
point.setAttributeNS(null, "class", groupTemplate.className + " vis-point");
if (labelObj) {
var label = getSVGElement("text", JSONcontainer, svgContainer);
if (labelObj.xOffset) {
x = x + labelObj.xOffset;
}
if (labelObj.yOffset) {
y = y + labelObj.yOffset;
}
if (labelObj.content) {
label.textContent = labelObj.content;
}
if (labelObj.className) {
label.setAttributeNS(null, "class", labelObj.className + " vis-label");
}
label.setAttributeNS(null, "x", x);
label.setAttributeNS(null, "y", y);
}
return point;
}
function drawBar(x, y, width, height, className, JSONcontainer, svgContainer, style) {
if (height != 0) {
if (height < 0) {
height *= -1;
y -= height;
}
var rect = getSVGElement("rect", JSONcontainer, svgContainer);
rect.setAttributeNS(null, "x", x - 0.5 * width);
rect.setAttributeNS(null, "y", y);
rect.setAttributeNS(null, "width", width);
rect.setAttributeNS(null, "height", height);
rect.setAttributeNS(null, "class", className);
if (style) {
rect.setAttributeNS(null, "style", style);
}
}
}
function getNavigatorLanguage() {
try {
if (!navigator) return "en";
if (navigator.languages && navigator.languages.length) {
return navigator.languages;
} else {
return navigator.userLanguage || navigator.language || navigator.browserLanguage || "en";
}
} catch (error) {
return "en";
}
}
var DataScale = class {
/**
*
* @param {number} start
* @param {number} end
* @param {boolean} autoScaleStart
* @param {boolean} autoScaleEnd
* @param {number} containerHeight
* @param {number} majorCharHeight
* @param {boolean} zeroAlign
* @param {function} formattingFunction
* @constructor DataScale
*/
constructor(start, end, autoScaleStart, autoScaleEnd, containerHeight, majorCharHeight, zeroAlign = false, formattingFunction = false) {
this.majorSteps = [1, 2, 5, 10];
this.minorSteps = [0.25, 0.5, 1, 2];
this.customLines = null;
this.containerHeight = containerHeight;
this.majorCharHeight = majorCharHeight;
this._start = start;
this._end = end;
this.scale = 1;
this.minorStepIdx = -1;
this.magnitudefactor = 1;
this.determineScale();
this.zeroAlign = zeroAlign;
this.autoScaleStart = autoScaleStart;
this.autoScaleEnd = autoScaleEnd;
this.formattingFunction = formattingFunction;
if (autoScaleStart || autoScaleEnd) {
const me = this;
const roundToMinor = (value) => {
const rounded = value - value % (me.magnitudefactor * me.minorSteps[me.minorStepIdx]);
if (value % (me.magnitudefactor * me.minorSteps[me.minorStepIdx]) > 0.5 * (me.magnitudefactor * me.minorSteps[me.minorStepIdx])) {
return rounded + me.magnitudefactor * me.minorSteps[me.minorStepIdx];
} else {
return rounded;
}
};
if (autoScaleStart) {
this._start -= this.magnitudefactor * 2 * this.minorSteps[this.minorStepIdx];
this._start = roundToMinor(this._start);
}
if (autoScaleEnd) {
this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx];
this._end = roundToMinor(this._end);
}
this.determineScale();
}
}
/**
* set chart height
* @param {number} majorCharHeight
*/
setCharHeight(majorCharHeight) {
this.majorCharHeight = majorCharHeight;
}
/**
* set height
* @param {number} containerHeight
*/
setHeight(containerHeight) {
this.containerHeight = containerHeight;
}
/**
* determine scale
*/
determineScale() {
const range = this._end - this._start;
this.scale = this.containerHeight / range;
const minimumStepValue = this.majorCharHeight / this.scale;
const orderOfMagnitude = range > 0 ? Math.round(Math.log(range) / Math.LN10) : 0;
this.minorStepIdx = -1;
this.magnitudefactor = Math.pow(10, orderOfMagnitude);
let start = 0;
if (orderOfMagnitude < 0) {
start = orderOfMagnitude;
}
let solutionFound = false;
for (let l = start; Math.abs(l) <= Math.abs(orderOfMagnitude); l++) {
this.magnitudefactor = Math.pow(10, l);
for (let j = 0; j < this.minorSteps.length; j++) {
const stepSize = this.magnitudefactor * this.minorSteps[j];
if (stepSize >= minimumStepValue) {
solutionFound = true;
this.minorStepIdx = j;
break;
}
}
if (solutionFound === true) {
break;
}
}
}
/**
* returns if value is major
* @param {number} value
* @returns {boolean}
*/
is_major(value) {
return value % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) === 0;
}
/**
* returns step size
* @returns {number}
*/
getStep() {
return this.magnitudefactor * this.minorSteps[this.minorStepIdx];
}
/**
* returns first major
* @returns {number}
*/
getFirstMajor() {
const majorStep = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
return this.convertValue(this._start + (majorStep - this._start % majorStep) % majorStep);
}
/**
* returns first major
* @param {date} current
* @returns {date} formatted date
*/
formatValue(current) {
let returnValue = current.toPrecision(5);
if (typeof this.formattingFunction === "function") {
returnValue = this.formattingFunction(current);
}
if (typeof returnValue === "number") {
return `${returnValue}`;
} else if (typeof returnValue === "string") {
return returnValue;
} else {
return current.toPrecision(5);
}
}
/**
* returns lines
* @returns {object} lines
*/
getLines() {
const lines = [];
const step = this.getStep();
const bottomOffset = (step - this._start % step) % step;
for (let i = this._start + bottomOffset; this._end - i > 1e-5; i += step) {
if (i != this._start) {
lines.push({ major: this.is_major(i), y: this.convertValue(i), val: this.formatValue(i) });
}
}
return lines;
}
/**
* follow scale
* @param {object} other
*/
followScale(other) {
const oldStepIdx = this.minorStepIdx;
const oldStart = this._start;
const oldEnd = this._end;
const me = this;
const increaseMagnitude = () => {
me.magnitudefactor *= 2;
};
const decreaseMagnitude = () => {
me.magnitudefactor /= 2;
};
if (other.minorStepIdx <= 1 && this.minorStepIdx <= 1 || other.minorStepIdx > 1 && this.minorStepIdx > 1) ;
else if (other.minorStepIdx < this.minorStepIdx) {
this.minorStepIdx = 1;
if (oldStepIdx == 2) {
increaseMagnitude();
} else {
increaseMagnitude();
increaseMagnitude();
}
} else {
this.minorStepIdx = 2;
if (oldStepIdx == 1) {
decreaseMagnitude();
} else {
decreaseMagnitude();
decreaseMagnitude();
}
}
const otherZero = other.convertValue(0);
const otherStep = other.getStep() * other.scale;
let done = false;
let count = 0;
while (!done && count++ < 5) {
this.scale = otherStep / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
const newRange = this.containerHeight / this.scale;
this._start = oldStart;
this._end = this._start + newRange;
const myOriginalZero = this._end * this.scale;
const majorStep = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
const majorOffset = this.getFirstMajor() - other.getFirstMajor();
if (this.zeroAlign) {
const zeroOffset = otherZero - myOriginalZero;
this._end += zeroOffset / this.scale;
this._start = this._end - newRange;
} else {
if (!this.autoScaleStart) {
this._start += majorStep - majorOffset / this.scale;
this._end = this._start + newRange;
} else {
this._start -= majorOffset / this.scale;
this._end = this._start + newRange;
}
}
if (!this.autoScaleEnd && this._end > oldEnd + 1e-5) {
decreaseMagnitude();
done = false;
continue;
}
if (!this.autoScaleStart && this._start < oldStart - 1e-5) {
if (this.zeroAlign && oldStart >= 0) {
console.warn("Can't adhere to given 'min' range, due to zeroalign");
} else {
decreaseMagnitude();
done = false;
continue;
}
}
if (this.autoScaleStart && this.autoScaleEnd && newRange < oldEnd - oldStart) {
increaseMagnitude();
done = false;
continue;
}
done = true;
}
}
/**
* convert value
* @param {number} value
* @returns {number}
*/
convertValue(value) {
return this.containerHeight - (value - this._start) * this.scale;
}
/**
* returns screen to value
* @param {number} pixels
* @returns {number}
*/
screenToValue(pixels) {
return (this.containerHeight - pixels) / this.scale + this._start;
}
};
var DataAxis = class extends Component {
/**
* @param {Object} body
* @param {Object} [options]        See DataAxis.setOptions for the available
*                                  options.
* @param {SVGElement} svg
* @param {timeline.LineGraph.options} linegraphOptions
* @constructor DataAxis
* @extends Component
*/
constructor(body, options, svg, linegraphOptions) {
super();
this.id = v4_default();
this.body = body;
this.defaultOptions = {
orientation: "left",
showMinorLabels: true,
showMajorLabels: true,
showWeekScale: false,
icons: false,
majorLinesOffset: 7,
minorLinesOffset: 4,
labelOffsetX: 10,
labelOffsetY: 2,
iconWidth: 20,
width: "40px",
visible: true,
alignZeros: true,
left: {
range: { min: void 0, max: void 0 },
format(value) {
return `${parseFloat(value.toPrecision(3))}`;
},
title: { text: void 0, style: void 0 }
},
right: {
range: { min: void 0, max: void 0 },
format(value) {
return `${parseFloat(value.toPrecision(3))}`;
},
title: { text: void 0, style: void 0 }
}
};
this.linegraphOptions = linegraphOptions;
this.linegraphSVG = svg;
this.props = {};
this.DOMelements = {
lines: {},
labels: {},
title: {}
};
this.dom = {};
this.scale = void 0;
this.range = { start: 0, end: 0 };
this.options = availableUtils.extend({}, this.defaultOptions);
this.conversionFactor = 1;
this.setOptions(options);
this.width = Number(`${this.options.width}`.replace("px", ""));
this.minWidth = this.width;
this.height = this.linegraphSVG.getBoundingClientRect().height;
this.hidden = false;
this.stepPixels = 25;
this.zeroCrossing = -1;
this.amountOfSteps = -1;
this.lineOffset = 0;
this.master = true;
this.masterAxis = null;
this.svgElements = {};
this.iconsRemoved = false;
this.groups = {};
this.amountOfGroups = 0;
this._create();
if (this.scale == void 0) {
this._redrawLabels();
}
this.framework = { svg: this.svg, svgElements: this.svgElements, options: this.options, groups: this.groups };
const me = this;
this.body.emitter.on("verticalDrag", () => {
me.dom.lineContainer.style.top = `${me.body.domProps.scrollTop}px`;
});
}
/**
* Adds group to data axis
* @param {string} label
* @param {object} graphOptions
*/
addGroup(label, graphOptions) {
if (!Object.prototype.hasOwnProperty.call(this.groups, label)) {
this.groups[label] = graphOptions;
}
this.amountOfGroups += 1;
}
/**
* updates group of data axis
* @param {string} label
* @param {object} graphOptions
*/
updateGroup(label, graphOptions) {
if (!Object.prototype.hasOwnProperty.call(this.groups, label)) {
this.amountOfGroups += 1;
}
this.groups[label] = graphOptions;
}
/**
* removes group of data axis
* @param {string} label
*/
removeGroup(label) {
if (Object.prototype.hasOwnProperty.call(this.groups, label)) {
delete this.groups[label];
this.amountOfGroups -= 1;
}
}
/**
* sets options
* @param {object} options
*/
setOptions(options) {
if (options) {
let redraw = false;
if (this.options.orientation != options.orientation && options.orientation !== void 0) {
redraw = true;
}
const fields = [
"orientation",
"showMinorLabels",
"showMajorLabels",
"icons",
"majorLinesOffset",
"minorLinesOffset",
"labelOffsetX",
"labelOffsetY",
"iconWidth",
"width",
"visible",
"left",
"right",
"alignZeros"
];
availableUtils.selectiveDeepExtend(fields, this.options, options);
this.minWidth = Number(`${this.options.width}`.replace("px", ""));
if (redraw === true && this.dom.frame) {
this.hide();
this.show();
}
}
}
/**
* Create the HTML DOM for the DataAxis
*/
_create() {
this.dom.frame = document.createElement("div");
this.dom.frame.style.width = this.options.width;
this.dom.frame.style.height = this.height;
this.dom.lineContainer = document.createElement("div");
this.dom.lineContainer.style.width = "100%";
this.dom.lineContainer.style.height = this.height;
this.dom.lineContainer.style.position = "relative";
this.dom.lineContainer.style.visibility = "visible";
this.dom.lineContainer.style.display = "block";
this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
this.svg.style.position = "absolute";
this.svg.style.top = "0px";
this.svg.style.height = "100%";
this.svg.style.width = "100%";
this.svg.style.display = "block";
this.dom.frame.appendChild(this.svg);
}
/**
* redraws groups icons
*/
_redrawGroupIcons() {
prepareElements(this.svgElements);
let x;
const iconWidth = this.options.iconWidth;
const iconHeight = 15;
const iconOffset = 4;
let y = iconOffset + 0.5 * iconHeight;
if (this.options.orientation === "left") {
x = iconOffset;
} else {
x = this.width - iconWidth - iconOffset;
}
const groupArray = Object.keys(this.groups);
groupArray.sort((a, b) => a < b ? -1 : 1);
for (const groupId of groupArray) {
if (this.groups[groupId].visible === true && (this.linegraphOptions.visibility[groupId] === void 0 || this.linegraphOptions.visibility[groupId] === true)) {
this.groups[groupId].getLegend(iconWidth, iconHeight, this.framework, x, y);
y += iconHeight + iconOffset;
}
}
cleanupElements(this.svgElements);
this.iconsRemoved = false;
}
/**
* Cleans up icons
*/
_cleanupIcons() {
if (this.iconsRemoved === false) {
prepareElements(this.svgElements);
cleanupElements(this.svgElements);
this.iconsRemoved = true;
}
}
/**
* Create the HTML DOM for the DataAxis
*/
show() {
this.hidden = false;
if (!this.dom.frame.parentNode) {
if (this.options.orientation === "left") {
this.body.dom.left.appendChild(this.dom.frame);
} else {
this.body.dom.right.appendChild(this.dom.frame);
}
}
if (!this.dom.lineContainer.parentNode) {
this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer);
}
this.dom.lineContainer.style.display = "block";
}
/**
* Create the HTML DOM for the DataAxis
*/
hide() {
this.hidden = true;
if (this.dom.frame.parentNode) {
this.dom.frame.parentNode.removeChild(this.dom.frame);
}
this.dom.lineContainer.style.display = "none";
}
/**
* Set a range (start and end)
* @param {number} start
* @param {number} end
*/
setRange(start, end) {
this.range.start = start;
this.range.end = end;
}
/**
* Repaint the component
* @return {boolean} Returns true if the component is resized
*/
redraw() {
let resized = false;
let activeGroups = 0;
this.dom.lineContainer.style.top = `${this.body.domProps.scrollTop}px`;
for (const groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
continue;
if (this.groups[groupId].visible === true && (this.linegraphOptions.visibility[groupId] === void 0 || this.linegraphOptions.visibility[groupId] === true))
activeGroups++;
}
if (this.amountOfGroups === 0 || activeGroups === 0) {
this.hide();
} else {
this.show();
this.height = Number(this.linegraphSVG.style.height.replace("px", ""));
this.dom.lineContainer.style.height = `${this.height}px`;
this.width = this.options.visible === true ? Number(`${this.options.width}`.replace("px", "")) : 0;
const props = this.props;
const frame = this.dom.frame;
frame.className = "vis-data-axis";
this._calculateCharSize();
const orientation = this.options.orientation;
const showMinorLabels = this.options.showMinorLabels;
const showMajorLabels = this.options.showMajorLabels;
const backgroundHorizontalOffsetWidth = this.body.dom.backgroundHorizontal.offsetWidth;
props.minorLabelHeight = showMinorLabels ? props.minorCharHeight : 0;
props.majorLabelHeight = showMajorLabels ? props.majorCharHeight : 0;
props.minorLineWidth = backgroundHorizontalOffsetWidth - this.lineOffset - this.width + 2 * this.options.minorLinesOffset;
props.minorLineHeight = 1;
props.majorLineWidth = backgroundHorizontalOffsetWidth - this.lineOffset - this.width + 2 * this.options.majorLinesOffset;
props.majorLineHeight = 1;
if (orientation === "left") {
frame.style.top = "0";
frame.style.left = "0";
frame.style.bottom = "";
frame.style.width = `${this.width}px`;
frame.style.height = `${this.height}px`;
this.props.width = this.body.domProps.left.width;
this.props.height = this.body.domProps.left.height;
} else {
frame.style.top = "";
frame.style.bottom = "0";
frame.style.left = "0";
frame.style.width = `${this.width}px`;
frame.style.height = `${this.height}px`;
this.props.width = this.body.domProps.right.width;
this.props.height = this.body.domProps.right.height;
}
resized = this._redrawLabels();
resized = this._isResized() || resized;
if (this.options.icons === true) {
this._redrawGroupIcons();
} else {
this._cleanupIcons();
}
this._redrawTitle(orientation);
}
return resized;
}
/**
* Repaint major and minor text labels and vertical grid lines
*
* @returns {boolean}
* @private
*/
_redrawLabels() {
let resized = false;
prepareElements(this.DOMelements.lines);
prepareElements(this.DOMelements.labels);
const orientation = this.options["orientation"];
const customRange = this.options[orientation].range != void 0 ? this.options[orientation].range : {};
let autoScaleEnd = true;
if (customRange.max != void 0) {
this.range.end = customRange.max;
autoScaleEnd = false;
}
let autoScaleStart = true;
if (customRange.min != void 0) {
this.range.start = customRange.min;
autoScaleStart = false;
}
this.scale = new DataScale(
this.range.start,
this.range.end,
autoScaleStart,
autoScaleEnd,
this.dom.frame.offsetHeight,
this.props.majorCharHeight,
this.options.alignZeros,
this.options[orientation].format
);
if (this.master === false && this.masterAxis != void 0) {
this.scale.followScale(this.masterAxis.scale);
this.dom.lineContainer.style.display = "none";
} else {
this.dom.lineContainer.style.display = "block";
}
this.maxLabelSize = 0;
const lines = this.scale.getLines();
lines.forEach(
(line) => {
const y = line.y;
const isMajor = line.major;
if (this.options["showMinorLabels"] && isMajor === false) {
this._redrawLabel(y - 2, line.val, orientation, "vis-y-axis vis-minor", this.props.minorCharHeight);
}
if (isMajor) {
if (y >= 0) {
this._redrawLabel(y - 2, line.val, orientation, "vis-y-axis vis-major", this.props.majorCharHeight);
}
}
if (this.master === true) {
if (isMajor) {
this._redrawLine(y, orientation, "vis-grid vis-horizontal vis-major", this.options.majorLinesOffset, this.props.majorLineWidth);
} else {
this._redrawLine(y, orientation, "vis-grid vis-horizontal vis-minor", this.options.minorLinesOffset, this.props.minorLineWidth);
}
}
}
);
let titleWidth = 0;
if (this.options[orientation].title !== void 0 && this.options[orientation].title.text !== void 0) {
titleWidth = this.props.titleCharHeight;
}
const offset = this.options.icons === true ? Math.max(this.options.iconWidth, titleWidth) + this.options.labelOffsetX + 15 : titleWidth + this.options.labelOffsetX + 15;
if (this.maxLabelSize > this.width - offset && this.options.visible === true) {
this.width = this.maxLabelSize + offset;
this.options.width = `${this.width}px`;
cleanupElements(this.DOMelements.lines);
cleanupElements(this.DOMelements.labels);
this.redraw();
resized = true;
} else if (this.maxLabelSize < this.width - offset && this.options.visible === true && this.width > this.minWidth) {
this.width = Math.max(this.minWidth, this.maxLabelSize + offset);
this.options.width = `${this.width}px`;
cleanupElements(this.DOMelements.lines);
cleanupElements(this.DOMelements.labels);
this.redraw();
resized = true;
} else {
cleanupElements(this.DOMelements.lines);
cleanupElements(this.DOMelements.labels);
resized = false;
}
return resized;
}
/**
* converts value
* @param {number} value
* @returns {number} converted number
*/
convertValue(value) {
return this.scale.convertValue(value);
}
/**
* converts value
* @param {number} x
* @returns {number} screen value
*/
screenToValue(x) {
return this.scale.screenToValue(x);
}
/**
* Create a label for the axis at position x
*
* @param {number} y
* @param {string} text
* @param {'top'|'right'|'bottom'|'left'} orientation
* @param {string} className
* @param {number} characterHeight
* @private
*/
_redrawLabel(y, text, orientation, className, characterHeight) {
const label = getDOMElement("div", this.DOMelements.labels, this.dom.frame);
label.className = className;
label.innerHTML = availableUtils.xss(text);
if (orientation === "left") {
label.style.left = `-${this.options.labelOffsetX}px`;
label.style.textAlign = "right";
} else {
label.style.right = `-${this.options.labelOffsetX}px`;
label.style.textAlign = "left";
}
label.style.top = `${y - 0.5 * characterHeight + this.options.labelOffsetY}px`;
text += "";
const largestWidth = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
if (this.maxLabelSize < text.length * largestWidth) {
this.maxLabelSize = text.length * largestWidth;
}
}
/**
* Create a minor line for the axis at position y
* @param {number} y
* @param {'top'|'right'|'bottom'|'left'} orientation
* @param {string} className
* @param {number} offset
* @param {number} width
*/
_redrawLine(y, orientation, className, offset, width) {
if (this.master === true) {
const line = getDOMElement("div", this.DOMelements.lines, this.dom.lineContainer);
line.className = className;
line.innerHTML = "";
if (orientation === "left") {
line.style.left = `${this.width - offset}px`;
} else {
line.style.right = `${this.width - offset}px`;
}
line.style.width = `${width}px`;
line.style.top = `${y}px`;
}
}
/**
* Create a title for the axis
* @private
* @param {'top'|'right'|'bottom'|'left'} orientation
*/
_redrawTitle(orientation) {
prepareElements(this.DOMelements.title);
if (this.options[orientation].title !== void 0 && this.options[orientation].title.text !== void 0) {
const title = getDOMElement("div", this.DOMelements.title, this.dom.frame);
title.className = `vis-y-axis vis-title vis-${orientation}`;
title.innerHTML = availableUtils.xss(this.options[orientation].title.text);
if (this.options[orientation].title.style !== void 0) {
availableUtils.addCssText(title, this.options[orientation].title.style);
}
if (orientation === "left") {
title.style.left = `${this.props.titleCharHeight}px`;
} else {
title.style.right = `${this.props.titleCharHeight}px`;
}
title.style.width = `${this.height}px`;
}
cleanupElements(this.DOMelements.title);
}
/**
* Determine the size of text on the axis (both major and minor axis).
* The size is calculated only once and then cached in this.props.
* @private
*/
_calculateCharSize() {
if (!("minorCharHeight" in this.props)) {
const textMinor = document.createTextNode("0");
const measureCharMinor = document.createElement("div");
measureCharMinor.className = "vis-y-axis vis-minor vis-measure";
measureCharMinor.appendChild(textMinor);
this.dom.frame.appendChild(measureCharMinor);
this.props.minorCharHeight = measureCharMinor.clientHeight;
this.props.minorCharWidth = measureCharMinor.clientWidth;
this.dom.frame.removeChild(measureCharMinor);
}
if (!("majorCharHeight" in this.props)) {
const textMajor = document.createTextNode("0");
const measureCharMajor = document.createElement("div");
measureCharMajor.className = "vis-y-axis vis-major vis-measure";
measureCharMajor.appendChild(textMajor);
this.dom.frame.appendChild(measureCharMajor);
this.props.majorCharHeight = measureCharMajor.clientHeight;
this.props.majorCharWidth = measureCharMajor.clientWidth;
this.dom.frame.removeChild(measureCharMajor);
}
if (!("titleCharHeight" in this.props)) {
const textTitle = document.createTextNode("0");
const measureCharTitle = document.createElement("div");
measureCharTitle.className = "vis-y-axis vis-title vis-measure";
measureCharTitle.appendChild(textTitle);
this.dom.frame.appendChild(measureCharTitle);
this.props.titleCharHeight = measureCharTitle.clientHeight;
this.props.titleCharWidth = measureCharTitle.clientWidth;
this.dom.frame.removeChild(measureCharTitle);
}
}
};
function Points(groupId, options) {
}
Points.draw = function(dataset, group, framework, offset) {
offset = offset || 0;
var callback = getCallback(framework, group);
for (var i = 0; i < dataset.length; i++) {
if (!callback) {
drawPoint(dataset[i].screen_x + offset, dataset[i].screen_y, getGroupTemplate(group), framework.svgElements, framework.svg, dataset[i].label);
} else {
var callbackResult = callback(dataset[i], group);
if (callbackResult === true || typeof callbackResult === "object") {
drawPoint(dataset[i].screen_x + offset, dataset[i].screen_y, getGroupTemplate(group, callbackResult), framework.svgElements, framework.svg, dataset[i].label);
}
}
}
};
Points.drawIcon = function(group, x, y, iconWidth, iconHeight, framework) {
var fillHeight = iconHeight * 0.5;
var outline = getSVGElement("rect", framework.svgElements, framework.svg);
outline.setAttributeNS(null, "x", x);
outline.setAttributeNS(null, "y", y - fillHeight);
outline.setAttributeNS(null, "width", iconWidth);
outline.setAttributeNS(null, "height", 2 * fillHeight);
outline.setAttributeNS(null, "class", "vis-outline");
drawPoint(x + 0.5 * iconWidth, y, getGroupTemplate(group), framework.svgElements, framework.svg);
};
function getGroupTemplate(group, callbackResult) {
callbackResult = typeof callbackResult === "undefined" ? {} : callbackResult;
return {
style: callbackResult.style || group.options.drawPoints.style,
styles: callbackResult.styles || group.options.drawPoints.styles,
size: callbackResult.size || group.options.drawPoints.size,
className: callbackResult.className || group.className
};
}
function getCallback(framework, group) {
var callback = void 0;
if (framework.options && framework.options.drawPoints && framework.options.drawPoints.onRender && typeof framework.options.drawPoints.onRender == "function") {
callback = framework.options.drawPoints.onRender;
}
if (group.group.options && group.group.options.drawPoints && group.group.options.drawPoints.onRender && typeof group.group.options.drawPoints.onRender == "function") {
callback = group.group.options.drawPoints.onRender;
}
return callback;
}
function Bargraph(groupId, options) {
}
Bargraph.drawIcon = function(group, x, y, iconWidth, iconHeight, framework) {
var fillHeight = iconHeight * 0.5;
var outline = getSVGElement("rect", framework.svgElements, framework.svg);
outline.setAttributeNS(null, "x", x);
outline.setAttributeNS(null, "y", y - fillHeight);
outline.setAttributeNS(null, "width", iconWidth);
outline.setAttributeNS(null, "height", 2 * fillHeight);
outline.setAttributeNS(null, "class", "vis-outline");
var barWidth = Math.round(0.3 * iconWidth);
var originalWidth = group.options.barChart.width;
var scale = originalWidth / barWidth;
var bar1Height = Math.round(0.4 * iconHeight);
var bar2Height = Math.round(0.75 * iconHeight);
var offset = Math.round((iconWidth - 2 * barWidth) / 3);
drawBar(x + 0.5 * barWidth + offset, y + fillHeight - bar1Height - 1, barWidth, bar1Height, group.className + " vis-bar", framework.svgElements, framework.svg, group.style);
drawBar(x + 1.5 * barWidth + offset + 2, y + fillHeight - bar2Height - 1, barWidth, bar2Height, group.className + " vis-bar", framework.svgElements, framework.svg, group.style);
if (group.options.drawPoints.enabled == true) {
var groupTemplate = {
style: group.options.drawPoints.style,
styles: group.options.drawPoints.styles,
size: group.options.drawPoints.size / scale,
className: group.className
};
drawPoint(x + 0.5 * barWidth + offset, y + fillHeight - bar1Height - 1, groupTemplate, framework.svgElements, framework.svg);
drawPoint(x + 1.5 * barWidth + offset + 2, y + fillHeight - bar2Height - 1, groupTemplate, framework.svgElements, framework.svg);
}
};
Bargraph.draw = function(groupIds, processedGroupData, framework) {
var combinedData = [];
var intersections = {};
var coreDistance;
var key, drawData;
var group;
var i, j;
var barPoints = 0;
for (i = 0; i < groupIds.length; i++) {
group = framework.groups[groupIds[i]];
if (group.options.style === "bar") {
if (group.visible === true && (framework.options.groups.visibility[groupIds[i]] === void 0 || framework.options.groups.visibility[groupIds[i]] === true)) {
for (j = 0; j < processedGroupData[groupIds[i]].length; j++) {
combinedData.push({
screen_x: processedGroupData[groupIds[i]][j].screen_x,
screen_end: processedGroupData[groupIds[i]][j].screen_end,
screen_y: processedGroupData[groupIds[i]][j].screen_y,
x: processedGroupData[groupIds[i]][j].x,
end: processedGroupData[groupIds[i]][j].end,
y: processedGroupData[groupIds[i]][j].y,
groupId: groupIds[i],
label: processedGroupData[groupIds[i]][j].label
});
barPoints += 1;
}
}
}
}
if (barPoints === 0) {
return;
}
combinedData.sort(function(a, b) {
if (a.screen_x === b.screen_x) {
return a.groupId < b.groupId ? -1 : 1;
} else {
return a.screen_x - b.screen_x;
}
});
Bargraph._getDataIntersections(intersections, combinedData);
for (i = 0; i < combinedData.length; i++) {
group = framework.groups[combinedData[i].groupId];
var minWidth = group.options.barChart.minWidth != void 0 ? group.options.barChart.minWidth : 0.1 * group.options.barChart.width;
key = combinedData[i].screen_x;
var heightOffset = 0;
if (intersections[key] === void 0) {
if (i + 1 < combinedData.length) {
coreDistance = Math.abs(combinedData[i + 1].screen_x - key);
}
drawData = Bargraph._getSafeDrawData(coreDistance, group, minWidth);
} else {
var nextKey = i + (intersections[key].amount - intersections[key].resolved);
if (nextKey < combinedData.length) {
coreDistance = Math.abs(combinedData[nextKey].screen_x - key);
}
drawData = Bargraph._getSafeDrawData(coreDistance, group, minWidth);
intersections[key].resolved += 1;
if (group.options.stack === true && group.options.excludeFromStacking !== true) {
if (combinedData[i].screen_y < group.zeroPosition) {
heightOffset = intersections[key].accumulatedNegative;
intersections[key].accumulatedNegative += group.zeroPosition - combinedData[i].screen_y;
} else {
heightOffset = intersections[key].accumulatedPositive;
intersections[key].accumulatedPositive += group.zeroPosition - combinedData[i].screen_y;
}
} else if (group.options.barChart.sideBySide === true) {
drawData.width = drawData.width / intersections[key].amount;
drawData.offset += intersections[key].resolved * drawData.width - 0.5 * drawData.width * (intersections[key].amount + 1);
}
}
let dataWidth = drawData.width;
let start = combinedData[i].screen_x;
if (combinedData[i].screen_end != void 0) {
dataWidth = combinedData[i].screen_end - combinedData[i].screen_x;
start += dataWidth * 0.5;
} else {
start += drawData.offset;
}
drawBar(start, combinedData[i].screen_y - heightOffset, dataWidth, group.zeroPosition - combinedData[i].screen_y, group.className + " vis-bar", framework.svgElements, framework.svg, group.style);
if (group.options.drawPoints.enabled === true) {
let pointData = {
screen_x: combinedData[i].screen_x,
screen_y: combinedData[i].screen_y - heightOffset,
x: combinedData[i].x,
y: combinedData[i].y,
groupId: combinedData[i].groupId,
label: combinedData[i].label
};
Points.draw([pointData], group, framework, drawData.offset);
}
}
};
Bargraph._getDataIntersections = function(intersections, combinedData) {
var coreDistance;
for (var i = 0; i < combinedData.length; i++) {
if (i + 1 < combinedData.length) {
coreDistance = Math.abs(combinedData[i + 1].screen_x - combinedData[i].screen_x);
}
if (i > 0) {
coreDistance = Math.min(coreDistance, Math.abs(combinedData[i - 1].screen_x - combinedData[i].screen_x));
}
if (coreDistance === 0) {
if (intersections[combinedData[i].screen_x] === void 0) {
intersections[combinedData[i].screen_x] = {
amount: 0,
resolved: 0,
accumulatedPositive: 0,
accumulatedNegative: 0
};
}
intersections[combinedData[i].screen_x].amount += 1;
}
}
};
Bargraph._getSafeDrawData = function(coreDistance, group, minWidth) {
var width, offset;
if (coreDistance < group.options.barChart.width && coreDistance > 0) {
width = coreDistance < minWidth ? minWidth : coreDistance;
offset = 0;
if (group.options.barChart.align === "left") {
offset -= 0.5 * coreDistance;
} else if (group.options.barChart.align === "right") {
offset += 0.5 * coreDistance;
}
} else {
width = group.options.barChart.width;
offset = 0;
if (group.options.barChart.align === "left") {
offset -= 0.5 * group.options.barChart.width;
} else if (group.options.barChart.align === "right") {
offset += 0.5 * group.options.barChart.width;
}
}
return { width, offset };
};
Bargraph.getStackedYRange = function(combinedData, groupRanges, groupIds, groupLabel, orientation) {
if (combinedData.length > 0) {
combinedData.sort(function(a, b) {
if (a.screen_x === b.screen_x) {
return a.groupId < b.groupId ? -1 : 1;
} else {
return a.screen_x - b.screen_x;
}
});
var intersections = {};
Bargraph._getDataIntersections(intersections, combinedData);
groupRanges[groupLabel] = Bargraph._getStackedYRange(intersections, combinedData);
groupRanges[groupLabel].yAxisOrientation = orientation;
groupIds.push(groupLabel);
}
};
Bargraph._getStackedYRange = function(intersections, combinedData) {
var key;
var yMin = combinedData[0].screen_y;
var yMax = combinedData[0].screen_y;
for (var i = 0; i < combinedData.length; i++) {
key = combinedData[i].screen_x;
if (intersections[key] === void 0) {
yMin = yMin > combinedData[i].screen_y ? combinedData[i].screen_y : yMin;
yMax = yMax < combinedData[i].screen_y ? combinedData[i].screen_y : yMax;
} else {
if (combinedData[i].screen_y < 0) {
intersections[key].accumulatedNegative += combinedData[i].screen_y;
} else {
intersections[key].accumulatedPositive += combinedData[i].screen_y;
}
}
}
for (var xpos in intersections) {
if (!Object.prototype.hasOwnProperty.call(intersections, xpos))
continue;
yMin = yMin > intersections[xpos].accumulatedNegative ? intersections[xpos].accumulatedNegative : yMin;
yMin = yMin > intersections[xpos].accumulatedPositive ? intersections[xpos].accumulatedPositive : yMin;
yMax = yMax < intersections[xpos].accumulatedNegative ? intersections[xpos].accumulatedNegative : yMax;
yMax = yMax < intersections[xpos].accumulatedPositive ? intersections[xpos].accumulatedPositive : yMax;
}
return { min: yMin, max: yMax };
};
function Line(groupId, options) {
}
Line.calcPath = function(dataset, group) {
if (dataset != null) {
if (dataset.length > 0) {
var d = [];
if (group.options.interpolation.enabled == true) {
d = Line._catmullRom(dataset, group);
} else {
d = Line._linear(dataset);
}
return d;
}
}
};
Line.drawIcon = function(group, x, y, iconWidth, iconHeight, framework) {
var fillHeight = iconHeight * 0.5;
var path, fillPath;
var outline = getSVGElement("rect", framework.svgElements, framework.svg);
outline.setAttributeNS(null, "x", x);
outline.setAttributeNS(null, "y", y - fillHeight);
outline.setAttributeNS(null, "width", iconWidth);
outline.setAttributeNS(null, "height", 2 * fillHeight);
outline.setAttributeNS(null, "class", "vis-outline");
path = getSVGElement("path", framework.svgElements, framework.svg);
path.setAttributeNS(null, "class", group.className);
if (group.style !== void 0) {
path.setAttributeNS(null, "style", group.style);
}
path.setAttributeNS(null, "d", "M" + x + "," + y + " L" + (x + iconWidth) + "," + y);
if (group.options.shaded.enabled == true) {
fillPath = getSVGElement("path", framework.svgElements, framework.svg);
if (group.options.shaded.orientation == "top") {
fillPath.setAttributeNS(null, "d", "M" + x + ", " + (y - fillHeight) + "L" + x + "," + y + " L" + (x + iconWidth) + "," + y + " L" + (x + iconWidth) + "," + (y - fillHeight));
} else {
fillPath.setAttributeNS(null, "d", "M" + x + "," + y + " L" + x + "," + (y + fillHeight) + " L" + (x + iconWidth) + "," + (y + fillHeight) + "L" + (x + iconWidth) + "," + y);
}
fillPath.setAttributeNS(null, "class", group.className + " vis-icon-fill");
if (group.options.shaded.style !== void 0 && group.options.shaded.style !== "") {
fillPath.setAttributeNS(null, "style", group.options.shaded.style);
}
}
if (group.options.drawPoints.enabled == true) {
var groupTemplate = {
style: group.options.drawPoints.style,
styles: group.options.drawPoints.styles,
size: group.options.drawPoints.size,
className: group.className
};
drawPoint(x + 0.5 * iconWidth, y, groupTemplate, framework.svgElements, framework.svg);
}
};
Line.drawShading = function(pathArray, group, subPathArray, framework) {
if (group.options.shaded.enabled == true) {
var svgHeight = Number(framework.svg.style.height.replace("px", ""));
var fillPath = getSVGElement("path", framework.svgElements, framework.svg);
var type = "L";
if (group.options.interpolation.enabled == true) {
type = "C";
}
var dFill;
var zero = 0;
if (group.options.shaded.orientation == "top") {
zero = 0;
} else if (group.options.shaded.orientation == "bottom") {
zero = svgHeight;
} else {
zero = Math.min(Math.max(0, group.zeroPosition), svgHeight);
}
if (group.options.shaded.orientation == "group" && (subPathArray != null && subPathArray != void 0)) {
dFill = "M" + pathArray[0][0] + "," + pathArray[0][1] + " " + this.serializePath(pathArray, type, false) + " L" + subPathArray[subPathArray.length - 1][0] + "," + subPathArray[subPathArray.length - 1][1] + " " + this.serializePath(subPathArray, type, true) + subPathArray[0][0] + "," + subPathArray[0][1] + " Z";
} else {
dFill = "M" + pathArray[0][0] + "," + pathArray[0][1] + " " + this.serializePath(pathArray, type, false) + " V" + zero + " H" + pathArray[0][0] + " Z";
}
fillPath.setAttributeNS(null, "class", group.className + " vis-fill");
if (group.options.shaded.style !== void 0) {
fillPath.setAttributeNS(null, "style", group.options.shaded.style);
}
fillPath.setAttributeNS(null, "d", dFill);
}
};
Line.draw = function(pathArray, group, framework) {
if (pathArray != null && pathArray != void 0) {
var path = getSVGElement("path", framework.svgElements, framework.svg);
path.setAttributeNS(null, "class", group.className);
if (group.style !== void 0) {
path.setAttributeNS(null, "style", group.style);
}
var type = "L";
if (group.options.interpolation.enabled == true) {
type = "C";
}
path.setAttributeNS(null, "d", "M" + pathArray[0][0] + "," + pathArray[0][1] + " " + this.serializePath(pathArray, type, false));
}
};
Line.serializePath = function(pathArray, type, inverse) {
if (pathArray.length < 2) {
return "";
}
var d = type;
var i;
if (inverse) {
for (i = pathArray.length - 2; i > 0; i--) {
d += pathArray[i][0] + "," + pathArray[i][1] + " ";
}
} else {
for (i = 1; i < pathArray.length; i++) {
d += pathArray[i][0] + "," + pathArray[i][1] + " ";
}
}
return d;
};
Line._catmullRomUniform = function(data) {
var p0, p1, p2, p3, bp1, bp2;
var d = [];
d.push([Math.round(data[0].screen_x), Math.round(data[0].screen_y)]);
var normalization = 1 / 6;
var length = data.length;
for (var i = 0; i < length - 1; i++) {
p0 = i == 0 ? data[0] : data[i - 1];
p1 = data[i];
p2 = data[i + 1];
p3 = i + 2 < length ? data[i + 2] : p2;
bp1 = {
screen_x: (-p0.screen_x + 6 * p1.screen_x + p2.screen_x) * normalization,
screen_y: (-p0.screen_y + 6 * p1.screen_y + p2.screen_y) * normalization
};
bp2 = {
screen_x: (p1.screen_x + 6 * p2.screen_x - p3.screen_x) * normalization,
screen_y: (p1.screen_y + 6 * p2.screen_y - p3.screen_y) * normalization
};
d.push([bp1.screen_x, bp1.screen_y]);
d.push([bp2.screen_x, bp2.screen_y]);
d.push([p2.screen_x, p2.screen_y]);
}
return d;
};
Line._catmullRom = function(data, group) {
var alpha = group.options.interpolation.alpha;
if (alpha == 0 || alpha === void 0) {
return this._catmullRomUniform(data);
} else {
var p0, p1, p2, p3, bp1, bp2, d1, d2, d3, A, B, N, M;
var d3powA, d2powA, d3pow2A, d2pow2A, d1pow2A, d1powA;
var d = [];
d.push([Math.round(data[0].screen_x), Math.round(data[0].screen_y)]);
var length = data.length;
for (var i = 0; i < length - 1; i++) {
p0 = i == 0 ? data[0] : data[i - 1];
p1 = data[i];
p2 = data[i + 1];
p3 = i + 2 < length ? data[i + 2] : p2;
d1 = Math.sqrt(Math.pow(p0.screen_x - p1.screen_x, 2) + Math.pow(p0.screen_y - p1.screen_y, 2));
d2 = Math.sqrt(Math.pow(p1.screen_x - p2.screen_x, 2) + Math.pow(p1.screen_y - p2.screen_y, 2));
d3 = Math.sqrt(Math.pow(p2.screen_x - p3.screen_x, 2) + Math.pow(p2.screen_y - p3.screen_y, 2));
d3powA = Math.pow(d3, alpha);
d3pow2A = Math.pow(d3, 2 * alpha);
d2powA = Math.pow(d2, alpha);
d2pow2A = Math.pow(d2, 2 * alpha);
d1powA = Math.pow(d1, alpha);
d1pow2A = Math.pow(d1, 2 * alpha);
A = 2 * d1pow2A + 3 * d1powA * d2powA + d2pow2A;
B = 2 * d3pow2A + 3 * d3powA * d2powA + d2pow2A;
N = 3 * d1powA * (d1powA + d2powA);
if (N > 0) {
N = 1 / N;
}
M = 3 * d3powA * (d3powA + d2powA);
if (M > 0) {
M = 1 / M;
}
bp1 = {
screen_x: (-d2pow2A * p0.screen_x + A * p1.screen_x + d1pow2A * p2.screen_x) * N,
screen_y: (-d2pow2A * p0.screen_y + A * p1.screen_y + d1pow2A * p2.screen_y) * N
};
bp2 = {
screen_x: (d3pow2A * p1.screen_x + B * p2.screen_x - d2pow2A * p3.screen_x) * M,
screen_y: (d3pow2A * p1.screen_y + B * p2.screen_y - d2pow2A * p3.screen_y) * M
};
if (bp1.screen_x == 0 && bp1.screen_y == 0) {
bp1 = p1;
}
if (bp2.screen_x == 0 && bp2.screen_y == 0) {
bp2 = p2;
}
d.push([bp1.screen_x, bp1.screen_y]);
d.push([bp2.screen_x, bp2.screen_y]);
d.push([p2.screen_x, p2.screen_y]);
}
return d;
}
};
Line._linear = function(data) {
var d = [];
for (var i = 0; i < data.length; i++) {
d.push([data[i].screen_x, data[i].screen_y]);
}
return d;
};
function GraphGroup(group, groupId, options, groupsUsingDefaultStyles) {
this.id = groupId;
var fields = ["sampling", "style", "sort", "yAxisOrientation", "barChart", "drawPoints", "shaded", "interpolation", "zIndex", "excludeFromStacking", "excludeFromLegend"];
this.options = availableUtils.selectiveBridgeObject(fields, options);
this.usingDefaultStyle = group.className === void 0;
this.groupsUsingDefaultStyles = groupsUsingDefaultStyles;
this.zeroPosition = 0;
this.update(group);
if (this.usingDefaultStyle == true) {
this.groupsUsingDefaultStyles[0] += 1;
}
this.itemsData = [];
this.visible = group.visible === void 0 ? true : group.visible;
}
GraphGroup.prototype.setItems = function(items) {
if (items != null) {
this.itemsData = items;
if (this.options.sort == true) {
availableUtils.insertSort(this.itemsData, function(a, b) {
return a.x > b.x ? 1 : -1;
});
}
} else {
this.itemsData = [];
}
};
GraphGroup.prototype.getItems = function() {
return this.itemsData;
};
GraphGroup.prototype.setZeroPosition = function(pos) {
this.zeroPosition = pos;
};
GraphGroup.prototype.setOptions = function(options) {
if (options !== void 0) {
var fields = ["sampling", "style", "sort", "yAxisOrientation", "barChart", "zIndex", "excludeFromStacking", "excludeFromLegend"];
availableUtils.selectiveDeepExtend(fields, this.options, options);
if (typeof options.drawPoints == "function") {
options.drawPoints = {
onRender: options.drawPoints
};
}
availableUtils.mergeOptions(this.options, options, "interpolation");
availableUtils.mergeOptions(this.options, options, "drawPoints");
availableUtils.mergeOptions(this.options, options, "shaded");
if (options.interpolation) {
if (typeof options.interpolation == "object") {
if (options.interpolation.parametrization) {
if (options.interpolation.parametrization == "uniform") {
this.options.interpolation.alpha = 0;
} else if (options.interpolation.parametrization == "chordal") {
this.options.interpolation.alpha = 1;
} else {
this.options.interpolation.parametrization = "centripetal";
this.options.interpolation.alpha = 0.5;
}
}
}
}
}
};
GraphGroup.prototype.update = function(group) {
this.group = group;
this.content = group.content || "graph";
this.className = group.className || this.className || "vis-graph-group" + this.groupsUsingDefaultStyles[0] % 10;
this.visible = group.visible === void 0 ? true : group.visible;
this.style = group.style;
this.setOptions(group.options);
};
GraphGroup.prototype.getLegend = function(iconWidth, iconHeight, framework, x, y) {
if (framework == void 0 || framework == null) {
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
framework = { svg, svgElements: {}, options: this.options, groups: [this] };
}
if (x == void 0 || x == null) {
x = 0;
}
if (y == void 0 || y == null) {
y = 0.5 * iconHeight;
}
switch (this.options.style) {
case "line":
Line.drawIcon(this, x, y, iconWidth, iconHeight, framework);
break;
case "points":
case "point":
Points.drawIcon(this, x, y, iconWidth, iconHeight, framework);
break;
case "bar":
Bargraph.drawIcon(this, x, y, iconWidth, iconHeight, framework);
break;
}
return { icon: framework.svg, label: this.content, orientation: this.options.yAxisOrientation };
};
GraphGroup.prototype.getYRange = function(groupData) {
var yMin = groupData[0].y;
var yMax = groupData[0].y;
for (var j = 0; j < groupData.length; j++) {
yMin = yMin > groupData[j].y ? groupData[j].y : yMin;
yMax = yMax < groupData[j].y ? groupData[j].y : yMax;
}
return { min: yMin, max: yMax, yAxisOrientation: this.options.yAxisOrientation };
};
function Legend(body, options, side, linegraphOptions) {
this.body = body;
this.defaultOptions = {
enabled: false,
icons: true,
iconSize: 20,
iconSpacing: 6,
left: {
visible: true,
position: "top-left"
},
right: {
visible: true,
position: "top-right"
}
};
this.side = side;
this.options = availableUtils.extend({}, this.defaultOptions);
this.linegraphOptions = linegraphOptions;
this.svgElements = {};
this.dom = {};
this.groups = {};
this.amountOfGroups = 0;
this._create();
this.framework = { svg: this.svg, svgElements: this.svgElements, options: this.options, groups: this.groups };
this.setOptions(options);
}
Legend.prototype = new Component();
Legend.prototype.clear = function() {
this.groups = {};
this.amountOfGroups = 0;
};
Legend.prototype.addGroup = function(label, graphOptions) {
if (graphOptions.options.excludeFromLegend != true) {
if (!Object.prototype.hasOwnProperty.call(this.groups, label)) {
this.groups[label] = graphOptions;
}
this.amountOfGroups += 1;
}
};
Legend.prototype.updateGroup = function(label, graphOptions) {
this.groups[label] = graphOptions;
};
Legend.prototype.removeGroup = function(label) {
if (Object.prototype.hasOwnProperty.call(this.groups, label)) {
delete this.groups[label];
this.amountOfGroups -= 1;
}
};
Legend.prototype._create = function() {
this.dom.frame = document.createElement("div");
this.dom.frame.className = "vis-legend";
this.dom.frame.style.position = "absolute";
this.dom.frame.style.top = "10px";
this.dom.frame.style.display = "block";
this.dom.textArea = document.createElement("div");
this.dom.textArea.className = "vis-legend-text";
this.dom.textArea.style.position = "relative";
this.dom.textArea.style.top = "0px";
this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
this.svg.style.position = "absolute";
this.svg.style.top = "0px";
this.svg.style.width = this.options.iconSize + 5 + "px";
this.svg.style.height = "100%";
this.dom.frame.appendChild(this.svg);
this.dom.frame.appendChild(this.dom.textArea);
};
Legend.prototype.hide = function() {
if (this.dom.frame.parentNode) {
this.dom.frame.parentNode.removeChild(this.dom.frame);
}
};
Legend.prototype.show = function() {
if (!this.dom.frame.parentNode) {
this.body.dom.center.appendChild(this.dom.frame);
}
};
Legend.prototype.setOptions = function(options) {
var fields = ["enabled", "orientation", "icons", "left", "right"];
availableUtils.selectiveDeepExtend(fields, this.options, options);
};
Legend.prototype.redraw = function() {
var activeGroups = 0;
var groupArray = Object.keys(this.groups);
groupArray.sort(function(a, b) {
return a < b ? -1 : 1;
});
for (var i = 0; i < groupArray.length; i++) {
var groupId = groupArray[i];
if (this.groups[groupId].visible == true && (this.linegraphOptions.visibility[groupId] === void 0 || this.linegraphOptions.visibility[groupId] == true)) {
activeGroups++;
}
}
if (this.options[this.side].visible == false || this.amountOfGroups == 0 || this.options.enabled == false || activeGroups == 0) {
this.hide();
} else {
this.show();
if (this.options[this.side].position == "top-left" || this.options[this.side].position == "bottom-left") {
this.dom.frame.style.left = "4px";
this.dom.frame.style.textAlign = "left";
this.dom.textArea.style.textAlign = "left";
this.dom.textArea.style.left = this.options.iconSize + 15 + "px";
this.dom.textArea.style.right = "";
this.svg.style.left = "0px";
this.svg.style.right = "";
} else {
this.dom.frame.style.right = "4px";
this.dom.frame.style.textAlign = "right";
this.dom.textArea.style.textAlign = "right";
this.dom.textArea.style.right = this.options.iconSize + 15 + "px";
this.dom.textArea.style.left = "";
this.svg.style.right = "0px";
this.svg.style.left = "";
}
if (this.options[this.side].position == "top-left" || this.options[this.side].position == "top-right") {
this.dom.frame.style.top = 4 - Number(this.body.dom.center.style.top.replace("px", "")) + "px";
this.dom.frame.style.bottom = "";
} else {
var scrollableHeight = this.body.domProps.center.height - this.body.domProps.centerContainer.height;
this.dom.frame.style.bottom = 4 + scrollableHeight + Number(this.body.dom.center.style.top.replace("px", "")) + "px";
this.dom.frame.style.top = "";
}
if (this.options.icons == false) {
this.dom.frame.style.width = this.dom.textArea.offsetWidth + 10 + "px";
this.dom.textArea.style.right = "";
this.dom.textArea.style.left = "";
this.svg.style.width = "0px";
} else {
this.dom.frame.style.width = this.options.iconSize + 15 + this.dom.textArea.offsetWidth + 10 + "px";
this.drawLegendIcons();
}
var content = "";
for (i = 0; i < groupArray.length; i++) {
groupId = groupArray[i];
if (this.groups[groupId].visible == true && (this.linegraphOptions.visibility[groupId] === void 0 || this.linegraphOptions.visibility[groupId] == true)) {
content += this.groups[groupId].content + "<br />";
}
}
this.dom.textArea.innerHTML = availableUtils.xss(content);
this.dom.textArea.style.lineHeight = 0.75 * this.options.iconSize + this.options.iconSpacing + "px";
}
};
Legend.prototype.drawLegendIcons = function() {
if (this.dom.frame.parentNode) {
var groupArray = Object.keys(this.groups);
groupArray.sort(function(a, b) {
return a < b ? -1 : 1;
});
resetElements(this.svgElements);
var padding = window.getComputedStyle(this.dom.frame).paddingTop;
var iconOffset = Number(padding.replace("px", ""));
var x = iconOffset;
var iconWidth = this.options.iconSize;
var iconHeight = 0.75 * this.options.iconSize;
var y = iconOffset + 0.5 * iconHeight + 3;
this.svg.style.width = iconWidth + 5 + iconOffset + "px";
for (var i = 0; i < groupArray.length; i++) {
var groupId = groupArray[i];
if (this.groups[groupId].visible == true && (this.linegraphOptions.visibility[groupId] === void 0 || this.linegraphOptions.visibility[groupId] == true)) {
this.groups[groupId].getLegend(iconWidth, iconHeight, this.framework, x, y);
y += iconHeight + this.options.iconSpacing;
}
}
}
};
var UNGROUPED = "__ungrouped__";
function LineGraph(body, options) {
this.id = v4_default();
this.body = body;
this.defaultOptions = {
yAxisOrientation: "left",
defaultGroup: "default",
sort: true,
sampling: true,
stack: false,
graphHeight: "400px",
shaded: {
enabled: false,
orientation: "bottom"
},
style: "line",
barChart: {
width: 50,
sideBySide: false,
align: "center"
},
interpolation: {
enabled: true,
parametrization: "centripetal",
alpha: 0.5
},
drawPoints: {
enabled: true,
size: 6,
style: "square"
},
dataAxis: {},
legend: {},
groups: {
visibility: {}
}
};
this.options = availableUtils.extend({}, this.defaultOptions);
this.dom = {};
this.props = {};
this.hammer = null;
this.groups = {};
this.abortedGraphUpdate = false;
this.updateSVGheight = false;
this.updateSVGheightOnResize = false;
this.forceGraphUpdate = true;
var me = this;
this.itemsData = null;
this.groupsData = null;
this.itemListeners = {
"add": function(event2, params, senderId) {
me._onAdd(params.items);
},
"update": function(event2, params, senderId) {
me._onUpdate(params.items);
},
"remove": function(event2, params, senderId) {
me._onRemove(params.items);
}
};
this.groupListeners = {
"add": function(event2, params, senderId) {
me._onAddGroups(params.items);
},
"update": function(event2, params, senderId) {
me._onUpdateGroups(params.items);
},
"remove": function(event2, params, senderId) {
me._onRemoveGroups(params.items);
}
};
this.items = {};
this.selection = [];
this.lastStart = this.body.range.start;
this.touchParams = {};
this.svgElements = {};
this.setOptions(options);
this.groupsUsingDefaultStyles = [0];
this.body.emitter.on("rangechanged", function() {
me.svg.style.left = availableUtils.option.asSize(-me.props.width);
me.forceGraphUpdate = true;
me.redraw.call(me);
});
this._create();
this.framework = { svg: this.svg, svgElements: this.svgElements, options: this.options, groups: this.groups };
}
LineGraph.prototype = new Component();
LineGraph.prototype._create = function() {
var frame = document.createElement("div");
frame.className = "vis-line-graph";
this.dom.frame = frame;
this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
this.svg.style.position = "relative";
this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px";
this.svg.style.display = "block";
frame.appendChild(this.svg);
this.options.dataAxis.orientation = "left";
this.yAxisLeft = new DataAxis(this.body, this.options.dataAxis, this.svg, this.options.groups);
this.options.dataAxis.orientation = "right";
this.yAxisRight = new DataAxis(this.body, this.options.dataAxis, this.svg, this.options.groups);
delete this.options.dataAxis.orientation;
this.legendLeft = new Legend(this.body, this.options.legend, "left", this.options.groups);
this.legendRight = new Legend(this.body, this.options.legend, "right", this.options.groups);
this.show();
};
LineGraph.prototype.setOptions = function(options) {
if (options) {
var fields = ["sampling", "defaultGroup", "stack", "height", "graphHeight", "yAxisOrientation", "style", "barChart", "dataAxis", "sort", "groups"];
if (options.graphHeight === void 0 && options.height !== void 0) {
this.updateSVGheight = true;
this.updateSVGheightOnResize = true;
} else if (this.body.domProps.centerContainer.height !== void 0 && options.graphHeight !== void 0) {
if (parseInt((options.graphHeight + "").replace("px", "")) < this.body.domProps.centerContainer.height) {
this.updateSVGheight = true;
}
}
availableUtils.selectiveDeepExtend(fields, this.options, options);
availableUtils.mergeOptions(this.options, options, "interpolation");
availableUtils.mergeOptions(this.options, options, "drawPoints");
availableUtils.mergeOptions(this.options, options, "shaded");
availableUtils.mergeOptions(this.options, options, "legend");
if (options.interpolation) {
if (typeof options.interpolation == "object") {
if (options.interpolation.parametrization) {
if (options.interpolation.parametrization == "uniform") {
this.options.interpolation.alpha = 0;
} else if (options.interpolation.parametrization == "chordal") {
this.options.interpolation.alpha = 1;
} else {
this.options.interpolation.parametrization = "centripetal";
this.options.interpolation.alpha = 0.5;
}
}
}
}
if (this.yAxisLeft) {
if (options.dataAxis !== void 0) {
this.yAxisLeft.setOptions(this.options.dataAxis);
this.yAxisRight.setOptions(this.options.dataAxis);
}
}
if (this.legendLeft) {
if (options.legend !== void 0) {
this.legendLeft.setOptions(this.options.legend);
this.legendRight.setOptions(this.options.legend);
}
}
if (Object.prototype.hasOwnProperty.call(this.groups, UNGROUPED)) {
this.groups[UNGROUPED].setOptions(options);
}
}
if (this.dom.frame) {
this.forceGraphUpdate = true;
this.body.emitter.emit("_change", { queue: true });
}
};
LineGraph.prototype.hide = function() {
if (this.dom.frame.parentNode) {
this.dom.frame.parentNode.removeChild(this.dom.frame);
}
};
LineGraph.prototype.show = function() {
if (!this.dom.frame.parentNode) {
this.body.dom.center.appendChild(this.dom.frame);
}
};
LineGraph.prototype.setItems = function(items) {
var me = this, ids, oldItemsData = this.itemsData;
if (!items) {
this.itemsData = null;
} else if (isDataViewLike2(items)) {
this.itemsData = typeCoerceDataSet(items);
} else {
throw new TypeError("Data must implement the interface of DataSet or DataView");
}
if (oldItemsData) {
availableUtils.forEach(this.itemListeners, function(callback, event2) {
oldItemsData.off(event2, callback);
});
oldItemsData.dispose();
ids = oldItemsData.getIds();
this._onRemove(ids);
}
if (this.itemsData) {
var id = this.id;
availableUtils.forEach(this.itemListeners, function(callback, event2) {
me.itemsData.on(event2, callback, id);
});
ids = this.itemsData.getIds();
this._onAdd(ids);
}
};
LineGraph.prototype.setGroups = function(groups) {
var me = this;
var ids;
if (this.groupsData) {
availableUtils.forEach(this.groupListeners, function(callback, event2) {
me.groupsData.off(event2, callback);
});
ids = this.groupsData.getIds();
this.groupsData = null;
for (var i = 0; i < ids.length; i++) {
this._removeGroup(ids[i]);
}
}
if (!groups) {
this.groupsData = null;
} else if (isDataViewLike2(groups)) {
this.groupsData = groups;
} else {
throw new TypeError("Data must implement the interface of DataSet or DataView");
}
if (this.groupsData) {
var id = this.id;
availableUtils.forEach(this.groupListeners, function(callback, event2) {
me.groupsData.on(event2, callback, id);
});
ids = this.groupsData.getIds();
this._onAddGroups(ids);
}
};
LineGraph.prototype._onUpdate = function(ids) {
this._updateAllGroupData(ids);
};
LineGraph.prototype._onAdd = function(ids) {
this._onUpdate(ids);
};
LineGraph.prototype._onRemove = function(ids) {
this._onUpdate(ids);
};
LineGraph.prototype._onUpdateGroups = function(groupIds) {
this._updateAllGroupData(null, groupIds);
};
LineGraph.prototype._onAddGroups = function(groupIds) {
this._onUpdateGroups(groupIds);
};
LineGraph.prototype._onRemoveGroups = function(groupIds) {
for (var i = 0; i < groupIds.length; i++) {
this._removeGroup(groupIds[i]);
}
this.forceGraphUpdate = true;
this.body.emitter.emit("_change", { queue: true });
};
LineGraph.prototype._removeGroup = function(groupId) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
return;
if (this.groups[groupId].options.yAxisOrientation == "right") {
this.yAxisRight.removeGroup(groupId);
this.legendRight.removeGroup(groupId);
this.legendRight.redraw();
} else {
this.yAxisLeft.removeGroup(groupId);
this.legendLeft.removeGroup(groupId);
this.legendLeft.redraw();
}
delete this.groups[groupId];
};
LineGraph.prototype._updateGroup = function(group, groupId) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId)) {
this.groups[groupId] = new GraphGroup(group, groupId, this.options, this.groupsUsingDefaultStyles);
if (this.groups[groupId].options.yAxisOrientation == "right") {
this.yAxisRight.addGroup(groupId, this.groups[groupId]);
this.legendRight.addGroup(groupId, this.groups[groupId]);
} else {
this.yAxisLeft.addGroup(groupId, this.groups[groupId]);
this.legendLeft.addGroup(groupId, this.groups[groupId]);
}
} else {
this.groups[groupId].update(group);
if (this.groups[groupId].options.yAxisOrientation == "right") {
this.yAxisRight.updateGroup(groupId, this.groups[groupId]);
this.legendRight.updateGroup(groupId, this.groups[groupId]);
this.yAxisLeft.removeGroup(groupId);
this.legendLeft.removeGroup(groupId);
} else {
this.yAxisLeft.updateGroup(groupId, this.groups[groupId]);
this.legendLeft.updateGroup(groupId, this.groups[groupId]);
this.yAxisRight.removeGroup(groupId);
this.legendRight.removeGroup(groupId);
}
}
this.legendLeft.redraw();
this.legendRight.redraw();
};
LineGraph.prototype._updateAllGroupData = function(ids, groupIds) {
if (this.itemsData != null) {
var groupsContent = {};
var items = this.itemsData.get();
var fieldId = this.itemsData.idProp;
var idMap = {};
if (ids) {
ids.map(function(id) {
idMap[id] = id;
});
}
var groupCounts = {};
for (var i = 0; i < items.length; i++) {
var item = items[i];
var groupId = item.group;
if (groupId === null || groupId === void 0) {
groupId = UNGROUPED;
}
Object.prototype.hasOwnProperty.call(groupCounts, groupId) ? groupCounts[groupId]++ : groupCounts[groupId] = 1;
}
var existingItemsMap = {};
if (!groupIds && ids) {
for (groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId))
continue;
group = this.groups[groupId];
var existing_items = group.getItems();
groupsContent[groupId] = existing_items.filter(function(item2) {
existingItemsMap[item2[fieldId]] = item2[fieldId];
return item2[fieldId] !== idMap[item2[fieldId]];
});
var newLength = groupCounts[groupId];
groupCounts[groupId] -= groupsContent[groupId].length;
if (groupsContent[groupId].length < newLength)
groupsContent[groupId][newLength - 1] = {};
}
}
for (i = 0; i < items.length; i++) {
item = items[i];
groupId = item.group;
if (groupId === null || groupId === void 0) {
groupId = UNGROUPED;
}
if (!groupIds && ids && item[fieldId] !== idMap[item[fieldId]] && Object.prototype.hasOwnProperty.call(existingItemsMap, item[fieldId])) {
continue;
}
if (!Object.prototype.hasOwnProperty.call(groupsContent, groupId)) {
groupsContent[groupId] = new Array(groupCounts[groupId]);
}
var extended = availableUtils.bridgeObject(item);
extended.x = availableUtils.convert(item.x, "Date");
extended.end = availableUtils.convert(item.end, "Date");
extended.orginalY = item.y;
extended.y = Number(item.y);
extended[fieldId] = item[fieldId];
var index = groupsContent[groupId].length - groupCounts[groupId]--;
groupsContent[groupId][index] = extended;
}
for (groupId in this.groups) {
if (!Object.prototype.hasOwnProperty.call(this.groups, groupId) || Object.prototype.hasOwnProperty.call(groupsContent, groupId))
continue;
groupsContent[groupId] = new Array(0);
}
for (groupId in groupsContent) {
if (!Object.prototype.hasOwnProperty.call(groupsContent, groupId))
continue;
if (groupsContent[groupId].length == 0) {
if (Object.prototype.hasOwnProperty.call(this.groups, groupId)) {
this._removeGroup(groupId);
}
} else {
var group = void 0;
if (this.groupsData != void 0) {
group = this.groupsData.get(groupId);
}
if (group == void 0) {
group = { id: groupId, content: this.options.defaultGroup + groupId };
}
this._updateGroup(group, groupId);
this.groups[groupId].setItems(groupsContent[groupId]);
}
}
this.forceGraphUpdate = true;
this.body.emitter.emit("_change", { queue: true });
}
};
LineGraph.prototype.redraw = function() {
var resized = false;
this.props.width = this.dom.frame.offsetWidth;
this.props.height = this.body.domProps.centerContainer.height - this.body.domProps.border.top - this.body.domProps.border.bottom;
resized = this._isResized() || resized;
var visibleInterval = this.body.range.end - this.body.range.start;
var zoomed = visibleInterval != this.lastVisibleInterval;
this.lastVisibleInterval = visibleInterval;
if (resized == true) {
this.svg.style.width = availableUtils.option.asSize(3 * this.props.width);
this.svg.style.left = availableUtils.option.asSize(-this.props.width);
if ((this.options.height + "").indexOf("%") != -1 || this.updateSVGheightOnResize == true) {
this.updateSVGheight = true;
}
}
if (this.updateSVGheight == true) {
if (this.options.graphHeight != this.props.height + "px") {
this.options.graphHeight = this.props.height + "px";
this.svg.style.height = this.props.height + "px";
}
this.updateSVGheight = false;
} else {
this.svg.style.height = ("" + this.options.graphHeight).replace("px", "") + "px";
}
if (resized == true || zoomed == true || this.abortedGraphUpdate == true || this.forceGraphUpdate == true) {
resized = this._updateGraph() || resized;
this.forceGraphUpdate = false;
this.lastStart = this.body.range.start;
this.svg.style.left = -this.props.width + "px";
} else {
if (this.lastStart != 0) {
var offset = this.body.range.start - this.lastStart;
var range = this.body.range.end - this.body.range.start;
if (this.props.width != 0) {
var rangePerPixelInv = this.props.width / range;
var xOffset = offset * rangePerPixelInv;
this.svg.style.left = -this.props.width - xOffset + "px";
}
}
}
this.legendLeft.redraw();
this.legendRight.redraw();
return resized;
};
LineGraph.prototype._getSortedGroupIds = function() {
var grouplist = [];
for (var groupId in this.groups) {
if (Object.prototype.hasOwnProperty.call(this.groups, groupId)) {
var group = this.groups[groupId];
if (group.visible == true && (this.options.groups.visibility[groupId] === void 0 || this.options.groups.visibility[groupId] == true)) {
grouplist.push({ id: groupId, zIndex: group.options.zIndex });
}
}
}
availableUtils.insertSort(grouplist, function(a, b) {
var az = a.zIndex;
var bz = b.zIndex;
if (az === void 0) az = 0;
if (bz === void 0) bz = 0;
return az == bz ? 0 : az < bz ? -1 : 1;
});
var groupIds = new Array(grouplist.length);
for (var i = 0; i < grouplist.length; i++) {
groupIds[i] = grouplist[i].id;
}
return groupIds;
};
LineGraph.prototype._updateGraph = function() {
prepareElements(this.svgElements);
if (this.props.width != 0 && this.itemsData != null) {
var group, i;
var groupRanges = {};
var changeCalled = false;
var minDate = this.body.util.toGlobalTime(-this.body.domProps.root.width);
var maxDate = this.body.util.toGlobalTime(2 * this.body.domProps.root.width);
var groupIds = this._getSortedGroupIds();
if (groupIds.length > 0) {
var groupsData = {};
this._getRelevantData(groupIds, groupsData, minDate, maxDate);
this._applySampling(groupIds, groupsData);
for (i = 0; i < groupIds.length; i++) {
this._convertXcoordinates(groupsData[groupIds[i]]);
}
this._getYRanges(groupIds, groupsData, groupRanges);
changeCalled = this._updateYAxis(groupIds, groupRanges);
if (changeCalled == true) {
cleanupElements(this.svgElements);
this.abortedGraphUpdate = true;
return true;
}
this.abortedGraphUpdate = false;
var below = void 0;
for (i = 0; i < groupIds.length; i++) {
group = this.groups[groupIds[i]];
if (this.options.stack === true && this.options.style === "line") {
if (group.options.excludeFromStacking == void 0 || !group.options.excludeFromStacking) {
if (below != void 0) {
this._stack(groupsData[group.id], groupsData[below.id]);
if (group.options.shaded.enabled == true && group.options.shaded.orientation !== "group") {
if (group.options.shaded.orientation == "top" && below.options.shaded.orientation !== "group") {
below.options.shaded.orientation = "group";
below.options.shaded.groupId = group.id;
} else {
group.options.shaded.orientation = "group";
group.options.shaded.groupId = below.id;
}
}
}
below = group;
}
}
this._convertYcoordinates(groupsData[groupIds[i]], group);
}
var paths = {};
for (i = 0; i < groupIds.length; i++) {
group = this.groups[groupIds[i]];
if (group.options.style === "line" && group.options.shaded.enabled == true) {
var dataset = groupsData[groupIds[i]];
if (dataset == null || dataset.length == 0) {
continue;
}
if (!Object.prototype.hasOwnProperty.call(paths, groupIds[i])) {
paths[groupIds[i]] = Line.calcPath(dataset, group);
}
if (group.options.shaded.orientation === "group") {
var subGroupId = group.options.shaded.groupId;
if (groupIds.indexOf(subGroupId) === -1) {
console.log(group.id + ": Unknown shading group target given:" + subGroupId);
continue;
}
if (!Object.prototype.hasOwnProperty.call(paths, subGroupId)) {
paths[subGroupId] = Line.calcPath(groupsData[subGroupId], this.groups[subGroupId]);
}
Line.drawShading(paths[groupIds[i]], group, paths[subGroupId], this.framework);
} else {
Line.drawShading(paths[groupIds[i]], group, void 0, this.framework);
}
}
}
Bargraph.draw(groupIds, groupsData, this.framework);
for (i = 0; i < groupIds.length; i++) {
group = this.groups[groupIds[i]];
if (groupsData[groupIds[i]].length > 0) {
switch (group.options.style) {
case "line":
if (!Object.prototype.hasOwnProperty.call(paths, groupIds[i])) {
paths[groupIds[i]] = Line.calcPath(groupsData[groupIds[i]], group);
}
Line.draw(paths[groupIds[i]], group, this.framework);
case "point":
case "points":
if (group.options.style == "point" || group.options.style == "points" || group.options.drawPoints.enabled == true) {
Points.draw(groupsData[groupIds[i]], group, this.framework);
}
break;
}
}
}
}
}
cleanupElements(this.svgElements);
return false;
};
LineGraph.prototype._stack = function(data, subData) {
var index, dx, dy, subPrevPoint, subNextPoint;
index = 0;
for (var j = 0; j < data.length; j++) {
subPrevPoint = void 0;
subNextPoint = void 0;
for (var k = index; k < subData.length; k++) {
if (subData[k].x === data[j].x) {
subPrevPoint = subData[k];
subNextPoint = subData[k];
index = k;
break;
} else if (subData[k].x > data[j].x) {
subNextPoint = subData[k];
if (k == 0) {
subPrevPoint = subNextPoint;
} else {
subPrevPoint = subData[k - 1];
}
index = k;
break;
}
}
if (subNextPoint === void 0) {
subPrevPoint = subData[subData.length - 1];
subNextPoint = subData[subData.length - 1];
}
dx = subNextPoint.x - subPrevPoint.x;
dy = subNextPoint.y - subPrevPoint.y;
if (dx == 0) {
data[j].y = data[j].orginalY + subNextPoint.y;
} else {
data[j].y = data[j].orginalY + dy / dx * (data[j].x - subPrevPoint.x) + subPrevPoint.y;
}
}
};
LineGraph.prototype._getRelevantData = function(groupIds, groupsData, minDate, maxDate) {
var group, i, j, item;
if (groupIds.length > 0) {
for (i = 0; i < groupIds.length; i++) {
group = this.groups[groupIds[i]];
var itemsData = group.getItems();
if (group.options.sort == true) {
var dateComparator = function(a, b) {
return a.getTime() == b.getTime() ? 0 : a < b ? -1 : 1;
};
var first = Math.max(0, availableUtils.binarySearchValue(itemsData, minDate, "x", "before", dateComparator));
var last = Math.min(itemsData.length, availableUtils.binarySearchValue(itemsData, maxDate, "x", "after", dateComparator) + 1);
if (last <= 0) {
last = itemsData.length;
}
var dataContainer = new Array(last - first);
for (j = first; j < last; j++) {
item = group.itemsData[j];
dataContainer[j - first] = item;
}
groupsData[groupIds[i]] = dataContainer;
} else {
groupsData[groupIds[i]] = group.itemsData;
}
}
}
};
LineGraph.prototype._applySampling = function(groupIds, groupsData) {
var group;
if (groupIds.length > 0) {
for (var i = 0; i < groupIds.length; i++) {
group = this.groups[groupIds[i]];
if (group.options.sampling == true) {
var dataContainer = groupsData[groupIds[i]];
if (dataContainer.length > 0) {
var increment = 1;
var amountOfPoints = dataContainer.length;
var xDistance = this.body.util.toGlobalScreen(dataContainer[dataContainer.length - 1].x) - this.body.util.toGlobalScreen(dataContainer[0].x);
var pointsPerPixel = amountOfPoints / xDistance;
increment = Math.min(Math.ceil(0.2 * amountOfPoints), Math.max(1, Math.round(pointsPerPixel)));
var sampledData = new Array(amountOfPoints);
for (var j = 0; j < amountOfPoints; j += increment) {
var idx = Math.round(j / increment);
sampledData[idx] = dataContainer[j];
}
groupsData[groupIds[i]] = sampledData.splice(0, Math.round(amountOfPoints / increment));
}
}
}
}
};
LineGraph.prototype._getYRanges = function(groupIds, groupsData, groupRanges) {
var groupData, group, i;
var combinedDataLeft = [];
var combinedDataRight = [];
var options;
if (groupIds.length > 0) {
for (i = 0; i < groupIds.length; i++) {
groupData = groupsData[groupIds[i]];
options = this.groups[groupIds[i]].options;
if (groupData.length > 0) {
group = this.groups[groupIds[i]];
if (options.stack === true && options.style === "bar") {
if (options.yAxisOrientation === "left") {
combinedDataLeft = combinedDataLeft.concat(groupData);
} else {
combinedDataRight = combinedDataRight.concat(groupData);
}
} else {
groupRanges[groupIds[i]] = group.getYRange(groupData, groupIds[i]);
}
}
}
Bargraph.getStackedYRange(combinedDataLeft, groupRanges, groupIds, "__barStackLeft", "left");
Bargraph.getStackedYRange(combinedDataRight, groupRanges, groupIds, "__barStackRight", "right");
}
};
LineGraph.prototype._updateYAxis = function(groupIds, groupRanges) {
var resized = false;
var yAxisLeftUsed = false;
var yAxisRightUsed = false;
var minLeft = 1e9, minRight = 1e9, maxLeft = -1e9, maxRight = -1e9, minVal, maxVal;
if (groupIds.length > 0) {
for (var i = 0; i < groupIds.length; i++) {
var group = this.groups[groupIds[i]];
if (group && group.options.yAxisOrientation != "right") {
yAxisLeftUsed = true;
minLeft = 1e9;
maxLeft = -1e9;
} else if (group && group.options.yAxisOrientation) {
yAxisRightUsed = true;
minRight = 1e9;
maxRight = -1e9;
}
}
for (i = 0; i < groupIds.length; i++) {
if (!Object.prototype.hasOwnProperty.call(groupRanges, groupIds[i]) || groupRanges[groupIds[i]].ignore === true)
continue;
minVal = groupRanges[groupIds[i]].min;
maxVal = groupRanges[groupIds[i]].max;
if (groupRanges[groupIds[i]].yAxisOrientation != "right") {
yAxisLeftUsed = true;
minLeft = minLeft > minVal ? minVal : minLeft;
maxLeft = maxLeft < maxVal ? maxVal : maxLeft;
} else {
yAxisRightUsed = true;
minRight = minRight > minVal ? minVal : minRight;
maxRight = maxRight < maxVal ? maxVal : maxRight;
}
}
if (yAxisLeftUsed == true) {
this.yAxisLeft.setRange(minLeft, maxLeft);
}
if (yAxisRightUsed == true) {
this.yAxisRight.setRange(minRight, maxRight);
}
}
resized = this._toggleAxisVisiblity(yAxisLeftUsed, this.yAxisLeft) || resized;
resized = this._toggleAxisVisiblity(yAxisRightUsed, this.yAxisRight) || resized;
if (yAxisRightUsed == true && yAxisLeftUsed == true) {
this.yAxisLeft.drawIcons = true;
this.yAxisRight.drawIcons = true;
} else {
this.yAxisLeft.drawIcons = false;
this.yAxisRight.drawIcons = false;
}
this.yAxisRight.master = !yAxisLeftUsed;
this.yAxisRight.masterAxis = this.yAxisLeft;
if (this.yAxisRight.master == false) {
if (yAxisRightUsed == true) {
this.yAxisLeft.lineOffset = this.yAxisRight.width;
} else {
this.yAxisLeft.lineOffset = 0;
}
resized = this.yAxisLeft.redraw() || resized;
resized = this.yAxisRight.redraw() || resized;
} else {
resized = this.yAxisRight.redraw() || resized;
}
var tempGroups = ["__barStackLeft", "__barStackRight", "__lineStackLeft", "__lineStackRight"];
for (i = 0; i < tempGroups.length; i++) {
if (groupIds.indexOf(tempGroups[i]) != -1) {
groupIds.splice(groupIds.indexOf(tempGroups[i]), 1);
}
}
return resized;
};
LineGraph.prototype._toggleAxisVisiblity = function(axisUsed, axis) {
var changed = false;
if (axisUsed == false) {
if (axis.dom.frame.parentNode && axis.hidden == false) {
axis.hide();
changed = true;
}
} else {
if (!axis.dom.frame.parentNode && axis.hidden == true) {
axis.show();
changed = true;
}
}
return changed;
};
LineGraph.prototype._convertXcoordinates = function(datapoints) {
var toScreen2 = this.body.util.toScreen;
for (var i = 0; i < datapoints.length; i++) {
datapoints[i].screen_x = toScreen2(datapoints[i].x) + this.props.width;
datapoints[i].screen_y = datapoints[i].y;
if (datapoints[i].end != void 0) {
datapoints[i].screen_end = toScreen2(datapoints[i].end) + this.props.width;
} else {
datapoints[i].screen_end = void 0;
}
}
};
LineGraph.prototype._convertYcoordinates = function(datapoints, group) {
var axis = this.yAxisLeft;
var svgHeight = Number(this.svg.style.height.replace("px", ""));
if (group.options.yAxisOrientation == "right") {
axis = this.yAxisRight;
}
for (var i = 0; i < datapoints.length; i++) {
datapoints[i].screen_y = Math.round(axis.convertValue(datapoints[i].y));
}
group.setZeroPosition(Math.min(svgHeight, axis.convertValue(0)));
};
var string = "string";
var bool = "boolean";
var number = "number";
var array = "array";
var date = "date";
var object = "object";
var dom = "dom";
var moment = "moment";
var any = "any";
var allOptions2 = {
configure: {
enabled: { "boolean": bool },
filter: { "boolean": bool, "function": "function" },
container: { dom },
__type__: { object, "boolean": bool, "function": "function" }
},
alignCurrentTime: { string, "undefined": "undefined" },
yAxisOrientation: { string: ["left", "right"] },
defaultGroup: { string },
sort: { "boolean": bool },
sampling: { "boolean": bool },
stack: { "boolean": bool },
graphHeight: { string, number },
shaded: {
enabled: { "boolean": bool },
orientation: { string: ["bottom", "top", "zero", "group"] },
groupId: { object },
__type__: { "boolean": bool, object }
},
style: { string: ["line", "bar", "points"] },
barChart: {
width: { number },
minWidth: { number },
sideBySide: { "boolean": bool },
align: { string: ["left", "center", "right"] },
__type__: { object }
},
interpolation: {
enabled: { "boolean": bool },
parametrization: { string: ["centripetal", "chordal", "uniform"] },
alpha: { number },
__type__: { object, "boolean": bool }
},
drawPoints: {
enabled: { "boolean": bool },
onRender: { "function": "function" },
size: { number },
style: { string: ["square", "circle"] },
__type__: { object, "boolean": bool, "function": "function" }
},
dataAxis: {
showMinorLabels: { "boolean": bool },
showMajorLabels: { "boolean": bool },
showWeekScale: { "boolean": bool },
icons: { "boolean": bool },
width: { string, number },
visible: { "boolean": bool },
alignZeros: { "boolean": bool },
left: {
range: { min: { number, "undefined": "undefined" }, max: { number, "undefined": "undefined" }, __type__: { object } },
format: { "function": "function" },
title: { text: { string, number, "undefined": "undefined" }, style: { string, "undefined": "undefined" }, __type__: { object } },
__type__: { object }
},
right: {
range: { min: { number, "undefined": "undefined" }, max: { number, "undefined": "undefined" }, __type__: { object } },
format: { "function": "function" },
title: { text: { string, number, "undefined": "undefined" }, style: { string, "undefined": "undefined" }, __type__: { object } },
__type__: { object }
},
__type__: { object }
},
legend: {
enabled: { "boolean": bool },
icons: { "boolean": bool },
left: {
visible: { "boolean": bool },
position: { string: ["top-right", "bottom-right", "top-left", "bottom-left"] },
__type__: { object }
},
right: {
visible: { "boolean": bool },
position: { string: ["top-right", "bottom-right", "top-left", "bottom-left"] },
__type__: { object }
},
__type__: { object, "boolean": bool }
},
groups: {
visibility: { any },
__type__: { object }
},
autoResize: { "boolean": bool },
throttleRedraw: { number },
clickToUse: { "boolean": bool },
end: { number, date, string, moment },
format: {
minorLabels: {
millisecond: { string, "undefined": "undefined" },
second: { string, "undefined": "undefined" },
minute: { string, "undefined": "undefined" },
hour: { string, "undefined": "undefined" },
weekday: { string, "undefined": "undefined" },
day: { string, "undefined": "undefined" },
week: { string, "undefined": "undefined" },
month: { string, "undefined": "undefined" },
quarter: { string, "undefined": "undefined" },
year: { string, "undefined": "undefined" },
__type__: { object }
},
majorLabels: {
millisecond: { string, "undefined": "undefined" },
second: { string, "undefined": "undefined" },
minute: { string, "undefined": "undefined" },
hour: { string, "undefined": "undefined" },
weekday: { string, "undefined": "undefined" },
day: { string, "undefined": "undefined" },
week: { string, "undefined": "undefined" },
month: { string, "undefined": "undefined" },
quarter: { string, "undefined": "undefined" },
year: { string, "undefined": "undefined" },
__type__: { object }
},
__type__: { object }
},
moment: { "function": "function" },
height: { string, number },
hiddenDates: {
start: { date, number, string, moment },
end: { date, number, string, moment },
repeat: { string },
__type__: { object, array }
},
locale: { string },
locales: {
__any__: { any },
__type__: { object }
},
max: { date, number, string, moment },
maxHeight: { number, string },
maxMinorChars: { number },
min: { date, number, string, moment },
minHeight: { number, string },
moveable: { "boolean": bool },
multiselect: { "boolean": bool },
orientation: { string },
showCurrentTime: { "boolean": bool },
showMajorLabels: { "boolean": bool },
showMinorLabels: { "boolean": bool },
showWeekScale: { "boolean": bool },
snap: { "function": "function", "null": "null" },
start: { date, number, string, moment },
timeAxis: {
scale: { string, "undefined": "undefined" },
step: { number, "undefined": "undefined" },
__type__: { object }
},
width: { string, number },
zoomable: { "boolean": bool },
zoomKey: { string: ["ctrlKey", "altKey", "metaKey", ""] },
zoomMax: { number },
zoomMin: { number },
zIndex: { number },
__type__: { object }
};
var configureOptions = {
global: {
alignCurrentTime: ["none", "year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"],
sort: true,
sampling: true,
stack: false,
shaded: {
enabled: false,
orientation: ["zero", "top", "bottom", "group"]
},
style: ["line", "bar", "points"],
barChart: {
width: [50, 5, 100, 5],
minWidth: [50, 5, 100, 5],
sideBySide: false,
align: ["left", "center", "right"]
},
interpolation: {
enabled: true,
parametrization: ["centripetal", "chordal", "uniform"]
},
drawPoints: {
enabled: true,
size: [6, 2, 30, 1],
style: ["square", "circle"]
},
dataAxis: {
showMinorLabels: true,
showMajorLabels: true,
showWeekScale: false,
icons: false,
width: [40, 0, 200, 1],
visible: true,
alignZeros: true,
left: {
title: { text: "", style: "" }
},
right: {
title: { text: "", style: "" }
}
},
legend: {
enabled: false,
icons: true,
left: {
visible: true,
position: ["top-right", "bottom-right", "top-left", "bottom-left"]
},
right: {
visible: true,
position: ["top-right", "bottom-right", "top-left", "bottom-left"]
}
},
autoResize: true,
clickToUse: false,
end: "",
format: {
minorLabels: {
millisecond: "SSS",
second: "s",
minute: "HH:mm",
hour: "HH:mm",
weekday: "ddd D",
day: "D",
week: "w",
month: "MMM",
quarter: "[Q]Q",
year: "YYYY"
},
majorLabels: {
millisecond: "HH:mm:ss",
second: "D MMMM HH:mm",
minute: "ddd D MMMM",
hour: "ddd D MMMM",
weekday: "MMMM YYYY",
day: "MMMM YYYY",
week: "MMMM YYYY",
month: "YYYY",
quarter: "YYYY",
year: ""
}
},
height: "",
locale: "",
max: "",
maxHeight: "",
maxMinorChars: [7, 0, 20, 1],
min: "",
minHeight: "",
moveable: true,
orientation: ["both", "bottom", "top"],
showCurrentTime: false,
showMajorLabels: true,
showMinorLabels: true,
showWeekScale: false,
start: "",
width: "100%",
zoomable: true,
zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
zoomMax: [31536e10, 10, 31536e10, 1],
zoomMin: [10, 10, 31536e10, 1],
zIndex: 0
}
};
function Graph2d(container, items, groups, options) {
if (!(Array.isArray(groups) || isDataViewLike2(groups)) && groups instanceof Object) {
var forthArgument = options;
options = groups;
groups = forthArgument;
}
if (options && options.throttleRedraw) {
console.warn('Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.');
}
var me = this;
this.defaultOptions = {
start: null,
end: null,
autoResize: true,
orientation: {
axis: "bottom",
item: "bottom"
},
moment: moment$2,
width: null,
height: null,
maxHeight: null,
minHeight: null
};
this.options = availableUtils.deepExtend({}, this.defaultOptions);
this._create(container);
this.components = [];
this.body = {
dom: this.dom,
domProps: this.props,
emitter: {
on: this.on.bind(this),
off: this.off.bind(this),
emit: this.emit.bind(this)
},
hiddenDates: [],
util: {
getScale() {
return me.timeAxis.step.scale;
},
getStep() {
return me.timeAxis.step.step;
},
toScreen: me._toScreen.bind(me),
toGlobalScreen: me._toGlobalScreen.bind(me),
toTime: me._toTime.bind(me),
toGlobalTime: me._toGlobalTime.bind(me)
}
};
this.range = new Range(this.body);
this.components.push(this.range);
this.body.range = this.range;
this.timeAxis = new TimeAxis(this.body);
this.components.push(this.timeAxis);
this.currentTime = new CurrentTime(this.body);
this.components.push(this.currentTime);
this.linegraph = new LineGraph(this.body);
this.components.push(this.linegraph);
this.itemsData = null;
this.groupsData = null;
this.on("tap", function(event2) {
me.emit("click", me.getEventProperties(event2));
});
this.on("doubletap", function(event2) {
me.emit("doubleClick", me.getEventProperties(event2));
});
this.dom.root.oncontextmenu = function(event2) {
me.emit("contextmenu", me.getEventProperties(event2));
};
this.initialFitDone = false;
this.on("changed", function() {
if (me.itemsData == null) return;
if (!me.initialFitDone && !me.options.rollingMode) {
me.initialFitDone = true;
if (me.options.start != void 0 || me.options.end != void 0) {
if (me.options.start == void 0 || me.options.end == void 0) {
var range = me.getItemRange();
}
var start = me.options.start != void 0 ? me.options.start : range.min;
var end = me.options.end != void 0 ? me.options.end : range.max;
me.setWindow(start, end, { animation: false });
} else {
me.fit({ animation: false });
}
}
if (!me.initialDrawDone && (me.initialRangeChangeDone || !me.options.start && !me.options.end || me.options.rollingMode)) {
me.initialDrawDone = true;
me.dom.root.style.visibility = "visible";
me.dom.loadingScreen.parentNode.removeChild(me.dom.loadingScreen);
if (me.options.onInitialDrawComplete) {
setTimeout(() => {
return me.options.onInitialDrawComplete();
}, 0);
}
}
});
if (options) {
this.setOptions(options);
}
if (groups) {
this.setGroups(groups);
}
if (items) {
this.setItems(items);
}
this._redraw();
}
Graph2d.prototype = new Core();
Graph2d.prototype.setOptions = function(options) {
let errorFound3 = Validator3.validate(options, allOptions2);
if (errorFound3 === true) {
console.log("%cErrors have been found in the supplied options object.", printStyle);
}
Core.prototype.setOptions.call(this, options);
};
Graph2d.prototype.setItems = function(items) {
var initialLoad = this.itemsData == null;
var newDataSet;
if (!items) {
newDataSet = null;
} else if (isDataViewLike2(items)) {
newDataSet = typeCoerceDataSet(items);
} else {
newDataSet = typeCoerceDataSet(new DataSet(items));
}
if (this.itemsData) {
this.itemsData.dispose();
}
this.itemsData = newDataSet;
this.linegraph && this.linegraph.setItems(newDataSet != null ? newDataSet.rawDS : null);
if (initialLoad) {
if (this.options.start != void 0 || this.options.end != void 0) {
var start = this.options.start != void 0 ? this.options.start : null;
var end = this.options.end != void 0 ? this.options.end : null;
this.setWindow(start, end, { animation: false });
} else {
this.fit({ animation: false });
}
}
};
Graph2d.prototype.setGroups = function(groups) {
var newDataSet;
if (!groups) {
newDataSet = null;
} else if (isDataViewLike2(groups)) {
newDataSet = groups;
} else {
newDataSet = new DataSet(groups);
}
this.groupsData = newDataSet;
this.linegraph.setGroups(newDataSet);
};
Graph2d.prototype.getLegend = function(groupId, width, height) {
if (width === void 0) {
width = 15;
}
if (height === void 0) {
height = 15;
}
if (this.linegraph.groups[groupId] !== void 0) {
return this.linegraph.groups[groupId].getLegend(width, height);
} else {
return "cannot find group:'" + groupId + "'";
}
};
Graph2d.prototype.isGroupVisible = function(groupId) {
if (this.linegraph.groups[groupId] !== void 0) {
return this.linegraph.groups[groupId].visible && (this.linegraph.options.groups.visibility[groupId] === void 0 || this.linegraph.options.groups.visibility[groupId] == true);
} else {
return false;
}
};
Graph2d.prototype.getDataRange = function() {
var min = null;
var max = null;
for (var groupId in this.linegraph.groups) {
if (!Object.prototype.hasOwnProperty.call(this.linegraph.groups, groupId) || this.linegraph.groups[groupId].visible !== true)
continue;
for (var i = 0; i < this.linegraph.groups[groupId].itemsData.length; i++) {
var item = this.linegraph.groups[groupId].itemsData[i];
var value = availableUtils.convert(item.x, "Date").valueOf();
min = min == null ? value : min > value ? value : min;
max = max == null ? value : max < value ? value : max;
}
}
return {
min: min != null ? new Date(min) : null,
max: max != null ? new Date(max) : null
};
};
Graph2d.prototype.getEventProperties = function(event2) {
var clientX = event2.center ? event2.center.x : event2.clientX;
var clientY = event2.center ? event2.center.y : event2.clientY;
var x = clientX - availableUtils.getAbsoluteLeft(this.dom.centerContainer);
var y = clientY - availableUtils.getAbsoluteTop(this.dom.centerContainer);
var time = this._toTime(x);
var customTime = CustomTime.customTimeFromTarget(event2);
var element = availableUtils.getTarget(event2);
var what = null;
if (availableUtils.hasParent(element, this.timeAxis.dom.foreground)) {
what = "axis";
} else if (this.timeAxis2 && availableUtils.hasParent(element, this.timeAxis2.dom.foreground)) {
what = "axis";
} else if (availableUtils.hasParent(element, this.linegraph.yAxisLeft.dom.frame)) {
what = "data-axis";
} else if (availableUtils.hasParent(element, this.linegraph.yAxisRight.dom.frame)) {
what = "data-axis";
} else if (availableUtils.hasParent(element, this.linegraph.legendLeft.dom.frame)) {
what = "legend";
} else if (availableUtils.hasParent(element, this.linegraph.legendRight.dom.frame)) {
what = "legend";
} else if (customTime != null) {
what = "custom-time";
} else if (availableUtils.hasParent(element, this.currentTime.bar)) {
what = "current-time";
} else if (availableUtils.hasParent(element, this.dom.center)) {
what = "background";
}
var value = [];
var yAxisLeft = this.linegraph.yAxisLeft;
var yAxisRight = this.linegraph.yAxisRight;
if (!yAxisLeft.hidden && this.itemsData.length > 0) {
value.push(yAxisLeft.screenToValue(y));
}
if (!yAxisRight.hidden && this.itemsData.length > 0) {
value.push(yAxisRight.screenToValue(y));
}
return {
event: event2,
customTime: customTime ? customTime.options.id : null,
what,
pageX: event2.srcEvent ? event2.srcEvent.pageX : event2.pageX,
pageY: event2.srcEvent ? event2.srcEvent.pageY : event2.pageY,
x,
y,
time,
value
};
};
Graph2d.prototype._createConfigurator = function() {
return new Configurator3(this, this.dom.container, configureOptions);
};
var defaultLanguage = getNavigatorLanguage();
import_moment.default.locale(defaultLanguage);
console.log("Graph2d", Graph2d);
})();