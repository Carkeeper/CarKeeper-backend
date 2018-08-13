const mongoose = require('mongoose');

const carActionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    actionType: String, //enum
    actionDate: Date,
    cost: Number,
    pictures: String, //file[]
    milageAtThatTime: Number,
    partsAffected: String, //string[]
    actionProviderName: String,
    actionProviderPhone: String,
    actionProviderAdress: String
});

module.exports = mongoose.model('carAction', carActionSchema);