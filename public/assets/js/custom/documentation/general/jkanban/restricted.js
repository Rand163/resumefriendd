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

/***/ "./resources/src/js/custom/documentation/general/jkanban/restricted.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/restricted.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJKanbanDemoRestricted = function () {\n  // Private functions\n  var exampleRestricted = function exampleRestricted() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_restricted',\n      gutter: '0',\n      widthBoard: '250px',\n      click: function click(el) {\n        alert(el.innerHTML);\n      },\n      boards: [{\n        'id': '_todo',\n        'title': 'To Do',\n        'class': 'light-primary',\n        'dragTo': ['_working'],\n        'item': [{\n          'title': 'My Task Test',\n          'class': 'primary'\n        }, {\n          'title': 'Buy Milk',\n          'class': 'primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'light-warning',\n        'item': [{\n          'title': 'Do Something!',\n          'class': 'warning'\n        }, {\n          'title': 'Run?',\n          'class': 'warning'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'light-success',\n        'dragTo': ['_working'],\n        'item': [{\n          'title': 'All right',\n          'class': 'success'\n        }, {\n          'title': 'Ok!',\n          'class': 'success'\n        }]\n      }, {\n        'id': '_notes',\n        'title': 'Notes',\n        'class': 'light-danger',\n        'item': [{\n          'title': 'Warning Task',\n          'class': 'danger'\n        }, {\n          'title': 'Do not enter',\n          'class': 'danger'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRestricted();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoRestricted.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9yZXN0cmljdGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSx1QkFBdUIsR0FBRyxZQUFXO0FBQ3JDO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFXO0FBQy9CLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQVk7QUFDckJDLE1BQUFBLE9BQU8sRUFBRSw2QkFEWTtBQUVyQkMsTUFBQUEsTUFBTSxFQUFFLEdBRmE7QUFHckJDLE1BQUFBLFVBQVUsRUFBRSxPQUhTO0FBSXJCQyxNQUFBQSxLQUFLLEVBQUUsZUFBU0MsRUFBVCxFQUFhO0FBQ2hCQyxRQUFBQSxLQUFLLENBQUNELEVBQUUsQ0FBQ0UsU0FBSixDQUFMO0FBQ0gsT0FOb0I7QUFPckJDLE1BQUFBLE1BQU0sRUFBRSxDQUFDO0FBQ0QsY0FBTSxPQURMO0FBRUQsaUJBQVMsT0FGUjtBQUdELGlCQUFTLGVBSFI7QUFJRCxrQkFBVSxDQUFDLFVBQUQsQ0FKVDtBQUtELGdCQUFRLENBQUM7QUFDRCxtQkFBUyxjQURSO0FBRUQsbUJBQVM7QUFGUixTQUFELEVBSUo7QUFDSSxtQkFBUyxVQURiO0FBRUksbUJBQVM7QUFGYixTQUpJO0FBTFAsT0FBRCxFQWVKO0FBQ0ksY0FBTSxVQURWO0FBRUksaUJBQVMsU0FGYjtBQUdJLGlCQUFTLGVBSGI7QUFJSSxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsZUFEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsTUFEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUpaLE9BZkksRUE2Qko7QUFDSSxjQUFNLE9BRFY7QUFFSSxpQkFBUyxNQUZiO0FBR0ksaUJBQVMsZUFIYjtBQUlJLGtCQUFVLENBQUMsVUFBRCxDQUpkO0FBS0ksZ0JBQVEsQ0FBQztBQUNELG1CQUFTLFdBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLEtBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFMWixPQTdCSSxFQTRDSjtBQUNJLGNBQU0sUUFEVjtBQUVJLGlCQUFTLE9BRmI7QUFHSSxpQkFBUyxjQUhiO0FBSUksZ0JBQVEsQ0FBQztBQUNELG1CQUFTLGNBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLGNBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFKWixPQTVDSTtBQVBhLEtBQVosQ0FBYjtBQW1FSCxHQXBFRDs7QUFzRUEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiWCxNQUFBQSxpQkFBaUI7QUFDcEI7QUFKRSxHQUFQO0FBTUgsQ0E5RTZCLEVBQTlCLEVBZ0ZBOzs7QUFDQVksTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDZCxFQUFBQSx1QkFBdUIsQ0FBQ1ksSUFBeEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2prYW5iYW4vcmVzdHJpY3RlZC5qcz81YWY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKS2FuYmFuRGVtb1Jlc3RyaWN0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZVJlc3RyaWN0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIga2FuYmFuID0gbmV3IGpLYW5iYW4oe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnI2t0X2RvY3NfamthbmJhbl9yZXN0cmljdGVkJyxcclxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXHJcbiAgICAgICAgICAgIHdpZHRoQm9hcmQ6ICcyNTBweCcsXHJcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZWwuaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9hcmRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfdG9kbycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1RvIERvJyxcclxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RyYWdUbyc6IFsnX3dvcmtpbmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnTXkgVGFzayBUZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQnV5IE1pbGsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC13YXJuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnRG8gU29tZXRoaW5nIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1J1bj8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1zdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAnZHJhZ1RvJzogWydfd29ya2luZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdBbGwgcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdPayEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfbm90ZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOb3RlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dhcm5pbmcgVGFzaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnRG8gbm90IGVudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdkYW5nZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZVJlc3RyaWN0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKS2FuYmFuRGVtb1Jlc3RyaWN0ZWQuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUSkthbmJhbkRlbW9SZXN0cmljdGVkIiwiZXhhbXBsZVJlc3RyaWN0ZWQiLCJrYW5iYW4iLCJqS2FuYmFuIiwiZWxlbWVudCIsImd1dHRlciIsIndpZHRoQm9hcmQiLCJjbGljayIsImVsIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJib2FyZHMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/restricted.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/restricted.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;