const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema(
	{
		_id: {
			type: Number
		},
		airline_name: {
			type: String
		},
		airline_code: {
			type: String
		},
		flight_number: {
			type: Number
		},
		tail_number: {
			type: Number
		},
		origin: {
			type: String
		},
		origin_airport: {
			type: String
		},
		origin_code: {
			type: String
		},
		destination: {
			type: String
		},
		destination_code: {
			type: String
		},
		distance: {
			type: Number
		},
		dept_time: {
			type: Date
		},
		arrival_time: {
			type: Date
		}
	}
);

const Flight = module.exports = mongoose.model('Flight', FlightSchema);