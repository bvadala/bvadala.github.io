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

/***/ "./src/interfaces/ISettings.ts":
/*!*************************************!*\
  !*** ./src/interfaces/ISettings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RankedVotingMethod = void 0;\r\nvar RankedVotingMethod;\r\n(function (RankedVotingMethod) {\r\n    RankedVotingMethod[RankedVotingMethod[\"Borda\"] = 0] = \"Borda\";\r\n    RankedVotingMethod[RankedVotingMethod[\"Copeland\"] = 1] = \"Copeland\";\r\n})(RankedVotingMethod = exports.RankedVotingMethod || (exports.RankedVotingMethod = {}));\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/interfaces/ISettings.ts?");

/***/ }),

/***/ "./src/services/settings-service.ts":
/*!******************************************!*\
  !*** ./src/services/settings-service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateSettings = exports.getSettings = exports.defaultSettings = void 0;\r\nconst ISettings_1 = __webpack_require__(/*! ../interfaces/ISettings */ \"./src/interfaces/ISettings.ts\");\r\nexports.defaultSettings = { maxVotes: 3, useRankedVoting: false, rankedVotingAlgorithm: ISettings_1.RankedVotingMethod.Copeland };\r\nfunction getSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let settings = yield t.get('board', 'shared', 'settings', exports.defaultSettings);\r\n        settings.rankedVotingAlgorithm = ISettings_1.RankedVotingMethod.Copeland;\r\n        return settings;\r\n    });\r\n}\r\nexports.getSettings = getSettings;\r\nfunction updateSettings(t, settings) {\r\n    t.set('board', 'shared', 'settings', settings);\r\n}\r\nexports.updateSettings = updateSettings;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/settings-service.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst settings_service_1 = __webpack_require__(/*! ./services/settings-service */ \"./src/services/settings-service.ts\");\r\nconst t = window.TrelloPowerUp.iframe();\r\nconst maxVotesSelector = $('#maxVotes');\r\nconst useRankedVotingSelector = $('#useRankedVoting');\r\nlet currentSettings = settings_service_1.defaultSettings;\r\nmaxVotesSelector.on('change', function () {\r\n    currentSettings.maxVotes = $(this).prop('value');\r\n    return (0, settings_service_1.updateSettings)(t, currentSettings);\r\n});\r\nuseRankedVotingSelector.on('change', function () {\r\n    currentSettings.useRankedVoting = $(this).prop('checked');\r\n    return (0, settings_service_1.updateSettings)(t, currentSettings);\r\n});\r\nfunction renderSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        var settings = yield (0, settings_service_1.getSettings)(t);\r\n        if (!settings.useRankedVoting)\r\n            settings.useRankedVoting = false;\r\n        maxVotesSelector.prop('value', settings.maxVotes);\r\n        useRankedVotingSelector.prop('checked', settings.useRankedVoting);\r\n        currentSettings = settings;\r\n    });\r\n}\r\nt.render(function () {\r\n    renderSettings(t);\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/settings.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/settings.ts");
/******/ 	
/******/ })()
;