let mongoose = require('mongoose');
let db = require('../../db');
let Schema = mongoose.Schema;

let userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    phone: Number,
    email: String,
    username: String,
    password: String,
    role: Number
});

const User = mongoose.model('user', userSchema);

class UserModel {
    constructor() {
        console.log('in-----');
    }

    getUser(user, pass) {
        return new Promise((resolve, reject) => {

            /*let user1 = new User({
                fname: 'seejan',
                lname: 'joseph',
                phone: '122456789',
                email: 'seejan1@test.com',
                username: 'admin',
                password: 'password',
                role: 2
            });

            let list = [user1];
            User.insertMany(list).then(() => {
                console.log('done');
            });*/

            var query = User.find({});
            query.exec(function (err, usersList) {
                if (err) {
                    console.log({ err: 'Error while fetching users' });
                    resolve([]);
                } else {
                    // If no errors are found, it responds with a JSON of all users
                    //Add roles to token and attribute and send it back to FE
                    //Validate the roles and token when new user request comes
                    const filteredUser = usersList.filter(item => {
                        return item.username === user && item.password === pass;
                    });
                    if (filteredUser.length) {
                        resolve(filteredUser);
                    } else {
                        resolve([]);
                    }
                }
            });
        });
    }

    getUsersList() {
        return new Promise((resolve, reject) => {
            var query = User.find({});
            query.exec(function (err, users) {
                if (err) {
                    console.log({ err: 'Error while fetching users' });
                    resolve([]);
                } else {
                    resolve(users);
                }
            });
        });
    }
}

module.exports = UserModel;