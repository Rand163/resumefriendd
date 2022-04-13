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

/***/ "./resources/src/js/custom/documentation/editors/quill/autosave.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/editors/quill/autosave.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTFormsQuillAutosave = function () {\n  // Private functions\n  var exampleAutosave = function exampleAutosave() {\n    var Delta = Quill[\"import\"]('delta');\n    var quill = new Quill('#kt_docs_quill_autosave', {\n      modules: {\n        toolbar: true\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow'\n    }); // Store accumulated changes\n\n    var change = new Delta();\n    quill.on('text-change', function (delta) {\n      change = change.compose(delta);\n    }); // Save periodically\n\n    setInterval(function () {\n      if (change.length() > 0) {\n        console.log('Saving changes', change);\n        /*\r\n        Send partial changes\r\n        $.post('/your-endpoint', {\r\n        partial: JSON.stringify(change)\r\n        });\r\n          Send entire document\r\n        $.post('/your-endpoint', {\r\n        doc: JSON.stringify(quill.getContents())\r\n        });\r\n        */\n\n        change = new Delta();\n      }\n    }, 5 * 1000); // Check for unsaved data\n\n    window.onbeforeunload = function () {\n      if (change.length() > 0) {\n        return 'There are unsaved changes. Are you sure you want to leave?';\n      }\n    };\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAutosave();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillAutosave.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYXV0b3NhdmUuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7QUFDbkM7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUIsUUFBSUMsS0FBSyxHQUFHQyxLQUFLLFVBQUwsQ0FBYSxPQUFiLENBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUQsS0FBSixDQUFVLHlCQUFWLEVBQXFDO0FBQzdDRSxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFO0FBREosT0FEb0M7QUFJN0NDLE1BQUFBLFdBQVcsRUFBRSx3QkFKZ0M7QUFLN0NDLE1BQUFBLEtBQUssRUFBRTtBQUxzQyxLQUFyQyxDQUFaLENBRjhCLENBVTlCOztBQUNBLFFBQUlDLE1BQU0sR0FBRyxJQUFJUCxLQUFKLEVBQWI7QUFDQUUsSUFBQUEsS0FBSyxDQUFDTSxFQUFOLENBQVMsYUFBVCxFQUF3QixVQUFVQyxLQUFWLEVBQWlCO0FBQ3JDRixNQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0csT0FBUCxDQUFlRCxLQUFmLENBQVQ7QUFDSCxLQUZELEVBWjhCLENBZ0I5Qjs7QUFDQUUsSUFBQUEsV0FBVyxDQUFDLFlBQVk7QUFDcEIsVUFBSUosTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlAsTUFBOUI7QUFDQTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCQSxRQUFBQSxNQUFNLEdBQUcsSUFBSVAsS0FBSixFQUFUO0FBQ0g7QUFDSixLQWhCVSxFQWdCUixJQUFJLElBaEJJLENBQVgsQ0FqQjhCLENBbUM5Qjs7QUFDQWUsSUFBQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXdCLFlBQVk7QUFDaEMsVUFBSVQsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLGVBQU8sNERBQVA7QUFDSDtBQUNKLEtBSkQ7QUFLSCxHQXpDRDs7QUEyQ0EsU0FBTztBQUNIO0FBQ0FLLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkbEIsTUFBQUEsZUFBZTtBQUNsQjtBQUpFLEdBQVA7QUFNSCxDQW5EMEIsRUFBM0IsRUFxREE7OztBQUNBbUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDckIsRUFBQUEsb0JBQW9CLENBQUNtQixJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYXV0b3NhdmUuanM/YWFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNRdWlsbEF1dG9zYXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQXV0b3NhdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIERlbHRhID0gUXVpbGwuaW1wb3J0KCdkZWx0YScpO1xyXG4gICAgICAgIHZhciBxdWlsbCA9IG5ldyBRdWlsbCgnI2t0X2RvY3NfcXVpbGxfYXV0b3NhdmUnLCB7XHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgdGV4dCBoZXJlLi4uJyxcclxuICAgICAgICAgICAgdGhlbWU6ICdzbm93J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBhY2N1bXVsYXRlZCBjaGFuZ2VzXHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5ldyBEZWx0YSgpO1xyXG4gICAgICAgIHF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSBjaGFuZ2UuY29tcG9zZShkZWx0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNhdmUgcGVyaW9kaWNhbGx5XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NhdmluZyBjaGFuZ2VzJywgY2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBTZW5kIHBhcnRpYWwgY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgJC5wb3N0KCcveW91ci1lbmRwb2ludCcsIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpYWw6IEpTT04uc3RyaW5naWZ5KGNoYW5nZSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFNlbmQgZW50aXJlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAkLnBvc3QoJy95b3VyLWVuZHBvaW50Jywge1xyXG4gICAgICAgICAgICAgICAgZG9jOiBKU09OLnN0cmluZ2lmeShxdWlsbC5nZXRDb250ZW50cygpKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlID0gbmV3IERlbHRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1ICogMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciB1bnNhdmVkIGRhdGFcclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2UubGVuZ3RoKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1RoZXJlIGFyZSB1bnNhdmVkIGNoYW5nZXMuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUF1dG9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZvcm1zUXVpbGxBdXRvc2F2ZS5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc1F1aWxsQXV0b3NhdmUiLCJleGFtcGxlQXV0b3NhdmUiLCJEZWx0YSIsIlF1aWxsIiwicXVpbGwiLCJtb2R1bGVzIiwidG9vbGJhciIsInBsYWNlaG9sZGVyIiwidGhlbWUiLCJjaGFuZ2UiLCJvbiIsImRlbHRhIiwiY29tcG9zZSIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9uYmVmb3JldW5sb2FkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/quill/autosave.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/editors/quill/autosave.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;