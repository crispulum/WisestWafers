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

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./client/index.html\");\n\nvar form = document.getElementById('farm');\nform.addEventListener('submit', function (event) {\n  var _glitterImage$classLi;\n  var glitterImage = document.querySelector('.glitter-image');\n\n  // Remove any existing color classes\n  var colorClasses = ['color-darker-1', 'color-original', 'color-brighter-1', 'color-brighter-2'];\n  (_glitterImage$classLi = glitterImage.classList).remove.apply(_glitterImage$classLi, colorClasses);\n\n  // Add the glitter animation\n  glitterImage.classList.add('glittering');\n\n  // Set the duration for each color segment (0.25 seconds)\n  var segmentDuration = 250; // 0.25 seconds\n\n  // Remove the glitter effect after the animation (1.5 seconds for the entire sequence)\n  setTimeout(function () {\n    glitterImage.classList.remove('glittering');\n\n    // Fetch data and handle the response\n    var fortuneText = form.querySelector('[name=\"fortuneText\"]').value;\n    var requestData = {\n      fortuneText: fortuneText\n    };\n    fetch('/fortuneText', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json' // Set the content type to JSON\n      },\n\n      body: JSON.stringify(requestData) // Convert the object to JSON string\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      console.log('data is: ');\n      console.log(data);\n      document.getElementById('revealed').innerHTML = data.fortuneText;\n    })[\"catch\"](function (error) {\n      console.error('error in fortune fetch ', error);\n    });\n  }, 1500); // Wait for the entire sequence to complete (1.5 seconds)\n\n  event.preventDefault();\n\n  // Get the form input value\n  var fortuneText = form.querySelector('[name=\"fortuneText\"]').value;\n\n  // Create an object with the correct shape\n  var requestData = {\n    fortuneText: fortuneText\n  };\n\n  // Set an interval to control the color changes (0.25 seconds per segment)\n  var colorSequence = ['color-darker-1', 'color-original', 'color-brighter-1', 'color-brighter-2', 'color-brighter-1', 'color-original'];\n  var currentIndex = 0;\n  var interval = setInterval(function () {\n    var _glitterImage$classLi2;\n    var currentColorClass = colorSequence[currentIndex];\n    (_glitterImage$classLi2 = glitterImage.classList).remove.apply(_glitterImage$classLi2, colorClasses);\n    glitterImage.classList.add(currentColorClass);\n    currentIndex++;\n    if (currentIndex >= colorSequence.length) {\n      clearInterval(interval);\n    }\n  }, segmentDuration);\n});\n\n//# sourceURL=webpack://wisestwafers/./client/index.js?");

/***/ }),

/***/ "./client/index.html":
/*!***************************!*\
  !*** ./client/index.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./styling.css */ \"./client/styling.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/qm.png */ \"./client/assets/qm.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/newerBall.png */ \"./client/assets/newerBall.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sparkle.png */ \"./client/assets/sparkle.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar code = \"<html>\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <title>Pondr</title>\\n  <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n</head>\\n<body>\\n    <img src = \\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" class = 'info'>\\n    <div class = 'hidden'>Offer the orb a fortune, and have your fortune revealed in turn. </div>\\n  <h1>Pondr</h1>\\n  <br> <br>\\n  <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt = \\\"The Orb\\\" class = 'ball glitter-image'>\\n  <form class = 'center form' id = 'farm'>\\n    <input name=\\\"fortuneText\\\" type=\\\"text\\\"  class = 'field' placeholder=\\\"Offer a fortune...\\\"></input>\\n    <input type = 'image' src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class = 'sparkle'>\\n  </form>\\n  <div class= 'center' id = 'revealed'>pre-reveal</div>\\n  \\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://wisestwafers/./client/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://wisestwafers/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./client/assets/newerBall.png":
/*!*************************************!*\
  !*** ./client/assets/newerBall.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a8761b98ebae3243c79.png\";\n\n//# sourceURL=webpack://wisestwafers/./client/assets/newerBall.png?");

/***/ }),

/***/ "./client/assets/qm.png":
/*!******************************!*\
  !*** ./client/assets/qm.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61e21608933f71979f25.png\";\n\n//# sourceURL=webpack://wisestwafers/./client/assets/qm.png?");

/***/ }),

/***/ "./client/assets/sparkle.png":
/*!***********************************!*\
  !*** ./client/assets/sparkle.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8c610e31e24c9af208c.png\";\n\n//# sourceURL=webpack://wisestwafers/./client/assets/sparkle.png?");

/***/ }),

/***/ "./client/styling.css":
/*!****************************!*\
  !*** ./client/styling.css ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.css\";\n\n//# sourceURL=webpack://wisestwafers/./client/styling.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/index.js");
/******/ 	
/******/ })()
;