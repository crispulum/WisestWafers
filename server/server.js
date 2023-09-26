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
const apiRouter = require('./routes/fortuneApi.js')


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
// app.use(express.static(path.join(__dirname, 'build')));
// app.use('/static', express.static(path.join(__dirname, '..', 'build')));

app.use(express.static(path.join(__dirname, '..', 'build')));


const fortuneRouter = express.Router();
app.use('/', fortuneRouter);


app.get('/', (req, res) => {
    console.log('test')
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})


// app.post('/fortuneText', (request, response) => {
//     try {
//         console.log('success!')
//         response.status(200).send('congratulations!')
//     } catch (error) {
//         console.error('Error handling POST request:', error);
//         response.status(500).send('Internal Server Error');
//     }
// })

app.use('/', apiRouter)


app.use((req, res) => res.status(404).send('you have strayed from the path of the orb'));


app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})
app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });













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