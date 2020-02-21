import React, { Component } from 'react';
import axios from 'axios';

class Checkout extends Component {
	constructor(props){
		super(props);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this); 
		this.onChangeBusName = this.onChangeBusName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this); 
		this.onSubmitForm = this.onSubmitForm.bind(this);
		this.state = {
			orderSml: this.props.countSml,
			orderMed: this.props.countMed,
			orderLrg: this.props.countLrg,
			firstName:'',
			lastName: '',
			busName:'',
			orderEmail:'',
			orderPhone:'',
			orderStrength: this.props.strength,
			orderDiscount: this.props.discount

		};
	}
/* componentDidMount(){

} */

onChangeFirstName(e){
	this.setState({
		firstName: e.target.value
	});
}

onChangeLastName(e){
	this.setState({
		lastName: e.target.value
	});
}

onChangeBusName(e){
	this.setState({
		buName: e.target.value
	});
}

onChangeEmail(e){
	this.setState({
		orderEmail: e.target.value
	});
}

onChangePhone(e){
	this.setState({
		orderPhone: e.target.value
	});
}

onSubmitForm(e){
	e.preventDefault();
	const theOrder = {
		firstName: this.state.firstName,
		lastName: this.state.lastName,
		busName: this.state.orderBus,
		orderEmail: this.state.orderEmail,
		orderPhone: this.state.orderPhone,
		orderSml: this.state.orderSml,
		orderMed: this.state.orderMed,
		orderLrg: this.state.orderLrg,
		orderStrength: this.state.orderStrength,
		orderDiscount: this.state.orderDiscount
	}

	console.log('The Order ' + theOrder);

	axios.post('http://localhost:5000/orders/add', theOrder)

	//window.location = "/";
}

	render(){
			console.log( 'Small Order '+this.state.orderSml +" "+this.state.orderDiscount+" "+this.state.orderStrength +" "+this.state.firstName )
		return(
			<div className='choose col w10 txt-l'>
				<form onSubmit={this.onSubmitForm}>
					<fieldset>
						<label htmlFor='title'>Title</label><br />
						<select id='title'>
							<option> Mr </option>
						</select><br />
						<label htmlFor='first'>First Name</label><br />
						<input required id='first' type='text' size='20' 
							value={this.state.firstName} 
							onChange={this.onChangeFirstName} /><br />
						<label htmlFor='last'>Last Name</label><br />
						<input required id='last' type='text' size='20' 
							value={this.state.lastName} 
							onChange={this.onChangeLastName}  /><br />
						<label htmlFor='bus'>Business Name (Optional</label><br />
						<input id='bus' type='text' size='20' 
							value={this.state.orderBus} 
							onChange={this.onChangeBusName}  /><br />
						<label htmlFor='email'>Email</label><br />
						<input required id='email' type='email' size='40' 
							value={this.state.orderEmail} 
							onChange={this.onChangeEmail}  /><br />
						<label htmlFor='phone'>Phone</label><br />
						<input required id='phone' type='text' size='20' 
							value={this.state.orderPhone} 
							onChange={this.onChangePhone}  /><br />
						<input className='continue btn ib w12 p1m m2m m-tb txt-c bg1' type='submit' value='Checkout' />
					
					</fieldset>
				</form>

			</div>
		)
	}
}

export default Checkout