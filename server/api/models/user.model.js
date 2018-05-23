let mongoose = require('mongoose');
let db = require('../../db');
let Test = require('./test.model');
let Schema = mongoose.Schema;

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

            /*  if (filteredUser.length) {
                  resolve(filteredUser);
              } else {
                  resolve([]);
              }*/

            console.log("seejan");
            var query = Test.find({});
            query.exec(function (err, users) {
                if (err) {
                    console.log({ err: 'Error while fetching users' });
                    resolve([]);
                } else {
                    // If no errors are found, it responds with a JSON of all users
                    console.log('no error');
                    console.log(users);
                    resolve(filteredUser);
                }
            });
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