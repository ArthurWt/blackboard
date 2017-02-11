// 演示在componentWillMount中setState
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
 
  constructor(){
    super()
    console.log("constructor()")
    this.state = {
      text : "hi"
    }
  }
 
  componentWillMount(){
    console.log("componentWillMount()")
    this.setState({
    	text : "wow~~"  
    })
  }
  
  componentDidMount(){
    console.log("componentDidMount()")
  }
  
  render(){
    console.log("render()")
  	return <div>
      {this.state.text}
    </div>
  }
}

const app = <App />

ReactDOM.render(<App />, 
                document.getElementById("app"))










