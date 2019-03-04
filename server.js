const express = require('express');
const app = express();

// we are change to 3001 since react will run on port 3000
app.listen(process.env.PORT || 3001,  () => console.log('Server is up and running!!! Example app listening at http://localhost:3001/'));