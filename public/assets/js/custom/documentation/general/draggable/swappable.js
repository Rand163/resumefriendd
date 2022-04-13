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

/***/ "./resources/src/js/custom/documentation/general/draggable/swappable.js":
/*!******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/draggable/swappable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTDraggableSwappable = function () {\n  // Private functions\n  var exampleSwappable = function exampleSwappable() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Swappable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleSwappable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableSwappable.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3N3YXBwYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBVztBQUNsQztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBVztBQUM5QixRQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWpCOztBQUVBLFFBQUlGLFVBQVUsQ0FBQ0csTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUN6QixhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJQyxTQUFTLEdBQUcsSUFBSUMsU0FBUyxXQUFiLENBQXNCTCxVQUF0QixFQUFrQztBQUM5Q00sTUFBQUEsU0FBUyxFQUFFLFlBRG1DO0FBRTlDQyxNQUFBQSxNQUFNLEVBQUUsOEJBRnNDO0FBRzlDQyxNQUFBQSxNQUFNLEVBQUU7QUFDSjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsTUFGTjtBQUdKQyxRQUFBQSxtQkFBbUIsRUFBRTtBQUhqQjtBQUhzQyxLQUFsQyxDQUFoQjtBQVNILEdBaEJEOztBQWtCQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JaLE1BQUFBLGdCQUFnQjtBQUNuQjtBQUpFLEdBQVA7QUFNSCxDQTFCMEIsRUFBM0IsRUE0QkE7OztBQUNBYSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNmLEVBQUFBLG9CQUFvQixDQUFDYSxJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3N3YXBwYWJsZS5qcz82N2ViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1REcmFnZ2FibGVTd2FwcGFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZVN3YXBwYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdnYWJsZS16b25lJyk7XHJcblxyXG4gICAgICAgIGlmIChjb250YWluZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3dhcHBhYmxlID0gbmV3IFN3YXBwYWJsZS5kZWZhdWx0KGNvbnRhaW5lcnMsIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZScsXHJcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnZ2FibGUgLmRyYWdnYWJsZS1oYW5kbGUnLFxyXG4gICAgICAgICAgICBtaXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIC8vYXBwZW5kVG86IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbkRpbWVuc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlU3dhcHBhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURHJhZ2dhYmxlU3dhcHBhYmxlLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZVN3YXBwYWJsZSIsImV4YW1wbGVTd2FwcGFibGUiLCJjb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic3dhcHBhYmxlIiwiU3dhcHBhYmxlIiwiZHJhZ2dhYmxlIiwiaGFuZGxlIiwibWlycm9yIiwiYXBwZW5kVG8iLCJjb25zdHJhaW5EaW1lbnNpb25zIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/swappable.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/draggable/swappable.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;