import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from "./App";
import Main from "./views/Main";
import Hook from "./views/Hook";
import TodoList from "./views/TodoList";
import List from "./views/List";
import NotFound from "./views/404";

function AppRouter() {
  return (
    <Router>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{margin: '0 10px'}}><Link to='/'>首页</Link></li>
        <li style={{margin: '0 10px'}}><Link to='/main'>Main</Link></li>
        <li style={{margin: '0 10px'}}><Link to='/hook'>Hook</Link></li>
        <li style={{margin: '0 10px'}}><Link to='/todo'>Todo</Link></li>
        <li style={{margin: '0 10px'}}><Link to='/list'>List</Link></li>
      </ul>
      <div className='router-view'>
        <Route path='/' exact component={App} />
        <Route path='/main/:id' component={Main} />
        <Route path='/hook' component={Hook} />
        <Route path='/todo' component={TodoList} />
        <Route path='/list' component={List} />
        <Route path='*' component={NotFound} />
      </div>
    </Router>
  )
}

export default AppRouter
