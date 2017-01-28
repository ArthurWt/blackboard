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
import {draw, clear, draw_segment} from "./redux/actions/draw"
import {getDimensions} from "util/dimensions"

import {dataTransferItemToBase64} from "util/data_helper"

function loading_data({course, topic, id}, widget) {
  function loading() {
    const url = `/courses/${course}/${topic}/${id}_${widget.id}.md`

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



export class Markdown extends Component{

  constructor(props){
    super()
    this.state = {
      markdown : null,
      loading : true
    }
  }

  componentDidMount(){

    loading_data(this.props.course, this.props.widget)
      .then(data => {

        this.setState({
          markdown : data,
          loading : false
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
        this._reloading()
      }).bind(this), 20)
    }
  }




  _reloading() {
    loading_data (this.props.course)
      .then( (data => {
        this.setState({
          loading : false,
          markdown : data
        })

      }).bind(this))

  }

  render(){
    if(this.state.loading){
      return null
    }
    return <Editor key="1" {...this.props} raw={this.state.markdown} />
  }
}

class Editor extends Component{
  constructor(props){
    super()
    this.state = {
      raw : props.raw || "",
      content : markdown.toHTML(props.raw || ""),
      show_editor : false 
    }

  }

  save(){

    const {course, topic, id} = this.props.course
    const {widget} = this.props
    store.dispatch({
      type : "SAVE_MARKDOWN",
      course,
      topic,
      id,
      widget,
      markdown : this.state.raw

    })

  }
  componentDidMount(){

    this.I = setInterval(this.save.bind(this), 1000)
    this.refs.textarea.value = this.state.raw
  }
  componentWillUnmount(){
    clearInterval(this.I)
  }

  _input(event){

    const html = markdown.toHTML(event.target.value)
    this.setState({
      raw : event.target.value,
      content : html
    })

  }
  
  

  _toggle(){
    this.setState({show_editor : !this.state.show_editor}, (() => {

      this.refs.textarea.value = this.state.raw
    }).bind(this))
  }
  render () {

    const display =this.state.show_editor ? "block" : "none"
    const {style} = this.props
    
    return (
      <div className="markdown clearfix" ref="markdown">

        <div
          onClick={this._toggle.bind(this)}
          className="btn" style={{color : this.state.show_editor ? "#49fff6" : "#ddd"}}><i className="material-icons">mode_edit</i></div>
        <div className="markdown-editor" style={{display, height : style.h + "px" }}>
          <textarea ref="textarea" onInput={this._input.bind(this)} ></textarea>
        </div>
        <div className="preview" style={{width : this.state.show_editor ? "50%" : "100%", height : style.h + "px"}} dangerouslySetInnerHTML={{__html : this.state.content}}/>
        <div style={{clear : 'both'}}></div>
      </div>
    )
  }
}




