/***********************************************
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

import {connect} from 'react-redux'


import {switch_to} from "./redux/actions/course"
import {save, compile} from "./redux/actions/code"
const getDimensions = () => {

  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
  return {
    width,
    height
  }


}

function loading_data({course, topic, id}) {
  function loading() {
    const url = `/courses/${course}/${topic}/${id}.js`

    return new Promise((resolve, reject) => {
      $.get(url, data => {
          resolve(data)
        })
        .catch(err => {
          resolve(null)
        })
    })

  }
  return loading()

}
class _Fiddle extends Component{

  constructor(){
    super()
    this.state = {
      content : null  
    }
  }
  
  componentDidMount(){
    socket.on("compile-error", function(msg){
      console.error(msg)
    }) 
    const _s = this
    socket.on("compile-succ", function(msg){
      
      if(_s.refs.frame)
        _s.refs.frame.reload()
      
      
    })
  }
  
  componentWillMount(){
    
    this.reloading(this.props.course)
  }
  
  reloading(course){
    const _s = this
    loading_data(course)
      .then(data => {
        _s.setState({
          content : data || ""
        }, () => {
          _s.refs.editor.reload()
        })  
      })
  }
  
  

  componentWillReceiveProps(nextProps){

    if(nextProps.course.course !== this.props.course.course
      ||
      nextProps.course.topic !== this.props.course.topic
      ||

      nextProps.course.id !== this.props.course.id
    )
    {
      setTimeout( (() => {
        this.reloading(nextProps.course)
      }).bind(this), 20)
    }
  }
  
  _compile(){
    const course = this.props.course
    store.dispatch(compile(course.course, course.topic, course.id)) 
  }
  
  _save(){

    this.refs.editor.saveCtx()
  }
  render(){
    if(this.state.content === null) {
      return null
    }
    return <div>

      <div className="title">{this.props.course.title}</div>

      <div className="options">
        <div className="option" onClick={this._compile.bind(this)} >RUN</div>
        <div className="option" onClick={this._save.bind(this)} >SAVE</div>
      </div>
      <CodeEditor course={this.props.course} initialContent={this.state.content} ref="editor" />
        
      <Frame  course={this.props.course} ref="frame" />
    </div>
    
  }
}

class Frame extends Component{

  reload(){
    this.refs.frame.contentWindow.location.reload()
  }

  render()
  {
    
    const course = this.props.course
    const src = "/app?file=" + course.course + "_" + course.topic + "_" + course.id
    return <div className="frame">

      <iframe frameBorder="0" src={src} ref="frame"/>

    </div>
  }
}


class CodeEditor extends Component {


  reload(){
    this.doc.setValue(this.props.initialContent)   
  }

  componentDidMount(){
    this.doc = CodeMirror(this.refs.editor, {
      value: this.props.initialContent,
      mode:  "javascript",
      cursorHeight : 1 
    });

    
    // this.I = setInterval( this._saveCtx.bind(this), 1000)
  }

  compomentWillUnmount(){
    clearInterval(this.I)
  }
  
  saveCtx(){

    const value = this.doc.getValue()
    const course = this.props.course
    store.dispatch(save(course.course, course.topic, course.id, value))
    
    console.log(value)
  }
  render(){
    return <div ref="editor" className="editor"></div>
  }
}


const map = (state) => {
  return {
    course : state.course
  }
}
export let Fiddle = connect(map)(_Fiddle)