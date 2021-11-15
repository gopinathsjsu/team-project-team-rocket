const Flight = require('../models/flight.model');

module.exports.addFlight = function(flight, callback) {
    flight.save(callback);
}

module.exports.getAllFlights = function(callback) {
	console.log('flight.service.js -> getAllFlights');
    Flight.find({}, callback);
}
