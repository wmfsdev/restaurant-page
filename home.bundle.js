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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst container = document.querySelector('#content')\n\nfunction landing() {\n    const title = document.createElement('h1');\n    title.classList.add('h1')\n    title.textContent = \"EAT.\"   \n    container.appendChild(title);\n}\n\nfunction menu() {\n    const menu = document.createElement('ul')\n    const array = []\n    \n    for (let i = 0 ; i < 3 ; i++) {\n        const listElements = document.createElement('li')\n        listElements.setAttribute(`data-id`, `${i}`)\n        array.push(listElements)\n        menu.appendChild(listElements)\n    }\n    menu.classList.add('menu')\n    array[0].textContent = \"HOME\"\n    array[1].textContent = \"MENU\"\n    array[2].textContent = \"CONTACT\"\n    \n    container.appendChild(menu)\n}\n\nconst copy = \"Looking for authentic Thai cuisine that will satisfy your cravings? Look no further than our Thai restaurant! Our menu features a wide variety of traditional Thai dishes prepared with the freshest ingredients. Try our famous Pad Thai or Tom Yum soup for a taste of Thailand. We also offer delicious curries like Green Curry and Massaman Curry, as well as refreshing salads like Papaya Salad. And don't forget to indulge in our Mango Sticky Rice dessert. Our cozy dining area with traditional Thai artwork and decor provides the perfect setting for a memorable dining experience. Come visit us today and satisfy your cravings with our delicious Thai dishes!\"\n\nfunction aboutUs() {\n    const about = document.createElement('p')\n    const image = document.createElement('img')\n    const imageBand = document.createElement('div')\n    const imgBand = document.createElement('img')\n    about.textContent = copy\n    imageBand.classList.add('image-band')\n    imageBand.appendChild(about)\n    container.appendChild(image)\n    container.insertAdjacentElement(\"afterend\", imageBand)\n    imageBand.appendChild(imgBand)\n}\n\nfunction run() {\n    landing()\n    menu()\n    aboutUs()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (run);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;