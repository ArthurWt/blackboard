import React, {Component} from 'react'
import ReactDOM from 'react-dom'


// 使用ES6 Class声明一个组件
class App extends Component {
  render(){
    
    const {text, color, doIt} = this.props
  	return <button 
             onClick={doIt}
             style={{color}}>
      {text}
    </button>  
  }
}


const appEle = document.getElementById("app")

const app = <App
              doIt={() => alert(123)}
              text="click me1!" 
              color="red" />
ReactDOM.render( app, appEle)









