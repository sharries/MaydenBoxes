import React, { Component } from 'react';

class HeadStrength extends Component {
	
	render(){
		return(
			<div>
			<div className='p1m bg1 f-white'>
				<span>
					<span className='ib disc'></span>
					Location
					<span className='ib line'></span>
				</span>
				<span>
					<span className='ib w-hlb disc'></span>
					Strengths
				</span>
				<span className='ib line'></span>
				<span>
					<span className='ib w-hlb disc-open'></span>
					Checkout
				</span>
			</div>
			<h1>Choose your box strength</h1>
			</div>
		)
	}
}

export default HeadStrength;