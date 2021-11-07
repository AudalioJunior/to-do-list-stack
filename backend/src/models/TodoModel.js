const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    select: {type: Boolean}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Todo', schema);