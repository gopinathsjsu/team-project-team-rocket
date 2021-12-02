const url = require('url');
const Booking = require('../models/bookings.model')
const User = require('../models/users.model');
const Flight = require('../models/flights.model');
const { VirtualType } = require('mongoose');

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
        status: true
    });
    let use_miles = req.body.use_miles;

    try {
        const saveBooking = await booking.save();

        var query = { _id: booking.flight_id };
        const updateFlight = await Flight.findOne(query);
        const seats = updateFlight['seats'];

        updateFlight['seats'] = await toggleSeat(updateFlight['seats'], booking.seat, true);
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

exports.updateSeat = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }
    const booking_id = req.body.booking_id;
    const old_seat = req.body.old_seat;
    const new_seat = req.body.new_seat;
    const query = { _id: booking_id };
    try {
        const currentBooking = await Booking.findOne(query);
        currentBooking.booking_date = new Date();

        const flight = await Flight.findById(currentBooking.flight_id);
        flight['seats'] = await toggleSeat(flight['seats'], old_seat, false);
        flight['seats'] = await toggleSeat(flight['seats'], new_seat, true);
        const updatedFlight = await flight.save();

        currentBooking.seat = new_seat;
        const updatedBooking = await currentBooking.save();
        if (updatedBooking == undefined) {
            return res.json({ success: false, message: "There was an error. Try again" });
        }
        return res.json({ success: true, message: "Seat updated" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> update booking"
        });
    }
}

exports.reschedule = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content cannot be empty'
        });
    }
    const booking = new Booking({
        user_id: req.body.user_id,
        flight_id: req.body.new_flight_id,
        booking_date: new Date(),
        seat: req.body.new_seat,
        status: true
    });
    try {
        const old_flight = await Flight.findById(req.body.old_flight_id);
        old_flight['seats'] = await toggleSeat(old_flight['seats'], req.body.old_seat, false);
        const updatedOldFlight = await old_flight.save();

        const new_flight = await Flight.findById(req.body.new_flight_id);
        new_flight['seats'] = await toggleSeat(new_flight['seats'], req.body.new_seat, true);
        const updatedNewFlight = await new_flight.save();

        const newBooking = await booking.save();
        if (newBooking == undefined)
            return res.json({ success: false, message: 'There was an error. Try again' });
        const old_booking = await Booking.findById(req.body.booking_id);
        old_booking.status = false;
        const canceled_booking = await old_booking.save();
        if (canceled_booking == undefined)
            return res.json({ success: false, message: 'There was an error. Try again' });
        return res.json({ success: true, message: 'Booking updated!' });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> update booking"
        });
    }

}

exports.cancel = async (req, res) => {
    const params = url.parse(req.url, true).query;
    const query = { _id: params.booking_id };
    try {
        const toCancel = await Booking.findOne(query);

        const flight = await Flight.findById(toCancel['flight_id']);
        flight['seats'] = await toggleSeat(flight['seats'], toCancel.seat, false);
        const updatedFlight = await flight.save();

        toCancel.status = false;
        const cancelBooking = await toCancel.save();
        if (cancelBooking == undefined) {
            return res.json({ success: false, message: "There was an error. Try again" });
        }
        return res.json({ success: true, message: "Booking deleted!" });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: "Error -> cancel booking"
        });
    }
}

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

async function toggleSeat(seats, seat, toggle) {
    let row = seat.row;
    let col = undefined;
    switch (seat.column) {
        case 'A': col = 0; break;
        case 'B': col = 1; break;
        case 'C': col = 2; break;
    }
    seats[row - 1][col].isReserved = toggle;
    return seats;
}