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

/***/ "./resources/src/js/custom/documentation/forms/formrepeater/basic.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formrepeater/basic.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormRepeaterBasic = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_basic').repeater({\n      initEmpty: false,\n      defaultValues: {\n        'text-input': 'foo'\n      },\n      show: function show() {\n        $(this).slideDown();\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsbUJBQW1CLEdBQUcsWUFBWTtBQUNsQztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkJDLElBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxRQUE3QixDQUFzQztBQUNsQ0MsTUFBQUEsU0FBUyxFQUFFLEtBRHVCO0FBR2xDQyxNQUFBQSxhQUFhLEVBQUU7QUFDWCxzQkFBYztBQURILE9BSG1CO0FBT2xDQyxNQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZEosUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxTQUFSO0FBQ0gsT0FUaUM7QUFXbENDLE1BQUFBLElBQUksRUFBRSxjQUFVQyxhQUFWLEVBQXlCO0FBQzNCUCxRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLE9BQVIsQ0FBZ0JELGFBQWhCO0FBQ0g7QUFiaUMsS0FBdEM7QUFlSCxHQWhCRDs7QUFrQkEsU0FBTztBQUNIO0FBQ0FFLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkVixNQUFBQSxRQUFRO0FBQ1g7QUFKRSxHQUFQO0FBTUgsQ0ExQnlCLEVBQTFCLEVBNEJBOzs7QUFDQVcsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDYixFQUFBQSxtQkFBbUIsQ0FBQ1csSUFBcEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9mb3JtcmVwZWF0ZXIvYmFzaWMuanM/MWU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybVJlcGVhdGVyQmFzaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNrdF9kb2NzX3JlcGVhdGVyX2Jhc2ljJykucmVwZWF0ZXIoe1xyXG4gICAgICAgICAgICBpbml0RW1wdHk6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlczoge1xyXG4gICAgICAgICAgICAgICAgJ3RleHQtaW5wdXQnOiAnZm9vJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uIChkZWxldGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoZGVsZXRlRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZvcm1SZXBlYXRlckJhc2ljLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1SZXBlYXRlckJhc2ljIiwiZXhhbXBsZTEiLCIkIiwicmVwZWF0ZXIiLCJpbml0RW1wdHkiLCJkZWZhdWx0VmFsdWVzIiwic2hvdyIsInNsaWRlRG93biIsImhpZGUiLCJkZWxldGVFbGVtZW50Iiwic2xpZGVVcCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/basic.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formrepeater/basic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;