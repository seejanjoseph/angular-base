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
                password: 'password',
                type: 'user'
            },
            {
                userName: 'admin',
                password: 'password',
                type: 'admin'
            }
        ];
        return new Promise((resolve, reject) => {
            //Add roles to token and attribute and send it back to FE
            //Validate the roles and token when new user request comes
            try {
                const filteredUser = loginTable.filter(item => {
                    return item.userName === user && item.password === pass;
                });
                if (filteredUser.length) {
                    const token = jwt.sign(
                        {
                            username: filteredUser.userName,
                            exp: Math.floor(Date.now() / 1000) + (60 * 60)
                        },
                        'my-super-secret-key'
                    );
                    resolve({
                        success: true,
                        message: 'Enjoy your token!',
                        role: filteredUser[0].type,
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