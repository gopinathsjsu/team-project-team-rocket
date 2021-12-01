const url = require('url');
const Booking = require('../models/bookings.model')
const User = require('../models/users.model');
const Seat = require('../models/seat.model');
const Flight = require('../models/flights.model');

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
        seat: JSON.parse(req.body.seat),
        price: req.body.price,
    });
    let use_miles = req.body.use_miles;

    try {
        const saveBooking = await booking.save();

        var query = { _id: booking.flight_id };
        const updateFlight = await Flight.findOne(query);
        const seats = updateFlight['seats'];

        let row = booking.seat.row;
        let col = undefined;
        switch (booking.seat.column) {
            case 'A': col = 0; break;
            case 'B': col = 1; break;
            case 'C': col = 2; break;
        }
        seats[row-1][col].isReserved = true;
        updateFlight['seats'] = seats;
        const updatedFlight = await updateFlight.save();

        var query = { _id: booking.user_id };
        const user = await User.findOne(query);
        if (use_miles) {
            newPrice = booking.price - user.miles;
            user.miles = Math.round(0.1 * newPrice);
        }
        else
            user.miles = user.miles + Math.round(booking.price * 0.1);
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

exports.update = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const query = { _id: params.booking_id };
    try {
        const currentBooking = await Booking.findOne(query);
        currentBooking.flight_id = params.flight_id;
        currentBooking.booking_date = new Date();
        const updatedBooking = await currentBooking.save();
        if (updatedBooking == undefined) {
            return res.json({ success: false, message: "There was an error. Try again" });
        }
        return res.json({ success: true, message: "Booking updated" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> cancel booking"
        });
    }
}

exports.cancel = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const query = { _id: params.booking_id };
    try {
        const cancelBooking = await Booking.deleteOne(query);
        if (cancelBooking.deletedCount == 1) {
            return res.json({ success: true, message: "Booking deleted" });
        }
        return res.json({ success: false, message: "There was an error. Try again" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> cancel booking"
        });
    }
}