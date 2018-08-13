const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    role: String,
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender: String,
    phoneNumber: String,
    email: String,
    picture: String,//File,
    registrationDate: Date,
    street: String,
    city: String,
    country: String
});

module.exports = mongoose.model('userSchema', userSchema);