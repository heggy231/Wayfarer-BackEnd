const 
  express = require('express'),
  app = express(),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  controllers = require('../controllers')

router.post('/signup', controllers.user.signup);  //<--- signup route is here

router.post('/login', controllers.user.login)  //<--- login route is  here

router.use((req, res, next) => { //<--- .use takes in two params req and res and and optional called next
  console.log('activated')
  const bearerHeader = req.headers['authorization'];
  console.log('triggered token check', bearerHeader)

  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');  //<-- spilting this apart 
    const bearerToken = bearer[1];
    req.token = bearerToken; //is there bear if there is breakopen the token
    let verified = jwt.verify(req.token, 'waffles'); //<-- if it is signed with waffles 
    console.log('here is the verified', verified) //<--pull out the user id
    req.userId = verified._id //<-- we are setting it //<-- and adding the data set (verified._id)into our request object.
    next();  //<-- similar to a resturn except it <-- great store all this information and store it in //<-- the originall request online 12 that hit this route will be passed to the net route on 31.
  } 
  else {
    res.sendStatus(403);
  }
})

router.get('/', controllers.user.show) //<--- this is actually /user
router.delete('/', controllers.user.delete)   //<--- this is actually /user

module.exports = router;