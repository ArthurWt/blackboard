import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {connect, Provider} from 'react-redux'

/** reducer **/
const initial = {
  text : "Hello"
}

const demo = (state = initial , action) => {
  switch(action.type){
    case "CHANGE":
      return {text : "world"}
  }
  return state
}

/** Redux 初始化 **/
const store = createStore(combineReducers({demo}))

/** 使用redux **/
class App extends Component{
  
  render() {
   	return (
      <Provider store={store}>
      	<div>
          <A />
          <B1 />
          <C1 />
      	</div>
      </Provider>
    )
  }
}

const A = () => {
  const click = function() {
     store.dispatch({type : "CHANGE"})
  }
  return <input 
    onClick={click} type='button' value='click' />
}

const B = (props) => {
  return <h1>{props.text}</h1>
}

const map = state => {
  return {
    text : state.demo.text
  }
}
const B1 = connect(map)(B)

const C = (props) => {
  return <h1>{props.text}</h1>
}
const C1 = connect(map)(C)
const panel = document.getElementById("app")
ReactDOM.render(<App />, panel)



