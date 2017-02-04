/**
 * 从React, ReactDOM中 import
 */
import React from 'react'
import ReactDOM from 'react-dom'


// 获取app元素
const appElement = document.getElementById('app')


const props = { 
  style : { backgroundColor : "red" }
}
// 使用React.CreateElement创建一个已被声明的元素
// 参数1： 已经声明过的组件名称
// 参数2： 属性
// 参数3： 子组件
const app = React.createElement(
  'div', 
  props, 
  React.createElement("h1", null, "Hello world!"))

// 渲染
ReactDOM.render( app, appElement)










