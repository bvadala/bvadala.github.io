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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBoardButtons\": () => (/* binding */ getBoardButtons)\n/* harmony export */ });\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nfunction getBoardButtons(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_0__.isCurrentMemberAdmin)(t))) {\r\n            return [];\r\n        }\r\n        const votingLocked = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.isVotingLocked)(t);\r\n        return [{\r\n                text: votingLocked ? 'Unlock Voting' : 'Lock Voting',\r\n                icon: {\r\n                    dark: votingLocked ? props.images.lockedWhite : props.images.unlockedWhite,\r\n                    light: votingLocked ? props.images.lockedBlack : props.images.unlockedWhite\r\n                },\r\n                callback: function (tc) {\r\n                    return (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.lockVoting)(tc);\r\n                }\r\n            }];\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/board-buttons.ts?");

/***/ }),

/***/ "./src/capabilities/card-badges.ts":
/*!*****************************************!*\
  !*** ./src/capabilities/card-badges.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCardBadges\": () => (/* binding */ getCardBadges)\n/* harmony export */ });\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\n/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\nfunction getCardBadges(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const hasVoted = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.hasCurrentMemberVoted)(t);\r\n        const isAdmin = yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_0__.isCurrentMemberAdmin)(t);\r\n        if (isAdmin) {\r\n            const votes = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.getCardVotes)(t);\r\n            if (!votes.length)\r\n                return null;\r\n            return [{\r\n                    text: votes.length.toString(),\r\n                    color: hasVoted ? 'blue' : null,\r\n                    icon: hasVoted ? props.images.thumbsUpWhite : props.images.thumbsUp\r\n                }];\r\n        }\r\n        else {\r\n            if (!hasVoted)\r\n                return null;\r\n            return [{\r\n                    text: '',\r\n                    color: hasVoted ? 'blue' : null,\r\n                    icon: props.images.thumbsUpWhite\r\n                }];\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-badges.ts?");

/***/ }),

/***/ "./src/capabilities/card-buttons.ts":
/*!******************************************!*\
  !*** ./src/capabilities/card-buttons.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCardButtons\": () => (/* binding */ getCardButtons)\n/* harmony export */ });\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\n/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nfunction getCardButtons(t, props) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const result = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_0__.canCurrentMemberVote)(t);\r\n        if (!result.canVote) {\r\n            console.log(result.errorMsg);\r\n            return [];\r\n        }\r\n        return [{\r\n                icon: props.images.thumbsUp,\r\n                text: (yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_0__.hasCurrentMemberVoted)(t)) ? 'Vote ☑' : 'Vote ☐',\r\n                callback: function (tc) {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_0__.vote)(tc);\r\n                    });\r\n                }\r\n            }];\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-buttons.ts?");

/***/ }),

/***/ "./src/capabilities/card-detail-badges.ts":
/*!************************************************!*\
  !*** ./src/capabilities/card-detail-badges.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCardDetailBadges\": () => (/* binding */ getCardDetailBadges)\n/* harmony export */ });\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\n/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\nfunction getCardDetailBadges(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.getSettings)(t);\r\n        if (settings.useRankedVoting) {\r\n            return [];\r\n        }\r\n        const hasVoted = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.hasCurrentMemberVoted)(t);\r\n        const isAdmin = yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_0__.isCurrentMemberAdmin)(t);\r\n        if (isAdmin) {\r\n            const votes = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.getCardVotes)(t);\r\n            if (!votes.length)\r\n                return null;\r\n            let text = votes.length.toString();\r\n            if (hasVoted)\r\n                text += ' (including yours)';\r\n            return [{\r\n                    text: text,\r\n                    color: hasVoted ? 'blue' : null\r\n                }];\r\n        }\r\n        else {\r\n            if (!hasVoted)\r\n                return null;\r\n            return [{\r\n                    text: 'Voted',\r\n                    color: hasVoted ? 'blue' : null\r\n                }];\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/card-detail-badges.ts?");

/***/ }),

/***/ "./src/capabilities/list-actions.ts":
/*!******************************************!*\
  !*** ./src/capabilities/list-actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListActions\": () => (/* binding */ getListActions)\n/* harmony export */ });\n/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/settings-service */ \"./src/services/settings-service.ts\");\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nfunction getListActions(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const settings = yield (0,_services_settings_service__WEBPACK_IMPORTED_MODULE_0__.getSettings)(t);\r\n        var items = [];\r\n        if (settings.useRankedVoting) {\r\n            items.push({\r\n                text: 'Vote',\r\n                callback: function (tc) {\r\n                    return t.modal({\r\n                        url: 'rankedVoting.html',\r\n                        title: 'Ranked Voting'\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        if (yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_1__.isCurrentMemberAdmin)(t)) {\r\n            items.push({\r\n                text: 'Podium Reveal',\r\n                callback: function (tc) {\r\n                    return t.modal({\r\n                        url: 'reveal.html',\r\n                        fullscreen: true,\r\n                        title: 'Podium Reveal'\r\n                    });\r\n                }\r\n            });\r\n        }\r\n        return items;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/list-actions.ts?");

/***/ }),

/***/ "./src/capabilities/list-sorters.ts":
/*!******************************************!*\
  !*** ./src/capabilities/list-sorters.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getListSorters\": () => (/* binding */ getListSorters)\n/* harmony export */ });\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\n/* harmony import */ var _services_vote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vote-service */ \"./src/services/vote-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nfunction getListSorters(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_0__.isCurrentMemberAdmin)(t))) {\r\n            return [];\r\n        }\r\n        return [{\r\n                text: 'Most Votes',\r\n                callback: function (tc, options) {\r\n                    return __awaiter(this, void 0, void 0, function* () {\r\n                        const cards = yield (0,_services_vote_service__WEBPACK_IMPORTED_MODULE_1__.getCardsInOrderOfVotes)(tc, options.cards);\r\n                        console.log(JSON.stringify(cards));\r\n                        return {\r\n                            sortedIds: cards.map(c => c.id)\r\n                        };\r\n                    });\r\n                }\r\n            }];\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/list-sorters.ts?");

/***/ }),

/***/ "./src/capabilities/show-settings.ts":
/*!*******************************************!*\
  !*** ./src/capabilities/show-settings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShowSettings\": () => (/* binding */ getShowSettings)\n/* harmony export */ });\n/* harmony import */ var _services_membership_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/membership-service */ \"./src/services/membership-service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nfunction getShowSettings(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        if (!(yield (0,_services_membership_service__WEBPACK_IMPORTED_MODULE_0__.isCurrentMemberAdmin)(t)))\r\n            return null;\r\n        return t.popup({\r\n            title: 'ShipIt Voting - Settings',\r\n            url: 'settings.html'\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/capabilities/show-settings.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _capabilities_card_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capabilities/card-buttons */ \"./src/capabilities/card-buttons.ts\");\n/* harmony import */ var _capabilities_card_detail_badges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capabilities/card-detail-badges */ \"./src/capabilities/card-detail-badges.ts\");\n/* harmony import */ var _capabilities_card_badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./capabilities/card-badges */ \"./src/capabilities/card-badges.ts\");\n/* harmony import */ var _capabilities_show_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capabilities/show-settings */ \"./src/capabilities/show-settings.ts\");\n/* harmony import */ var _capabilities_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capabilities/list-actions */ \"./src/capabilities/list-actions.ts\");\n/* harmony import */ var _capabilities_board_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./capabilities/board-buttons */ \"./src/capabilities/board-buttons.ts\");\n/* harmony import */ var _capabilities_list_sorters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./capabilities/list-sorters */ \"./src/capabilities/list-sorters.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst baseUrl = window.location.href.replace(/\\/$/, '');\r\nconst PROPS = {\r\n    baseUrl: baseUrl,\r\n    images: {\r\n        thumbsUp: `${baseUrl}/images/thumbs_up.svg`,\r\n        thumbsUpWhite: `${baseUrl}/images/thumbs_up_white.svg`,\r\n        lockedBlack: `${baseUrl}/images/locked-black.png`,\r\n        lockedWhite: `${baseUrl}/images/locked-white.png`,\r\n        unlockedBlack: `${baseUrl}/images/unlocked-black.png`,\r\n        unlockedWhite: `${baseUrl}/images/unlocked-white.png`,\r\n    }\r\n};\r\nwindow.TrelloPowerUp.initialize({\r\n    'card-buttons': (t) => (0,_capabilities_card_buttons__WEBPACK_IMPORTED_MODULE_0__.getCardButtons)(t, PROPS),\r\n    'show-settings': (t) => (0,_capabilities_show_settings__WEBPACK_IMPORTED_MODULE_3__.getShowSettings)(t),\r\n    'card-detail-badges': (t) => (0,_capabilities_card_detail_badges__WEBPACK_IMPORTED_MODULE_1__.getCardDetailBadges)(t),\r\n    'card-badges': (t) => (0,_capabilities_card_badges__WEBPACK_IMPORTED_MODULE_2__.getCardBadges)(t, PROPS),\r\n    'list-actions': (t) => (0,_capabilities_list_actions__WEBPACK_IMPORTED_MODULE_4__.getListActions)(t),\r\n    'board-buttons': (t) => (0,_capabilities_board_buttons__WEBPACK_IMPORTED_MODULE_5__.getBoardButtons)(t, PROPS),\r\n    'list-sorters': (t) => (0,_capabilities_list_sorters__WEBPACK_IMPORTED_MODULE_6__.getListSorters)(t)\r\n}, {\r\n    helpfulStacks: true\r\n});\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/services/membership-service.ts":
/*!********************************************!*\
  !*** ./src/services/membership-service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCurrentMemberAdmin\": () => (/* binding */ isCurrentMemberAdmin)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nfunction isCurrentMemberAdmin(t) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const currentMember = yield t.member('id');\r\n        const board = yield t.board('id', 'memberships');\r\n        const membership = board.memberships.find(m => m.idMember === currentMember.id);\r\n        if (membership) {\r\n            return membership.memberType == 'admin';\r\n        }\r\n        return false;\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/membership-service.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;