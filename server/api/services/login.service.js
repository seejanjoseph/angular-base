let jwt = require('jsonwebtoken');

class LoginService {
    constructor() {
        console.log('in-----');
    }

    userValidation(filteredUser) {
        try {           
            const token = jwt.sign({ username: filteredUser.userName },
                'my-super-secret-key',
                {
                    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60) // expires in 24 hours
                });
            return {
                success: true,
                message: 'Enjoy your token!',
                role: filteredUser.type,
                token: token
            };
        } catch (err) {
            return {
                message: 'something went wrong',
                error: err,
                success: false
            };
        }
    }
}

module.exports = LoginService;