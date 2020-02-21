import React, { Component } from 'react';

class Large extends Component {
	render(){
		return(
			<div className='row'>
				<div className='col w16'>
					<span>Large box &#40;&pound;7.99&#41;</span>
				</div>
				<div className='col w8  box-fr txt-r'>
					<span className='large' onClick={this.props.decrement}>-</span>
					<span>{this.props.countLrg}</span>
					<span className='large' onClick={this.props.increment}>+</span>
				</div>
			</div>
		)
	}
}

export default Large