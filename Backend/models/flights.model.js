const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatSchema = new Schema({
	seat_column: String,
	seat_row: Number,
	seat_class: String,
	isReserved: Boolean
});

const FlightSchema = new Schema({
	airline_code: { type: String, default: "RA" },
	airline_name: { type: String, default: "Rocket Airlines Inc." },
	number: { type: String, required: true },
	origin_code: { type: String, required: true },
	origin_airport: { type: String, required: true },
	origin: { type: String, required: true },
	destination_code: { type: String, required: true },
	destination_airport: { type: String, required: true },
	destination: { type: String, required: true },
	departure_date: { type: String, required: true },
	departure_time: { type: String, required: true },
	arrival_date: { type: String, required: true },
	arrival_time: { type: String, required: true },
	status: { type: String, required: true, default: 'Open' },
	spaceship_seats: [{ type: seatSchema }]
}
);

const Flight = mongoose.model(
	'flight',
	FlightSchema
);

module.exports = Flight;