import action_types from './actionTypes';
import axios from 'axios'

const actions =  {
  // input改变
  changeInputAction: (value) => ({
    type: action_types.CHNAGE_INPUT,
    value
  }),
  // 增加
  addItemAction: () => ({
    type: action_types.ADD_ITEM
  }),
  // 删除
  deleteItemAction: (index) => ({
    type: action_types.DELETE_ITEM,
    index
  }),
  // request增加
  addItemResAction: (item) => ({
    type: action_types.ADD_ITEM_RES,
    item
  }),
  // redux-thunk
  getTodoListAction: () => {
    return (dispatch) => {
      axios.get('https://api.imjad.cn/hitokoto/').then(res => {
        console.log(res)
        dispatch(actions.addItemResAction(res.data))
      }).catch(e => {
        console.log(e)
      })
    }
  },
  // redux-saga
  getMyTodoListAction: () => ({
    type: action_types.GET_MY_LIST
  })
}

export default actions
