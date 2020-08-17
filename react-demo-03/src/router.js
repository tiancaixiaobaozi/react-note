import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './view/home'
import Video from './view/video'
import Work from './view/workspace'

function AppRouter() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ background: '#f3f3f3', width: '100px', height: '100%' }}>
          <h3>一级导航</h3>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/video'>视频</Link></li>
            <li><Link to='/workspace'>工作区</Link></li>
          </ul>
        </div>
        <div style={{ padding: '15px', flex: '1' }}>
          <Route path='/' exact component={Home} />
          <Route path='/video' component={Video} />
          <Route path='/workspace' component={Work} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
