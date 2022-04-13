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

/***/ "./resources/src/js/custom/documentation/forms/password-meter.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/password-meter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTGeneralPasswordMeterDemos = function () {\n  // Private functions\n  var _showScore = function _showScore() {\n    // Select show score button\n    var showScoreButton = document.getElementById('kt_password_meter_example_show_score'); // Get password meter instance\n\n    var passwordMeterElement = document.querySelector(\"#kt_password_meter_example\");\n    var passwordMeter = KTPasswordMeter.getInstance(passwordMeterElement); // Handle show score button click\n\n    showScoreButton.addEventListener('click', function (e) {\n      // Get password score\n      var score = passwordMeter.getScore(); // Show popup confirmation \n\n      Swal.fire({\n        text: \"Current Password Score: \" + score,\n        icon: \"success\",\n        buttonsStyling: false,\n        confirmButtonText: \"Ok, got it!\",\n        customClass: {\n          confirmButton: \"btn btn-primary\"\n        }\n      });\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      _showScore();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralPasswordMeterDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3Bhc3N3b3JkLW1ldGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFXO0FBQ3pDO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QjtBQUNBLFFBQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNDQUF4QixDQUF4QixDQUZ3QixDQUl4Qjs7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLDRCQUF2QixDQUE3QjtBQUNBLFFBQU1DLGFBQWEsR0FBR0MsZUFBZSxDQUFDQyxXQUFoQixDQUE0Qkosb0JBQTVCLENBQXRCLENBTndCLENBUXhCOztBQUNBSCxJQUFBQSxlQUFlLENBQUNRLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFBQyxDQUFDLEVBQUk7QUFDM0M7QUFDQSxVQUFNQyxLQUFLLEdBQUdMLGFBQWEsQ0FBQ00sUUFBZCxFQUFkLENBRjJDLENBSTNDOztBQUNBQyxNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsNkJBQTZCSixLQUQ3QjtBQUVOSyxRQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdOQyxRQUFBQSxjQUFjLEVBQUUsS0FIVjtBQUlOQyxRQUFBQSxpQkFBaUIsRUFBRSxhQUpiO0FBS05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLE9BQVY7QUFTSCxLQWREO0FBZUgsR0F4QkQ7O0FBMEJBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYnJCLE1BQUFBLFVBQVU7QUFDYjtBQUpFLEdBQVA7QUFNSCxDQWxDaUMsRUFBbEMsRUFvQ0E7OztBQUNBc0IsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDeEIsRUFBQUEsMkJBQTJCLENBQUNzQixJQUE1QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3Bhc3N3b3JkLW1ldGVyLmpzP2U2YzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEdlbmVyYWxQYXNzd29yZE1ldGVyRGVtb3MgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgX3Nob3dTY29yZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFNlbGVjdCBzaG93IHNjb3JlIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHNob3dTY29yZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9wYXNzd29yZF9tZXRlcl9leGFtcGxlX3Nob3dfc2NvcmUnKTsgIFxyXG5cclxuICAgICAgICAvLyBHZXQgcGFzc3dvcmQgbWV0ZXIgaW5zdGFuY2VcclxuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfcGFzc3dvcmRfbWV0ZXJfZXhhbXBsZVwiKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZE1ldGVyID0gS1RQYXNzd29yZE1ldGVyLmdldEluc3RhbmNlKHBhc3N3b3JkTWV0ZXJFbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIHNob3cgc2NvcmUgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgc2hvd1Njb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEdldCBwYXNzd29yZCBzY29yZVxyXG4gICAgICAgICAgICBjb25zdCBzY29yZSA9IHBhc3N3b3JkTWV0ZXIuZ2V0U2NvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJDdXJyZW50IFBhc3N3b3JkIFNjb3JlOiBcIiArIHNjb3JlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBfc2hvd1Njb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUR2VuZXJhbFBhc3N3b3JkTWV0ZXJEZW1vcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsUGFzc3dvcmRNZXRlckRlbW9zIiwiX3Nob3dTY29yZSIsInNob3dTY29yZUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXNzd29yZE1ldGVyRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXNzd29yZE1ldGVyIiwiS1RQYXNzd29yZE1ldGVyIiwiZ2V0SW5zdGFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNjb3JlIiwiZ2V0U2NvcmUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/password-meter.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/password-meter.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;