// 演示挂载后的执行顺序
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
 
  constructor(){
    super()
    console.log("constructor()")
  }
 
  componentWillMount(){
    console.log("componentWillMount()")
  }
  
  componentDidMount(){
    console.log("componentDidMount()")
  }
  
  render(){
    console.log("render()")
  	return <div>
      abc
    </div>
  }
}

const app = <App />

ReactDOM.render(<App />, 
                document.getElementById("app"))





