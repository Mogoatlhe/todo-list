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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM/style/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM/style/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Nunito&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n:root{\\n    --amazon: rgb(83, 121, 90);\\n    --tea-green: rgb(201, 227, 172);\\n    --russet: rgb(124, 80, 41);\\n    --pale-spring-bud: rgb(234, 239, 189);\\n}\\n\\nhtml {\\n    box-sizing: border-box;\\n}\\n\\n*, *::before, *::after {\\n    box-sizing: inherit;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody{\\n    margin: 0;\\n    padding: 0;\\n    background-color: var(--tea-green);\\n}\\n\\n#content{\\n    display: grid;\\n    grid-template-columns: minmax(230px, 25%) minmax(400px, 75%);\\n    height: 100vh;\\n}\\n\\n#side-panel{\\n    display: grid;\\n    align-content: start;\\n    background-color: var(--pale-spring-bud);\\n}\\n\\n#logo-container{\\n    padding: 5%;\\n    display: grid;\\n    grid-template-columns: 15% 35%;\\n    align-items: center;\\n    justify-content: center;\\n    height: fit-content;\\n    gap: 3%;\\n    row-gap: 10%;\\n}\\n\\n.logo{\\n    width: 100%;\\n}\\n\\n#name{\\n    width: fit-content;\\n    height: fit-content;\\n    font-family: 'Lobster', cursive;\\n    font-size: larger;\\n    color: var(--russet);\\n}\\n\\n#tagline{\\n    grid-column: span 2;\\n    text-align: center;\\n    font-family: sans-serif;\\n    font-weight: bolder;\\n    font-family: sans-serif;\\n    color: var(--russet); \\n}\\n\\n.category-container{\\n    padding: 3% 10%;\\n}\\n\\n.category-heading{\\n    font-weight: bold;\\n    font-family: sans-serif;\\n    color: var(--russet); \\n    color: var(--amazon);\\n}\\n\\n.category-items-container{\\n    display: grid;\\n    gap: 8%;\\n    padding: 4%;\\n    grid-template-columns: 50% 50%;\\n}\\n\\n.category-item{\\n    border: solid 1px var(--tea-green);\\n    background-color: transparent;\\n    font-family: sans-serif;\\n    color: var(--russet);\\n    font-size: 1rem;\\n    text-align: left;\\n    padding: 3%;\\n    width: 100%;\\n}\\n\\n.category-item:hover{\\n    cursor: pointer;\\n    transform: scale(1.1);\\n}\\n\\nmain{\\n    padding: 1.5% 6%;\\n}\\n\\n.current-category{\\n    color: var(--russet);\\n    font-family: 'Nunito', sans-serif;\\n    font-weight: bolder;\\n    font-size: 1.5rem;\\n}\\n\\n.add-task-button{\\n    display: grid;\\n    grid-template-columns: 10% 90%;\\n    padding: 2% 2%;\\n    gap: 5px;\\n    align-items: center;\\n    color: var(--russet);\\n    border: none;\\n    background-color: transparent;\\n    font-size: 0.9rem;\\n    cursor: pointer;\\n}\\n\\n.add-task-button:hover{\\n    transform: scale(1.1);\\n}\\n\\n#tasks-container{\\n    width: 100%;\\n    padding: 3%;\\n    display: grid;\\n    justify-items: center;\\n    grid-template-columns: 100%;\\n}\\n\\n#clean-toilet-container{\\n    margin-top: 2vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 2vh;\\n    height: 80%;\\n}\\n\\n#clean-toilet-heading{\\n    font-family: 'Lobster', cursive;\\n    color: var(--russet);\\n    font-size: 1.5rem;\\n}\\n\\n#clean-toilet{\\n    width: 75%;\\n    opacity: 0.4;\\n}\\n\\n#to-do-input-container{\\n    width: 90%;\\n    height: 200px;\\n    border: solid 1px var(--pale-spring-bud);\\n    margin: 2% 2%;\\n    border-radius: 5px;\\n    padding: 1% 2%;\\n}\\n\\n#to-do-name-input,\\n#to-do-description-input{\\n    min-height: 25px;\\n    width: 100%;\\n    max-height: 35%;\\n    font-weight: bolder;\\n    overflow-x: hidden;\\n    overflow-y: auto;\\n    cursor: text;\\n}\\n\\n#to-do-description-input{\\n    font-weight: 400;\\n    max-height: 45%;\\n}\\n\\n#to-do-name-input[placeholder]:empty:before,\\n#to-do-description-input[placeholder]:empty:before {\\n    content: attr(placeholder);\\n    color: rgb(85, 85, 85); \\n}\\n\\n#to-do-name-input::after{\\n    content: \\\"\\\";\\n    height: 20px;\\n    width: 2px;\\n    display: inline-block;\\n    animation: cursor-blink 1.2s steps(2) infinite;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n@keyframes cursor-blink {\\n    0%{\\n        opacity: 0;\\n    }\\n}\\n\\n#to-do-name-input:focus,\\n#to-do-description-input:focus{\\n    outline: none;\\n}\\n\\n#to-do-buttons-container{\\n    display: grid;\\n    grid-template-columns: 100px 100px;\\n    gap: 5px;\\n}\\n\\n#due-date-button,\\n#category-button{\\n    display: grid;\\n    gap: 3px;\\n    grid-template-columns: 10px 60px;\\n    background-color: transparent;\\n    padding: 8px 10px;\\n    border: solid 1px var(--pale-spring-bud);\\n    color: var(--russet);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/DOM/style/style.css":
/*!*********************************!*\
  !*** ./src/DOM/style/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/DOM/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/attribute.js":
/*!******************************!*\
  !*** ./src/DOM/attribute.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attribute\": () => (/* binding */ Attribute)\n/* harmony export */ });\n\n\nclass Attribute{\n\n    #name;\n    #value;\n\n    constructor(name, value){\n        this.setName(name);\n        this.setValue(value);\n    }\n\n    setName(name){\n        this.#name = name;\n    }\n\n    setValue(value){\n        this.#value = value;\n    }\n\n    getName(){ return this.#name; }\n    getValue(){ return this.#value; }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/attribute.js?");

/***/ }),

/***/ "./src/DOM/element.js":
/*!****************************!*\
  !*** ./src/DOM/element.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Element\": () => (/* binding */ Element)\n/* harmony export */ });\n\n\nclass Element{\n\n    #element;\n\n    constructor(name, attributes, className, textContent){\n        this.createElement(name, attributes, className, textContent);\n    }\n    \n    createElement(name, attributes, className, textContent){\n        this.#element = document.createElement(name);\n\n        attributes.map(attr => this.#element.setAttribute(attr.getName(), attr.getValue()));\n\n        if(className !== undefined){\n\n            if(className.includes(\" \")){\n                const classNames = className.split(\" \");\n\n                classNames.map(name => this.#element.classList.add(name));\n            }else{\n                this.#element.classList.add(className);\n            }\n\n        }\n\n        if(textContent !== undefined){\n            this.setTextContent(textContent);\n        }\n    }\n\n    setTextContent(textContent){\n        this.#element.textContent = textContent;\n    }\n\n    getElement(){\n        return this.#element;\n    }\n\n    addElementClass(className){\n        this.#element.classList.add(className);\n    }\n\n    addElementClasses(classNames){\n        classNames.map(className => this.#element.classList.add(className));\n    }\n\n    removeElementClass(className){\n        this.#element.classList.remove(className);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/element.js?");

/***/ }),

/***/ "./src/DOM/main/categoryItem.js":
/*!**************************************!*\
  !*** ./src/DOM/main/categoryItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoryItem\": () => (/* binding */ CategoryItem)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n\n\n\n\nclass CategoryItem{\n\n    #name;\n    #item;\n    #todos;\n\n    constructor(itemName){\n        this.#name = itemName;\n        this.#todos = new Array();\n        this.setCategoryItem(itemName);\n    }\n\n    setCategoryItem(itemName){\n\n        const item = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"input\", new Array(new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"type\", \"button\"),\n        new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"value\", itemName)), `${itemName} category-item`);\n\n        this.#item = item.getElement();\n    }\n\n    getItem(){\n        return this.#item;\n    }\n\n    getName(){\n        return this.#name;\n    }\n\n    addToDo(todo){\n        this.#todos.add(todo);\n    }\n\n    removeTodo(id){\n        if(this.isToDosEmpty()){\n            return;\n        }\n\n        this.#todos.map((todo, index) => {\n            if(todo.id === id){\n                this.#todos.splice(index, 1);\n            }\n        });\n    }\n\n    isToDosEmpty(){\n        return this.#todos.length === 0 ? true : false;\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/main/categoryItem.js?");

/***/ }),

/***/ "./src/DOM/main/cleanToilet.js":
/*!*************************************!*\
  !*** ./src/DOM/main/cleanToilet.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CleanToilet\": () => (/* binding */ CleanToilet)\n/* harmony export */ });\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _images_clean_toilet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/clean-toilet.png */ \"./src/DOM/images/clean-toilet.png\");\n\n\n\n\n\nclass CleanToilet{\n\n    #cleanToiletContainer;\n\n    constructor(){\n        this.setCleanToilet();\n    }\n\n    setCleanToilet(){\n\n        const cleanToiletAlt = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"alt\", \"image of a clean toilet\");\n        const cleanToiletId = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"id\", \"clean-toilet\");\n        const cleanToiletSrc = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"src\", _images_clean_toilet_png__WEBPACK_IMPORTED_MODULE_2__);\n        const cleanToiletAttrArr = [cleanToiletAlt, cleanToiletId, cleanToiletSrc];\n        const cleanToiletContainerId = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"id\", \"clean-toilet-container\");\n        const cleanToiletContainerAttrArr = [cleanToiletContainerId];\n        const headingText = \"All clean, nothing to see here\";\n\n        const cleanToiletHeadingId = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"id\", \"clean-toilet-heading\");\n        const cleanToiletHeadingAttrArr = [cleanToiletHeadingId];\n\n        const cleanToiletContainer = new _element__WEBPACK_IMPORTED_MODULE_1__.Element(\"div\", cleanToiletContainerAttrArr);\n        const cleanToiletHeading = new _element__WEBPACK_IMPORTED_MODULE_1__.Element(\"h3\", cleanToiletHeadingAttrArr, undefined, headingText);\n        const cleanToiletImage = new _element__WEBPACK_IMPORTED_MODULE_1__.Element(\"img\", cleanToiletAttrArr);\n        \n        this.#cleanToiletContainer = cleanToiletContainer.getElement();\n        const cleanToiletHeadingNode = cleanToiletHeading.getElement();\n        const cleanToiletImageNode = cleanToiletImage.getElement();\n\n        this.#cleanToiletContainer.append(cleanToiletHeadingNode);\n        this.#cleanToiletContainer.append(cleanToiletImageNode);\n    }\n\n    getCleanToilet(){\n        return this.#cleanToiletContainer;\n    }\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/main/cleanToilet.js?");

/***/ }),

/***/ "./src/DOM/main/main.js":
/*!******************************!*\
  !*** ./src/DOM/main/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n/* harmony import */ var _cleanToilet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanToilet */ \"./src/DOM/main/cleanToilet.js\");\n/* harmony import */ var _todoButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoButtons */ \"./src/DOM/main/todoButtons.js\");\n\n\n\n\n\n\nclass Main{\n\n    #main;\n    #categoryName;\n    #addTaskButton;\n    #tasksContainer;\n    #currentCategoryItem;\n\n    constructor(currentCategoryItem){\n        this.#currentCategoryItem = currentCategoryItem;\n        this.setMain(currentCategoryItem.getName());\n    }\n\n    setMain(name){\n\n        const tasksContainer = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"tasks-container\");\n        \n        const main = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"main\", []);\n        const todosDisplay = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", [tasksContainer]);\n        this.#main = main.getElement();\n        this.#tasksContainer = todosDisplay.getElement();\n        this.#setCategoryName(name);\n        this.#setAddTask();\n\n        this.appendToMain();\n    }\n    \n    appendToMain(){\n        this.#main.append(this.#categoryName);\n        this.#main.append(this.#addTaskButton);\n\n\n        if(this.#currentCategoryItem.isToDosEmpty()){\n            const cleanToilet = new _cleanToilet__WEBPACK_IMPORTED_MODULE_2__.CleanToilet();\n\n            this.#tasksContainer.append(cleanToilet.getCleanToilet());   \n        }\n\n        this.#addTaskEvent();\n\n        this.#main.append(this.#tasksContainer);\n    }\n    \n    #setCategoryName(name){\n        const categoryName = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"h4\", [], \"current-category\", name)\n        this.#categoryName = categoryName.getElement();\n    }\n\n    #setAddTask(){\n\n        const addTaskButton = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"button\", [], \"add-task-button\");\n        const addTaskIcon = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"i\", [], \"fa-solid fa-circle-plus\");\n        const addTaskText = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"p\", [new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"add-task\")], undefined, \"Add task\");\n        \n        this.#addTaskButton = addTaskButton.getElement();\n        const addTaskIconNode = addTaskIcon.getElement();\n        const addTaskTextNode = addTaskText.getElement();\n        \n        this.#addTaskButton.append(addTaskIconNode);\n        this.#addTaskButton.append(addTaskTextNode);\n    }\n\n    #addTaskEvent(){\n\n        let toDoInputContainer;\n        let toDoNameInput;\n\n        this.#addTaskButton.addEventListener(\"click\", () => {\n            toDoInputContainer = this.#showToDoInput();\n            toDoNameInput = toDoInputContainer.children[0];\n            this.#main.insertBefore(toDoInputContainer, this.#addTaskButton);\n            toDoNameInput.focus();\n        });\n\n    }\n\n    getMain(){\n        return this.#main;\n    }\n\n    #showToDoInput(){\n\n        const toDoButtons = new _todoButtons__WEBPACK_IMPORTED_MODULE_3__.TodoButtons();\n        const toDoInputContainerId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"to-do-input-container\");\n        const toDoNameId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"to-do-name-input\");\n        const toDoNamePlaceholder = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"placeholder\", \"e.g, Renew Gym Membership\");\n        const toDoDescriptionId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"to-do-description-input\");\n        const toDoDescriptionPlaceholder = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"placeholder\", \"Description\");\n        const contenteditableAttr = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"contenteditable\", \"true\");\n\n        const toDoInputAttrArr = [toDoInputContainerId];\n        const todoNameAttrArr = [toDoNameId, toDoNamePlaceholder, contenteditableAttr];\n        const todoDescriptionAttrArr = [toDoDescriptionId, toDoDescriptionPlaceholder, contenteditableAttr];\n\n        const toDoInputContainer = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", toDoInputAttrArr);\n        const toDoName = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", todoNameAttrArr);\n        const toDoDescription = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", todoDescriptionAttrArr);\n\n        const toDoInputContainerNode = toDoInputContainer.getElement();\n        const toDoNameNode = toDoName.getElement();\n        const toDoDescriptionNode = toDoDescription.getElement();\n        const toDoButtonsNode = toDoButtons.getToDoButtons();\n\n        toDoInputContainerNode.append(toDoNameNode);\n        toDoInputContainerNode.append(toDoDescriptionNode);\n        toDoInputContainerNode.append(toDoButtonsNode);\n        \n        return toDoInputContainerNode;\n\n        // https://www.speedtest.net/result/12796846649 - Monday\n\n    }\n\n\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/DOM/main/main.js?");

/***/ }),

/***/ "./src/DOM/main/todoButtons.js":
/*!*************************************!*\
  !*** ./src/DOM/main/todoButtons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoButtons\": () => (/* binding */ TodoButtons)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n\n\n\n\nclass TodoButtons{\n\n    #todoButtonsContainer;\n\n    constructor(){\n        this.setToDoButtons();\n    }\n\n    setToDoButtons(){\n\n        const toDoButtonsContainerId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"to-do-buttons-container\");\n        const dueDateButtonId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"due-date-button\");\n        const categoryButtonId = new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"category-button\");\n        \n        const toDoButtonsAttrArr = [toDoButtonsContainerId];\n        const dueDateButtonAttrArr = [dueDateButtonId];\n        const categoryButtonAttrArr = [categoryButtonId];\n\n        const toDoButtonsContainer = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", toDoButtonsAttrArr);\n        const calendarIcon = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"i\", [], \"fa-solid fa-calendar-day\");\n        const periodIcon = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"i\", [], \"fa-solid fa-circle-small\");\n        const dueDateButton = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"button\", dueDateButtonAttrArr);\n        const categoryButton = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"button\", categoryButtonAttrArr);\n        const dueDateButtonText = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"p\", [], undefined, \"Due Date\");\n        const categoryButtonName = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"p\", [], undefined, \"Inbox\");\n        \n        this.#todoButtonsContainer = toDoButtonsContainer.getElement(); \n        const calendarIconNode = calendarIcon.getElement();\n        const dueDateButtonTextNode = dueDateButtonText.getElement();\n        const dueDateButtonNode = dueDateButton.getElement();\n        const periodIconNode = periodIcon.getElement();\n        const categoryButtonNode = categoryButton.getElement();\n        const categoryButtonNameNode = categoryButtonName.getElement();\n\n        dueDateButtonNode.append(calendarIconNode);\n        dueDateButtonNode.append(dueDateButtonTextNode);\n        categoryButtonNode.append(periodIconNode);\n        categoryButtonNode.append(categoryButtonNameNode);\n        this.#todoButtonsContainer.append(dueDateButtonNode);\n        this.#todoButtonsContainer.append(categoryButtonNode);\n    }\n\n    getToDoButtons(){\n        return this.#todoButtonsContainer;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/main/todoButtons.js?");

/***/ }),

/***/ "./src/DOM/side-panel/category.js":
/*!****************************************!*\
  !*** ./src/DOM/side-panel/category.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _main_categoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/categoryItem */ \"./src/DOM/main/categoryItem.js\");\n\n\n\n\n\nclass Category{\n\n    #items;\n    #category;\n    #categoryContainer;\n    #categoryItemContainer;\n\n    constructor(textContent, items){\n        this.#items = new Array();\n        this.setCategory(textContent, items);\n    }\n\n    setCategory(textContent, items){\n        const categoryHeading = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"h5\", [], `category-heading`, textContent);\n        const categoryContainer = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", [], \"category-container\");\n        this.#categoryContainer = categoryContainer.getElement();\n\n        this.#category = this.#categoryContainer;\n        this.#category.append(categoryHeading.getElement());\n        \n        if(items !== undefined){\n            this.setCategoryItems(items);\n            this.#categoryContainer.append(this.#categoryItemContainer);\n        }\n    }\n\n    getCategory(){\n        return this.#category;\n    }\n\n    setCategoryItems(items){\n\n        const categoryItemContainer = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", [],\n        \"category-items-container\");\n        this.#categoryItemContainer = categoryItemContainer.getElement();\n\n        items.map((item) => {\n            this.#categoryItemContainer.append(item.getItem());\n            this.#items.push();\n        });\n\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/side-panel/category.js?");

/***/ }),

/***/ "./src/DOM/side-panel/logo.js":
/*!************************************!*\
  !*** ./src/DOM/side-panel/logo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LogoContainer\": () => (/* binding */ LogoContainer)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/logo.png */ \"./src/DOM/images/logo.png\");\n\n\n\n\n\nclass LogoContainer{\n\n    #logoContainer;\n\n    constructor(){\n        this.setLogoDetails();\n    }\n\n    setLogoDetails(){\n        const logoContainerAttribute = new  _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"logo-container\");\n        const logoContainer = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"div\", new Array(logoContainerAttribute));\n\n        const attrArr = new Array(new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"src\", _images_logo_png__WEBPACK_IMPORTED_MODULE_2__),\n        new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"alt\", \"doodoo-list logo\")); \n\n        const logo = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"img\", attrArr, \"logo\");\n        const name = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"p\", new Array(new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"name\")), undefined, \"doodoo-list\");\n        const tagline = new _element__WEBPACK_IMPORTED_MODULE_0__.Element(\"h5\", new Array(new _attribute__WEBPACK_IMPORTED_MODULE_1__.Attribute(\"id\", \"tagline\")),\n        undefined, \"Here to help you get your 💩 together\");\n\n        this.#logoContainer = logoContainer.getElement();\n\n        this.#logoContainer.append(logo.getElement());\n        this.#logoContainer.append(name.getElement());\n        this.#logoContainer.append(tagline.getElement());\n    }\n\n    getLogoContainer(){\n        return this.#logoContainer;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/side-panel/logo.js?");

/***/ }),

/***/ "./src/DOM/side-panel/sidePanel.js":
/*!*****************************************!*\
  !*** ./src/DOM/side-panel/sidePanel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidePanel\": () => (/* binding */ SidePanel)\n/* harmony export */ });\n/* harmony import */ var _attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attribute */ \"./src/DOM/attribute.js\");\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element */ \"./src/DOM/element.js\");\n\n\n\n\nclass SidePanel{\n\n    #sidePanel;\n\n    constructor(logoContainer, byTime, userDefinedCategory){\n        this.setSidePanel(logoContainer, byTime, userDefinedCategory);\n    }\n\n    setSidePanel(logoContainer, byTime, userDefinedCategory){\n        const sidePanelAttribute = new _attribute__WEBPACK_IMPORTED_MODULE_0__.Attribute(\"id\", \"side-panel\");\n        const sidePanel = new _element__WEBPACK_IMPORTED_MODULE_1__.Element(\"div\", new Array(sidePanelAttribute));\n\n        this.#sidePanel = sidePanel.getElement();\n        this.#sidePanel.append(logoContainer);\n        this.#sidePanel.append(byTime);\n        this.#sidePanel.append(userDefinedCategory);\n    }\n\n    getSidePanel(){\n        return this.#sidePanel;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/DOM/side-panel/sidePanel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/style/style.css */ \"./src/DOM/style/style.css\");\n/* harmony import */ var _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/main/categoryItem */ \"./src/DOM/main/categoryItem.js\");\n/* harmony import */ var _DOM_side_panel_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/side-panel/category */ \"./src/DOM/side-panel/category.js\");\n/* harmony import */ var _DOM_side_panel_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/side-panel/logo */ \"./src/DOM/side-panel/logo.js\");\n/* harmony import */ var _DOM_side_panel_sidePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/side-panel/sidePanel */ \"./src/DOM/side-panel/sidePanel.js\");\n/* harmony import */ var _DOM_main_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOM/main/main */ \"./src/DOM/main/main.js\");\n\n\n\n\n\n\n\nconst LoadPages = (() => {\n\n    const content = document.getElementById(\"content\");\n\n    const inboxCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Inbox\");\n    const todayCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Today\");\n    const upcomingCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Upcoming\");\n\n    const allCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"All\");\n    const hobbiesCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Hobbies\");\n    const workCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Work\");\n    const familyCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Family\");\n    const friendsCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Friends\");\n    const travelCategoryItem = new _DOM_main_categoryItem__WEBPACK_IMPORTED_MODULE_1__.CategoryItem(\"Travel\");\n    \n    const logoContainer = new _DOM_side_panel_logo__WEBPACK_IMPORTED_MODULE_3__.LogoContainer();\n    const byTimeItems = new Array(inboxCategoryItem, todayCategoryItem, upcomingCategoryItem);\n    const byTime = new _DOM_side_panel_category__WEBPACK_IMPORTED_MODULE_2__.Category(\"Time\", byTimeItems);\n    const userDefinedItems = new Array(allCategoryItem, hobbiesCategoryItem,workCategoryItem, \n        familyCategoryItem, friendsCategoryItem, travelCategoryItem);\n    const userDefinedCategories = new _DOM_side_panel_category__WEBPACK_IMPORTED_MODULE_2__.Category(\"My Categories\", userDefinedItems);\n    \n    const sidePanel = new _DOM_side_panel_sidePanel__WEBPACK_IMPORTED_MODULE_4__.SidePanel(logoContainer.getLogoContainer(),\n    byTime.getCategory(), userDefinedCategories.getCategory());;\n    const sidePanelNode = sidePanel.getSidePanel();\n    \n    const main = new _DOM_main_main__WEBPACK_IMPORTED_MODULE_5__.Main(inboxCategoryItem);\n    const mainNode = main.getMain();\n\n    content.append(sidePanelNode);\n    content.append(mainNode);\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/DOM/images/clean-toilet.png":
/*!*****************************************!*\
  !*** ./src/DOM/images/clean-toilet.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"473ff06f7a86812b6b06.png\";\n\n//# sourceURL=webpack://todo-list/./src/DOM/images/clean-toilet.png?");

/***/ }),

/***/ "./src/DOM/images/logo.png":
/*!*********************************!*\
  !*** ./src/DOM/images/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf383437836e28d0e4a5.png\";\n\n//# sourceURL=webpack://todo-list/./src/DOM/images/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;