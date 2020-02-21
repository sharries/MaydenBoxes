import React, { Component } from 'react';

class HeadItems extends Component {
	
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
					<span className='ib w-hlb disc-open'></span>
					Strengths
				</span>
				<span className='ib line'></span>
				<span>
					<span className='ib w-hlb disc-open'></span>
					Checkout
				</span>
			</div>
			<h1>Choose your items</h1>
			</div>
		)
	}
}

export default HeadItems;