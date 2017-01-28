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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Main = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(5);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(6);
	
	var _urlParse = __webpack_require__(7);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	var _qs = __webpack_require__(8);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _menu = __webpack_require__(9);
	
	var _Blackboard = __webpack_require__(11);
	
	var _init = __webpack_require__(23);
	
	var _socket_recorder = __webpack_require__(41);
	
	__webpack_require__(44);
	
	var _course = __webpack_require__(10);
	
	var _Fiddle = __webpack_require__(18);
	
	var _Markdown = __webpack_require__(16);
	
	var _dimensions = __webpack_require__(13);
	
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
	
	    var join = others.filter(function (k) {
	      return k.length > 0;
	    }).join(" ");
	    return [f, join];
	  });
	
	  lines = lines.map(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        n = _ref4[0],
	        title = _ref4[1];
	
	    var type = "blackboard";
	    if (title.match(/\[code\]/)) {
	      title = title.replace("[code]", "");
	      type = 'code';
	    } else if (title.match(/\[markdown\]/)) {
	      title = title.replace("[markdown]", "");
	      type = 'blackboard&markdown';
	    }
	    return {
	      level: n.replace(".", "").length,
	      topic: n,
	      title: title,
	      type: type
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
	    // this.query = qs.parse(url.query.replace("?", "")) || {}
	    // if(!this.query.course){
	    //   this.query.course = 'demo'
	    // }
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
	
	      var _store$getState$cours = store.getState().course,
	          course = _store$getState$cours.course,
	          topic = _store$getState$cours.topic,
	          id = _store$getState$cours.id;
	
	      var promise = loading_content(course);
	      promise.then(function (data) {
	        store.dispatch((0, _course.set_course)(course));
	
	        var content = format_menu(data);
	
	        // find topic 
	
	        if (!(topic && id)) {
	          store.dispatch((0, _course.switch_to)(content[0].topic, 1, content[0].title));
	        } else {
	
	          var menuItem = content.find(function (x) {
	            return x.topic == topic;
	          });
	          store.dispatch((0, _course.switch_to)(topic, id, menuItem.title));
	        }
	
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
	
	      var course = store.getState().course;
	      return _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_menu.Menu, { content: content, course: course.course }),
	          _react2.default.createElement(App, { content: content })
	        )
	      );
	    }
	  }]);
	
	  return Main;
	}(_react2.default.Component);
	
	var _App = function (_Component) {
	  _inherits(_App, _Component);
	
	  function _App() {
	    _classCallCheck(this, _App);
	
	    return _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));
	  }
	
	  _createClass(_App, [{
	    key: 'renderPanel',
	    value: function renderPanel(course) {
	      var item = this.props.content.find(function (x) {
	        return x.topic === course.topic;
	      });
	      return _react2.default.createElement(_Blackboard.Blackboard, null);
	      /*
	      if(item.type === 'blackboard'){
	        return <Blackboard />
	      }
	      else if(item.type === "code") {
	        return <Fiddle />
	      }
	      else if(item.type === "blackboard&markdown") {
	         return [<Blackboard key="1" />, <Markdown  key="2" />]
	      }
	      */
	    }
	  }, {
	    key: '_add_code',
	    value: function _add_code() {
	      var _props$course = this.props.course,
	          course = _props$course.course,
	          topic = _props$course.topic,
	          id = _props$course.id;
	
	
	      store.dispatch({
	        type: "ADD_WIDGET",
	        widget: { type: "code", x: 80, y: 80, w: (0, _dimensions.getDimensions)().width - 160, h: (0, _dimensions.getDimensions)().height - 160 },
	        topic: topic,
	        id: id
	      });
	    }
	  }, {
	    key: '_add_md',
	    value: function _add_md() {
	      var _props$course2 = this.props.course,
	          course = _props$course2.course,
	          topic = _props$course2.topic,
	          id = _props$course2.id;
	
	
	      store.dispatch({
	        type: "ADD_WIDGET",
	        widget: { type: "markdown", x: 80, y: 80, w: ((0, _dimensions.getDimensions)().width - 160) * 0.6, h: ((0, _dimensions.getDimensions)().height - 160) * 0.6 },
	        topic: topic,
	        id: id
	      });
	    }
	  }, {
	    key: '_add_audio',
	    value: function _add_audio() {
	      var _props$course3 = this.props.course,
	          course = _props$course3.course,
	          topic = _props$course3.topic,
	          id = _props$course3.id;
	
	
	      store.dispatch({
	        type: "ADD_WIDGET",
	        widget: { type: "audio", x: 80, y: 80, w: 150, h: 40 },
	        topic: topic,
	        id: id
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.renderPanel(this.props.course),
	        _react2.default.createElement(
	          'div',
	          { className: 'tools' },
	          _react2.default.createElement(
	            'div',
	            { className: 'tools-btn', onClick: this._add_code.bind(this) },
	            _react2.default.createElement(
	              'i',
	              { className: 'material-icons' },
	              'code'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'tools-btn', onClick: this._add_md.bind(this) },
	            _react2.default.createElement(
	              'i',
	              { className: 'material-icons' },
	              'subject'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'tools-btn', onClick: this._add_audio.bind(this) },
	            _react2.default.createElement(
	              'i',
	              { className: 'material-icons' },
	              'mic'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return _App;
	}(_react.Component);
	
	var map = function map(state) {
	  return {
	    course: state.course
	  };
	};
	var App = (0, _reactRedux.connect)(map)(_App);
	
	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById("app"));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(32);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(208);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(183);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(178);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Menu = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _course = __webpack_require__(10);
	
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Blackboard = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(6);
	
	var _course = __webpack_require__(10);
	
	var _draw2 = __webpack_require__(12);
	
	var _dimensions = __webpack_require__(13);
	
	var _apis = __webpack_require__(14);
	
	var _Dropbox = __webpack_require__(15);
	
	var _Markdown = __webpack_require__(16);
	
	var _Fiddle = __webpack_require__(18);
	
	var _AudioRecorder = __webpack_require__(20);
	
	var _ColorPicker = __webpack_require__(22);
	
	var _paste_handler = __webpack_require__(49);
	
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
	
	/** 一些自定义组件 **/
	
	
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
	        lines.map(function (_ref) {
	          var x = _ref.x,
	              y = _ref.y,
	              color = _ref.color,
	              penSize = _ref.penSize;
	
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
	      this.refs.canvas.width = (0, _dimensions.getDimensions)().width * 2;
	      this.refs.canvas.height = (0, _dimensions.getDimensions)().height * 2;
	      this.ctx = this.refs.canvas.getContext("2d");
	      this._clear(false);
	      this._redraw();
	    }
	  }, {
	    key: '_paste',
	    value: function _paste(event) {
	      var paste_handler = (0, _paste_handler.paste_handler_factory)(this);
	      paste_handler(event);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this._paste = this._paste.bind(this);
	
	      document.addEventListener("paste", this._paste);
	      this.I = setInterval(this.saveWidgets.bind(this), 1000);
	
	      this._reloading();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.I);
	
	      document.removeEventListener("paste", this._paste);
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
	    key: 'saveWidgets',
	    value: function saveWidgets() {
	      var topic = this.props.course.topic;
	      var id = this.props.course.id;
	      if (this.state.loading) {
	        return;
	      }
	      if (this.props.course.widgets[topic]) {
	
	        store.dispatch({
	          type: "SAVE_WIDGET",
	          course: this.props.course.course,
	          topic: this.props.course.topic,
	          id: this.props.course.id
	          // widgets: this.props.course.widgets[topic][id]
	        });
	      }
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
	
	      (0, _apis.loading_data)(this.props.course).then(function (_ref2) {
	        var draw = _ref2.draw,
	            widgets = _ref2.widgets;
	
	        setTimeout(function () {
	
	          store.dispatch({
	            type: "SET_WIDGETS",
	            widgets: widgets,
	            topic: _this4.props.course.topic,
	            id: _this4.props.course.id
	          });
	
	          /*
	          widgets.map(widget => {
	            store.dispatch({
	              type : "ADD_WIDGET",
	              widget,
	              topic : this.props.course.topic,
	              id : this.props.course.id
	            })
	          })
	          */
	        }, 0);
	
	        _this4.redraw_data = draw;
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
	      this.ctx.clearRect(0, 0, (0, _dimensions.getDimensions)().width * 2, (0, _dimensions.getDimensions)().height * 2);
	    }
	  }, {
	    key: '_switch',
	    value: function _switch(id) {
	      this._clear(false);
	      store.dispatch((0, _course.switch_to)(this.props.course.topic, id));
	    }
	  }, {
	    key: '_renderWidgets',
	    value: function _renderWidgets() {
	      var _this5 = this;
	
	      var topic = this.props.course.topic;
	      var id = this.props.course.id;
	      if (!this.props.course.widgets[topic]) {
	        return null;
	      }
	
	      var widgets = this.props.course.widgets[topic][id];
	      if (!widgets) {
	        return null;
	      }
	
	      return widgets.map(function (widget) {
	
	        var key = topic + "_" + id + "_" + widget.id;
	        switch (widget.type) {
	
	          case "markdown":
	            return _react2.default.createElement(
	              _Dropbox.Dropbox,
	              { key: key, course: _this5.props.course, widget: widget },
	              _react2.default.createElement(_Markdown.Markdown, { course: _this5.props.course, widget: widget })
	            );
	          case "code":
	            return _react2.default.createElement(
	              _Dropbox.Dropbox,
	              { key: key, course: _this5.props.course, widget: widget },
	              _react2.default.createElement(_Fiddle.Fiddle, { course: _this5.props.course, widget: widget })
	            );
	          case "audio":
	            return _react2.default.createElement(
	              _Dropbox.Dropbox,
	              { key: key, course: _this5.props.course, widget: widget },
	              _react2.default.createElement(_AudioRecorder.AudioRecorder, { course: _this5.props.course, widget: widget })
	            );
	
	          case "image":
	            return _react2.default.createElement(
	              _Dropbox.Dropbox,
	              { key: key, course: _this5.props.course, widget: widget },
	              _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('img', { style: { width: '100%', height: '100%' }, src: widget.img })
	              )
	            );
	
	        }
	      });
	      console.log("@Blckboard _renderWidgets()");
	      console.log(widgets);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;
	
	      var _state = this.state,
	          colors = _state.colors,
	          color = _state.color,
	          x = _state.x,
	          y = _state.y,
	          loading = _state.loading;
	      // console.log("@Blackboard render")
	
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
	        this._renderWidgets(),
	        _react2.default.createElement(
	          'div',
	          { className: 'title' },
	          course.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'pages', className: 'pages' },
	          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (x) {
	            return _react2.default.createElement(
	              'div',
	              { key: x, onClick: function onClick() {
	                  return _this6._switch(x);
	                }, style: { backgroundColor: x == course.id ? "#31d22e" : "#f2f3f4" }, className: 'page' },
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
	        _react2.default.createElement(_ColorPicker.ColorPicker, { pick: this._pick.bind(this), colors: colors, color: color }),
	        _react2.default.createElement('canvas', { className: 'canvas',
	          ref: 'canvas'
	
	        })
	      );
	    }
	  }]);
	
	  return _Blackboard;
	}(_react.Component);
	
	var map = function map(state) {
	  return {
	    course: state.course
	  };
	};
	var Blackboard = exports.Blackboard = (0, _reactRedux.connect)(map)(_Blackboard);

/***/ },
/* 12 */
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
/* 13 */
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
	
	var getDimensions = exports.getDimensions = function getDimensions() {
	
	  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	
	  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	  return {
	    width: width,
	    height: height
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
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
	
	var get = function get(url) {
	  return new Promise(function (resolve, reject) {
	    $.get(url, function (data) {
	      resolve(data);
	    }).catch(function (err) {
	      resolve(null);
	    });
	  });
	};
	
	var loading_data = exports.loading_data = function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
	    var course = _ref2.course,
	        topic = _ref2.topic,
	        id = _ref2.id;
	    var url, url1, data, widgets;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            url = "/courses/" + course + "/" + topic + "/" + id + ".log";
	            url1 = "/courses/" + course + "/" + topic + "/" + id + ".widget";
	            _context.next = 4;
	            return Promise.all([get(url), get(url1)]);
	
	          case 4:
	            data = _context.sent;
	
	
	            /// TODO 调试返回数据
	
	            widgets = [];
	
	            if (!data[1]) {
	              widgets = [
	                // {type : "code", x : 100, y : 100, w : 300, h : 300},
	                // {type : "markdown", x : 300, y : 100, w : 300, h : 300}
	              ];
	            } else {
	              try {
	                widgets = JSON.parse(data[1]);
	              } catch (e) {
	                /// TODO 
	              }
	            }
	            return _context.abrupt("return", {
	              draw: data[0],
	              widgets: widgets
	            });
	
	          case 8:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));
	
	  return function loading_data(_x) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dropbox = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	
	var HSIZE = 20;
	
	var Dropbox = exports.Dropbox = function (_Component) {
	  _inherits(Dropbox, _Component);
	
	  _createClass(Dropbox, null, [{
	    key: "__maxZIndexObj",
	    value: function __maxZIndexObj(topic, id) {
	      var max = -1;
	      var maxObj = null;
	      if (!Dropbox.__refs[topic] || !Dropbox.__refs[topic][id]) {
	        return maxObj;
	      }
	      for (var key in Dropbox.__refs[topic][id]) {
	        if (max < Dropbox.__refs[topic][id][key].state.style.zIndex) {
	          max = Dropbox.__refs[topic][id][key].state.style.zIndex;
	          maxObj = Dropbox.__refs[topic][id][key];
	        }
	      }
	      return maxObj;
	    }
	  }, {
	    key: "__add_ref",
	    value: function __add_ref(topic, id, ref) {
	      if (!Dropbox.__refs[topic]) {
	        // Dropbox.__id_counter[topic] = {}
	        Dropbox.__refs[topic] = {};
	        Dropbox.__lock[topic] = {};
	      }
	      if (!Dropbox.__refs[topic][id]) {
	        // Dropbox.__id_counter[topic][id] = 0
	        Dropbox.__refs[topic][id] = {};
	        Dropbox.__lock[topic][id] = null;
	      }
	      var box_id = ++Dropbox.__id_counter;
	      Dropbox.__refs[topic][id][box_id] = ref;
	      return box_id;
	    }
	  }, {
	    key: "__remove_ref",
	    value: function __remove_ref(topic, id, box_id) {
	
	      delete Dropbox.__refs[topic][id][box_id];
	    }
	  }]);
	
	  function Dropbox(_ref) {
	    var _ref$widget = _ref.widget,
	        x = _ref$widget.x,
	        y = _ref$widget.y,
	        w = _ref$widget.w,
	        h = _ref$widget.h,
	        _ref$course = _ref.course,
	        topic = _ref$course.topic,
	        id = _ref$course.id;
	
	    _classCallCheck(this, Dropbox);
	
	    var _this = _possibleConstructorReturn(this, (Dropbox.__proto__ || Object.getPrototypeOf(Dropbox)).call(this));
	
	    _this.id = Dropbox.__add_ref(topic, id, _this);
	
	    _this.state = {
	      style: {
	        x: x,
	        y: y,
	        w: w,
	        h: h,
	        zIndex: 10,
	        cursor: null
	      },
	      draging: false
	    };
	
	    _this.mode = null;
	    _this._drag = _this._drag.bind(_this);
	    _this._dragend = _this._dragend.bind(_this);
	    return _this;
	  }
	
	  _createClass(Dropbox, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.active = true;
	      document.body.addEventListener("mousemove", this._drag);
	      document.body.addEventListener("mouseup", this._dragend);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.active = false;
	
	      Dropbox.__remove_ref(this.props.course.topic, this.props.course.id, this.id);
	      document.body.removeEventListener("mouseup", this._dragend);
	      document.body.removeEventListener("mousemove", this._drag);
	    }
	  }, {
	    key: "_dispatch_change",
	    value: function _dispatch_change() {
	      store.dispatch({
	        type: "CHANGE_WIDGET",
	        topic: this.props.course.topic,
	        id: this.props.course.id,
	        widget: this.props.widget,
	        x: this.state.style.x,
	        y: this.state.style.y,
	        w: this.state.style.w,
	        h: this.state.style.h,
	        zIndex: this.state.style.zIndex
	      });
	    }
	  }, {
	    key: "_in_boundary",
	    value: function _in_boundary() {
	      var cond1 = event.pageX - this.state.style.x > 0;
	      var cond2 = event.pageY - this.state.style.y > 0;
	      var cond3 = event.pageX - (this.state.style.x + this.state.style.w) < 0;
	      var cond4 = event.pageY - (this.state.style.y + this.state.style.h) < 0;
	      return cond1 && cond2 && cond3 && cond4;
	    }
	  }, {
	    key: "_in_drag_area",
	    value: function _in_drag_area() {
	      var cond1 = event.pageX - this.state.style.x > 0;
	      var cond2 = event.pageY - this.state.style.y > 0;
	      var cond3 = event.pageX - (this.state.style.x + this.state.style.w) < 0;
	      var cond4 = event.pageY - (this.state.style.y + HSIZE) < 0;
	      return cond1 && cond2 && cond3 && cond4;
	    }
	
	    /**
	     * 请求释放lock
	     * 比较
	     * @param dropbox
	     * @private
	     */
	
	  }, {
	    key: "_request_release",
	    value: function _request_release(dropbox, event) {
	
	      if (this.state.draging) {
	        return false;
	      }
	      //console.log("request " + this.id + " to release lock")
	      if (!this._in_boundary(event)) {
	        //console.log(this.id + " agree release lock")
	        return true;
	      } else {
	        //console.log("compare zIndex")
	        //console.log(this.id + " zIndex:" + this.state.style.zIndex )
	        //console.log(dropbox.id + " zIndex:" + dropbox.state.style.zIndex )
	        if (this.state.style.zIndex == dropbox.state.style.zIndex && this.id < dropbox.id) {
	
	          //console.log("brc 1")
	          return true;
	        } else if (this.state.style.zIndex < dropbox.state.style.zIndex) {
	
	          //console.log("brc 2")
	          return true;
	        } else {
	
	          //console.log("brc 3")
	          return false;
	        }
	      }
	
	      return true;
	    }
	  }, {
	    key: "_require_lock",
	    value: function _require_lock(event) {
	      var _props$course = this.props.course,
	          topic = _props$course.topic,
	          id = _props$course.id;
	
	      // console.log(id + ":require lock")
	
	      if (this._in_boundary(event)) {
	
	        //console.log("in boundary")
	        if (!Dropbox.__lock[topic][id]) {
	          // console.log("no lock")
	          Dropbox.__lock[topic][id] = this.id;
	          // console.log("require lock success")
	        } else if (Dropbox.__lock[topic][id] != this.id) {
	
	          //console.log("lock : " + Dropbox.__lock)
	          if (Dropbox.__refs[topic][id][Dropbox.__lock[topic][id]]) {
	            if (Dropbox.__refs[topic][id][Dropbox.__lock[topic][id]]._request_release(this, event)) {
	              Dropbox.__lock[topic][id] = this.id;
	              //console.log("require lock success")
	            } else {
	
	                // console.log("require lock fail")
	              }
	          } else {
	            Dropbox.__lock[topic][id] = this.id;
	            // console.log("require lock success")
	          }
	        } else {
	
	            // console.log("already have lock")
	          }
	      } else {
	          // console.log("require lock fail")
	        }
	    }
	  }, {
	    key: "_drag",
	    value: function _drag(event) {
	      var _this2 = this;
	
	      if (!this.active) {
	        return;
	      }
	
	      var _props$course2 = this.props.course,
	          topic = _props$course2.topic,
	          id = _props$course2.id;
	
	      this._require_lock(event);
	
	      if (Dropbox.__lock[topic][id] != this.id) {
	        return;
	      }
	
	      //// 判断是否算作调整大小
	      // //console.log(event.pageY, event.pageY, event.pageY)
	
	
	      if (!this.state.draging) {
	
	        var dw = Math.abs(event.pageX - this.state.style.x);
	        var dn = Math.abs(event.pageY - this.state.style.y);
	        var de = Math.abs(event.pageX - (this.state.style.x + this.state.style.w));
	        var ds = Math.abs(event.pageY - (this.state.style.y + this.state.style.h));
	        var th = 10;
	
	        if (dw < th && dn < th) {
	          this.mode = 'nw-resize';
	        } else if (dn < th && de < th) {
	          this.mode = "ne-resize";
	        } else if (de < th && ds < th) {
	          this.mode = 'se-resize';
	        } else if (ds < th && dw < th) {
	          this.mode = "sw-resize";
	        } else if (dw < th) {
	          this.mode = 'w-resize';
	        } else if (dn < th) {
	          this.mode = 'n-resize';
	        } else if (de < th) {
	          this.mode = 'e-resize';
	        } else if (ds < th) {
	          this.mode = 's-resize';
	        } else {
	
	          if (this._in_drag_area(event)) {
	            this.mode = 'move';
	          } else {
	            this.mode = '';
	          }
	        }
	
	        // console.log('set mode:' + this.mode + " | " + this.id)
	        //console.log('change cursor to:' + this.mode)
	        document.getElementById("app").style.cursor = this.mode;
	
	        return;
	      }
	
	      if (this.mode) {
	        event.stopPropagation();
	        event.preventDefault();
	      }
	
	      //console.log(this.mode)
	
	      if (this.X && this.Y) {
	
	        var xDiff = this.X - this.startX;
	        var yDiff = this.Y - this.startY;
	        //console.log(xDiff, yDiff)
	
	        if (this.mode === 'nw-resize') {
	
	          this.setState({
	            style: _extends({}, this.state.style, {
	              x: this.startState.x + xDiff,
	              y: this.startState.y + yDiff,
	              w: this.startState.w - xDiff,
	              h: this.startState.y - yDiff
	            })
	          }, function () {
	
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode == "ne-resize") {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              y: this.startState.y + yDiff,
	              w: this.startState.w + xDiff,
	              h: this.startState.h - yDiff
	            })
	          }, function () {
	
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode == "se-resize") {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              w: this.startState.w + xDiff,
	              h: this.startState.y + yDiff
	            })
	          }, function () {
	
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode == 'sw-resize') {
	
	          this.setState({
	            style: _extends({}, this.state.style, {
	              x: this.startState.x + xDiff,
	              w: this.startState.w - xDiff,
	              h: this.startState.y + yDiff
	            })
	          }, function () {
	
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode === 'w-resize') {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              x: this.startState.x + xDiff,
	              w: this.startState.w - xDiff
	            })
	
	          }, function () {
	
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode === 'n-resize') {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              y: this.startState.y + yDiff,
	              h: this.startState.h - yDiff
	            })
	
	          }, function () {
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode === 'e-resize') {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              w: this.startState.w + xDiff
	            })
	
	          }, function () {
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode === 's-resize') {
	          this.setState({
	            style: _extends({}, this.state.style, {
	              h: this.startState.h + yDiff
	            })
	
	          }, function () {
	            _this2._dispatch_change();
	          }.bind(this));
	        } else if (this.mode === 'move') {
	
	          this.setState({
	            style: _extends({}, this.state.style, {
	              x: this.startState.x + xDiff,
	              y: this.startState.y + yDiff
	            })
	          }, function () {
	            _this2._dispatch_change();
	          }.bind(this));
	        }
	      }
	      this.X = event.pageX;
	      this.Y = event.pageY;
	    }
	  }, {
	    key: "_dragstart",
	    value: function _dragstart(event) {
	      var _this3 = this;
	
	      if (!this.active) {
	        return;
	      }
	      var _props$course3 = this.props.course,
	          topic = _props$course3.topic,
	          id = _props$course3.id;
	
	      this._require_lock(event);
	      if (Dropbox.__lock[topic][id] !== this.id) {
	        return;
	      }
	
	      var maxObj = Dropbox.__maxZIndexObj(topic, id);
	
	      this.startX = event.pageX;
	      this.startY = event.pageY;
	      var startDrag = function () {
	
	        _this3.startState = _extends({}, _this3.state.style);
	        _this3.dragCount = 0;
	        _this3.dragI = setInterval(function () {
	          _this3.dragCount++;
	          if (_this3.dragCount > 20) {
	            clearInterval(_this3.dragI);
	            _this3.setState({
	              draging: true
	            });
	          }
	        }.bind(_this3), 10);
	      }.bind(this);
	
	      // console.log("max obj id:"  + maxObj.id)
	
	      // if(maxObj.id !== this.id) {
	      this.setState({
	        style: _extends({}, this.state.style, { zIndex: maxObj.state.style.zIndex + 1 })
	      }, function () {
	        startDrag();
	      });
	      // } else {
	      //   startDrag()
	      // }
	
	    }
	  }, {
	    key: "_dragend",
	    value: function _dragend() {
	      if (!this.active) {
	        return;
	      }
	      var _props$course4 = this.props.course,
	          topic = _props$course4.topic,
	          id = _props$course4.id;
	
	      if (Dropbox.__lock[topic][id] === this.id) {
	        Dropbox.__lock[topic][id] = null;
	      }
	      this.mode = null;
	      clearInterval(this.dragI);
	      this.setState({
	        draging: false
	      });
	    }
	  }, {
	    key: "_delete",
	    value: function _delete() {
	      if (confirm("您确定要删除吗?")) {
	        store.dispatch({
	          type: "DELETE_WIDGET",
	          course: this.props.course.course,
	          topic: this.props.course.topic,
	          id: this.props.course.id,
	          widget: this.props.widget
	
	        });
	      }
	    }
	  }, {
	    key: "_go",
	    value: function _go(n) {
	      var _this4 = this;
	
	      var incre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	
	      return function () {
	
	        if (incre) {
	          var zIndex = _this4.state.style.zIndex + n;
	          if (zIndex < 10) {
	            zIndex = 10;
	          }
	          _this4.setState({ style: _extends({}, _this4.state.style, { zIndex: zIndex }) }, function () {
	            _this4._dispatch_change();
	          }.bind(_this4));
	        } else {
	          _this4.setState({ style: _extends({}, _this4.state.style, { zIndex: 8 }) }, function () {
	            _this4._dispatch_change();
	          }.bind(_this4));
	        }
	      }.bind(this);
	    }
	  }, {
	    key: "_cursor",
	    value: function _cursor() {}
	  }, {
	    key: "render",
	    value: function render() {
	      var _state = this.state,
	          style = _state.style,
	          cursor = _state.cursor,
	          zIndex = _state.zIndex;
	
	
	      var borderColor = this.state.draging ? "black" : "#eee";
	
	      var nStyle = {
	        top: style.y + "px",
	        width: style.w + "px",
	        height: style.h + "px",
	        left: style.x + 'px', borderColor: borderColor, zIndex: style.zIndex };
	
	      return _react2.default.createElement(
	        "div",
	        {
	          ref: "dropbox",
	          className: "dropbox", style: nStyle,
	          onMouseDown: this._dragstart.bind(this)
	        },
	        _react2.default.createElement(
	          "div",
	          { className: "delete" },
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons", onClick: this._go(8, false) },
	            "vertical_align_bottom"
	          ),
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons", onClick: this._go(1) },
	            "arrow_upward"
	          ),
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons", onClick: this._go(-1) },
	            "arrow_downward"
	          ),
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons", onClick: this._delete.bind(this) },
	            "delete"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement("div", { className: "drag-area" }),
	          _react2.default.cloneElement(this.props.children, { style: style })
	        )
	      );
	    }
	  }]);
	
	  return Dropbox;
	}(_react.Component);
	
	Dropbox.__lock = {};
	Dropbox.__id_counter = 0;
	Dropbox.__refs = {};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Markdown = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(6);
	
	var _course = __webpack_require__(10);
	
	var _draw = __webpack_require__(12);
	
	var _dimensions = __webpack_require__(13);
	
	var _data_helper = __webpack_require__(17);
	
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
	
	function loading_data(_ref, widget) {
	  var course = _ref.course,
	      topic = _ref.topic,
	      id = _ref.id;
	
	  function loading() {
	    var url = '/courses/' + course + '/' + topic + '/' + id + '_' + widget.id + '.md';
	
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
	
	var Markdown = exports.Markdown = function (_Component) {
	  _inherits(Markdown, _Component);
	
	  function Markdown(props) {
	    _classCallCheck(this, Markdown);
	
	    var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this));
	
	    _this.state = {
	      markdown: null,
	      loading: true
	    };
	    return _this;
	  }
	
	  _createClass(Markdown, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      loading_data(this.props.course, this.props.widget).then(function (data) {
	
	        _this2.setState({
	          markdown: data,
	          loading: false
	        });
	      });
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
	        _this4.setState({
	          loading: false,
	          markdown: data
	        });
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.loading) {
	        return null;
	      }
	      return _react2.default.createElement(Editor, _extends({ key: '1' }, this.props, { raw: this.state.markdown }));
	    }
	  }]);
	
	  return Markdown;
	}(_react.Component);
	
	var Editor = function (_Component2) {
	  _inherits(Editor, _Component2);
	
	  function Editor(props) {
	    _classCallCheck(this, Editor);
	
	    var _this5 = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));
	
	    _this5.state = {
	      raw: props.raw || "",
	      content: markdown.toHTML(props.raw || ""),
	      show_editor: false
	    };
	
	    return _this5;
	  }
	
	  _createClass(Editor, [{
	    key: 'save',
	    value: function save() {
	      var _props$course = this.props.course,
	          course = _props$course.course,
	          topic = _props$course.topic,
	          id = _props$course.id;
	      var widget = this.props.widget;
	
	      store.dispatch({
	        type: "SAVE_MARKDOWN",
	        course: course,
	        topic: topic,
	        id: id,
	        widget: widget,
	        markdown: this.state.raw
	
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	
	      this.I = setInterval(this.save.bind(this), 1000);
	      this.refs.textarea.value = this.state.raw;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this.I);
	    }
	  }, {
	    key: '_input',
	    value: function _input(event) {
	
	      var html = markdown.toHTML(event.target.value);
	      this.setState({
	        raw: event.target.value,
	        content: html
	      });
	    }
	  }, {
	    key: '_toggle',
	    value: function _toggle() {
	      var _this6 = this;
	
	      this.setState({ show_editor: !this.state.show_editor }, function () {
	
	        _this6.refs.textarea.value = _this6.state.raw;
	      }.bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var display = this.state.show_editor ? "block" : "none";
	      var style = this.props.style;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'markdown clearfix', ref: 'markdown' },
	        _react2.default.createElement(
	          'div',
	          {
	            onClick: this._toggle.bind(this),
	            className: 'btn', style: { color: this.state.show_editor ? "#49fff6" : "#ddd" } },
	          _react2.default.createElement(
	            'i',
	            { className: 'material-icons' },
	            'mode_edit'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'markdown-editor', style: { display: display, height: style.h + "px" } },
	          _react2.default.createElement('textarea', { ref: 'textarea', onInput: this._input.bind(this) })
	        ),
	        _react2.default.createElement('div', { className: 'preview', style: { width: this.state.show_editor ? "50%" : "100%", height: style.h + "px" }, dangerouslySetInnerHTML: { __html: this.state.content } }),
	        _react2.default.createElement('div', { style: { clear: 'both' } })
	      );
	    }
	  }]);

	  return Editor;
	}(_react.Component);

/***/ },
/* 17 */
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
	
	/**
	 * 将DataTransferItem 转换为Base64的字符串
	 */
	var dataTransferItemToBase64 = exports.dataTransferItemToBase64 = function dataTransferItemToBase64(item) {
	
	  var blob = item.getAsFile();
	  var reader = new FileReader();
	
	  var promise = new Promise(function (resolve, rejecte) {
	    reader.onload = function (event) {
	      resolve(event.target.result);
	    };
	    var source = reader.readAsDataURL(blob);
	  });
	  return promise;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fiddle = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(6);
	
	var _course = __webpack_require__(10);
	
	var _code = __webpack_require__(19);
	
	var _dimensions = __webpack_require__(13);
	
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
	
	function loading_data(_ref, widget) {
	  var course = _ref.course,
	      topic = _ref.topic,
	      id = _ref.id;
	
	  function loading() {
	    var url = '/courses/' + course + '/' + topic + '/' + id + '_' + widget.id + '.js';
	
	    return new Promise(function (resolve, reject) {
	      $.get(url, function (data) {
	        resolve(data);
	      }, "text").catch(function (err) {
	        resolve(null);
	      });
	    });
	  }
	  return loading();
	}
	
	var Fiddle = exports.Fiddle = function (_Component) {
	  _inherits(Fiddle, _Component);
	
	  function Fiddle() {
	    _classCallCheck(this, Fiddle);
	
	    var _this = _possibleConstructorReturn(this, (Fiddle.__proto__ || Object.getPrototypeOf(Fiddle)).call(this));
	
	    _this.state = {
	      content: null,
	      loading: true,
	      show_code: true,
	      show_html: true
	    };
	    return _this;
	  }
	
	  _createClass(Fiddle, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      socket.on("compile-error", function (msg) {
	        console.error(msg);
	      });
	      var _s = this;
	      socket.on("compile-succ", function (msg) {
	
	        if (_s.refs.frame) _s.refs.frame.reload();
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	
	      this.reloading(this.props.course);
	    }
	  }, {
	    key: 'reloading',
	    value: function reloading(course) {
	      var _s = this;
	      loading_data(course, this.props.widget).then(function (data) {
	        _s.setState({
	          content: data || "",
	          loading: false
	        }, function () {
	          _s.refs.editor.reload();
	        });
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.course.course !== this.props.course.course || nextProps.course.topic !== this.props.course.topic || nextProps.course.id !== this.props.course.id) {
	        setTimeout(function () {
	          _this2.reloading(nextProps.course);
	        }.bind(this), 20);
	      }
	    }
	  }, {
	    key: '_compile',
	    value: function _compile() {
	      var course = this.props.course;
	      store.dispatch((0, _code.compile)(course.course, course.topic, course.id, this.props.widget));
	    }
	  }, {
	    key: '_save',
	    value: function _save() {
	      if (!this.state.loading) this.refs.editor.saveCtx();
	    }
	  }, {
	    key: '_toggleCode',
	    value: function _toggleCode() {
	      this.setState({
	        show_code: !this.state.show_code
	      });
	    }
	  }, {
	    key: '_toggleHtml',
	    value: function _toggleHtml() {
	      this.setState({
	        show_html: !this.state.show_html
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.content === null || this.state.loading) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'fiddle' },
	        _react2.default.createElement(
	          'div',
	          { className: 'options' },
	          _react2.default.createElement(
	            'div',
	            { className: 'option', onClick: this._compile.bind(this) },
	            _react2.default.createElement(
	              'i',
	              { className: 'material-icons' },
	              'play_arrow'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'option', onClick: this._toggleCode.bind(this) },
	            'code'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'option', onClick: this._toggleHtml.bind(this) },
	            'html'
	          ),
	          _react2.default.createElement('div', { style: { clear: "both" } })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(CodeEditor, {
	            show_html: this.state.show_html, show_code: this.state.show_code,
	            style: this.props.style,
	            widget: this.props.widget, course: this.props.course,
	            initialContent: this.state.content, ref: 'editor' }),
	          _react2.default.createElement(Frame, { show_html: this.state.show_html, show_code: this.state.show_code, widget: this.props.widget, course: this.props.course, ref: 'frame' }),
	          _react2.default.createElement('div', { style: { clear: "both" } })
	        )
	      );
	    }
	  }]);
	
	  return Fiddle;
	}(_react.Component);
	
	var Frame = function (_Component2) {
	  _inherits(Frame, _Component2);
	
	  function Frame() {
	    _classCallCheck(this, Frame);
	
	    return _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).apply(this, arguments));
	  }
	
	  _createClass(Frame, [{
	    key: 'reload',
	    value: function reload() {
	      this.refs.frame.contentWindow.location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var p = function p(show_code, show_html) {
	        if (show_code && show_html) {
	          return "30%";
	        } else if (show_html) {
	          return "100%";
	        }
	      };
	      var course = this.props.course;
	      var src = "/app?file=" + course.course + "_" + course.topic + "_" + course.id + "_" + this.props.widget.id;
	      return _react2.default.createElement(
	        'div',
	        { className: 'frame', style: { display: this.props.show_html ? "block" : "none", width: p(this.props.show_code, this.props.show_html) } },
	        _react2.default.createElement('iframe', { frameBorder: '0', src: src, ref: 'frame' })
	      );
	    }
	  }]);
	
	  return Frame;
	}(_react.Component);
	
	var CodeEditor = function (_Component3) {
	  _inherits(CodeEditor, _Component3);
	
	  function CodeEditor() {
	    _classCallCheck(this, CodeEditor);
	
	    return _possibleConstructorReturn(this, (CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).apply(this, arguments));
	  }
	
	  _createClass(CodeEditor, [{
	    key: 'reload',
	    value: function reload() {
	      this.doc.setValue(this.props.initialContent);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.doc = CodeMirror(this.refs.editor, {
	        value: this.props.initialContent,
	        mode: "jsx",
	        cursorHeight: 1
	      });
	
	      this.I = setInterval(this.saveCtx.bind(this), 1000);
	    }
	  }, {
	    key: 'compomentWillUnmount',
	    value: function compomentWillUnmount() {
	      clearInterval(this.I);
	    }
	  }, {
	    key: 'saveCtx',
	    value: function saveCtx() {
	
	      var value = this.doc.getValue();
	      var course = this.props.course;
	      store.dispatch((0, _code.save)(course.course, course.topic, course.id, value, this.props.widget));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var p = function p(show_code, show_html) {
	        if (show_code && show_html) {
	          return "70%";
	        } else if (show_code) {
	          return "100%";
	        }
	      };
	      return _react2.default.createElement('div', { ref: 'editor', style: { height: this.props.style.h + "px", display: this.props.show_code ? "block" : "none", width: p(this.props.show_code, this.props.show_html) }, className: 'editor' });
	    }
	  }]);

	  return CodeEditor;
	}(_react.Component);

/***/ },
/* 19 */
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
	
	var ACTION_SAVE = exports.ACTION_SAVE = "save@Fiddle";
	var ACTION_COMPILE = exports.ACTION_COMPILE = "compile@Fiddle";
	
	var save = exports.save = function save(course, topic, id, content, widget) {
	  return {
	    type: ACTION_SAVE,
	    course: course,
	    topic: topic,
	    id: id,
	    content: content,
	    widget: widget
	  };
	};
	
	var compile = exports.compile = function compile(course, topic, id, widget) {
	  return {
	    type: ACTION_COMPILE,
	    course: course,
	    topic: topic,
	    id: id,
	    widget: widget
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AudioRecorder = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SoundMeter = __webpack_require__(21);
	
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var AudioRecorder = exports.AudioRecorder = function (_Component) {
	  _inherits(AudioRecorder, _Component);
	
	  function AudioRecorder() {
	    _classCallCheck(this, AudioRecorder);
	
	    var _this = _possibleConstructorReturn(this, (AudioRecorder.__proto__ || Object.getPrototypeOf(AudioRecorder)).call(this));
	
	    _this.state = {
	      soundValue: 0
	    };
	
	    _this.handleSuccess = _this.handleSuccess.bind(_this);
	    return _this;
	  }
	
	  _createClass(AudioRecorder, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "start",
	    value: function start() {
	      console.log("start @AudioRecorder");
	      this.audioContext = new AudioContext();
	      var constraints = {
	        audio: true,
	        video: false
	      };
	
	      navigator.mediaDevices.getUserMedia(constraints).then(this.handleSuccess).catch(this.handleError);
	    }
	  }, {
	    key: "handleSuccess",
	    value: function handleSuccess(stream) {
	      // window.stream = stream;
	      var soundMeter = new _SoundMeter.SoundMeter(this.audioContext);
	
	      var _s = this;
	
	      soundMeter.connectToSource(stream, function (e) {
	        if (e) {
	          alert(e);
	          return;
	        }
	        setInterval(function () {
	          console.log(soundMeter.instant.toFixed(2));
	          _s.setState({
	            soundValue: soundMeter.instant.toFixed(2)
	          });
	        }, 200);
	      });
	    }
	  }, {
	    key: "handleError",
	    value: function handleError(error) {
	      console.error(error);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	
	      return _react2.default.createElement(
	        "div",
	        { style: { width: '100%', paddingTop: '20px' } },
	        _react2.default.createElement(
	          "div",
	          { onClick: this.start.bind(this), style: { height: "40px", width: '100%' } },
	          _react2.default.createElement(
	            "i",
	            { className: "material-icons" },
	            "keyboard_voice"
	          )
	        ),
	        _react2.default.createElement("meter", { style: { width: '100%' }, high: "0.25", min: "0", max: "0.3", value: this.state.soundValue })
	      );
	    }
	  }]);

	  return AudioRecorder;
	}(_react.Component);

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var SoundMeter = exports.SoundMeter = function () {
	  function SoundMeter(context) {
	    _classCallCheck(this, SoundMeter);
	
	    this.context = context;
	    this.instant = 0.0;
	    this.slow = 0.0;
	    this.clip = 0.0;
	    this.script = context.createScriptProcessor(2048, 1, 1);
	    var that = this;
	    this.script.onaudioprocess = function (event) {
	      var input = event.inputBuffer.getChannelData(0);
	      var i;
	      var sum = 0.0;
	      var clipcount = 0;
	      for (i = 0; i < input.length; ++i) {
	        sum += input[i] * input[i];
	        if (Math.abs(input[i]) > 0.99) {
	          clipcount += 1;
	        }
	      }
	      that.instant = Math.sqrt(sum / input.length);
	      that.slow = 0.95 * that.slow + 0.05 * that.instant;
	      that.clip = clipcount / input.length;
	    };
	  }
	
	  _createClass(SoundMeter, [{
	    key: 'connectToSource',
	    value: function connectToSource(stream, callback) {
	      console.log('SoundMeter connecting');
	      try {
	        this.mic = this.context.createMediaStreamSource(stream);
	        this.mic.connect(this.script);
	        // necessary to make sample run, but should not be.
	        this.script.connect(this.context.destination);
	        if (typeof callback !== 'undefined') {
	          callback(null);
	        }
	      } catch (e) {
	        console.error(e);
	        if (typeof callback !== 'undefined') {
	          callback(e);
	        }
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.mic.disconnect();
	      this.script.disconnect();
	    }
	  }]);

	  return SoundMeter;
	}();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorPicker = undefined;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 颜色选择器
	 * @param pick
	 * @param colors
	 * @param color
	 * @returns {XML}
	 * @constructor
	 */
	var ColorPicker = exports.ColorPicker = function ColorPicker(_ref) {
	  var pick = _ref.pick,
	      colors = _ref.colors,
	      color = _ref.color;
	
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
	}; /***********************************************
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = undefined;
	
	var _redux = __webpack_require__(24);
	
	var _reduxPersist = __webpack_require__(25);
	
	var _course = __webpack_require__(40);
	
	var _socket_recorder = __webpack_require__(41);
	
	var _browser_hash = __webpack_require__(42);
	
	var _reduxThunk = __webpack_require__(43);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 创建Redux-Store
	 * @returns {*}
	 */
	
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
	
	var init = exports.init = function init() {
	  // 合并Reducer
	  var reducers = {
	    course: _course.course
	  };
	
	  var reducer = (0, _redux.combineReducers)(reducers);
	  // 创建Store
	  // 这里是将所有的redux enhancer组合起来
	  var store = (0, _redux.applyMiddleware)(_reduxThunk2.default, _socket_recorder.socket_recorder, _browser_hash.browser_hash)(_redux.createStore)(reducer);
	
	  window.store = store;
	  return store;
	};
	
	/** 引入 middleware **/

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(187);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.storages = exports.purgeStoredState = exports.persistStore = exports.getStoredState = exports.createTransform = exports.createPersistor = exports.autoRehydrate = undefined;
	
	var _asyncLocalStorage = __webpack_require__(26);
	
	var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);
	
	var _autoRehydrate = __webpack_require__(30);
	
	var _autoRehydrate2 = _interopRequireDefault(_autoRehydrate);
	
	var _createPersistor = __webpack_require__(34);
	
	var _createPersistor2 = _interopRequireDefault(_createPersistor);
	
	var _createTransform = __webpack_require__(37);
	
	var _createTransform2 = _interopRequireDefault(_createTransform);
	
	var _getStoredState = __webpack_require__(38);
	
	var _getStoredState2 = _interopRequireDefault(_getStoredState);
	
	var _persistStore = __webpack_require__(39);
	
	var _persistStore2 = _interopRequireDefault(_persistStore);
	
	var _purgeStoredState = __webpack_require__(35);
	
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
/* 26 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27).setImmediate, (function() { return this; }()), __webpack_require__(29)))

/***/ },
/* 27 */
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
	__webpack_require__(28);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 28 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(29)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(3);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = autoRehydrate;
	
	var _constants = __webpack_require__(31);
	
	var _isStatePlainEnough = __webpack_require__(32);
	
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
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KEY_PREFIX = exports.KEY_PREFIX = 'reduxPersist:';
	var REHYDRATE = exports.REHYDRATE = 'persist/REHYDRATE';

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isStatePlainEnough;
	
	var _isPlainObject = __webpack_require__(33);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(189);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPersistor;
	
	var _constants = __webpack_require__(31);
	
	var _asyncLocalStorage = __webpack_require__(26);
	
	var _asyncLocalStorage2 = _interopRequireDefault(_asyncLocalStorage);
	
	var _purgeStoredState = __webpack_require__(35);
	
	var _purgeStoredState2 = _interopRequireDefault(_purgeStoredState);
	
	var _jsonStringifySafe = __webpack_require__(36);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = purgeStoredState;
	
	var _constants = __webpack_require__(31);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ },
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = getStoredState;
	
	var _constants = __webpack_require__(31);
	
	var _asyncLocalStorage = __webpack_require__(26);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global, process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = persistStore;
	
	var _constants = __webpack_require__(31);
	
	var _getStoredState = __webpack_require__(38);
	
	var _getStoredState2 = _interopRequireDefault(_getStoredState);
	
	var _createPersistor = __webpack_require__(34);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27).setImmediate, (function() { return this; }()), __webpack_require__(29)))

/***/ },
/* 40 */
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
	
	var _course = __webpack_require__(10);
	
	var _urlParse = __webpack_require__(7);
	
	var _urlParse2 = _interopRequireDefault(_urlParse);
	
	var _qs = __webpack_require__(8);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var url = new _urlParse2.default(window.location.href);
	
	var query = _qs2.default.parse(url.query.replace("?", "")) || {};
	
	
	var initial = {
	  course: query.course || "demo",
	  topic: query.topic,
	  id: query.id,
	  title: null,
	  widgets: {}
	};
	
	var set_widgets = function set_widgets(state, topic, id, widgets) {
	
	  var newState = _extends({}, state);
	  if (!newState['widgets'][topic]) {
	    newState['widgets'][topic] = {};
	    if (!newState['widgets'][topic][id]) {
	      newState['widgets'][topic][id] = [];
	    }
	  }
	
	  // let id_start = widgets.length
	  // widgets = widgets.map( (widget, i) => {
	  //   if(!widget) {
	  //    
	  //   }
	  //   widget.id = i
	  //   return widget
	  // })
	
	  newState["widgets"][topic][id] = widgets;
	  return newState;
	};
	
	var add_widget = function add_widget(state, topic, id, widget) {
	
	  var newState = _extends({}, state);
	
	  if (!newState['widgets'][topic]) {
	    newState['widgets'][topic] = {};
	    if (!newState['widgets'][topic][id]) {
	      newState['widgets'][topic][id] = [];
	    }
	  }
	  if (!widget.id) {
	    widget.id = newState['widgets'][topic][id].length === 0 ? 1 : newState['widgets'][topic][id][newState['widgets'][topic][id].length - 1].id + 1;
	  }
	  newState['widgets'][topic][id].push(widget);
	  // console.log("@add_widget new State")
	  // console.log(newState)
	  return newState;
	};
	
	var change_widget = function change_widget(state, topic, id, _ref, x, y, w, h, zIndex) {
	  var widget_id = _ref.id;
	
	
	  var newState = _extends({}, state);
	
	  var widgets = newState['widgets'][topic][id];
	
	  var widget = widgets.find(function (x) {
	    return x.id === widget_id;
	  });
	  widget.x = x;
	  widget.y = y;
	  widget.w = w;
	  widget.h = h;
	  widget.zIndex = zIndex;
	
	  // console.log("@add_widget new State")
	  // console.log(newState)
	  return newState;
	};
	var delete_widget = function delete_widget(state, topic, id, widget) {
	  var newState = _extends({}, state);
	  var widgets = newState['widgets'][topic][id];
	  widgets = widgets.filter(function (x) {
	    return x.id !== widget.id;
	  });
	  newState['widgets'][topic][id] = widgets;
	  return newState;
	};
	
	var course = exports.course = function course() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _course.ACTION_SET_COURSE:
	      return _extends({}, state, { course: action.course });
	    case _course.ACTION_SWITCH_TO:
	      return _extends({}, state, { topic: action.topic, id: action.id, title: action.title ? action.title : state.title });
	    case "ADD_WIDGET":
	      return add_widget(state, action.topic, action.id, action.widget);
	    case "SET_WIDGETS":
	
	      return set_widgets(state, action.topic, action.id, action.widgets);
	    case "CHANGE_WIDGET":
	      return change_widget(state, action.topic, action.id, action.widget, action.x, action.y, action.w, action.h, action.zIndex);
	
	    case "DELETE_WIDGET":
	
	      return delete_widget(state, action.topic, action.id, action.widget);
	  }
	  return state;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.socket_recorder = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /***********************************************
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
	
	exports.init_socket = init_socket;
	
	var _draw = __webpack_require__(12);
	
	var _code = __webpack_require__(19);
	
	var socket = null;
	function init_socket() {
	  window.socket = socket = io("ws://localhost:3006");
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
	        case _code.ACTION_SAVE:
	          socket.emit("save", action);
	
	          break;
	
	        case _code.ACTION_COMPILE:
	          socket.emit("compile", action);
	          break;
	        case "SAVE_WIDGET":
	          var topic = action.topic,
	              id = action.id;
	
	          socket.emit("save-widget", _extends({}, action, { widgets: store.getState().course.widgets[topic][id] }));
	          break;
	        case "ADD_IMAGE":
	          socket.emit("add-image", action);
	          break;
	        case "SAVE_MARKDOWN":
	          socket.emit("save-markdown", action);
	          break;
	        case "DELETE_WIDGET":
	          socket.emit("delete-widget", action);
	          break;
	
	      }
	
	      return next(action);
	    };
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.browser_hash = undefined;
	
	var _course = __webpack_require__(10);
	
	var browser_hash = exports.browser_hash = function browser_hash(store) {
	  return function (next) {
	    return function (action) {
	
	      switch (action.type) {
	        case _course.ACTION_SWITCH_TO:
	          window.history.pushState(null, "Blackboard", "/?course=" + store.getState().course.course + "&topic=" + action.topic + "&id=" + action.id);
	      }
	
	      return next(action);
	    };
	  };
	}; /***********************************************
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(225);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(48)(content, {});
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(46)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n#app {\n  cursor: url(" + __webpack_require__(47) + "), auto;\n}\n.menu {\n  position: absolute;\n  z-index: 1000;\n  background-color: #fff;\n  top: 0;\n  left: -290px;\n  width: 300px;\n  border-right: 10px solid #eee;\n  padding-right: 20px;\n  transition: left 0.3s ease;\n}\n.menu:hover {\n  border-right: 1px solid #eee;\n  left: 0;\n}\n.menu-item {\n  color: #333;\n  font-family: 'Microsoft YaHei';\n}\n.menu-item:hover {\n  font-weight: bold;\n}\n.canvas {\n  position: relative;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Chrome/Safari/Opera */\n  -khtml-user-select: none; /* Konqueror */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  not supported by any browser */\n}\n.color {\n  position: fixed;\n  right: 5px;\n  bottom: 0;\n  z-index: 999;\n}\n.color div {\n  float: left;\n  width: 50px;\n  height: 50px;\n  border: 2px solid #eee;\n}\n.cleaner {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  font-size: 20px;\n  color: #666;\n  border: 1px solid #eee;\n  z-index: 999;\n}\n.cleaner:hover {\n  color: #333;\n}\n.eraser {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #000;\n}\n.pages {\n  position: absolute;\n  top: 20px;\n  left: 50px;\n  z-index: 999;\n}\n.pages .page {\n  margin-left: 5px;\n  color: #000;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #efefef;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  float: left;\n}\n.title {\n  position: absolute;\n  left: calc(50% - 250px);\n  font-size: 28px;\n  opacity: 0.5;\n  top: 20px;\n  width: 500px;\n  text-align: center;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #a4ee97;\n}\n.fiddle .frame {\n  width: 30%;\n  float: left;\n  height: 100%;\n}\n.fiddle .frame iframe {\n  width: 100%;\n}\n.fiddle .editor {\n  border-right: 1px solid #eee;\n  font-size: 20px;\n  width: 70%;\n  float: left;\n  height: 100%;\n  overflow: hidden;\n}\n.fiddle .options {\n  border-left: 1px solid #eee;\n  border-right: 1px solid #eee;\n  display: block;\n  z-index: 12;\n  background-color: #f2f3f4;\n  overflow: hidden;\n  height: 30px;\n}\n.fiddle .options .option {\n  float: left;\n  margin-right: 10px;\n  padding: 3px 10px;\n  line-height: 30px;\n}\n.fiddle .options .option:hover {\n  color: #0f0;\n}\n.dropbox {\n  position: absolute;\n  box-sizing: border-box;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  background-color: #fff;\n  resize: true;\n  border: 1px solid #f2f3f4;\n}\n.dropbox:hover {\n  border: 1px solid #eee;\n}\n.dropbox:hover .delete {\n  display: block;\n}\n.dropbox .delete {\n  color: #b5d592;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: none;\n  z-index: 999;\n}\n.markdown {\n  width: 100%;\n  min-width: 300px;\n  position: relative;\n}\n.markdown:hover .btn {\n  display: block;\n}\n.markdown .btn {\n  position: absolute;\n  display: none;\n  width: 20px;\n  height: 20px;\n  bottom: 10px;\n  right: 10px;\n  color: #b5d592;\n  text-align: center;\n  line-height: 20px;\n}\n.markdown .markdown-editor {\n  width: 50%;\n  float: left;\n}\n.markdown .markdown-editor textarea {\n  width: 100%;\n  border: none;\n  outline: none;\n  height: 100%;\n}\n.markdown .preview {\n  width: 50%;\n  float: left;\n  word-wrap: break-word;\n}\n.markdown .preview p {\n  font-size: 1rem;\n  color: #666;\n  margin-bottom: 10px;\n}\n.markdown .preview h1,\n.markdown .preview h2,\n.markdown .preview h3,\n.markdown .preview h4 {\n  margin-bottom: 10px;\n  font-family: \"Microsoft YaHei\";\n  color: #333;\n}\n.markdown .preview h1 {\n  font-size: 1.8rem;\n}\n.markdown .preview h2 {\n  font-szie: 1.6rem;\n}\n.markdown .preview h3 {\n  font-size: 1.4rem;\n}\n.markdown .preview h4 {\n  font-size: 1.1rem;\n}\n.markdown .preview ul,\n.markdown .preview ol {\n  padding-left: 3rem;\n}\n.markdown .preview pre {\n  margin: 10px;\n  padding: 10px;\n  background-color: #f2f3f4;\n}\n.tools {\n  position: fixed;\n  bottom: 0;\n  z-index: 999;\n}\n.tools .tools-btn {\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  color: #b5d592;\n  float: left;\n}\n.tools .tools-btn:hover i {\n  color: #0f0;\n}\n.tools .tools-btn i {\n  font-size: 48px;\n}\n.clearfix:after {\n  clear: both;\n}\n.drag-area {\n  height: 4px;\n  background-color: #eee;\n}\n.CodeMirror {\n  height: 100%;\n}\n", ""]);
	
	// exports


/***/ },
/* 46 */
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
/* 47 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+d3d3Lmlua3NjYXBlLm9yZzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGMtVWAAAA81JREFUWAnFV+1LU2EUP8+928xMRQudhVImGb1stkrcNC18WQUVBftS0Ieg700M+ti3PtiLf0EQEVhBCb3pLFs1X9DUJULUnI1cOTVKc5l7u7fzLDfurne5uWkHhHN+53l+57dznzdh4Hau5d3tjcfhP5mMMGwjD3yL01zmTM/IGuQBbMDzNgBi43jZSNbeR2OEAMIrY4TSOjvKnN++ft6Uk78F1qZnRFRCcV1ZmtbyCDCJAUO50jKzrTn5m2Fy7JMENXkgASYNCgpggB9Zm54Jm3eoFxMTOLgYTB4SFAAE7NEoX5lmM401JSei5RPF/woAGJEietPhtrx+7i7HRXi3vnZPtdSYRLGFDrCLBFheujtfts3qsAAdkwK4U+prNGWJFhTPDwrICIw7MNGPn+IibjiT5ZXb0tE6q0Us1CF0YR0Q7mlDtUZFg2RZcBuKyeprSwyI3cE/uTiH8QQLcKCx3YpnReImKYDSGqs1hwnD0S2YKlHmMxB/xXXT8JhELi4oqgDKYtSrDhCOeYxu5OmEAOHhAwqsvGoamqRjl2v/FEBJL+hVGoZj2tDdIC6Ck60BHxxqMlunxblYY+Eik5zT1DY0wPFMJSa/iAfgBVHCyOFJQ50qTZyLNV5SACVqej7wnmOhIsqBpUOBDy8bdipiLSocF5OAoIhWq4P1yivQHxYSLPi1P6flzQaDATdIfBazAErbaO5z8YyvCt1eiTIn82dsNxFfcl0J58atuMc+9XtPwfpmGcNqsdQWIRn6au3WvPXdo65nIjxqGLcAytTnmPLqC7bf9bIeen0Wi9hLtUVKebfd1SHCJcNlCaBMZofDjyLue5j5rdgJ8fFcqS1U/sJOdElWFYDLFrAggtOfdbV4nMocjPcLeOlKqNMVKcexE/0RuCiIa8GI5kaExjr1FcKTSxEgAMcTcuaGabBZhIfDhDoQZkGnxz7xQleY58FfXiPA8SkBJ7RFuYPd9omPAjzsJk0AZcRvbtEW5k2iiCMYhrpLa5wqL8zr7Bp1OdCPsNCgCDDRAJ9wp/Gn30IeWZiLh1m8wKqvvbD2hTF0VkQALWCsUx3DNXEPS6wRFPzOEK4Kb9DwaRrXSSggWtK9YRp6hO+pozjQLRicjfeGqb5CvS2ErVgHQgWMenUp4Qg9GbMpNu/1wY+ZOV+qQqG72fvh7YoLoEXxut7FAWmf9/iVUz/c+J8fDzKW9aYrUnavigAqgrZ93P1z2BcIhN+ZKQr511UTQEWcKy3eN+f1dvoDgeDbgSH4cWhiNe186fZtcwGv2e8P5GIH2v8AD34lPgX/LxAAAAAASUVORK5CYII="

/***/ },
/* 48 */
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


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.paste_handler_factory = undefined;
	
	var _data_helper = __webpack_require__(17);
	
	var _Dropbox = __webpack_require__(15);
	
	var _dimensions = __webpack_require__(13);
	
	var _md = __webpack_require__(50);
	
	var _md2 = _interopRequireDefault(_md);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /***********************************************
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
	
	/**
	 * 处理Paste图片
	 * @param event
	 * @param blackboard
	 */
	var paste_handler_factory = exports.paste_handler_factory = function paste_handler_factory(blackboard) {
	
	  return function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(event) {
	      var item;
	      return regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              if (!event.clipboardData) {
	                _context2.next = 4;
	                break;
	              }
	
	              if (!(event.clipboardData.items.length > 0)) {
	                _context2.next = 4;
	                break;
	              }
	
	              item = event.clipboardData.items[0];
	              return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
	                var _blackboard$props$cou, course, topic, id, data, img, maxObj, _getDimensions, width, height;
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                  while (1) {
	                    switch (_context.prev = _context.next) {
	                      case 0:
	                        _context.t0 = item.type;
	                        _context.next = _context.t0 === "image/png" ? 3 : 14;
	                        break;
	
	                      case 3:
	                        _blackboard$props$cou = blackboard.props.course, course = _blackboard$props$cou.course, topic = _blackboard$props$cou.topic, id = _blackboard$props$cou.id;
	                        _context.next = 6;
	                        return (0, _data_helper.dataTransferItemToBase64)(item);
	
	                      case 6:
	                        data = _context.sent;
	                        img = new Image();
	
	                        img.src = data;
	
	                        maxObj = _Dropbox.Dropbox.__maxZIndexObj(topic, id);
	                        _getDimensions = (0, _dimensions.getDimensions)(), width = _getDimensions.width, height = _getDimensions.height;
	
	                        img.onload = function (event) {
	                          var imgHeight = img.height;
	                          var imgWidth = img.width;
	                          /**
	                           * 增加图片
	                           */
	                          store.dispatch({
	                            type: "ADD_IMAGE",
	                            course: course,
	                            topic: topic,
	                            id: id,
	                            data: data
	                          });
	
	                          // 计算最终的长宽
	                          var w = imgWidth > width - 160 ? width - 160 : imgWidth;
	
	                          var r = w / imgWidth;
	
	                          var h = r * imgHeight;
	
	                          store.dispatch({
	                            type: "ADD_WIDGET",
	                            widget: {
	                              type: "image",
	                              x: 80, y: 80,
	                              w: w, h: h,
	                              zIndex: maxObj ? maxObj.state.style.zIndex + 1 : 10,
	                              img: "/courses/" + course + "/" + topic + "/" + id + "_" + (0, _md2.default)(data) + ".png"
	                            },
	                            topic: topic,
	                            id: id
	                          });
	                          return true;
	                        };
	
	                        event.preventDefault();
	                        event.stopPropagation();
	
	                      case 14:
	                      case "end":
	                        return _context.stop();
	                    }
	                  }
	                }, _callee, undefined);
	              })(), "t0", 4);
	
	            case 4:
	            case "end":
	              return _context2.stop();
	          }
	        }
	      }, _callee2, undefined);
	    }));
	
	    return function (_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(51),
	      utf8 = __webpack_require__(52).utf8,
	      isBuffer = __webpack_require__(53),
	      bin = __webpack_require__(52).bin,
	
	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already
	
	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;
	
	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }
	
	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;
	
	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;
	
	    for (var i = 0; i < m.length; i += 16) {
	
	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;
	
	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);
	
	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);
	
	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);
	
	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);
	
	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }
	
	    return crypt.endian([a, b, c, d]);
	  };
	
	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	
	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;
	
	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);
	
	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };
	
	})();


/***/ },
/* 51 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	
	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },
	
	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },
	
	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }
	
	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },
	
	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },
	
	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },
	
	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },
	
	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },
	
	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },
	
	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },
	
	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
	
	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };
	
	  module.exports = crypt;
	})();


/***/ },
/* 52 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },
	
	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },
	
	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },
	
	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};
	
	module.exports = charenc;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map