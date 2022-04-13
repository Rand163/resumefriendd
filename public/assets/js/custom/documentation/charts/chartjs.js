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

/***/ "./resources/src/js/custom/documentation/charts/chartjs.js":
/*!*****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/charts/chartjs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTGeneralChartJS = function () {\n  // Randomizer function\n  function getRandom() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    return Math.floor(Math.random() * (max - min) + min);\n  }\n\n  function generateRandomData() {\n    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    var arr = [];\n\n    for (var i = 0; i < count; i++) {\n      arr.push(getRandom(min, max));\n    }\n\n    return arr;\n  } // Private functions\n\n\n  var example1 = function example1() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_1'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: primaryColor,\n        stack: 'Stack 0'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: dangerColor,\n        stack: 'Stack 1'\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(1, 100, 12),\n        backgroundColor: successColor,\n        stack: 'Stack 2'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'bar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          x: {\n            stacked: true\n          },\n          y: {\n            stacked: true\n          }\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example2 = function example2() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_2'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 50, 7),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 50, 7),\n        borderColor: dangerColor,\n        backgroundColor: 'transparent'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example3 = function example3() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_3'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var successColor = KTUtil.getCssVariableValue('--bs-success');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var infoColor = KTUtil.getCssVariableValue('--bs-info'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(1, 100, 5),\n        backgroundColor: [primaryColor, dangerColor, successColor, warningColor, infoColor]\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'pie',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example4 = function example4() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_4'); // Define colors\n\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var dangerColor = KTUtil.getCssVariableValue('--bs-danger');\n    var dangerLightColor = KTUtil.getCssVariableValue('--bs-light-danger'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(50, 100, 12),\n        borderColor: primaryColor,\n        backgroundColor: 'transparent',\n        stack: 'combined'\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(1, 60, 12),\n        backgroundColor: dangerColor,\n        borderColor: dangerColor,\n        stack: 'combined',\n        type: 'bar'\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'line',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true,\n        interaction: {\n          intersect: false\n        },\n        scales: {\n          y: {\n            stacked: true\n          }\n        }\n      },\n      defaults: {\n        font: {\n          family: 'inherit'\n        }\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  var example5 = function example5() {\n    // Define chart element\n    var ctx = document.getElementById('kt_chartjs_5'); // Define colors\n\n    var infoColor = KTUtil.getCssVariableValue('--bs-info');\n    var infoLightColor = KTUtil.getCssVariableValue('--bs-light-info');\n    var warningColor = KTUtil.getCssVariableValue('--bs-warning');\n    var warningLightColor = KTUtil.getCssVariableValue('--bs-light-warning');\n    var primaryColor = KTUtil.getCssVariableValue('--bs-primary');\n    var primaryLightColor = KTUtil.getCssVariableValue('--bs-light-primary'); // Define fonts\n\n    var fontFamily = KTUtil.getCssVariableValue('--bs-font-sans-serif'); // Chart labels\n\n    var labels = ['January', 'February', 'March', 'April', 'May', 'June']; // Chart data\n\n    var data = {\n      labels: labels,\n      datasets: [{\n        label: 'Dataset 1',\n        data: generateRandomData(20, 80, 6),\n        borderColor: infoColor,\n        backgroundColor: infoLightColor\n      }, {\n        label: 'Dataset 2',\n        data: generateRandomData(10, 60, 6),\n        backgroundColor: warningLightColor,\n        borderColor: warningColor\n      }, {\n        label: 'Dataset 3',\n        data: generateRandomData(0, 80, 6),\n        backgroundColor: primaryLightColor,\n        borderColor: primaryColor\n      }]\n    }; // Chart config\n\n    var config = {\n      type: 'radar',\n      data: data,\n      options: {\n        plugins: {\n          title: {\n            display: false\n          }\n        },\n        responsive: true\n      }\n    }; // Init ChartJS -- for more info, please visit: https://www.chartjs.org/docs/latest/\n\n    var myChart = new Chart(ctx, config);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      // Global font settings: https://www.chartjs.org/docs/latest/general/fonts.html\n      Chart.defaults.font.size = 13;\n      Chart.defaults.font.family = KTUtil.getCssVariableValue('--bs-font-sans-serif');\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralChartJS.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9jaGFydGpzLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFZO0FBQy9CO0FBQ0EsV0FBU0MsU0FBVCxHQUF1QztBQUFBLFFBQXBCQyxHQUFvQix1RUFBZCxDQUFjO0FBQUEsUUFBWEMsR0FBVyx1RUFBTCxHQUFLO0FBQ25DLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJILEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXpDLENBQVA7QUFDSDs7QUFFRCxXQUFTSyxrQkFBVCxHQUE0RDtBQUFBLFFBQWhDTCxHQUFnQyx1RUFBMUIsQ0FBMEI7QUFBQSxRQUF2QkMsR0FBdUIsdUVBQWpCLEdBQWlCO0FBQUEsUUFBWkssS0FBWSx1RUFBSixFQUFJO0FBQ3hELFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsS0FBcEIsRUFBMkJFLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUJELE1BQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTVixTQUFTLENBQUNDLEdBQUQsRUFBTUMsR0FBTixDQUFsQjtBQUNIOztBQUNELFdBQU9NLEdBQVA7QUFDSCxHQVo4QixDQWMvQjs7O0FBQ0EsTUFBSUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QjtBQUNBLFFBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQVYsQ0FGdUIsQ0FJdkI7O0FBQ0EsUUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLG1CQUFQLENBQTJCLGNBQTNCLENBQW5CO0FBQ0EsUUFBSUMsV0FBVyxHQUFHRixNQUFNLENBQUNDLG1CQUFQLENBQTJCLGFBQTNCLENBQWxCO0FBQ0EsUUFBSUUsWUFBWSxHQUFHSCxNQUFNLENBQUNDLG1C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QUEsZ0JBQWdCLENBQUN5RCxJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9jaGFydGpzLmpzP2ZkNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEdlbmVyYWxDaGFydEpTID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUmFuZG9taXplciBmdW5jdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiA9IDEsIG1heCA9IDEwMCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21EYXRhKG1pbiA9IDEsIG1heCA9IDEwMCwgY291bnQgPSAxMCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgYXJyLnB1c2goZ2V0UmFuZG9tKG1pbiwgbWF4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc18xJyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcclxuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xyXG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xyXG4gICAgICAgIHZhciBzdWNjZXNzQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1zdWNjZXNzJyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBmb250c1xyXG4gICAgICAgIHZhciBmb250RmFtaWx5ID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZm9udC1zYW5zLXNlcmlmJyk7XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGxhYmVsc1xyXG4gICAgICAgIGNvbnN0IGxhYmVscyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBkYXRhXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCAxMDAsIDEyKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ1N0YWNrIDAnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgMTIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdTdGFjayAxJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRhc2V0IDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlUmFuZG9tRGF0YSgxLCAxMDAsIDEyKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ1N0YWNrIDInLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cclxuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGUyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzInKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xyXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3NDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXN1Y2Nlc3MnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGZvbnRzXHJcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXHJcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgNTAsIDcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0YXNldCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZW5lcmF0ZVJhbmRvbURhdGEoMSwgNTAsIDcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDaGFydCBjb25maWdcclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXHJcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGFtcGxlMyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc18zJyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcclxuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xyXG4gICAgICAgIHZhciBkYW5nZXJDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWRhbmdlcicpO1xyXG4gICAgICAgIHZhciBzdWNjZXNzQ29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1zdWNjZXNzJyk7XHJcbiAgICAgICAgdmFyIHdhcm5pbmdDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLXdhcm5pbmcnKTtcclxuICAgICAgICB2YXIgaW5mb0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtaW5mbycpO1xyXG5cclxuICAgICAgICAvLyBDaGFydCBsYWJlbHNcclxuICAgICAgICBjb25zdCBsYWJlbHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5J107XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDEwMCwgNSksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbcHJpbWFyeUNvbG9yLCBkYW5nZXJDb2xvciwgc3VjY2Vzc0NvbG9yLCB3YXJuaW5nQ29sb3IsIGluZm9Db2xvcl1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDaGFydCBjb25maWdcclxuICAgICAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBJbml0IENoYXJ0SlMgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHZpc2l0OiBodHRwczovL3d3dy5jaGFydGpzLm9yZy9kb2NzL2xhdGVzdC9cclxuICAgICAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGV4YW1wbGU0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERlZmluZSBjaGFydCBlbGVtZW50XHJcbiAgICAgICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jaGFydGpzXzQnKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGNvbG9yc1xyXG4gICAgICAgIHZhciBwcmltYXJ5Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1wcmltYXJ5Jyk7XHJcbiAgICAgICAgdmFyIGRhbmdlckNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtZGFuZ2VyJyk7XHJcbiAgICAgICAgdmFyIGRhbmdlckxpZ2h0Q29sb3IgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1saWdodC1kYW5nZXInKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGZvbnRzXHJcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXHJcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDUwLCAxMDAsIDEyKSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogcHJpbWFyeUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBzdGFjazogJ2NvbWJpbmVkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEsIDYwLCAxMiksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogZGFuZ2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6ICdjb21iaW5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2JhcidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFja2VkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWZhdWx0czoge1xyXG4gICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXHJcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBleGFtcGxlNSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEZWZpbmUgY2hhcnQgZWxlbWVudFxyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2hhcnRqc181Jyk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSBjb2xvcnNcclxuICAgICAgICB2YXIgaW5mb0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtaW5mbycpO1xyXG4gICAgICAgIHZhciBpbmZvTGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LWluZm8nKTtcclxuICAgICAgICB2YXIgd2FybmluZ0NvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtd2FybmluZycpO1xyXG4gICAgICAgIHZhciB3YXJuaW5nTGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXdhcm5pbmcnKTtcclxuICAgICAgICB2YXIgcHJpbWFyeUNvbG9yID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtcHJpbWFyeScpO1xyXG4gICAgICAgIHZhciBwcmltYXJ5TGlnaHRDb2xvciA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWxpZ2h0LXByaW1hcnknKTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIGZvbnRzXHJcbiAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcnQgbGFiZWxzXHJcbiAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJ107XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDIwLCA4MCwgNiksXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGluZm9Db2xvcixcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9MaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMicsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDEwLCA2MCwgNiksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nTGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogd2FybmluZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGFzZXQgMycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVSYW5kb21EYXRhKDAsIDgwLCA2KSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlMaWdodENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3IsXHJcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENoYXJ0IGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3JhZGFyJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBDaGFydEpTIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdDogaHR0cHM6Ly93d3cuY2hhcnRqcy5vcmcvZG9jcy9sYXRlc3QvXHJcbiAgICAgICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gR2xvYmFsIGZvbnQgc2V0dGluZ3M6IGh0dHBzOi8vd3d3LmNoYXJ0anMub3JnL2RvY3MvbGF0ZXN0L2dlbmVyYWwvZm9udHMuaHRtbFxyXG4gICAgICAgICAgICBDaGFydC5kZWZhdWx0cy5mb250LnNpemUgPSAxMztcclxuICAgICAgICAgICAgQ2hhcnQuZGVmYXVsdHMuZm9udC5mYW1pbHkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1mb250LXNhbnMtc2VyaWYnKTtcclxuXHJcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XHJcbiAgICAgICAgICAgIGV4YW1wbGUyKCk7XHJcbiAgICAgICAgICAgIGV4YW1wbGUzKCk7XHJcbiAgICAgICAgICAgIGV4YW1wbGU0KCk7XHJcbiAgICAgICAgICAgIGV4YW1wbGU1KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEdlbmVyYWxDaGFydEpTLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEdlbmVyYWxDaGFydEpTIiwiZ2V0UmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVSYW5kb21EYXRhIiwiY291bnQiLCJhcnIiLCJpIiwicHVzaCIsImV4YW1wbGUxIiwiY3R4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByaW1hcnlDb2xvciIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImZvbnRGYW1pbHkiLCJsYWJlbHMiLCJkYXRhIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsInN0YWNrIiwiY29uZmlnIiwidHlwZSIsIm9wdGlvbnMiLCJwbHVnaW5zIiwidGl0bGUiLCJkaXNwbGF5IiwicmVzcG9uc2l2ZSIsImludGVyYWN0aW9uIiwiaW50ZXJzZWN0Iiwic2NhbGVzIiwieCIsInN0YWNrZWQiLCJ5IiwibXlDaGFydCIsIkNoYXJ0IiwiZXhhbXBsZTIiLCJib3JkZXJDb2xvciIsImV4YW1wbGUzIiwid2FybmluZ0NvbG9yIiwiaW5mb0NvbG9yIiwiZXhhbXBsZTQiLCJkYW5nZXJMaWdodENvbG9yIiwiZGVmYXVsdHMiLCJmb250IiwiZmFtaWx5IiwiZXhhbXBsZTUiLCJpbmZvTGlnaHRDb2xvciIsIndhcm5pbmdMaWdodENvbG9yIiwicHJpbWFyeUxpZ2h0Q29sb3IiLCJpbml0Iiwic2l6ZSIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/charts/chartjs.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/charts/chartjs.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;