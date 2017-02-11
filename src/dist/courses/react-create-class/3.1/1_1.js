import React, {Component} from 'react'
import ReactDOM from 'react-dom'


// 使用ES6 Class声明一个组件
class App extends Component {
  
  constructor(){
    super()
    
    this.state = {
      tick : 60
    }
  }
  render(){
    const {color} = this.props
    const {tick} = this.state
  	return <h1 style={{color}}>{tick}</h1>  
  }
}


const appEle = document.getElementById("app")

const app = <App
              color="red" />
ReactDOM.render( app, appEle)














