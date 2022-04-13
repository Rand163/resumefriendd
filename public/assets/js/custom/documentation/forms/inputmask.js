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

/***/ "./resources/src/js/custom/documentation/forms/inputmask.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/inputmask.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsInputmaskDemos = function () {\n  // Private functions\n  var _examples = function _examples() {\n    // Date\n    Inputmask({\n      \"mask\": \"99/99/9999\"\n    }).mask(\"#kt_inputmask_1\"); // Phone \n\n    Inputmask({\n      \"mask\": \"(999) 999-9999\"\n    }).mask(\"#kt_inputmask_2\"); // Placeholder \n\n    Inputmask({\n      \"mask\": \"(999) 999-9999\",\n      \"placeholder\": \"(999) 999-9999\"\n    }).mask(\"#kt_inputmask_3\"); // Repeating \n\n    Inputmask({\n      \"mask\": \"9\",\n      \"repeat\": 10,\n      \"greedy\": false\n    }).mask(\"#kt_inputmask_4\"); // Right aligned \n\n    Inputmask(\"decimal\", {\n      \"rightAlignNumerics\": false\n    }).mask(\"#kt_inputmask_5\"); // Currency\n\n    Inputmask(\"€ 999.999.999,99\", {\n      \"numericInput\": true\n    }).mask(\"#kt_inputmask_6\"); // Ip address\n\n    Inputmask({\n      \"mask\": \"999.999.999.999\"\n    }).mask(\"#kt_inputmask_7\"); // Email address\n\n    Inputmask({\n      mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\n      greedy: false,\n      onBeforePaste: function onBeforePaste(pastedValue, opts) {\n        pastedValue = pastedValue.toLowerCase();\n        return pastedValue.replace(\"mailto:\", \"\");\n      },\n      definitions: {\n        \"*\": {\n          validator: '[0-9A-Za-z!#$%&\"*+/=?^_`{|}~\\-]',\n          cardinality: 1,\n          casing: \"lower\"\n        }\n      }\n    }).mask(\"#kt_inputmask_8\");\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _examples();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsInputmaskDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2lucHV0bWFzay5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBVztBQUNuQztBQUNBLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7QUFDdkI7QUFDQUMsSUFBQUEsU0FBUyxDQUFDO0FBQ04sY0FBUztBQURILEtBQUQsQ0FBVCxDQUVHQyxJQUZILENBRVEsaUJBRlIsRUFGdUIsQ0FNdkI7O0FBQ0FELElBQUFBLFNBQVMsQ0FBQztBQUNOLGNBQVM7QUFESCxLQUFELENBQVQsQ0FFR0MsSUFGSCxDQUVRLGlCQUZSLEVBUHVCLENBV3ZCOztBQUNBRCxJQUFBQSxTQUFTLENBQUM7QUFDTixjQUFTLGdCQURIO0FBRU4scUJBQWU7QUFGVCxLQUFELENBQVQsQ0FHR0MsSUFISCxDQUdRLGlCQUhSLEVBWnVCLENBaUJ2Qjs7QUFDQUQsSUFBQUEsU0FBUyxDQUFDO0FBQ04sY0FBUSxHQURGO0FBRU4sZ0JBQVUsRUFGSjtBQUdOLGdCQUFVO0FBSEosS0FBRCxDQUFULENBSUdDLElBSkgsQ0FJUSxpQkFKUixFQWxCdUIsQ0F3QnZCOztBQUNBRCxJQUFBQSxTQUFTLENBQUMsU0FBRCxFQUFZO0FBQ2pCLDRCQUFzQjtBQURMLEtBQVosQ0FBVCxDQUVHQyxJQUZILENBRVEsaUJBRlIsRUF6QnVCLENBNkJ2Qjs7QUFDQUQsSUFBQUEsU0FBUyxDQUFDLGtCQUFELEVBQXFCO0FBQzFCLHNCQUFnQjtBQURVLEtBQXJCLENBQVQsQ0FFR0MsSUFGSCxDQUVRLGlCQUZSLEVBOUJ1QixDQWtDdkI7O0FBQ0FELElBQUFBLFNBQVMsQ0FBQztBQUNOLGNBQVE7QUFERixLQUFELENBQVQsQ0FFR0MsSUFGSCxDQUVRLGlCQUZSLEVBbkN1QixDQXVDdkI7O0FBQ0FELElBQUFBLFNBQVMsQ0FBQztBQUNOQyxNQUFBQSxJQUFJLEVBQUUsaUVBREE7QUFFTkMsTUFBQUEsTUFBTSxFQUFFLEtBRkY7QUFHTkMsTUFBQUEsYUFBYSxFQUFFLHVCQUFVQyxXQUFWLEVBQXVCQyxJQUF2QixFQUE2QjtBQUN4Q0QsUUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNFLFdBQVosRUFBZDtBQUNBLGVBQU9GLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixTQUFwQixFQUErQixFQUEvQixDQUFQO0FBQ0gsT0FOSztBQU9OQyxNQUFBQSxXQUFXLEVBQUU7QUFDVCxhQUFLO0FBQ0RDLFVBQUFBLFNBQVMsRUFBRSxpQ0FEVjtBQUVEQyxVQUFBQSxXQUFXLEVBQUUsQ0FGWjtBQUdEQyxVQUFBQSxNQUFNLEVBQUU7QUFIUDtBQURJO0FBUFAsS0FBRCxDQUFULENBY0dWLElBZEgsQ0FjUSxpQkFkUjtBQWVILEdBdkREOztBQXlEQSxTQUFPO0FBQ0g7QUFDQVcsSUFBQUEsSUFBSSxFQUFFLGNBQVNDLE9BQVQsRUFBa0I7QUFDcEJkLE1BQUFBLFNBQVM7QUFDWjtBQUpFLEdBQVA7QUFNSCxDQWpFMkIsRUFBNUIsRUFtRUE7OztBQUNBZSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNqQixFQUFBQSxxQkFBcUIsQ0FBQ2MsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9pbnB1dG1hc2suanM/MDE1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNJbnB1dG1hc2tEZW1vcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBfZXhhbXBsZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgSW5wdXRtYXNrKHtcclxuICAgICAgICAgICAgXCJtYXNrXCIgOiBcIjk5Lzk5Lzk5OTlcIlxyXG4gICAgICAgIH0pLm1hc2soXCIja3RfaW5wdXRtYXNrXzFcIik7XHJcblxyXG4gICAgICAgIC8vIFBob25lIFxyXG4gICAgICAgIElucHV0bWFzayh7XHJcbiAgICAgICAgICAgIFwibWFza1wiIDogXCIoOTk5KSA5OTktOTk5OVwiXHJcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfMlwiKTtcclxuXHJcbiAgICAgICAgLy8gUGxhY2Vob2xkZXIgXHJcbiAgICAgICAgSW5wdXRtYXNrKHtcclxuICAgICAgICAgICAgXCJtYXNrXCIgOiBcIig5OTkpIDk5OS05OTk5XCIsXHJcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCIoOTk5KSA5OTktOTk5OVwiLFxyXG4gICAgICAgIH0pLm1hc2soXCIja3RfaW5wdXRtYXNrXzNcIik7XHJcblxyXG4gICAgICAgIC8vIFJlcGVhdGluZyBcclxuICAgICAgICBJbnB1dG1hc2soe1xyXG4gICAgICAgICAgICBcIm1hc2tcIjogXCI5XCIsXHJcbiAgICAgICAgICAgIFwicmVwZWF0XCI6IDEwLFxyXG4gICAgICAgICAgICBcImdyZWVkeVwiOiBmYWxzZVxyXG4gICAgICAgIH0pLm1hc2soXCIja3RfaW5wdXRtYXNrXzRcIik7XHJcblxyXG4gICAgICAgIC8vIFJpZ2h0IGFsaWduZWQgXHJcbiAgICAgICAgSW5wdXRtYXNrKFwiZGVjaW1hbFwiLCB7XHJcbiAgICAgICAgICAgIFwicmlnaHRBbGlnbk51bWVyaWNzXCI6IGZhbHNlXHJcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfNVwiKTtcclxuXHJcbiAgICAgICAgLy8gQ3VycmVuY3lcclxuICAgICAgICBJbnB1dG1hc2soXCLigqwgOTk5Ljk5OS45OTksOTlcIiwge1xyXG4gICAgICAgICAgICBcIm51bWVyaWNJbnB1dFwiOiB0cnVlXHJcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfNlwiKTtcclxuXHJcbiAgICAgICAgLy8gSXAgYWRkcmVzc1xyXG4gICAgICAgIElucHV0bWFzayh7XHJcbiAgICAgICAgICAgIFwibWFza1wiOiBcIjk5OS45OTkuOTk5Ljk5OVwiXHJcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfN1wiKTtcclxuXHJcbiAgICAgICAgLy8gRW1haWwgYWRkcmVzc1xyXG4gICAgICAgIElucHV0bWFzayh7XHJcbiAgICAgICAgICAgIG1hc2s6IFwiKnsxLDIwfVsuKnsxLDIwfV1bLip7MSwyMH1dWy4qezEsMjB9XUAqezEsMjB9Wy4qezIsNn1dWy4qezEsMn1dXCIsXHJcbiAgICAgICAgICAgIGdyZWVkeTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uIChwYXN0ZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgcGFzdGVkVmFsdWUgPSBwYXN0ZWRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgXCIqXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ICdbMC05QS1aYS16ISMkJSZcIiorLz0/Xl9ge3x9flxcLV0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5tYXNrKFwiI2t0X2lucHV0bWFza184XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgX2V4YW1wbGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURm9ybXNJbnB1dG1hc2tEZW1vcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc0lucHV0bWFza0RlbW9zIiwiX2V4YW1wbGVzIiwiSW5wdXRtYXNrIiwibWFzayIsImdyZWVkeSIsIm9uQmVmb3JlUGFzdGUiLCJwYXN0ZWRWYWx1ZSIsIm9wdHMiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRvciIsImNhcmRpbmFsaXR5IiwiY2FzaW5nIiwiaW5pdCIsImVsZW1lbnQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/inputmask.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/inputmask.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;