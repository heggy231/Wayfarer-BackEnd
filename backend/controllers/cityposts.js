//This exports all of the cityposts
const 
  db = require('../models')

module.exports = {
    index: (req,res)=>{
        db.CityPost.find({}, (err,cityposts)=>{
            res.json(cityposts)
        })
    },
}

