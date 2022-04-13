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

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/pie.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/pie.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFlotDemoPie = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    var data = [{\n      label: \"CSS\",\n      data: 10,\n      color: KTUtil.getCssVariableValue('--bs-active-primary')\n    }, {\n      label: \"HTML5\",\n      data: 40,\n      color: KTUtil.getCssVariableValue('--bs-active-success')\n    }, {\n      label: \"PHP\",\n      data: 30,\n      color: KTUtil.getCssVariableValue('--bs-active-danger')\n    }, {\n      label: \"Angular\",\n      data: 20,\n      color: KTUtil.getCssVariableValue('--bs-active-warning')\n    }];\n    $.plot($(\"#kt_docs_flot_pie\"), data, {\n      series: {\n        pie: {\n          show: true\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoPie.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3BpZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7QUFDNUI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCLFFBQUlDLElBQUksR0FBRyxDQUNQO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCRCxNQUFBQSxJQUFJLEVBQUUsRUFBdEI7QUFBMEJFLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0I7QUFBakMsS0FETyxFQUVQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCRCxNQUFBQSxJQUFJLEVBQUUsRUFBeEI7QUFBNEJFLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0I7QUFBbkMsS0FGTyxFQUdQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxLQUFUO0FBQWdCRCxNQUFBQSxJQUFJLEVBQUUsRUFBdEI7QUFBMEJFLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixvQkFBM0I7QUFBakMsS0FITyxFQUlQO0FBQUVILE1BQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CRCxNQUFBQSxJQUFJLEVBQUUsRUFBMUI7QUFBOEJFLE1BQUFBLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0I7QUFBckMsS0FKTyxDQUFYO0FBT0FDLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPRCxDQUFDLENBQUMsbUJBQUQsQ0FBUixFQUErQkwsSUFBL0IsRUFBcUM7QUFDakNPLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxHQUFHLEVBQUU7QUFDREMsVUFBQUEsSUFBSSxFQUFFO0FBREw7QUFERDtBQUR5QixLQUFyQztBQU9ILEdBZkQ7O0FBaUJBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZFgsTUFBQUEsVUFBVTtBQUNiO0FBSkUsR0FBUDtBQU1ILENBekJtQixFQUFwQixFQTJCQTs7O0FBQ0FJLE1BQU0sQ0FBQ1Esa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2IsRUFBQUEsYUFBYSxDQUFDWSxJQUFkO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvcGllLmpzP2VjMmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZsb3REZW1vUGllID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlUGllID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkNTU1wiLCBkYXRhOiAxMCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JykgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJIVE1MNVwiLCBkYXRhOiA0MCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1zdWNjZXNzJykgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJQSFBcIiwgZGF0YTogMzAsIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJykgfSxcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJBbmd1bGFyXCIsIGRhdGE6IDIwLCBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXdhcm5pbmcnKSB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgJC5wbG90KCQoXCIja3RfZG9jc19mbG90X3BpZVwiKSwgZGF0YSwge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIHBpZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZVBpZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGbG90RGVtb1BpZS5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGbG90RGVtb1BpZSIsImV4YW1wbGVQaWUiLCJkYXRhIiwibGFiZWwiLCJjb2xvciIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCIkIiwicGxvdCIsInNlcmllcyIsInBpZSIsInNob3ciLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/pie.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/pie.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;