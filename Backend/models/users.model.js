const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    state: { type: String },
    city: { type: String },
    zip: { type: Number },
    dob: { type: Date },
    passport: { type: String },
    miles: { type: Number }
},
    { timestamps: true }
);

const User = mongoose.model(
    'user',
    UserSchema
);

module.exports = User;