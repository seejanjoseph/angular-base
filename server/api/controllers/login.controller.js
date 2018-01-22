let jwt    = require('jsonwebtoken');

class LoginController {
  constructor() {
    console.log('in-----');
  }

  userValidation(req) {
    return new Promise((resolve, reject) => { 
      let returnObj;
      
      if (req.body.userName && req.body.password) {        
        const token = jwt.sign({ username: req.body.userName}, 'my-super-secret');        
        returnObj = {
          success: true,
          message: 'Enjoy your token!',
          token: token
        };        
        resolve(returnObj);
      } else {
        returnObj = {
          success: false
        };
        reject(returnObj);
      }
    });
  }
}

module.exports = LoginController;