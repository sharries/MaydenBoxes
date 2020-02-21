import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	firstName: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength:3
	},
	lastName: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength:3
	},
	busName: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength:3
	},
	orderEmail: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength:3
	},
	orderPhone: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength:3
	},
	orderSml: {
		type: Number,
		required: false,
		unique: false
	},
	orderMed: {
		type: Number,
		required: false,
		unique: false
	},
	orderLrg: {
		type: Number,
		required: false,
		unique: false
	},
	orderStrength: {
		type: Number,
		required: false,
		unique: false
	},
	orderDiscount: {
		type: Boolean,
		required: false,
		unique: false
	},
}, {
	timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;