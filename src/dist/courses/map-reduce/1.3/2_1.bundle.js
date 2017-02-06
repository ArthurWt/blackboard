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

	// 同理， 我们应该用高阶函数来让我们的算法更具有一般性
	// 所有数据处理都是SQL
	// 我们用map/reduce完成一些sql操作
	// 假设数据库中有一张成绩单表，那么用js的描述是
	var students = [{ id: 1, name: "ramroll", score: 99, class: 1 }, { id: 2, name: "hufei", score: 9, class: 2 }, { id: 3, name: "yangchengcheng", score: 89, class: 2 }, { id: 4, name: "mick", score: 70, class: 1 }, { id: 5, name: "tez", score: 59, class: 2 }, { id: 6, name: "dorphi", score: 22, class: 1 }];

	var groupByHighOrder = function groupByHighOrder(groupKeyName) {
	  return function (groups, item) {
	    if (!groups[item[groupKeyName]]) {
	      groups[item[groupKeyName]] = { key: item[groupKeyName], values: [] };
	    }
	    groups[item[groupKeyName]].values.push(item);
	    return groups;
	  };
	};

	// 按照班级进行分组
	// 然后求最大分数
	// 插入排序
	// select max(score) from students group by class
	// 将学生按照class分组
	var grouped = students.reduce(groupByHighOrder("class"), {});

	// 提取为数组
	var arrGroups = Object.values(grouped);

	// 计算每个分组的最大值
	var final = arrGroups.map(function (group) {
	  return {
	    class: group.key,
	    max: group.values.reduce(function (a, b) {
	      return b.score > a ? b.score : a;
	    }, 0)
	  };
	});

	console.log(final);

/***/ }
/******/ ]);