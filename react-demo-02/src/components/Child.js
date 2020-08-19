import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Child extends Component {
  static propTypes = {
    fatherMethod: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  showProps = () => {
    this.props.fatherMethod("这是 props 改变父元素的值")
  }

  render() {
    return (
      <div onClick={ this.showProps }>
        <p>子组件</p>
        { this.props.children }
      </div>
    )
  }
}

export default Child
