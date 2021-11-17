const { query } = require("express");
const Flight = require("../models/flights.model.js");

function populateSpaceshipSeats() {
	const result = [];
	for(let col = 0; col < 3; col++){
		for(let row = 1; row <= 30; row++){
			var seat = {};
			switch(col){
				case(0):
				seat.seat_column = 'A';
				break;
				case(1):
				seat.seat_column = 'B';
				break;
				case(2):
				seat.seat_column = 'C';
				break;
			}
			seat.seat_row = row;
			if(row == 1){
				seat.seat_class = "First";
			}
			else{
				seat.seat_class = "Economy";
			}
			seat.isReserved = false;
			result.push(seat);
		}
	}

	return result;
}

// Create and save a new flight
exports.create = async (req, res) => {
	if(!req.body){
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

	try{
		flight.spaceship_seats = populateSpaceshipSeats();
		const data = await flight.save(flight);
		res.send(data);
	} catch(e){
		console.log(e);
		res.status(500).send({
			message: "Error occured on flight creation."
		});
	}

};

exports.findByLocations = async (req, res) => {
	if(!req.body){
		res.status(400).send({
			message: "Content cannot be empty"
		});
	}

	const origin = req.body.origin;
	const destination = req.body.destination;
	const departure_time = req.body.departure_time;
	let query = {};

	if(departure_time != null){
		query = {origin: origin, destination: destination, departure_time: departure_time}
	}
	else{
		query = {origin: origin, destination: destination}
	}

	try {
		const data = await Flight.find(query);
		res.send(data);
	} catch(e) {
		console.log(e);
		res.status(500).send({
			message: "Error on flight fetch."
		});
	}
};