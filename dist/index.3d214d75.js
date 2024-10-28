// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
const scroll = new (0, _locomotiveScrollDefault.default)({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true
});
console.log("ya");

},{"locomotive-scroll":"dwfrm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwfrm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>u);
var _lenis = require("lenis");
var _lenisDefault = parcelHelpers.interopDefault(_lenis);
function e(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for(var s = 0, i = Array(e); s < e; s++)i[s] = t[s];
    return i;
}
function s(t, s) {
    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (Array.isArray(t) || (i = function(t, s) {
        if (t) {
            if ("string" == typeof t) return e(t, s);
            var i = ({}).toString.call(t).slice(8, -1);
            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? e(t, s) : void 0;
        }
    }(t)) || s && t && "number" == typeof t.length) {
        i && (t = i);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function i() {
    return i = Object.assign ? Object.assign.bind() : function(t) {
        for(var e = 1; e < arguments.length; e++){
            var s = arguments[e];
            for(var i in s)({}).hasOwnProperty.call(s, i) && (t[i] = s[i]);
        }
        return t;
    }, i.apply(null, arguments);
}
var r = /*#__PURE__*/ function() {
    function t(t) {
        var e = t.scrollElements, s = t.rootMargin, i = void 0 === s ? "-1px -1px -1px -1px" : s, r = t.IORaf;
        this.scrollElements = void 0, this.rootMargin = void 0, this.IORaf = void 0, this.observer = void 0, this.scrollElements = e, this.rootMargin = i, this.IORaf = r, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this;
        this.observer = new IntersectionObserver(function(e) {
            e.forEach(function(e) {
                var s = t.scrollElements.find(function(t) {
                    return t.$el === e.target;
                });
                e.isIntersecting ? (s && (s.isAlreadyIntersected = !0), t._setInview(e)) : s && s.isAlreadyIntersected && t._setOutOfView(e);
            });
        }, {
            rootMargin: this.rootMargin
        });
        for(var e, i = s(this.scrollElements); !(e = i()).done;)this.observe(e.value.$el);
    }, e.destroy = function() {
        this.observer.disconnect();
    }, e.observe = function(t) {
        t && this.observer.observe(t);
    }, e.unobserve = function(t) {
        t && this.observer.unobserve(t);
    }, e._setInview = function(t) {
        var e = this.scrollElements.find(function(e) {
            return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOn()), !this.IORaf && (null == e || e.setInview());
    }, e._setOutOfView = function(t) {
        var e = this.scrollElements.find(function(e) {
            return e.$el === t.target;
        });
        this.IORaf && (null == e || e.setInteractivityOff()), !this.IORaf && (null == e || e.setOutOfView()), null != e && e.attributes.scrollRepeat || this.IORaf || this.unobserve(t.target);
    }, t;
}();
function n(t, e, s, i, r) {
    return s + ((r - t) / (e - t) * (i - s) || 0);
}
function o(t, e) {
    return t.reduce(function(t, s) {
        return Math.abs(s - e) < Math.abs(t - e) ? s : t;
    });
}
var l = /*#__PURE__*/ function() {
    function t(t) {
        var e, s, i, r, n, o = t.$el, l = t.id, a = t.modularInstance, c = t.subscribeElementUpdateFn, h = t.unsubscribeElementUpdateFn, u = t.needRaf, d = t.scrollOrientation;
        this.$el = void 0, this.id = void 0, this.needRaf = void 0, this.attributes = void 0, this.scrollOrientation = void 0, this.isAlreadyIntersected = void 0, this.intersection = void 0, this.metrics = void 0, this.currentScroll = void 0, this.translateValue = void 0, this.progress = void 0, this.lastProgress = void 0, this.modularInstance = void 0, this.progressModularModules = void 0, this.isInview = void 0, this.isInteractive = void 0, this.isInFold = void 0, this.isFirstResize = void 0, this.subscribeElementUpdateFn = void 0, this.unsubscribeElementUpdateFn = void 0, this.$el = o, this.id = l, this.needRaf = u, this.scrollOrientation = d, this.modularInstance = a, this.subscribeElementUpdateFn = c, this.unsubscribeElementUpdateFn = h, this.attributes = {
            scrollClass: null != (e = this.$el.dataset.scrollClass) ? e : "is-inview",
            scrollOffset: null != (s = this.$el.dataset.scrollOffset) ? s : "0,0",
            scrollPosition: null != (i = this.$el.dataset.scrollPosition) ? i : "start,end",
            scrollModuleProgress: null != this.$el.dataset.scrollModuleProgress,
            scrollCssProgress: null != this.$el.dataset.scrollCssProgress,
            scrollEventProgress: null != (r = this.$el.dataset.scrollEventProgress) ? r : null,
            scrollSpeed: null != this.$el.dataset.scrollSpeed ? parseFloat(this.$el.dataset.scrollSpeed) : null,
            scrollRepeat: null != this.$el.dataset.scrollRepeat,
            scrollCall: null != (n = this.$el.dataset.scrollCall) ? n : null,
            scrollCallSelf: null != this.$el.dataset.scrollCallSelf,
            scrollIgnoreFold: null != this.$el.dataset.scrollIgnoreFold,
            scrollEnableTouchSpeed: null != this.$el.dataset.scrollEnableTouchSpeed
        }, this.intersection = {
            start: 0,
            end: 0
        }, this.metrics = {
            offsetStart: 0,
            offsetEnd: 0,
            bcr: {}
        }, this.currentScroll = "vertical" === this.scrollOrientation ? window.scrollY : window.scrollX, this.translateValue = 0, this.progress = 0, this.lastProgress = null, this.progressModularModules = [], this.isInview = !1, this.isInteractive = !1, this.isAlreadyIntersected = !1, this.isInFold = !1, this.isFirstResize = !0, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(), this._resize());
    }, e.onResize = function(t) {
        this.currentScroll = t.currentScroll, this._resize();
    }, e.onRender = function(t) {
        var e = t.smooth, s = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth;
        if (this.currentScroll = t.currentScroll, this._computeProgress(), this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed)) {
            if (this.attributes.scrollEnableTouchSpeed || e) {
                if (this.isInFold) {
                    var i = Math.max(0, this.progress);
                    this.translateValue = i * s * this.attributes.scrollSpeed * -1;
                } else {
                    var r = n(0, 1, -1, 1, this.progress);
                    this.translateValue = r * s * this.attributes.scrollSpeed * -1;
                }
                this.$el.style.transform = "vertical" === this.scrollOrientation ? "translate3d(0, " + this.translateValue + "px, 0)" : "translate3d(" + this.translateValue + "px, 0, 0)";
            } else this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"), this.translateValue = 0;
        }
    }, e.setInview = function() {
        if (!this.isInview) {
            this.isInview = !0, this.$el.classList.add(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("enter", t);
        }
    }, e.setOutOfView = function() {
        if (this.isInview && this.attributes.scrollRepeat) {
            this.isInview = !1, this.$el.classList.remove(this.attributes.scrollClass);
            var t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("leave", t);
        }
    }, e.setInteractivityOn = function() {
        this.isInteractive || (this.isInteractive = !0, this.subscribeElementUpdateFn(this));
    }, e.setInteractivityOff = function() {
        this.isInteractive && (this.isInteractive = !1, this.unsubscribeElementUpdateFn(this), null != this.lastProgress && this._computeProgress(o([
            0,
            1
        ], this.lastProgress)));
    }, e._resize = function() {
        this.metrics.bcr = this.$el.getBoundingClientRect(), this._computeMetrics(), this._computeIntersection(), this.isFirstResize && (this.isFirstResize = !1, this.isInFold && this.setInview());
    }, e._computeMetrics = function() {
        var t = this.metrics.bcr, e = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, s = "vertical" === this.scrollOrientation ? t.height : t.width;
        this.metrics.offsetStart = this.currentScroll + ("vertical" === this.scrollOrientation ? t.top : t.left) - this.translateValue, this.metrics.offsetEnd = this.metrics.offsetStart + s, this.isInFold = this.metrics.offsetStart < e && !this.attributes.scrollIgnoreFold;
    }, e._computeIntersection = function() {
        var t = "vertical" === this.scrollOrientation ? window.innerHeight : window.innerWidth, e = "vertical" === this.scrollOrientation ? this.metrics.bcr.height : this.metrics.bcr.width, s = this.attributes.scrollOffset.split(","), i = null != s[0] ? s[0].trim() : "0", r = null != s[1] ? s[1].trim() : "0", n = this.attributes.scrollPosition.split(","), o = null != n[0] ? n[0].trim() : "start", l = null != n[1] ? n[1].trim() : "end", a = i.includes("%") ? t * parseInt(i.replace("%", "").trim()) * .01 : parseInt(i), c = r.includes("%") ? t * parseInt(r.replace("%", "").trim()) * .01 : parseInt(r);
        switch(this.isInFold && (o = "fold"), o){
            case "start":
            default:
                this.intersection.start = this.metrics.offsetStart - t + a;
                break;
            case "middle":
                this.intersection.start = this.metrics.offsetStart - t + a + .5 * e;
                break;
            case "end":
                this.intersection.start = this.metrics.offsetStart - t + a + e;
                break;
            case "fold":
                this.intersection.start = 0;
        }
        switch(l){
            case "start":
                this.intersection.end = this.metrics.offsetStart - c;
                break;
            case "middle":
                this.intersection.end = this.metrics.offsetStart - c + .5 * e;
                break;
            default:
                this.intersection.end = this.metrics.offsetStart - c + e;
        }
        if (this.intersection.end <= this.intersection.start) switch(l){
            case "start":
            default:
                this.intersection.end = this.intersection.start + 1;
                break;
            case "middle":
                this.intersection.end = this.intersection.start + .5 * e;
                break;
            case "end":
                this.intersection.end = this.intersection.start + e;
        }
    }, e._computeProgress = function(t) {
        var e, i = null != t ? t : (e = n(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : e > 1 ? 1 : e;
        if (this.progress = i, i != this.lastProgress) {
            if (this.lastProgress = i, this.attributes.scrollCssProgress && this._setCssProgress(i), this.attributes.scrollEventProgress && this._setCustomEventProgress(i), this.attributes.scrollModuleProgress) for(var r, o = s(this.progressModularModules); !(r = o()).done;){
                var l = r.value;
                this.modularInstance && this.modularInstance.call("onScrollProgress", i, l.moduleName, l.moduleId);
            }
            i > 0 && i < 1 && this.setInview(), 0 === i && this.setOutOfView(), 1 === i && this.setOutOfView();
        }
    }, e._setCssProgress = function(t) {
        void 0 === t && (t = 0), this.$el.style.setProperty("--progress", t.toString());
    }, e._setCustomEventProgress = function(t) {
        void 0 === t && (t = 0);
        var e = this.attributes.scrollEventProgress;
        if (e) {
            var s = new CustomEvent(e, {
                detail: {
                    target: this.$el,
                    progress: t
                }
            });
            window.dispatchEvent(s);
        }
    }, e._getProgressModularModules = function() {
        if (this.modularInstance) {
            var t = Object.keys(this.$el.dataset).filter(function(t) {
                return t.includes("module");
            }), e = Object.entries(this.modularInstance.modules);
            if (t.length) for(var i, r = s(t); !(i = r()).done;){
                var n = this.$el.dataset[i.value];
                if (!n) return;
                for(var o, l = s(e); !(o = l()).done;){
                    var a = o.value;
                    n in a[1] && this.progressModularModules.push({
                        moduleName: a[0],
                        moduleId: n
                    });
                }
            }
        }
    }, e._getScrollCallFrom = function() {
        var t = o([
            this.intersection.start,
            this.intersection.end
        ], this.currentScroll);
        return this.intersection.start === t ? "start" : "end";
    }, e._dispatchCall = function(t, e) {
        var s, i, r = null == (s = this.attributes.scrollCall) ? void 0 : s.split(","), n = null == (i = this.attributes) ? void 0 : i.scrollCallSelf;
        if (r && r.length > 1) {
            var o, l, a = r[0], c = r[1], h = r[2];
            l = n ? this.$el.dataset["module" + c.trim()] : h, this.modularInstance && this.modularInstance.call(a.trim(), {
                target: this.$el,
                way: t,
                from: e
            }, c.trim(), null == (o = l) ? void 0 : o.trim());
        } else if (r) {
            var u = new CustomEvent(r[0], {
                detail: {
                    target: this.$el,
                    way: t,
                    from: e
                }
            });
            window.dispatchEvent(u);
        }
    }, t;
}(), a = [
    "scrollOffset",
    "scrollPosition",
    "scrollModuleProgress",
    "scrollCssProgress",
    "scrollEventProgress",
    "scrollSpeed"
], c = /*#__PURE__*/ function() {
    function t(t) {
        var e = t.$el, s = t.modularInstance, i = t.triggerRootMargin, r = t.rafRootMargin, n = t.scrollOrientation;
        this.$scrollContainer = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.scrollElements = void 0, this.triggeredScrollElements = void 0, this.RAFScrollElements = void 0, this.scrollElementsToUpdate = void 0, this.IOTriggerInstance = void 0, this.IORafInstance = void 0, this.scrollOrientation = void 0, e ? (this.$scrollContainer = e, this.modularInstance = s, this.scrollOrientation = n, this.triggerRootMargin = null != i ? i : "-1px -1px -1px -1px", this.rafRootMargin = null != r ? r : "100% 100% 100% 100%", this.scrollElements = [], this.triggeredScrollElements = [], this.RAFScrollElements = [], this.scrollElementsToUpdate = [], this._init()) : console.error("Please provide a DOM Element as scrollContainer");
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this.$scrollContainer.querySelectorAll("[data-scroll]"), e = Array.from(t);
        this._subscribeScrollElements(e), this.IOTriggerInstance = new r({
            scrollElements: [].concat(this.triggeredScrollElements),
            rootMargin: this.triggerRootMargin,
            IORaf: !1
        }), this.IORafInstance = new r({
            scrollElements: [].concat(this.RAFScrollElements),
            rootMargin: this.rafRootMargin,
            IORaf: !0
        });
    }, e.destroy = function() {
        this.IOTriggerInstance.destroy(), this.IORafInstance.destroy(), this._unsubscribeAllScrollElements();
    }, e.onResize = function(t) {
        for(var e, i = t.currentScroll, r = s(this.RAFScrollElements); !(e = r()).done;)e.value.onResize({
            currentScroll: i
        });
    }, e.onRender = function(t) {
        for(var e, i = t.currentScroll, r = t.smooth, n = s(this.scrollElementsToUpdate); !(e = n()).done;)e.value.onRender({
            currentScroll: i,
            smooth: r
        });
    }, e.removeScrollElements = function(t) {
        var e = this, s = t.querySelectorAll("[data-scroll]");
        if (s.length) {
            for(var i = 0; i < this.triggeredScrollElements.length; i++){
                var r = this.triggeredScrollElements[i];
                Array.from(s).indexOf(r.$el) > -1 && (this.IOTriggerInstance.unobserve(r.$el), this.triggeredScrollElements.splice(i, 1));
            }
            for(var n = 0; n < this.RAFScrollElements.length; n++){
                var o = this.RAFScrollElements[n];
                Array.from(s).indexOf(o.$el) > -1 && (this.IORafInstance.unobserve(o.$el), this.RAFScrollElements.splice(n, 1));
            }
            s.forEach(function(t) {
                var s = e.scrollElementsToUpdate.find(function(e) {
                    return e.$el === t;
                }), i = e.scrollElements.find(function(e) {
                    return e.$el === t;
                });
                s && e._unsubscribeElementUpdate(s), i && (e.scrollElements = e.scrollElements.filter(function(t) {
                    return t.id != i.id;
                }));
            });
        }
    }, e.addScrollElements = function(t) {
        var e = t.querySelectorAll("[data-scroll]"), s = [];
        this.scrollElements.forEach(function(t) {
            s.push(t.id);
        });
        var i = Math.max.apply(Math, s.concat([
            0
        ])) + 1, r = Array.from(e);
        this._subscribeScrollElements(r, i, !0);
    }, e._subscribeScrollElements = function(t, e, s) {
        void 0 === e && (e = 0), void 0 === s && (s = !1);
        for(var i = 0; i < t.length; i++){
            var r = t[i], n = this._checkRafNeeded(r), o = new l({
                $el: r,
                id: e + i,
                scrollOrientation: this.scrollOrientation,
                modularInstance: this.modularInstance,
                subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                needRaf: n
            });
            this.scrollElements.push(o), n ? (this.RAFScrollElements.push(o), s && (this.IORafInstance.scrollElements.push(o), this.IORafInstance.observe(o.$el))) : (this.triggeredScrollElements.push(o), s && (this.IOTriggerInstance.scrollElements.push(o), this.IOTriggerInstance.observe(o.$el)));
        }
    }, e._unsubscribeAllScrollElements = function() {
        this.scrollElements = [], this.RAFScrollElements = [], this.triggeredScrollElements = [], this.scrollElementsToUpdate = [];
    }, e._subscribeElementUpdate = function(t) {
        this.scrollElementsToUpdate.push(t);
    }, e._unsubscribeElementUpdate = function(t) {
        this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(function(e) {
            return e.id != t.id;
        });
    }, e._checkRafNeeded = function(t) {
        var e = [].concat(a), i = function(t) {
            e = e.filter(function(e) {
                return e != t;
            });
        };
        if (t.dataset.scrollOffset) {
            if ("0,0" != t.dataset.scrollOffset.split(",").map(function(t) {
                return t.replace("%", "").trim();
            }).join(",")) return !0;
            i("scrollOffset");
        } else i("scrollOffset");
        if (t.dataset.scrollPosition) {
            if ("top,bottom" != t.dataset.scrollPosition.trim()) return !0;
            i("scrollPosition");
        } else i("scrollPosition");
        if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed))) return !0;
        i("scrollSpeed");
        for(var r, n = s(e); !(r = n()).done;)if (r.value in t.dataset) return !0;
        return !1;
    }, t;
}(), h = /*#__PURE__*/ function() {
    function t(t) {
        var e = t.resizeElements, s = t.resizeCallback, i = void 0 === s ? function() {} : s;
        this.$resizeElements = void 0, this.isFirstObserve = void 0, this.observer = void 0, this.resizeCallback = void 0, this.$resizeElements = e, this.resizeCallback = i, this.isFirstObserve = !0, this._init();
    }
    var e = t.prototype;
    return e._init = function() {
        var t = this;
        this.observer = new ResizeObserver(function(e) {
            !t.isFirstObserve && (null == t.resizeCallback || t.resizeCallback()), t.isFirstObserve = !1;
        });
        for(var e, i = s(this.$resizeElements); !(e = i()).done;)this.observer.observe(e.value);
    }, e.destroy = function() {
        this.observer.disconnect();
    }, t;
}(), u = /*#__PURE__*/ function() {
    function e(t) {
        var e = void 0 === t ? {} : t, s = e.lenisOptions, i = void 0 === s ? {} : s, r = e.modularInstance, n = e.triggerRootMargin, o = e.rafRootMargin, l = e.autoResize, a = void 0 === l || l, c = e.autoStart, h = void 0 === c || c, u = e.scrollCallback, d = void 0 === u ? function() {} : u, f = e.initCustomTicker, v = e.destroyCustomTicker;
        this.rafPlaying = void 0, this.lenisInstance = void 0, this.coreInstance = void 0, this.lenisOptions = void 0, this.modularInstance = void 0, this.triggerRootMargin = void 0, this.rafRootMargin = void 0, this.rafInstance = void 0, this.autoResize = void 0, this.autoStart = void 0, this.ROInstance = void 0, this.initCustomTicker = void 0, this.destroyCustomTicker = void 0, this._onRenderBind = void 0, this._onResizeBind = void 0, this._onScrollToBind = void 0;
        for(var m = 0, g = Object.entries(i); m < g.length; m++){
            var b = g[m][0];
            [
                "wrapper",
                "content",
                "infinite"
            ].includes(b) && console.warn('Warning: Key "' + b + '" is not possible to edit in Locomotive Scroll.');
        }
        Object.assign(this, {
            lenisOptions: i,
            modularInstance: r,
            triggerRootMargin: n,
            rafRootMargin: o,
            autoResize: a,
            autoStart: h,
            scrollCallback: d,
            initCustomTicker: f,
            destroyCustomTicker: v
        }), this._onRenderBind = this._onRender.bind(this), this._onScrollToBind = this._onScrollTo.bind(this), this._onResizeBind = this._onResize.bind(this), this.rafPlaying = !1, this._init();
    }
    var s = e.prototype;
    return s._init = function() {
        var e, s = this;
        this.lenisInstance = new (0, _lenisDefault.default)(i({}, this.lenisOptions, {
            wrapper: window,
            content: document.documentElement,
            infinite: !1
        })), null == (e = this.lenisInstance) || e.on("scroll", this.scrollCallback), document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation), requestAnimationFrame(function() {
            s.coreInstance = new c({
                $el: s.lenisInstance.rootElement,
                modularInstance: s.modularInstance,
                triggerRootMargin: s.triggerRootMargin,
                rafRootMargin: s.rafRootMargin,
                scrollOrientation: s.lenisInstance.options.orientation
            }), s._bindEvents(), s.initCustomTicker && !s.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !s.initCustomTicker && s.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."), s.autoStart && s.start();
        });
    }, s.destroy = function() {
        var t, e = this;
        this.stop(), this._unbindEvents(), this.lenisInstance.destroy(), null == (t = this.coreInstance) || t.destroy(), requestAnimationFrame(function() {
            var t;
            null == (t = e.coreInstance) || t.destroy();
        });
    }, s._bindEvents = function() {
        this._bindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new h({
            resizeElements: [
                document.body
            ],
            resizeCallback: this._onResizeBind
        }) : window.addEventListener("resize", this._onResizeBind));
    }, s._unbindEvents = function() {
        this._unbindScrollToEvents(), this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind));
    }, s._bindScrollToEvents = function(t) {
        var e = this, s = t || this.lenisInstance.rootElement, i = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == i ? void 0 : i.length) && i.forEach(function(t) {
            t.addEventListener("click", e._onScrollToBind, !1);
        });
    }, s._unbindScrollToEvents = function(t) {
        var e = this, s = t || this.lenisInstance.rootElement, i = null == s ? void 0 : s.querySelectorAll("[data-scroll-to]");
        (null == i ? void 0 : i.length) && i.forEach(function(t) {
            t.removeEventListener("click", e._onScrollToBind, !1);
        });
    }, s._onResize = function() {
        var t = this;
        requestAnimationFrame(function() {
            var e;
            null == (e = t.coreInstance) || e.onResize({
                currentScroll: t.lenisInstance.scroll
            });
        });
    }, s._onRender = function() {
        var t, e;
        null == (t = this.lenisInstance) || t.raf(Date.now()), null == (e = this.coreInstance) || e.onRender({
            currentScroll: this.lenisInstance.scroll,
            smooth: this.lenisInstance.options.smoothWheel
        });
    }, s._onScrollTo = function(t) {
        var e;
        t.preventDefault();
        var s = null != (e = t.currentTarget) ? e : null;
        if (s) {
            var i = s.getAttribute("data-scroll-to-href") || s.getAttribute("href"), r = s.getAttribute("data-scroll-to-offset") || 0, n = s.getAttribute("data-scroll-to-duration") || this.lenisInstance.options.duration;
            i && this.scrollTo(i, {
                offset: "string" == typeof r ? parseInt(r) : r,
                duration: "string" == typeof n ? parseInt(n) : n
            });
        }
    }, s.start = function() {
        var t;
        this.rafPlaying || (null == (t = this.lenisInstance) || t.start(), this.rafPlaying = !0, this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf());
    }, s.stop = function() {
        var t;
        this.rafPlaying && (null == (t = this.lenisInstance) || t.stop(), this.rafPlaying = !1, this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance));
    }, s.removeScrollElements = function(t) {
        var e;
        t ? (this._unbindScrollToEvents(t), null == (e = this.coreInstance) || e.removeScrollElements(t)) : console.error("Please provide a DOM Element as $oldContainer");
    }, s.addScrollElements = function(t) {
        var e, s = this;
        t ? (null == (e = this.coreInstance) || e.addScrollElements(t), requestAnimationFrame(function() {
            s._bindScrollToEvents(t);
        })) : console.error("Please provide a DOM Element as $newContainer");
    }, s.resize = function() {
        this._onResizeBind();
    }, s.scrollTo = function(t, e) {
        var s;
        null == (s = this.lenisInstance) || s.scrollTo(t, {
            offset: null == e ? void 0 : e.offset,
            lerp: null == e ? void 0 : e.lerp,
            duration: null == e ? void 0 : e.duration,
            immediate: null == e ? void 0 : e.immediate,
            lock: null == e ? void 0 : e.lock,
            force: null == e ? void 0 : e.force,
            easing: null == e ? void 0 : e.easing,
            onComplete: null == e ? void 0 : e.onComplete
        });
    }, s._raf = function() {
        var t = this;
        this._onRenderBind(), this.rafInstance = requestAnimationFrame(function() {
            return t._raf();
        });
    }, e;
}();

},{"lenis":"JS2ak","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JS2ak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Lenis);
function clamp(t, i, e) {
    return Math.max(t, Math.min(i, e));
}
class Animate {
    constructor(){
        this.isRunning = !1, this.value = 0, this.from = 0, this.to = 0, this.duration = 0, this.currentTime = 0;
    }
    advance(t) {
        var i;
        if (!this.isRunning) return;
        let e = !1;
        if (this.duration && this.easing) {
            this.currentTime += t;
            const i = clamp(0, this.currentTime / this.duration, 1);
            e = i >= 1;
            const s = e ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * s;
        } else this.lerp ? (this.value = function damp(t, i, e, s) {
            return function lerp(t, i, e) {
                return (1 - e) * t + e * i;
            }(t, i, 1 - Math.exp(-e * s));
        }(this.value, this.to, 60 * this.lerp, t), Math.round(this.value) === this.to && (this.value = this.to, e = !0)) : (this.value = this.to, e = !0);
        e && this.stop(), null === (i = this.onUpdate) || void 0 === i || i.call(this, this.value, e);
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(t, i, { lerp: e, duration: s, easing: o, onStart: n, onUpdate: l }) {
        this.from = this.value = t, this.to = i, this.lerp = e, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, null == n || n(), this.onUpdate = l;
    }
}
class Dimensions {
    constructor({ wrapper: t, content: i, autoResize: e = !0, debounce: s = 250 } = {}){
        this.width = 0, this.height = 0, this.scrollWidth = 0, this.scrollHeight = 0, this.resize = ()=>{
            this.onWrapperResize(), this.onContentResize();
        }, this.onWrapperResize = ()=>{
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
        }, this.onContentResize = ()=>{
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
        }, this.wrapper = t, this.content = i, e && (this.debouncedResize = function debounce(t, i) {
            let e;
            return function() {
                let s = arguments, o = this;
                clearTimeout(e), e = setTimeout(function() {
                    t.apply(o, s);
                }, i);
            };
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    destroy() {
        var t, i;
        null === (t = this.wrapperResizeObserver) || void 0 === t || t.disconnect(), null === (i = this.contentResizeObserver) || void 0 === i || i.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        };
    }
}
class Emitter {
    constructor(){
        this.events = {};
    }
    emit(t, ...i) {
        let e = this.events[t] || [];
        for(let t = 0, s = e.length; t < s; t++)e[t](...i);
    }
    on(t, i) {
        var e;
        return (null === (e = this.events[t]) || void 0 === e ? void 0 : e.push(i)) || (this.events[t] = [
            i
        ]), ()=>{
            var e;
            this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter((t)=>i !== t);
        };
    }
    off(t, i) {
        var e;
        this.events[t] = null === (e = this.events[t]) || void 0 === e ? void 0 : e.filter((t)=>i !== t);
    }
    destroy() {
        this.events = {};
    }
}
const t = 100 / 6;
class VirtualScroll {
    constructor(i, { wheelMultiplier: e = 1, touchMultiplier: s = 1 }){
        this.lastDelta = {
            x: 0,
            y: 0
        }, this.windowWidth = 0, this.windowHeight = 0, this.onTouchStart = (t)=>{
            const { clientX: i, clientY: e } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            });
        }, this.onTouchMove = (t)=>{
            var i, e, s, o;
            const { clientX: n, clientY: l } = t.targetTouches ? t.targetTouches[0] : t, r = -(n - (null !== (e = null === (i = this.touchStart) || void 0 === i ? void 0 : i.x) && void 0 !== e ? e : 0)) * this.touchMultiplier, h = -(l - (null !== (o = null === (s = this.touchStart) || void 0 === s ? void 0 : s.y) && void 0 !== o ? o : 0)) * this.touchMultiplier;
            this.touchStart.x = n, this.touchStart.y = l, this.lastDelta = {
                x: r,
                y: h
            }, this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: h,
                event: t
            });
        }, this.onTouchEnd = (t)=>{
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            });
        }, this.onWheel = (i)=>{
            let { deltaX: e, deltaY: s, deltaMode: o } = i;
            e *= 1 === o ? t : 2 === o ? this.windowWidth : 1, s *= 1 === o ? t : 2 === o ? this.windowHeight : 1, e *= this.wheelMultiplier, s *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: s,
                event: i
            });
        }, this.onWindowResize = ()=>{
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight;
        }, this.element = i, this.wheelMultiplier = e, this.touchMultiplier = s, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    on(t, i) {
        return this.emitter.on(t, i);
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel), this.element.removeEventListener("touchstart", this.onTouchStart), this.element.removeEventListener("touchmove", this.onTouchMove), this.element.removeEventListener("touchend", this.onTouchEnd);
    }
}
class Lenis {
    constructor({ wrapper: t = window, content: i = document.documentElement, wheelEventsTarget: e = t, eventsTarget: s = e, smoothWheel: o = !0, syncTouch: n = !1, syncTouchLerp: l = .075, touchInertiaMultiplier: r = 35, duration: h, easing: a = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: c = .1, infinite: d = !1, orientation: u = "vertical", gestureOrientation: p = "vertical", touchMultiplier: m = 1, wheelMultiplier: v = 1, autoResize: g = !0, prevent: w, virtualScroll: S, __experimental__naiveDimensions: f = !1 } = {}){
        this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.userData = {}, this.lastVelocity = 0, this.velocity = 0, this.direction = 0, this.onPointerDown = (t)=>{
            1 === t.button && this.reset();
        }, this.onVirtualScroll = (t)=>{
            if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
            const { deltaX: i, deltaY: e, event: s } = t;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: i,
                deltaY: e,
                event: s
            }), s.ctrlKey) return;
            const o = s.type.includes("touch"), n = s.type.includes("wheel");
            this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
            if (this.options.syncTouch && o && "touchstart" === s.type && !this.isStopped && !this.isLocked) return void this.reset();
            const l = 0 === i && 0 === e, r = "vertical" === this.options.gestureOrientation && 0 === e || "horizontal" === this.options.gestureOrientation && 0 === i;
            if (l || r) return;
            let h = s.composedPath();
            h = h.slice(0, h.indexOf(this.rootElement));
            const a = this.options.prevent;
            if (h.find((t)=>{
                var i, e, s, l, r;
                return t instanceof Element && ("function" == typeof a && (null == a ? void 0 : a(t)) || (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent")) || o && (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent-touch")) || n && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel")) || (null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis")) && !(null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis-stopped")));
            })) return;
            if (this.isStopped || this.isLocked) return void s.preventDefault();
            if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", void this.animate.stop();
            s.preventDefault();
            let c = e;
            "both" === this.options.gestureOrientation ? c = Math.abs(e) > Math.abs(i) ? e : i : "horizontal" === this.options.gestureOrientation && (c = i);
            const d = o && this.options.syncTouch, u = o && "touchend" === s.type && Math.abs(c) > 5;
            u && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, Object.assign({
                programmatic: !1
            }, d ? {
                lerp: u ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }));
        }, this.onNativeScroll = ()=>{
            if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isScrolling = "native", this.emit(), 0 !== this.velocity && (this.__resetVelocityTimeout = setTimeout(()=>{
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
                }, 400));
            }
        }, window.lenisVersion = "1.1.9", t && t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: i,
            wheelEventsTarget: e,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: l,
            touchInertiaMultiplier: r,
            duration: h,
            easing: a,
            lerp: c,
            infinite: d,
            gestureOrientation: p,
            orientation: u,
            touchMultiplier: m,
            wheelMultiplier: v,
            autoResize: g,
            prevent: w,
            virtualScroll: S,
            __experimental__naiveDimensions: f
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: t,
            content: i,
            autoResize: g
        }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: v
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName();
    }
    on(t, i) {
        return this.emitter.on(t, i);
    }
    off(t, i) {
        return this.emitter.off(t, i);
    }
    setScroll(t) {
        this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
    }
    resize() {
        this.dimensions.resize();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset());
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
    }
    raf(t) {
        const i = t - (this.time || t);
        this.time = t, this.animate.advance(.001 * i);
    }
    scrollTo(t, { offset: i = 0, immediate: e = !1, lock: s = !1, duration: o = this.options.duration, easing: n = this.options.easing, lerp: l = this.options.lerp, onStart: r, onComplete: h, force: a = !1, programmatic: c = !0, userData: d = {} } = {}) {
        if (!this.isStopped && !this.isLocked || a) {
            if ("string" == typeof t && [
                "top",
                "left",
                "start"
            ].includes(t)) t = 0;
            else if ("string" == typeof t && [
                "bottom",
                "right",
                "end"
            ].includes(t)) t = this.limit;
            else {
                let e;
                if ("string" == typeof t ? e = document.querySelector(t) : t instanceof HTMLElement && (null == t ? void 0 : t.nodeType) && (e = t), e) {
                    if (this.options.wrapper !== window) {
                        const t = this.rootElement.getBoundingClientRect();
                        i -= this.isHorizontal ? t.left : t.top;
                    }
                    const s = e.getBoundingClientRect();
                    t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
            }
            if ("number" == typeof t && (t += i, t = Math.round(t), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : t = clamp(0, t, this.limit), t !== this.targetScroll)) {
                if (this.userData = d, e) return this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), null == h || h(this), void (this.userData = {});
                c || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
                    duration: o,
                    easing: n,
                    lerp: l,
                    onStart: ()=>{
                        s && (this.isLocked = !0), this.isScrolling = "smooth", null == r || r(this);
                    },
                    onUpdate: (t, i)=>{
                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), c && (this.targetScroll = t), i || this.emit(), i && (this.reset(), this.emit(), null == h || h(this), this.userData = {}, this.preventNextNativeScrollEvent());
                    }
                });
            }
        }
    }
    preventNextNativeScrollEvent() {
        this.__preventNextNativeScrollEvent = !0, requestAnimationFrame(()=>{
            delete this.__preventNextNativeScrollEvent;
        });
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return "horizontal" === this.options.orientation;
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite ? function modulo(t, i) {
            return (t % i + i) % i;
        }(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
        return this.__isScrolling;
    }
    set isScrolling(t) {
        this.__isScrolling !== t && (this.__isScrolling = t, this.updateClassName());
    }
    get isStopped() {
        return this.__isStopped;
    }
    set isStopped(t) {
        this.__isStopped !== t && (this.__isStopped = t, this.updateClassName());
    }
    get isLocked() {
        return this.__isLocked;
    }
    set isLocked(t) {
        this.__isLocked !== t && (this.__isLocked = t, this.updateClassName());
    }
    get isSmooth() {
        return "smooth" === this.isScrolling;
    }
    get className() {
        let t = "lenis";
        return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t;
    }
    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
