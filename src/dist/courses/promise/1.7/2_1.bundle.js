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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(226);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = react_7de69c5da675c4deed75;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	// 解决回调地狱的问题


	// 珠峰课堂 github.com/zhufengketang/app
	// 中有一个需求就是从服务端获取token然后获取课程列表

	var getToken = function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	    var response;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return fetch('https://ketang.zhufengpeixun.cn/token');

	          case 2:
	            response = _context.sent;
	            _context.next = 5;
	            return response.json();

	          case 5:
	            return _context.abrupt('return', _context.sent);

	          case 6:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function getToken() {
	    return _ref.apply(this, arguments);
	  };
	}();

	var getCourse = function () {
	  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	    var response;
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return fetch('https://ketang.zhufengpeixun.cn/course');

	          case 2:
	            response = _context2.sent;
	            _context2.next = 5;
	            return response.json();

	          case 5:
	            return _context2.abrupt('return', _context2.sent);

	          case 6:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this);
	  }));

	  return function getCourse() {
	    return _ref2.apply(this, arguments);
	  };
	}();

	var getTokenThenCourse = function () {
	  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            _context3.next = 2;
	            return getToken();

	          case 2:
	            _context3.next = 4;
	            return getCourse();

	          case 4:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, this);
	  }));

	  return function getTokenThenCourse() {
	    return _ref3.apply(this, arguments);
	  };
	}();

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }
/******/ ]);