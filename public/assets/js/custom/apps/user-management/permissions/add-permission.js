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

/***/ "./resources/src/js/custom/apps/user-management/permissions/add-permission.js":
/*!************************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/permissions/add-permission.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n // Class definition\n\nvar KTUsersAddPermission = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_permission');\n  var form = element.querySelector('#kt_modal_add_permission_form');\n  var modal = new bootstrap.Modal(element); // Init add schedule modal\n\n  var initAddPermission = function initAddPermission() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        'permission_name': {\n          validators: {\n            notEmpty: {\n              message: 'Permission name is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    }); // Close button handler\n\n    var closeButton = element.querySelector('[data-kt-permissions-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to close?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, close it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        }\n      });\n    }); // Cancel button handler\n\n    var cancelButton = element.querySelector('[data-kt-permissions-modal-action=\"cancel\"]');\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Submit button handler\n\n    var submitButton = element.querySelector('[data-kt-permissions-modal-action=\"submit\"]');\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n            submitButton.disabled = true; // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n              submitButton.disabled = false; // Show popup confirmation \n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddPermission();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddPermission.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9wZXJtaXNzaW9ucy9hZGQtcGVybWlzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiO0NBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBWTtBQUNuQztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHlCQUF4QixDQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDSSxhQUFSLENBQXNCLCtCQUF0QixDQUFiO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBZCxDQUFvQlAsT0FBcEIsQ0FBZCxDQUptQyxDQU1uQzs7QUFDQSxNQUFJUSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFFMUI7QUFDQSxRQUFJQyxTQUFTLEdBQUdDLGNBQWMsQ0FBQ0MsY0FBZixDQUNaUixJQURZLEVBRVo7QUFDSVMsTUFBQUEsTUFBTSxFQUFFO0FBQ0osMkJBQW1CO0FBQ2ZDLFVBQUFBLFVBQVUsRUFBRTtBQUNSQyxZQUFBQSxRQUFRLEVBQUU7QUFDTkMsY0FBQUEsT0FBTyxFQUFFO0FBREg7QUFERjtBQURHO0FBRGYsT0FEWjtBQVdJQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLElBQUlQLGNBQWMsQ0FBQ00sT0FBZixDQUF1QkUsT0FBM0IsRUFESjtBQUVMWixRQUFBQSxTQUFTLEVBQUUsSUFBSUksY0FBYyxDQUFDTSxPQUFmLENBQXVCRyxVQUEzQixDQUFzQztBQUM3Q0MsVUFBQUEsV0FBVyxFQUFFLFNBRGdDO0FBRTdDQyxVQUFBQSxlQUFlLEVBQUUsRUFGNEI7QUFHN0NDLFVBQUFBLGFBQWEsRUFBRTtBQUg4QixTQUF0QztBQUZOO0FBWGIsS0FGWSxDQUFoQixDQUgwQixDQTJCMUI7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHdkIsT0FBTyxDQUFDSSxhQUFSLENBQXNCLDRDQUF0QixDQUFw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Z0JBQVk7QUFDZDlDLE1BQUFBLGlCQUFpQjtBQUNwQjtBQUpFLEdBQVA7QUFNSCxDQTdKMEIsRUFBM0IsRUErSkE7OztBQUNBK0MsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDekQsRUFBQUEsb0JBQW9CLENBQUN1RCxJQUFyQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9wZXJtaXNzaW9ucy9hZGQtcGVybWlzc2lvbi5qcz84NzVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RVc2Vyc0FkZFBlcm1pc3Npb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTaGFyZWQgdmFyaWFibGVzXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X21vZGFsX2FkZF9wZXJtaXNzaW9uJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcja3RfbW9kYWxfYWRkX3Blcm1pc3Npb25fZm9ybScpO1xyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEluaXQgYWRkIHNjaGVkdWxlIG1vZGFsXHJcbiAgICB2YXIgaW5pdEFkZFBlcm1pc3Npb24gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vIEluaXQgZm9ybSB2YWxpZGF0aW9uIHJ1bGVzLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBGb3JtVmFsaWRhdGlvbiBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOmh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vXHJcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IEZvcm1WYWxpZGF0aW9uLmZvcm1WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBmb3JtLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAncGVybWlzc2lvbl9uYW1lJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RFbXB0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQZXJtaXNzaW9uIG5hbWUgaXMgcmVxdWlyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuVHJpZ2dlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvb3RzdHJhcDogbmV3IEZvcm1WYWxpZGF0aW9uLnBsdWdpbnMuQm9vdHN0cmFwNSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZUludmFsaWRDbGFzczogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZVZhbGlkQ2xhc3M6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJ1dHRvbiBoYW5kbGVyXHJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBlcm1pc3Npb25zLW1vZGFsLWFjdGlvbj1cImNsb3NlXCJdJyk7XHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNsb3NlP1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjbG9zZSBpdCFcIixcclxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2FuY2VsIGJ1dHRvbiBoYW5kbGVyXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1wZXJtaXNzaW9ucy1tb2RhbC1hY3Rpb249XCJjYW5jZWxcIl0nKTtcclxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNhbmNlbD9cIixcclxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2FuY2VsIGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgcmV0dXJuXCIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBidG4tYWN0aXZlLWxpZ2h0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpOyAvLyBSZXNldCBmb3JtXHRcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdXIgZm9ybSBoYXMgbm90IGJlZW4gY2FuY2VsbGVkIS5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTdWJtaXQgYnV0dG9uIGhhbmRsZXJcclxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBlcm1pc3Npb25zLW1vZGFsLWFjdGlvbj1cInN1Ym1pdFwiXScpO1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uLiBGb3IgbW9yZSBpbmZvIGNoZWNrIHRoZSBwbHVnaW4ncyBvZmZpY2lhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbG9hZGluZyBpbmRpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcm0gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3JtLnN1Ym1pdCgpOyAvLyBTdWJtaXQgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHBvcHVwIHdhcm5pbmcuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0QWRkUGVybWlzc2lvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RVc2Vyc0FkZFBlcm1pc3Npb24uaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RVc2Vyc0FkZFBlcm1pc3Npb24iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwibW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsImluaXRBZGRQZXJtaXNzaW9uIiwidmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiY2xvc2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImhpZGUiLCJyZXNldCIsImRpc21pc3MiLCJzdWJtaXRCdXR0b24iLCJ2YWxpZGF0ZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpc0NvbmZpcm1lZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/permissions/add-permission.js\n");

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
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/permissions/add-permission.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;