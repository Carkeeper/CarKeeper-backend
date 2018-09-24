const mongoose = require('mongoose');

const actionProviderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    actionProviderName: String,
    actionProviderPhone: String,
    actionProviderAdress: String
});

module.exports = mongoose.model('actionProvider', actionProviderSchema);

