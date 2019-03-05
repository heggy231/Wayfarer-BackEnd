const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    frequency: String,
    imageUrl: String
})

module.exports = mongoose.model('Comment', CommentSchema)