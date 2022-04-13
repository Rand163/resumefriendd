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

/***/ "./resources/src/js/custom/documentation/general/jkanban/basic.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/basic.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJKanbanDemoBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_basic',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztBQUNoQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVc7QUFDMUIsUUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUNyQkMsTUFBQUEsT0FBTyxFQUFFLHdCQURZO0FBRXJCQyxNQUFBQSxNQUFNLEVBQUUsR0FGYTtBQUdyQkMsTUFBQUEsVUFBVSxFQUFFLE9BSFM7QUFJckJDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0QsY0FBTSxZQURMO0FBRUQsaUJBQVMsWUFGUjtBQUdELGdCQUFRLENBQUM7QUFDRCxtQkFBUztBQURSLFNBQUQsRUFHSjtBQUNJLG1CQUFTO0FBRGIsU0FISTtBQUhQLE9BQUQsRUFVRDtBQUNDLGNBQU0sVUFEUDtBQUVDLGlCQUFTLFNBRlY7QUFHQyxnQkFBUSxDQUFDO0FBQ0QsbUJBQVM7QUFEUixTQUFELEVBR0o7QUFDSSxtQkFBUztBQURiLFNBSEk7QUFIVCxPQVZDLEVBb0JEO0FBQ0MsY0FBTSxPQURQO0FBRUMsaUJBQVMsTUFGVjtBQUdDLGdCQUFRLENBQUM7QUFDRCxtQkFBUztBQURSLFNBQUQsRUFHSjtBQUNJLG1CQUFTO0FBRGIsU0FISTtBQUhULE9BcEJDO0FBSmEsS0FBWixDQUFiO0FBcUNILEdBdENEOztBQXdDQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JQLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQWhEd0IsRUFBekIsRUFrREE7OztBQUNBUSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNWLEVBQUFBLGtCQUFrQixDQUFDUSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9iYXNpYy5qcz9kZTI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKS2FuYmFuRGVtb0Jhc2ljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBrYW5iYW4gPSBuZXcgakthbmJhbih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX2Jhc2ljJyxcclxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXHJcbiAgICAgICAgICAgIHdpZHRoQm9hcmQ6ICcyNTBweCcsXHJcbiAgICAgICAgICAgIGJvYXJkczogW3tcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2lucHJvY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0luIFByb2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Zb3UgY2FuIGRyYWcgbWUgdG9vPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkJ1eSBNaWxrPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX3dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdXb3JraW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5SdW4/PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QWxsIHJpZ2h0PC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPk9rITwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUJhc2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSkthbmJhbkRlbW9CYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RKS2FuYmFuRGVtb0Jhc2ljIiwiZXhhbXBsZUJhc2ljIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJ3aWR0aEJvYXJkIiwiYm9hcmRzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/basic.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/basic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;