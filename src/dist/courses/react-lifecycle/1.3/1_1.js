// 再次看之前写的刷新例子
// 每一次刷新都会重新构造一个Ticker
// 但是每次构造Ticker都会设置一个计时器
// 点了足够多的刷新后计时器越来越多，且没有释放

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      key : 1
    }
  }
  _refresh(){
    

    this.setState({
    	key : new Date().getTime()  
    })
  }
  render(){
   console.log("render() in App")
   const {key} = this.state
    return <div>
      <Ticker key={key} />
      <button onClick={this._refresh.bind(this)}>刷新</button>  
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
  
  componentWillMount(){
  	setInterval( (() => {
      console.log("tick...")
      this.setState({tick : this.state.tick + 1})
    }).bind(this), 1000)
  }
  
  render(){
    const {tick} = this.state
    return (
       <div>{tick}</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
  






