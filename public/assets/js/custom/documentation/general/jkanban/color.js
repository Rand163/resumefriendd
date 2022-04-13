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

/***/ "./resources/src/js/custom/documentation/general/jkanban/color.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/color.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJKanbanDemoColor = function () {\n  // Private functions\n  var exampleColor = function exampleColor() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_color',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'class': 'primary',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>',\n          'class': 'light-primary'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>',\n          'class': 'light-primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'success',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>',\n          'class': 'light-success'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>',\n          'class': 'light-success'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'danger',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>',\n          'class': 'light-danger'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>',\n          'class': 'light-danger'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColor();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoColor.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9jb2xvci5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztBQUNoQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVc7QUFDMUIsUUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUNyQkMsTUFBQUEsT0FBTyxFQUFFLHdCQURZO0FBRXJCQyxNQUFBQSxNQUFNLEVBQUUsR0FGYTtBQUdyQkMsTUFBQUEsVUFBVSxFQUFFLE9BSFM7QUFJckJDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0QsY0FBTSxZQURMO0FBRUQsaUJBQVMsWUFGUjtBQUdELGlCQUFTLFNBSFI7QUFJRCxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsa0RBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLHVDQURiO0FBRUksbUJBQVM7QUFGYixTQUpJO0FBSlAsT0FBRCxFQWFEO0FBQ0MsY0FBTSxVQURQO0FBRUMsaUJBQVMsU0FGVjtBQUdDLGlCQUFTLFNBSFY7QUFJQyxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsNENBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLG1DQURiO0FBRUksbUJBQVM7QUFGYixTQUpJO0FBSlQsT0FiQyxFQTBCRDtBQUNDLGNBQU0sT0FEUDtBQUVDLGlCQUFTLE1BRlY7QUFHQyxpQkFBUyxRQUhWO0FBSUMsZ0JBQVEsQ0FBQztBQUNELG1CQUFTLHdDQURSO0FBRUQsbUJBQVM7QUFGUixTQUFELEVBSUo7QUFDSSxtQkFBUyxrQ0FEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUpULE9BMUJDO0FBSmEsS0FBWixDQUFiO0FBOENILEdBL0NEOztBQWlEQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JQLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQXpEd0IsRUFBekIsRUEyREE7OztBQUNBUSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNWLEVBQUFBLGtCQUFrQixDQUFDUSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9jb2xvci5qcz9iMGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKS2FuYmFuRGVtb0NvbG9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVDb2xvciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBrYW5iYW4gPSBuZXcgakthbmJhbih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX2NvbG9yJyxcclxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXHJcbiAgICAgICAgICAgIHdpZHRoQm9hcmQ6ICcyNTBweCcsXHJcbiAgICAgICAgICAgIGJvYXJkczogW3tcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2lucHJvY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0luIFByb2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+WW91IGNhbiBkcmFnIG1lIHRvbzwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QnV5IE1pbGs8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX3dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdXb3JraW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRvIFNvbWV0aGluZyE8L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1zdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlJ1bj88L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1zdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEb25lJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QWxsIHJpZ2h0PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPk9rITwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUNvbG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSkthbmJhbkRlbW9Db2xvci5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RKS2FuYmFuRGVtb0NvbG9yIiwiZXhhbXBsZUNvbG9yIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJ3aWR0aEJvYXJkIiwiYm9hcmRzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/color.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/color.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;