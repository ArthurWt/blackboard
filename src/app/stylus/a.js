
class App extends React.Component{
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

/ ** 在某一个文件里 **/
const store = {
  text : 'hello'
}

function store_change(text) {
  store.text = text
}

function connector(_Component) {

  class Connector extends React.Component {
    constructor(){
      super()
      this.state = {
        text : store.text
      }
    }
    render(){
      <_Component text={text} />
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