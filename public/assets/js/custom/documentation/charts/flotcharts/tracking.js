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

/***/ "./resources/src/js/custom/documentation/charts/flotcharts/tracking.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/flotcharts/tracking.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFlotDemoTracking = function () {\n  // Private functions\n  var exampleTracking = function exampleTracking() {\n    var sin = [],\n        cos = [];\n\n    for (var i = 0; i < 14; i += 0.1) {\n      sin.push([i, Math.sin(i)]);\n      cos.push([i, Math.cos(i)]);\n    }\n\n    var plot = $.plot($(\"#kt_docs_flot_tracking\"), [{\n      data: sin,\n      label: \"sin(x) = -0.00\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }, {\n      data: cos,\n      label: \"cos(x) = -0.00\",\n      lines: {\n        lineWidth: 1\n      },\n      shadowSize: 0\n    }], {\n      colors: [KTUtil.getCssVariableValue('--bs-active-primary'), KTUtil.getCssVariableValue('--bs-active-warning')],\n      series: {\n        lines: {\n          show: true\n        }\n      },\n      crosshair: {\n        mode: \"x\"\n      },\n      grid: {\n        hoverable: true,\n        autoHighlight: false,\n        tickColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderColor: KTUtil.getCssVariableValue('--bs-light-dark'),\n        borderWidth: 1\n      },\n      yaxis: {\n        min: -1.2,\n        max: 1.2\n      }\n    });\n    var legends = $(\"#kt_docs_flot_tracking .legendLabel\");\n    legends.each(function () {\n      // fix the widths so they don't jump around\n      $(this).css('width', $(this).width());\n    });\n    var updateLegendTimeout = null;\n    var latestPosition = null;\n\n    function updateLegend() {\n      updateLegendTimeout = null;\n      var pos = latestPosition;\n      var axes = plot.getAxes();\n      if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;\n      var i,\n          j,\n          dataset = plot.getData();\n\n      for (i = 0; i < dataset.length; ++i) {\n        var series = dataset[i]; // find the nearest points, x-wise\n\n        for (j = 0; j < series.data.length; ++j) {\n          if (series.data[j][0] > pos.x) break;\n        } // now interpolate\n\n\n        var y,\n            p1 = series.data[j - 1],\n            p2 = series.data[j];\n        if (p1 == null) y = p2[1];else if (p2 == null) y = p1[1];else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);\n        legends.eq(i).text(series.label.replace(/=.*/, \"= \" + y.toFixed(2)));\n      }\n    }\n\n    $(\"#kt_docs_flot_tracking\").bind(\"plothover\", function (event, pos, item) {\n      latestPosition = pos;\n      if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleTracking();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoTracking.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3RyYWNraW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFZO0FBQ2pDO0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCLFFBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsUUFDTEMsR0FBRyxHQUFHLEVBREQ7O0FBRU4sU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksR0FBN0IsRUFBa0M7QUFDakNGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTLENBQUNELENBQUQsRUFBSUUsSUFBSSxDQUFDSixHQUFMLENBQVNFLENBQVQsQ0FBSixDQUFUO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLENBQUNELENBQUQsRUFBSUUsSUFBSSxDQUFDSCxHQUFMLENBQVNDLENBQVQsQ0FBSixDQUFUO0FBQ0E7O0FBRUQsUUFBSUcsSUFBSSxHQUFHQyxDQUFDLENBQUNELElBQUYsQ0FBT0MsQ0FBQyxDQUFDLHdCQUFELENBQVIsRUFBb0MsQ0FBQztBQUMvQ0MsTUFBQUEsSUFBSSxFQUFFUCxHQUR5QztBQUUvQ1EsTUFBQUEsS0FBSyxFQUFFLGdCQUZ3QztBQUcvQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQ05DLFFBQUFBLFNBQVMsRUFBRTtBQURMLE9BSHdDO0FBTS9DQyxNQUFBQSxVQUFVLEVBQUU7QUFObUMsS0FBRCxFQU81QztBQUNGSixNQUFBQSxJQUFJLEVBQUVOLEdBREo7QUFFRk8sTUFBQUEsS0FBSyxFQUFFLGdCQUZMO0FBR0ZDLE1BQUFBLEtBQUssRUFBRTtBQUNOQyxRQUFBQSxTQUFTLEVBQUU7QUFETCxPQUhMO0FBTUZDLE1BQUFBLFVBQVUsRUFBRTtBQU5WLEtBUDRDLENBQXBDLEVBY1A7QUFDSEMsTUFB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b3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy90cmFja2luZy5qcz84NzY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGbG90RGVtb1RyYWNraW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlVHJhY2tpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IFtdLFxyXG5cdFx0XHRjb3MgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTQ7IGkgKz0gMC4xKSB7XHJcblx0XHRcdHNpbi5wdXNoKFtpLCBNYXRoLnNpbihpKV0pO1xyXG5cdFx0XHRjb3MucHVzaChbaSwgTWF0aC5jb3MoaSldKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcGxvdCA9ICQucGxvdCgkKFwiI2t0X2RvY3NfZmxvdF90cmFja2luZ1wiKSwgW3tcclxuXHRcdFx0ZGF0YTogc2luLFxyXG5cdFx0XHRsYWJlbDogXCJzaW4oeCkgPSAtMC4wMFwiLFxyXG5cdFx0XHRsaW5lczoge1xyXG5cdFx0XHRcdGxpbmVXaWR0aDogMSxcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hhZG93U2l6ZTogMFxyXG5cdFx0fSwge1xyXG5cdFx0XHRkYXRhOiBjb3MsXHJcblx0XHRcdGxhYmVsOiBcImNvcyh4KSA9IC0wLjAwXCIsXHJcblx0XHRcdGxpbmVzOiB7XHJcblx0XHRcdFx0bGluZVdpZHRoOiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaGFkb3dTaXplOiAwXHJcblx0XHR9XSwge1xyXG5cdFx0XHRjb2xvcnM6IFtLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtcHJpbWFyeScpLCBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtd2FybmluZycpXSxcclxuXHRcdFx0c2VyaWVzOiB7XHJcblx0XHRcdFx0bGluZXM6IHtcclxuXHRcdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNyb3NzaGFpcjoge1xyXG5cdFx0XHRcdG1vZGU6IFwieFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGdyaWQ6IHtcclxuXHRcdFx0XHRob3ZlcmFibGU6IHRydWUsXHJcblx0XHRcdFx0YXV0b0hpZ2hsaWdodDogZmFsc2UsXHJcblx0XHRcdFx0dGlja0NvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYXJrJyksXHJcblx0XHRcdFx0Ym9yZGVyQ29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWRhcmsnKSxcclxuXHRcdFx0XHRib3JkZXJXaWR0aDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR5YXhpczoge1xyXG5cdFx0XHRcdG1pbjogLTEuMixcclxuXHRcdFx0XHRtYXg6IDEuMlxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR2YXIgbGVnZW5kcyA9ICQoXCIja3RfZG9jc19mbG90X3RyYWNraW5nIC5sZWdlbmRMYWJlbFwiKTtcclxuXHRcdGxlZ2VuZHMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gZml4IHRoZSB3aWR0aHMgc28gdGhleSBkb24ndCBqdW1wIGFyb3VuZFxyXG5cdFx0XHQkKHRoaXMpLmNzcygnd2lkdGgnLCAkKHRoaXMpLndpZHRoKCkpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmFyIHVwZGF0ZUxlZ2VuZFRpbWVvdXQgPSBudWxsO1xyXG5cdFx0dmFyIGxhdGVzdFBvc2l0aW9uID0gbnVsbDtcclxuXHJcblx0XHRmdW5jdGlvbiB1cGRhdGVMZWdlbmQoKSB7XHJcblx0XHRcdHVwZGF0ZUxlZ2VuZFRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0dmFyIHBvcyA9IGxhdGVzdFBvc2l0aW9uO1xyXG5cclxuXHRcdFx0dmFyIGF4ZXMgPSBwbG90LmdldEF4ZXMoKTtcclxuXHRcdFx0aWYgKHBvcy54IDwgYXhlcy54YXhpcy5taW4gfHwgcG9zLnggPiBheGVzLnhheGlzLm1heCB8fCBwb3MueSA8IGF4ZXMueWF4aXMubWluIHx8IHBvcy55ID4gYXhlcy55YXhpcy5tYXgpIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBpLCBqLCBkYXRhc2V0ID0gcGxvdC5nZXREYXRhKCk7XHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhc2V0Lmxlbmd0aDsgKytpKSB7XHJcblx0XHRcdFx0dmFyIHNlcmllcyA9IGRhdGFzZXRbaV07XHJcblxyXG5cdFx0XHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgcG9pbnRzLCB4LXdpc2VcclxuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgc2VyaWVzLmRhdGEubGVuZ3RoOyArK2opXHJcblx0XHRcdFx0XHRpZiAoc2VyaWVzLmRhdGFbal1bMF0gPiBwb3MueCkgYnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vIG5vdyBpbnRlcnBvbGF0ZVxyXG5cdFx0XHRcdHZhciB5LCBwMSA9IHNlcmllcy5kYXRhW2ogLSAxXSxcclxuXHRcdFx0XHRcdHAyID0gc2VyaWVzLmRhdGFbal07XHJcblxyXG5cdFx0XHRcdGlmIChwMSA9PSBudWxsKSB5ID0gcDJbMV07XHJcblx0XHRcdFx0ZWxzZSBpZiAocDIgPT0gbnVsbCkgeSA9IHAxWzFdO1xyXG5cdFx0XHRcdGVsc2UgeSA9IHAxWzFdICsgKHAyWzFdIC0gcDFbMV0pICogKHBvcy54IC0gcDFbMF0pIC8gKHAyWzBdIC0gcDFbMF0pO1xyXG5cclxuXHRcdFx0XHRsZWdlbmRzLmVxKGkpLnRleHQoc2VyaWVzLmxhYmVsLnJlcGxhY2UoLz0uKi8sIFwiPSBcIiArIHkudG9GaXhlZCgyKSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0JChcIiNrdF9kb2NzX2Zsb3RfdHJhY2tpbmdcIikuYmluZChcInBsb3Rob3ZlclwiLCBmdW5jdGlvbihldmVudCwgcG9zLCBpdGVtKSB7XHJcblx0XHRcdGxhdGVzdFBvc2l0aW9uID0gcG9zO1xyXG5cdFx0XHRpZiAoIXVwZGF0ZUxlZ2VuZFRpbWVvdXQpIHVwZGF0ZUxlZ2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZUxlZ2VuZCwgNTApO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlVHJhY2tpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtURmxvdERlbW9UcmFja2luZy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGbG90RGVtb1RyYWNraW5nIiwiZXhhbXBsZVRyYWNraW5nIiwic2luIiwiY29zIiwiaSIsInB1c2giLCJNYXRoIiwicGxvdCIsIiQiLCJkYXRhIiwibGFiZWwiLCJsaW5lcyIsImxpbmVXaWR0aCIsInNoYWRvd1NpemUiLCJjb2xvcnMiLCJLVFV0aWwiLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwic2VyaWVzIiwic2hvdyIsImNyb3NzaGFpciIsIm1vZGUiLCJncmlkIiwiaG92ZXJhYmxlIiwiYXV0b0hpZ2hsaWdodCIsInRpY2tDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ5YXhpcyIsIm1pbiIsIm1heCIsImxlZ2VuZHMiLCJlYWNoIiwiY3NzIiwid2lkdGgiLCJ1cGRhdGVMZWdlbmRUaW1lb3V0IiwibGF0ZXN0UG9zaXRpb24iLCJ1cGRhdGVMZWdlbmQiLCJwb3MiLCJheGVzIiwiZ2V0QXhlcyIsIngiLCJ4YXhpcyIsInkiLCJqIiwiZGF0YXNldCIsImdldERhdGEiLCJsZW5ndGgiLCJwMSIsInAyIiwiZXEiLCJ0ZXh0IiwicmVwbGFjZSIsInRvRml4ZWQiLCJiaW5kIiwiZXZlbnQiLCJpdGVtIiwic2V0VGltZW91dCIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/flotcharts/tracking.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/flotcharts/tracking.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;