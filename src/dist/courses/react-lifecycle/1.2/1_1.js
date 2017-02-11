// 问题：开发一个刷新按钮
// forceUpdate和setState不会刷新子组件的状态

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
    
    //forceUpdate不会导致子组件的刷新
    //this.forceUpdate()
    
    // 更新key会导致子组件的刷新
    
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
  



