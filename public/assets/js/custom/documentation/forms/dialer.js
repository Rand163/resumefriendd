/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/dialer.js":
/*!***************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/dialer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsDialerDemos = function () {\n  // Private functions\n  var example1 = function example1(element) {\n    // Dialer container element\n    var dialerElement = document.querySelector(\"#kt_dialer_example_1\"); // Create dialer object and initialize a new instance\n\n    var dialerObject = new KTDialer(dialerElement, {\n      min: 1000,\n      max: 50000,\n      step: 1000,\n      prefix: \"$\",\n      decimals: 2\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsDialerDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2RpYWxlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztBQUNoQztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLE9BQVQsRUFBa0I7QUFDN0I7QUFDQSxRQUFJQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBcEIsQ0FGNkIsQ0FJN0I7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHLElBQUlDLFFBQUosQ0FBYUosYUFBYixFQUE0QjtBQUMzQ0ssTUFBQUEsR0FBRyxFQUFFLElBRHNDO0FBRTNDQyxNQUFBQSxHQUFHLEVBQUUsS0FGc0M7QUFHM0NDLE1BQUFBLElBQUksRUFBRSxJQUhxQztBQUkzQ0MsTUFBQUEsTUFBTSxFQUFFLEdBSm1DO0FBSzNDQyxNQUFBQSxRQUFRLEVBQUU7QUFMaUMsS0FBNUIsQ0FBbkI7QUFPSCxHQVpEOztBQWNBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsY0FBU1gsT0FBVCxFQUFrQjtBQUNwQkQsTUFBQUEsUUFBUTtBQUNYO0FBSkUsR0FBUDtBQU1ILENBdEJ3QixFQUF6QixFQXdCQTs7O0FBQ0FhLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2YsRUFBQUEsa0JBQWtCLENBQUNhLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZGlhbGVyLmpzPzVmYTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zRGlhbGVyRGVtb3MgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgLy8gRGlhbGVyIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICAgICAgdmFyIGRpYWxlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2RpYWxlcl9leGFtcGxlXzFcIik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBkaWFsZXIgb2JqZWN0IGFuZCBpbml0aWFsaXplIGEgbmV3IGluc3RhbmNlXHJcbiAgICAgICAgdmFyIGRpYWxlck9iamVjdCA9IG5ldyBLVERpYWxlcihkaWFsZXJFbGVtZW50LCB7XHJcbiAgICAgICAgICAgIG1pbjogMTAwMCxcclxuICAgICAgICAgICAgbWF4OiA1MDAwMCxcclxuICAgICAgICAgICAgc3RlcDogMTAwMCxcclxuICAgICAgICAgICAgcHJlZml4OiBcIiRcIixcclxuICAgICAgICAgICAgZGVjaW1hbHM6IDJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURm9ybXNEaWFsZXJEZW1vcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc0RpYWxlckRlbW9zIiwiZXhhbXBsZTEiLCJlbGVtZW50IiwiZGlhbGVyRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRpYWxlck9iamVjdCIsIktURGlhbGVyIiwibWluIiwibWF4Iiwic3RlcCIsInByZWZpeCIsImRlY2ltYWxzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/dialer.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/dialer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;