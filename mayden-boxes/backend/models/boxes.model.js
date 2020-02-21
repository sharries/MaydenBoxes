const mongoose = require('mongoose');
import { Schema } from "mongoose";
const boxSchema = new Schema({
	box: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength:3
	},
	price: {
		type: Float,
		required: true,
		unique: false,
		trim: true,
		minlength:3
	},
}, {
	timestamps: true,
});

const Box = mongoose.model('Box', boxSchema);
model.exports = Box;