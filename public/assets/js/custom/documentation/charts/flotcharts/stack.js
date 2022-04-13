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

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/stack.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/stack.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFlotDemoStack = function () {\n  // Private functions\n  var exampleStack = function exampleStack() {\n    var d1 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d1.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var d2 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d2.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var d3 = [];\n\n    for (var i = 0; i <= 10; i += 1) {\n      d3.push([i, parseInt(Math.random() * 30)]);\n    }\n\n    var stack = 0,\n        bars = true,\n        lines = false,\n        steps = false;\n\n    function plotWithOptions() {\n      $.plot($(\"#kt_docs_flot_stack\"), [{\n        label: \"sales\",\n        data: d1,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }, {\n        label: \"tax\",\n        data: d2,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }, {\n        label: \"profit\",\n        data: d3,\n        lines: {\n          lineWidth: 1\n        },\n        shadowSize: 0\n      }], {\n        colors: [KTUtil.getCssVariableValue('--bs-active-danger'), KTUtil.getCssVariableValue('--bs-active-primary')],\n        series: {\n          stack: stack,\n          lines: {\n            show: lines,\n            fill: true,\n            steps: steps,\n            lineWidth: 0 // in pixels\n\n          },\n          bars: {\n            show: bars,\n            barWidth: 0.5,\n            lineWidth: 0,\n            // in pixels\n            shadowSize: 0,\n            align: 'center'\n          }\n        },\n        grid: {\n          tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n          borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n          borderWidth: 1\n        }\n      });\n    }\n\n    $(\".stackControls input\").click(function (e) {\n      e.preventDefault();\n      stack = $(this).val() == \"With stacking\" ? true : null;\n      plotWithOptions();\n    });\n    $(\".graphControls input\").click(function (e) {\n      e.preventDefault();\n      bars = $(this).val().indexOf(\"Bars\") != -1;\n      lines = $(this).val().indexOf(\"Lines\") != -1;\n      steps = $(this).val().indexOf(\"steps\") != -1;\n      plotWithOptions();\n    });\n    plotWithOptions();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleStack();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoStack.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3N0YWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDM0IsUUFBSUMsRUFBRSxHQUFHLEVBQVQ7O0FBQ04sU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLEVBQXJCLEVBQXlCQSxDQUFDLElBQUksQ0FBOUI7QUFDQ0QsTUFBQUEsRUFBRSxDQUFDRSxJQUFILENBQVEsQ0FBQ0QsQ0FBRCxFQUFJRSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixFQUFqQixDQUFaLENBQVI7QUFERDs7QUFHQSxRQUFJQyxFQUFFLEdBQUcsRUFBVDs7QUFDQSxTQUFLLElBQUlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksRUFBckIsRUFBeUJBLENBQUMsSUFBSSxDQUE5QjtBQUNDSyxNQUFBQSxFQUFFLENBQUNKLElBQUgsQ0FBUSxDQUFDRCxDQUFELEVBQUlFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEVBQWpCLENBQVosQ0FBUjtBQUREOztBQUdBLFFBQUlFLEVBQUUsR0FBRyxFQUFUOztBQUNBLFNBQUssSUFBSU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxFQUFyQixFQUF5QkEsQ0FBQyxJQUFJLENBQTlCO0FBQ0NNLE1BQUFBLEVBQUUsQ0FBQ0wsSUFBSCxDQUFRLENBQUNELENBQUQsRUFBSUUsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBakIsQ0FBWixDQUFSO0FBREQ7O0FBR0EsUUFBSUcsS0FBSyxHQUFHLENBQVo7QUFBQSxRQUNDQyxJQUFJLEdBQUcsSUFEUjtBQUFBLFFBRUNDLEtBQUssR0FBRyxLQUZUO0FBQUEsUUFHQ0MsS0FB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QixLQUFrQyxDQUFDLENBQTNDO0FBQ0F2QixNQUFBQSxlQUFlO0FBQ2YsS0FORDtBQVFBQSxJQUFBQSxlQUFlO0FBQ1osR0FwRkQ7O0FBc0ZBLFNBQU87QUFDSDtBQUNBd0IsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RyQyxNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0E5RnFCLEVBQXRCLEVBZ0dBOzs7QUFDQXFCLE1BQU0sQ0FBQ2lCLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN2QyxFQUFBQSxlQUFlLENBQUNzQyxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3N0YWNrLmpzP2M3NDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZsb3REZW1vU3RhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVTdGFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZDEgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpXHJcblx0XHRcdGQxLnB1c2goW2ksIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCldKTtcclxuXHJcblx0XHR2YXIgZDIgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpXHJcblx0XHRcdGQyLnB1c2goW2ksIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCldKTtcclxuXHJcblx0XHR2YXIgZDMgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpXHJcblx0XHRcdGQzLnB1c2goW2ksIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCldKTtcclxuXHJcblx0XHR2YXIgc3RhY2sgPSAwLFxyXG5cdFx0XHRiYXJzID0gdHJ1ZSxcclxuXHRcdFx0bGluZXMgPSBmYWxzZSxcclxuXHRcdFx0c3RlcHMgPSBmYWxzZTtcclxuXHJcblx0XHRmdW5jdGlvbiBwbG90V2l0aE9wdGlvbnMoKSB7XHJcblx0XHRcdCQucGxvdCgkKFwiI2t0X2RvY3NfZmxvdF9zdGFja1wiKSxcclxuXHJcblx0XHRcdFx0W3tcclxuXHRcdFx0XHRcdGxhYmVsOiBcInNhbGVzXCIsXHJcblx0XHRcdFx0XHRkYXRhOiBkMSxcclxuXHRcdFx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzaGFkb3dTaXplOiAwXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bGFiZWw6IFwidGF4XCIsXHJcblx0XHRcdFx0XHRkYXRhOiBkMixcclxuXHRcdFx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzaGFkb3dTaXplOiAwXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bGFiZWw6IFwicHJvZml0XCIsXHJcblx0XHRcdFx0XHRkYXRhOiBkMyxcclxuXHRcdFx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzaGFkb3dTaXplOiAwXHJcblx0XHRcdFx0fV0sIHtcclxuXHRcdFx0XHRcdGNvbG9yczogW0tUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYW5nZXInKSwgS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXByaW1hcnknKV0sXHJcblx0XHRcdFx0XHRzZXJpZXM6IHtcclxuXHRcdFx0XHRcdFx0c3RhY2s6IHN0YWNrLFxyXG5cdFx0XHRcdFx0XHRsaW5lczoge1xyXG5cdFx0XHRcdFx0XHRcdHNob3c6IGxpbmVzLFxyXG5cdFx0XHRcdFx0XHRcdGZpbGw6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0c3RlcHM6IHN0ZXBzLFxyXG5cdFx0XHRcdFx0XHRcdGxpbmVXaWR0aDogMCwgLy8gaW4gcGl4ZWxzXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGJhcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRzaG93OiBiYXJzLFxyXG5cdFx0XHRcdFx0XHRcdGJhcldpZHRoOiAwLjUsXHJcblx0XHRcdFx0XHRcdFx0bGluZVdpZHRoOiAwLCAvLyBpbiBwaXhlbHNcclxuXHRcdFx0XHRcdFx0XHRzaGFkb3dTaXplOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiAnY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Z3JpZDoge1xyXG5cdFx0XHRcdFx0XHR0aWNrQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0JChcIi5zdGFja0NvbnRyb2xzIGlucHV0XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzdGFjayA9ICQodGhpcykudmFsKCkgPT0gXCJXaXRoIHN0YWNraW5nXCIgPyB0cnVlIDogbnVsbDtcclxuXHRcdFx0cGxvdFdpdGhPcHRpb25zKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLmdyYXBoQ29udHJvbHMgaW5wdXRcIikuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJhcnMgPSAkKHRoaXMpLnZhbCgpLmluZGV4T2YoXCJCYXJzXCIpICE9IC0xO1xyXG5cdFx0XHRsaW5lcyA9ICQodGhpcykudmFsKCkuaW5kZXhPZihcIkxpbmVzXCIpICE9IC0xO1xyXG5cdFx0XHRzdGVwcyA9ICQodGhpcykudmFsKCkuaW5kZXhPZihcInN0ZXBzXCIpICE9IC0xO1xyXG5cdFx0XHRwbG90V2l0aE9wdGlvbnMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBsb3RXaXRoT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZVN0YWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZsb3REZW1vU3RhY2suaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURmxvdERlbW9TdGFjayIsImV4YW1wbGVTdGFjayIsImQxIiwiaSIsInB1c2giLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJkMiIsImQzIiwic3RhY2siLCJiYXJzIiwibGluZXMiLCJzdGVwcyIsInBsb3RXaXRoT3B0aW9ucyIsIiQiLCJwbG90IiwibGFiZWwiLCJkYXRhIiwibGluZVdpZHRoIiwic2hhZG93U2l6ZSIsImNvbG9ycyIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJzZXJpZXMiLCJzaG93IiwiZmlsbCIsImJhcldpZHRoIiwiYWxpZ24iLCJncmlkIiwidGlja0NvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsIiwiaW5kZXhPZiIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/stack.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/stack.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;