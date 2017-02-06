import React, {Component} from 'react'

import ReactDOM from 'react-dom'

// 使用箭头函数声明一个组件
const App = () => <h1>Hello world!</h1>


const appEle = document.getElementById("app")

const app = <App />
ReactDOM.render( app, appEle)


