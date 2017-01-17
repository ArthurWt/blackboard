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

import {Fiddle} from "./Fiddle"
import {Markdown} from "./Markdown"
import {connect} from 'react-redux'
import {getDimensions} from "util/dimensions"

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
      const join = others.filter(k => k.length > 0).join(" ")
      return [f, join]
    })

  lines = lines.map(([n, title]) => {
    let type = "blackboard"
    if(title.match(/\[code\]/)) {
      title = title.replace("[code]", "")
      type = 'code'
    }
    else if(title.match(/\[markdown\]/)) {
      title = title.replace("[markdown]", "")
      type = 'blackboard&markdown'
    }
    return {
      level : n.replace(".", "").length,
      topic : n,
      title,
      type
    }
  })


  return lines

}




export class Main extends React.Component{
  constructor(){
    super()
    const url = new URL(window.location.href)
    // this.query = qs.parse(url.query.replace("?", "")) || {}
    // if(!this.query.course){
    //   this.query.course = 'demo'
    // }
    this.state = {
      content : null,
      store : init()
    }
    init_socket()

  }
  componentWillMount(){
    const {course, topic, id} = store.getState().course
    const promise = loading_content(course)
    promise.then(data => {
      store.dispatch(set_course(course))

      const content = format_menu(data)

      // find topic 
      
      if(!(topic && id)){
        store.dispatch(switch_to(content[0].topic, 1 , content[0].title))
      } else {

        const menuItem = content.find(x => x.topic == topic)
        store.dispatch(switch_to(topic, id , menuItem.title))
      }
      
      this.setState({content})
    })
  }



  render(){
    const {content, store} = this.state
    if(!content) {
      return null
    }

    const course = store.getState().course
    return <Provider store={store}>
        <div>
          <Menu content={content} course={course.course} />

          <App content={content}/>
        </div>
    </Provider>
  }
}


class _App extends Component{

  renderPanel(course){
    const item = this.props.content.find(x => x.topic === course.topic)
    return <Blackboard />
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
  
  _add_code(){
    
    const {course, topic, id} = this.props.course

    store.dispatch({
      type : "ADD_WIDGET",
      widget : {type : "code", x : 80, y : 80, w : getDimensions().width - 160, h : getDimensions().height - 160},
      topic,
      id,
    })
  }
  
  _add_md(){
     
    const {course, topic, id} = this.props.course

    store.dispatch({
      type : "ADD_WIDGET",
      widget : {type : "markdown", x : 80, y : 80, w : (getDimensions().width - 160) * 0.6 , h : (getDimensions().height - 160) * 0.6},
      topic,
      id,
    })
  }
  
  _add_audio(){


    const {course, topic, id} = this.props.course

    store.dispatch({
      type : "ADD_WIDGET",
      widget : {type : "audio", x : 80, y : 80, w : 150 , h : 40},
      topic,
      id,
    })
  }
  render(){
    return <div>
      {this.renderPanel(this.props.course)}
      <div className="tools">
        
        <div className="tools-btn" onClick={this._add_code.bind(this)}>
          <i className="material-icons">code</i>
        </div>
        <div className="tools-btn" onClick={this._add_md.bind(this)} >
          <i className="material-icons">subject</i>
        </div>
        <div className="tools-btn" onClick={this._add_audio.bind(this)} >
          <i className="material-icons">mic</i>
        </div>
        
      </div>
    </div>
  }
}

const map = state => {
  return {
    course : state.course
  }

}
let App =  connect(map)(_App)




ReactDOM.render(

  <Main />,
  document.getElementById("app")
)
