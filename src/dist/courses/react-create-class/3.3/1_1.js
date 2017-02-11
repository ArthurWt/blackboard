import React, {Component} from 'react'
import ReactDOM from 'react-dom'


// 使用ES6 Class声明一个组件
class App extends Component {
  
  constructor(){
    super()
    
    this.state = {
      tick : 60,
      color : 'red'
    }
  }
  
  _click1(){
      this.setState({
      	tick : this.state.tick - 1  
      })
  }
  _click2(){
      this.setState({
      	color : this.state.color === 'blue' ? 
        	'red' : 'blue'
      })
  }
  render(){

    const {tick, color} = this.state
  	return <div>
      <h1 style={{color}}>{tick}</h1>  
      <button 
        onClick={this._click1.bind(this)}
        >click me change tick!</button>
      <button 
        onClick={this._click2.bind(this)}
        >click me change color!</button>
    </div>
  }
}


const appEle = document.getElementById("app")

const app = <App />
ReactDOM.render( app, appEle)

















