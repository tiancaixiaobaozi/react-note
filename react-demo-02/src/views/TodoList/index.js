import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, list, inputChange, clickButton, removeItem } = props
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={inputChange}
        />
        <button onClick={clickButton}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => removeItem(index)}
            >{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

// 映射state为props, 在组件中就不用this.state, 而是使用this.props
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 映射dispatch Event为props
const dispatchToProps = (dispatch) => {
  return {
    inputChange (e) {
      dispatch({
        type: 'CHANGE_INPUT',
        value: e.target.value
      })
    },
    clickButton() {
      dispatch({
        type: 'ADD_ITEM'
      })
    },
    removeItem(index) {
      dispatch({
        type: 'DELETE_ITEM',
        index
      })
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
