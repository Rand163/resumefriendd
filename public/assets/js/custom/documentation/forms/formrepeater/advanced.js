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

/***/ "./resources/src/js/custom/documentation/forms/formrepeater/advanced.js":
/*!******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formrepeater/advanced.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormRepeaterAdvanced = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_advanced').repeater({\n      initEmpty: false,\n      defaultValues: {\n        'text-input': 'foo'\n      },\n      show: function show() {\n        $(this).slideDown(); // Re-init select2\n\n        $(this).find('[data-kt-repeater=\"select2\"]').select2(); // Re-init flatpickr\n\n        $(this).find('[data-kt-repeater=\"datepicker\"]').flatpickr(); // Re-init tagify\n\n        new Tagify(this.querySelector('[data-kt-repeater=\"tagify\"]'));\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      },\n      ready: function ready() {\n        // Init select\n        $('[data-kt-repeater=\"select2\"]').select2(); // Init flatpickr\n\n        $('[data-kt-repeater=\"datepicker\"]').flatpickr(); // Init Tagify\n\n        new Tagify(document.querySelector('[data-kt-repeater=\"tagify\"]'));\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterAdvanced.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9hZHZhbmNlZC5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsc0JBQXNCLEdBQUcsWUFBWTtBQUNyQztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVk7QUFDdkJDLElBQUFBLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxRQUFoQyxDQUF5QztBQUNyQ0MsTUFBQUEsU0FBUyxFQUFFLEtBRDBCO0FBR3JDQyxNQUFBQSxhQUFhLEVBQUU7QUFDWCxzQkFBYztBQURILE9BSHNCO0FBT3JDQyxNQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZEosUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxTQUFSLEdBRGMsQ0FHZDs7QUFDQUwsUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsOEJBQWIsRUFBNkNDLE9BQTdDLEdBSmMsQ0FNZDs7QUFDQVAsUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxJQUFSLENBQWEsaUNBQWIsRUFBZ0RFLFNBQWhELEdBUGMsQ0FTZDs7QUFDQSxZQUFJQyxNQUFKLENBQVcsS0FBS0MsYUFBTCxDQUFtQiw2QkFBbkIsQ0FBWDtBQUNILE9BbEJvQztBQW9CckNDLE1BQUFBLElBQUksRUFBRSxjQUFVQyxhQUFWLEVBQXlCO0FBQzNCWixRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLE9BQVIsQ0FBZ0JELGFBQWhCO0FBQ0gsT0F0Qm9DO0FBd0JyQ0UsTUFBQUEsS0FBSyxFQUFFLGlCQUFVO0FBQ2I7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NPLE9BQWxDLEdBRmEsQ0FJYjs7QUFDQVAsUUFBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNRLFNBQXJDLEdBTGEsQ0FPYjs7QUFDQSxZQUFJQyxNQUFKLENBQVdNLFFBQVEsQ0FBQ0wsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBWDtBQUNIO0FBakNvQyxLQUF6QztBQW1DSCxHQXBDRDs7QUFzQ0EsU0FBTztBQUNIO0FBQ0FNLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkakIsTUFBQUEsUUFBUTtBQUNYO0FBSkUsR0FBUDtBQU1ILENBOUM0QixFQUE3QixFQWdEQTs7O0FBQ0FrQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENwQixFQUFBQSxzQkFBc0IsQ0FBQ2tCLElBQXZCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZm9ybXJlcGVhdGVyL2FkdmFuY2VkLmpzPzRiMjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1SZXBlYXRlckFkdmFuY2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcja3RfZG9jc19yZXBlYXRlcl9hZHZhbmNlZCcpLnJlcGVhdGVyKHtcclxuICAgICAgICAgICAgaW5pdEVtcHR5OiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICAgICAgICAgICd0ZXh0LWlucHV0JzogJ2ZvbydcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVEb3duKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdCBzZWxlY3QyXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ1tkYXRhLWt0LXJlcGVhdGVyPVwic2VsZWN0MlwiXScpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0IGZsYXRwaWNrclxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdbZGF0YS1rdC1yZXBlYXRlcj1cImRhdGVwaWNrZXJcIl0nKS5mbGF0cGlja3IoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0IHRhZ2lmeVxyXG4gICAgICAgICAgICAgICAgbmV3IFRhZ2lmeSh0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXJlcGVhdGVyPVwidGFnaWZ5XCJdJykpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24gKGRlbGV0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVVcChkZWxldGVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHJlYWR5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy8gSW5pdCBzZWxlY3RcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWt0LXJlcGVhdGVyPVwic2VsZWN0MlwiXScpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbml0IGZsYXRwaWNrclxyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEta3QtcmVwZWF0ZXI9XCJkYXRlcGlja2VyXCJdJykuZmxhdHBpY2tyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSW5pdCBUYWdpZnlcclxuICAgICAgICAgICAgICAgIG5ldyBUYWdpZnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcmVwZWF0ZXI9XCJ0YWdpZnlcIl0nKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZTEoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtURm9ybVJlcGVhdGVyQWR2YW5jZWQuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybVJlcGVhdGVyQWR2YW5jZWQiLCJleGFtcGxlMSIsIiQiLCJyZXBlYXRlciIsImluaXRFbXB0eSIsImRlZmF1bHRWYWx1ZXMiLCJzaG93Iiwic2xpZGVEb3duIiwiZmluZCIsInNlbGVjdDIiLCJmbGF0cGlja3IiLCJUYWdpZnkiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZSIsImRlbGV0ZUVsZW1lbnQiLCJzbGlkZVVwIiwicmVhZHkiLCJkb2N1bWVudCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/advanced.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formrepeater/advanced.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;