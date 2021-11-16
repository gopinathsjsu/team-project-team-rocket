const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
		airline_code: {type: String, default: "RA"},
		airline_name: {type: String, default: "Rocket Airlines Inc."},
		tail_number: {type: String, required: true},
		number: {type: String, required: true},
		origin_code: {type: String, required:true},
		origin_airport: {type: String, required:true},
		origin: {type: String, required:true},
		destination_code: {type: String, required:true},
		destination_airport: {type: String, required:true},
		destination: {type: String, required:true},
		departure_time: {type: String, required:true},
		arrival_time: {type: Date, required:true},
		distance: {type: String, required:true},
		status: {type: String, required:true, default:"Open"},
		plane: {type: mongoose.ObjectId, default: null}
	},
 	{ timestamps: true }
);

const Flight = mongoose.model(
	"flight",
	FlightSchema
);

module.exports = Flight;