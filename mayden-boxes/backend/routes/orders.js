const router = require('express').Router();
let order = require('../models/order.models');

router.route('/').get((req, res) => {
	order.find()
	.then(orders => res.json(orders))
	.catch(err => res.status(400).json('Error: ' + err ));

});

router.route('/add').post((req, res) => {
	const firstName = req.body.first;
	const lastName = req.body.last;
	const busName = req.body.bus;
	const orderEmail = req.body.email;
	const orderPhone = req.body.phone;
	const orderSml = this.props.orderSml;
	const orderMed = this.props.orderMed;
	const orderLrg = this.props.orderLrg;
	const orderStrength = this.props.strength;
	const orderDiscount = this.props.discount;

	const newOrder = new order({
		firstName,
		lastName,
		busName,
		orderEmail,
		orderPhone,
		orderSml,
		orderMed,
		orderLrg,
		orderStrength,
		orderDiscount,
	});

	newOrder.save()
	.then(() => res.json('Order added'))
	.catch(err => res.status(400).json('Error :' + err));
});

module.exports = router;

