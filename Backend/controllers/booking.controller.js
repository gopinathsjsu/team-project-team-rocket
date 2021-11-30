const url = require('url');
const Booking = require('../models/bookings.model')
const User = require('../models/users.model');

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }

    const booking = new Booking({
        user_id: req.body.user_id,
        flight_id: req.body.flight_id,
        booking_date: new Date(),
        seat: req.body.seat,
        price: req.body.price,
    });
    let use_miles = req.body.use_miles;

    try {
        const saveBooking = await booking.save();
        const query = { _id: booking.user_id };
        const user = await User.findOne(query);
        if (use_miles) {
            newPrice = booking.price - user.miles;
            user.miles = 0.1 * newPrice;
        }
        else
            user.miles = user.miles + booking.price * .1;
        const updateMiles = await user.save();
        res.status(200).send({ success: 'true', message: 'Flight booked!' });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Error occured on flight booking'
        });
    }

};

exports.getBookingByUser = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }
    const query = { user_id: url.parse(req.url, true).query.user_id };
    try {
        const bookings = await Booking.find(query);
        return res.json(bookings);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> getBookingByUser"
        });
    }
}

exports.getBookingByFlight = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }
    const query = { flight_id: url.parse(req.url, true).query.flight_id };
    try {
        const bookings = await Booking.find(query);
        return res.json(bookings);
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> getBookingByFlight"
        });
    }
}