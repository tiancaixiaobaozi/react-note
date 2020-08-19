import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSageMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default store
