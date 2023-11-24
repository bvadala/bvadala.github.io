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

/***/ "./src/capabilities/board-buttons.ts":
/*!*******************************************!*\
  !*** ./src/capabilities/board-buttons.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getBoardButtons = void 0;\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nfunction getBoardButtons(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0, membership_service_1.isCurrentMemberAdmin)(t))) {\r\n            return [];\r\n        }\r\n        const votingLocked = yield (0, vote_service_1.isVotingLocked)(t);\r\n        return [{\r\n                text: votingLocked ? 'Unlock Voting' : 'Lock Voting',\r\n                icon: {\r\n                    dark: votingLocked ? props.images.lockedWhite : props.images.unlockedWhite,\r\n                    light: votingLocked ? props.images.lockedBlack : props.images.unlockedWhite\r\n                },\r\n                callback: function (tc) {\r\n                    return (0, vote_service_1.lockVoting)(tc);\r\n                }\r\n            }];\r\n    });\r\n}\r\nexports.getBoardButtons = getBoardButtons;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/board-buttons.ts?");

/***/ }),

/***/ "./src/capabilities/card-badges.ts":
/*!*****************************************!*\
  !*** ./src/capabilities/card-badges.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCardBadges = void 0;\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nconst settings_service_1 = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\r\nfunction getCardBadges(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0, settings_service_1.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const hasVoted = yield (0, vote_service_1.hasCurrentMemberVoted)(t);\r\n        const isAdmin = yield (0, membership_service_1.isCurrentMemberAdmin)(t);\r\n        if (isAdmin) {\r\n            const votes = yield (0, vote_service_1.getCardVotes)(t);\r\n            if (!votes.length)\r\n                return null;\r\n            return [{\r\n                    text: votes.length.toString(),\r\n                    color: hasVoted ? 'blue' : null,\r\n                    icon: hasVoted ? props.images.thumbsUpWhite : props.images.thumbsUp\r\n                }];\r\n        }\r\n        else {\r\n            if (!hasVoted)\r\n                return null;\r\n            return [{\r\n                    text: '',\r\n                    color: hasVoted ? 'blue' : null,\r\n                    icon: props.images.thumbsUpWhite\r\n                }];\r\n        }\r\n    });\r\n}\r\nexports.getCardBadges = getCardBadges;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-badges.ts?");

/***/ }),

/***/ "./src/capabilities/card-buttons.ts":
/*!******************************************!*\
  !*** ./src/capabilities/card-buttons.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCardButtons = void 0;\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nconst settings_service_1 = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\r\nfunction getCardButtons(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0, settings_service_1.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const result = yield (0, vote_service_1.canCurrentMemberVote)(t);\r\n        if (!result.canVote) {\r\n            console.log(result.errorMsg);\r\n            return [];\r\n        }\r\n        return [{\r\n                icon: props.images.thumbsUp,\r\n                text: (yield (0, vote_service_1.hasCurrentMemberVoted)(t)) ? 'Vote ☑' : 'Vote ☐',\r\n                callback: function (tc) {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        yield (0, vote_service_1.vote)(tc);\r\n                    });\r\n                }\r\n            }];\r\n    });\r\n}\r\nexports.getCardButtons = getCardButtons;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-buttons.ts?");

/***/ }),

/***/ "./src/capabilities/card-detail-badges.ts":
/*!************************************************!*\
  !*** ./src/capabilities/card-detail-badges.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCardDetailBadges = void 0;\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nconst settings_service_1 = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\r\nfunction getCardDetailBadges(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0, settings_service_1.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const hasVoted = yield (0, vote_service_1.hasCurrentMemberVoted)(t);\r\n        const isAdmin = yield (0, membership_service_1.isCurrentMemberAdmin)(t);\r\n        if (isAdmin) {\r\n            const votes = yield (0, vote_service_1.getCardVotes)(t);\r\n            if (!votes.length)\r\n                return null;\r\n            let text = votes.length.toString();\r\n            if (hasVoted)\r\n                text += ' (including yours)';\r\n            return [{\r\n                    text: text,\r\n                    color: hasVoted ? 'blue' : null\r\n                }];\r\n        }\r\n        else {\r\n            if (!hasVoted)\r\n                return null;\r\n            return [{\r\n                    text: 'Voted',\r\n                    color: hasVoted ? 'blue' : null\r\n                }];\r\n        }\r\n    });\r\n}\r\nexports.getCardDetailBadges = getCardDetailBadges;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-detail-badges.ts?");

/***/ }),

/***/ "./src/capabilities/list-actions.ts":
/*!******************************************!*\
  !*** ./src/capabilities/list-actions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getListActions = void 0;\r\nconst settings_service_1 = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nfunction getListActions(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0, settings_service_1.getSettings)(t);\r\n        const isAdmin = yield (0, membership_service_1.isCurrentMemberAdmin)(t);\r\n        var items = [];\r\n        if (settings.useRankedVoting) {\r\n            const result = yield (0, vote_service_1.canCurrentMemberVote)(t);\r\n            if (!result.canVote)\r\n                return;\r\n            items.push({\r\n                text: 'Vote',\r\n                callback: function (tc) {\r\n                    return t.modal({\r\n                        url: 'rankedVoting.html',\r\n                        title: 'Ranked Voting',\r\n                        fullscreen: true\r\n                    });\r\n                }\r\n            });\r\n            if (settings.enableViewOfRankings || isAdmin) {\r\n                items.push({\r\n                    text: 'Ranked Results',\r\n                    callback: function (tc) {\r\n                        return t.modal({\r\n                            url: 'rankedResults.html',\r\n                            fullscreen: true,\r\n                            title: 'Ranked Results'\r\n                        });\r\n                    }\r\n                });\r\n            }\r\n        }\r\n        if (isAdmin) {\r\n            items.push({\r\n                text: 'Podium Reveal',\r\n                callback: function (tc) {\r\n                    return t.modal({\r\n                        url: (settings.useRankedVoting ? 'rankedReveal.html' : 'reveal.html'),\r\n                        fullscreen: true,\r\n                        title: 'Podium Reveal'\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        return items;\r\n    });\r\n}\r\nexports.getListActions = getListActions;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/list-actions.ts?");

/***/ }),

/***/ "./src/capabilities/list-sorters.ts":
/*!******************************************!*\
  !*** ./src/capabilities/list-sorters.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getListSorters = void 0;\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nconst vote_service_1 = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\r\nfunction getListSorters(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0, membership_service_1.isCurrentMemberAdmin)(t))) {\r\n            return [];\r\n        }\r\n        return [{\r\n                text: 'Most Votes',\r\n                callback: function (tc, options) {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        const cards = yield (0, vote_service_1.getCardsInOrderOfVotes)(tc, options.cards);\r\n                        console.log(JSON.stringify(cards));\r\n                        return {\r\n                            sortedIds: cards.map(c => c.id)\r\n                        };\r\n                    });\r\n                }\r\n            }];\r\n    });\r\n}\r\nexports.getListSorters = getListSorters;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/list-sorters.ts?");

/***/ }),

/***/ "./src/capabilities/show-settings.ts":
/*!*******************************************!*\
  !*** ./src/capabilities/show-settings.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getShowSettings = void 0;\r\nconst membership_service_1 = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\r\nfunction getShowSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0, membership_service_1.isCurrentMemberAdmin)(t)))\r\n            return null;\r\n        return t.popup({\r\n            title: 'ShipIt Voting - Settings',\r\n            url: 'settings.html'\r\n        });\r\n    });\r\n}\r\nexports.getShowSettings = getShowSettings;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/show-settings.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst card_buttons_1 = __webpack_require__(/*! ./capabilities/card-buttons */ \"./src/capabilities/card-buttons.ts\");\r\nconst card_detail_badges_1 = __webpack_require__(/*! ./capabilities/card-detail-badges */ \"./src/capabilities/card-detail-badges.ts\");\r\nconst card_badges_1 = __webpack_require__(/*! ./capabilities/card-badges */ \"./src/capabilities/card-badges.ts\");\r\nconst show_settings_1 = __webpack_require__(/*! ./capabilities/show-settings */ \"./src/capabilities/show-settings.ts\");\r\nconst list_actions_1 = __webpack_require__(/*! ./capabilities/list-actions */ \"./src/capabilities/list-actions.ts\");\r\nconst board_buttons_1 = __webpack_require__(/*! ./capabilities/board-buttons */ \"./src/capabilities/board-buttons.ts\");\r\nconst list_sorters_1 = __webpack_require__(/*! ./capabilities/list-sorters */ \"./src/capabilities/list-sorters.ts\");\r\nconst baseUrl = window.location.href.replace(/\\/$/, '');\r\nconst PROPS = {\r\n    baseUrl: baseUrl,\r\n    images: {\r\n        thumbsUp: `${baseUrl}/images/thumbs_up.svg`,\r\n        thumbsUpWhite: `${baseUrl}/images/thumbs_up_white.svg`,\r\n        lockedBlack: `${baseUrl}/images/locked-black.png`,\r\n        lockedWhite: `${baseUrl}/images/locked-white.png`,\r\n        unlockedBlack: `${baseUrl}/images/unlocked-black.png`,\r\n        unlockedWhite: `${baseUrl}/images/unlocked-white.png`,\r\n    }\r\n};\r\nwindow.TrelloPowerUp.initialize({\r\n    'card-buttons': (t) => (0, card_buttons_1.getCardButtons)(t, PROPS),\r\n    'show-settings': (t) => (0, show_settings_1.getShowSettings)(t),\r\n    'card-detail-badges': (t) => (0, card_detail_badges_1.getCardDetailBadges)(t),\r\n    'card-badges': (t) => (0, card_badges_1.getCardBadges)(t, PROPS),\r\n    'list-actions': (t) => (0, list_actions_1.getListActions)(t),\r\n    'board-buttons': (t) => (0, board_buttons_1.getBoardButtons)(t, PROPS),\r\n    'list-sorters': (t) => (0, list_sorters_1.getListSorters)(t)\r\n}, {\r\n    helpfulStacks: true\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/interfaces/ISettings.ts":
/*!*************************************!*\
  !*** ./src/interfaces/ISettings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.RankedVotingMethod = void 0;\r\nvar RankedVotingMethod;\r\n(function (RankedVotingMethod) {\r\n    RankedVotingMethod[RankedVotingMethod[\"Borda\"] = 0] = \"Borda\";\r\n    RankedVotingMethod[RankedVotingMethod[\"Copeland\"] = 1] = \"Copeland\";\r\n})(RankedVotingMethod = exports.RankedVotingMethod || (exports.RankedVotingMethod = {}));\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/interfaces/ISettings.ts?");

/***/ }),

/***/ "./src/services/membership-service.ts":
/*!********************************************!*\
  !*** ./src/services/membership-service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isCurrentMemberAdmin = void 0;\r\nfunction isCurrentMemberAdmin(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const currentMember = yield t.member('id');\r\n        const board = yield t.board('id', 'memberships');\r\n        const membership = board.memberships.find(m => m.idMember === currentMember.id);\r\n        if (membership) {\r\n            return membership.memberType == 'admin';\r\n        }\r\n        return false;\r\n    });\r\n}\r\nexports.isCurrentMemberAdmin = isCurrentMemberAdmin;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/membership-service.ts?");

/***/ }),

/***/ "./src/services/settings-service.ts":
/*!******************************************!*\
  !*** ./src/services/settings-service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.updateSettings = exports.getSettings = exports.defaultSettings = void 0;\r\nconst ISettings_1 = __webpack_require__(/*! ../interfaces/ISettings */ \"./src/interfaces/ISettings.ts\");\r\nexports.defaultSettings = { maxVotes: 3, useRankedVoting: false, rankedVotingAlgorithm: ISettings_1.RankedVotingMethod.Copeland, enableViewOfRankings: false };\r\nfunction getSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        let settings = yield t.get('board', 'shared', 'settings', exports.defaultSettings);\r\n        if (!settings.enableViewOfRankings) {\r\n            settings.enableViewOfRankings = false;\r\n        }\r\n        return settings;\r\n    });\r\n}\r\nexports.getSettings = getSettings;\r\nfunction updateSettings(t, settings) {\r\n    t.set('board', 'shared', 'settings', settings);\r\n}\r\nexports.updateSettings = updateSettings;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/settings-service.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;