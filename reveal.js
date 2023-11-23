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

/***/ "./src/reveal.ts":
/*!***********************!*\
  !*** ./src/reveal.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst vote_service_1 = __webpack_require__(/*! ./services/vote-service */ \"./src/services/vote-service.ts\");\r\nconst t = window.TrelloPowerUp.iframe();\r\nfunction renderWinners(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const cards = yield (0, vote_service_1.getCardsInOrderOfVotes)(t);\r\n        const firstPlaceSelector = $('#firstPlaceName');\r\n        const secondPlaceSelector = $('#secondPlaceName');\r\n        const thirdPlaceSelector = $('#thirdPlaceName');\r\n        firstPlaceSelector.prop('innerHTML', cards[0].title);\r\n        secondPlaceSelector.prop('innerHTML', cards[1].title);\r\n        thirdPlaceSelector.prop('innerHTML', cards[2].title);\r\n        let table = document.querySelector(\"#resultsBody\");\r\n        let cardNum = 1;\r\n        for (let card of cards) {\r\n            let row = table.insertRow();\r\n            let cell1 = row.insertCell();\r\n            cell1.appendChild(document.createTextNode(cardNum.toString()));\r\n            cardNum++;\r\n            let cell2 = row.insertCell();\r\n            cell2.appendChild(document.createTextNode(card.title));\r\n            let cell3 = row.insertCell();\r\n            cell3.appendChild(document.createTextNode(card.votes.toString()));\r\n        }\r\n    });\r\n}\r\nt.render(function () {\r\n    renderWinners(t);\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/reveal.ts?");

/***/ }),

/***/ "./src/services/settings-service.ts":
/*!******************************************!*\
  !*** ./src/services/settings-service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateSettings = exports.getSettings = exports.defaultSettings = void 0;\r\nconst ISettings_1 = __webpack_require__(/*! ../interfaces/ISettings */ \"./src/interfaces/ISettings.ts\");\r\nexports.defaultSettings = { maxVotes: 3, useRankedVoting: false, rankedVotingAlgorithm: ISettings_1.RankedVotingMethod.Copeland };\r\nfunction getSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let settings = yield t.get('board', 'shared', 'settings', exports.defaultSettings);\r\n        settings.rankedVotingAlgorithm = ISettings_1.RankedVotingMethod.Copeland;\r\n        return settings;\r\n    });\r\n}\r\nexports.getSettings = getSettings;\r\nfunction updateSettings(t, settings) {\r\n    t.set('board', 'shared', 'settings', settings);\r\n}\r\nexports.updateSettings = updateSettings;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/settings-service.ts?");

/***/ }),

/***/ "./src/services/vote-service.ts":
/*!**************************************!*\
  !*** ./src/services/vote-service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isVotingLocked = exports.lockVoting = exports.getCardsInOrderOfVotes = exports.vote = exports.hasCurrentMemberVoted = exports.canCurrentMemberVote = exports.getCardVotes = void 0;\r\nconst settings_service_1 = __webpack_require__(/*! ./settings-service */ \"./src/services/settings-service.ts\");\r\nconst VOTES = \"votes\";\r\nconst LOCKED = \"voting_locked\";\r\nfunction getCardVotes(t, cardId) {\r\n    return t.get(cardId || 'card', 'shared', VOTES, []);\r\n}\r\nexports.getCardVotes = getCardVotes;\r\nfunction canCurrentMemberVote(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        //can't vote if voting is locked\r\n        if (yield isVotingLocked(t)) {\r\n            return {\r\n                canVote: false,\r\n                errorMsg: 'Voting Locked'\r\n            };\r\n        }\r\n        const settings = yield (0, settings_service_1.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            if (!t.memberCanWriteToModel('board') || !t.isMemberSignedIn()) {\r\n                return {\r\n                    canVote: false,\r\n                    errorMsg: 'Not a member'\r\n                };\r\n            }\r\n            return {\r\n                canVote: true\r\n            };\r\n        }\r\n        //if they aren't a member on the board or not logged in then they can't vote\r\n        if (!t.memberCanWriteToModel('card') || !t.isMemberSignedIn()) {\r\n            return {\r\n                canVote: false,\r\n                errorMsg: 'Not a member'\r\n            };\r\n        }\r\n        //if they've already voted return true so they can unvote\r\n        if (yield hasCurrentMemberVoted(t)) {\r\n            return {\r\n                canVote: true\r\n            };\r\n        }\r\n        const currentList = yield t.list('id', 'cards');\r\n        const cardIds = currentList.cards.map(card => card.id);\r\n        const currentMemberVotes = yield countVotesByMember(t, cardIds);\r\n        const maxVotes = (yield (0, settings_service_1.getSettings)(t)).maxVotes;\r\n        const canVote = currentMemberVotes < maxVotes;\r\n        return {\r\n            canVote: canVote,\r\n            errorMsg: canVote ? null : 'Too many votes'\r\n        };\r\n    });\r\n}\r\nexports.canCurrentMemberVote = canCurrentMemberVote;\r\nfunction hasCurrentMemberVoted(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const votes = yield getCardVotes(t);\r\n        if (!votes)\r\n            return false;\r\n        const currentMember = yield t.member('id');\r\n        return votes.includes(currentMember.id);\r\n    });\r\n}\r\nexports.hasCurrentMemberVoted = hasCurrentMemberVoted;\r\nfunction vote(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const votes = yield getCardVotes(t);\r\n        const member = yield t.member('id');\r\n        const index = votes.indexOf(member.id, 0);\r\n        if (index >= 0) {\r\n            votes.splice(index, 1);\r\n        }\r\n        else {\r\n            votes.push(member.id);\r\n        }\r\n        yield t.set('card', 'shared', VOTES, votes);\r\n        return true;\r\n    });\r\n}\r\nexports.vote = vote;\r\nfunction countVotesByMember(t, cardIds) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const listVotes = yield Promise.all(cardIds.map((cardId) => __awaiter(this, void 0, void 0, function* () {\r\n            const votes = yield getCardVotes(t, cardId);\r\n            if (!votes) {\r\n                return 0;\r\n            }\r\n            const currentMember = t.getContext().member;\r\n            return votes.includes(currentMember) ? 1 : 0;\r\n        })));\r\n        return listVotes.reduce((total, vote) => total + vote, 0);\r\n    });\r\n}\r\nfunction getCardsInOrderOfVotes(t, cardsToSort) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!cardsToSort) {\r\n            const list = yield t.list('id', 'cards');\r\n            cardsToSort = list.cards;\r\n        }\r\n        let cards = [];\r\n        for (const card of cardsToSort) {\r\n            cards.push({\r\n                id: card.id,\r\n                title: card.name,\r\n                votes: (yield getCardVotes(t, card.id)).length\r\n            });\r\n        }\r\n        return cards.sort((card1, card2) => (card1.votes > card2.votes ? -1 : 1));\r\n    });\r\n}\r\nexports.getCardsInOrderOfVotes = getCardsInOrderOfVotes;\r\nfunction lockVoting(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const locked = yield getLockedStatus(t);\r\n        yield t.set('board', 'shared', LOCKED, !locked);\r\n    });\r\n}\r\nexports.lockVoting = lockVoting;\r\nfunction isVotingLocked(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        return getLockedStatus(t);\r\n    });\r\n}\r\nexports.isVotingLocked = isVotingLocked;\r\nfunction getLockedStatus(t) {\r\n    return t.get('board', 'shared', LOCKED, false);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/vote-service.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/reveal.ts");
/******/ 	
/******/ })()
;