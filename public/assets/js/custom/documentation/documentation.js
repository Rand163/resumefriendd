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

/***/ "./resources/src/js/custom/documentation/documentation.js":
/*!****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/documentation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar KTLayoutDocumentation = function () {\n  var _init = function _init(element) {\n    var elements = element;\n\n    if (typeof elements === 'undefined') {\n      elements = document.querySelectorAll('.highlight');\n    }\n\n    if (elements && elements.length > 0) {\n      for (var i = 0; i < elements.length; ++i) {\n        var highlight = elements[i];\n        var copy = highlight.querySelector('.highlight-copy');\n\n        if (copy) {\n          var clipboard = new ClipboardJS(copy, {\n            target: function target(trigger) {\n              var highlight = trigger.closest('.highlight');\n              var el = highlight.querySelector('.tab-pane.active');\n\n              if (el == null) {\n                el = highlight.querySelector('.highlight-code');\n              }\n\n              return el;\n            }\n          });\n          clipboard.on('success', function (e) {\n            var caption = e.trigger.innerHTML;\n            e.trigger.innerHTML = 'copied';\n            e.clearSelection();\n            setTimeout(function () {\n              e.trigger.innerHTML = caption;\n            }, 2000);\n          });\n        }\n      }\n    }\n  };\n\n  return {\n    init: function init(element) {\n      _init(element);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutDocumentation.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanMuanMiLCJtYXBwaW5ncyI6IjtBQUFhOztBQUViLElBQUlBLHFCQUFxQixHQUFHLFlBQVc7QUFDbkMsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBU0MsT0FBVCxFQUFrQjtBQUMxQixRQUFJQyxRQUFRLEdBQUdELE9BQWY7O0FBRUEsUUFBSyxPQUFPQyxRQUFQLEtBQW9CLFdBQXpCLEVBQXVDO0FBQ25DQSxNQUFBQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBWDtBQUNIOztBQUVELFFBQUtGLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQW5DLEVBQXVDO0FBQ25DLFdBQU0sSUFBSUMsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBR0osUUFBUSxDQUFDRyxNQUE5QixFQUFzQyxFQUFFQyxDQUF4QyxFQUE0QztBQUN4QyxZQUFJQyxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0ksQ0FBRCxDQUF4QjtBQUNBLFlBQUlFLElBQUksR0FBR0QsU0FBUyxDQUFDRSxhQUFWLENBQXdCLGlCQUF4QixDQUFYOztBQUVBLFlBQUtELElBQUwsRUFBWTtBQUNSLGNBQUlFLFNBQVMsR0FBRyxJQUFJQyxXQUFKLENBQWdCSCxJQUFoQixFQUFzQjtBQUNsQ0ksWUFBQUEsTUFBTSxFQUFFLGdCQUFTQyxPQUFULEVBQWtCO0FBQ3RCLGtCQUFJTixTQUFTLEdBQUdNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQixZQUFoQixDQUFoQjtBQUNBLGtCQUFJQyxFQUFFLEdBQUdSLFNBQVMsQ0FBQ0UsYUFBVixDQUF3QixrQkFBeEIsQ0FBVDs7QUFFQSxrQkFBS00sRUFBRSxJQUFJLElBQVgsRUFBa0I7QUFDZEEsZ0JBQUFBLEVBQUUsR0FBR1IsU0FBUyxDQUFDRSxhQUFWLENBQXdCLGlCQUF4QixDQUFMO0FBQ0g7O0FBRUQscUJBQU9NLEVBQVA7QUFDSDtBQVZpQyxXQUF0QixDQUFoQjtBQWFBTCxVQUFBQSxTQUFTLENBQUNNLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQyxnQkFBSUMsT0FBTyxHQUFHRCxDQUFDLENBQUNKLE9BQUYsQ0FBVU0sU0FBeEI7QUFFQUYsWUFBQUEsQ0FBQyxDQUFDSixPQUFGLENBQVVNLFNBQVYsR0FBc0IsUUFBdEI7QUFDQUYsWUFBQUEsQ0FBQyxDQUFDRyxjQUFGO0FBRUFDLFlBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCSixjQUFBQSxDQUFDLENBQUNKLE9BQUYsQ0FBVU0sU0FBVixHQUFzQkQsT0FBdEI7QUFDSCxhQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsV0FURDtBQVVIO0FBQ0o7QUFDSjtBQUNKLEdBdkNEOztBQXlDQSxTQUFPO0FBQ0hJLElBQUFBLElBQUksRUFBRSxjQUFTckIsT0FBVCxFQUFrQjtBQUNwQkQsTUFBQUEsS0FBSyxDQUFDQyxPQUFELENBQUw7QUFDSDtBQUhFLEdBQVA7QUFLSCxDQS9DMkIsRUFBNUIsRUFpREE7OztBQUNBc0IsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDekIsRUFBQUEscUJBQXFCLENBQUN1QixJQUF0QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanM/Zjc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBLVExheW91dERvY3VtZW50YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIHR5cGVvZiBlbGVtZW50cyA9PT0gJ3VuZGVmaW5lZCcgKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICAgICAgICAgIHZhciBoaWdobGlnaHQgPSBlbGVtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBjb3B5ID0gaGlnaGxpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQtY29weScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggY29weSApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKGNvcHksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBmdW5jdGlvbih0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gdHJpZ2dlci5jbG9zZXN0KCcuaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBoaWdobGlnaHQucXVlcnlTZWxlY3RvcignLnRhYi1wYW5lLmFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWwgPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbCA9IGhpZ2hsaWdodC5xdWVyeVNlbGVjdG9yKCcuaGlnaGxpZ2h0LWNvZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdGlvbiA9IGUudHJpZ2dlci5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRyaWdnZXIuaW5uZXJIVE1MID0gJ2NvcGllZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRyaWdnZXIuaW5uZXJIVE1MID0gY2FwdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIF9pbml0KGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVExheW91dERvY3VtZW50YXRpb24uaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RMYXlvdXREb2N1bWVudGF0aW9uIiwiX2luaXQiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJpIiwiaGlnaGxpZ2h0IiwiY29weSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmRKUyIsInRhcmdldCIsInRyaWdnZXIiLCJjbG9zZXN0IiwiZWwiLCJvbiIsImUiLCJjYXB0aW9uIiwiaW5uZXJIVE1MIiwiY2xlYXJTZWxlY3Rpb24iLCJzZXRUaW1lb3V0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/documentation.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/documentation.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;