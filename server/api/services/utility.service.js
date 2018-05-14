let jwt = require('jsonwebtoken');

class UtilityService {
    constructor() {
    }

    verifyToken(headers) {
        return new Promise((resolve, reject) => {
            try {
                let tokenValStatus = {
                    success: false,
                    message: 'Token Empty'
                };
                var token = headers['authorization'];
                if (!token) {
                    resolve(tokenValStatus);
                } else {
                    jwt.verify(token, 'my-super-secret-key', (err, decoded) => {
                        if (err) {
                            tokenValStatus.message = 'Failed to authenticate token.';
                            resolve(tokenValStatus);
                        } else {
                            tokenValStatus = {
                                success: true,
                                message: 'valid token'
                            };
                            resolve(tokenValStatus);
                        }
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

module.exports = UtilityService;