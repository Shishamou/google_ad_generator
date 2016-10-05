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

eval("\n$(document).ready(function() {\n  var this$1 = this;\n\n  var $inputTitle = $('.input_title');\n  var $inputTitleExtra = $('.input_title_extra');\n\n  $inputTitle.attr('maxlength', 7).attr('placeholder', '可以輸入七個字');\n  $inputTitleExtra.attr('maxlength', 9).attr('placeholder', '這邊可以輸入九個字');\n\n  // 統一標題\n  $('#section_title_inject').ready(function () {\n    $(this$1).find('button').click(function (event) {\n      var title = $(this$1).find('.input_title').val();\n      var titleExtra = $(this$1).find('.input_title_extra').val();\n\n      $inputTitle.val(title);\n      $inputTitleExtra.val(titleExtra);\n    });\n  })\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2luZGV4LmpzPzhmZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyICRpbnB1dFRpdGxlID0gJCgnLmlucHV0X3RpdGxlJyk7XG4gIHZhciAkaW5wdXRUaXRsZUV4dHJhID0gJCgnLmlucHV0X3RpdGxlX2V4dHJhJyk7XG5cbiAgJGlucHV0VGl0bGUuYXR0cignbWF4bGVuZ3RoJywgNykuYXR0cigncGxhY2Vob2xkZXInLCAn5Y+v5Lul6Ly45YWl5LiD5YCL5a2XJyk7XG4gICRpbnB1dFRpdGxlRXh0cmEuYXR0cignbWF4bGVuZ3RoJywgOSkuYXR0cigncGxhY2Vob2xkZXInLCAn6YCZ6YKK5Y+v5Lul6Ly45YWl5Lmd5YCL5a2XJyk7XG5cbiAgLy8g57Wx5LiA5qiZ6aGMXG4gICQoJyNzZWN0aW9uX3RpdGxlX2luamVjdCcpLnJlYWR5KCgpID0+IHtcbiAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgdmFyIHRpdGxlID0gJCh0aGlzKS5maW5kKCcuaW5wdXRfdGl0bGUnKS52YWwoKTtcbiAgICAgIHZhciB0aXRsZUV4dHJhID0gJCh0aGlzKS5maW5kKCcuaW5wdXRfdGl0bGVfZXh0cmEnKS52YWwoKTtcblxuICAgICAgJGlucHV0VGl0bGUudmFsKHRpdGxlKTtcbiAgICAgICRpbnB1dFRpdGxlRXh0cmEudmFsKHRpdGxlRXh0cmEpO1xuICAgIH0pO1xuICB9KVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);