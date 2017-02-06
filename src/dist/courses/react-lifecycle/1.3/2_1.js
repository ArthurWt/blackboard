// 修改上一个例子计时器没有释放的bug

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
  	this.I = setInterval( (() => {
      console.log("tick...")
      this.setState({tick : this.state.tick + 1})
    }).bind(this), 1000)
  }
  
  componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.I)
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
  


