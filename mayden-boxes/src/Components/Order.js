import React, { Component } from 'react';
import { 
	NavLink
 } from 'react-router-dom';
class Order extends Component {

	render(){
		let url = ''
		let cl = ''
		let msg = ''	
		if(this.props.total <= 0){
			url='#';
			cl='stop btn ib w16 p1m m2m m-tb txt-c bg1';
			msg = 'Make your choice';
		}else{
			url='/strength';
			cl='continue btn ib w12 p1m m2m m-tb txt-c bg1';
			msg = 'Continue'
		}

		return(
			<div className='choose col w10 txt-l'>			
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
				<NavLink to={url} className={cl} >{msg}</NavLink>
			</div>
		)
	}
}

export default Order;