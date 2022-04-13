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

/***/ "./resources/src/js/custom/documentation/general/draggable/multiple-containers.js":
/*!****************************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/draggable/multiple-containers.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTDraggableMultiple = function () {\n  // Private functions\n  var exampleMultiple = function exampleMultiple() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleMultiple();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableMultiple.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL211bHRpcGxlLWNvbnRhaW5lcnMuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVc7QUFDakM7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDN0IsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxRQUFJRixVQUFVLENBQUNHLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSUMsU0FBUyxHQUFHLElBQUlDLFFBQVEsV0FBWixDQUFxQkwsVUFBckIsRUFBaUM7QUFDN0NNLE1BQUFBLFNBQVMsRUFBRSxZQURrQztBQUU3Q0MsTUFBQUEsTUFBTSxFQUFFLDhCQUZxQztBQUc3Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQ0o7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLE1BRk47QUFHSkMsUUFBQUEsbUJBQW1CLEVBQUU7QUFIakI7QUFIcUMsS0FBakMsQ0FBaEI7QUFTSCxHQWhCRDs7QUFrQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiWixNQUFBQSxlQUFlO0FBQ2xCO0FBSkUsR0FBUDtBQU1ILENBMUJ5QixFQUExQixFQTRCQTs7O0FBQ0FhLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2YsRUFBQUEsbUJBQW1CLENBQUNhLElBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvbXVsdGlwbGUtY29udGFpbmVycy5qcz81MzI5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1REcmFnZ2FibGVNdWx0aXBsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtem9uZScpO1xyXG5cclxuICAgICAgICBpZiAoY29udGFpbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN3YXBwYWJsZSA9IG5ldyBTb3J0YWJsZS5kZWZhdWx0KGNvbnRhaW5lcnMsIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZScsXHJcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnZ2FibGUgLmRyYWdnYWJsZS1oYW5kbGUnLFxyXG4gICAgICAgICAgICBtaXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIC8vYXBwZW5kVG86IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbkRpbWVuc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlTXVsdGlwbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1REcmFnZ2FibGVNdWx0aXBsZS5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1REcmFnZ2FibGVNdWx0aXBsZSIsImV4YW1wbGVNdWx0aXBsZSIsImNvbnRhaW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzd2FwcGFibGUiLCJTb3J0YWJsZSIsImRyYWdnYWJsZSIsImhhbmRsZSIsIm1pcnJvciIsImFwcGVuZFRvIiwiY29uc3RyYWluRGltZW5zaW9ucyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/multiple-containers.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/draggable/multiple-containers.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;