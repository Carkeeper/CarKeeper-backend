const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://carKeeperAdmin:' + process.env.MONGO_ATLAS_PW + '@royscluster-7svan.mongodb.net/carKeeper?retryWrites=true', {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!');
});
