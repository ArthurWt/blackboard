import React, {Component} from 'react'

import ReactDOM from 'react-dom'

// 使用ES6 Class声明一个组件
class App extends Component {
  
  render(){
  	return <h1>Hello world!</h1>  
  }
}




const appEle = document.getElementById("app")

const app = <App />
ReactDOM.render( app, appEle)




