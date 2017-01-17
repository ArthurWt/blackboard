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


import {
  compose,
  applyMiddleware,
  createStore,
  combineReducers
} from 'redux'

import {persistStore, autoRehydrate} from 'redux-persist'

/** 引入 Reducer **/
import {course} from "redux/reducers/course"

/** 引入 middleware **/

import {socket_recorder} from 'redux/middlewares/socket_recorder'
import {browser_hash} from "redux/middlewares/browser_hash"
import thunk from 'redux-thunk'

/**
 * 创建Redux-Store
 * @returns {*}
 */

export const init = () => {
  // 合并Reducer
  const reducers = {
    course 
  }

  const reducer = combineReducers(reducers);
  // 创建Store
  // 这里是将所有的redux enhancer组合起来
  const store = applyMiddleware(thunk, socket_recorder, browser_hash)(createStore)(reducer)
  
  window.store = store
  return store
  

}