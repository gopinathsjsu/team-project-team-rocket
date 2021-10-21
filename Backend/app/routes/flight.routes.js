module.exports = app => {
	const flights = require("../controllers/flight.controller.js");

	app.post("/flights", flights.create);
	app.get("/flights", flights.findByLocations);
};