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

/***/ "./resources/src/js/custom/documentation/general/fullcalendar/drag-n-drop.js":
/*!***********************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/fullcalendar/drag-n-drop.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTGeneralFullCalendarDragDemos = function () {\n  // Private functions\n  var exampleDrag = function exampleDrag() {\n    // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos\n    var containerEl = document.getElementById('kt_docs_fullcalendar_events_list');\n    new FullCalendar.Draggable(containerEl, {\n      itemSelector: '.fc-event',\n      eventData: function eventData(eventEl) {\n        return {\n          title: eventEl.innerText.trim()\n        };\n      }\n    }); // initialize the calendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_drag');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n      },\n      editable: true,\n      droppable: true,\n      // this allows things to be dropped onto the calendar\n      drop: function drop(arg) {\n        // is the \"remove after drop\" checkbox checked?\n        if (document.getElementById('drop-remove').checked) {\n          // if so, remove the element from the \"Draggable Events\" list\n          arg.draggedEl.parentNode.removeChild(arg.draggedEl);\n        }\n      }\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDrag();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarDragDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2RyYWctbi1kcm9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Q0FFQTs7QUFDQSxJQUFJQSw4QkFBOEIsR0FBRyxZQUFZO0FBQzdDO0FBRUEsTUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUMxQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtDQUF4QixDQUFsQjtBQUNBLFFBQUlDLFlBQVksQ0FBQ0MsU0FBakIsQ0FBMkJKLFdBQTNCLEVBQXdDO0FBQ3RDSyxNQUFBQSxZQUFZLEVBQUUsV0FEd0I7QUFFdENDLE1BQUFBLFNBQVMsRUFBRSxtQkFBU0MsT0FBVCxFQUFrQjtBQUMzQixlQUFPO0FBQ0xDLFVBQUFBLEtBQUssRUFBRUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxJQUFsQjtBQURGLFNBQVA7QUFHRDtBQU5xQyxLQUF4QyxFQUgwQixDQVkxQjs7QUFDQSxRQUFJQyxVQUFVLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBakI7QUFDQSxRQUFJVSxRQUFRLEdBQUcsSUFBSVQsWUFBWSxDQUFDVSxRQUFqQixDQUEwQkYsVUFBMUIsRUFBc0M7QUFDbkRHLE1BQUFBLGFBQWEsRUFBRTtBQUNiQyxRQUFBQSxJQUFJLEVBQUUsaUJBRE87QUFFYkMsUUFBQUEsTUFBTSxFQUFFLE9BRks7QUFHYkMsUUFBQUEsS0FBSyxFQUFFO0FBSE0sT0FEb0M7QUFNbkRDLE1BQUFBLFFBQVEsRUFBRSxJQU55QztBQU9uREMsTUFBQUEsU0FBUyxFQUFFLElBUHdDO0FBT2xDO0FBQ2pCQyxNQUFBQSxJQUFJLEVBQUUsY0FBU0MsR0FBVCxFQUFjO0FBQ2xCO0FBQ0EsWUFBSXBCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q29CLE9BQTNDLEVBQW9EO0FBQ2xEO0FBQ0FELFVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjQyxVQUFkLENBQXlCQyxXQUF6QixDQUFxQ0osR0FBRyxDQUFDRSxTQUF6QztBQUNEO0FBQ0Y7QUFka0QsS0FBdEMsQ0FBZjtBQWlCQVgsSUFBQUEsUUFBUSxDQUFDYyxNQUFUO0FBQ0gsR0FoQ0Q7O0FBa0NBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDVCLE1BQUFBLFdBQVc7QUFDZDtBQUpFLEdBQVA7QUFNSCxDQTNDb0MsRUFBckMsRUE2Q0E7OztBQUNBNkIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDL0IsRUFBQUEsOEJBQThCLENBQUM2QixJQUEvQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2RyYWctbi1kcm9wLmpzPzYxOGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEdlbmVyYWxGdWxsQ2FsZW5kYXJEcmFnRGVtb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG5cclxuICAgIHZhciBleGFtcGxlRHJhZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBleHRlcm5hbCBldmVudHMgLS0gZm9yIG1vcmUgaW5mbyBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHNpdGU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RlbW9zXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZnVsbGNhbGVuZGFyX2V2ZW50c19saXN0Jyk7XHJcbiAgICAgICAgbmV3IEZ1bGxDYWxlbmRhci5EcmFnZ2FibGUoY29udGFpbmVyRWwsIHtcclxuICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5mYy1ldmVudCcsXHJcbiAgICAgICAgICBldmVudERhdGE6IGZ1bmN0aW9uKGV2ZW50RWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0aXRsZTogZXZlbnRFbC5pbm5lclRleHQudHJpbSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgdGhlIGNhbGVuZGFyIC0tIGZvciBtb3JlIGluZm8gcGxlYXNlIHZpc2l0IHRoZSBvZmZpY2lhbCBzaXRlOiBodHRwczovL2Z1bGxjYWxlbmRhci5pby9kZW1vc1xyXG4gICAgICAgIHZhciBjYWxlbmRhckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZnVsbGNhbGVuZGFyX2RyYWcnKTtcclxuICAgICAgICB2YXIgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcclxuICAgICAgICAgIGhlYWRlclRvb2xiYXI6IHtcclxuICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5LGxpc3RXZWVrJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgZHJvcHBhYmxlOiB0cnVlLCAvLyB0aGlzIGFsbG93cyB0aGluZ3MgdG8gYmUgZHJvcHBlZCBvbnRvIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgZHJvcDogZnVuY3Rpb24oYXJnKSB7XHJcbiAgICAgICAgICAgIC8vIGlzIHRoZSBcInJlbW92ZSBhZnRlciBkcm9wXCIgY2hlY2tib3ggY2hlY2tlZD9cclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wLXJlbW92ZScpLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAvLyBpZiBzbywgcmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIFwiRHJhZ2dhYmxlIEV2ZW50c1wiIGxpc3RcclxuICAgICAgICAgICAgICBhcmcuZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYXJnLmRyYWdnZWRFbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsZW5kYXIucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlRHJhZygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RHZW5lcmFsRnVsbENhbGVuZGFyRHJhZ0RlbW9zLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEdlbmVyYWxGdWxsQ2FsZW5kYXJEcmFnRGVtb3MiLCJleGFtcGxlRHJhZyIsImNvbnRhaW5lckVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkZ1bGxDYWxlbmRhciIsIkRyYWdnYWJsZSIsIml0ZW1TZWxlY3RvciIsImV2ZW50RGF0YSIsImV2ZW50RWwiLCJ0aXRsZSIsImlubmVyVGV4dCIsInRyaW0iLCJjYWxlbmRhckVsIiwiY2FsZW5kYXIiLCJDYWxlbmRhciIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJlZGl0YWJsZSIsImRyb3BwYWJsZSIsImRyb3AiLCJhcmciLCJjaGVja2VkIiwiZHJhZ2dlZEVsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVuZGVyIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/fullcalendar/drag-n-drop.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/fullcalendar/drag-n-drop.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;