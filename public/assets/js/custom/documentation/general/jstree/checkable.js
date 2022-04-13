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

/***/ "./resources/src/js/custom/documentation/general/jstree/checkable.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jstree/checkable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJSTreeCheckable = function () {\n  // Private functions\n  var exampleCheckable = function exampleCheckable() {\n    $('#kt_docs_jstree_checkable').jstree({\n      'plugins': [\"wholerow\", \"checkbox\", \"types\"],\n      'core': {\n        \"themes\": {\n          \"responsive\": false\n        },\n        'data': [{\n          \"text\": \"Same but with checkboxes\",\n          \"children\": [{\n            \"text\": \"initially selected\",\n            \"state\": {\n              \"selected\": true\n            }\n          }, {\n            \"text\": \"custom icon\",\n            \"icon\": \"fa fa-warning text-danger\"\n          }, {\n            \"text\": \"initially open\",\n            \"icon\": \"fa fa-folder text-default\",\n            \"state\": {\n              \"opened\": true\n            },\n            \"children\": [\"Another node\"]\n          }, {\n            \"text\": \"custom icon\",\n            \"icon\": \"fa fa-warning text-waring\"\n          }, {\n            \"text\": \"disabled node\",\n            \"icon\": \"fa fa-check text-success\",\n            \"state\": {\n              \"disabled\": true\n            }\n          }]\n        }, \"And wholerow selection\"]\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-warning\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-warning\"\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCheckable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeCheckable.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NoZWNrYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBVztBQUMvQjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBVztBQUM5QkMsSUFBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JDLE1BQS9CLENBQXNDO0FBQ2xDLGlCQUFXLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsT0FBekIsQ0FEdUI7QUFFbEMsY0FBUTtBQUNKLGtCQUFXO0FBQ1Asd0JBQWM7QUFEUCxTQURQO0FBSUosZ0JBQVEsQ0FBQztBQUNELGtCQUFRLDBCQURQO0FBRUQsc0JBQVksQ0FBQztBQUNULG9CQUFRLG9CQURDO0FBRVQscUJBQVM7QUFDTCwwQkFBWTtBQURQO0FBRkEsV0FBRCxFQUtUO0FBQ0Msb0JBQVEsYUFEVDtBQUVDLG9CQUFRO0FBRlQsV0FMUyxFQVFUO0FBQ0Msb0JBQVEsZ0JBRFQ7QUFFQyxvQkFBUywyQkFGVjtBQUdDLHFCQUFTO0FBQ0wsd0JBQVU7QUFETCxhQUhWO0FBTUMsd0JBQVksQ0FBQyxjQUFEO0FBTmIsV0FSUyxFQWVUO0FBQ0Msb0JBQVEsYUFEVDtBQUVDLG9CQUFRO0FBRlQsV0FmUyxFQWtCVDtBQUNDLG9CQUFRLGVBRFQ7QUFFQyxvQkFBUSwwQkFGVDtBQUdDLHFCQUFTO0FBQ0wsMEJBQVk7QUFEUDtBQUhWLFdBbEJTO0FBRlgsU0FBRCxFQTRCSix3QkE1Qkk7QUFKSixPQUYwQjtBQXFDbEMsZUFBVTtBQUNOLG1CQUFZO0FBQ1Isa0JBQVM7QUFERCxTQUROO0FBSU4sZ0JBQVM7QUFDTCxrQkFBUztBQURKO0FBSkg7QUFyQ3dCLEtBQXRDO0FBOENILEdBL0NEOztBQWlEQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JILE1BQUFBLGdCQUFnQjtBQUNuQjtBQUpFLEdBQVA7QUFNSCxDQXpEdUIsRUFBeEIsRUEyREE7OztBQUNBSSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNOLEVBQUFBLGlCQUFpQixDQUFDSSxJQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NoZWNrYWJsZS5qcz82NmNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKU1RyZWVDaGVja2FibGUgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUNoZWNrYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNrdF9kb2NzX2pzdHJlZV9jaGVja2FibGUnKS5qc3RyZWUoe1xyXG4gICAgICAgICAgICAncGx1Z2lucyc6IFtcIndob2xlcm93XCIsIFwiY2hlY2tib3hcIiwgXCJ0eXBlc1wiXSxcclxuICAgICAgICAgICAgJ2NvcmUnOiB7XHJcbiAgICAgICAgICAgICAgICBcInRoZW1lc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdkYXRhJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU2FtZSBidXQgd2l0aCBjaGVja2JveGVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImluaXRpYWxseSBzZWxlY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImN1c3RvbSBpY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS13YXJuaW5nIHRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaW5pdGlhbGx5IG9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC1kZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5lZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXCJBbm90aGVyIG5vZGVcIl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiY3VzdG9tIGljb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLXdhcm5pbmcgdGV4dC13YXJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJkaXNhYmxlZCBub2RlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS1jaGVjayB0ZXh0LXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmQgd2hvbGVyb3cgc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ0eXBlc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZvbGRlciB0ZXh0LXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZmlsZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1maWxlICB0ZXh0LXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ2hlY2thYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSlNUcmVlQ2hlY2thYmxlLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZUNoZWNrYWJsZSIsImV4YW1wbGVDaGVja2FibGUiLCIkIiwianN0cmVlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/checkable.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jstree/checkable.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;