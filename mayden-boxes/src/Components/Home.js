import React, { Component } from 'react';

class SmallTbl extends Component {
	render(){
		return(
				<tr>
					<td>Small</td><td>{this.props.countSml}</td><td className='txt-r'>&pound;{(parseInt(this.props.countSml) * 2.99).toFixed(2)}</td>
				</tr>
		)
	}
}

export default SmallTbl