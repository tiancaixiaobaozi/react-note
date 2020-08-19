import React, { Component } from 'react'
import './main.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    this.setState({
      id
    })
  }

  render() {
    return (
      <div>
        <p>路由参数：：：{this.state.id}</p>
        <Child />
      </div>
    )
  }
}

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0
    }
  }

  add() {
    let res = this.state.val
    this.setState({
      val: ++res
    })
  }
  reduce() {
    let res = this.state.val
    this.setState({
     val: --res
    })
  }

  render() {
    return(
      <div>
        <p>合计：{this.state.val}</p>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.reduce.bind(this)}>-</button>
      </div>
    )
  }
}

export default Main
