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

import {ACTION_SWITCH_TO, ACTION_SET_COURSE} from "../actions/course"



const url = new URL(window.location.href)

const query = qs.parse(url.query.replace("?", "")) || {}
import URL from 'url-parse'
import qs from 'qs'

const initial = {
  course : query.course || "demo",
  topic : query.topic,
  id : query.id,
  title : null,
  widgets : {}
}




const add_widget = (state, topic, id, widget) => {

  const newState = {...state}

  if(!newState['widgets'][topic]){
    newState['widgets'][topic] = {}
    if(!newState['widgets'][topic][id]) {
      newState['widgets'][topic][id] = []
    }
  }
  if(!widget.id) {
    widget.id = newState['widgets'][topic][id].length === 0 ? 1 :
      (newState['widgets'][topic][id][newState['widgets'][topic][id].length - 1].id + 1)
  }
  newState['widgets'][topic][id].push(widget)
  // console.log("@add_widget new State")
  // console.log(newState)
  return newState
  
}



const change_widget = (state, topic, id, {id : widget_id}, x, y, w, h) => {

  const newState = {...state}

  const widgets = newState['widgets'][topic][id]
  
  const widget = widgets.find(x => x.id === widget_id)
  widget.x = x
  widget.y = y
  widget.w = w
  widget.h = h
  
  // console.log("@add_widget new State")
  // console.log(newState)
  return newState
}
const delete_widget = (state, topic, id, widget) => {
  const newState = {...state}
  let widgets = newState['widgets'][topic][id]
  widgets = widgets.filter(x => x.id !== widget.id)
  newState['widgets'][topic][id] = widgets
  return newState
  
}

export const course = (state = initial, action) => {
  switch(action.type) {
    case ACTION_SET_COURSE : 
      return {...state, course: action.course}
    case ACTION_SWITCH_TO : 
      return {...state, topic : action.topic, id : action.id, title : action.title ? action.title : state.title}
    case "ADD_WIDGET" : 
      return add_widget(state, action.topic, action.id, action.widget)
    case "CHANGE_WIDGET" :
      return change_widget(state, action.topic, action.id, action.widget, action.x, action.y, action.w, action.h)
    
    case "DELETE_WIDGET" :

      return delete_widget(state, action.topic, action.id, action.widget)
  }
  return state
}

