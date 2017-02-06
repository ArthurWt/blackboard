import React, {Component} from 'react'

import ReactDOM from 'react-dom'

// 使用React.createClass声明一个组件
const App = React.createClass({
  render : function() {
  	return <h1>Hello world!</h1>  
  }
})



const appEle = document.getElementById("app")

const app = <App />
ReactDOM.render( app, appEle)


