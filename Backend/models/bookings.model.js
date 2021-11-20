const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    user_id: { type: String },
    flight_id: { type: String },
    status: { type: String },
    booking_date: { type: Date },
    seat: { type: String },
    price: { type: String }
},
    { timestamps: true }
);

const Booking = mongoose.model(
    'booking',
    BookingSchema
);

module.exports = Booking;