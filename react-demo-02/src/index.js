import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import './index.css';
// import App from './App';
// import Main from './views/Main'
// import Hook from './views/Hook'
// import TodoList from "./views/TodoList";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from "./store";

ReactDOM.render(
  // <Hook dependenciesId={110} />,
  (
    <Provider store={store}>
      <Router />
    </Provider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
