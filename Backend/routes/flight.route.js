const express = require('express');
const router = express.Router();
const flight = require('../services/flight.service.js');

router.post('/add', (req, res, next) => {
	
});

router.get('', (req, res, next) => {
	console.log('flight.route.js -> get all flights');
	res.json(flight.getAllFlights());
});

module.exports = router;