import React, {Component} from 'react'
import ReactDOM from 'react-dom'


// 使用ES6 Class声明一个组件

class Panel extends Component {
  render(){
    
    const {children} = this.props
  	return <div style={{
        padding : '10px', 
          border : '1px solid #eee'
      }}>
      {children}
    </div>
  }
}


const appEle = document.getElementById("app")

const app = <Panel><button>Hello</button></Panel>
ReactDOM.render( app, appEle)










