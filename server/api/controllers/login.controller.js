//let jwt = require('jsonwebtoken');
let UserModel = require('../models/user.model')

class LoginController {
  constructor() {
    this.userModel = new UserModel();
  }

  userValidation(req) {
    console.log("her");
    return new Promise((resolve, reject) => {
      try {
        let returnObj;
        let userName = req.body.userName;
        let password = req.body.password;
        if (userName && password) {
          this.userModel.userValidation(userName, password).then((val) => {
            if (val.success) {
              resolve(val);
            } else {
              reject(val);
            }
          }).catch((err) => {
            reject({
              desc: 'user and password are empty',
              error: err,
              success: false
            });
          });
        } else {
          reject({
            desc: 'user and password are empty',
            error: 'empty user and pass',
            success: false
          });
        }
      } catch (err) {
        reject({
          desc: 'something went wrong',
          error: err,
          success: false
        });
      }
    });
  }
}

module.exports = LoginController;