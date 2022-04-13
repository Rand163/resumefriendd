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

/***/ "./resources/src/js/custom/layout-builder/layout-builder.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/layout-builder/layout-builder.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTLayoutBuilder = function () {\n  var form = document.querySelector(\"#kt_layout_builder_form\");\n  var actionInput = document.querySelector(\"#kt_layout_builder_action\");\n  var tabInput = document.querySelector(\"#kt_layout_builder_tab\");\n  var url = form.getAttribute(\"action\");\n  var previewButton = document.querySelector(\"#kt_layout_builder_preview\");\n  var exportButton = document.querySelector(\"#kt_layout_builder_export\");\n  var resetButton = document.querySelector(\"#kt_layout_builder_reset\");\n\n  var handleTab = function handleTab() {\n    var tabs = [].slice.call(document.querySelectorAll('#kt_layout_builder_tabs a[data-bs-toggle=\"tab\"]'));\n    tabs.forEach(function (tab) {\n      tab.addEventListener(\"shown.bs.tab\", function (e) {\n        tabInput.value = tab.getAttribute(\"href\").substring(1);\n      });\n    });\n  };\n\n  var handlePreview = function handlePreview() {\n    previewButton.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // Set form action value\n\n      actionInput.value = \"preview\"; // Show progress\n\n      previewButton.setAttribute(\"data-kt-indicator\", \"on\"); // Prepare form data\n\n      var data = $(form).serialize(); // Submit\n\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          toastr.success(\"Preview has been updated with current configured layout.\", \"Preview updated!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          setTimeout(function () {\n            location.reload(); // reload page\n          }, 1500);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n        },\n        complete: function complete() {\n          previewButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  var handleExport = function handleExport() {\n    exportButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      toastr.success(\"Process has been started and it may take a while.\", \"Generating HTML!\", {\n        timeOut: 0,\n        extendedTimeOut: 0,\n        closeButton: true,\n        closeDuration: 0\n      }); // Show progress\n\n      exportButton.setAttribute(\"data-kt-indicator\", \"on\"); // Set form action value\n\n      actionInput.value = \"export\"; // Prepare form data\n\n      var data = $(form).serialize();\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          var timer = setInterval(function () {\n            $(\"<iframe/>\").attr({\n              src: url + \"?layout-builder[action]=export&download=1&output=\" + response,\n              style: \"visibility:hidden;display:none\"\n            }).ready(function () {\n              // Stop the timer\n              clearInterval(timer);\n              exportButton.removeAttribute(\"data-kt-indicator\");\n            }).appendTo(\"body\");\n          }, 3000);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          exportButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  var handleReset = function handleReset() {\n    resetButton.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // Show progress\n\n      resetButton.setAttribute(\"data-kt-indicator\", \"on\"); // Set form action value\n\n      actionInput.value = \"reset\"; // Prepare form data\n\n      var data = $(form).serialize();\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          toastr.success(\"Preview has been successfully reset and the page will be reloaded.\", \"Reset Preview!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          setTimeout(function () {\n            location.reload(); // reload page\n          }, 1500);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n        },\n        complete: function complete() {\n          resetButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      handlePreview();\n      handleExport();\n      handleReset();\n      handleTab();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutBuilder.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9sYXlvdXQtYnVpbGRlci9sYXlvdXQtYnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFlBQVc7QUFDaEMsTUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVg7QUFDQSxNQUFJQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBbEI7QUFDQSxNQUFJRSxRQUFRLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBZjtBQUNBLE1BQUlHLEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxZQUFMLENBQWtCLFFBQWxCLENBQVY7QUFFQSxNQUFJQyxhQUFhLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBcEI7QUFDQSxNQUFJTSxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBbkI7QUFDQSxNQUFJTyxXQUFXLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBbEI7O0FBRUEsTUFBSVEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBVztBQUMxQixRQUFJQyxJQUFJLEdBQUcsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNaLFFBQVEsQ0FBQ2EsZ0JBQVQsQ0FBMEIsaURBQTFCLENBQWQsQ0FBWDtBQUVBSCxJQUFBQSxJQUFJLENBQUNJLE9BQUwsQ0FBYSxVQUFVQyxHQUFWLEVBQWU7QUFDM0JBLE1BQUFBLEdBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2pEZCxRQUFBQSxRQUFRLENBQUNlLEtBQVQsR0FBaUJILEdBQUcsQ0FBQ1YsWUFBSixDQUFpQixNQUFqQixFQUF5QmMsU0FBekIsQ0FBbUMsQ0FBbkMsQ0FBakI7QUFDQSxPQUZEO0FBR0EsS0FKRDtBQUtBLEdBUkQ7O0FBVUEsTUFB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LFVBQUFBLFdBQVcsQ0FBQ21DLGVBQVosQ0FBNEIsbUJBQTVCO0FBQ0E7QUF6QkssT0FBUDtBQTJCQSxLQXZDRDtBQXdDQSxHQXpDRDs7QUEyQ0EsU0FBTztBQUNOO0FBQ0FXLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNoQmxDLE1BQUFBLGFBQWE7QUFDYndCLE1BQUFBLFlBQVk7QUFDWlMsTUFBQUEsV0FBVztBQUNYNUMsTUFBQUEsU0FBUztBQUNUO0FBUEssR0FBUDtBQVNBLENBdEtxQixFQUF0QixFQXdLQTs7O0FBQ0E4QyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakMxRCxFQUFBQSxlQUFlLENBQUN3RCxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9sYXlvdXQtYnVpbGRlci9sYXlvdXQtYnVpbGRlci5qcz83Yzc2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RMYXlvdXRCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2xheW91dF9idWlsZGVyX2Zvcm1cIik7XHJcblx0dmFyIGFjdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9sYXlvdXRfYnVpbGRlcl9hY3Rpb25cIik7XHJcblx0dmFyIHRhYklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9sYXlvdXRfYnVpbGRlcl90YWJcIik7XHRcclxuXHR2YXIgdXJsID0gZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIik7XHJcblxyXG5cdHZhciBwcmV2aWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9sYXlvdXRfYnVpbGRlcl9wcmV2aWV3XCIpO1xyXG5cdHZhciBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2xheW91dF9idWlsZGVyX2V4cG9ydFwiKTtcclxuXHR2YXIgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2xheW91dF9idWlsZGVyX3Jlc2V0XCIpO1xyXG5cclxuXHR2YXIgaGFuZGxlVGFiID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdGFicyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2t0X2xheW91dF9idWlsZGVyX3RhYnMgYVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXScpKTtcclxuXHJcblx0XHR0YWJzLmZvckVhY2goZnVuY3Rpb24gKHRhYikge1xyXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcihcInNob3duLmJzLnRhYlwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRhYklucHV0LnZhbHVlID0gdGFiLmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3Vic3RyaW5nKDEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBoYW5kbGVQcmV2aWV3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRwcmV2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdC8vIFNldCBmb3JtIGFjdGlvbiB2YWx1ZVxyXG5cdFx0XHRhY3Rpb25JbnB1dC52YWx1ZSA9IFwicHJldmlld1wiO1xyXG5cclxuXHRcdFx0Ly8gU2hvdyBwcm9ncmVzc1xyXG5cdFx0XHRwcmV2aWV3QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XHJcblxyXG5cdFx0XHQvLyBQcmVwYXJlIGZvcm0gZGF0YVxyXG5cdFx0XHR2YXIgZGF0YSA9ICQoZm9ybSkuc2VyaWFsaXplKCk7XHJcblxyXG5cdFx0XHQvLyBTdWJtaXRcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIpIHtcclxuXHRcdFx0XHRcdHRvYXN0ci5zdWNjZXNzKFxyXG5cdFx0XHRcdFx0XHRcIlByZXZpZXcgaGFzIGJlZW4gdXBkYXRlZCB3aXRoIGN1cnJlbnQgY29uZmlndXJlZCBsYXlvdXQuXCIsIFxyXG5cdFx0XHRcdFx0XHRcIlByZXZpZXcgdXBkYXRlZCFcIiwgXHJcblx0XHRcdFx0XHRcdHt0aW1lT3V0OiAwLCBleHRlbmRlZFRpbWVPdXQ6IDAsIGNsb3NlQnV0dG9uOiB0cnVlLCBjbG9zZUR1cmF0aW9uOiAwfVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTsgLy8gcmVsb2FkIHBhZ2VcclxuXHRcdFx0XHRcdH0sIDE1MDApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0b2FzdHIuZXJyb3IoXHJcblx0XHRcdFx0XHRcdFwiUGxlYXNlIHRyeSBpdCBhZ2FpbiBsYXRlci5cIiwgXHJcblx0XHRcdFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIsIFxyXG5cdFx0XHRcdFx0XHR7dGltZU91dDogMCwgZXh0ZW5kZWRUaW1lT3V0OiAwLCBjbG9zZUJ1dHRvbjogdHJ1ZSwgY2xvc2VEdXJhdGlvbjogMH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRwcmV2aWV3QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR2YXIgaGFuZGxlRXhwb3J0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRleHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0dG9hc3RyLnN1Y2Nlc3MoXHJcblx0XHRcdFx0XCJQcm9jZXNzIGhhcyBiZWVuIHN0YXJ0ZWQgYW5kIGl0IG1heSB0YWtlIGEgd2hpbGUuXCIsIFxyXG5cdFx0XHRcdFwiR2VuZXJhdGluZyBIVE1MIVwiLCBcclxuXHRcdFx0XHR7dGltZU91dDogMCwgZXh0ZW5kZWRUaW1lT3V0OiAwLCBjbG9zZUJ1dHRvbjogdHJ1ZSwgY2xvc2VEdXJhdGlvbjogMH1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIFNob3cgcHJvZ3Jlc3NcclxuXHRcdFx0ZXhwb3J0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIsIFwib25cIik7XHJcblxyXG5cdFx0XHQvLyBTZXQgZm9ybSBhY3Rpb24gdmFsdWVcclxuXHRcdFx0YWN0aW9uSW5wdXQudmFsdWUgPSBcImV4cG9ydFwiO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUHJlcGFyZSBmb3JtIGRhdGFcclxuXHRcdFx0dmFyIGRhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZSgpO1xyXG5cclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIpIHtcclxuXHRcdFx0XHRcdHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKFwiPGlmcmFtZS8+XCIpLmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogdXJsICsgXCI/bGF5b3V0LWJ1aWxkZXJbYWN0aW9uXT1leHBvcnQmZG93bmxvYWQ9MSZvdXRwdXQ9XCIgKyByZXNwb25zZSxcclxuXHRcdFx0XHRcdFx0XHRzdHlsZTogXCJ2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5Om5vbmVcIixcclxuXHRcdFx0XHRcdFx0fSkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gU3RvcCB0aGUgdGltZXJcclxuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXhwb3J0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG5cdFx0XHRcdFx0XHR9KS5hcHBlbmRUbyhcImJvZHlcIik7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dG9hc3RyLmVycm9yKFxyXG5cdFx0XHRcdFx0XHRcIlBsZWFzZSB0cnkgaXQgYWdhaW4gbGF0ZXIuXCIsIFxyXG5cdFx0XHRcdFx0XHRcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCBcclxuXHRcdFx0XHRcdFx0e3RpbWVPdXQ6IDAsIGV4dGVuZGVkVGltZU91dDogMCwgY2xvc2VCdXR0b246IHRydWUsIGNsb3NlRHVyYXRpb246IDB9XHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGV4cG9ydEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHZhciBoYW5kbGVSZXNldCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Ly8gU2hvdyBwcm9ncmVzc1xyXG5cdFx0XHRyZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xyXG5cclxuXHRcdFx0Ly8gU2V0IGZvcm0gYWN0aW9uIHZhbHVlXHJcblx0XHRcdGFjdGlvbklucHV0LnZhbHVlID0gXCJyZXNldFwiO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gUHJlcGFyZSBmb3JtIGRhdGFcclxuXHRcdFx0dmFyIGRhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZSgpO1xyXG5cclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXHJcblx0XHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCB4aHIpIHtcclxuXHRcdFx0XHRcdHRvYXN0ci5zdWNjZXNzKFxyXG5cdFx0XHRcdFx0XHRcIlByZXZpZXcgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJlc2V0IGFuZCB0aGUgcGFnZSB3aWxsIGJlIHJlbG9hZGVkLlwiLCBcclxuXHRcdFx0XHRcdFx0XCJSZXNldCBQcmV2aWV3IVwiLCBcclxuXHRcdFx0XHRcdFx0e3RpbWVPdXQ6IDAsIGV4dGVuZGVkVGltZU91dDogMCwgY2xvc2VCdXR0b246IHRydWUsIGNsb3NlRHVyYXRpb246IDB9XHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpOyAvLyByZWxvYWQgcGFnZVxyXG5cdFx0XHRcdFx0fSwgMTUwMCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcihcclxuXHRcdFx0XHRcdFx0XCJQbGVhc2UgdHJ5IGl0IGFnYWluIGxhdGVyLlwiLCBcclxuXHRcdFx0XHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIiwgXHJcblx0XHRcdFx0XHRcdHt0aW1lT3V0OiAwLCBleHRlbmRlZFRpbWVPdXQ6IDAsIGNsb3NlQnV0dG9uOiB0cnVlLCBjbG9zZUR1cmF0aW9uOiAwfVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHJlc2V0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEta3QtaW5kaWNhdG9yXCIpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRoYW5kbGVQcmV2aWV3KCk7XHJcblx0XHRcdGhhbmRsZUV4cG9ydCgpO1xyXG5cdFx0XHRoYW5kbGVSZXNldCgpO1xyXG5cdFx0XHRoYW5kbGVUYWIoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RMYXlvdXRCdWlsZGVyLmluaXQoKTtcclxufSk7Il0sIm5hbWVzIjpbIktUTGF5b3V0QnVpbGRlciIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhY3Rpb25JbnB1dCIsInRhYklucHV0IiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHJldmlld0J1dHRvbiIsImV4cG9ydEJ1dHRvbiIsInJlc2V0QnV0dG9uIiwiaGFuZGxlVGFiIiwidGFicyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ2YWx1ZSIsInN1YnN0cmluZyIsImhhbmRsZVByZXZpZXciLCJwcmV2ZW50RGVmYXVsdCIsInNldEF0dHJpYnV0ZSIsImRhdGEiLCIkIiwic2VyaWFsaXplIiwiYWpheCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXR1cyIsInhociIsInRvYXN0ciIsInRpbWVPdXQiLCJleHRlbmRlZFRpbWVPdXQiLCJjbG9zZUJ1dHRvbiIsImNsb3NlRHVyYXRpb24iLCJzZXRUaW1lb3V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciIsImNvbXBsZXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlRXhwb3J0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImF0dHIiLCJzcmMiLCJzdHlsZSIsInJlYWR5IiwiY2xlYXJJbnRlcnZhbCIsImFwcGVuZFRvIiwiaGFuZGxlUmVzZXQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/layout-builder/layout-builder.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/layout-builder/layout-builder.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;