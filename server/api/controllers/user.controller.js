let UserModel = require('../models/user.model');
let UtilityService = require('../services/utility.service');

class UserController {
  constructor() {
    this.userModel = new UserModel();
    this.utilityService = new UtilityService();
  }

  getUsersList(req) {
    return new Promise((resolve, reject) => {
      try {
        this.utilityService.verifyToken(req.headers).then((verfiedData) => {
          if (verfiedData && verfiedData.success) {
            this.userModel.getUsersList().then((usersList) => {
              resolve({
                success: true,
                data: usersList
              });
            }).catch((err) => {
              reject({
                desc: 'user list empty',
                error: err,
                success: false
              });
            });
          } else {
            resolve(verfiedData);
          }
        }).catch((err) => {
          reject({
            desc: 'token validation error',
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