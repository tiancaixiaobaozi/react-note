import React from 'react';
import Child from './components/Child'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bar: 'father1'
    }
  }

  fatherMethod = (res) => {
    console.log(res)

  }

  render() {
    return (
      <div className="App">
        <p>今天又是充满希望的一天</p>
        <Hello />
        <Child fatherMethod={ this.fatherMethod.bind(this) /* (data) => this.fatherMethod(data) */ }>
          <h4>子组件插槽内容</h4>
        </Child>
      </div>
    );
  }
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }
  // function 函数 调用时需要 bind(this)
  // 箭头函数使用词法作用域，它允许方法访问 this 触发的地方, 不需要bind(this)
  updateText = () => {
    this.setState((prev, props) => {
      return { text: prev.text.indexOf('World') !== -1 ? 'Nice to meet you' : 'Hello World' }
    })
  }
  render() {
    return (
      <div className="hello">
        <p>{ this.state.text }</p>
        <button onClick={ this.updateText }>改变text</button>
      </div>
    )
  }
}

export default App;
