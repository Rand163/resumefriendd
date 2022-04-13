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

/***/ "./resources/src/js/custom/documentation/editors/quill/basic.js":
/*!**********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/editors/quill/basic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsQuillBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var quill = new Quill('#kt_docs_quill_basic', {\n      modules: {\n        toolbar: [[{\n          header: [1, 2, false]\n        }], ['bold', 'italic', 'underline'], ['image', 'code-block']]\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow' // or 'bubble'\n\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYmFzaWMuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7QUFDL0I7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFXO0FBQzFCLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsc0JBQVYsRUFBa0M7QUFDMUNDLE1BQUFBLE9BQU8sRUFBRTtBQUNMQyxRQUFBQSxPQUFPLEVBQUUsQ0FDTCxDQUFDO0FBQ0dDLFVBQUFBLE1BQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUDtBQURYLFNBQUQsQ0FESyxFQUlMLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FKSyxFQUtMLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FMSztBQURKLE9BRGlDO0FBVTFDQyxNQUFBQSxXQUFXLEVBQUUsd0JBVjZCO0FBVzFDQyxNQUFBQSxLQUFLLEVBQUUsTUFYbUMsQ0FXNUI7O0FBWDRCLEtBQWxDLENBQVo7QUFhSCxHQWREOztBQWdCQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JSLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQXhCdUIsRUFBeEIsRUEwQkE7OztBQUNBUyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNYLEVBQUFBLGlCQUFpQixDQUFDUyxJQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYmFzaWMuanM/Y2ZlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNRdWlsbEJhc2ljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBxdWlsbCA9IG5ldyBRdWlsbCgnI2t0X2RvY3NfcXVpbGxfYmFzaWMnLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFsxLCAyLCBmYWxzZV1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnaW1hZ2UnLCAnY29kZS1ibG9jayddXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIHRleHQgaGVyZS4uLicsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdycgLy8gb3IgJ2J1YmJsZSdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUJhc2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURm9ybXNRdWlsbEJhc2ljLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zUXVpbGxCYXNpYyIsImV4YW1wbGVCYXNpYyIsInF1aWxsIiwiUXVpbGwiLCJtb2R1bGVzIiwidG9vbGJhciIsImhlYWRlciIsInBsYWNlaG9sZGVyIiwidGhlbWUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/quill/basic.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/editors/quill/basic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;