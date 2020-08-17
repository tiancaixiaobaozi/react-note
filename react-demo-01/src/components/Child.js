import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './Child.css'

class Child extends Component {

	constructor(props) {
		super(props)
		this.state = {
			show: true
		}
	}

	toggleShow = () => {
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		return(
			<div>
				{ this.props.list.map(item => {
					return(
						<div key={item.id}>
							<CSSTransition
								in={this.state.show}
								timeout={2000}
								classNames='child-bar'
								unmountOnExit
							>
								<div key={item.id} className={ this.state.show ? 'show':'hide' }>
									<p style={{color: 'yellowgreen'}}>{item.title}</p>
								</div>
							</CSSTransition>
							<button onClick={this.toggleShow}>切换</button>
						</div>
					)
				}) }
			</div>
		)
	}
}

export default Child