import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
  render(){
    return (
      <div>
        <A />
        <B1 />
        <C1 />
        
      </div>
    )
  }
}

/** 在某一个文件里 **/
const events = []
const store = {
  text : 'hello'
}

function store_change(text) {
  store.text = text
  
  events.map(x => x(text))
} 

function on(handler){
  events.push(handler)
}

function connector(_Component) {

  class Connector extends Component {
      constructor(){
        super()
        this.state = {
          text : store.text
        }
      }
      _onReceiveEvent(){
        this.setState({
          text : "world"
        })
      }
      componentDidMount(){
        on(this._onReceiveEvent.bind(this))
      }
      render(){
        return <_Component text={this.state.text} />
      }
  }
  return Connector
}

/* END */

const A = (props) => {
  const click = function() {
     store_change("world")
  }
  return <input 
    onClick={click} type='button' value='click' />
}

const B = (props) => {
  return <h1>{props.text}</h1>
}

const B1 = connector(B)

const C = (props) => {
  return <h1>{props.text}</h1>
}
const C1 = connector(C)
const panel = document.getElementById("app")
ReactDOM.render(<App />, panel)

