"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/translation";
exports.ids = ["pages/api/translation"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftranslation&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctranslation.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftranslation&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctranslation.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\translation.js */ \"(api)/./pages/api/translation.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/translation\",\n        pathname: \"/api/translation\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_translation_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnRyYW5zbGF0aW9uJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUN0cmFuc2xhdGlvbi5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUN5RDtBQUN6RDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsc0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHNEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXByb2plY3QvPzc2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcdHJhbnNsYXRpb24uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RyYW5zbGF0aW9uXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJhbnNsYXRpb25cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftranslation&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctranslation.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/translation.js":
/*!**********************************!*\
  !*** ./pages/api/translation.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({\n    path: '.env.local'\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: \"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\"\n});\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        const { text } = req.body;\n        try {\n            const completion = await openai.chat.completions.create({\n                model: \"gpt-4o\",\n                messages: [\n                    {\n                        role: \"user\",\n                        content: `Translate the following text to English: \"${text}\"`\n                    }\n                ]\n            });\n            res.status(200).json({\n                translation: completion.choices[0].message.content\n            });\n        } catch (error) {\n            console.error(\"Error translating text:\", error);\n            res.status(500).json({\n                error: 'Failed to translate text.'\n            });\n        }\n    } else {\n        res.setHeader('Allow', [\n            'POST'\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNsYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QjtBQUNBO0FBRTVCQyxvREFBYSxDQUFDO0lBQUVFLE1BQU07QUFBYTtBQUVuQyxNQUFNQyxTQUFTLElBQUlKLDhDQUFNQSxDQUFDO0lBQUVLLFFBQVE7QUFBdUs7QUFFNUwsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdILElBQUlJLElBQUk7UUFFekIsSUFBSTtZQUNGLE1BQU1DLGFBQWEsTUFBTVIsT0FBT1MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztnQkFDdERDLE9BQU87Z0JBQ1BDLFVBQVU7b0JBQ1I7d0JBQ0VDLE1BQU07d0JBQ05DLFNBQVMsQ0FBQywwQ0FBMEMsRUFBRVQsS0FBSyxDQUFDLENBQUM7b0JBQy9EO2lCQUNEO1lBQ0g7WUFFQUYsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsYUFBYVYsV0FBV1csT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDTCxPQUFPO1lBQUM7UUFDNUUsRUFBRSxPQUFPTSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDakIsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUksT0FBTztZQUE0QjtRQUM1RDtJQUNGLE9BQU87UUFDTGpCLElBQUltQixTQUFTLENBQUMsU0FBUztZQUFDO1NBQU87UUFDL0JuQixJQUFJWSxNQUFNLENBQUMsS0FBS1EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFckIsSUFBSUUsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcHJvamVjdC8uL3BhZ2VzL2FwaS90cmFuc2xhdGlvbi5qcz9jMGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5cclxuZG90ZW52LmNvbmZpZyh7IHBhdGg6ICcuZW52LmxvY2FsJyB9KTtcclxuXHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoeyBhcGlLZXk6IFwic2stcHJvai1zdHF5UWRCSU56U3JPQ0dvNElrOHFqNzQ1UjNBRTNMOGMzbXZnOXN5djc0RkdPLWNhWmlabHZlVGZfbS1vQkg4alBHLWxhcXQ3S1QzQmxia0ZKY1pOMVN3cDk2NkR2QS1HQXZxZlg0c1NBU3pIcmEwSnlTcjVkSzgxU1dEYUVvT21LZW5xb2M0Ri15amYtNDA4TnRaSE5XeTBVUUFcIiB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IHRleHQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xyXG4gICAgICAgIG1vZGVsOiBcImdwdC00b1wiLFxyXG4gICAgICAgIG1lc3NhZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBgVHJhbnNsYXRlIHRoZSBmb2xsb3dpbmcgdGV4dCB0byBFbmdsaXNoOiBcIiR7dGV4dH1cImAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0cmFuc2xhdGlvbjogY29tcGxldGlvbi5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0cmFuc2xhdGluZyB0ZXh0OlwiLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gdHJhbnNsYXRlIHRleHQuJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJPcGVuQUkiLCJkb3RlbnYiLCJjb25maWciLCJwYXRoIiwib3BlbmFpIiwiYXBpS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRleHQiLCJib2R5IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsInN0YXR1cyIsImpzb24iLCJ0cmFuc2xhdGlvbiIsImNob2ljZXMiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/translation.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftranslation&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctranslation.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();