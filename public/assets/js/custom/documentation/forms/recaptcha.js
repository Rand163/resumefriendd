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

/***/ "./resources/src/js/custom/documentation/forms/recaptcha.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/recaptcha.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsGoogleRecaptchaDemos = function () {\n  // Private functions\n  var example = function example(element) {\n    document.querySelector(\"#kt_form_submit_button\").addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      grecaptcha.ready(function () {\n        if (grecaptcha.getResponse() === \"\") {\n          alert(\"Please validate the Google reCaptcha.\");\n        } else {\n          alert(\"Successful validation! Now you can submit this form to your server side processing.\");\n        }\n      });\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsGoogleRecaptchaDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3JlY2FwdGNoYS5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsMkJBQTJCLEdBQUcsWUFBWTtBQUMxQztBQUNBLE1BQUlDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVVDLE9BQVYsRUFBbUI7QUFDN0JDLElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaURDLGdCQUFqRCxDQUFrRSxPQUFsRSxFQUEyRSxVQUFVQyxDQUFWLEVBQWE7QUFDcEZBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxNQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUIsWUFBWTtBQUN6QixZQUFJRCxVQUFVLENBQUNFLFdBQVgsT0FBNkIsRUFBakMsRUFBcUM7QUFDakNDLFVBQUFBLEtBQUssQ0FBQyx1Q0FBRCxDQUFMO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLFVBQUFBLEtBQUssQ0FBQyxxRkFBRCxDQUFMO0FBQ0g7QUFDSixPQU5EO0FBT0gsS0FWRDtBQVdILEdBWkQ7O0FBY0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxjQUFVVixPQUFWLEVBQW1CO0FBQ3JCRCxNQUFBQSxPQUFPO0FBQ1Y7QUFKRSxHQUFQO0FBTUgsQ0F0QmlDLEVBQWxDLEVBd0JBOzs7QUFDQVksTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDZCxFQUFBQSwyQkFBMkIsQ0FBQ1ksSUFBNUI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9yZWNhcHRjaGEuanM/OTAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNHb29nbGVSZWNhcHRjaGFEZW1vcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9mb3JtX3N1Ym1pdF9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHZhbGlkYXRlIHRoZSBHb29nbGUgcmVDYXB0Y2hhLlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsIHZhbGlkYXRpb24hIE5vdyB5b3UgY2FuIHN1Ym1pdCB0aGlzIGZvcm0gdG8geW91ciBzZXJ2ZXIgc2lkZSBwcm9jZXNzaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXhhbXBsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc0dvb2dsZVJlY2FwdGNoYURlbW9zLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zR29vZ2xlUmVjYXB0Y2hhRGVtb3MiLCJleGFtcGxlIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJncmVjYXB0Y2hhIiwicmVhZHkiLCJnZXRSZXNwb25zZSIsImFsZXJ0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/recaptcha.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/recaptcha.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;