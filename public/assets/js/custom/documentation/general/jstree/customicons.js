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

/***/ "./resources/src/js/custom/documentation/general/jstree/customicons.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jstree/customicons.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTJSTreeCustomIcons = function () {\n  // Private functions\n  var exampleCustomIcons = function exampleCustomIcons() {\n    $('#kt_docs_jstree_customicons').jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-warning\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-warning\"\n        }\n      },\n      \"plugins\": [\"types\"]\n    }); // handle link clicks in tree nodes(support target=\"_blank\" as well)\n\n    $('#kt_docs_jstree_customicons').on('select_node.jstree', function (e, data) {\n      var link = $('#' + data.selected).find('a');\n\n      if (link.attr(\"href\") != \"#\" && link.attr(\"href\") != \"javascript:;\" && link.attr(\"href\") != \"\") {\n        if (link.attr(\"target\") == \"_blank\") {\n          link.attr(\"href\").target = \"_blank\";\n        }\n\n        document.location.href = link.attr(\"href\");\n        return false;\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCustomIcons();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeCustomIcons.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2N1c3RvbWljb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFXO0FBQ2pDO0FBQ0EsTUFBSUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFXO0FBQ2hDQyxJQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ0MsTUFBakMsQ0FBd0M7QUFDcEMsY0FBUztBQUNMLGtCQUFXO0FBQ1Asd0JBQWM7QUFEUDtBQUROLE9BRDJCO0FBTXBDLGVBQVU7QUFDTixtQkFBWTtBQUNSLGtCQUFTO0FBREQsU0FETjtBQUlOLGdCQUFTO0FBQ0wsa0JBQVM7QUFESjtBQUpILE9BTjBCO0FBY3BDLGlCQUFXLENBQUMsT0FBRDtBQWR5QixLQUF4QyxFQURnQyxDQWtCaEM7O0FBQ0FELElBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDRSxFQUFqQyxDQUFvQyxvQkFBcEMsRUFBMEQsVUFBU0MsQ0FBVCxFQUFXQyxJQUFYLEVBQWlCO0FBQ3ZFLFVBQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLE1BQU1JLElBQUksQ0FBQ0UsUUFBWixDQUFELENBQXVCQyxJQUF2QixDQUE0QixHQUE1QixDQUFYOztBQUNBLFVBQUlGLElBQUksQ0FBQ0csSUFBTCxDQUFVLE1BQVYsS0FBcUIsR0FBckIsSUFBNEJILElBQUksQ0FBQ0csSUFBTCxDQUFVLE1BQVYsS0FBcUIsY0FBakQsSUFBbUVILElBQUksQ0FBQ0csSUFBTCxDQUFVLE1BQVYsS0FBcUIsRUFBNUYsRUFBZ0c7QUFDNUYsWUFBSUgsSUFBSSxDQUFDRyxJQUFMLENBQVUsUUFBVixLQUF1QixRQUEzQixFQUFxQztBQUNqQ0gsVUFBQUEsSUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixFQUFrQkMsTUFBbEIsR0FBMkIsUUFBM0I7QUFDSDs7QUFDREMsUUFBQUEsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxJQUFsQixHQUF5QlAsSUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixDQUF6QjtBQUNBLGVBQU8sS0FBUDtBQUNIO0FBQ0osS0FURDtBQVVILEdBN0JEOztBQStCQSxTQUFPO0FBQ0g7QUFDQUssSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JkLE1BQUFBLGtCQUFrQjtBQUNyQjtBQUpFLEdBQVA7QUFNSCxDQXZDeUIsRUFBMUIsRUF5Q0E7OztBQUNBZSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNqQixFQUFBQSxtQkFBbUIsQ0FBQ2UsSUFBcEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2pzdHJlZS9jdXN0b21pY29ucy5qcz81MmRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RKU1RyZWVDdXN0b21JY29ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQ3VzdG9tSWNvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcja3RfZG9jc19qc3RyZWVfY3VzdG9taWNvbnMnKS5qc3RyZWUoe1xyXG4gICAgICAgICAgICBcImNvcmVcIiA6IHtcclxuICAgICAgICAgICAgICAgIFwidGhlbWVzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidHlwZXNcIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZpbGVcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZmlsZSAgdGV4dC13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwbHVnaW5zXCI6IFtcInR5cGVzXCJdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSBsaW5rIGNsaWNrcyBpbiB0cmVlIG5vZGVzKHN1cHBvcnQgdGFyZ2V0PVwiX2JsYW5rXCIgYXMgd2VsbClcclxuICAgICAgICAkKCcja3RfZG9jc19qc3RyZWVfY3VzdG9taWNvbnMnKS5vbignc2VsZWN0X25vZGUuanN0cmVlJywgZnVuY3Rpb24oZSxkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rID0gJCgnIycgKyBkYXRhLnNlbGVjdGVkKS5maW5kKCdhJyk7XHJcbiAgICAgICAgICAgIGlmIChsaW5rLmF0dHIoXCJocmVmXCIpICE9IFwiI1wiICYmIGxpbmsuYXR0cihcImhyZWZcIikgIT0gXCJqYXZhc2NyaXB0OjtcIiAmJiBsaW5rLmF0dHIoXCJocmVmXCIpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaW5rLmF0dHIoXCJ0YXJnZXRcIikgPT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuYXR0cihcImhyZWZcIikudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVDdXN0b21JY29ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEpTVHJlZUN1c3RvbUljb25zLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZUN1c3RvbUljb25zIiwiZXhhbXBsZUN1c3RvbUljb25zIiwiJCIsImpzdHJlZSIsIm9uIiwiZSIsImRhdGEiLCJsaW5rIiwic2VsZWN0ZWQiLCJmaW5kIiwiYXR0ciIsInRhcmdldCIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/customicons.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jstree/customicons.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;