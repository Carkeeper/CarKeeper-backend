const mongoose = require('mongoose');

const mfrReccommendationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    serviceName: String,
    serviceOccurances: Number,
    approxCost: Number,
    relevantModel: String, //car[]
    relevantModelYear: Number //Date Range
});

module.exports = mongoose.model('mfrReccommendation', mfrReccommendationSchema);