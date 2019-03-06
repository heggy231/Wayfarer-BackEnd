//This contains the function we need to seed our database
const 
    data = require('./data'),
    db = require('../models')

//Go to the models folder match the model being used with the keys of what appears in the data.json
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

