//core node packages
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const { MongoClient } = require('mongodb');
const app = express();
//third party modules

//custom packages
const User = require('./controllers/userController.js');
const fortuneController = require('./controllers/fortuneController.js');


const PORT = 3000;

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fortuneRouter = express.Router();
app.use('/', fortuneRouter);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'))
})







app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });













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

// User.findOne({ username: 'example_user' })
//     .then(foundUser => {
//         if (foundUser) console.log(foundUser)
//         else console.log('user not found')

//     })

// User.deleteMany({})
//     .then(result => {
//         console.log('deleted: ' + result)
//     })

//WORKS :)