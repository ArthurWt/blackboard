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

const HSIZE = 20 

export class Dropbox extends Component{

  static __lock = {}
  static __id_counter = 0 
  static __refs = {}

  static __maxZIndexObj(topic, id){
    let max = -1
    let maxObj = null
    if(!Dropbox.__refs[topic] || !Dropbox.__refs[topic][id]){
      return maxObj
    }
    for(let key in Dropbox.__refs[topic][id]) {
      if(max < Dropbox.__refs[topic][id][key].state.style.zIndex) {
        max =  Dropbox.__refs[topic][id][key].state.style.zIndex
        maxObj = Dropbox.__refs[topic][id][key]
      }
    }
    return maxObj
  }

  static __add_ref(topic, id, ref){
    if(!Dropbox.__refs[topic]) {
      // Dropbox.__id_counter[topic] = {}
      Dropbox.__refs[topic] = {}
      Dropbox.__lock[topic] = {}
    }
    if(!Dropbox.__refs[topic][id]) {
      // Dropbox.__id_counter[topic][id] = 0
      Dropbox.__refs[topic][id] = {}
      Dropbox.__lock[topic][id] = null
    }
    const box_id = ++Dropbox.__id_counter
    Dropbox.__refs[topic][id][box_id] =  ref
    return box_id
  }


  static __remove_ref(topic, id, box_id) {

    delete Dropbox.__refs[topic][id][box_id]
  }



  constructor({widget : {x, y, w, h, zIndex}, course : {topic, id}}){
    super()


    
    this.id = Dropbox.__add_ref(topic, id, this)

    this.state = {
      style : {
        x,
        y,
        w,
        h,
        zIndex : zIndex || 10,
        cursor : null
      },
      draging : false
    }

    this.mode = null
    this._drag = this._drag.bind(this)
    this._dragend = this._dragend.bind(this)
  }

  componentDidMount(){
    this.active = true
    document.body.addEventListener("mousemove", this._drag)
    document.body.addEventListener("mouseup", this._dragend)
  }

  componentWillUnmount(){
    this.active = false

    Dropbox.__remove_ref(this.props.course.topic, this.props.course.id, this.id)
    document.body.removeEventListener("mouseup", this._dragend)
    document.body.removeEventListener("mousemove", this._drag)
  }


  _dispatch_change(){
    store.dispatch({
      type: "CHANGE_WIDGET",
      topic: this.props.course.topic,
      id: this.props.course.id,
      widget: this.props.widget,
      x: this.state.style.x,
      y: this.state.style.y,
      w: this.state.style.w,
      h: this.state.style.h,
      zIndex : this.state.style.zIndex
    })
  }


  _in_boundary(){
    const cond1 = event.pageX - this.state.style.x > 0
    const cond2 = event.pageY - this.state.style.y > 0
    const cond3 = event.pageX - (this.state.style.x + this.state.style.w) < 0
    const cond4 = event.pageY - (this.state.style.y + this.state.style.h) < 0
    return cond1 && cond2 && cond3 && cond4
  }

  _in_drag_area() {
    const cond1 = event.pageX - this.state.style.x > 0
    const cond2 = event.pageY - this.state.style.y > 0
    const cond3 = event.pageX - (this.state.style.x + this.state.style.w) < 0
    const cond4 = event.pageY - (this.state.style.y + HSIZE) < 0
    return cond1 && cond2 && cond3 && cond4
  }

  /**
   * 请求释放lock
   * 比较
   * @param dropbox
   * @private
   */
  _request_release(dropbox, event){

    if(this.state.draging) {
      return false
    }
    //console.log("request " + this.id + " to release lock")
    if(!this._in_boundary(event)) {
      //console.log(this.id + " agree release lock")
      return true
    }
    else {
      //console.log("compare zIndex")
      //console.log(this.id + " zIndex:" + this.state.style.zIndex )
      //console.log(dropbox.id + " zIndex:" + dropbox.state.style.zIndex )
      if( (this.state.style.zIndex == dropbox.state.style.zIndex) && this.id < dropbox.id) {

        //console.log("brc 1")
        return true
      }
      else if(this.state.style.zIndex < dropbox.state.style.zIndex) {

        //console.log("brc 2")
        return true
      }else {

        //console.log("brc 3")
        return false
      }

    }

    return true
  }
  _require_lock(event){
    
    const {topic, id} = this.props.course

    // console.log(id + ":require lock")
    
    if(this._in_boundary(event)) {

      //console.log("in boundary")
      if(!Dropbox.__lock[topic][id]) {
        // console.log("no lock")
        Dropbox.__lock[topic][id] = this.id
        // console.log("require lock success")
      }
      else if(Dropbox.__lock[topic][id] !=  this.id) {

        //console.log("lock : " + Dropbox.__lock)
        if(Dropbox.__refs[topic][id][Dropbox.__lock[topic][id]]){
          if(Dropbox.__refs[topic][id][Dropbox.__lock[topic][id]]._request_release(this, event)) {
            Dropbox.__lock[topic][id] = this.id
            //console.log("require lock success")
          }else{

            // console.log("require lock fail")
          }

        }else {
          Dropbox.__lock[topic][id] = this.id
          // console.log("require lock success")
        }
      }else {

        // console.log("already have lock")
      }
    }
    else {
      // console.log("require lock fail")
    }
  }

  _drag(event){

    if(!this.active) {return}
    

    const {topic, id} = this.props.course
    this._require_lock(event)

    if(Dropbox.__lock[topic][id] != this.id) {
      return
    }

    //// 判断是否算作调整大小
    // //console.log(event.pageY, event.pageY, event.pageY)

    if(!this.state.draging) {

      const dw = Math.abs(event.pageX - this.state.style.x)
      const dn = Math.abs(event.pageY - this.state.style.y)
      const de = Math.abs(event.pageX - (this.state.style.x + this.state.style.w))
      const ds = Math.abs(event.pageY - (this.state.style.y + this.state.style.h))
      const th = 10


      if(dw < th && dn < th) {
        this.mode = 'nw-resize'
      }
      else if (dn < th && de < th) {
        this.mode = "ne-resize"
      } else if(de < th && ds < th) {
        this.mode = 'se-resize'
      } else if(ds < th && dw < th) {
        this.mode = "sw-resize"
      }
      else if (dw < th) {
        this.mode = 'w-resize'
      }
      else if (dn < th) {
        this.mode = 'n-resize'
      }
      else if (de < th) {
        this.mode = 'e-resize'
      }
      else if (ds < th) {
        this.mode = 's-resize'
      }
      else {

        if(this._in_drag_area(event)) {
          this.mode = 'move'
        } else {
          this.mode = ''
        }
      }

      // console.log('set mode:' + this.mode + " | " + this.id)
      //console.log('change cursor to:' + this.mode)
      document.getElementById("app").style.cursor = this.mode

      return
    }

    if(this.mode) {
      event.stopPropagation()
      event.preventDefault()  
    }
    
    console.log(this.mode)

    if (this.X && this.Y) {

      const xDiff = this.X - this.startX
      const yDiff = this.Y - this.startY
      console.log(this.Y, this.startY)
      if(this.mode === 'nw-resize') {

        this.setState({
          style : {
            ...this.state.style,
            x : this.startState.x + xDiff,
            y : this.startState.y + yDiff,
            w : Math.max(this.startState.w - xDiff, 50),
            h : Math.max(this.startState.h - yDiff, 50)
          }
        }, (() => {

          this._dispatch_change()
        }).bind(this))

      } else if(this.mode == "ne-resize") {
        this.setState({
          style : {
            ...this.state.style,
            y : this.startState.y + yDiff,
            w : Math.max(this.startState.w + xDiff, 50),
            h : Math.max(this.startState.h - yDiff, 50)
          }
        }, (() => {

          this._dispatch_change()
        }).bind(this))


      } else if (this.mode == "se-resize") {
        this.setState({
          style : {
            ...this.state.style,
            w : Math.max(this.startState.w + xDiff, 50),
            h : Math.max(this.startState.h + yDiff, 50)
          }
        }, (() => {

          this._dispatch_change()
        }).bind(this))

      } else if (this.mode == 'sw-resize') {

        this.setState({
          style : {
            ...this.state.style,
            x : this.startState.x + xDiff,
            w : Math.max(this.startState.w - xDiff, 50),
            h : Math.max(this.startState.h + yDiff, 50)
          }
        }, (() => {

          this._dispatch_change()
        }).bind(this))
      }

      else if(this.mode === 'w-resize') {
        this.setState({
          style : {
            ...this.state.style,
            x : Math.max(this.startState.x + xDiff, 50),
            w : Math.max(this.startState.w - xDiff,50)
          }

        }, (() => {

          this._dispatch_change()
        }).bind(this))
      }
      else if(this.mode === 'n-resize') {
        this.setState({
          style : {
            ...this.state.style,
            y : this.startState.y + yDiff,
            h : this.startState.h - yDiff
          }

        }, (() => {
          this._dispatch_change()
        }).bind(this))
      }
      else if(this.mode === 'e-resize') {
        this.setState({
          style : {
            ...this.state.style,
            w : Math.max(this.startState.w + xDiff, 50)
          }

        }, (() => {
          this._dispatch_change()
        }).bind(this))
      }
      else if(this.mode === 's-resize') {
        this.setState({
          style : {
            ...this.state.style,
            h : Math.max(this.startState.h + yDiff, 50)
          }

        }, (() => {
          this._dispatch_change()
        }).bind(this))
      }



      else if(this.mode === 'move') {


        this.setState({
          style: {
            ...this.state.style,
            x: this.startState.x + xDiff,
            y: this.startState.y + yDiff
          }
        }, (() => {
          this._dispatch_change()

        }).bind(this))
      }

    }
    this.X = event.pageX
    console.log('setY:' + this.Y)
    this.Y = event.pageY

  }
  _dragstart(event){

    if(!this.active) {return} 
    const {topic, id} = this.props.course
    this._require_lock(event)
    if(Dropbox.__lock[topic][id] !== this.id) {
      return
    }

    const maxObj = Dropbox.__maxZIndexObj(topic, id)
    
    this.startX = this.X = event.pageX
    this.startY = this.Y = event.pageY
    console.log('set startY:'+this.startY)
    const startDrag = (() => {
      
      
      this.startState = {...this.state.style}
      this.dragCount = 0
      this.dragI = setInterval( (() => {
        this.dragCount ++
        if(this.dragCount > 20) {
          clearInterval(this.dragI)
          this.setState({
            draging : true
          })
        }
      }).bind(this), 10)
    }).bind(this)

    // console.log("max obj id:"  + maxObj.id)
    
    // if(maxObj.id !== this.id) {
      this.setState({
        style : {...this.state.style, zIndex : maxObj.state.style.zIndex + 1}
      }, () => {
        startDrag()
      })
    // } else {
    //   startDrag()
    // }


  }
  _dragend() {
    if(!this.active) {return}
    const {topic, id} = this.props.course
    if(Dropbox.__lock[topic][id] === this.id) {
      Dropbox.__lock[topic][id] = null
    }
    this.mode = null
    clearInterval(this.dragI)
    this.setState({
      draging : false
    })
  }
  _delete(){
    if(confirm("您确定要删除吗?")){
      store.dispatch({
        type : "DELETE_WIDGET",
        course : this.props.course.course,
        topic : this.props.course.topic,
        id : this.props.course.id,
        widget : this.props.widget

      })
    }


  }

  _go(n, incre = true) {

    return (() => {

      if(incre) {
        let zIndex = this.state.style.zIndex + n
        if (zIndex < 10) {
          zIndex = 10
        }
        this.setState({style: {...this.state.style, zIndex}}, (() => {
          this._dispatch_change()
        }).bind(this))
      } else {
         this.setState({style: {...this.state.style, zIndex : 8}}, (() => {
          this._dispatch_change()
        }).bind(this))
      }

    }).bind(this)

  }


  _cursor(){

  }
  render(){
    const {style,cursor, zIndex} = this.state

    const borderColor = this.state.draging ? "black" : "#eee"

    const nStyle = {
      top : style.y + "px",
      width : style.w + "px",
      height : style.h + "px",
      left : style.x+'px', borderColor : borderColor, zIndex : style.zIndex}


    return <div
      ref="dropbox"
      className="dropbox" style={nStyle}
      onMouseDown={this._dragstart.bind(this)}
    >
      <div className="delete" >
        <i className="material-icons" onClick={this._go(8, false)}>vertical_align_bottom</i>
        <i className="material-icons" onClick={this._go(1)}>arrow_upward</i>
        <i className="material-icons" onClick={this._go(-1)}>arrow_downward</i>
        <i className="material-icons" onClick={this._delete.bind(this)}>delete</i>
      </div>
      <div>
        <div className="drag-area">
        </div>
        {React.cloneElement(this.props.children, {style})}
      </div>
    </div>
  }
}

