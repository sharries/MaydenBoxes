import React, { Component } from 'react';
import { 
	NavLink
 } from 'react-router-dom';
class Strengths extends Component {
	
	render(){
		return(
			<div className='choose col w10 txt-l'>
				<button id='std' className='selected str col w6 hlb' onClick={this.props.setStrength}><h2>Standard</h2></button>
				<button id='str' className='str col w6 hlb' onClick={this.props.setStrength}><h2>Strong</h2> +10%</button>
				<button id='xstr' className='str col w6 hlb' onClick={this.props.setStrength}><h2>Extra strong</h2> +25%</button>
				<NavLink to='/checkout' className='continue btn ib w12 p1m m2m m-tb txt-c bg1'>Continue</NavLink>
			</div>
		)
	}
}

export default Strengths;