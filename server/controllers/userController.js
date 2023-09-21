const User = require('../models/userModel');


const UserController = {

    async createUser(request, response, next) {
        try {
            const newStudent = new User({
                username: request.body.username,
                password: request.body.password,
                id: 1
            })
            const savedUser = await newUser.save();
            response.status(200).json(savedUser);
        }
        catch (error) {
            console.log('error in user creation: ' + error)
            return next({ error: 'error in user creation' })
        }


    }

}

module.exports = UserController;