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
  
  _click(){
      this.setState({
      	tick : this.state.tick - 1  
      })
  }
  render(){
    const {color} = this.props
    const {tick} = this.state
  	return <div>
      <h1 style={{color}}>{tick}</h1>  
      <button onClick={this._click.bind(this)}>click me!</button>
    </div>
  }
}


const appEle = document.getElementById("app")

const app = <App
              color="red" />
ReactDOM.render( app, appEle)
















