import React, { Component } from 'react';

class Small extends Component {
	render(){
		return(
			<div className='row'>
				<div className='col w15'>
					<span>Small box &#40;&pound;2.99&#41;</span>
				</div>
				<div className='col w8 box-fr txt-r'>
					<span className='small' onClick={this.props.decrement}>-</span>
					<span>{this.props.countSml}</span>
					<span className='small' onClick={this.props.increment}>+</span>
				</div>
			</div>
		)
	}
}

export default Small