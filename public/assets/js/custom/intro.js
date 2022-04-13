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

/***/ "./resources/src/js/custom/intro.js":
/*!******************************************!*\
  !*** ./resources/src/js/custom/intro.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTIntro = function () {\n  // Private functions\n  var handleIntro = function handleIntro(id, calback, timeout) {\n    var date = new Date();\n    var currentTime = date.getTime();\n    var time2days = 1000 * 60 * 60 * 24 * 2; // 2 days\n\n    var time7days = 1000 * 60 * 60 * 24 * 7; // 7 days\n\n    var time15days = 1000 * 60 * 60 * 24 * 15; // 15 days\n\n    var time21days = 1000 * 60 * 60 * 24 * 21; // 21 days\n\n    var time30days = 1000 * 60 * 60 * 24 * 30; // 30 days        \n\n    if (!KTCookie.get(id + '_counter') || parseInt(KTCookie.get(id + '_counter')) < 3) {\n      // Initial display\n      if (!KTCookie.get(id + '_counter')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_1', '1', {\n          expires: new Date(date.getTime() + time2days)\n        });\n        KTCookie.set(id + '_counter', '1', {\n          expires: new Date(date.getTime() + time30days)\n        });\n        return true;\n      } // 2 display\n\n\n      if (KTCookie.get(id + '_counter') == '1' && !KTCookie.get(id + '_show_1')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_2', '1', {\n          expires: new Date(date.getTime() + time7days)\n        });\n        KTCookie.set(id + '_counter', '2', {\n          expires: new Date(date.getTime() + time21days)\n        });\n        return true;\n      } // 3 display\n\n\n      if (KTCookie.get(id + '_counter') == '2' && !KTCookie.get(id + '_show_2')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_3', '1', {\n          expires: new Date(date.getTime() + time15days)\n        });\n        KTCookie.set(id + '_counter', '3', {\n          expires: new Date(date.getTime() + time15days)\n        });\n        return true;\n      }\n\n      return false;\n    }\n  };\n\n  var showtIntro1 = function showtIntro1() {\n    var element = document.querySelector('#kt_header_search_toggle');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      trigger: 'manual',\n      boundary: 'window',\n      placement: 'left',\n      dismiss: true,\n      html: true,\n      title: 'Quick Search',\n      content: 'Fully functional search with advance options and preferences setup'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Auto remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var showtIntro2 = function showtIntro2() {\n    var element = document.querySelector('#kt_toolbar_primary_button');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      boundary: 'window',\n      trigger: 'manual',\n      placement: 'left',\n      dismiss: true,\n      html: true,\n      title: 'Quick Notifications',\n      content: 'Seamless access to updates and notifications in various formats'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var showtIntro3 = function showtIntro3() {\n    var element = document.querySelector('#kt_header_user_menu_toggle');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      boundary: 'window',\n      placement: 'left',\n      trigger: 'manual',\n      dismiss: true,\n      html: true,\n      title: 'Advanced User Menu',\n      content: 'With quick links to user profile and account settings pages'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var initIntro = function initIntro(product) {\n    // Handle intro popovers displays\n    if (KTUtil.inIframe() === false) {\n      if (handleIntro('kt_' + product + '_intro_1', showtIntro1, 1000 * 5)) {} else if (handleIntro('kt_' + product + '_intro_2', showtIntro2, 1000 * 5)) {} else if (handleIntro('kt_' + product + '_intro_3', showtIntro3, 1000 * 5)) {}\n    }\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initIntro('seven');\n    }\n  };\n}(); // Webpack support\n\n\nif (typeof module !== 'undefined') {\n  module.exports = KTIntro;\n} // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTIntro.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9pbnRyby5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsT0FBTyxHQUFHLFlBQVk7QUFDdEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxFQUFULEVBQWFDLE9BQWIsRUFBc0JDLE9BQXRCLEVBQStCO0FBQzdDLFFBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLEVBQVg7QUFFQSxRQUFJQyxXQUFXLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxFQUFsQjtBQUVBLFFBQUlDLFNBQVMsR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLENBQXRDLENBTDZDLENBS0o7O0FBQ3pDLFFBQUlDLFNBQVMsR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLENBQXRDLENBTjZDLENBTUo7O0FBQ3pDLFFBQUlDLFVBQVUsR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLEVBQXZDLENBUDZDLENBT0Y7O0FBQzNDLFFBQUlDLFVBQVUsR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLEVBQXZDLENBUjZDLENBUUY7O0FBQzNDLFFBQUlDLFVBQVUsR0FBRyxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLEVBQXZDLENBVDZDLENBU0Y7O0FBRTNDLFFBQUksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFULENBQWFiLEVBQUUsR0FBRyxVQUFsQixDQUFELElBQWtDYyxRQUFRLENBQUNGLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhYixFQUFFLEdBQUcsVUFBbEIsQ0FBRCxDQUFSLEdBQTBDLENBQWhGLEVBQW1GO0FBQy9FO0FBQ0EsVUFBSSxDQUFDWSxRQUFRLENBQUNDLEdBQVQsQ0FBYWIsRUFBRSxHQUFHLFVBQWxCLENBQUwsRUFBb0M7QUFDaENlLFFBQUFBLFVBQVUsQ0FBQ2QsT0FBRCxFQUFVQyxPQUFWLENBQVYsQ0FEZ0MsQ0FDRjs7QUFFOUJVLFFBQUFBLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhaEIsRUFBRSxHQUFHLFNBQWxCLEVBQTZCLEdBQTdCLEVBQWtDO0FBQUNpQixVQUFBQSxPQUFPLEVBQUUsSUFBSWIsSUFBSixDQUFTRCxJQUFJLENBQUNHLE9BQUwsS0FBaUJDLFNBQTFCO0FBQVYsU0FBbEM7QUFFQUssUUFBQUEsUUFBUSxDQUFDSSxHQUFULENBQWFoQixFQUFFLEdBQUcsVUFBbEIsRUFBOEIsR0FBOUIsRUFBbUM7QUFBQ2lCLFVBQUFBLE9BQU8sRUFBRSxJQUFJYixJQUFKLENBQVNELElBQUksQ0FBQ0csT0FBTCxLQUFpQkssVUFBMUI7QUFBVixTQUFuQztBQUVBLGVBQU8sSUFBUDtBQUNILE9BVjhFLENBWS9FOzs7QUFDQSxVQUFJQyxRQUFRLENBQUNDLEdBQVQsQ0FBYWIsRUFBRSxHQUFHLFVBQWxCLEtBQWlDLEdBQWpDLElBQXdDLENBQUNZLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhYixFQUFFLEdBQUcsU0FBbEIsQ0FBN0MsRUFBMkU7QUFDdkVlLFFBQUFBLFVBQVUsQ0FBQ2QsT0FBRCxFQUFVQyxPQUFWLENBQVYsQ0FEdUUsQ0FDekM7O0FBRTlCVSxRQUFBQSxRQUFRLENBQUNJLEdBQVQsQ0FBYWhCLEVBQUUsR0FBRyxTQUFsQixFQUE2QixHQUE3QixFQUFrQztBQUFDaUIsVUFBQUEsT0FBTyxFQUFFLElBQUliLElBQUosQ0FBU0QsSUFBSSxDQUFDRyxPQUFMLEtBQWlCRSxTQUExQjtBQUFWLFNBQWxDO0FBRUFJLFFBQUFBLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhaEIsRUFBRSxHQUFHLFVBQWxCLEVBQThCLEdBQTlCLEVBQW1DO0FBQUNpQixVQUFBQSxPQUFPLEVBQUUsSUFBSWIsSUFBSixDQUFTRCxJQUFJLENBQUNHLE9BQUwsS0FBaUJJLFVBQTFCO0FBQVYsU0FBbkM7QUFFQSxlQUFPLElBQVA7QUFDSCxPQXJCOEUsQ0F1Qi9FOzs7QUFDQSxVQUFJRSxRQUFRLENBQUNDLEdBQVQsQ0FBYWIsRUFBRSxHQUFHLFVBQWxCLEtBQWlDLEdBQWpDLElBQXdDLENBQUNZLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhYixFQUFFLEdBQUcsU0FBbEIsQ0FBN0MsRUFBMkU7QUFDdkVlLFFBQUFBLFVBQVUsQ0FBQ2QsT0FBRCxFQUFVQyxPQUFWLENBQVYsQ0FEdUUsQ0FDekM7O0FBRTlCVSxRQUFBQSxRQUFRLENBQUNJLEdBQVQsQ0FBYWhCLEVBQUUsR0FBRyxTQUFsQixFQUE2QixHQUE3QixFQUFrQztBQUFDaUIsVUFBQUEsT0FBTyxFQUFFLElBQUliLElBQUosQ0FBU0QsSUFBSSxDQUFDRyxPQUFMLEtBQWlCRyxVQUExQjtBQUFWLFNBQWxDO0FBRUFHLFFBQUFBLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhaEIsRUFBRSxHQUFHLFVBQWxCLEVBQThCLEdBQTlCLEVBQW1DO0FBQUNpQixVQUFBQSxPQUFPLEVBQUUsSUFBSWIsSUFBSixDQUFTRCxJQUFJLENBQUNHLE9BQUwsS0FBaUJHLFVBQTFCO0FBQVYsU0FBbkM7QUFFQSxlQUFPLElBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBL0NEOztBQWlEQSxNQUFJUyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFXO0FBQ3pCLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDBCQUF2QixDQUFkOztBQUVBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJRyxPQUFPLEdBQUc7QUFDVkMsTUFBQUEsV0FBVyxFQUFFLGNBREg7QUFFVkMsTUFBQUEsU0FBUyxFQUFFLE1BRkQ7QUFHVkMsTUFBQUEsT0FBTyxFQUFFLFFBSEM7QUFJVkMsTUFBQUEsUUFBUSxFQUFFLFFBSkE7QUFLVkMsTUFBQUEsU0FBUyxFQUFFLE1BTEQ7QUFNVkMsTUFBQUEsT0FBTyxFQUFFLElBTkM7QUFPVkMsTUFBQUEsSUFBSSxFQUFFLElBUEk7QUFRVkMsTUFBQUEsS0FBSyxFQUFFLGNBUkc7QUFTVkMsTUFBQUEsT0FBTyxFQUFFO0FBVEMsS0FBZCxDQVB5QixDQW1CekI7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLG9CQUFOLENBQTJCZixPQUEzQixFQUFvQ0csT0FBcEMsQ0FBZDtBQUNBVSxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FyQnlCLENBdUJ6Qjs7QUFDQXBCLElBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCLFVBQUlpQixPQUFKLEVBQWE7QUFDVEEsUUFBQUEsT0FBTyxDQUFDSSxPQUFSO0FBQ0g7QUFDSixLQUpTLEVBSVAsT0FBTyxFQUpBLENBQVYsQ0F4QnlCLENBNEJWO0FBRWY7O0FBQ0FqQixJQUFBQSxPQUFPLENBQUNrQixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDMUNOLE1BQUFBLE9BQU8sQ0FBQ0ksT0FBUjtBQUNILEtBRkQ7QUFHSCxHQWxDRDs7QUFvQ0EsTUFBSUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUN6QixRQUFJcEIsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWQ7O0FBRUEsUUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFFBQUlHLE9BQU8sR0FBRztBQUNWQyxNQUFBQSxXQUFXLEVBQUUsY0FESDtBQUVWQyxNQUFBQSxTQUFTLEVBQUUsTUFGRDtBQUdWRSxNQUFBQSxRQUFRLEVBQUUsUUFIQTtBQUlWRCxNQUFBQSxPQUFPLEVBQUUsUUFKQztBQUtWRSxNQUFBQSxTQUFTLEVBQUUsTUFMRDtBQU1WQyxNQUFBQSxPQUFPLEVBQUUsSUFOQztBQU9WQyxNQUFBQSxJQUFJLEVBQUUsSUFQSTtBQVFWQyxNQUFBQSxLQUFLLEVBQUUscUJBUkc7QUFTVkMsTUFBQUEsT0FBTyxFQUFFO0FBVEMsS0FBZCxDQVB5QixDQW1CekI7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLG9CQUFOLENBQTJCZixPQUEzQixFQUFvQ0csT0FBcEMsQ0FBZDtBQUNBVSxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FyQnlCLENBdUJ6Qjs7QUFDQXBCLElBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCLFVBQUlpQixPQUFKLEVBQWE7QUFDVEEsUUFBQUEsT0FBTyxDQUFDSSxPQUFSO0FBQ0g7QUFDSixLQUpTLEVBSVAsT0FBTyxFQUpBLENBQVYsQ0F4QnlCLENBNEJWO0FBRWY7O0FBQ0FqQixJQUFBQSxPQUFPLENBQUNrQixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDMUNOLE1BQUFBLE9BQU8sQ0FBQ0ksT0FBUjtBQUNILEtBRkQ7QUFHSCxHQWxDRDs7QUFvQ0EsTUFBSUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUN6QixRQUFJckIsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsNkJBQXZCLENBQWQ7O0FBRUEsUUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFFBQUlHLE9BQU8sR0FBRztBQUNWQyxNQUFBQSxXQUFXLEVBQUUsY0FESDtBQUVWQyxNQUFBQSxTQUFTLEVBQUUsTUFGRDtBQUdWRSxNQUFBQSxRQUFRLEVBQUUsUUFIQTtBQUlWQyxNQUFBQSxTQUFTLEVBQUUsTUFKRDtBQUtWRixNQUFBQSxPQUFPLEVBQUUsUUFMQztBQU1WRyxNQUFBQSxPQUFPLEVBQUUsSUFOQztBQU9WQyxNQUFBQSxJQUFJLEVBQUUsSUFQSTtBQVFWQyxNQUFBQSxLQUFLLEVBQUUsb0JBUkc7QUFTVkMsTUFBQUEsT0FBTyxFQUFFO0FBVEMsS0FBZCxDQVB5QixDQW1CekI7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHQyxLQUFLLENBQUNDLG9CQUFOLENBQTJCZixPQUEzQixFQUFvQ0csT0FBcEMsQ0FBZDtBQUNBVSxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FyQnlCLENBdUJ6Qjs7QUFDQXBCLElBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCLFVBQUlpQixPQUFKLEVBQWE7QUFDVEEsUUFBQUEsT0FBTyxDQUFDSSxPQUFSO0FBQ0g7QUFDSixLQUpTLEVBSVAsT0FBTyxFQUpBLENBQVYsQ0F4QnlCLENBNEJWO0FBRWY7O0FBQ0FqQixJQUFBQSxPQUFPLENBQUNrQixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDMUNOLE1BQUFBLE9BQU8sQ0FBQ0ksT0FBUjtBQUNILEtBRkQ7QUFHSCxHQWxDRDs7QUFvQ0EsTUFBSUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU0MsT0FBVCxFQUFrQjtBQUM5QjtBQUNBLFFBQUlDLE1BQU0sQ0FBQ0MsUUFBUCxPQUFzQixLQUExQixFQUFpQztBQUM3QixVQUFJN0MsV0FBVyxDQUFDLFFBQVEyQyxPQUFSLEdBQWtCLFVBQW5CLEVBQStCeEIsV0FBL0IsRUFBNEMsT0FBTyxDQUFuRCxDQUFmLEVBQXNFLENBQ3JFLENBREQsTUFDTyxJQUFJbkIsV0FBVyxDQUFDLFFBQVEyQyxPQUFSLEdBQWtCLFVBQW5CLEVBQStCSCxXQUEvQixFQUE0QyxPQUFPLENBQW5ELENBQWYsRUFBc0UsQ0FDNUUsQ0FETSxNQUNBLElBQUl4QyxXQUFXLENBQUMsUUFBUTJDLE9BQVIsR0FBa0IsVUFBbkIsRUFBK0JGLFdBQS9CLEVBQTRDLE9BQU8sQ0FBbkQsQ0FBZixFQUFzRSxDQUM1RTtBQUNKO0FBQ0osR0FSRCxDQS9Kc0IsQ0F5S3RCOzs7QUFDQSxTQUFPO0FBQ0hLLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkSixNQUFBQSxTQUFTLENBQUMsT0FBRCxDQUFUO0FBQ0g7QUFIRSxHQUFQO0FBS0gsQ0EvS2EsRUFBZCxFQWlMQTs7O0FBQ0EsSUFBSSxPQUFPSyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQy9CQSxFQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJqRCxPQUFqQjtBQUNILEVBRUQ7OztBQUNBNkMsTUFBTSxDQUFDSyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDbEQsRUFBQUEsT0FBTyxDQUFDK0MsSUFBUjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9pbnRyby5qcz83YWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RJbnRybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgaGFuZGxlSW50cm8gPSBmdW5jdGlvbihpZCwgY2FsYmFjaywgdGltZW91dCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZGF0ZS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIHZhciB0aW1lMmRheXMgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMjsgLy8gMiBkYXlzXHJcbiAgICAgICAgdmFyIHRpbWU3ZGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiA3OyAvLyA3IGRheXNcclxuICAgICAgICB2YXIgdGltZTE1ZGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAxNTsgLy8gMTUgZGF5c1xyXG4gICAgICAgIHZhciB0aW1lMjFkYXlzID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDIxOyAvLyAyMSBkYXlzXHJcbiAgICAgICAgdmFyIHRpbWUzMGRheXMgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMzA7IC8vIDMwIGRheXMgICAgICAgIFxyXG5cclxuICAgICAgICBpZiAoIUtUQ29va2llLmdldChpZCArICdfY291bnRlcicpIHx8IHBhcnNlSW50KEtUQ29va2llLmdldChpZCArICdfY291bnRlcicpKSA8IDMpIHtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbCBkaXNwbGF5XHJcbiAgICAgICAgICAgIGlmICghS1RDb29raWUuZ2V0KGlkICsgJ19jb3VudGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsYmFjaywgdGltZW91dCk7IC8vIERpc3BsYXkgaW50cm8gaW4gNSBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEtUQ29va2llLnNldChpZCArICdfc2hvd18xJywgJzEnLCB7ZXhwaXJlczogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lMmRheXMpfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgS1RDb29raWUuc2V0KGlkICsgJ19jb3VudGVyJywgJzEnLCB7ZXhwaXJlczogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lMzBkYXlzKX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgLy8gMiBkaXNwbGF5XHJcbiAgICAgICAgICAgIGlmIChLVENvb2tpZS5nZXQoaWQgKyAnX2NvdW50ZXInKSA9PSAnMScgJiYgIUtUQ29va2llLmdldChpZCArICdfc2hvd18xJykpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsYmFjaywgdGltZW91dCk7IC8vIERpc3BsYXkgaW50cm8gaW4gNSBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEtUQ29va2llLnNldChpZCArICdfc2hvd18yJywgJzEnLCB7ZXhwaXJlczogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lN2RheXMpfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEtUQ29va2llLnNldChpZCArICdfY291bnRlcicsICcyJywge2V4cGlyZXM6IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgdGltZTIxZGF5cyl9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMyBkaXNwbGF5XHJcbiAgICAgICAgICAgIGlmIChLVENvb2tpZS5nZXQoaWQgKyAnX2NvdW50ZXInKSA9PSAnMicgJiYgIUtUQ29va2llLmdldChpZCArICdfc2hvd18yJykpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsYmFjaywgdGltZW91dCk7IC8vIERpc3BsYXkgaW50cm8gaW4gNSBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEtUQ29va2llLnNldChpZCArICdfc2hvd18zJywgJzEnLCB7ZXhwaXJlczogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lMTVkYXlzKX0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBLVENvb2tpZS5zZXQoaWQgKyAnX2NvdW50ZXInLCAnMycsIHtleHBpcmVzOiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWUxNWRheXMpfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNob3d0SW50cm8xID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfaGVhZGVyX3NlYXJjaF90b2dnbGUnKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjdXN0b21DbGFzczogJ3BvcG92ZXItZGFyaycsXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcclxuICAgICAgICAgICAgYm91bmRhcnk6ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgZGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgICAgaHRtbDogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6ICdRdWljayBTZWFyY2gnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnRnVsbHkgZnVuY3Rpb25hbCBzZWFyY2ggd2l0aCBhZHZhbmNlIG9wdGlvbnMgYW5kIHByZWZlcmVuY2VzIHNldHVwJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXHJcbiAgICAgICAgdmFyIHBvcG92ZXIgPSBLVEFwcC5pbml0Qm9vdHN0cmFwUG9wb3ZlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBwb3BvdmVyLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gQXV0byByZW1vdmVcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAocG9wb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSwgMTAwMCAqIDEwKTsgLy8gMTAgc2Vjb25kc1xyXG5cclxuICAgICAgICAvLyBIaWRlIHBvcG92ZXIgb24gZWxlbWVudCBjbGlja1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNob3d0SW50cm8yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfdG9vbGJhcl9wcmltYXJ5X2J1dHRvbicpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiAncG9wb3Zlci1kYXJrJyxcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXHJcbiAgICAgICAgICAgIGJvdW5kYXJ5OiAnd2luZG93JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXHJcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ2xlZnQnLFxyXG4gICAgICAgICAgICBkaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1F1aWNrIE5vdGlmaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnU2VhbWxlc3MgYWNjZXNzIHRvIHVwZGF0ZXMgYW5kIG5vdGlmaWNhdGlvbnMgaW4gdmFyaW91cyBmb3JtYXRzJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXHJcbiAgICAgICAgdmFyIHBvcG92ZXIgPSBLVEFwcC5pbml0Qm9vdHN0cmFwUG9wb3ZlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBwb3BvdmVyLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHBvcG92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0sIDEwMDAgKiAxMCk7IC8vIDEwIHNlY29uZHNcclxuXHJcbiAgICAgICAgLy8gSGlkZSBwb3BvdmVyIG9uIGVsZW1lbnQgY2xpY2tcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzaG93dEludHJvMyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2hlYWRlcl91c2VyX21lbnVfdG9nZ2xlJyk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdwb3BvdmVyLWRhcmsnLFxyXG4gICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcclxuICAgICAgICAgICAgYm91bmRhcnk6ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXHJcbiAgICAgICAgICAgIGRpc21pc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGh0bWw6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWR2YW5jZWQgVXNlciBNZW51JyxcclxuICAgICAgICAgICAgY29udGVudDogJ1dpdGggcXVpY2sgbGlua3MgdG8gdXNlciBwcm9maWxlIGFuZCBhY2NvdW50IHNldHRpbmdzIHBhZ2VzJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXHJcbiAgICAgICAgdmFyIHBvcG92ZXIgPSBLVEFwcC5pbml0Qm9vdHN0cmFwUG9wb3ZlcihlbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBwb3BvdmVyLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHBvcG92ZXIpIHtcclxuICAgICAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0sIDEwMDAgKiAxMCk7IC8vIDEwIHNlY29uZHNcclxuXHJcbiAgICAgICAgLy8gSGlkZSBwb3BvdmVyIG9uIGVsZW1lbnQgY2xpY2tcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHBvcG92ZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbml0SW50cm8gPSBmdW5jdGlvbihwcm9kdWN0KSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGludHJvIHBvcG92ZXJzIGRpc3BsYXlzXHJcbiAgICAgICAgaWYgKEtUVXRpbC5pbklmcmFtZSgpID09PSBmYWxzZSkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGhhbmRsZUludHJvKCdrdF8nICsgcHJvZHVjdCArICdfaW50cm9fMScsIHNob3d0SW50cm8xLCAxMDAwICogNSkpIHtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVJbnRybygna3RfJyArIHByb2R1Y3QgKyAnX2ludHJvXzInLCBzaG93dEludHJvMiwgMTAwMCAqIDUpKSB7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlSW50cm8oJ2t0XycgKyBwcm9kdWN0ICsgJ19pbnRyb18zJywgc2hvd3RJbnRybzMsIDEwMDAgKiA1KSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRJbnRybygnc2V2ZW4nKTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIFdlYnBhY2sgc3VwcG9ydFxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gS1RJbnRybztcclxufVxyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtUSW50cm8uaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUSW50cm8iLCJoYW5kbGVJbnRybyIsImlkIiwiY2FsYmFjayIsInRpbWVvdXQiLCJkYXRlIiwiRGF0ZSIsImN1cnJlbnRUaW1lIiwiZ2V0VGltZSIsInRpbWUyZGF5cyIsInRpbWU3ZGF5cyIsInRpbWUxNWRheXMiLCJ0aW1lMjFkYXlzIiwidGltZTMwZGF5cyIsIktUQ29va2llIiwiZ2V0IiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0Iiwic2V0IiwiZXhwaXJlcyIsInNob3d0SW50cm8xIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbnMiLCJjdXN0b21DbGFzcyIsImNvbnRhaW5lciIsInRyaWdnZXIiLCJib3VuZGFyeSIsInBsYWNlbWVudCIsImRpc21pc3MiLCJodG1sIiwidGl0bGUiLCJjb250ZW50IiwicG9wb3ZlciIsIktUQXBwIiwiaW5pdEJvb3RzdHJhcFBvcG92ZXIiLCJzaG93IiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2hvd3RJbnRybzIiLCJzaG93dEludHJvMyIsImluaXRJbnRybyIsInByb2R1Y3QiLCJLVFV0aWwiLCJpbklmcmFtZSIsImluaXQiLCJtb2R1bGUiLCJleHBvcnRzIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/intro.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/intro.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;