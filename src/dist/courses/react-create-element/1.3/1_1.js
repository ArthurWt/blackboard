/**
 * 从React, ReactDOM中 import
 */
import React from 'react'
import ReactDOM from 'react-dom'


// 获取app元素
const appElement = document.getElementById('app')


const props = { 
  style : { backgroundColor : "white" }
}

const arrComponent = [
  React.createElement("li", {key : 1}, "北京"),
  React.createElement("li", {key : 2}, "上海"),
  React.createElement("li", {key : 3}, "深圳"),
]
// 使用React.CreateElement创建一个已被声明的元素
// 参数1： 已经声明过的组件名称
// 参数2： 属性
// 参数3： 子组件
const app = React.createElement(
  'ul', 
  props, 
  arrComponent)

// 渲染
ReactDOM.render( app, appElement)
















