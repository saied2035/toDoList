/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: #e7e9eb;\\r\\n}\\r\\n\\r\\n#list-container {\\r\\n  min-width: 36vw;\\r\\n  display: grid;\\r\\n  grid-template-columns: 80% auto;\\r\\n  background: #fff;\\r\\n  border: 1.8px solid #b0b4b9;\\r\\n  align-items: flex-end;\\r\\n  border-radius: 16px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  grid-column: 1/2;\\r\\n  font-size: 22px;\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.fa-arrows-rotate,\\r\\n#enter {\\r\\n  justify-self: flex-end;\\r\\n  color: #989fa7;\\r\\n  grid-column: 2/3;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.fa-arrows-rotate {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#enter {\\r\\n  grid-row: 2/2;\\r\\n  align-self: flex-start;\\r\\n  margin-top: 1rem;\\r\\n  margin-bottom: 1rem;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#task {\\r\\n  align-self: flex-start;\\r\\n  grid-column: 1/3;\\r\\n  grid-row: 2/2;\\r\\n  padding: 1rem;\\r\\n  border-top: 1.8px solid #b0b4b9;\\r\\n  border-right: none;\\r\\n  border-left: none;\\r\\n  border-bottom: none;\\r\\n  outline: none;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n#task::placeholder {\\r\\n  font-size: 16px;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.list {\\r\\n  list-style: none;\\r\\n  grid-column: 1/3;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0;\\r\\n  max-height: 50vh;\\r\\n  overflow: auto;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  margin-left: 1rem;\\r\\n  pointer-events: auto;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  padding: 1rem 0;\\r\\n  border-top: 1.8px solid #b0b4b9;\\r\\n}\\r\\n\\r\\npath {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.dots-container {\\r\\n  margin-left: auto;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  grid-column: 1/3;\\r\\n  width: 100%;\\r\\n  height: 60px;\\r\\n  border: none;\\r\\n  font-size: 17px;\\r\\n  border-top: 1px solid #b0b4b9;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  background: none;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.fa-ellipsis-vertical:hover {\\r\\n  cursor: all-scroll;\\r\\n}\\r\\n\\r\\n.fa-trash-can:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.bg-yellow {\\r\\n  background-color: lightyellow;\\r\\n}\\r\\n\\r\\n.disabled {\\r\\n  opacity: 0.5;\\r\\n  pointer-events: none;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.dn {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/enter.svg":
/*!******************************!*\
  !*** ./src/images/enter.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/enter.svg\");\n\n//# sourceURL=webpack://webpack/./src/images/enter.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_functions_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions/functions.js */ \"./src/modules/functions/functions.js\");\n/* harmony import */ var _modules_toDoList_toDoList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toDoList/toDoList.js */ \"./src/modules/toDoList/toDoList.js\");\n/* harmony import */ var _modules_events_events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events/events.js */ \"./src/modules/events/events.js\");\n/* harmony import */ var _images_enter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/enter.svg */ \"./src/images/enter.svg\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('#enter').src = _images_enter_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\n\r\ndocument.querySelector('#task').addEventListener('keypress', (event) => (0,_modules_events_events_js__WEBPACK_IMPORTED_MODULE_4__.taskAdd)(event, _modules_toDoList_toDoList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\ndocument.querySelector('#enter').addEventListener('click', (event) => (0,_modules_events_events_js__WEBPACK_IMPORTED_MODULE_4__.taskAdd)(event, _modules_toDoList_toDoList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\ndocument.querySelector('#clear').addEventListener('click', (event) => (0,_modules_events_events_js__WEBPACK_IMPORTED_MODULE_4__.removeCompleted)(event, _modules_toDoList_toDoList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\n(0,_modules_functions_functions_js__WEBPACK_IMPORTED_MODULE_2__.showToDoList)(_modules_toDoList_toDoList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/events/events.js":
/*!**************************************!*\
  !*** ./src/modules/events/events.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskAdd\": () => (/* binding */ taskAdd),\n/* harmony export */   \"taskCompleted\": () => (/* binding */ taskCompleted),\n/* harmony export */   \"taskEdit\": () => (/* binding */ taskEdit),\n/* harmony export */   \"updateValue\": () => (/* binding */ updateValue),\n/* harmony export */   \"removeCompleted\": () => (/* binding */ removeCompleted)\n/* harmony export */ });\n/* harmony import */ var _functions_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/functions.js */ \"./src/modules/functions/functions.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nconst taskAdd = (event, list) => {\r\n  const input = document.querySelector('#task');\r\n  const ul = document.querySelector('.list');\r\n  if (!input.value) {\r\n    return \"it's empty\";\r\n  }\r\n  if (event.keyCode === 13 || event.type === 'click') {\r\n    list.addTask(input.value);\r\n    ul.classList.remove('dn');\r\n    input.value = null;\r\n    return 'done';\r\n  }\r\n  return 'working!';\r\n};\r\n\r\nconst taskCompleted = (event, list) => {\r\n  const checked = !event.target.parentNode.children[1].classList.contains('completed');\r\n  const listOfTasks = document.querySelectorAll('.checkbox');\r\n  const index = Array.from(listOfTasks).indexOf(event.target);\r\n  event.target.parentNode.classList.toggle('disabled');\r\n  event.target.parentNode.children[1].classList.toggle('completed');\r\n  const tasks = (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.getTasks)();\r\n  tasks[index].completed = checked;\r\n  window.localStorage.setItem('tasks', JSON.stringify(tasks));\r\n  list.completeTask(index, checked);\r\n  (0,_functions_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkTaskStyle)(event.target.parentNode);\r\n};\r\n\r\nconst taskEdit = (event, list) => {\r\n  const task = event.target.parentNode.parentNode;\r\n  event.target.classList.toggle('fa-ellipsis-vertical');\r\n  event.target.classList.toggle('fa-trash-can');\r\n  if (event.target.classList.contains('fa-trash-can')) {\r\n    task.classList.add('bg-yellow');\r\n    task.children[1].disabled = false;\r\n  } else {\r\n    const icons = document.querySelectorAll('.icon');\r\n    const index = Array.from(icons).indexOf(event.target);\r\n    task.classList.remove('bg-yellow');\r\n    task.children[1].disabled = true;\r\n    list.removeTask(index);\r\n    if (!list.taskList.length) {\r\n      task.parentNode.classList.add('dn');\r\n    }\r\n    task.remove();\r\n  }\r\n};\r\n\r\nconst updateValue = (event, list) => {\r\n  const icon = event.target.parentNode.children[2];\r\n  if (!event.target.value) {\r\n    event.target.placeholder = \"the task shouldn't be empty. Please, add value.\";\r\n    return;\r\n  }\r\n  if (event.keyCode === 13) {\r\n    event.target.disabled = true;\r\n    event.target.parentNode.classList.remove('bg-yellow');\r\n    icon.children[0].classList.toggle('fa-ellipsis-vertical');\r\n    icon.children[0].classList.toggle('fa-trash-can');\r\n    const descriptions = document.querySelectorAll('.description');\r\n    const index = Array.from(descriptions).indexOf(event.target);\r\n    list.updateTaskDeskcription(index, event.target.value);\r\n  }\r\n};\r\n\r\nconst removeCompleted = (event, list) => {\r\n  const completedTasks = document.querySelectorAll('.disabled');\r\n  Array.from(completedTasks).forEach((task) => task.remove());\r\n  list.removeCompletedTask();\r\n  if (!list.taskList.length) {\r\n    const ul = document.querySelector('.list');\r\n    ul.classList.add('dn');\r\n  }\r\n};\n\n//# sourceURL=webpack://webpack/./src/modules/events/events.js?");

/***/ }),

/***/ "./src/modules/functions/functions.js":
/*!********************************************!*\
  !*** ./src/modules/functions/functions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"checkTaskStyle\": () => (/* binding */ checkTaskStyle),\n/* harmony export */   \"showToDoList\": () => (/* binding */ showToDoList)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst getTasks = () => JSON.parse(localStorage.tasks);\r\nconst checkTaskStyle = (task) => {\r\n  if (!task.classList.contains('bg-yellow')) return;\r\n  task.classList.remove('bg-yellow');\r\n  task.children[1].disabled = true;\r\n  const icon = task.children[2];\r\n  icon.children[0].classList.toggle('fa-ellipsis-vertical');\r\n  icon.children[0].classList.toggle('fa-trash-can');\r\n};\r\nconst showToDoList = (taskList) => {\r\n  if (!window.localStorage.tasks) {\r\n    return;\r\n  }\r\n  const list = getTasks();\r\n  const ul = document.querySelector('.list');\r\n  if (!list.length) {\r\n    ul.classList.add('dn');\r\n  }\r\n  list.forEach((task) => {\r\n    taskList.loadTask(task);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/functions/functions.js?");

/***/ }),

/***/ "./src/modules/toDoList/toDoList.js":
/*!******************************************!*\
  !*** ./src/modules/toDoList/toDoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _events_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/events.js */ \"./src/modules/events/events.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nclass ToDoList {\r\n  constructor() {\r\n    this.taskList = [];\r\n  }\r\n\r\n  createTask(description) {\r\n    const taskContainer = document.querySelector('.list');\r\n    const index = taskContainer.children.length + 1;\r\n    const li = document.createElement('li');\r\n    li.className = 'task';\r\n    const checkBox = document.createElement('input');\r\n    checkBox.type = 'checkbox';\r\n    checkBox.className = 'checkbox';\r\n    checkBox.addEventListener('change', (event) => (0,_events_events_js__WEBPACK_IMPORTED_MODULE_0__.taskCompleted)(event, this));\r\n    const desc = document.createElement('input');\r\n    desc.className = 'description';\r\n    desc.value = description;\r\n    desc.disabled = true;\r\n    desc.required = true;\r\n    desc.addEventListener('keydown', (event) => (0,_events_events_js__WEBPACK_IMPORTED_MODULE_0__.updateValue)(event, this));\r\n    const dotsContainer = document.createElement('span');\r\n    dotsContainer.className = 'dots-container';\r\n    const dots = document.createElement('i');\r\n    dots.className = 'fa-solid fa-ellipsis-vertical icon';\r\n    dotsContainer.appendChild(dots);\r\n    dotsContainer.addEventListener('click', (event) => (0,_events_events_js__WEBPACK_IMPORTED_MODULE_0__.taskEdit)(event, this));\r\n    li.appendChild(checkBox);\r\n    li.appendChild(desc);\r\n    li.appendChild(dotsContainer);\r\n    taskContainer.appendChild(li);\r\n    return index;\r\n  }\r\n\r\n  addTask(description) {\r\n    const index = this.createTask(description);\r\n    this.taskList.push({ index, description, completed: false });\r\n    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));\r\n  }\r\n\r\n  loadTask(task) {\r\n    const index = this.createTask(task.description);\r\n    const checkBoxes = document.querySelectorAll('.checkbox');\r\n    this.taskList.push({ index, description: task.description, completed: task.completed });\r\n    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));\r\n    if (task.completed) {\r\n      checkBoxes[index - 1].click();\r\n    }\r\n  }\r\n\r\n  completeTask(index, checked) {\r\n    this.taskList[index].completed = checked;\r\n  }\r\n\r\n  removeTask(index) {\r\n    this.taskList.splice(index, 1);\r\n    this.taskList = this.taskList.map((task, i) => (\r\n      { index: i + 1, description: task.description, completed: task.completed }\r\n    ));\r\n\r\n    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));\r\n  }\r\n\r\n  updateTaskDeskcription(index, value) {\r\n    this.taskList[index].description = value;\r\n    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));\r\n  }\r\n\r\n  removeCompletedTask() {\r\n    this.taskList = this.taskList.filter((task) => task.completed === false);\r\n    this.taskList = this.taskList.map((task, i) => (\r\n      { index: i + 1, description: task.description, completed: task.completed }\r\n    ));\r\n    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));\r\n  }\r\n}\r\nconst taskList = new ToDoList();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);\n\n//# sourceURL=webpack://webpack/./src/modules/toDoList/toDoList.js?");

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