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

/***/ "./resources/src/js/custom/apps/file-manager/settings.js":
/*!***************************************************************!*\
  !*** ./resources/src/js/custom/apps/file-manager/settings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTAppFileManagerSettings = function () {\n  var form; // Private functions\n\n  var handleForm = function handleForm() {\n    var saveButton = form.querySelector('#kt_file_manager_settings_submit');\n    saveButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      saveButton.setAttribute(\"data-kt-indicator\", \"on\"); // Simulate process for demo only\n\n      setTimeout(function () {\n        toastr.options = {\n          \"closeButton\": true,\n          \"debug\": false,\n          \"newestOnTop\": false,\n          \"progressBar\": false,\n          \"positionClass\": \"toast-top-right\",\n          \"preventDuplicates\": false,\n          \"showDuration\": \"300\",\n          \"hideDuration\": \"1000\",\n          \"timeOut\": \"5000\",\n          \"extendedTimeOut\": \"1000\",\n          \"showEasing\": \"swing\",\n          \"hideEasing\": \"linear\",\n          \"showMethod\": \"fadeIn\",\n          \"hideMethod\": \"fadeOut\"\n        };\n        toastr.success('File manager settings have been saved');\n        saveButton.removeAttribute(\"data-kt-indicator\");\n      }, 1000);\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init(element) {\n      form = document.querySelector('#kt_file_manager_settings');\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppFileManagerSettings.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2ZpbGUtbWFuYWdlci9zZXR0aW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsd0JBQXdCLEdBQUcsWUFBWTtBQUN2QyxNQUFJQyxJQUFKLENBRHVDLENBRzFDOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDM0IsUUFBTUMsVUFBVSxHQUFHRixJQUFJLENBQUNHLGFBQUwsQ0FBbUIsa0NBQW5CLENBQW5CO0FBRU1ELElBQUFBLFVBQVUsQ0FBQ0UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RDQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQUosTUFBQUEsVUFBVSxDQUFDSyxZQUFYLENBQXdCLG1CQUF4QixFQUE2QyxJQUE3QyxFQUhzQyxDQUt0Qzs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakJDLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiLHlCQUFlLElBREY7QUFFYixtQkFBUyxLQUZJO0FBR2IseUJBQWUsS0FIRjtBQUliLHlCQUFlLEtBSkY7QUFLYiwyQkFBaUIsaUJBTEo7QUFNYiwrQkFBcUIsS0FOUjtBQU9iLDBCQUFnQixLQVBIO0FBUWIsMEJBQWdCLE1BUkg7QUFTYixxQkFBVyxNQVRFO0FBVWIsNkJBQW1CLE1BVk47QUFXYix3QkFBYyxPQVhEO0FBWWIsd0JBQWMsUUFaRDtBQWFiLHdCQUFjLFFBYkQ7QUFjYix3QkFBYztBQWRELFNBQWpCO0FBaUJBRCxRQUFBQSxNQUFNLENBQUNFLE9BQVAsQ0FBZSx1Q0FBZjtBQUVBVCxRQUFBQSxVQUFVLENBQUNVLGVBQVgsQ0FBMkIsbUJBQTNCO0FBQ0gsT0FyQlMsRUFxQlAsSUFyQk8sQ0FBVjtBQXNCSCxLQTVCRDtBQTZCTixHQWhDRCxDQUowQyxDQXNDMUM7OztBQUNBLFNBQU87QUFDTkMsSUFBQUEsSUFBSSxFQUFFLGNBQVNDLE9BQVQsRUFBa0I7QUFDZGQsTUFBQUEsSUFBSSxHQUFHZSxRQUFRLENBQUNaLGFBQVQsQ0FBdUIsMkJBQXZCLENBQVA7QUFFVEYsTUFBQUEsVUFBVTtBQUNKO0FBTEQsR0FBUDtBQU9BLENBOUM4QixFQUEvQixFQWdEQTs7O0FBQ0FlLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2xCLEVBQUFBLHdCQUF3QixDQUFDYyxJQUF6QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2ZpbGUtbWFuYWdlci9zZXR0aW5ncy5qcz8xOTFlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RBcHBGaWxlTWFuYWdlclNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm07XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0IHNhdmVCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9maWxlX21hbmFnZXJfc2V0dGluZ3Nfc3VibWl0Jyk7XHJcblxyXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2ltdWxhdGUgcHJvY2VzcyBmb3IgZGVtbyBvbmx5XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0JhclwiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByZXZlbnREdXBsaWNhdGVzXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd0R1cmF0aW9uXCI6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoaWRlRHVyYXRpb25cIjogXCIxMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lT3V0XCI6IFwiNTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZXh0ZW5kZWRUaW1lT3V0XCI6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd0Vhc2luZ1wiOiBcInN3aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoaWRlRWFzaW5nXCI6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93TWV0aG9kXCI6IFwiZmFkZUluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJoaWRlTWV0aG9kXCI6IFwiZmFkZU91dFwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKCdGaWxlIG1hbmFnZXIgc2V0dGluZ3MgaGF2ZSBiZWVuIHNhdmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2F2ZUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHQvLyBQdWJsaWMgbWV0aG9kc1xyXG5cdHJldHVybiB7XHJcblx0XHRpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZmlsZV9tYW5hZ2VyX3NldHRpbmdzJyk7XHJcblxyXG5cdFx0XHRoYW5kbGVGb3JtKCk7XHJcbiAgICAgICAgfVxyXG5cdH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RBcHBGaWxlTWFuYWdlclNldHRpbmdzLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEFwcEZpbGVNYW5hZ2VyU2V0dGluZ3MiLCJmb3JtIiwiaGFuZGxlRm9ybSIsInNhdmVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJ0b2FzdHIiLCJvcHRpb25zIiwic3VjY2VzcyIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/file-manager/settings.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/file-manager/settings.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;