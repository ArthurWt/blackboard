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

	"use strict";

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// 所有数据处理都是SQL
	// 我们用map/reduce完成一些sql操作

	// 假设数据库中有一张成绩单表，那么用js的描述是
	var students = [{ id: 1, name: "ramroll", score: 99 }, { id: 2, name: "hufei", score: 9 }, { id: 3, name: "yangchengcheng", score: 89 }, { id: 4, name: "mick", score: 70 }, { id: 5, name: "tez", score: 59 }, { id: 6, name: "dorphi", score: 22 }];

	// 筛选所有及格的人
	// select name from users where scroe > 60
	var selectScoreLargeThan60 = function selectScoreLargeThan60(list, student) {
	  if (student.score > 60) {
	    list = [].concat(_toConsumableArray(list), [student]);
	  }
	  return list;
	};

	var selected = students.reduce(selectScoreLargeThan60, []);

	console.log(selected);

/***/ }
/******/ ]);