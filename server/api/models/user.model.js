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
class UserModel {
    constructor() {
        console.log('in-----');
    }

    getUser(user, pass) {
        return new Promise((resolve, reject) => {
            //Add roles to token and attribute and send it back to FE
            //Validate the roles and token when new user request comes
            const filteredUser = loginTable.filter(item => {
                return item.userName === user && item.password === pass;
            });
            if (filteredUser.length) {
                resolve(filteredUser);
            } else {
                resolve([]);
            }
        });
    }

    getUsersList() {
        console.log("tets");
        return new Promise((resolve, reject) => {
            resolve(loginTable);
        });
    }
}

module.exports = UserModel;