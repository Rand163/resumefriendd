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

/***/ "./resources/src/js/custom/documentation/general/datatables/api.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/datatables/api.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTDatatablesApi = function () {\n  // Private functions\n  var _initExample1 = function _initExample1() {\n    var t = $(\"#kt_datatable_example_1\").DataTable();\n    var counter = 1;\n    $(\"#kt_datatable_example_1_addrow\").on(\"click\", function () {\n      t.row.add([counter + \".1\", counter + \".2\", counter + \".3\", counter + \".4\", counter + \".5\"]).draw(false);\n      counter++;\n    }); // Automatically add a first row of data\n\n    $(\"#kt_datatable_example_1_addrow\").click();\n  };\n\n  var _initExample2 = function _initExample2() {\n    var table = $(\"#kt_datatable_example_2\").DataTable({\n      columnDefs: [{\n        orderable: false,\n        targets: [1, 2, 3]\n      }]\n    });\n    $(\"#kt_datatable_example_2_submit\").click(function () {\n      var data = table.$(\"input, select\").serialize();\n      alert(\"The following data would have been submitted to the server: \\n\\n\" + data.substr(0, 120) + \"...\");\n      return false;\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      _initExample1();\n\n      _initExample2();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDatatablesApi.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZGF0YXRhYmxlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFZO0FBQzlCO0FBRUEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCLFFBQUlDLENBQUMsR0FBR0MsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFNBQTdCLEVBQVI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUVBRixJQUFBQSxDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ0csRUFBcEMsQ0FBd0MsT0FBeEMsRUFBaUQsWUFBWTtBQUN6REosTUFBQUEsQ0FBQyxDQUFDSyxHQUFGLENBQU1DLEdBQU4sQ0FBVyxDQUNQSCxPQUFPLEdBQUUsSUFERixFQUVQQSxPQUFPLEdBQUUsSUFGRixFQUdQQSxPQUFPLEdBQUUsSUFIRixFQUlQQSxPQUFPLEdBQUUsSUFKRixFQUtQQSxPQUFPLEdBQUUsSUFMRixDQUFYLEVBTUlJLElBTkosQ0FNVSxLQU5WO0FBUUFKLE1BQUFBLE9BQU87QUFDVixLQVZELEVBSjJCLENBZ0IzQjs7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NPLEtBQXBDO0FBQ0gsR0FsQkQ7O0FBb0JBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQixRQUFJQyxLQUFLLEdBQUdULENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxTQUE3QixDQUF1QztBQUMvQ1MsTUFBQUEsVUFBVSxFQUFFLENBQUM7QUFDVEMsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEMsUUFBQUEsT0FBTyxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBRkEsT0FBRDtBQURtQyxLQUF2QyxDQUFaO0FBT0FaLElBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DTyxLQUFwQyxDQUEyQyxZQUFXO0FBQ2xELFVBQUlNLElBQUksR0FBR0osS0FBSyxDQUFDVCxDQUFOLENBQVEsZUFBUixFQUF5QmMsU0FBekIsRUFBWDtBQUNBQyxNQUFBQSxLQUFLLENBQ0QscUVBQ0FGLElBQUksQ0FBQ0csTUFBTCxDQUFhLENBQWIsRUFBZ0IsR0FBaEIsQ0FEQSxHQUNzQixLQUZyQixDQUFMO0FBSUEsYUFBTyxLQUFQO0FBQ0gsS0FQRDtBQVFILEdBaEJELENBdkI4QixDQXlDOUI7OztBQUNBLFNBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RuQixNQUFBQSxhQUFhOztBQUNiVSxNQUFBQSxhQUFhO0FBQ2hCO0FBSkUsR0FBUDtBQU1ILENBaERxQixFQUF0QixFQWtEQTs7O0FBQ0FVLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3RCLEVBQUFBLGVBQWUsQ0FBQ29CLElBQWhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kYXRhdGFibGVzL2FwaS5qcz84YjY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1REYXRhdGFibGVzQXBpID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHJcbiAgICB2YXIgX2luaXRFeGFtcGxlMSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0ID0gJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8xXCIpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMTtcclxuICAgIFxyXG4gICAgICAgICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfMV9hZGRyb3dcIikub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0LnJvdy5hZGQoIFtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjFcIixcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjNcIixcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjRcIixcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjVcIixcclxuICAgICAgICAgICAgXSApLmRyYXcoIGZhbHNlICk7XHJcbiAgICBcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIH0gKTtcclxuICAgIFxyXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgYWRkIGEgZmlyc3Qgcm93IG9mIGRhdGFcclxuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzFfYWRkcm93XCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF9pbml0RXhhbXBsZTIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzJcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgY29sdW1uRGVmczogW3tcclxuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbMSwyLDNdXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfSk7XHJcbiAgICAgXHJcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8yX3N1Ym1pdFwiKS5jbGljayggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFibGUuJChcImlucHV0LCBzZWxlY3RcIikuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgXCJUaGUgZm9sbG93aW5nIGRhdGEgd291bGQgaGF2ZSBiZWVuIHN1Ym1pdHRlZCB0byB0aGUgc2VydmVyOiBcXG5cXG5cIitcclxuICAgICAgICAgICAgICAgIGRhdGEuc3Vic3RyKCAwLCAxMjAgKStcIi4uLlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTEoKTtcclxuICAgICAgICAgICAgX2luaXRFeGFtcGxlMigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURGF0YXRhYmxlc0FwaS5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1REYXRhdGFibGVzQXBpIiwiX2luaXRFeGFtcGxlMSIsInQiLCIkIiwiRGF0YVRhYmxlIiwiY291bnRlciIsIm9uIiwicm93IiwiYWRkIiwiZHJhdyIsImNsaWNrIiwiX2luaXRFeGFtcGxlMiIsInRhYmxlIiwiY29sdW1uRGVmcyIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJkYXRhIiwic2VyaWFsaXplIiwiYWxlcnQiLCJzdWJzdHIiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/datatables/api.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/datatables/api.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;