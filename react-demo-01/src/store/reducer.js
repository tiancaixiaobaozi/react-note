import types from './actionTypes';

const defaultStatus = {
  inputVal: 'write something',
  list: [
    '事件1',
    '事件2',
    '事件3'
  ]
}

export default (state = defaultStatus, action) => {
  // reducer 只能接收state, 不能直接改变state
  if (action.type === types.CHNAGE_INPUT) {
    // 改变输入框的action
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.value
    return newState
  }
  if (action.type === types.ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputVal)
    newState.inputVal = ''
    return newState
  }
  if (action.type === types.ADD_ITEM_RES) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.item)
    return newState
  }
  if (action.type === types.DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
