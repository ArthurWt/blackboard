// 问题：开发一个刷新按钮
// forceUpdate和setState不会刷新子组件的状态

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      max : 5
    }
  }

  render(){
   console.log("render() in App")
   const {max} = this.state
    return <div>
      <Ticker max={max} />
      <button onClick={() => {this.setState({max : this.state.max + 1})}}>+</button>
      <button onClick={() => {this.setState({max : this.state.max - 1})}}>-</button>
    </div>
  }
}

class Ticker extends Component {
  
  constructor(){
    super()
    this.state = {
		tick : 0
    }
  }
  
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps()", nextProps)
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate()", nextProps, nextState)
    return true
  }
  
  componentWillUpdate(){
    console.log("componentWillUpdate()")
  }
  
  componentWillMount(){
  	setInterval( (() => {
      let nextTick = this.state.tick + 1
      if(nextTick > this.props.max){
        nextTick = 0  
      }
      
      this.setState({tick : nextTick})
    }).bind(this), 1000)
  }
  
  render(){
    const {tick} = this.state
    console.log("render() in Ticker")
    return (
       <div>{tick}/{this.props.max}</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
  




