import React, { Component } from 'react';
import { 
	BrowserRouter,
	Route
 } from 'react-router-dom';
import Order from './Order';
import Strengths from './Strengths';
import Checkout from './Checkout';
import HeadItems from './HeadItems';
import HeadStrength from './HeadStrength';
import HeadCheckout from './HeadCheckout';
class BoxOrders extends Component {
	
	render(){
		console.log('str =' + this.props.strength)
		return(
			<BrowserRouter>
		<div>
		<header>
			<Route exact path ='/' render ={() => <HeadItems />} />
			<Route exact path ='/strength' render ={() => <HeadStrength />} />
			<Route exact path ='/checkout' render ={() => <HeadCheckout />} />
		</header>
		<main>
			
			<Route exact path="/" render={() => <Order countSml={ this.props.countSml } countMed={ this.props.countMed } countLrg={ this.props.countLrg } increment={ this.props.increment } decrement={ this.props.decrement } total = {this.props.total} />}  />
			<Route exact path='/strength' render={() => <Strengths setStrength={ this.props.setStrength }  />} />	
			<Route exact path='/checkout' render={() => <Checkout  countSml={ this.props.countSml } countMed={ this.props.countMed } countLrg={ this.props.countLrg } discound={ this.props.discount} strength={ this.props.strength } />} />		
			
			<table className='col w4' cellSpacing='0'>
				<thead>
					<tr>
						<th>Size</th><th>Qty</th><th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Small</td><td>{this.props.countSml}</td><td className='txt-r'>&pound;{(parseInt(this.props.countSml) * 2.99 * this.props.strength).toFixed(2)}</td>
					</tr>
						<tr>
							<td>Medium</td><td>{this.props.countMed}</td><td className='txt-r'>&pound;{(parseInt(this.props.countMed) * 4.99 * this.props.strength).toFixed(2)}</td>
						</tr>
						<tr>
							<td>Large</td><td>{this.props.countLrg}</td><td className='txt-r'>&pound;{(parseInt(this.props.countLrg) * 7.99 * this.props.strength).toFixed(2)}</td>
						</tr>
						<tr className='seperator'>
						</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>Total price</td><td></td><td className='txt-r'><strong>&pound;{ (this.props.total * this.props.strength).toFixed(2) }</strong></td>
					</tr>
				</tfoot>
			</table>
		</main>
		</div>
		</BrowserRouter>
		)
	}
}

export default BoxOrders;