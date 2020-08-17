import React from "react";
import { Route, Link } from 'react-router-dom'
import ReactVideo from './ReactVideo'
import FlutterVideo from './FlutterVideo'
import VueVideo from './VueVideo'

class Video extends React.Component {
	render() {
		return (
			<div>
				<h3>视频教程</h3>
				<ul style={{ display: 'flex', listStyle: 'none' }}>
					<li style={{ padding: '0 15px' }}><Link to='/video/react'>React视频</Link></li>
					<li style={{ padding: '0 15px' }}><Link to='/video/flutter'>Flutter视频</Link></li>
					<li style={{ padding: '0 15px' }}><Link to='/video/vue'>Vue视频</Link></li>
				</ul>
				<div style={{ outline: 'solid 1px yellowgreen' }}>
					<Route path='/video/react' component={ReactVideo} />
					<Route path='/video/flutter' component={FlutterVideo} />
					<Route path='/video/vue' component={VueVideo} />
				</div>
			</div>
		);
	}
}

export default Video
