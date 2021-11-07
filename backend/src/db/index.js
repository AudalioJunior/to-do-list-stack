const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {userMongoClinet: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;