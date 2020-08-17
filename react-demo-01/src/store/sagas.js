import { takeEvery, put } from 'redux-saga/effects'
import action_types from './actionTypes'
import actions from './actions'
import axios from 'axios'

// generator
function* mySaga() {
  yield takeEvery(action_types.GET_MY_LIST, getList)
}

function* getList() {
  const res = yield axios.get('https://api.imjad.cn/hitokoto/')
  yield put(actions.addItemResAction(res.data))
}

export default mySaga
