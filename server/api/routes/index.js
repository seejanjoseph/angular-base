let express = require('express');
let router = express.Router();

let userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/users', function (req, res) {
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