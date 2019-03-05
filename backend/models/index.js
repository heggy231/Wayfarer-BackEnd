const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/way-farer',
  { useNewUrlParser: true })

module.exports= {
    CityPost: require('./CityPost'),
    User: require('./User')
}