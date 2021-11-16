const { query } = require("express");
const Flight = require("../models/flights.model.js");

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
		status: req.body.status,
		plane: req.body.plane
	});

	try{
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