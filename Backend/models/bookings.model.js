const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Seat = require('./seat.model');

const BookingSchema = new Schema({
    user_id: { type: String },
    flight_id: { type: String },
    status: { type: String },
    booking_date: { type: Date },
    seat: { type: Seat.schema },
    price: { type: Number },
    status: { type: Boolean }
},
    { timestamps: true }
);

const Booking = mongoose.model(
    'booking',
    BookingSchema
);

module.exports = Booking;