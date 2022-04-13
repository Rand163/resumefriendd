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

/***/ "./resources/src/js/custom/documentation/editors/ckeditor/document.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/editors/ckeditor/document.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsCKEditorDocument = function () {\n  // Private functions\n  var exampleDocument = function exampleDocument() {\n    DecoupledEditor.create(document.querySelector('#kt_docs_ckeditor_document')).then(function (editor) {\n      var toolbarContainer = document.querySelector('#kt_docs_ckeditor_document_toolbar');\n      toolbarContainer.appendChild(editor.ui.view.toolbar.element);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDocument();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorDocument.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvZG9jdW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLHVCQUF1QixHQUFHLFlBQVk7QUFDdEM7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUJDLElBQUFBLGVBQWUsQ0FDVkMsTUFETCxDQUNZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBRFosRUFFS0MsSUFGTCxDQUVVLFVBQUFDLE1BQU0sRUFBSTtBQUNaLFVBQU1DLGdCQUFnQixHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0NBQXZCLENBQXpCO0FBRUFHLE1BQUFBLGdCQUFnQixDQUFDQyxXQUFqQixDQUE2QkYsTUFBTSxDQUFDRyxFQUFQLENBQVVDLElBQVYsQ0FBZUMsT0FBZixDQUF1QkMsT0FBcEQ7QUFDSCxLQU5MLFdBT1csVUFBQUMsS0FBSyxFQUFJO0FBQ1pDLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0gsS0FUTDtBQVVILEdBWEQ7O0FBYUEsU0FBTztBQUNIO0FBQ0FFLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkZixNQUFBQSxlQUFlO0FBQ2xCO0FBSkUsR0FBUDtBQU1ILENBckI2QixFQUE5QixFQXVCQTs7O0FBQ0FnQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENsQixFQUFBQSx1QkFBdUIsQ0FBQ2dCLElBQXhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9kb2N1bWVudC5qcz81MmEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc0NLRWRpdG9yRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBEZWNvdXBsZWRFZGl0b3JcclxuICAgICAgICAgICAgLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19ja2VkaXRvcl9kb2N1bWVudCcpKVxyXG4gICAgICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbGJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9kb2NzX2NrZWRpdG9yX2RvY3VtZW50X3Rvb2xiYXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci51aS52aWV3LnRvb2xiYXIuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlRG9jdW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtURm9ybXNDS0VkaXRvckRvY3VtZW50LmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zQ0tFZGl0b3JEb2N1bWVudCIsImV4YW1wbGVEb2N1bWVudCIsIkRlY291cGxlZEVkaXRvciIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJlZGl0b3IiLCJ0b29sYmFyQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJ1aSIsInZpZXciLCJ0b29sYmFyIiwiZWxlbWVudCIsImVycm9yIiwiY29uc29sZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/ckeditor/document.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/editors/ckeditor/document.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;