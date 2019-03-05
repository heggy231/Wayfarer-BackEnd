const express = require('express');
const app = express();



// const 
//     express = require('express'),
//     cors = require('cors'),
    userRoutes = require('./routes/userroute'),
//     bodyParser = require('body-parser')
    citypostRoutes = require('./routes/citypostsroute')

// const app = express()

// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static('public'))

app.use('/api/cityposts', citypostRoutes)
app.use('/userroute', userRoutes)

// we are change to 3001 since react will run on port 3000
app.listen(process.env.PORT || 3001,  () => console.log('Server is up and running!!! Example app listening at http://localhost:3001/'));