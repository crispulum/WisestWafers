
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/userModel.js');

mongoose.connect('mongodb://localhost/FortuneApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// const newUser = new User({
//     id: 2, // Replace with a unique ID for the user
//     username: 'example_user1', // Replace with a unique username
//     password: 'password123', // Replace with a secure password
// });


// newUser.save()
//     .then(savedUser => {
//         console.log('User saved to the database:', savedUser);
//     })
//     .catch(error => {
//         console.error('Error saving user:', error);
//     });

User.findOne({ username: 'example_user' })
    .then(foundUser => {
        if (foundUser) console.log(foundUser)
        else console.log('user not found')

    })

User.deleteMany({})
    .then(result => {
        console.log('deleted: ' + result)
    })