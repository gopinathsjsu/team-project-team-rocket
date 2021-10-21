const Flight = require("../models/flights.model.js");

// Create and save a new flight
exports.create = (req, res) => {
	if(!req.body){
		res.status(400).send({
			message: "Content cannot be empty"
		});
	}

	const flight = new Flight({
		source: req.body.source,
		destination: req.body.destination,
		active: req.body.active
	});

	Flight.create(flight, (err,data) => {
		if(err)
			res.status(500).send({
				message: err.message || "Some error occured on creation."
			});
		else res.send(data);
	});
};

exports.findByLocations = (req, res) => {
	if(!req.body){
		res.status(400).send({
			message: "Content cannot be empty"
		});
	}

	const source = req.body.source;
	const destination = req.body.destination;

	Flight.findByLocations(source, destination, (err,data) => {
		if(err)
			res.status(500).send({
				message: err.message || "Some error occured on fetch."
			});
		else res.send(data);
	})
};