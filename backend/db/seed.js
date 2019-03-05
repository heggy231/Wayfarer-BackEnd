//This contains the function we need to seed our database
const 
    data = require('./data'),
    db = require('../models')


db.CityPost.remove({})
    .then(() => {
        db.CityPost.collection.insert(data)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })