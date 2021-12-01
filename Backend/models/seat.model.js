const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeatSchema = new Schema({
	row: { type: String },
	column: { type: String },
	class: { type: String },
	isReserved: { type: Boolean }
});

const Seat = mongoose.model(
	'seat',
	SeatSchema
);

module.exports = Seat;