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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { const e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\nconst Copo = __webpack_require__(/*! ./models/Copo */ \"./models/Copo.js\")\r\n\r\n\r\nlet resposta = document.getElementById('resposta')\r\nlet btnCalcular = document.getElementById('btnCalcular')\r\n\r\n\r\nbtnCalcular.addEventListener('click', () =>{\r\n    let raioMaior = parseFloat(document.getElementById('raioMaior').value)\r\n    let raioMenor = parseFloat(document.getElementById('raioMenor').value)\r\n    let altura = parseFloat(document.getElementById('altura').value)\r\n\r\n\r\n    const copo = new Copo(raioMaior, raioMenor, altura)\r\n\r\n\r\n    let classificacaoVolume = copo.classificarVolume()\r\n\r\n\r\n    resposta.innerHTML = `A geratriz do copo é: ${copo.calcularGeratriz().toFixed(2)}<br>\r\n    A área da base menor é: ${copo.calcularAreaBaseMenor().toFixed(2)}<br>\r\n    A área da base maior é: ${copo.calcularAreaBaseMaior().toFixed(2)}<br>\r\n    A área lateral é: ${copo.calcularAreaLateral().toFixed(2)}<br>\r\n    O volume do copo é: ${copo.calcularVolume().toFixed(2)}<br>\r\n    A área total do copo é: ${copo.calcularAreaTotal().toFixed(2)}<br>\r\n    Classificação do volume: ${classificacaoVolume}`\r\n})\r\n\r\n\r\nlet btnLimpar = document.getElementById('btnLimpar')\r\nbtnLimpar.addEventListener('click', () => {\r\n    document.getElementById('raioMaior').value = ''\r\n    document.getElementById('raioMenor').value = ''\r\n    document.getElementById('altura').value = ''\r\n    resposta.innerHTML = ''\r\n})\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./models/Copo.js"
/*!************************!*\
  !*** ./models/Copo.js ***!
  \************************/
(module) {

eval("{class Copo {\r\n    constructor(raioMaior, raioMenor, altura){\r\n        this.raioMaior = raioMaior;\r\n        this.raioMenor = raioMenor;\r\n        this.altura = altura;\r\n    }\r\n\r\n\r\n    calcularGeratriz(){\r\n        return Math.sqrt(\r\n            this.altura ** 2 +\r\n            (this.raioMaior - this.raioMenor) ** 2\r\n        );\r\n    }\r\n\r\n\r\n    calcularAreaBaseMenor(){\r\n        return Math.PI * this.raioMenor ** 2;\r\n    }\r\n\r\n\r\n    calcularAreaBaseMaior(){\r\n        return Math.PI * this.raioMaior ** 2;\r\n    }\r\n\r\n\r\n    calcularAreaLateral(){\r\n        const geratriz = this.calcularGeratriz();\r\n\r\n        return Math.PI *\r\n            geratriz *\r\n            (this.raioMaior + this.raioMenor);\r\n    }\r\n\r\n\r\n    calcularVolume(){\r\n        return (\r\n            Math.PI * this.altura / 3\r\n        ) * (\r\n            this.raioMaior ** 2 +\r\n            this.raioMaior * this.raioMenor +\r\n            this.raioMenor ** 2\r\n        );\r\n    }\r\n\r\n\r\n    classificarVolume(){\r\n        const volume = this.calcularVolume();\r\n\r\n        if (volume < 180) {\r\n            return \"Copo dose (cafezinho)\";\r\n        } else if (volume < 350) {\r\n            return \"Copo padrão (Água/Chá)\";\r\n        } else {\r\n            return \"Copo grande (Suco/Refrigerante)\";\r\n        }\r\n    }\r\n\r\n\r\n    calcularAreaTotal(){\r\n        const areaBaseMaior = this.calcularAreaBaseMaior();\r\n        const areaBaseMenor = this.calcularAreaBaseMenor();\r\n        const areaLateral = this.calcularAreaLateral();\r\n        \r\n        return areaBaseMaior + areaBaseMenor + areaLateral;\r\n    }\r\n}\r\n\r\nmodule.exports = Copo;\n\n//# sourceURL=webpack:///./models/Copo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;