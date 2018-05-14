let express = require('express');
let router = express.Router();

let UserController = require('../controllers/user.controller');
let LoginController = require('../controllers/login.controller');

/* GET users listing. */
router.get('/users', function (req, res) {
  // https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52
  const userController = new UserController();
  userController.getUsersList(req).then((val) => {
    res.send(val);
  }).catch((err) => {
    res.send(err);
  });
});


router.post('/login', function (req, res) {
  const loginController = new LoginController();
  loginController.userValidation(req).then((val) => {
    res.send(val);
  }).catch((err) => {
    res.send(err);
  });
});

module.exports = router;