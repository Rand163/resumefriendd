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

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/basic.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/basic.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTVisTimelineBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    // DOM element where the Timeline will be attached\n    var container = document.getElementById(\"kt_docs_vistimeline_basic\"); // Create a DataSet (allows two way data-binding)\n\n    var items = new vis.DataSet([{\n      id: 1,\n      content: \"item 1\",\n      start: \"2021-04-20\"\n    }, {\n      id: 2,\n      content: \"item 2\",\n      start: \"2021-04-14\"\n    }, {\n      id: 3,\n      content: \"item 3\",\n      start: \"2021-04-18\"\n    }, {\n      id: 4,\n      content: \"item 4\",\n      start: \"2021-04-16\",\n      end: \"2021-04-19\"\n    }, {\n      id: 5,\n      content: \"item 5\",\n      start: \"2021-04-25\"\n    }, {\n      id: 6,\n      content: \"item 6\",\n      start: \"2021-04-27\",\n      type: \"point\"\n    }]); // Configuration for the Timeline\n\n    var options = {}; // Create a Timeline\n\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFZO0FBQ2pDO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMzQjtBQUNBLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUFoQixDQUYyQixDQUkzQjs7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsR0FBRyxDQUFDQyxPQUFSLENBQWdCLENBQ3hCO0FBQUVDLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBRHdCLEVBRXhCO0FBQUVGLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBRndCLEVBR3hCO0FBQUVGLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBSHdCLEVBSXhCO0FBQUVGLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkMsTUFBQUEsS0FBSyxFQUFFLFlBQW5DO0FBQWlEQyxNQUFBQSxHQUFHLEVBQUU7QUFBdEQsS0FKd0IsRUFLeEI7QUFBRUgsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FMd0IsRUFNeEI7QUFBRUYsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUUsWUFBbkM7QUFBaURFLE1BQUFBLElBQUksRUFBRTtBQUF2RCxLQU53QixDQUFoQixDQUFaLENBTDJCLENBYzNCOztBQUNBLFFBQUlDLE9BQU8sR0FBRyxFQUFkLENBZjJCLENBaUIzQjs7QUFDQSxRQUFJQyxRQUFRLEdBQUcsSUFBSVIsR0FBRyxDQUFDUyxRQUFSLENBQWlCYixTQUFqQixFQUE0QkcsS0FBNUIsRUFBbUNRLE9BQW5DLENBQWY7QUFDSCxHQW5CRDs7QUFxQkEsU0FBTztBQUNIO0FBQ0FHLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkZixNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0E3QndCLEVBQXpCLEVBK0JBOzs7QUFDQWdCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2xCLEVBQUFBLGtCQUFrQixDQUFDZ0IsSUFBbkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3Zpcy10aW1lbGluZS9iYXNpYy5qcz83YTI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RWaXNUaW1lbGluZUJhc2ljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQmFzaWMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRE9NIGVsZW1lbnQgd2hlcmUgdGhlIFRpbWVsaW5lIHdpbGwgYmUgYXR0YWNoZWRcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9kb2NzX3Zpc3RpbWVsaW5lX2Jhc2ljXCIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBEYXRhU2V0IChhbGxvd3MgdHdvIHdheSBkYXRhLWJpbmRpbmcpXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gbmV3IHZpcy5EYXRhU2V0KFtcclxuICAgICAgICAgICAgeyBpZDogMSwgY29udGVudDogXCJpdGVtIDFcIiwgc3RhcnQ6IFwiMjAyMS0wNC0yMFwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIGNvbnRlbnQ6IFwiaXRlbSAyXCIsIHN0YXJ0OiBcIjIwMjEtMDQtMTRcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBjb250ZW50OiBcIml0ZW0gM1wiLCBzdGFydDogXCIyMDIxLTA0LTE4XCIgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgY29udGVudDogXCJpdGVtIDRcIiwgc3RhcnQ6IFwiMjAyMS0wNC0xNlwiLCBlbmQ6IFwiMjAyMS0wNC0xOVwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDUsIGNvbnRlbnQ6IFwiaXRlbSA1XCIsIHN0YXJ0OiBcIjIwMjEtMDQtMjVcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiA2LCBjb250ZW50OiBcIml0ZW0gNlwiLCBzdGFydDogXCIyMDIxLTA0LTI3XCIsIHR5cGU6IFwicG9pbnRcIiB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBDb25maWd1cmF0aW9uIGZvciB0aGUgVGltZWxpbmVcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBUaW1lbGluZVxyXG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyB2aXMuVGltZWxpbmUoY29udGFpbmVyLCBpdGVtcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtUVmlzVGltZWxpbmVCYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RWaXNUaW1lbGluZUJhc2ljIiwiZXhhbXBsZUJhc2ljIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwidmlzIiwiRGF0YVNldCIsImlkIiwiY29udGVudCIsInN0YXJ0IiwiZW5kIiwidHlwZSIsIm9wdGlvbnMiLCJ0aW1lbGluZSIsIlRpbWVsaW5lIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/basic.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/basic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;