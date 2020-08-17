import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
// import reduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

// 增强函数(为了同时配置redux-thunk和redux-tools)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhanser = composeEnhancers(applyMiddleware(sagaMiddleware))

// createStore 只接受两个参数
const store = createStore(reducer, enhanser)
// 运行saga中间件
sagaMiddleware.run(mySagas)

export default store
