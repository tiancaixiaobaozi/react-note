const defaultState = {
  inputValue: 'hello world',
  list: []
}

export default (state = defaultState, action) => {
  console.log(state)
  console.log(action)
  // if (action.type === 'CHANGE_INPUT') {
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.inputValue = action.value
  //   return newState
  // }
  // if (action.type === 'ADD_ITEM') {
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.list.push(newState.inputValue)
  //   newState.inputValue = ''
  //   return newState
  // }
  // if (action.type === 'DELETE_ITEM') {
  //   let newState = JSON.parse(JSON.stringify(state))
  //   newState.list.splice(action.index, 1)
  //   return newState
  // }
  return state
}
