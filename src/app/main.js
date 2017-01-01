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

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import URL from 'url-parse'
import qs from 'qs'
import {Menu} from "./menu"
import {Blackboard} from "./Blackboard"

import {init} from "redux/store/init"
import {init_socket} from 'redux/middlewares/socket_recorder'

import "./stylus/main.styl"

import {set_course, switch_to} from "./redux/actions/course"

function loading_content(name) {
  function loading() {
    const url = `/courses/${name}.content`

    return new Promise((resolve, reject) => {
      $.get(url, data => {
        resolve(data)
      })
    })

  }
  return loading(name)

}


function format_menu(data){

  let lines = data.split("\n").map(l => l.trim())
  lines = lines.filter(l => l.length > 1)

  lines = lines.map(l => l.split(/[\t ]/).map(x=>x.trim()))
    .map(([f, ...others]) => {
      return [f, others.filter(k => k.length > 0).join(" ")]
    })
  console.log(lines)
  lines = lines.map(([n, title]) => {
    return {
      level : n.replace(".", "").length,
      topic : n,
      title
    }
  })
  
  
  return lines

}


export class Main extends React.Component{
  constructor(){
    super()
    const url = new URL(window.location.href)
    this.query = qs.parse(url.query.replace("?", "")) 
    this.state = {
      content : null,
      store : init()
    }
    init_socket()
    
  }
  componentWillMount(){
    const promise = loading_content(this.query.course)
    promise.then(data => {
      store.dispatch(set_course(this.query.course))
      
      const content = format_menu(data)
      
      store.dispatch(switch_to(content[0].topic, 1, content[0].title))
      this.setState({content})
    })
  }
  
  render(){
    const {content, store} = this.state
    
    if(!content) {
      return null
    }
    return <Provider store={store}>
      <div>
        <Menu content={content} course={this.query.course} />
        <Blackboard />
      </div>
    </Provider>
  }
}




ReactDOM.render(
  <Main />,
  document.getElementById("app")
)
