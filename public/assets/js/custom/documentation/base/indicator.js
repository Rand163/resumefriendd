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

/***/ "./resources/src/js/custom/documentation/base/indicator.js":
/*!*****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/base/indicator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTBaseIndicatorDemos = function () {\n  // Private functions\n  var _example1 = function _example1(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_1\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example2 = function _example2(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_2\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  var _example3 = function _example3(element) {\n    // Element to indecate\n    var button = document.querySelector(\"#kt_button_3\"); // Handle button click event\n\n    button.addEventListener(\"click\", function () {\n      // Activate indicator \n      button.setAttribute(\"data-kt-indicator\", \"on\"); // Disable indicator after 3 seconds\n\n      setTimeout(function () {\n        button.removeAttribute(\"data-kt-indicator\");\n      }, 3000);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _example1();\n\n      _example2();\n\n      _example3();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTBaseIndicatorDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Jhc2UvaW5kaWNhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxZQUFXO0FBQ2xDO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU0MsT0FBVCxFQUFrQjtBQUM5QjtBQUNBLFFBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWIsQ0FGOEIsQ0FJOUI7O0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUN4QztBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsbUJBQXBCLEVBQXlDLElBQXpDLEVBRndDLENBSXhDOztBQUNBQyxNQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQkwsUUFBQUEsTUFBTSxDQUFDTSxlQUFQLENBQXVCLG1CQUF2QjtBQUNILE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxLQVJEO0FBU0gsR0FkRDs7QUFnQkEsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU1IsT0FBVCxFQUFrQjtBQUM5QjtBQUNBLFFBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWIsQ0FGOEIsQ0FJOUI7O0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUN4QztBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsbUJBQXBCLEVBQXlDLElBQXpDLEVBRndDLENBSXhDOztBQUNBQyxNQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQkwsUUFBQUEsTUFBTSxDQUFDTSxlQUFQLENBQXVCLG1CQUF2QjtBQUNILE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxLQVJEO0FBU0gsR0FkRDs7QUFnQkEsTUFBSUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU1QsT0FBVCxFQUFrQjtBQUM5QjtBQUNBLFFBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWIsQ0FGOEIsQ0FJOUI7O0FBQ0FGLElBQUFBLE1BQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUN4QztBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsbUJBQXBCLEVBQXlDLElBQXpDLEVBRndDLENBSXhDOztBQUNBQyxNQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQkwsUUFBQUEsTUFBTSxDQUFDTSxlQUFQLENBQXVCLG1CQUF2QjtBQUNILE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxLQVJEO0FBU0gsR0FkRDs7QUFpQkEsU0FBTztBQUNIO0FBQ0FHLElBQUFBLElBQUksRUFBRSxjQUFTVixPQUFULEVBQWtCO0FBQ3BCRCxNQUFBQSxTQUFTOztBQUNUUyxNQUFBQSxTQUFTOztBQUNUQyxNQUFBQSxTQUFTO0FBQ1o7QUFORSxHQUFQO0FBUUgsQ0EzRDBCLEVBQTNCLEVBNkRBOzs7QUFDQUUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDZCxFQUFBQSxvQkFBb0IsQ0FBQ1ksSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9iYXNlL2luZGljYXRvci5qcz82OTAxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RCYXNlSW5kaWNhdG9yRGVtb3MgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgX2V4YW1wbGUxID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIC8vIEVsZW1lbnQgdG8gaW5kZWNhdGVcclxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9idXR0b25fMVwiKTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGljayBldmVudFxyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIGluZGljYXRvciBcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGluZGljYXRvciBhZnRlciAzIHNlY29uZHNcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9leGFtcGxlMiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAvLyBFbGVtZW50IHRvIGluZGVjYXRlXHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfYnV0dG9uXzJcIik7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2sgZXZlbnRcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSBpbmRpY2F0b3IgXHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBpbmRpY2F0b3IgYWZ0ZXIgMyBzZWNvbmRzXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfZXhhbXBsZTMgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgLy8gRWxlbWVudCB0byBpbmRlY2F0ZVxyXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2J1dHRvbl8zXCIpO1xyXG5cclxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gQWN0aXZhdGUgaW5kaWNhdG9yIFxyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgaW5kaWNhdG9yIGFmdGVyIDMgc2Vjb25kc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgX2V4YW1wbGUxKCk7XHJcbiAgICAgICAgICAgIF9leGFtcGxlMigpO1xyXG4gICAgICAgICAgICBfZXhhbXBsZTMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RCYXNlSW5kaWNhdG9yRGVtb3MuaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RCYXNlSW5kaWNhdG9yRGVtb3MiLCJfZXhhbXBsZTEiLCJlbGVtZW50IiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfZXhhbXBsZTIiLCJfZXhhbXBsZTMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/base/indicator.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/base/indicator.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;