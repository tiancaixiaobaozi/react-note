import React, { Component } from 'react';
import store from './store';
import actions from './store/actions';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    // 订阅sotre数据改变，然后赋值state
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    // store.dispatch(actions.getTodoListAction())
    store.dispatch(actions.getMyTodoListAction())
  }

  // input改变
  changeInputValue(e) {
    store.dispatch(actions.changeInputAction(e.target.value))
  }

  // 点击增加
  clickButton = () => {
    store.dispatch(actions.addItemAction())
  }

  // 移除
  deleteItem(i) {
    store.dispatch(actions.deleteItemAction(i))
  }

  // store改变
  storeChange = () => {
    this.setState(store.getState())
  }

  render() {
    return (
      <TodoListUI
        inputVal={this.state.inputVal}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickButton={this.clickButton}
        deleteItem={this.deleteItem}
      />
    )
  }
}

export default TodoList
