/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("\n$(document).ready(function() {\n  var this$1 = this;\n\n  $(\"input[type=text], input[type=number]\").focus(function() {\n    $(this).select();\n  });\n\n  var $inputTitle = $('.input_title');\n  var $inputTitleExtra = $('.input_title_extra');\n\n  $inputTitle.attr('maxlength', 7).attr('placeholder', '可以輸入七個字');\n  $inputTitleExtra.attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');\n\n  // 統一標題\n  $('#section_title_inject').ready(function () {\n    $(this$1).find('button').click(function (event) {\n      var title = $(this$1).find('.input_title').val();\n      var titleExtra = $(this$1).find('.input_title_extra').val();\n\n      $inputTitle.val(title);\n      $inputTitleExtra.val(titleExtra);\n    });\n  })\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzPzhmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgJChcImlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9bnVtYmVyXVwiKS5mb2N1cyhmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnNlbGVjdCgpO1xuICB9KTtcblxuICB2YXIgJGlucHV0VGl0bGUgPSAkKCcuaW5wdXRfdGl0bGUnKTtcbiAgdmFyICRpbnB1dFRpdGxlRXh0cmEgPSAkKCcuaW5wdXRfdGl0bGVfZXh0cmEnKTtcblxuICAkaW5wdXRUaXRsZS5hdHRyKCdtYXhsZW5ndGgnLCA3KS5hdHRyKCdwbGFjZWhvbGRlcicsICflj6/ku6XovLjlhaXkuIPlgIvlrZcnKTtcbiAgJGlucHV0VGl0bGVFeHRyYS5hdHRyKCdtYXhsZW5ndGgnLCA5KS5hdHRyKCdwbGFjZWhvbGRlcicsICfpgJnpgorlj6/ku6XovLjlhaXkuZ3lgIvlrZcnKTtcblxuICAvLyDntbHkuIDmqJnpoYxcbiAgJCgnI3NlY3Rpb25fdGl0bGVfaW5qZWN0JykucmVhZHkoKCkgPT4ge1xuICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmZpbmQoJy5pbnB1dF90aXRsZScpLnZhbCgpO1xuICAgICAgdmFyIHRpdGxlRXh0cmEgPSAkKHRoaXMpLmZpbmQoJy5pbnB1dF90aXRsZV9leHRyYScpLnZhbCgpO1xuXG4gICAgICAkaW5wdXRUaXRsZS52YWwodGl0bGUpO1xuICAgICAgJGlucHV0VGl0bGVFeHRyYS52YWwodGl0bGVFeHRyYSk7XG4gICAgfSk7XG4gIH0pXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);