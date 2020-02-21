import React, { Component } from 'react';

class Medium extends Component {
	render(){
		return(
			<div className='row'>
				<div className='col w16'>
					<span>Medium box &#40;&pound;4.99&#41;</span>
				</div>
				<div className='col w8 box-fr txt-r'>
					<span className='medium' onClick={this.props.decrement}>-</span>
					<span>{this.props.countMed}</span>
					<span className='medium' onClick={this.props.increment}>+</span>
				</div>
			</div>
		)
	}
}

export default Medium