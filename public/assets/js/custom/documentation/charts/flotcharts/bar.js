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

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/bar.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/bar.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFlotDemoBar = function () {\n  // Private functions\n  var exampleBar = function exampleBar() {\n    // horizontal bar chart:\n    var data1 = [[10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90], [100, 100]];\n    var options = {\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary')],\n      series: {\n        bars: {\n          show: true\n        }\n      },\n      bars: {\n        horizontal: true,\n        barWidth: 6,\n        lineWidth: 0,\n        // in pixels\n        shadowSize: 0,\n        align: 'left'\n      },\n      grid: {\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      }\n    };\n    $.plot($(\"#kt_docs_flot_bar\"), [data1], options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBar();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoBar.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL2Jhci5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7QUFDNUI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCO0FBQ04sUUFBSUMsS0FBSyxHQUFHLENBQ1gsQ0FBQyxFQUFELEVBQUssRUFBTCxDQURXLEVBRVgsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUZXLEVBR1gsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhXLEVBSVgsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUpXLEVBS1gsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUxXLEVBTUYsQ0FBQyxFQUFELEVBQUssRUFBTCxDQU5FLEVBT0YsQ0FBQyxFQUFELEVBQUssRUFBTCxDQVBFLEVBUUYsQ0FBQyxFQUFELEVBQUssRUFBTCxDQVJFLEVBU0YsQ0FBQyxFQUFELEVBQUssRUFBTCxDQVRFLEVBVUYsQ0FBQyxHQUFELEVBQU0sR0FBTixDQVZFLENBQVo7QUFhQSxRQUFJQyxPQUFPLEdBQUc7QUFDYkMsTUFBQUEsTUFBTSxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCLENBQUQsQ0FESztBQUViQyxNQUFBQSxNQUFNLEVBQUU7QUFDUEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0xDLFVBQUFBLElBQUksRUFBRTtBQUREO0FBREMsT0FGSztBQU9iRCxNQUFBQSxJQUFJLEVBQUU7QUFDTEUsUUFBQUEsVUFBVSxFQUFFLElBRFA7QUFFTEMsUUFBQUEsUUFBUSxFQUFFLENBRkw7QUFHTEMsUUFBQUEsU0FBUyxFQUFFLENBSE47QUFHUztBQUNkQyxRQUFBQSxVQUFVLEVBQUUsQ0FKUDtBQUtMQyxRQUFBQSxLQUFLLEVBQUU7QUFMRixPQVBPO0FBY2JDLE1BQUFBLElBQUksRUFBRTtBQUNMQyxRQUFBQSxTQUFTLEVBQUVYLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsaUJBQTNCLENBRE47QUFFTFcsUUFBQUEsV0FBVyxFQUFFWixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGlCQUEzQixDQUZSO0FBR0xZLFFBQUFBLFdBQVcsRUFBRTtBQUhSO0FBZE8sS0FBZDtBQXFCQUMsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9ELENBQUMsQ0FBQyxtQkFBRCxDQUFSLEVBQStCLENBQUNqQixLQUFELENBQS9CLEVBQXdDQyxPQUF4QztBQUNHLEdBckNEOztBQXVDQSxTQUFPO0FBQ0g7QUFDQWtCLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkcEIsTUFBQUEsVUFBVTtBQUNiO0FBSkUsR0FBUDtBQU1ILENBL0NtQixFQUFwQixFQWlEQTs7O0FBQ0FJLE1BQU0sQ0FBQ2lCLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN0QixFQUFBQSxhQUFhLENBQUNxQixJQUFkO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvYmFyLmpzPzQ4NzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZsb3REZW1vQmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQmFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGhvcml6b250YWwgYmFyIGNoYXJ0OlxyXG5cdFx0dmFyIGRhdGExID0gW1xyXG5cdFx0XHRbMTAsIDEwXSxcclxuXHRcdFx0WzIwLCAyMF0sXHJcblx0XHRcdFszMCwgMzBdLFxyXG5cdFx0XHRbNDAsIDQwXSxcclxuXHRcdFx0WzUwLCA1MF0sXHJcbiAgICAgICAgICAgIFs2MCwgNjBdLFxyXG4gICAgICAgICAgICBbNzAsIDcwXSxcclxuICAgICAgICAgICAgWzgwLCA4MF0sXHJcbiAgICAgICAgICAgIFs5MCwgOTBdLFxyXG4gICAgICAgICAgICBbMTAwLCAxMDBdLFxyXG5cdFx0XTtcclxuXHJcblx0XHR2YXIgb3B0aW9ucyA9IHtcclxuXHRcdFx0Y29sb3JzOiBbS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXByaW1hcnknKV0sXHJcblx0XHRcdHNlcmllczoge1xyXG5cdFx0XHRcdGJhcnM6IHtcclxuXHRcdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhcnM6IHtcclxuXHRcdFx0XHRob3Jpem9udGFsOiB0cnVlLFxyXG5cdFx0XHRcdGJhcldpZHRoOiA2LFxyXG5cdFx0XHRcdGxpbmVXaWR0aDogMCwgLy8gaW4gcGl4ZWxzXHJcblx0XHRcdFx0c2hhZG93U2l6ZTogMCxcclxuXHRcdFx0XHRhbGlnbjogJ2xlZnQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGdyaWQ6IHtcclxuXHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtbGlnaHQtZGFyaycpLFxyXG5cdFx0XHRcdGJvcmRlcldpZHRoOiAxXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0JC5wbG90KCQoXCIja3RfZG9jc19mbG90X2JhclwiKSwgW2RhdGExXSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZsb3REZW1vQmFyLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZsb3REZW1vQmFyIiwiZXhhbXBsZUJhciIsImRhdGExIiwib3B0aW9ucyIsImNvbG9ycyIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJzZXJpZXMiLCJiYXJzIiwic2hvdyIsImhvcml6b250YWwiLCJiYXJXaWR0aCIsImxpbmVXaWR0aCIsInNoYWRvd1NpemUiLCJhbGlnbiIsImdyaWQiLCJ0aWNrQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiJCIsInBsb3QiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/bar.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/bar.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;