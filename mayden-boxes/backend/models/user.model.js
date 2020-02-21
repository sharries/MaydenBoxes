const mongoose = require('mongoose');
import { Schema } from "mongoose";

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength:3
	},
	lastName: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength:3
	},
}, {
	timestamps: true,
});

const User = mongoose.model('User', userSchema);
model.exports = User;