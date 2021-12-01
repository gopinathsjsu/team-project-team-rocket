const router = require('express').Router();
const flight = require('../controllers/flight.controller.js');
const user = require('../controllers/user.controller');
const booking = require('../controllers/booking.controller');

router.post('/user/signup', user.signup);
router.post('/user/login', user.login);
router.get('/user/userInfo', user.userInfo);
router.get('/user/miles', user.miles);

router.post('/flights', flight.create);
router.get('/flights', flight.findByLocations);
router.get('/flights/seats', flight.getSeatMap);

router.post('/booking', booking.create);
router.get('/booking/user', booking.getBookingByUser);
router.get('/booking/flight', booking.getBookingByFlight);
router.put('/booking', booking.update);
router.delete('/booking', booking.cancel);

module.exports = router;