let UserModel = require('../models/user.model');

class UserController {
  constructor() {
    this.userModel = new UserModel();
  }

  getUsersList(req) {
    return new Promise((resolve, reject) => {
      try {
        this.userModel.getUsersList().then((usersList) => {
          resolve(usersList);
        }).catch((err) => {
          reject({
            desc: 'user list empty',
            error: err,
            success: false
          });
        });
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

module.exports = UserController;