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

/***/ "./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js":
/*!*********************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTUsersAddAuthApp = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_auth_app');\n  var modal = new bootstrap.Modal(element); // Init add schedule modal\n\n  var initAddAuthApp = function initAddAuthApp() {\n    // Close button handler\n    var closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to close?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, close it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        }\n      });\n    });\n  }; // QR code to text code swapper\n\n\n  var initCodeSwap = function initCodeSwap() {\n    var qrCode = element.querySelector('[ data-kt-add-auth-action=\"qr-code\"]');\n    var textCode = element.querySelector('[ data-kt-add-auth-action=\"text-code\"]');\n    var qrCodeButton = element.querySelector('[ data-kt-add-auth-action=\"qr-code-button\"]');\n    var textCodeButton = element.querySelector('[ data-kt-add-auth-action=\"text-code-button\"]');\n    var qrCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"qr-code-label\"]');\n    var textCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"text-code-label\"]');\n\n    var toggleClass = function toggleClass() {\n      qrCode.classList.toggle('d-none');\n      qrCodeButton.classList.toggle('d-none');\n      qrCodeLabel.classList.toggle('d-none');\n      textCode.classList.toggle('d-none');\n      textCodeButton.classList.toggle('d-none');\n      textCodeLabel.classList.toggle('d-none');\n    }; // Swap to text code handler\n\n\n    textCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n    qrCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddAuthApp();\n      initCodeSwap();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddAuthApp.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy92aWV3L2FkZC1hdXRoLWFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBWTtBQUNoQztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFoQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxTQUFTLENBQUNDLEtBQWQsQ0FBb0JMLE9BQXBCLENBQWQsQ0FIZ0MsQ0FLaEM7O0FBQ0EsTUFBSU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBRXZCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHUCxPQUFPLENBQUNRLGFBQVIsQ0FBc0Isc0NBQXRCLENBQXBCO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ0UsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQUMsQ0FBQyxFQUFJO0FBQ3ZDQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQUMsTUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsUUFBQUEsSUFBSSxFQUFFLHVDQURBO0FBRU5DLFFBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFFBQUFBLGdCQUFnQixFQUFFLElBSFo7QUFJTkMsUUFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkMsUUFBQUEsaUJBQWlCLEVBQUUsZ0JBTGI7QUFNTkMsUUFBQUEsZ0JBQWdCLEVBQUUsWUFOWjtBQU9OQyxRQUFBQSxXQUFXLEVBQUU7QUFDVEMsVUFBQUEsYUFBYSxFQUFFLGlCQUROO0FBRVRDLFVBQUFBLFlBQVksRUFBRTtBQUZMO0FBUFAsT0FBVixFQVdHQyxJQVhILENBV1EsVUFBVUMsTUFBVixFQUFrQjtBQUN0QixZQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDZHRCLFVBQUFBLEtBQUssQ0FBQ3VCLElBQU4sR0FEYyxDQUNBO0FBQ2pCO0FBQ0osT0FmRDtBQWdCSCxLQW5CRDtBQXFCSCxHQXpCRCxDQU5nQyxDQWlDaEM7OztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDckIsUUFBTUMsTUFBTSxHQUFHNUIsT0FBTyxDQUFDUSxhQUFSLENBQXNCLHNDQUF0QixDQUFmO0FBQ0EsUUFBTXFCLFFBQVEsR0FBRzdCLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQix3Q0FBdEIsQ0FBakI7QUFDQSxRQUFNc0IsWUFBWSxHQUFHOUIsT0FBTyxDQUFDUSxhQUFSLENBQXNCLDZDQUF0QixDQUFyQjtBQUNBLFFBQU11QixjQUFjLEdBQUcvQixPQUFPLENBQUNRLGFBQVIsQ0FBc0IsK0NBQXRCLENBQXZCO0FBQ0EsUUFBTXdCLFdBQVcsR0FBR2hDLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQiw0Q0FBdEIsQ0FBcEI7QUFDQSxRQUFNeUIsYUFBYSxHQUFHakMsT0FBTyxDQUFDUSxhQUFSLENBQXNCLDhDQUF0QixDQUF0Qjs7QUFFQSxRQUFNMEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSztBQUNyQk4sTUFBQUEsTUFBTSxDQUFDTyxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtBQUNBTixNQUFBQSxZQUFZLENBQUNLLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLFFBQTlCO0FBQ0FKLE1BQUFBLFdBQVcsQ0FBQ0csU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsUUFBN0I7QUFDQVAsTUFBQUEsUUFBUSxDQUFDTSxTQUFULENBQW1CQyxNQUFuQixDQUEwQixRQUExQjtBQUNBTCxNQUFBQSxjQUFjLENBQUNJLFNBQWYsQ0FBeUJDLE1BQXpCLENBQWdDLFFBQWhDO0FBQ0FILE1BQUFBLGFBQWEsQ0FBQ0UsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsUUFBL0I7QUFDSCxLQVBELENBUnFCLENBaUJyQjs7O0FBQ0FMLElBQUFBLGNBQWMsQ0FBQ3RCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFVBQUFDLENBQUMsRUFBRztBQUN6Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUF1QixNQUFBQSxXQUFXO0FBQ2QsS0FKRDtBQU1BSixJQUFBQSxZQUFZLENBQUNyQixnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFBQyxDQUFDLEVBQUc7QUFDdkNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBdUIsTUFBQUEsV0FBVztBQUNkLEtBSkQ7QUFLSCxHQTdCRDs7QUErQkEsU0FBTztBQUNIO0FBQ0FHLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkL0IsTUFBQUEsY0FBYztBQUNkcUIsTUFBQUEsWUFBWTtBQUNmO0FBTEUsR0FBUDtBQU9ILENBeEV1QixFQUF4QixFQTBFQTs7O0FBQ0FXLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3hDLEVBQUFBLGlCQUFpQixDQUFDc0MsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvdmlldy9hZGQtYXV0aC1hcHAuanM/MGEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUVXNlcnNBZGRBdXRoQXBwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9tb2RhbF9hZGRfYXV0aF9hcHAnKTtcclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChlbGVtZW50KTtcclxuXHJcbiAgICAvLyBJbml0IGFkZCBzY2hlZHVsZSBtb2RhbFxyXG4gICAgdmFyIGluaXRBZGRBdXRoQXBwID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBidXR0b24gaGFuZGxlclxyXG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2Vycy1tb2RhbC1hY3Rpb249XCJjbG9zZVwiXScpO1xyXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjbG9zZT9cIixcclxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2xvc2UgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcclxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFFSIGNvZGUgdG8gdGV4dCBjb2RlIHN3YXBwZXJcclxuICAgIHZhciBpbml0Q29kZVN3YXAgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXJDb2RlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwicXItY29kZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb2RlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwidGV4dC1jb2RlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgcXJDb2RlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwicXItY29kZS1idXR0b25cIl0nKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29kZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWt0LWFkZC1hdXRoLWFjdGlvbj1cInRleHQtY29kZS1idXR0b25cIl0nKTtcclxuICAgICAgICBjb25zdCBxckNvZGVMYWJlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWt0LWFkZC1hdXRoLWFjdGlvbj1cInFyLWNvZGUtbGFiZWxcIl0nKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29kZUxhYmVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwidGV4dC1jb2RlLWxhYmVsXCJdJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUNsYXNzID0gKCkgPT57XHJcbiAgICAgICAgICAgIHFyQ29kZS5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgcXJDb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBxckNvZGVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgdGV4dENvZGUuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHRleHRDb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB0ZXh0Q29kZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3dhcCB0byB0ZXh0IGNvZGUgaGFuZGxlclxyXG4gICAgICAgIHRleHRDb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcXJDb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXRBZGRBdXRoQXBwKCk7XHJcbiAgICAgICAgICAgIGluaXRDb2RlU3dhcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RVc2Vyc0FkZEF1dGhBcHAuaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RVc2Vyc0FkZEF1dGhBcHAiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJpbml0QWRkQXV0aEFwcCIsImNsb3NlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiaGlkZSIsImluaXRDb2RlU3dhcCIsInFyQ29kZSIsInRleHRDb2RlIiwicXJDb2RlQnV0dG9uIiwidGV4dENvZGVCdXR0b24iLCJxckNvZGVMYWJlbCIsInRleHRDb2RlTGFiZWwiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;