let jwt = require('jsonwebtoken');

class UserModel {
    constructor() {
        console.log('in-----');
    }

    userValidation(user, pass) {
        console.log("her");
        const loginTable = [
            {
                userName: 'user',
                password: 'user',
                type: 'user'
            },
            {
                userName: 'admin',
                password: 'admin',
                type: 'admin'
            }
        ];
        return new Promise((resolve, reject) => {
            try {
                const filteredUser = loginTable.filter(item => {
                    return item.userName === user && item.password === pass;
                });
                if (filteredUser.length) {
                    const token = jwt.sign({ username: user }, 'my-super-secret-key');
                    resolve({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                } else {
                    resolve({
                        message: 'something went wrong',
                        error: 'not valid user or passowrd',
                        success: false
                    });
                }
            } catch (err) {
                reject({
                    message: 'something went wrong',
                    error: err,
                    success: false
                });
            }
        });
    }
}

module.exports = UserModel;