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

import {getDimensions} from "util/dimensions"

function loading_data({course, topic, id}, widget) {
  function loading() {
    const url = `/courses/${course}/${topic}/${id}_${widget.id}.js`

    return new Promise((resolve, reject) => {
      $.get(url, data => {
          resolve(data)
        }, "text")
        .catch(err => {
          resolve(null)
        })
    })

  }
  return loading()

}
export class Fiddle extends Component{

  constructor(){
    super()
    this.state = {
      content : null,
      loading : true,
      show_code : true,
      show_html : true
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
    loading_data(course, this.props.widget)
      .then(data => {
        _s.setState({
          content : data || "",
          loading : false
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
    store.dispatch(compile(course.course, course.topic, course.id, this.props.widget)) 
  }
  
  _save(){
    if(!this.state.loading)
      this.refs.editor.saveCtx()
  }

  _toggleCode(){
    this.setState({
      show_code : !this.state.show_code
    })
    
  }

  _toggleHtml(){
    this.setState({
      show_html: !this.state.show_html
    })
  }
  

  render(){
    if(this.state.content === null || this.state.loading) {
      return null
    }
    
    return <div className="fiddle">

      <div className="options">
        <div className="option" onClick={this._compile.bind(this)} ><i className="material-icons">play_arrow</i></div>
        <div className="option" onClick={this._toggleCode.bind(this)} >code</div>
        <div className="option" onClick={this._toggleHtml.bind(this)} >html</div>
        <div style={{clear : "both"}}></div>
      </div>

      <div>
        <CodeEditor
          show_html={this.state.show_html} show_code={this.state.show_code}
          style={this.props.style}
          widget={this.props.widget} course={this.props.course}
          initialContent={this.state.content} ref="editor"/>

        <Frame show_html={this.state.show_html} show_code={this.state.show_code} widget={this.props.widget} course={this.props.course} ref="frame"/>
        <div style={{clear : "both"}}/>
      </div>
    </div>
    
  }
}


class Frame extends Component{

  reload(){
    this.refs.frame.contentWindow.location.reload()
  }

  render() {
    
    
    const p = (show_code, show_html) => {
      if(show_code && show_html) {
        return "30%"
      } else if(show_html) {
        return  "100%"
      }
      
    } 
    const course = this.props.course
    const src = "/app?file=" + course.course + "_" + course.topic + "_" + course.id + "_" + this.props.widget.id
    return <div className="frame" style={{display : this.props.show_html ? "block" : "none", width : p(this.props.show_code, this.props.show_html)}}>
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
      mode:  "jsx",
      cursorHeight : 1 
    });

    
    this.I = setInterval( this.saveCtx.bind(this), 1000)
  }

  compomentWillUnmount(){
    clearInterval(this.I)
  }
  
  saveCtx(){

    const value = this.doc.getValue()
    const course = this.props.course
    store.dispatch(save(course.course, course.topic, course.id, value, this.props.widget))
    
  }
  render(){
     
    const p = (show_code, show_html) => {
      if(show_code && show_html) {
        return "70%"
      } else if(show_code) {
        return  "100%"
      }
      
    } 
    return <div ref="editor" style={{height : this.props.style.h + "px", display : this.props.show_code ? "block" : "none", width : p(this.props.show_code, this.props.show_html)}} className="editor"></div>
  }
}

