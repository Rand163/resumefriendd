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

/***/ "./resources/src/js/custom/documentation/general/jstree/ajax.js":
/*!**********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jstree/ajax.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJSTreeAjax = function () {\n  // Private functions\n  var exampleAjax = function exampleAjax() {\n    $(\"#kt_docs_jstree_ajax\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': {\n          'url': function url(node) {\n            return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint\n          },\n          'data': function data(node) {\n            return {\n              'parent': node.id\n            };\n          }\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo3\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAjax();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeAjax.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2FqYXguanMuanMiLCJtYXBwaW5ncyI6IjtDQUVBOztBQUNBLElBQUlBLFlBQVksR0FBRyxZQUFXO0FBQzFCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUN6QkMsSUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJDLE1BQTFCLENBQWlDO0FBQzdCLGNBQVE7QUFDSixrQkFBVTtBQUNOLHdCQUFjO0FBRFIsU0FETjtBQUlKO0FBQ0EsMEJBQWtCLElBTGQ7QUFNSixnQkFBUTtBQUNKLGlCQUFPLGFBQVNDLElBQVQsRUFBZTtBQUNsQixtQkFBTyx5REFBUCxDQURrQixDQUNnRDtBQUNyRSxXQUhHO0FBSUosa0JBQVEsY0FBU0EsSUFBVCxFQUFlO0FBQ25CLG1CQUFPO0FBQ0gsd0JBQVVBLElBQUksQ0FBQ0M7QUFEWixhQUFQO0FBR0g7QUFSRztBQU5KLE9BRHFCO0FBa0I3QixlQUFTO0FBQ0wsbUJBQVc7QUFDUCxrQkFBUTtBQURELFNBRE47QUFJTCxnQkFBUTtBQUNKLGtCQUFRO0FBREo7QUFKSCxPQWxCb0I7QUEwQjdCLGVBQVM7QUFDTCxlQUFPO0FBREYsT0ExQm9CO0FBNkI3QixpQkFBVyxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE9BQWpCO0FBN0JrQixLQUFqQztBQStCSCxHQWhDRDs7QUFrQ0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiTCxNQUFBQSxXQUFXO0FBQ2Q7QUFKRSxHQUFQO0FBTUgsQ0ExQ2tCLEVBQW5CLEVBNENBOzs7QUFDQU0sTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDUixFQUFBQSxZQUFZLENBQUNNLElBQWI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2pzdHJlZS9hamF4LmpzP2I4NmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEpTVHJlZUFqYXggPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUFqYXggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI2t0X2RvY3NfanN0cmVlX2FqYXhcIikuanN0cmVlKHtcclxuICAgICAgICAgICAgXCJjb3JlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidGhlbWVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInJlc3BvbnNpdmVcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IGNyZWF0ZSB3b3Jrc1xyXG4gICAgICAgICAgICAgICAgXCJjaGVja19jYWxsYmFja1wiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3VybCc6IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdodHRwczovL3ByZXZpZXcua2VlbnRoZW1lcy5jb20vYXBpL2pzdHJlZS9hamF4X2RhdGEucGhwJzsgLy8gRGVtbyBBUEkgZW5kcG9pbnQgLS0gUmVwbGFjZSB0aGlzIFVSTCB3aXRoIHlvdXIgc2V0IGVuZHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJlbnQnOiBub2RlLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInR5cGVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZm9sZGVyIHRleHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJmaWxlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS1maWxlICB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiZGVtbzNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInBsdWdpbnNcIjogW1wiZG5kXCIsIFwic3RhdGVcIiwgXCJ0eXBlc1wiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQWpheCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEpTVHJlZUFqYXguaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUSlNUcmVlQWpheCIsImV4YW1wbGVBamF4IiwiJCIsImpzdHJlZSIsIm5vZGUiLCJpZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/ajax.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jstree/ajax.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;