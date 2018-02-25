let express = require('express');
let router = express.Router();

let LoginController = require('../controllers/login.controller');

/* GET users listing. */
router.get('/users', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  console.log("seejan");
  const loginController = new LoginController();  
  loginController.userValidation(req).then((val) => {    
    res.send(val);
  }).catch((err) => {
    res.send(err);
  });  
});

module.exports = router;