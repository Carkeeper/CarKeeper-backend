const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    role: String,
    username: String,
    //password: String,
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

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('userSchema', userSchema);