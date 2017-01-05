/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Main = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(5);
	
	var _urlParse = __webpack_require__(6);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	var _qs = __webpack_require__(7);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _menu = __webpack_require__(8);
	
	var _Blackboard = __webpack_require__(10);
	
	var _init = __webpack_require__(12);
	
	var _socket_recorder = __webpack_require__(30);
	
	__webpack_require__(32);
	
	var _course = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); } /***********************************************
	                                                                               *
	                                                                               * MIT License
	                                                                               *
	                                                                               * Copyright (c) 2016 珠峰课堂,Ramroll
	                                                                               * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                               * of this software and associated documentation files (the "Software"), to deal
	                                                                               * in the Software without restriction, including without limitation the rights
	                                                                               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                               * copies of the Software, and to permit persons to whom the Software is
	                                                                               * furnished to do so, subject to the following conditions:
	                                                                               *
	                                                                               * The above copyright notice and this permission notice shall be included in all
	                                                                               * copies or substantial portions of the Software.
	                                                                               *
	                                                                               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                               * SOFTWARE.
	                                                                               *
	                                                                               */
	
	function loading_content(name) {
	  function loading() {
	    var url = '/courses/' + name + '.content';
	
	    return new Promise(function (resolve, reject) {
	      $.get(url, function (data) {
	        resolve(data);
	      });
	    });
	  }
	  return loading(name);
	}
	
	function format_menu(data) {
	
	  var lines = data.split("\n").map(function (l) {
	    return l.trim();
	  });
	  lines = lines.filter(function (l) {
	    return l.length > 1;
	  });
	
	  lines = lines.map(function (l) {
	    return l.split(/[\t ]/).map(function (x) {
	      return x.trim();
	    });
	  }).map(function (_ref) {
	    var _ref2 = _toArray(_ref),
	        f = _ref2[0],
	        others = _ref2.slice(1);
	
	    return [f, others.filter(function (k) {
	      return k.length > 0;
	    }).join(" ")];
	  });
	  console.log(lines);
	  lines = lines.map(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        n = _ref4[0],
	        title = _ref4[1];
	
	    return {
	      level: n.replace(".", "").length,
	      topic: n,
	      title: title
	    };
	  });
	
	  return lines;
	}
	
	var Main = exports.Main = function (_React$Component) {
	  _inherits(Main, _React$Component);
	
	  function Main() {
	    _classCallCheck(this, Main);
	
	    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));
	
	    var url = new _urlParse2.default(window.location.href);
	    _this.query = _qs2.default.parse(url.query.replace("?", ""));
	    _this.state = {
	      content: null,
	      store: (0, _init.init)()
	    };
	    (0, _socket_recorder.init_socket)();
	
	    return _this;
	  }
	
	  _createClass(Main, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      var promise = loading_content(this.query.course);
	      promise.then(function (data) {
	        store.dispatch((0, _course.set_course)(_this2.query.course));
	
	        var content = format_menu(data);
	
	        store.dispatch((0, _course.switch_to)(content[0].topic, 1, content[0].title));
	        _this2.setState({ content: content });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          content = _state.content,
	          store = _state.store;
	
	
	      if (!content) {
	        return null;
	      }
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_menu.Menu, { content: content, course: this.query.course }),
	          _react2.default.createElement(_Blackboard.Blackboard, null)
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById("app"));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(1);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = react_b1182dbd2380566b616d;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(32);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(208);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(183);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(178);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Menu = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _course = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /***********************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 珠峰课堂,Ramroll
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in all
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Menu = exports.Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
	  }
	
	  _createClass(Menu, [{
	    key: "itemStyle",
	    value: function itemStyle(level) {
	      return {
	        paddingLeft: (level - 1) * 10 + "px",
	        fontSize: 20 - level + 'px',
	        paddingTop: 10,
	        paddingBottom: 10,
	        cursor: 'pointer'
	      };
	    }
	  }, {
	    key: "_switch",
	    value: function _switch(topic, title) {
	      store.dispatch((0, _course.switch_to)(topic, 1, title));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          content = _props.content,
	          course = _props.course;
	
	
	      return _react2.default.createElement(
	        "div",
	        { className: "menu" },
	        content.map(function (_ref) {
	          var topic = _ref.topic,
	              title = _ref.title,
	              level = _ref.level;
	
	          return _react2.default.createElement(
	            "div",
	            {
	              onClick: function onClick() {
	                return _this2._switch(topic, title);
	              },
	              className: "menu-item", key: topic, style: _this2.itemStyle(level) },
	            title
	          );
	        })
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react.Component);
	
	var styles = {
	  container: {
	    borderRight: '1px solid #eee',
	    width: '200px'
	
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/***********************************************
	 * 
	 * MIT License
	 *
	 * Copyright (c) 2016 珠峰课堂,Ramroll
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 *
	 */
	
	var ACTION_SET_COURSE = exports.ACTION_SET_COURSE = "set_course@Blackboard";
	var ACTION_SWITCH_TO = exports.ACTION_SWITCH_TO = "switch_to@Blackboard";
	
	var set_course = exports.set_course = function set_course(course) {
	  return {
	    type: ACTION_SET_COURSE,
	    course: course
	  };
	};
	
	var switch_to = exports.switch_to = function switch_to(topic, id, title) {
	  return {
	    type: ACTION_SWITCH_TO,
	    topic: topic,
	    id: id,
	    title: title
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Blackboard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(5);
	
	var _course = __webpack_require__(9);
	
	var _draw2 = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /***********************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MIT License
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 珠峰课堂,Ramroll
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in all
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SOFTWARE.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var getDimensions = function getDimensions() {
	
	  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	  return {
	    width: width,
	    height: height
	  };
	};
	
	function loading_data(_ref) {
	  var course = _ref.course,
	      topic = _ref.topic,
	      id = _ref.id;
	
	  function loading() {
	    var url = '/courses/' + course + '/' + topic + '/' + id + '.log';
	
	    return new Promise(function (resolve, reject) {
	      $.get(url, function (data) {
	        resolve(data);
	      }).catch(function (err) {
	        resolve(null);
	      });
	    });
	  }
	  return loading();
	}
	
	var _Blackboard = function (_Component) {
	  _inherits(_Blackboard, _Component);
	
	  function _Blackboard(props) {
	    _classCallCheck(this, _Blackboard);
	
	    var _this = _possibleConstructorReturn(this, (_Blackboard.__proto__ || Object.getPrototypeOf(_Blackboard)).call(this));
	
	    console.log(props);
	
	    _this.lastX = null;
	    _this.lastY = null;
	
	    _this.state = {
	      colors: ["white", "#333", "red", "yellow", "green", "blue"],
	      color: "#333",
	      penSize: 5,
	      x: null,
	      y: null,
	      loading: true
	    };
	
	    _this._keydown = _this._keydown.bind(_this);
	
	    document.addEventListener("keydown", _this._keydown);
	
	    return _this;
	  }
	
	  _createClass(_Blackboard, [{
	    key: '_redraw',
	    value: function _redraw() {
	      var _this2 = this;
	
	      var lines = this.redraw_data;
	      if (lines) {
	        lines = lines.split("\n").filter(function (line) {
	          return line.length > 1;
	        }).map(JSON.parse);
	        lines.map(function (_ref2) {
	          var x = _ref2.x,
	              y = _ref2.y,
	              color = _ref2.color,
	              penSize = _ref2.penSize;
	
	          if (!x) {
	            _this2.lastX = null;
	            _this2.lastY = null;
	          } else {
	            _this2._draw(_this2.ctx, color, x * 2, y * 2, penSize);
	          }
	        });
	      }
	      this.lastX = null;
	      this.lastY = null;
	    }
	  }, {
	    key: '_loaded',
	    value: function _loaded() {
	
	      this.lastX = null;
	      this.lastY = null;
	      this.refs.canvas.width = getDimensions().width * 2;
	      this.refs.canvas.height = getDimensions().height * 2;
	      this.ctx = this.refs.canvas.getContext("2d");
	      this._clear(false);
	      this._redraw();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	
	      document.removeEventListener("keydown", this._keydown);
	    }
	  }, {
	    key: '_keydown',
	    value: function _keydown() {
	      if (this.state.loading) {
	        return;
	      }
	      var idx = this.state.colors.indexOf(this.state.color);
	
	      var ndx = null;
	      if (event.key === 'ArrowLeft') {
	        ndx = idx - 1;
	        if (ndx < 0) {
	          ndx = this.state.colors.length - 1;
	        }
	
	        this._pick(this.state.colors[ndx]);
	      } else if (event.key === "ArrowRight") {
	        ndx = idx + 1;
	        if (ndx > this.state.colors.length - 1) {
	          ndx = 0;
	        }
	
	        this._pick(this.state.colors[ndx]);
	        // this.setState({color : this.state.colors[ndx]})
	      } else {
	
	        this._pick(this.state.colors[idx]);
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this._reloading();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      if (nextProps.course.course !== this.props.course.course || nextProps.course.topic !== this.props.course.topic || nextProps.course.id !== this.props.course.id) {
	        setTimeout(function () {
	          _this3._reloading();
	        }.bind(this), 20);
	      }
	    }
	  }, {
	    key: '_reloading',
	    value: function _reloading() {
	      var _this4 = this;
	
	      loading_data(this.props.course).then(function (data) {
	        _this4.redraw_data = data;
	
	        _this4.setState({
	          loading: false
	        }, _this4._loaded.bind(_this4));
	      }.bind(this));
	    }
	  }, {
	    key: '_mouseDown',
	    value: function _mouseDown() {
	
	      this.draw = true;
	    }
	  }, {
	    key: '_draw',
	    value: function _draw(ctx, color, x, y, penSize) {
	
	      if (this.lastX && this.lastY) {
	
	        ctx.beginPath();
	        ctx.strokeStyle = color;
	        ctx.lineWidth = penSize;
	        ctx.moveTo(this.lastX, this.lastY);
	        ctx.lineTo(x, y);
	        ctx.stroke();
	      }
	
	      this.lastX = x;
	      this.lastY = y;
	    }
	  }, {
	    key: '_mouseMove',
	    value: function _mouseMove(event) {
	
	      var x = event.clientX;
	      var y = event.clientY;
	
	      if (this.draw) {
	        var course = this.props.course;
	        store.dispatch((0, _draw2.draw)(course.course, course.topic, course.id, x, y, this.state.color, this.state.penSize));
	        this._draw(this.ctx, this.state.color, x * 2, y * 2, this.state.penSize);
	      }
	      this.setState({
	        x: x,
	        y: y
	      });
	    }
	  }, {
	    key: '_mouseUp',
	    value: function _mouseUp() {
	      this.draw = false;
	      this.lastX = null;
	      this.lastY = null;
	      store.dispatch((0, _draw2.draw_segment)(this.props.course.course, this.props.course.topic, this.props.course.id));
	    }
	  }, {
	    key: '_pick',
	    value: function _pick(color) {
	      if (color === 'white') {
	
	        this.setState({
	          color: color,
	          penSize: 100
	        });
	      } else {
	        this.setState({
	          color: color,
	          penSize: 5
	        });
	      }
	    }
	  }, {
	    key: '_clear',
	    value: function _clear() {
	      var tell_back_end = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      if (tell_back_end) {
	
	        store.dispatch((0, _draw2.clear)(this.props.course.course, this.props.course.topic, this.props.course.id));
	      }
	      this.ctx.clearRect(0, 0, getDimensions().width * 2, getDimensions().height * 2);
	    }
	  }, {
	    key: '_switch',
	    value: function _switch(id) {
	      this._clear(false);
	      store.dispatch((0, _course.switch_to)(this.props.course.topic, id));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var _state = this.state,
	          colors = _state.colors,
	          color = _state.color,
	          x = _state.x,
	          y = _state.y,
	          loading = _state.loading;
	
	
	      if (loading) {
	        return null;
	      }
	      var course = this.props.course;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseMove: this._mouseMove.bind(this),
	          onMouseUp: this._mouseUp.bind(this),
	          onMouseDown: this._mouseDown.bind(this)
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'title' },
	          course.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'pages', className: 'pages' },
	          [1, 2, 3, 4, 5].map(function (x) {
	            return _react2.default.createElement(
	              'div',
	              { key: x, onClick: function onClick() {
	                  return _this5._switch(x);
	                }, style: { backgroundColor: x === course.id ? "#31d22e" : "#f2f3f4" }, className: 'page' },
	              x
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'cleaner', onClick: this._clear.bind(this) },
	          '\u6E05\u7A7A'
	        ),
	        color === 'white' && _react2.default.createElement('div', { className: 'eraser', style: { top: y - 25 + "px", left: x - 25 + "px" } }),
	        _react2.default.createElement(ColorPicker, { pick: this._pick.bind(this), colors: colors, color: color }),
	        _react2.default.createElement('canvas', { className: 'canvas',
	          ref: 'canvas'
	
	        })
	      );
	    }
	  }]);
	
	  return _Blackboard;
	}(_react.Component);
	
	var ColorPicker = function ColorPicker(_ref3) {
	  var pick = _ref3.pick,
	      colors = _ref3.colors,
	      color = _ref3.color;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'color' },
	    colors.map(function (c) {
	      return _react2.default.createElement('div', { key: c,
	        onClick: function onClick() {
	          return pick(c);
	        },
	        className: c === 'white' ? 'white' : '',
	        style: { backgroundColor: c, borderColor: color == c ? 'black' : "#eee" } });
	    })
	  );
	};
	
	var map = function map(state) {
	  return {
	    course: state.course
	  };
	};
	var Blackboard = exports.Blackboard = (0, _reactRedux.connect)(map)(_Blackboard);

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/***********************************************
	 *
	 * MIT License
	 *
	 * Copyright (c) 2016 珠峰课堂,Ramroll
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 *
	 */
	
	var ACTION_DRAW = exports.ACTION_DRAW = "draw@Blackboard";
	var ACTION_DRAW_SEGMENT = exports.ACTION_DRAW_SEGMENT = "draw_seg@Blackboard";
	var ACTION_CLEAR = exports.ACTION_CLEAR = "clear@Blackboard";
	
	var draw = exports.draw = function draw(course, topic, id, x, y, color, penSize) {
	  return {
	    type: ACTION_DRAW,
	    course: course,
	    topic: topic,
	    id: id,
	    x: x,
	    y: y,
	    color: color,
	    penSize: penSize
	  };
	};
	
	var draw_segment = exports.draw_segment = function draw_segment(course, topic, id) {
	  return {
	    type: ACTION_DRAW_SEGMENT,
	    course: course,
	    topic: topic,
	    id: id
	  };
	};
	
	// export const set_color = (course, topic, id, color) => {
	//   return {
	//     type : ACTION_SET_COLOR,
	//     course,
	//     topic,
	//     id,
	//     color : color
	//   }
	// }
	
	var clear = exports.clear = function clear(course, topic, id) {
	  return {
	    course: course,
	    topic: topic,
	    id: id,
	    type: ACTION_CLEAR
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = undefined;
	
	var _redux = __webpack_require__(13);
	
	var _reduxPersist = __webpack_require__(14);
	
	var _course = __webpack_require__(29);
	
	var _socket_recorder = __webpack_require__(30);
	
	var _reduxThunk = __webpack_require__(31);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 创建Redux-Store
	 * @returns {*}
	 */
	
	/** 引入 middleware **/
	
	var init = exports.init = function init() {
	  // 合并Reducer
	  var reducers = {
	    course: _course.course
	  };
	
	  var reducer = (0, _redux.combineReducers)(reducers);
	  // 创建Store
	  // 这里是将所有的redux enhancer组合起来
	  var store = (0, _redux.applyMiddleware)(_reduxThunk2.default, _socket_recorder.socket_recorder)(_redux.createStore)(reducer);
	
	  window.store = store;
	  return store;
	};
	
	/** 引入 Reducer **/
	/***********************************************
	 *
	 * MIT License
	 *
	 * Copyright (c) 2016 珠峰课堂,Ramroll
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 *
	 */

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(187);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.storages = exports.purgeStoredState = exports.persistStore = exports.getStoredState = exports.createTransform = exports.createPersistor = exports.autoRehydrate = undefined;
	
	var _asyncLocalStorage = __webpack_require__(15);
	
	var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);
	
	var _autoRehydrate = __webpack_require__(19);
	
	var _autoRehydrate2 = _interopRequireDefault(_autoRehydrate);
	
	var _createPersistor = __webpack_require__(23);
	
	var _createPersistor2 = _interopRequireDefault(_createPersistor);
	
	var _createTransform = __webpack_require__(26);
	
	var _createTransform2 = _interopRequireDefault(_createTransform);
	
	var _getStoredState = __webpack_require__(27);
	
	var _getStoredState2 = _interopRequireDefault(_getStoredState);
	
	var _persistStore = __webpack_require__(28);
	
	var _persistStore2 = _interopRequireDefault(_persistStore);
	
	var _purgeStoredState = __webpack_require__(24);
	
	var _purgeStoredState2 = _interopRequireDefault(_purgeStoredState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storageDeprecatedMessage = function storageDeprecatedMessage(type) {
	  return '\n  To import async' + type + 'Storage please import from \'redux-persist/storages\'. For Example:\n  `import { async' + type + 'Storage } from \'redux-persist/storages\'`\n  or `var async' + type + 'Storage = require(\'redux-persist/storages\').async' + type + 'Storage`\n';
	};
	
	var storages = {
	  asyncLocalStorage: (0, _asyncLocalStorage2.default)('local', { deprecated: storageDeprecatedMessage('Local') }),
	  asyncSessionStorage: (0, _asyncLocalStorage2.default)('session', { deprecated: storageDeprecatedMessage('Session') })
	};
	
	exports.autoRehydrate = _autoRehydrate2.default;
	exports.createPersistor = _createPersistor2.default;
	exports.createTransform = _createTransform2.default;
	exports.getStoredState = _getStoredState2.default;
	exports.persistStore = _persistStore2.default;
	exports.purgeStoredState = _purgeStoredState2.default;
	exports.storages = storages;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global, process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = function (type, config) {
	  var deprecated = config && config.deprecated;
	  var storage = getStorage(type);
	  return {
	    getAllKeys: function getAllKeys(cb) {
	      // warn if deprecated
	      if (deprecated) console.warn('redux-persist: ', deprecated);
	
	      return new Promise(function (resolve, reject) {
	        try {
	          var keys = [];
	          for (var i = 0; i < storage.length; i++) {
	            keys.push(storage.key(i));
	          }
	          nextTick(function () {
	            cb && cb(null, keys);
	            resolve(keys);
	          });
	        } catch (e) {
	          cb && cb(e);
	          reject(e);
	        }
	      });
	    },
	    getItem: function getItem(key, cb) {
	      return new Promise(function (resolve, reject) {
	        try {
	          var s = storage.getItem(key);
	          nextTick(function () {
	            cb && cb(null, s);
	            resolve(s);
	          });
	        } catch (e) {
	          cb && cb(e);
	          reject(e);
	        }
	      });
	    },
	    setItem: function setItem(key, string, cb) {
	      return new Promise(function (resolve, reject) {
	        try {
	          storage.setItem(key, string);
	          nextTick(function () {
	            cb && cb(null);
	            resolve();
	          });
	        } catch (e) {
	          cb && cb(e);
	          reject(e);
	        }
	      });
	    },
	    removeItem: function removeItem(key, cb) {
	      return new Promise(function (resolve, reject) {
	        try {
	          storage.removeItem(key);
	          nextTick(function () {
	            cb && cb(null);
	            resolve();
	          });
	        } catch (e) {
	          cb && cb(e);
	          reject(e);
	        }
	      });
	    }
	  };
	};
	
	var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate : setImmediate;
	var nextTick = process && process.nextTick ? process.nextTick : genericSetImmediate;
	
	var noStorage = process.env.NODE_ENV === 'production' ? function () {
	  /* noop */return null;
	} : function () {
	  console.error('redux-persist asyncLocalStorage requires a global localStorage object. Either use a different storage backend or if this is a universal redux application you probably should conditionally persist like so: https://gist.github.com/rt2zz/ac9eb396793f95ff3c3b');
	  return null;
	};
	
	function hasLocalStorage() {
	  var storageExists = void 0;
	  try {
	    storageExists = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && !!window.localStorage;
	    if (storageExists) {
	      var testKey = 'redux-persist localStorage test';
	      // @TODO should we also test set and remove?
	      window.localStorage.getItem(testKey);
	    }
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') console.warn('redux-persist localStorage getItem test failed, persistence will be disabled.');
	    return false;
	  }
	  return storageExists;
	}
	
	function hasSessionStorage() {
	  try {
	    return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && typeof window.sessionStorage !== 'undefined';
	  } catch (e) {
	    return false;
	  }
	}
	
	function getStorage(type) {
	  if (type === 'local') {
	    return hasLocalStorage() ? window.localStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
	  }
	  if (type === 'session') {
	    return hasSessionStorage() ? window.sessionStorage : { getItem: noStorage, setItem: noStorage, removeItem: noStorage, getAllKeys: noStorage };
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).setImmediate, (function() { return this; }()), __webpack_require__(18)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(17);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(18)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(3);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = autoRehydrate;
	
	var _constants = __webpack_require__(20);
	
	var _isStatePlainEnough = __webpack_require__(21);
	
	var _isStatePlainEnough2 = _interopRequireDefault(_isStatePlainEnough);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function autoRehydrate() {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var stateReconciler = config.stateReconciler || defaultStateReconciler;
	
	  return function (next) {
	    return function (reducer, initialState, enhancer) {
	      var store = next(liftReducer(reducer), initialState, enhancer);
	      return _extends({}, store, {
	        replaceReducer: function replaceReducer(reducer) {
	          return store.replaceReducer(liftReducer(reducer));
	        }
	      });
	    };
	  };
	
	  function liftReducer(reducer) {
	    var rehydrated = false;
	    var preRehydrateActions = [];
	    return function (state, action) {
	      if (action.type !== _constants.REHYDRATE) {
	        if (config.log && !rehydrated) preRehydrateActions.push(action); // store pre-rehydrate actions for debugging
	        return reducer(state, action);
	      } else {
	        if (config.log && !rehydrated) logPreRehydrate(preRehydrateActions);
	        rehydrated = true;
	
	        var inboundState = action.payload;
	        var reducedState = reducer(state, action);
	
	        return stateReconciler(state, inboundState, reducedState, config.log);
	      }
	    };
	  }
	}
	
	function logPreRehydrate(preRehydrateActions) {
	  if (preRehydrateActions.length > 0) {
	    console.log('\n      redux-persist/autoRehydrate: %d actions were fired before rehydration completed. This can be a symptom of a race\n      condition where the rehydrate action may overwrite the previously affected state. Consider running these actions\n      after rehydration:\n    ', preRehydrateActions.length);
	  }
	}
	
	function defaultStateReconciler(state, inboundState, reducedState, log) {
	  var newState = _extends({}, reducedState);
	
	  Object.keys(inboundState).forEach(function (key) {
	    // if initialState does not have key, skip auto rehydration
	    if (!state.hasOwnProperty(key)) return;
	
	    // if initial state is an object but inbound state is null/undefined, skip
	    if (_typeof(state[key]) === 'object' && !inboundState[key]) {
	      if (log) console.log('redux-persist/autoRehydrate: sub state for key `%s` is falsy but initial state is an object, skipping autoRehydrate.', key);
	      return;
	    }
	
	    // if reducer modifies substate, skip auto rehydration
	    if (state[key] !== reducedState[key]) {
	      if (log) console.log('redux-persist/autoRehydrate: sub state for key `%s` modified, skipping autoRehydrate.', key);
	      newState[key] = reducedState[key];
	      return;
	    }
	
	    // otherwise take the inboundState
	    if ((0, _isStatePlainEnough2.default)(inboundState[key]) && (0, _isStatePlainEnough2.default)(state[key])) newState[key] = _extends({}, state[key], inboundState[key]); // shallow merge
	    else newState[key] = inboundState[key]; // hard set
	
	    if (log) console.log('redux-persist/autoRehydrate: key `%s`, rehydrated to ', key, newState[key]);
	  });
	  return newState;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KEY_PREFIX = exports.KEY_PREFIX = 'reduxPersist:';
	var REHYDRATE = exports.REHYDRATE = 'persist/REHYDRATE';

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isStatePlainEnough;
	
	var _isPlainObject = __webpack_require__(22);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isStatePlainEnough(a) {
	  // isPlainObject + duck type not immutable
	  if (!a) return false;
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') return false;
	  if (typeof a.asMutable === 'function') return false;
	  if (!(0, _isPlainObject2.default)(a)) return false;
	  return true;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(189);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPersistor;
	
	var _constants = __webpack_require__(20);
	
	var _asyncLocalStorage = __webpack_require__(15);
	
	var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);
	
	var _purgeStoredState = __webpack_require__(24);
	
	var _purgeStoredState2 = _interopRequireDefault(_purgeStoredState);
	
	var _jsonStringifySafe = __webpack_require__(25);
	
	var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPersistor(store, config) {
	  // defaults
	  var serializer = config.serialize === false ? function (data) {
	    return data;
	  } : defaultSerializer;
	  var deserializer = config.serialize === false ? function (data) {
	    return data;
	  } : defaultDeserializer;
	  var blacklist = config.blacklist || [];
	  var whitelist = config.whitelist || false;
	  var transforms = config.transforms || [];
	  var debounce = config.debounce || false;
	  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX;
	
	  // pluggable state shape (e.g. immutablejs)
	  var stateInit = config._stateInit || {};
	  var stateIterator = config._stateIterator || defaultStateIterator;
	  var stateGetter = config._stateGetter || defaultStateGetter;
	  var stateSetter = config._stateSetter || defaultStateSetter;
	
	  // storage with keys -> getAllKeys for localForage support
	  var storage = config.storage || (0, _asyncLocalStorage2.default)('local');
	  if (storage.keys && !storage.getAllKeys) {
	    storage.getAllKeys = storage.keys;
	  }
	
	  // initialize stateful values
	  var lastState = stateInit;
	  var paused = false;
	  var storesToProcess = [];
	  var timeIterator = null;
	
	  store.subscribe(function () {
	    if (paused) return;
	
	    var state = store.getState();
	
	    stateIterator(state, function (subState, key) {
	      if (!passWhitelistBlacklist(key)) return;
	      if (stateGetter(lastState, key) === stateGetter(state, key)) return;
	      if (storesToProcess.indexOf(key) !== -1) return;
	      storesToProcess.push(key);
	    });
	
	    // time iterator (read: debounce)
	    if (timeIterator === null) {
	      timeIterator = setInterval(function () {
	        if (storesToProcess.length === 0) {
	          clearInterval(timeIterator);
	          timeIterator = null;
	          return;
	        }
	
	        var key = storesToProcess[0];
	        var storageKey = createStorageKey(key);
	        var endState = transforms.reduce(function (subState, transformer) {
	          return transformer.in(subState, key);
	        }, stateGetter(store.getState(), key));
	        if (typeof endState !== 'undefined') storage.setItem(storageKey, serializer(endState), warnIfSetError(key));
	        storesToProcess.shift();
	      }, debounce);
	    }
	
	    lastState = state;
	  });
	
	  function passWhitelistBlacklist(key) {
	    if (whitelist && whitelist.indexOf(key) === -1) return false;
	    if (blacklist.indexOf(key) !== -1) return false;
	    return true;
	  }
	
	  function adhocRehydrate(incoming) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var state = {};
	    if (options.serial) {
	      stateIterator(incoming, function (subState, key) {
	        try {
	          var data = deserializer(subState);
	          var value = transforms.reduceRight(function (interState, transformer) {
	            return transformer.out(interState, key);
	          }, data);
	          state = stateSetter(state, key, value);
	        } catch (err) {
	          if (process.env.NODE_ENV !== 'production') console.warn('Error rehydrating data for key "' + key + '"', subState, err);
	        }
	      });
	    } else state = incoming;
	
	    store.dispatch(rehydrateAction(state));
	    return state;
	  }
	
	  function createStorageKey(key) {
	    return '' + keyPrefix + key;
	  }
	
	  // return `persistor`
	  return {
	    rehydrate: adhocRehydrate,
	    pause: function pause() {
	      paused = true;
	    },
	    resume: function resume() {
	      paused = false;
	    },
	    purge: function purge(keys) {
	      return (0, _purgeStoredState2.default)({ storage: storage, keyPrefix: keyPrefix }, keys);
	    }
	  };
	}
	
	function warnIfSetError(key) {
	  return function setError(err) {
	    if (err && process.env.NODE_ENV !== 'production') {
	      console.warn('Error storing data for key:', key, err);
	    }
	  };
	}
	
	function defaultSerializer(data) {
	  return (0, _jsonStringifySafe2.default)(data, null, null, function (k, v) {
	    if (process.env.NODE_ENV !== 'production') return null;
	    throw new Error('\n      redux-persist: cannot process cyclical state.\n      Consider changing your state structure to have no cycles.\n      Alternatively blacklist the corresponding reducer key.\n      Cycle encounted at key "' + k + '" with value "' + v + '".\n    ');
	  });
	}
	
	function defaultDeserializer(serial) {
	  return JSON.parse(serial);
	}
	
	function rehydrateAction(data) {
	  return {
	    type: _constants.REHYDRATE,
	    payload: data
	  };
	}
	
	function defaultStateIterator(collection, callback) {
	  return Object.keys(collection).forEach(function (key) {
	    return callback(collection[key], key);
	  });
	}
	
	function defaultStateGetter(state, key) {
	  return state[key];
	}
	
	function defaultStateSetter(state, key, value) {
	  state[key] = value;
	  return state;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = purgeStoredState;
	
	var _constants = __webpack_require__(20);
	
	function purgeStoredState(config, keys) {
	  var storage = config.storage;
	  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX;
	
	  // basic validation
	  if (Array.isArray(config)) throw new Error('redux-persist: purgeStoredState requires config as a first argument (found array). An array of keys is the optional second argument.');
	  if (!storage) throw new Error('redux-persist: config.storage required in purgeStoredState');
	
	  if (typeof keys === 'undefined') {
	    // if keys is not defined, purge all keys
	    return new Promise(function (resolve, reject) {
	      storage.getAllKeys(function (err, allKeys) {
	        if (err && process.env.NODE_ENV !== 'production') {
	          console.warn('redux-persist: error during purgeStoredState in storage.getAllKeys');
	          reject(err);
	        } else {
	          resolve(purgeStoredState(config, allKeys.filter(function (key) {
	            return key.indexOf(keyPrefix) === 0;
	          }).map(function (key) {
	            return key.slice(keyPrefix.length);
	          })));
	        }
	      });
	    });
	  } else {
	    // otherwise purge specified keys
	    return Promise.all(keys.map(function (key) {
	      return storage.removeItem('' + keyPrefix + key, warnIfRemoveError(key));
	    }));
	  }
	}
	
	function warnIfRemoveError(key) {
	  return function removeError(err) {
	    if (err && process.env.NODE_ENV !== 'production') {
	      console.warn('Error storing data for key:', key, err);
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 25 */
/***/ function(module, exports) {

	exports = module.exports = stringify
	exports.getSerialize = serializer
	
	function stringify(obj, replacer, spaces, cycleReplacer) {
	  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
	}
	
	function serializer(replacer, cycleReplacer) {
	  var stack = [], keys = []
	
	  if (cycleReplacer == null) cycleReplacer = function(key, value) {
	    if (stack[0] === value) return "[Circular ~]"
	    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
	  }
	
	  return function(key, value) {
	    if (stack.length > 0) {
	      var thisPos = stack.indexOf(this)
	      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
	      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
	      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
	    }
	    else stack.push(value)
	
	    return replacer == null ? value : replacer.call(this, key, value)
	  }
	}


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function createTransform(inbound, outbound) {
	  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	  var whitelist = config.whitelist || null;
	  var blacklist = config.blacklist || null;
	
	  function whitelistBlacklistCheck(key) {
	    if (whitelist && whitelist.indexOf(key) === -1) return true;
	    if (blacklist && blacklist.indexOf(key) !== -1) return true;
	    return false;
	  }
	
	  return {
	    in: function _in(state, key) {
	      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key) : state;
	    },
	    out: function out(state, key) {
	      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key) : state;
	    }
	  };
	}
	
	exports.default = createTransform;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = getStoredState;
	
	var _constants = __webpack_require__(20);
	
	var _asyncLocalStorage = __webpack_require__(15);
	
	var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStoredState(config, onComplete) {
	  var storage = config.storage || (0, _asyncLocalStorage2.default)('local');
	  var deserialize = config.deserialize || defaultDeserialize;
	  var blacklist = config.blacklist || [];
	  var whitelist = config.whitelist || false;
	  var transforms = config.transforms || [];
	  var keyPrefix = config.keyPrefix !== undefined ? config.keyPrefix : _constants.KEY_PREFIX;
	
	  // fallback getAllKeys to `keys` if present (LocalForage compatability)
	  if (storage.keys && !storage.getAllKeys) storage = _extends({}, storage, { getAllKeys: storage.keys });
	
	  var restoredState = {};
	  var completionCount = 0;
	
	  storage.getAllKeys(function (err, allKeys) {
	    if (err) {
	      if (process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error in storage.getAllKeys');
	      complete(err);
	    }
	
	    var persistKeys = allKeys.filter(function (key) {
	      return key.indexOf(keyPrefix) === 0;
	    }).map(function (key) {
	      return key.slice(keyPrefix.length);
	    });
	    var keysToRestore = persistKeys.filter(passWhitelistBlacklist);
	
	    var restoreCount = keysToRestore.length;
	    if (restoreCount === 0) complete(null, restoredState);
	    keysToRestore.forEach(function (key) {
	      storage.getItem(createStorageKey(key), function (err, serialized) {
	        if (err && process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);else restoredState[key] = rehydrate(key, serialized);
	        completionCount += 1;
	        if (completionCount === restoreCount) complete(null, restoredState);
	      });
	    });
	  });
	
	  function rehydrate(key, serialized) {
	    var state = null;
	
	    try {
	      var data = deserialize(serialized);
	      state = transforms.reduceRight(function (subState, transformer) {
	        return transformer.out(subState, key);
	      }, data);
	    } catch (err) {
	      if (process.env.NODE_ENV !== 'production') console.warn('redux-persist/getStoredState: Error restoring data for key:', key, err);
	    }
	
	    return state;
	  }
	
	  function complete(err, restoredState) {
	    onComplete(err, restoredState);
	  }
	
	  function passWhitelistBlacklist(key) {
	    if (whitelist && whitelist.indexOf(key) === -1) return false;
	    if (blacklist.indexOf(key) !== -1) return false;
	    return true;
	  }
	
	  function createStorageKey(key) {
	    return '' + keyPrefix + key;
	  }
	
	  if (typeof onComplete !== 'function' && !!Promise) {
	    return new Promise(function (resolve, reject) {
	      onComplete = function onComplete(err, restoredState) {
	        if (err) reject(err);else resolve(restoredState);
	      };
	    });
	  }
	}
	
	function defaultDeserialize(serial) {
	  return JSON.parse(serial);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global, process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = persistStore;
	
	var _constants = __webpack_require__(20);
	
	var _getStoredState = __webpack_require__(27);
	
	var _getStoredState2 = _interopRequireDefault(_getStoredState);
	
	var _createPersistor = __webpack_require__(23);
	
	var _createPersistor2 = _interopRequireDefault(_createPersistor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// try to source setImmediate as follows: setImmediate (global) -> global.setImmediate -> setTimeout(fn, 0)
	var genericSetImmediate = typeof setImmediate === 'undefined' ? global.setImmediate || function (fn) {
	  return setTimeout(fn, 0);
	} : setImmediate;
	
	function persistStore(store) {
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var onComplete = arguments[2];
	
	  // defaults
	  // @TODO remove shouldRestore
	  var shouldRestore = !config.skipRestore;
	  if (process.env.NODE_ENV !== 'production' && config.skipRestore) console.warn('redux-persist: config.skipRestore has been deprecated. If you want to skip restoration use `createPersistor` instead');
	
	  var purgeKeys = null;
	
	  // create and pause persistor
	  var persistor = (0, _createPersistor2.default)(store, config);
	  persistor.pause();
	
	  // restore
	  if (shouldRestore) {
	    genericSetImmediate(function () {
	      (0, _getStoredState2.default)(config, function (err, restoredState) {
	        // do not persist state for purgeKeys
	        if (purgeKeys) {
	          if (purgeKeys === '*') restoredState = {};else purgeKeys.forEach(function (key) {
	            return Reflect.deleteProperty(restoredState, key);
	          });
	        }
	
	        store.dispatch(rehydrateAction(restoredState, err));
	        complete(err, restoredState);
	      });
	    });
	  } else genericSetImmediate(complete);
	
	  function complete(err, restoredState) {
	    persistor.resume();
	    onComplete && onComplete(err, restoredState);
	  }
	
	  return _extends({}, persistor, {
	    purge: function purge(keys) {
	      purgeKeys = keys || '*';
	      persistor.purge(keys);
	    }
	  });
	}
	
	function rehydrateAction(payload) {
	  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	  return {
	    type: _constants.REHYDRATE,
	    payload: payload,
	    error: error
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16).setImmediate, (function() { return this; }()), __webpack_require__(18)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.course = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /***********************************************
	                                                                                                                                                                                                                                                                   * MIT License
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * Copyright (c) 2016 珠峰课堂,Ramroll
	                                                                                                                                                                                                                                                                   * Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                                                                                                                                                                                                                   * of this software and associated documentation files (the "Software"), to deal
	                                                                                                                                                                                                                                                                   * in the Software without restriction, including without limitation the rights
	                                                                                                                                                                                                                                                                   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                                                                                                                                                                                                                   * copies of the Software, and to permit persons to whom the Software is
	                                                                                                                                                                                                                                                                   * furnished to do so, subject to the following conditions:
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * The above copyright notice and this permission notice shall be included in all
	                                                                                                                                                                                                                                                                   * copies or substantial portions of the Software.
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                                                                                                                                                                                                                   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                                                                                                                                                                                                                   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                                                                                                                                                                                                                   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                                                                                                                                                                                                                   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                                                                                                                                                                                                                   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                                                                                                                                                                                                                   * SOFTWARE.
	                                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                                   */
	
	var _course = __webpack_require__(9);
	
	var initial = {
	  course: null,
	  topic: null,
	  id: null,
	  title: null
	};
	
	var course = exports.course = function course() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _course.ACTION_SET_COURSE:
	      return { course: action.course };
	    case _course.ACTION_SWITCH_TO:
	      return _extends({}, state, { topic: action.topic, id: action.id, title: action.title ? action.title : state.title });
	  }
	  return state;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.socket_recorder = undefined;
	exports.init_socket = init_socket;
	
	var _draw = __webpack_require__(11);
	
	var socket = null; /***********************************************
	                    * 
	                    * MIT License
	                    *
	                    * Copyright (c) 2016 珠峰课堂,Ramroll
	                    * Permission is hereby granted, free of charge, to any person obtaining a copy
	                    * of this software and associated documentation files (the "Software"), to deal
	                    * in the Software without restriction, including without limitation the rights
	                    * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                    * copies of the Software, and to permit persons to whom the Software is
	                    * furnished to do so, subject to the following conditions:
	                    *
	                    * The above copyright notice and this permission notice shall be included in all
	                    * copies or substantial portions of the Software.
	                    *
	                    * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                    * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                    * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                    * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                    * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                    * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                    * SOFTWARE.
	                    *
	                    */
	
	function init_socket() {
	  socket = io("ws://localhost:3006");
	}
	var socket_recorder = exports.socket_recorder = function socket_recorder(store) {
	  return function (next) {
	    return function (action) {
	
	      switch (action.type) {
	
	        case _draw.ACTION_DRAW:
	          socket.emit("draw", action);
	          break;
	
	        case _draw.ACTION_CLEAR:
	          socket.emit("clear", action);
	          break;
	        case _draw.ACTION_DRAW_SEGMENT:
	          socket.emit("draw", action);
	          break;
	      }
	
	      return next(action);
	    };
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(3))(225);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./main.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./main.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  cursor: url(" + __webpack_require__(35) + "), auto;\n  margin: 0;\n}\n.menu {\n  position: absolute;\n  z-index: 5;\n  background-color: #fff;\n  top: 0;\n  left: -230px;\n  width: 240px;\n  border-right: 10px solid #eee;\n  padding-right: 20px;\n  transition: left 0.3s ease;\n}\n.menu:hover {\n  border-right: 1px solid #eee;\n  left: 0;\n}\n.menu-item {\n  color: #333;\n  font-family: 'Microsoft YaHei';\n}\n.menu-item:hover {\n  font-weight: bold;\n}\n.canvas {\n  width: 100%;\n  height: 100%;\n}\n.color {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.color div {\n  float: left;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #eee;\n}\n.cleaner {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  font-size: 20px;\n  color: #666;\n  border: 1px solid #eee;\n}\n.cleaner:hover {\n  color: #333;\n}\n.eraser {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #000;\n}\n.pages {\n  position: absolute;\n  top: 20px;\n  left: 50px;\n}\n.pages .page {\n  margin-left: 5px;\n  color: #000;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #efefef;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  float: left;\n}\n.title {\n  position: absolute;\n  left: calc(50% - 100px);\n  font-size: 32px;\n  opacity: 0.5;\n  top: 20px;\n  width: 300px;\n  text-align: center;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #a4ee97;\n}\n", ""]);
	
	// exports


/***/ },
/* 34 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+d3d3Lmlua3NjYXBlLm9yZzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGMtVWAAAA81JREFUWAnFV+1LU2EUP8+928xMRQudhVImGb1stkrcNC18WQUVBftS0Ieg700M+ti3PtiLf0EQEVhBCb3pLFs1X9DUJULUnI1cOTVKc5l7u7fzLDfurne5uWkHhHN+53l+57dznzdh4Hau5d3tjcfhP5mMMGwjD3yL01zmTM/IGuQBbMDzNgBi43jZSNbeR2OEAMIrY4TSOjvKnN++ft6Uk78F1qZnRFRCcV1ZmtbyCDCJAUO50jKzrTn5m2Fy7JMENXkgASYNCgpggB9Zm54Jm3eoFxMTOLgYTB4SFAAE7NEoX5lmM401JSei5RPF/woAGJEietPhtrx+7i7HRXi3vnZPtdSYRLGFDrCLBFheujtfts3qsAAdkwK4U+prNGWJFhTPDwrICIw7MNGPn+IibjiT5ZXb0tE6q0Us1CF0YR0Q7mlDtUZFg2RZcBuKyeprSwyI3cE/uTiH8QQLcKCx3YpnReImKYDSGqs1hwnD0S2YKlHmMxB/xXXT8JhELi4oqgDKYtSrDhCOeYxu5OmEAOHhAwqsvGoamqRjl2v/FEBJL+hVGoZj2tDdIC6Ck60BHxxqMlunxblYY+Eik5zT1DY0wPFMJSa/iAfgBVHCyOFJQ50qTZyLNV5SACVqej7wnmOhIsqBpUOBDy8bdipiLSocF5OAoIhWq4P1yivQHxYSLPi1P6flzQaDATdIfBazAErbaO5z8YyvCt1eiTIn82dsNxFfcl0J58atuMc+9XtPwfpmGcNqsdQWIRn6au3WvPXdo65nIjxqGLcAytTnmPLqC7bf9bIeen0Wi9hLtUVKebfd1SHCJcNlCaBMZofDjyLue5j5rdgJ8fFcqS1U/sJOdElWFYDLFrAggtOfdbV4nMocjPcLeOlKqNMVKcexE/0RuCiIa8GI5kaExjr1FcKTSxEgAMcTcuaGabBZhIfDhDoQZkGnxz7xQleY58FfXiPA8SkBJ7RFuYPd9omPAjzsJk0AZcRvbtEW5k2iiCMYhrpLa5wqL8zr7Bp1OdCPsNCgCDDRAJ9wp/Gn30IeWZiLh1m8wKqvvbD2hTF0VkQALWCsUx3DNXEPS6wRFPzOEK4Kb9DwaRrXSSggWtK9YRp6hO+pozjQLRicjfeGqb5CvS2ErVgHQgWMenUp4Qg9GbMpNu/1wY+ZOV+qQqG72fvh7YoLoEXxut7FAWmf9/iVUz/c+J8fDzKW9aYrUnavigAqgrZ93P1z2BcIhN+ZKQr511UTQEWcKy3eN+f1dvoDgeDbgSH4cWhiNe186fZtcwGv2e8P5GIH2v8AD34lPgX/LxAAAAAASUVORK5CYII="

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map