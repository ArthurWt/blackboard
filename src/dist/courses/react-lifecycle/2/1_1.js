
// 在未加载数据前显示一个loading效果然后
// 从服务端加载数据然后渲染列表
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : null
    }
  }
  componentWillMount(){
    
    // 请设置chrome 关闭同源策略
    // 执行chrome增加参数--disable-web-security --user-data-dir={某个目录}
    fetch("https://ketang.zhufengpeixun.cn/course")
    .then(res => {
      return res.json()
    })
    .then(jsonData => {
      this.setState({data : jsonData.data.courses})
    })
    
  }

  render(){
    console.log("render() in App")
    const {data} = this.state
    if(data === null){
      return <div>
        loading...
      </div>
    }
    
    return <ul>
      {data.map( (course, i) => {
        return <li key={i}>{course.title}</li>
      })}
    </ul>
    
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
  










