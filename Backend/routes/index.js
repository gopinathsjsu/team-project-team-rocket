const router = require('express').Router();
const flight = require('../controllers/flight.controller.js');
const user = require('../controllers/user.controller');
const booking = require('../controllers/booking.controller');

router.post('/user/register', user.register);
router.post('/user/login', user.login);
router.get('/user/userInfo', user.userInfo);

router.post('/flights', flight.create);
router.get('/flights', flight.findByLocations);
router.get('/flight/seats', flight.getSeatMap);

router.post('/booking', booking.create);
router.get('/booking/user', booking.getBookingByUser);
router.get('/booking/flight', booking.getBookingByFlight);

module.exports = router;