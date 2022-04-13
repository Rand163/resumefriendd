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

/***/ "./resources/src/js/custom/documentation/charts/google-charts/pie.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/google-charts/pie.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTGoogleChartPieDemo = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      var data = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]);\n      var options = {\n        title: 'My Daily Activities',\n        colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      };\n      var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      chart.draw(data, options); // Example of a doughnut chart\n      // var options = {\n      //     pieHole: 0.4,\n      //     colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      // };\n      // var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      // chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartPieDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL3BpZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBWTtBQUNuQztBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE2QixHQUE3QixFQUFrQztBQUM5QkMsTUFBQUEsUUFBUSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckI7QUFEb0IsS0FBbEM7QUFJQUYsSUFBQUEsTUFBTSxDQUFDRyxpQkFBUCxDQUF5QixZQUFZO0FBQ2pDLFVBQUlDLElBQUksR0FBR0osTUFBTSxDQUFDSyxhQUFQLENBQXFCQyxnQkFBckIsQ0FBc0MsQ0FDN0MsQ0FBQyxNQUFELEVBQVMsZUFBVCxDQUQ2QyxFQUU3QyxDQUFDLE1BQUQsRUFBUyxFQUFULENBRjZDLEVBRzdDLENBQUMsS0FBRCxFQUFRLENBQVIsQ0FINkMsRUFJN0MsQ0FBQyxTQUFELEVBQVksQ0FBWixDQUo2QyxFQUs3QyxDQUFDLFVBQUQsRUFBYSxDQUFiLENBTDZDLEVBTTdDLENBQUMsT0FBRCxFQUFVLENBQVYsQ0FONkMsQ0FBdEMsQ0FBWDtBQVNBLFVBQUlDLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxLQUFLLEVBQUUscUJBREc7QUFFVkMsUUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsRUFBd0QsU0FBeEQ7QUFGRSxPQUFkO0FBS0EsVUFBSUMsS0FBSyxHQUFHLElBQUlWLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQk0sUUFBekIsQ0FBa0NDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwwQkFBeEIsQ0FBbEMsQ0FBWjtBQUNBSCxNQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV1YsSUFBWCxFQUFpQkcsT0FBakIsRUFoQmlDLENBa0JqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNILEtBMUJEO0FBMkJILEdBakNEOztBQW1DQSxTQUFPO0FBQ0g7QUFDQVEsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RoQixNQUFBQSxVQUFVO0FBQ2I7QUFKRSxHQUFQO0FBTUgsQ0EzQzBCLEVBQTNCLEVBNkNBOzs7QUFDQWlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ25CLEVBQUFBLG9CQUFvQixDQUFDaUIsSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZ29vZ2xlLWNoYXJ0cy9waWUuanM/ZDM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUR29vZ2xlQ2hhcnRQaWVEZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlUGllID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdPT0dMRSBDSEFSVFMgSU5JVFxyXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XHJcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdiYXInLCAnbGluZSddXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gZ29vZ2xlLnZpc3VhbGl6YXRpb24uYXJyYXlUb0RhdGFUYWJsZShbXHJcbiAgICAgICAgICAgICAgICBbJ1Rhc2snLCAnSG91cnMgcGVyIERheSddLFxyXG4gICAgICAgICAgICAgICAgWydXb3JrJywgMTFdLFxyXG4gICAgICAgICAgICAgICAgWydFYXQnLCAyXSxcclxuICAgICAgICAgICAgICAgIFsnQ29tbXV0ZScsIDJdLFxyXG4gICAgICAgICAgICAgICAgWydXYXRjaCBUVicsIDJdLFxyXG4gICAgICAgICAgICAgICAgWydTbGVlcCcsIDddXHJcbiAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ015IERhaWx5IEFjdGl2aXRpZXMnLFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyNmZTM5OTUnLCAnI2Y2YWEzMycsICcjNmU0ZmY1JywgJyMyYWJlODEnLCAnI2M3ZDJlNycsICcjNTkzYWUxJ11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfcGllJykpO1xyXG4gICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBhIGRvdWdobnV0IGNoYXJ0XHJcbiAgICAgICAgICAgIC8vIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgcGllSG9sZTogMC40LFxyXG4gICAgICAgICAgICAvLyAgICAgY29sb3JzOiBbJyNmZTM5OTUnLCAnI2Y2YWEzMycsICcjNmU0ZmY1JywgJyMyYWJlODEnLCAnI2M3ZDJlNycsICcjNTkzYWUxJ11cclxuICAgICAgICAgICAgLy8gfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfcGllJykpO1xyXG4gICAgICAgICAgICAvLyBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZVBpZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RHb29nbGVDaGFydFBpZURlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUR29vZ2xlQ2hhcnRQaWVEZW1vIiwiZXhhbXBsZVBpZSIsImdvb2dsZSIsImxvYWQiLCJwYWNrYWdlcyIsInNldE9uTG9hZENhbGxiYWNrIiwiZGF0YSIsInZpc3VhbGl6YXRpb24iLCJhcnJheVRvRGF0YVRhYmxlIiwib3B0aW9ucyIsInRpdGxlIiwiY29sb3JzIiwiY2hhcnQiLCJQaWVDaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/google-charts/pie.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/google-charts/pie.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;