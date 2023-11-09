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

/***/ "./src/reveal.ts":
/*!***********************!*\
  !*** ./src/reveal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/vote-service */ \"./src/services/vote-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst t = window.TrelloPowerUp.iframe();\r\nfunction renderWinners(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const cards = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_0__.getCardsInOrderOfVotes)(t);\r\n        const firstPlaceSelector = $('#firstPlaceName');\r\n        const secondPlaceSelector = $('#secondPlaceName');\r\n        const thirdPlaceSelector = $('#thirdPlaceName');\r\n        firstPlaceSelector.prop('innerHTML', cards[0].title);\r\n        secondPlaceSelector.prop('innerHTML', cards[1].title);\r\n        thirdPlaceSelector.prop('innerHTML', cards[2].title);\r\n        let table = document.querySelector(\"#resultsBody\");\r\n        let cardNum = 1;\r\n        for (let card of cards) {\r\n            let row = table.insertRow();\r\n            let cell1 = row.insertCell();\r\n            cell1.appendChild(document.createTextNode(cardNum.toString()));\r\n            cardNum++;\r\n            let cell2 = row.insertCell();\r\n            cell2.appendChild(document.createTextNode(card.title));\r\n            let cell3 = row.insertCell();\r\n            cell3.appendChild(document.createTextNode(card.votes.toString()));\r\n        }\r\n    });\r\n}\r\nt.render(function () {\r\n    renderWinners(t);\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/reveal.ts?");

/***/ }),

/***/ "./src/services/settings-service.ts":
/*!******************************************!*\
  !*** ./src/services/settings-service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultSettings\": () => (/* binding */ defaultSettings),\n/* harmony export */   \"getSettings\": () => (/* binding */ getSettings),\n/* harmony export */   \"updateSettings\": () => (/* binding */ updateSettings)\n/* harmony export */ });\nconst defaultSettings = { maxVotes: 3, useRankedVoting: false };\r\nfunction getSettings(t) {\r\n    return t.get('board', 'shared', 'settings', defaultSettings);\r\n}\r\nfunction updateSettings(t, settings) {\r\n    t.set('board', 'shared', 'settings', settings);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/settings-service.ts?");

/***/ }),

/***/ "./src/services/vote-service.ts":
/*!**************************************!*\
  !*** ./src/services/vote-service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canCurrentMemberVote\": () => (/* binding */ canCurrentMemberVote),\n/* harmony export */   \"getCardVotes\": () => (/* binding */ getCardVotes),\n/* harmony export */   \"getCardsInOrderOfVotes\": () => (/* binding */ getCardsInOrderOfVotes),\n/* harmony export */   \"hasCurrentMemberVoted\": () => (/* binding */ hasCurrentMemberVoted),\n/* harmony export */   \"isVotingLocked\": () => (/* binding */ isVotingLocked),\n/* harmony export */   \"lockVoting\": () => (/* binding */ lockVoting),\n/* harmony export */   \"vote\": () => (/* binding */ vote)\n/* harmony export */ });\n/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-service */ \"./src/services/settings-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst VOTES = \"votes\";\r\nconst LOCKED = \"voting_locked\";\r\nfunction getCardVotes(t, cardId) {\r\n    return t.get(cardId || 'card', 'shared', VOTES, []);\r\n}\r\nfunction canCurrentMemberVote(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        //can't vote if voting is locked\r\n        if (yield isVotingLocked(t)) {\r\n            return {\r\n                canVote: false,\r\n                errorMsg: 'Voting Locked'\r\n            };\r\n        }\r\n        //if they aren't a member on the board or not logged in then they can't vote\r\n        if (!t.memberCanWriteToModel('card') || !t.isMemberSignedIn()) {\r\n            return {\r\n                canVote: false,\r\n                errorMsg: 'Not a member'\r\n            };\r\n        }\r\n        //if they've already voted return true so they can unvote\r\n        if (yield hasCurrentMemberVoted(t)) {\r\n            return {\r\n                canVote: true\r\n            };\r\n        }\r\n        const currentList = yield t.list('id', 'cards');\r\n        const cardIds = currentList.cards.map(card => card.id);\r\n        const currentMemberVotes = yield countVotesByMember(t, cardIds);\r\n        const maxVotes = (yield (0,_settings_service__WEBPACK_IMPORTED_MODULE_0__.getSettings)(t)).maxVotes;\r\n        const canVote = currentMemberVotes < maxVotes;\r\n        return {\r\n            canVote: canVote,\r\n            errorMsg: canVote ? null : 'Too many votes'\r\n        };\r\n    });\r\n}\r\nfunction hasCurrentMemberVoted(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const votes = yield getCardVotes(t);\r\n        if (!votes)\r\n            return false;\r\n        const currentMember = yield t.member('id');\r\n        return votes.includes(currentMember.id);\r\n    });\r\n}\r\nfunction vote(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const votes = yield getCardVotes(t);\r\n        const member = yield t.member('id');\r\n        const index = votes.indexOf(member.id, 0);\r\n        if (index >= 0) {\r\n            votes.splice(index, 1);\r\n        }\r\n        else {\r\n            votes.push(member.id);\r\n        }\r\n        yield t.set('card', 'shared', VOTES, votes);\r\n        return true;\r\n    });\r\n}\r\nfunction countVotesByMember(t, cardIds) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const listVotes = yield Promise.all(cardIds.map((cardId) => __awaiter(this, void 0, void 0, function* () {\r\n            const votes = yield getCardVotes(t, cardId);\r\n            if (!votes) {\r\n                return 0;\r\n            }\r\n            const currentMember = t.getContext().member;\r\n            return votes.includes(currentMember) ? 1 : 0;\r\n        })));\r\n        return listVotes.reduce((total, vote) => total + vote, 0);\r\n    });\r\n}\r\nfunction getCardsInOrderOfVotes(t, cardsToSort) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!cardsToSort) {\r\n            const list = yield t.list('id', 'cards');\r\n            cardsToSort = list.cards;\r\n        }\r\n        let cards = [];\r\n        for (const card of cardsToSort) {\r\n            cards.push({\r\n                id: card.id,\r\n                title: card.name,\r\n                votes: (yield getCardVotes(t, card.id)).length\r\n            });\r\n        }\r\n        return cards.sort((card1, card2) => (card1.votes > card2.votes ? -1 : 1));\r\n    });\r\n}\r\nfunction lockVoting(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const locked = yield getLockedStatus(t);\r\n        yield t.set('board', 'shared', LOCKED, !locked);\r\n    });\r\n}\r\nfunction isVotingLocked(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        return getLockedStatus(t);\r\n    });\r\n}\r\nfunction getLockedStatus(t) {\r\n    return t.get('board', 'shared', LOCKED, false);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/vote-service.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/reveal.ts");
/******/ 	
/******/ })()
;