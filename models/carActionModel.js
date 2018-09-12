const mongoose = require('mongoose');

const carActionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    actionType: String, //enum
    actionDate: Date,
    cost: Number,
    pictures: String, //file[]
    milageAtThatTime: Number,
    partsAffected: String, //string[]
    actionProviderId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('carAction', carActionSchema);