const mongoose = require('mongoose');

const CityPostSchema = new mongoose.Schema({
    city: String,
    title: Number,
    description: String,
    imageUrl: String
})

module.exports = mongoose.model('CityPost', CityPostSchema)

//Created a model for the CityPost