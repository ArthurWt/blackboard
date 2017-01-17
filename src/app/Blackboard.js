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


import {getDimensions} from 'util/dimensions'

import {loading_data} from 'data/apis'

import {Dropbox} from "Dropbox"
import {Markdown} from "Markdown"

import {Fiddle} from "Fiddle"

import {AudioRecorder} from "AudioRecorder"

class _Blackboard extends Component{

  constructor(props){
    super()

    console.log(props)

    this.lastX = null
    this.lastY = null

    this.state = {
      colors : [
        "white",
        "#333",
        "red",
        "yellow",
        "green",
        "blue"
      ],
      color : "#333",
      penSize : 5,
      x : null,
      y : null,
      loading : true
    }

    this._keydown = this._keydown.bind(this)


    document.addEventListener("keydown",this._keydown)

  }


  _redraw(){
    let lines = this.redraw_data
    if(lines) {
      lines = lines.split("\n").filter(line => line.length > 1).map(JSON.parse)
      lines.map(({x, y, color, penSize}) => {
        if(!x) {
          this.lastX = null
          this.lastY =  null
        }else {
          this._draw(this.ctx, color, x * 2, y * 2, penSize)
        }
      })

    }
    this.lastX = null
    this.lastY =  null

  }
  _loaded(){

    this.lastX = null
    this.lastY = null
    this.refs.canvas.width = getDimensions().width * 2
    this.refs.canvas.height = getDimensions().height * 2
    this.ctx = this.refs.canvas.getContext("2d")
    this._clear(false)
    this._redraw()

  }

  componentWillUnmount(){


    clearInterval(this.I)
    document.removeEventListener("keydown",this._keydown)
  }

  _keydown() {
    if(this.state.loading) {return}
    const idx = this.state.colors.indexOf(this.state.color)

    let ndx = null
    if(event.key === 'ArrowLeft') {
      ndx = idx - 1
      if(ndx < 0 ) {
        ndx = this.state.colors.length - 1
      }


      this._pick(this.state.colors[ndx])
    } else if (event.key === "ArrowRight") {
      ndx = idx + 1
      if(ndx > this.state.colors.length - 1 ) {
        ndx = 0
      }

      this._pick(this.state.colors[ndx])
      // this.setState({color : this.state.colors[ndx]})
    } else {

      this._pick(this.state.colors[idx])
    }
  }



  componentDidMount(){

    this.I = setInterval(this.saveWidgets.bind(this), 1000)
    this._reloading()
  }

  saveWidgets(){
    const topic = this.props.course.topic
    const id = this.props.course.id
    if(this.state.loading) {
      return
    }
    if(this.props.course.widgets[topic]) {

      store.dispatch({
        type: "SAVE_WIDGET",
        course: this.props.course.course,
        topic: this.props.course.topic,
        id: this.props.course.id
        // widgets: this.props.course.widgets[topic][id]
      })
    }
    
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
      .then( (({draw, widgets}) => {
          setTimeout( () => {
            widgets.map(widget => {
              store.dispatch({
                type : "ADD_WIDGET",
                widget,
                topic : this.props.course.topic,
                id : this.props.course.id
              })
            })
          }, 0)



          this.redraw_data = draw
          this.setState({
            loading : false,
          }, this._loaded.bind(this))


        }).bind(this)
      )
  }
  _mouseDown(){

    this.draw = true
  }

  _draw(ctx,color, x, y, penSize) {

    if(this.lastX && this.lastY) {

      ctx.beginPath()
      ctx.strokeStyle=color
      ctx.lineWidth = penSize
      ctx.moveTo(this.lastX, this.lastY)
      ctx.lineTo(x, y)
      ctx.stroke()
    }

    this.lastX = x
    this.lastY = y


  }

  _mouseMove(event){

    const x = event.clientX
    const y = event.clientY


    if(this.draw) {
      const course = this.props.course
      store.dispatch(draw(course.course, course.topic, course.id, x, y, this.state.color, this.state.penSize))
      this._draw(this.ctx, this.state.color, x * 2, y * 2, this.state.penSize)
    }
    this.setState({
      x,
      y
    })


  }

  _mouseUp(){
    this.draw = false
    this.lastX = null
    this.lastY =  null
    store.dispatch(draw_segment(
      this.props.course.course,
      this.props.course.topic,
      this.props.course.id
    ))

  }

  _pick(color){
    if(color === 'white') {

      this.setState({
        color,
        penSize : 100
      })

    }
    else {
      this.setState({
        color,
        penSize : 5
      })
    }

  }

  _clear(tell_back_end = true){
    if(tell_back_end) {

      store.dispatch(clear(this.props.course.course, this.props.course.topic, this.props.course.id))
    }
    this.ctx.clearRect(0, 0, getDimensions().width * 2, getDimensions().height * 2)
  }
  
  

  _switch(id) {
    this._clear(false)
    store.dispatch(switch_to(this.props.course.topic, id))

  }

  _renderWidgets(){


    const topic = this.props.course.topic
    const id = this.props.course.id
    if(!this.props.course.widgets[topic]){
      return null
    }
    
    const widgets = this.props.course.widgets[topic][id]
    if(!widgets){
      return null
      
    }
    
    return widgets.map(widget => {
      
      switch(widget.type) {
        case "markdown":
          return <Dropbox key={widget.id} course={this.props.course} widget={widget}>
            <Markdown course={this.props.course} widget={widget} />
          </Dropbox>
        case "code":
          return <Dropbox key={widget.id} course={this.props.course} widget={widget}>
            <Fiddle course={this.props.course} widget={widget} />
          </Dropbox>
        case "audio" :
          return  <Dropbox key={widget.id} course={this.props.course} widget={widget}>
            <AudioRecorder course={this.props.course} widget={widget} />
          </Dropbox>

        
      }  
    })
    console.log("@Blckboard _renderWidgets()")
    console.log(widgets)

  }


  render(){
    const { colors, color, x, y, loading } = this.state
    // console.log("@Blackboard render")

    if(loading) { return null}
    const {course} = this.props

    return <div
      onMouseMove={this._mouseMove.bind(this)}
      onMouseUp={this._mouseUp.bind(this)}
      onMouseDown={this._mouseDown.bind(this)}
    >

      {this._renderWidgets()}

      <div className="title">{course.title}</div>
      <div id="pages" className="pages">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => {
            return <div key={x} onClick={() => this._switch(x)} style={{backgroundColor : x ==course.id ? "#31d22e" : "#f2f3f4"}} className="page">{x}</div>
          })
        }

      </div>
      <div className="cleaner" onClick={this._clear.bind(this)}>清空</div>

      {color === 'white' &&
      <div className="eraser" style={{top : (y - 25) + "px", left : (x - 25) + "px"}}></div>
      }

      <ColorPicker pick={this._pick.bind(this)} colors={colors} color={color} />

      <canvas className='canvas'
              ref="canvas"

      />

    </div>
  }
}



const ColorPicker = ({pick, colors, color}) => {
  return (
    <div className="color">
      {colors.map(c => {
        return <div key={c}
                    onClick={() => pick(c)}
                    className={c === 'white' ? 'white' : ''}
                    style={{backgroundColor : c, borderColor : color == c ? 'black' : "#eee"}} ></div>
      })}

    </div>
  )
}


const map = (state) => {
  return {
    course : state.course
  }
}
export let Blackboard = connect(map)(_Blackboard)