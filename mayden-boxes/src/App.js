import React, { Component } from 'react';
import './custom.css'; // Tell webpack that Button.js uses these styles
import './styles.css'; // Tell webpack that Button.js uses these styles
import './effects.css'; // Tell webpack that Button.js uses these styles

import BoxOrders from './Components/BoxOrders';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			countSml: 0,
			countMed: 0,
			countLrg: 0,
			strength:1,
			currentLocation: window.location.pathname,
			title: '',
			total:0,
			totalBoxes:0,
			origTotal:0,
			discount: false
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this); 
		this.setStrength = this.setStrength.bind(this);
	}
	
	increment(event){
		event.stopPropagation();
		switch(event.target.className){
			case'small':
						
				this.setState({
					countSml: this.state.countSml + 1,
					total: (((this.state.countSml + 1) * 2.99) + (this.state.countMed * 4.99) + (this.state.countLrg * 7.99)).toFixed(2),
					totalBoxes:this.state.totalBoxes + 1
				})
				/* if(this.state.totalBoxes >= 49){
					console.log('BEFORE ' + this.state.total)
					this.setState({
						total:(this.state.total + 2)*1.15
					}); */
					if(this.state.totalBoxes === 49){
						this.setState(prevState => ({
							discount: !prevState.discount
						}));
					console.log('DISCOUNT ' + this.state.discount)
					}

					
				// }
			break;
			case 'medium':
				this.setState({
					countMed: this.state.countMed + 1,
					total: ((this.state.countSml * 2.99) + ((this.state.countMed + 1) * 4.99) + (this.state.countLrg * 7.99)).toFixed(2),
					totalBoxes:this.state.totalBoxes + 1
				});
				if(this.state.totalBoxes === 49){
						this.setState(prevState => ({
							discount: !prevState.discount
						}));
						console.log('DISCOUNT ' + this.state.discount)
					}

					
			break;
			case 'large':
				this.setState({
					countLrg: this.state.countLrg + 1,
					total: ((this.state.countSml * 2.99) + (this.state.countMed * 4.99) + ((this.state.countLrg + 1) * 7.99)).toFixed(2),
					totalBoxes:this.state.totalBoxes + 1
				});
				if(this.state.totalBoxes === 49){
					this.setState(prevState => ({
						discount: !prevState.discount
					}));
				}

				console.log('DISCOUNT ' + this.state.discount)
			break;
			default:
		}
	}

	decrement(event){
		event.stopPropagation();
		switch(event.target.className){
			case'small':
			if(this.state.countSml > 0){
				this.setState({
					countSml: this.state.countSml - 1,
					total: (((this.state.countSml - 1) * 2.99) + (this.state.countMed *4.99) + (this.state.countLrg * 7.99)).toFixed(2),
					totalBoxes:this.state.totalBoxes - 1
				});				
				if(this.state.totalBoxes === 51 && this.state.discount === true ){
					this.setState(prevState => ({
						discount: !prevState.discount
					}));

					console.log('DISCOUNT REMOVED ' + this.state.discount + " " + this.state.total + " " + this.state.origTotal)
				}
			}
			break;
				case 'medium':
				if(this.state.countMed > 0){
					this.setState({
						countMed: this.state.countMed - 1,
						total: ((this.state.countSml * 2.99) + ((this.state.countMed - 1) *4.99) + (this.state.countLrg * 7.99)).toFixed(2),
						totalBoxes:this.state.totalBoxes - 1
					});			
						
				if(this.state.totalBoxes === 51 && this.state.discount === true ){
					this.setState(prevState => ({
						discount: !prevState.discount
					}));

					console.log('DISCOUNT REMOVED ' + this.state.discount + " " + this.state.total + " " + this.state.origTotal)
				}
				}
			break;
			case 'large':
				if(this.state.countLrg > 0){
					this.setState({
						countLrg: this.state.countLrg - 1,
						total: ((this.state.countSml * 2.99) + (this.state.countMed *4.99) + ((this.state.countLrg - 1) * 7.99)).toFixed(2),
						totalBoxes:this.state.totalBoxes - 1
					});			
						
				if(this.state.totalBoxes === 51 && this.state.discount === true ){
					this.setState(prevState => ({
						discount: !prevState.discount
					}));

					console.log('DISCOUNT REMOVED ' + this.state.discount + " " + this.state.total + " " + this.state.origTotal)
				}
				}
			break;
			default:
		}
	}

	setStrength(event){
		switch(event.target.id){
			case'std':		
				this.setState({
					strength: 1
				})
				event.target.classList.add('selected')
				event.target.nextElementSibling.classList.remove('selected')
				document.getElementById('xstr').classList.remove('selected')
			break;
			case'str':		
				this.setState({
					strength: 1.1
				})
				event.target.classList.add('selected')
				event.target.nextElementSibling.classList.remove('selected')
				event.target.previousElementSibling.classList.remove('selected')
			break;
			case'xstr':		
				this.setState({
					strength: 1.25
				})
				event.target.classList.add('selected')
				document.getElementById('std').classList.remove('selected')
				event.target.previousElementSibling.classList.remove('selected')
			break;
			default:
		}
	}

	render(){

		return(
			<div className='App'>
				<BoxOrders 
					decrement={ this.decrement } 
					increment={ this.increment } 
					setStrength={ this.setStrength } 
					countSml={ this.state.countSml } 
					countMed={ this.state.countMed }  
					countLrg={ this.state.countLrg }
					strength={ this.state.strength }
					total = { this.state.total } />
			</div>
		)
	}
}

export default App;