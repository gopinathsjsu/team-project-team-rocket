const url = require('url');
const Flight = require('../models/flights.model.js');

// Create and save a new flight
exports.create = async (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Content cannot be empty"
		});
	}

	// Create flight
	const flight = new Flight({
		airline_code: req.body.airline_code,
		airline_name: req.body.airline_name,
		tail_number: req.body.tail_number,
		number: req.body.number,
		origin_code: req.body.origin_code,
		origin_airport: req.body.origin_airport,
		origin: req.body.origin,
		destination_code: req.body.destination_code,
		destination_airport: req.body.destination_airport,
		destination: req.body.destination,
		departure_time: req.body.departure_time,
		arrival_time: req.body.arrival_time,
		distance: req.body.distance,
		status: req.body.status
	});

	try {
		flight.spaceship_seats = populateSpaceshipSeats();
		const data = await flight.save(flight);
		res.send(data);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error occured on flight creation."
		});
	}

};

exports.findById = async (req, res) => {
	const flight_id = url.parse(req.url, true).query.flight_id;
	try {
		const flight = await Flight.findById(flight_id);
		res.send(flight);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight fetch."
		});
	}
}

exports.findByLocations = async (req, res) => {
	const params = url.parse(req.url, true).query;
	const origin = params.origin;
	const destination = params.destination;
	const departure_date = params.departure_date;
	const seat_class = params.seat_class || 'Economy';
	const num_passengers = params.num_passengers || 1;
	let query = {};
	if (departure_date != null) {
		query = { origin: origin, destination: destination, departure_date: departure_date }
	}
	else {
		query = { origin: origin, destination: destination, 'seat.class': seat_class }
	}

	try {
		const data = await Flight.find(query);
		res.send(data);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight fetch."
		});
	}
};

exports.getSeatMap = async (req, res) => {
	const params = url.parse(req.url, true).query;
	const flight_id = params.flight_id;
	query = { _id: flight_id };
	try {
		const data = await Flight.findOne(query, { seats: 1 });
		res.send(data);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight seatmap"
		});
	}
}

exports.planets = async (req, res) => {
	try {
		const data = await Flight.distinct('origin');
		return res.json(data);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight seatmap"
		});
	}
}