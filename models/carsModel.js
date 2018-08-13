const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    licensePlate: String,
    make: String,
    model: String,
    color: String,
    engineCode: String,
    registrationDate: Date,
    previousOwner: String, //string[]
    milage: Number,
    pictures: String, //files[]
    addOns: String, //string[]
    category: String //enum
});

module.exports = mongoose.model('Car', carSchema);