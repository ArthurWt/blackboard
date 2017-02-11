/**
 * 从React, ReactDOM中 import
 */
import React from 'react'
import ReactDOM from 'react-dom'


// 获取app元素
const appElement = document.getElementById('app')

// 渲染
ReactDOM.render( 
  <div>
    <h1 style={{backgroundColor : 'red'}}>Hello</h1>
  </div>, 
appElement)












