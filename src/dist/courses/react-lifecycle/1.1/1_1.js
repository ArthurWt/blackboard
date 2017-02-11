import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
 
  constructor(){
    super()
    alert(1)
  }
  
  render(){
  	return <div>
      abc
    </div>
  }
}

// app没有被挂载， 构造函数不执行
const app = <App />

ReactDOM.render(<h1>not mount</h1>, 
                document.getElementById("app"))







