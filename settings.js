/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services/settings-service.ts":
/*!******************************************!*\
  !*** ./src/services/settings-service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultSettings\": () => (/* binding */ defaultSettings),\n/* harmony export */   \"getSettings\": () => (/* binding */ getSettings),\n/* harmony export */   \"updateSettings\": () => (/* binding */ updateSettings)\n/* harmony export */ });\nconst defaultSettings = { maxVotes: 3, useRankedVoting: false };\r\nfunction getSettings(t) {\r\n    return t.get('board', 'shared', 'settings', defaultSettings);\r\n}\r\nfunction updateSettings(t, settings) {\r\n    t.set('board', 'shared', 'settings', settings);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/settings-service.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/settings-service */ \"./src/services/settings-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst t = window.TrelloPowerUp.iframe();\r\nconst maxVotesSelector = $('#maxVotes');\r\nconst useRankedVotingSelector = $('#useRankedVoting');\r\nlet currentSettings = _services_settings_service__WEBPACK_IMPORTED_MODULE_0__.defaultSettings;\r\nmaxVotesSelector.on('change', function () {\r\n    currentSettings.maxVotes = $(this).prop('value');\r\n    return (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.updateSettings)(t, currentSettings);\r\n});\r\nuseRankedVotingSelector.on('change', function () {\r\n    currentSettings.useRankedVoting = $(this).prop('checked');\r\n    return (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.updateSettings)(t, currentSettings);\r\n});\r\nfunction renderSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var settings = yield (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.getSettings)(t);\r\n        if (!settings.useRankedVoting)\r\n            settings.useRankedVoting = false;\r\n        maxVotesSelector.prop('value', settings.maxVotes);\r\n        useRankedVotingSelector.prop('checked', settings.useRankedVoting);\r\n        currentSettings = settings;\r\n    });\r\n}\r\nt.render(function () {\r\n    renderSettings(t);\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/settings.ts?");

/***/ })

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/settings.ts");
/******/ 	
/******/ })()
;