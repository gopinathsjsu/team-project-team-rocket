const sql = require("./db.js");

//constructor
const Flight = function(flight){
	this.source = flight.source;
	this.destination = flight.destination;
	this.active = flight.active;
};

Flight.create = (newFlight, result) => {
	sql.query("INSERT INTO Flights SET ?", newFlight, (err, res) => {
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}
		console.log("Flight created: ", {id: res.insertId, ...newFlight});
		result(null, {id: res.insertId, ...newFlight});
	});
};

Flight.findByLocations = (source, destination, result) => {
	sql.query(`SELECT * FROM flight_dataset WHERE ORIGINCITYNAME = '${source}' AND DESTCITYNAME = '${destination}'`, (err, res) => {
		if(err){
			console.log("error: ", err);
			result(err, null);
			return;
		}
		if(res.length){
			console.log("Number of flights: ", res[0]);
			result(null, res[0]);
			return;
		}

		//No flights for the destination
		result({kind: "not_found"}, null);
	});
};

module.exports = Flight;