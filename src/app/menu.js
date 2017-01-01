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


import React,{Component} from 'react'

import {
  switch_to
} from "./redux/actions/course"

export class Menu extends Component {

  itemStyle(level) {
    return {
      paddingLeft : (level - 1) * 10 + "px",
      fontSize : (20 - (level)) + 'px',
      paddingTop : 10,
      paddingBottom : 10,
      cursor : 'pointer'
    }
  }
  
  
  _switch(topic, title) {
    store.dispatch(switch_to(topic, 1, title))
  }

  render(){
    const {content, course} = this.props

    return (
      <div className="menu">
        {content.map( ({topic, title, level}) => {
          return <div 
            onClick={ () => this._switch(topic, title)}
            className="menu-item" key={topic} style={this.itemStyle(level)}>{title}</div>
        })}
      </div>
    )

  }
}

const styles = {
  container : {
    borderRight : '1px solid #eee',
    width : '200px' 
    
  }  
}