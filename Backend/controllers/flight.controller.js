const url = require('url');
const Flight = require('../models/flights.model.js');

function populateSpaceshipSeats() {
	const result = [];
	for (let col = 0; col < 3; col++) {
		for (let row = 1; row <= 10; row++) {
			var seat = {};
			switch (col) {
				case (0):
					seat.seat_column = 'A';
					seat.seat_class = "First";
					break;
				case (1):
					seat.seat_column = 'B';
					seat.seat_class = "Economy";
					break;
				case (2):
					seat.seat_column = 'C';
					seat.seat_class = "Economy";
					break;
			}
			seat.seat_row = row;
			seat.isReserved = false;
			result.push(seat);
		}
	}
	return result;
}

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

exports.findByLocations = async (req, res) => {
	const params = url.parse(req.url, true).query;
	const origin = params.origin;
	const destination = params.destination;
	const departure_date = params.departure_date;
	const seat_class = params.seat_class || 'Economy';
	const no_of_passangers = params.no_of_passangers || 1;
	let query = {};

	if (departure_date != null) {
		query = { origin: origin, destination: destination, departure_date: departure_date }
	}
	else {
		query = { origin: origin, destination: destination, 'spaceship_seats.seat_class': seat_class }
	}

	try {
		const data = await Flight.find(query);
		console.log(data);
		res.send(data);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight fetch."
		});
	}
};