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

/***/ "./resources/src/js/custom/documentation/forms/formrepeater/nested.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formrepeater/nested.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormRepeaterNested = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_nested').repeater({\n      // (Required if there is a nested repeater)\n      // Specify the configuration of the nested repeaters.\n      // Nested configuration follows the same format as the base configuration,\n      // supporting options \"defaultValues\", \"show\", \"hide\", etc.\n      // Nested repeaters additionally require a \"selector\" field.\n      repeaters: [{\n        // (Required)\n        // Specify the jQuery selector for this nested repeater\n        selector: '.inner-repeater',\n        show: function show() {\n          $(this).slideDown();\n        },\n        hide: function hide(deleteElement) {\n          $(this).slideUp(deleteElement);\n        }\n      }],\n      show: function show() {\n        $(this).slideDown();\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterNested.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9uZXN0ZWQuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVc7QUFDbEM7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFXO0FBQ3RCQyxJQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkMsUUFBOUIsQ0FBdUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxNQUFBQSxTQUFTLEVBQUUsQ0FBQztBQUNSO0FBQ0E7QUFDQUMsUUFBQUEsUUFBUSxFQUFFLGlCQUhGO0FBSVJDLFFBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkSixVQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLFNBQVI7QUFDSCxTQU5PO0FBUVJDLFFBQUFBLElBQUksRUFBRSxjQUFVQyxhQUFWLEVBQXlCO0FBQzNCUCxVQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLE9BQVIsQ0FBZ0JELGFBQWhCO0FBQ0g7QUFWTyxPQUFELENBTndCO0FBbUJuQ0gsTUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RKLFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssU0FBUjtBQUNILE9BckJrQztBQXVCbkNDLE1BQUFBLElBQUksRUFBRSxjQUFVQyxhQUFWLEVBQXlCO0FBQzNCUCxRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLE9BQVIsQ0FBZ0JELGFBQWhCO0FBQ0g7QUF6QmtDLEtBQXZDO0FBMkJILEdBNUJEOztBQThCQSxTQUFPO0FBQ0g7QUFDQUUsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JWLE1BQUFBLFFBQVE7QUFDWDtBQUpFLEdBQVA7QUFNSCxDQXRDMEIsRUFBM0IsRUF3Q0E7OztBQUNBVyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNiLEVBQUFBLG9CQUFvQixDQUFDVyxJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9uZXN0ZWQuanM/MGFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybVJlcGVhdGVyTmVzdGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI2t0X2RvY3NfcmVwZWF0ZXJfbmVzdGVkJykucmVwZWF0ZXIoe1xyXG4gICAgICAgICAgICAvLyAoUmVxdWlyZWQgaWYgdGhlcmUgaXMgYSBuZXN0ZWQgcmVwZWF0ZXIpXHJcbiAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIG5lc3RlZCByZXBlYXRlcnMuXHJcbiAgICAgICAgICAgIC8vIE5lc3RlZCBjb25maWd1cmF0aW9uIGZvbGxvd3MgdGhlIHNhbWUgZm9ybWF0IGFzIHRoZSBiYXNlIGNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgIC8vIHN1cHBvcnRpbmcgb3B0aW9ucyBcImRlZmF1bHRWYWx1ZXNcIiwgXCJzaG93XCIsIFwiaGlkZVwiLCBldGMuXHJcbiAgICAgICAgICAgIC8vIE5lc3RlZCByZXBlYXRlcnMgYWRkaXRpb25hbGx5IHJlcXVpcmUgYSBcInNlbGVjdG9yXCIgZmllbGQuXHJcbiAgICAgICAgICAgIHJlcGVhdGVyczogW3tcclxuICAgICAgICAgICAgICAgIC8vIChSZXF1aXJlZClcclxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIGpRdWVyeSBzZWxlY3RvciBmb3IgdGhpcyBuZXN0ZWQgcmVwZWF0ZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmlubmVyLXJlcGVhdGVyJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24gKGRlbGV0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoZGVsZXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uIChkZWxldGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoZGVsZXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZTEoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RGb3JtUmVwZWF0ZXJOZXN0ZWQuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybVJlcGVhdGVyTmVzdGVkIiwiZXhhbXBsZTEiLCIkIiwicmVwZWF0ZXIiLCJyZXBlYXRlcnMiLCJzZWxlY3RvciIsInNob3ciLCJzbGlkZURvd24iLCJoaWRlIiwiZGVsZXRlRWxlbWVudCIsInNsaWRlVXAiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/nested.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formrepeater/nested.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;