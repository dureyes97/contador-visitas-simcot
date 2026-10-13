System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/contador-visitas-simcot/src/runtime/widget.tsx ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */

const IDEAM_LOGO_BASE64 = 'data:image/png;base64,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';
const Icons = {
    Eye: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "12", cy: "13", r: "3" })] })),
    Refresh: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 3v5h-5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 16H3v5" })] })),
    Layers: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5" })] })),
    Chart: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12", y1: "20", y2: "10" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "18", x2: "18", y1: "20", y2: "4" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "6", x2: "6", y1: "20", y2: "16" })] })),
    Code: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "16 18 22 12 16 6" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "8 6 2 12 8 18" })] })),
    Check: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "20 6 9 17 4 12" }) }))
};
const simcotStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #002625;
  display: flex;
  flex-direction: column;
  background: transparent;
  user-select: none;

  .simcot-counter-card {
    width: 100%;
    height: 100%;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #c9e3e7;
    border-radius: 14px;
    padding: 16px 18px;
    box-sizing: border-box;
    box-shadow: 0 8px 24px -4px rgba(8, 127, 155, 0.12), 0 2px 8px -2px rgba(0, 38, 37, 0.05);
    position: relative;
    overflow: hidden;
  }

  /* Franja superior con la paleta oficial SIMCOT / IDEAM */
  .simcot-brand-stripe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #087f9b 0%, #126057 55%, #10b981 100%);
  }

  /* Encabezado */
  .simcot-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 4px;
  }

  .simcot-brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .simcot-logo {
    height: 38px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(8, 127, 155, 0.15));
  }

  .simcot-title-box {
    display: flex;
    flex-direction: column;
  }

  .simcot-tag {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #087f9b;
  }

  .simcot-heading {
    font-size: 0.92rem;
    font-weight: 800;
    color: #002625;
    letter-spacing: -0.01em;
    margin: 1px 0 0 0;
    line-height: 1.2;
  }

  .simcot-subtitle {
    font-size: 0.68rem;
    color: #3d6665;
    font-weight: 500;
    margin-top: 1px;
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #e6f7f4;
    border: 1px solid #a3e3d6;
    color: #0d705c;
    padding: 3px 8px;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-weight: 700;
  }

  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: livePulse 2s infinite ease-in-out;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }

  /* Cuerpo del contador */
  .simcot-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0 8px 0;
  }

  .odometer-frame {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: #f0f7f8;
    border: 1px solid #bfe1e6;
    border-radius: 10px;
    box-shadow: inset 0 2px 4px rgba(8, 127, 155, 0.06);
  }

  .odometer-tile {
    width: 28px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 1.6rem;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(180deg, #002625 0%, #087f9b 100%);
    border-radius: 5px;
    box-shadow: 0 3px 8px rgba(8, 127, 155, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .odometer-comma {
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 1.6rem;
    font-weight: 800;
    color: #087f9b;
    margin: 0 1px;
    padding-bottom: 6px;
  }

  .counter-caption {
    font-size: 0.72rem;
    color: #304e4e;
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  /* Tarjetas de métricas complementarias */
  .metrics-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 6px 0;
  }

  .metric-mini-card {
    background: #f7fafb;
    border: 1px solid #d8ebed;
    border-radius: 8px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .metric-mini-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: #e1f2f5;
    color: #087f9b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .metric-mini-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .metric-mini-label {
    font-size: 0.62rem;
    color: #4f7373;
    font-weight: 600;
    line-height: 1.1;
  }

  .metric-mini-val {
    font-size: 0.85rem;
    font-weight: 800;
    color: #002625;
    margin-top: 1px;
  }

  /* Pie del widget */
  .simcot-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-top: 8px;
    border-top: 1px solid #e3f0f2;
  }

  .sync-text {
    font-size: 0.64rem;
    color: #4d7070;
    font-weight: 500;
  }

  .actions-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .btn-action {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 6px;
    border: 1px solid #bce1e6;
    background: #ffffff;
    color: #087f9b;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-action:hover {
    background: #e6f4f6;
    border-color: #087f9b;
    color: #002625;
  }

  .spin {
    animation: rotateSpin 1s linear infinite;
  }

  @keyframes rotateSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Modal de código para incrustar */
  .embed-box {
    margin-top: 8px;
    padding: 8px 10px;
    background: #002625;
    border-radius: 6px;
    color: #bbf7d0;
    font-family: monospace;
    font-size: 0.64rem;
    word-break: break-all;
    user-select: all;
  }
`;
const Widget = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const portalUrl = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.portalUrl) || 'https://www.arcgis.com';
    const itemId = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.itemId) || '6b45024fb7a247219c33adc524345589';
    const widgetTitle = ((_c = props.config) === null || _c === void 0 ? void 0 : _c.widgetTitle) || 'Monitoreo de Visitas SIMCOT';
    const refreshIntervalSec = ((_d = props.config) === null || _d === void 0 ? void 0 : _d.refreshIntervalSec) || 30;
    const showTableroStats = ((_e = props.config) === null || _e === void 0 ? void 0 : _e.showTableroStats) !== false;
    const tableroItemId = ((_f = props.config) === null || _f === void 0 ? void 0 : _f.tableroItemId) || '6f82270e8c2b4872979478f43e1494d5';
    const [viewsCount, setViewsCount] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(24390);
    const [tableroViews, setTableroViews] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(22011);
    const [isRefreshing, setIsRefreshing] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [lastSyncTime, setLastSyncTime] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('En línea');
    const [copied, setCopied] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [showEmbedCode, setShowEmbedCode] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    // Obtener estadísticas de ArcGIS Online en tiempo real
    const fetchSimcotStats = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((...args_1) => __awaiter(void 0, [...args_1], void 0, function* (isManual = false) {
        if (isManual)
            setIsRefreshing(true);
        try {
            // 1. Estadísticas de la StoryMap SIMCOT
            const resStory = yield fetch(`${portalUrl}/sharing/rest/content/items/${itemId}?f=json`, {
                cache: 'no-store'
            });
            if (resStory.ok) {
                const dataStory = yield resStory.json();
                if (dataStory && typeof dataStory.numViews === 'number') {
                    setViewsCount(dataStory.numViews);
                }
            }
            // 2. Estadísticas del Tablero de Experiencia ExB (si está activo)
            if (showTableroStats && tableroItemId) {
                const resTablero = yield fetch(`${portalUrl}/sharing/rest/content/items/${tableroItemId}?f=json`, {
                    cache: 'no-store'
                });
                if (resTablero.ok) {
                    const dataTablero = yield resTablero.json();
                    if (dataTablero && typeof dataTablero.numViews === 'number') {
                        setTableroViews(dataTablero.numViews);
                    }
                }
            }
            const now = new Date();
            setLastSyncTime(now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }
        catch (err) {
            console.warn('[SIMCOT] Error al sincronizar estadísticas:', err);
        }
        finally {
            setIsRefreshing(false);
        }
    }), [portalUrl, itemId, showTableroStats, tableroItemId]);
    // Carga inicial y auto-refresco
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        fetchSimcotStats();
        const timer = setInterval(() => {
            fetchSimcotStats();
        }, Math.max(10, refreshIntervalSec) * 1000);
        return () => clearInterval(timer);
    }, [fetchSimcotStats, refreshIntervalSec]);
    // Formatear dígitos con separador de miles
    const digitsElements = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const formatted = viewsCount.toLocaleString('es-CO');
        return formatted.split('');
    }, [viewsCount]);
    const copyEmbedSnippet = () => {
        const snippet = '<iframe src="https://dureyes97.github.io/contador-visitas-simcot/" width="100%" height="340" frameborder="0" style="border:none;border-radius:12px;"></iframe>';
        navigator.clipboard.writeText(snippet).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: simcotStyle, className: "jimu-widget", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-counter-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "simcot-brand-stripe" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-header", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-brand-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: IDEAM_LOGO_BASE64, alt: "Logo Oficial IDEAM", className: "simcot-logo" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-title-box", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "simcot-tag", children: "IDEAM \u2022 SIMCOT" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "simcot-heading", children: widgetTitle }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "simcot-subtitle", children: "Coberturas de la Tierra Colombia" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "live-badge", title: "Conexi\u00F3n en vivo con ArcGIS Online", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "live-dot" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "En vivo" })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-body", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "odometer-frame", children: digitsElements.map((char, idx) => {
                                if (char === '.' || char === ',') {
                                    return (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "odometer-comma", children: char }, idx);
                                }
                                return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "odometer-tile", children: char }, idx));
                            }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "counter-caption", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Eye, {}), " Vistas acumuladas en ArcGIS StoryMaps"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "metrics-strip", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "metric-mini-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "metric-mini-icon", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Chart, {}) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "metric-mini-info", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "metric-mini-label", children: "Tablero de Estad\u00EDsticas" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "metric-mini-val", children: [tableroViews.toLocaleString('es-CO'), " vistas"] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "metric-mini-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "metric-mini-icon", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Layers, {}) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "metric-mini-info", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "metric-mini-label", children: "Metodolog\u00EDa CLC" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "metric-mini-val", children: "Escala 1:100.000" })] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "simcot-footer", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "sync-text", children: ["Sincronizado: ", lastSyncTime] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "actions-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-action", onClick: () => setShowEmbedCode(!showEmbedCode), title: "C\u00F3digo para incrustar en StoryMap", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Code, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Incrustar" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-action", onClick: () => fetchSimcotStats(true), title: "Actualizar datos ahora", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: isRefreshing ? 'spin' : '', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Refresh, {}) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Actualizar" })] })] })] }), showEmbedCode && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "embed-box", children: "<iframe src=\"https://dureyes97.github.io/contador-visitas-simcot/\" width=\"100%\" height=\"340\" frameborder=\"0\"></iframe>" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-action", style: { marginTop: '5px', width: '100%', justifyContent: 'center' }, onClick: copyEmbedSnippet, children: [copied ? (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Check, {}) : (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icons.Code, {}), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: copied ? '¡Copiado al portapapeles!' : 'Copiar iframe para StoryMap' })] })] }))] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb250YWRvci12aXNpdGFzLXNpbWNvdC9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0U7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSwyQjs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDaUQ7QUFHaEUsTUFBTSxpQkFBaUIsR0FBRyx3MUZBQXcxRjtBQVVsM0YsTUFBTSxLQUFLLEdBQUc7SUFDWixHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FDVCwwRUFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxPQUFPLGFBQzVJLDBFQUFNLENBQUMsRUFBQyw4Q0FBOEMsR0FBRSw4RUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBRSxJQUNu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ekMsZ0VBQUMsS0FBSyxDQUFDLElBQUksS0FBRyxFQUNkLGtHQUFzQixJQUNmLEVBRVQsNkVBQ0UsU0FBUyxFQUFDLFlBQVksRUFDdEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUNyQyxLQUFLLEVBQUMsd0JBQXdCLGFBRTlCLDBFQUFNLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUN6QyxnRUFBQyxLQUFLLENBQUMsT0FBTyxLQUFHLEdBQ1osRUFDUCxtR0FBdUIsSUFDaEIsSUFDTCxJQUNGLEVBR0wsYUFBYSxJQUFJLENBQ2hCLHFGQUNFLHlFQUFLLFNBQVMsRUFBQyxXQUFXLCtJQUVwQixFQUNOLDZFQUNFLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEVBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsYUFFeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxnRUFBQyxLQUFLLENBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFDLGdFQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUcsRUFDMUMsb0ZBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEdBQVEsSUFDNUUsSUFDTCxDQUNQLElBRUcsR0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELGlFQUFlLE1BQU07QUFDYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZW1vdGlvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY29udGFkb3ItdmlzaXRhcy1zaW1jb3Qvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19lbW90aW9uX3JlYWN0X2pzeF9ydW50aW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IElERUFNX0xPR09fQkFTRTY0ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmNBQUFCVUNBWUFBQUQzWEt2Q0FBQUlOVWxFUVZSNDJ1MmM3ZTRzTlIzSHVZUzVBaHhGRVJXMElxQWlhaEY5UDI4d0ljWTR4aGhqWXN5SWdLQVlLaytLQkJraElFSFVxa2dBWXh5OUFlY083QjB3ZDJEdm9INkx2ejMwMUQ3Tjd1ek83cDU5OFRsbnQvMDk5YnZkZHA3K2U1MHg1cnBUNXl2M3Z0MEFEUXdoUWJWMlhlY2diT2VJNnFMV0Z2alVoWlVSWVRjTUYzSG5pMXJSekRRRnlJdTQ1Y0l5TUJVS3U2ckFweVlzOXphdUsxOS9NRG9jaGNEbnNISEp5T3pXYTI5eXA3NXhqUW1mTmlLd3ZJajczc1lsSXNLS1F2L1Erc3d2NHQ3N2RoODd4Q3I5ZWtlV0NGM3k0Wnl0dUYvKzZsc1NtQWpOekZqdEVuRk9YdHg3N251VEFRV014MER0Y3N1NGJTRG1CUGcxSWU0OVgzdURBdzFNQUxGQWZCR0lPNTY5dUYvNitsODZZQUlNb0FWOG9Ud3lrS003UzNIdi9zYnJGUmlCQ2JHbm5ES1FxejByY2ZrMy84eUJBaWJBQktvOTVwYUJuUHpreGYzaXQvNVlneEdZQ0FObzlseERCWlNYVndOMnN1Sis0ZHVTQXdWTUJBM1lnV3FwQXJYWS9QWEppZnY1Ny95aEJ5WURQM0JORlpCZURjcTJuNHk0ZDMzM2R3TXdFU2JRZ1dhTlpRcDVLNkM4bXRSSmlIdlg5MTZUd0VUUVlQWDdYYllHb0x6YTVOR0srN252LzVZQkJVeUVBVlRIY3F4dGF3blVLNDlPM0R1N1YxdWdnWWtnWjhaakZMTUhZeWEyUlpGZFQzNnNNRTlGdmx2WHVsZHhQM3YvS3owd0NXUmhuQXEwWU1yRUswVURBZXFDdkdxYm12Y203bWNlK0UwRlJtQVN5SUk0RGNYUm1WaTdJQUVqcXNoWWxPY2pWaEgzMHcrOXpNQUVUQUtaOE8vQm1QSGZKeElvVUh0ajBvNk5IUjg3cUxoM1BQd1NCeHFZQkRMaVc5bStqTzhhREtBRnpCdWJmUzBPSXU3dFAzNVJBSk5CSnZ6SEFuK2ZnZktPQVd5ZkJJb3dPNklqTmZaN0ZmZTJSMStRd0dRWUV2NnF3SC9EQkFSb2dTNzBzWFk5MWFsbjVDcXRoeTB1N20yUC9ib0NBekFaWk1MZnpLQW45RXcvbHhFMFFCSFREckUyMkJqZG91SitTand2Z2NuQWQvVGYwTTIwVDZGQkEycXFnMUY4dDMrYnVPM080dDc2eEs4cU1BS1RvVS9FNkFyOExRbzA5TDlaRUExWXBMWWF5QzNqeXEzRi9lUlR6ekdnZ2NrZ00zSGFnaGlXeHNZcXRKMkxIUWRMMUZpRFlZdTRZcmE0N09mUE1xQ0J5Y0FMWW9tQ09LT05WV0MzQzNZOFZjRzQ1Y3k0ckZqY1R6enp5eFpvWURJVVBRc0xPNUdKTXdGZW1ITlh4c0thYXlDcHBqNHpobmZyejRyNzhXZWZrY0NVRVBHdktFYnR0SFdaV0FLTXBYa1hZS3M3dnhsdE5HaWl6cmM4OXdzSlRBWU5Pc0FpTVFUWlZSWnE2eUt4QnNESlZoZmtYZ3E5cVcwT1ZLZEkxZnIvVHM4L1hZRUJtQUtpU3dINmFxQWNXMG50c1ZnTmFFRmZtSHRKdG43Z2hQUVNRUHR4cnpLOCtZV25LcUNBS1dBQzBSMFhmUnhveDc2bDlqRVN6OXJMd3R3YkJyY0dpdEVYK3JyajFMdGVCaUR0aER2bUs1MGZlL0ZKQmpRd0JTaVEvQ3FobjNzK25OcGxKQ2Fma2Q4aUU3bTdBdjhhakg1OXU0STRMUkRnZjJ2dVIxOStuQUVOVEFIV0xudnJHVGFWNjBkdEhFeWh1TlEvRmRaZ3FUTDVVN0ZzWCtlTmFWcjhpWnVQdlBJekRqUXdCWFNnNko0K3hYVjlHV2dUdVJvd0ZkWXhPbm5hVUUyVUwrcnY5QS8wLy9MaTN2U3EwTUJrR0lFQXhic3FiSGtnVGd2NlNNNnhvSTROZ25MVVRwc3N5Ty9DcVo2RzN1dkZ4ZjN3YTQ4cFlESnN0UjU1c2UzcmtkcEZLSWRqcnpQMUtMSnZuTFlKOUU1dVhqb215cWNXRi9mRzMvKzBBZ3FZQ0Z2ZldvYXZjT0pNRm1ydlFua3lkWlRDblB3cE8rN1lqYUJlWEZ6N3o0ZmtveFZRd0hqczlOd3EvQm5RWHN5YSt2eGNJNWlBak5SU1N1Mk1LV1hYT0hYdTVVbWZxOFg0MDA4RTBNQ0FSWjVYUlp5SjRsazQwVHR0TGhYNU1EQjZmY0tMRlVLU2Z3VlVpZTFKLzAzRUIxOS9wQWVHR0ozWElVVENWNExhMm9ESjh4dEE2L2dObVR6djFuSVdmODF6d3hzUEsyQWNKcUM5TnN0QXRwYUtmRnVudndNMXRkY2JHeThYRDhRTjBaeUZ1Qjk0NjBjVjBNQTRUTjU3SDJ2UEhQOFdESlpNTHBtSmEra09NZTZEUGVUMi9yOCt5SUNaaWJaK00zSjBoWEhyc3hMWFV2L3RnUWFZbVdnd0FKYUozV1hpMkJnVDZFRjFkdUphM3ZmM0gwcWdnWm1KOVdsQUN3VG9BS2YzVThMUDlsVmtiMS9YaHhycktzL0JYditQK3dkZ0RnUUhnbDRmOU1uMTFSNDB2djZmUHhpQjJUTWNNREFSOWJVaWJnWGFQUXJiVVh4TjcvdERqM0gxUitWSmhHbEJVZTAzb3JaaU9zS0tOY1oyRkgrTFFMTjRsMlZDMHdja0E5K0d3Y2EvcG45QWlHWmJRek5aT0xNdWh4V1ZPeCtTTDNxOTFwaU85c2NzU09UUm1aV2JtYTA4WVFlYXNmN010M1pzelRFYy9ZOEgwVzVmT3pPem9sbk9QYUZkeERIVWZySS9OVWhMaC9HV0R6dVQyMk9wOFpURjVjNVJ3YkJaZDQrSmsvOFYwbVBtSXNKRjNJdTRGeTdpSHBHNHRDdGZkZTRlT0J6S25VSEoyRzRlaUo5Q1pFNmhmZnM2TTdiaUhIVDJHTHp5dHFhNHljSVhGTGNMMlBkYmlLc2l0bkp0Y1ZYaXJHbERtNGovRHZoWGdqWlJaK2pLbXQ1Q1hCTzYwSk80MW5Fd2NYbmdZa3dmdUpoU1JlS0xIVTRvaWo3TWhMai9TVXdBbHJvZ3Y0cTRqdDBRRy9CQzRrcHZqWjl5WC9PQXVHNk1JWEtxYlFMZnpOWEY5VC81WVNseEF4dFpINmlMRllqYnhwWVRUOUQrcU1RTkRHU014TjljV2d4U3VKSFZ4Rld6c3FBbVc4ZS9uZmVOczdUNWRrY3Q3clROMFVMQlJxWWlOMEIxWkpQeVJldjlJdzF2UmcrbklLNVpRdHlBcjd1V3Q3bU5MU0F1OXllQXQxOTBweUR1dU1TYUd6ajIzS3kzSXJBMlRqbHhBMjNNT3dTcmowN2N3THExODRZV09TUExQc2RRSU83ZzNVbStjZ3dlMFdOMWNYMjdiZ0Z4dXkzRWxRWGlkaW5mb3hJM1VPd2lKeEhlUmpZNXk0SFBGRHY3aW9oYlI4UnQxaFpYZVlkUHdTZGhFdkdUaDJMT0RzNUxyeUVFUHR3dUpTNjF2eE03SlY1VDNCejlqaGR1eHNoR1ZzOVltNmNDY2Z2Q0RYaDFjWFhxQnVKY2NRTmlxUzJPS3BxTXVFM2hIcEVVOTc5UlpIOHNEcDNDUFFBQUFBQkpSVTVFcmtKZ2dnPT0nXG5cbmludGVyZmFjZSBJdGVtU3RhdHMge1xuICBudW1WaWV3czogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY3JlYXRlZDogbnVtYmVyXG4gIG1vZGlmaWVkOiBudW1iZXJcbiAgb3duZXI6IHN0cmluZ1xufVxuXG5jb25zdCBJY29ucyA9IHtcbiAgRXllOiAoKSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cGF0aCBkPVwiTTIgMTJzMy03IDEwLTcgMTAgNyAxMCA3LTMgNy0xMCA3LTEwLTctMTAtN1pcIi8+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxM1wiIHI9XCIzXCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBSZWZyZXNoOiAoKSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cGF0aCBkPVwiTTMgMTJhOSA5IDAgMCAxIDktOSA5Ljc1IDkuNzUgMCAwIDEgNi43NCAyLjc0TDIxIDhcIi8+PHBhdGggZD1cIk0yMSAzdjVoLTVcIi8+PHBhdGggZD1cIk0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNlwiLz48cGF0aCBkPVwiTTggMTZIM3Y1XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBMYXllcnM6ICgpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJtMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M1pcIi8+XG4gICAgICA8cGF0aCBkPVwibTIyIDEyLjUtOC41OCAzLjkxYTIgMiAwIDAgMS0xLjY2IDBMMiAxMi41XCIvPlxuICAgICAgPHBhdGggZD1cIm0yMiAxNy41LTguNTggMy45MWEyIDIgMCAwIDEtMS42NiAwTDIgMTcuNVwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgQ2hhcnQ6ICgpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxsaW5lIHgxPVwiMTJcIiB4Mj1cIjEyXCIgeTE9XCIyMFwiIHkyPVwiMTBcIi8+PGxpbmUgeDE9XCIxOFwiIHgyPVwiMThcIiB5MT1cIjIwXCIgeTI9XCI0XCIvPjxsaW5lIHgxPVwiNlwiIHgyPVwiNlwiIHkxPVwiMjBcIiB5Mj1cIjE2XCIvPlxuICAgIDwvc3ZnPlxuICApLFxuICBDb2RlOiAoKSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTYgMTggMjIgMTIgMTYgNlwiLz48cG9seWxpbmUgcG9pbnRzPVwiOCA2IDIgMTIgOCAxOFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgQ2hlY2s6ICgpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIyMCA2IDkgMTcgNCAxMlwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5jb25zdCBzaW1jb3RTdHlsZSA9IGNzc2BcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwJmZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMjYyNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC5zaW1jb3QtY291bnRlci1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjkwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWUzZTc7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IC00cHggcmdiYSg4LCAxMjcsIDE1NSwgMC4xMiksIDAgMnB4IDhweCAtMnB4IHJnYmEoMCwgMzgsIDM3LCAwLjA1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC8qIEZyYW5qYSBzdXBlcmlvciBjb24gbGEgcGFsZXRhIG9maWNpYWwgU0lNQ09UIC8gSURFQU0gKi9cbiAgLnNpbWNvdC1icmFuZC1zdHJpcGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwODdmOWIgMCUsICMxMjYwNTcgNTUlLCAjMTBiOTgxIDEwMCUpO1xuICB9XG5cbiAgLyogRW5jYWJlemFkbyAqL1xuICAuc2ltY290LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG5cbiAgLnNpbWNvdC1icmFuZC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5zaW1jb3QtbG9nbyB7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSg4LCAxMjcsIDE1NSwgMC4xNSkpO1xuICB9XG5cbiAgLnNpbWNvdC10aXRsZS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zaW1jb3QtdGFnIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwODdmOWI7XG4gIH1cblxuICAuc2ltY290LWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjMDAyNjI1O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgIG1hcmdpbjogMXB4IDAgMCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIH1cblxuICAuc2ltY290LXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgY29sb3I6ICMzZDY2NjU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gIH1cblxuICAubGl2ZS1iYWRnZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTZmN2Y0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2UzZDY7XG4gICAgY29sb3I6ICMwZDcwNWM7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAubGl2ZS1kb3Qge1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjMTBiOTgxO1xuICAgIGFuaW1hdGlvbjogbGl2ZVB1bHNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgQGtleWZyYW1lcyBsaXZlUHVsc2Uge1xuICAgIDAlLCAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDAuNDsgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTsgfVxuICB9XG5cbiAgLyogQ3VlcnBvIGRlbCBjb250YWRvciAqL1xuICAuc2ltY290LWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTJweCAwIDhweCAwO1xuICB9XG5cbiAgLm9kb21ldGVyLWZyYW1lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmMGY3Zjg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmZTFlNjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCByZ2JhKDgsIDEyNywgMTU1LCAwLjA2KTtcbiAgfVxuXG4gIC5vZG9tZXRlci10aWxlIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBDb25zb2xhcywgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMjYyNSAwJSwgIzA4N2Y5YiAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoOCwgMTI3LCAxNTUsIDAuMzUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIH1cblxuICAub2RvbWV0ZXItY29tbWEge1xuICAgIGZvbnQtZmFtaWx5OiAnSmV0QnJhaW5zIE1vbm8nLCBDb25zb2xhcywgbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMwODdmOWI7XG4gICAgbWFyZ2luOiAwIDFweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICB9XG5cbiAgLmNvdW50ZXItY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGNvbG9yOiAjMzA0ZTRlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC8qIFRhcmpldGFzIGRlIG3DqXRyaWNhcyBjb21wbGVtZW50YXJpYXMgKi9cbiAgLm1ldHJpY3Mtc3RyaXAge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbjogNnB4IDA7XG4gIH1cblxuICAubWV0cmljLW1pbmktY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZmFmYjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhlYmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAubWV0cmljLW1pbmktaWNvbiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTFmMmY1O1xuICAgIGNvbG9yOiAjMDg3ZjliO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC5tZXRyaWMtbWluaS1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5cbiAgLm1ldHJpYy1taW5pLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNjJyZW07XG4gICAgY29sb3I6ICM0ZjczNzM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbiAgLm1ldHJpYy1taW5pLXZhbCB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMwMDI2MjU7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICB9XG5cbiAgLyogUGllIGRlbCB3aWRnZXQgKi9cbiAgLnNpbWNvdC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZjBmMjtcbiAgfVxuXG4gIC5zeW5jLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC42NHJlbTtcbiAgICBjb2xvcjogIzRkNzA3MDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmFjdGlvbnMtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgfVxuXG4gIC5idG4tYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDRweCA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2UxZTY7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzA4N2Y5YjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIH1cbiAgLmJ0bi1hY3Rpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNmY0ZjY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDg3ZjliO1xuICAgIGNvbG9yOiAjMDAyNjI1O1xuICB9XG5cbiAgLnNwaW4ge1xuICAgIGFuaW1hdGlvbjogcm90YXRlU3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHJvdGF0ZVNwaW4ge1xuICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9XG5cbiAgLyogTW9kYWwgZGUgY8OzZGlnbyBwYXJhIGluY3J1c3RhciAqL1xuICAuZW1iZWQtYm94IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzAwMjYyNTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY29sb3I6ICNiYmY3ZDA7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDAuNjRyZW07XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIHVzZXItc2VsZWN0OiBhbGw7XG4gIH1cbmBcblxuY29uc3QgV2lkZ2V0ID0gKHByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3QgcG9ydGFsVXJsID0gcHJvcHMuY29uZmlnPy5wb3J0YWxVcmwgfHwgJ2h0dHBzOi8vd3d3LmFyY2dpcy5jb20nXG4gIGNvbnN0IGl0ZW1JZCA9IHByb3BzLmNvbmZpZz8uaXRlbUlkIHx8ICc2YjQ1MDI0ZmI3YTI0NzIxOWMzM2FkYzUyNDM0NTU4OSdcbiAgY29uc3Qgd2lkZ2V0VGl0bGUgPSBwcm9wcy5jb25maWc/LndpZGdldFRpdGxlIHx8ICdNb25pdG9yZW8gZGUgVmlzaXRhcyBTSU1DT1QnXG4gIGNvbnN0IHJlZnJlc2hJbnRlcnZhbFNlYyA9IHByb3BzLmNvbmZpZz8ucmVmcmVzaEludGVydmFsU2VjIHx8IDMwXG4gIGNvbnN0IHNob3dUYWJsZXJvU3RhdHMgPSBwcm9wcy5jb25maWc/LnNob3dUYWJsZXJvU3RhdHMgIT09IGZhbHNlXG4gIGNvbnN0IHRhYmxlcm9JdGVtSWQgPSBwcm9wcy5jb25maWc/LnRhYmxlcm9JdGVtSWQgfHwgJzZmODIyNzBlOGMyYjQ4NzI5Nzk0NzhmNDNlMTQ5NGQ1J1xuXG4gIGNvbnN0IFt2aWV3c0NvdW50LCBzZXRWaWV3c0NvdW50XSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oMjQzOTApXG4gIGNvbnN0IFt0YWJsZXJvVmlld3MsIHNldFRhYmxlcm9WaWV3c10gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDIyMDExKVxuICBjb25zdCBbaXNSZWZyZXNoaW5nLCBzZXRJc1JlZnJlc2hpbmddID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtsYXN0U3luY1RpbWUsIHNldExhc3RTeW5jVGltZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdFbiBsw61uZWEnKVxuICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtzaG93RW1iZWRDb2RlLCBzZXRTaG93RW1iZWRDb2RlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuXG4gIC8vIE9idGVuZXIgZXN0YWTDrXN0aWNhcyBkZSBBcmNHSVMgT25saW5lIGVuIHRpZW1wbyByZWFsXG4gIGNvbnN0IGZldGNoU2ltY290U3RhdHMgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoaXNNYW51YWw6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgIGlmIChpc01hbnVhbCkgc2V0SXNSZWZyZXNoaW5nKHRydWUpXG5cbiAgICB0cnkge1xuICAgICAgLy8gMS4gRXN0YWTDrXN0aWNhcyBkZSBsYSBTdG9yeU1hcCBTSU1DT1RcbiAgICAgIGNvbnN0IHJlc1N0b3J5ID0gYXdhaXQgZmV0Y2goYCR7cG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29udGVudC9pdGVtcy8ke2l0ZW1JZH0/Zj1qc29uYCwge1xuICAgICAgICBjYWNoZTogJ25vLXN0b3JlJ1xuICAgICAgfSlcbiAgICAgIGlmIChyZXNTdG9yeS5vaykge1xuICAgICAgICBjb25zdCBkYXRhU3Rvcnk6IEl0ZW1TdGF0cyA9IGF3YWl0IHJlc1N0b3J5Lmpzb24oKVxuICAgICAgICBpZiAoZGF0YVN0b3J5ICYmIHR5cGVvZiBkYXRhU3RvcnkubnVtVmlld3MgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc2V0Vmlld3NDb3VudChkYXRhU3RvcnkubnVtVmlld3MpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMi4gRXN0YWTDrXN0aWNhcyBkZWwgVGFibGVybyBkZSBFeHBlcmllbmNpYSBFeEIgKHNpIGVzdMOhIGFjdGl2bylcbiAgICAgIGlmIChzaG93VGFibGVyb1N0YXRzICYmIHRhYmxlcm9JdGVtSWQpIHtcbiAgICAgICAgY29uc3QgcmVzVGFibGVybyA9IGF3YWl0IGZldGNoKGAke3BvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXMvJHt0YWJsZXJvSXRlbUlkfT9mPWpzb25gLCB7XG4gICAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHJlc1RhYmxlcm8ub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhVGFibGVybzogSXRlbVN0YXRzID0gYXdhaXQgcmVzVGFibGVyby5qc29uKClcbiAgICAgICAgICBpZiAoZGF0YVRhYmxlcm8gJiYgdHlwZW9mIGRhdGFUYWJsZXJvLm51bVZpZXdzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2V0VGFibGVyb1ZpZXdzKGRhdGFUYWJsZXJvLm51bVZpZXdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgICBzZXRMYXN0U3luY1RpbWUobm93LnRvTG9jYWxlVGltZVN0cmluZygnZXMtQ08nLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIHNlY29uZDogJzItZGlnaXQnIH0pKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS53YXJuKCdbU0lNQ09UXSBFcnJvciBhbCBzaW5jcm9uaXphciBlc3RhZMOtc3RpY2FzOicsIGVycilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNSZWZyZXNoaW5nKGZhbHNlKVxuICAgIH1cbiAgfSwgW3BvcnRhbFVybCwgaXRlbUlkLCBzaG93VGFibGVyb1N0YXRzLCB0YWJsZXJvSXRlbUlkXSlcblxuICAvLyBDYXJnYSBpbmljaWFsIHkgYXV0by1yZWZyZXNjb1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoU2ltY290U3RhdHMoKVxuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZmV0Y2hTaW1jb3RTdGF0cygpXG4gICAgfSwgTWF0aC5tYXgoMTAsIHJlZnJlc2hJbnRlcnZhbFNlYykgKiAxMDAwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpXG4gIH0sIFtmZXRjaFNpbWNvdFN0YXRzLCByZWZyZXNoSW50ZXJ2YWxTZWNdKVxuXG4gIC8vIEZvcm1hdGVhciBkw61naXRvcyBjb24gc2VwYXJhZG9yIGRlIG1pbGVzXG4gIGNvbnN0IGRpZ2l0c0VsZW1lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkID0gdmlld3NDb3VudC50b0xvY2FsZVN0cmluZygnZXMtQ08nKVxuICAgIHJldHVybiBmb3JtYXR0ZWQuc3BsaXQoJycpXG4gIH0sIFt2aWV3c0NvdW50XSlcblxuICBjb25zdCBjb3B5RW1iZWRTbmlwcGV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNuaXBwZXQgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL2R1cmV5ZXM5Ny5naXRodWIuaW8vY29udGFkb3ItdmlzaXRhcy1zaW1jb3QvXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzQwXCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjEycHg7XCI+PC9pZnJhbWU+J1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNuaXBwZXQpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0Q29waWVkKHRydWUpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDI1MDApXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3NpbWNvdFN0eWxlfSBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW1jb3QtY291bnRlci1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltY290LWJyYW5kLXN0cmlwZVwiIC8+XG5cbiAgICAgICAgey8qIEVuY2FiZXphZG8gY29uIEJyYW5kIElERUFNIC8gU0lNQ09UICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbWNvdC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbWNvdC1icmFuZC1ncm91cFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e0lERUFNX0xPR09fQkFTRTY0fVxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvIE9maWNpYWwgSURFQU1cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1jb3QtbG9nb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW1jb3QtdGl0bGUtYm94XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpbWNvdC10YWdcIj5JREVBTSDigKIgU0lNQ09UPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2ltY290LWhlYWRpbmdcIj57d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2ltY290LXN1YnRpdGxlXCI+Q29iZXJ0dXJhcyBkZSBsYSBUaWVycmEgQ29sb21iaWE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl2ZS1iYWRnZVwiIHRpdGxlPVwiQ29uZXhpw7NuIGVuIHZpdm8gY29uIEFyY0dJUyBPbmxpbmVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpdmUtZG90XCIgLz5cbiAgICAgICAgICAgIDxzcGFuPkVuIHZpdm88L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBWaXN1YWxpemFkb3IgZGUgZMOtZ2l0b3MgZGVsIGNvbnRhZG9yIG9maWNpYWwgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltY290LWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9kb21ldGVyLWZyYW1lXCI+XG4gICAgICAgICAgICB7ZGlnaXRzRWxlbWVudHMubWFwKChjaGFyLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcuJyB8fCBjaGFyID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpZHh9IGNsYXNzTmFtZT1cIm9kb21ldGVyLWNvbW1hXCI+e2NoYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwib2RvbWV0ZXItdGlsZVwiPlxuICAgICAgICAgICAgICAgICAge2NoYXJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGVyLWNhcHRpb25cIj5cbiAgICAgICAgICAgIDxJY29ucy5FeWUgLz4gVmlzdGFzIGFjdW11bGFkYXMgZW4gQXJjR0lTIFN0b3J5TWFwc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRnJhbmphIGRlIG3DqXRyaWNhcyBjb21wbGVtZW50YXJpYXMgZGVsIGVjb3Npc3RlbWEgU0lNQ09UICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpY3Mtc3RyaXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpYy1taW5pLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljLW1pbmktaWNvblwiPlxuICAgICAgICAgICAgICA8SWNvbnMuQ2hhcnQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRyaWMtbWluaS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1ldHJpYy1taW5pLWxhYmVsXCI+VGFibGVybyBkZSBFc3RhZMOtc3RpY2FzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXRyaWMtbWluaS12YWxcIj57dGFibGVyb1ZpZXdzLnRvTG9jYWxlU3RyaW5nKCdlcy1DTycpfSB2aXN0YXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0cmljLW1pbmktY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRyaWMtbWluaS1pY29uXCI+XG4gICAgICAgICAgICAgIDxJY29ucy5MYXllcnMgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRyaWMtbWluaS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1ldHJpYy1taW5pLWxhYmVsXCI+TWV0b2RvbG9nw61hIENMQzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWV0cmljLW1pbmktdmFsXCI+RXNjYWxhIDE6MTAwLjAwMDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUGllIGNvbiBlc3RhZG8gZGUgc2luY3Jvbml6YWNpw7NuIHkgYWNjaW9uZXMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltY290LWZvb3RlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN5bmMtdGV4dFwiPlxuICAgICAgICAgICAgU2luY3Jvbml6YWRvOiB7bGFzdFN5bmNUaW1lfVxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9ucy1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYWN0aW9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0VtYmVkQ29kZSghc2hvd0VtYmVkQ29kZSl9XG4gICAgICAgICAgICAgIHRpdGxlPVwiQ8OzZGlnbyBwYXJhIGluY3J1c3RhciBlbiBTdG9yeU1hcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29ucy5Db2RlIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkluY3J1c3Rhcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1hY3Rpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFNpbWNvdFN0YXRzKHRydWUpfVxuICAgICAgICAgICAgICB0aXRsZT1cIkFjdHVhbGl6YXIgZGF0b3MgYWhvcmFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzUmVmcmVzaGluZyA/ICdzcGluJyA6ICcnfT5cbiAgICAgICAgICAgICAgICA8SWNvbnMuUmVmcmVzaCAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXI8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFBhbmVsIGRlc3BsZWdhYmxlIGNvbiBjw7NkaWdvIElmcmFtZSBwYXJhIFN0b3J5TWFwcyAqL31cbiAgICAgICAge3Nob3dFbWJlZENvZGUgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLWJveFwiPlxuICAgICAgICAgICAgICAmbHQ7aWZyYW1lIHNyYz1cImh0dHBzOi8vZHVyZXllczk3LmdpdGh1Yi5pby9jb250YWRvci12aXNpdGFzLXNpbWNvdC9cIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzNDBcIiBmcmFtZWJvcmRlcj1cIjBcIiZndDsmbHQ7L2lmcmFtZSZndDtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYWN0aW9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNXB4Jywgd2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlFbWJlZFNuaXBwZXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb3BpZWQgPyA8SWNvbnMuQ2hlY2sgLz4gOiA8SWNvbnMuQ29kZSAvPn1cbiAgICAgICAgICAgICAgPHNwYW4+e2NvcGllZCA/ICfCoUNvcGlhZG8gYWwgcG9ydGFwYXBlbGVzIScgOiAnQ29waWFyIGlmcmFtZSBwYXJhIFN0b3J5TWFwJ308L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==