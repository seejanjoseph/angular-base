//let jwt = require('jsonwebtoken');
let UserModel = require('../models/user.model');
let LoginService = require('../services/login.service');

class LoginController {
  constructor() {
    this.userModel = new UserModel();
    this.loginService = new LoginService();
  }

  userValidation(req) {
    return new Promise((resolve, reject) => {
      try {
        let returnObj;
        let userName = req.body.userName;
        let password = req.body.password;
        if (userName && password) {
          this.userModel.getUser(userName, password).then((filterdUser) => {
            if (filterdUser.length) {
              let userInfo = this.loginService.userValidation(filterdUser); 
              if (userInfo.success) {
                resolve(userInfo);
              } else {
                reject(userInfo);
              }
            } else {
              resolve({
                message: 'something went wrong',
                error: 'not valid user or passowrd',
                success: false
              });
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