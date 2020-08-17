import React from 'react';
import './App.css';
import Child from './components/Child'
import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }
  }

  componentDidMount() {
    axios.get('https://api.imjad.cn/pixiv/v2/', {params: { type: 'rank' }}).then(res => {
      this.setState({
        list: res.data.illusts
      })
    }).catch(e => {
      console.log(e)
    })
  }

  inputChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  submitAdd = _ => {
    if (this.state.inputVal) {
      let arr = [].concat(this.state.list)
      arr = [...arr, this.state.inputVal]
      this.setState({
        list: arr
      })
    } else {
      alert('内容不能为空')
    }
  }
  
  render() {
    return (
      <div className="App">
        <input type="text" onChange={ this.inputChange } />
        <button onClick={ this.submitAdd }>确认添加</button>
        <Child list={this.state.list} />
      </div>
    )
  }
}

export default App;
