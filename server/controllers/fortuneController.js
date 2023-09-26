const Fortune = require('../models/fortuneModel');


const FortuneController = {

    async createFortune(request, response, next) {
        //console.log(request.body)
        try {
            const newFortune = new Fortune({
                fortuneText: request.body.fortuneText,
                createdByIP: request.ip,
            })
            const savedFortune = await newFortune.save();
            // response.locals.fortune = savedFortune;
            return next()
            // might need to return next in order to add savedFortune to the user
        }
        catch (error) {
            console.log('error in fortune creation: ' + error)
            return next({ error: 'error in fortune creation' })
        }


    },


    async fetchFortune(request, response, next) {
        try {

            Fortune.findOne()
                .then(foundUser => {
                    if (foundUser) console.log(foundUser)
                    else console.log('fortune not found')
                    response.locals.fortune = foundUser;
                })
                .then(() => { return next() })

        }
        catch (error) {
            console.log('error in fortune fetching: ' + error)
            return next({ error: 'error in fortune fetching' })
        }

    },

    async fetchRandomFortune(request, response, next) {
        try {
            let oneHourAgo = new Date();
            oneHourAgo.setHours(oneHourAgo.getHours() - 1);
            const randomFortune = await Fortune.aggregate([
                {
                    $match: {
                        createdAt: { $lt: oneHourAgo }
                    }
                },
                {
                    $sample: { size: 1 }
                }
            ]);
            console.log('randomfortune is: ')
            console.log(randomFortune[0]);
            response.locals.fortune = randomFortune[0];
            return next();
        } catch (error) {
            console.log('Error in random fortune fetching: ' + error);
            return next({ error: 'Error in random fortune fetching' });
        }
    },

    async createTestFortune(request, response, next) {
        try {
            // Create a test fortune with createdAt set to a long time ago
            const testFortune = new Fortune({
                fortuneText: 'This is a test fortune with a long ago date',
                createdByIP: '127.0.0.1', // Set the IP address as needed
                createdAt: new Date('2000-01-01'), // Set the desired past date
            });

            await testFortune.save();
            console.log('Test fortune created:', testFortune);

            return next();
        } catch (error) {
            console.error('Error creating test fortune:', error);
            return next({ error: 'Error creating test fortune' });
        }
    },


    async deleteAllFortunes(request, response, next) {
        try {
            // Delete all existing fortunes
            await Fortune.deleteMany({});
            console.log('All existing fortunes deleted.');
            return next();
        } catch (error) {
            console.error('Error deleting all fortunes:', error);
            return next({ error: 'Error deleting all fortunes' });
        }
    },

    async addTestFortunes(request, response, next) {
        try {
            const testFortunesData = [
                {
                    fortuneText: 'You will find that bug.',
                    createdByIP: '192.168.1.1', // Set a unique IP address
                    createdAt: new Date('2000-01-01'), // Set a past date
                },
                {
                    fortuneText: 'Webpack will obey you.',
                    createdByIP: '192.168.1.2', // Set another unique IP address
                    createdAt: new Date('2000-01-01'), // Set a past date
                },
                {
                    fortuneText: 'You will slay your presentation.',
                    createdByIP: '192.168.1.3', // Set another unique IP address
                    createdAt: new Date('2000-01-01'), // Set a past date
                },
                {
                    fortuneText: 'You will have a good hair day.',
                    createdByIP: '192.168.1.4', // Set another unique IP address
                    createdAt: new Date('2000-01-01'), // Set a past date
                },
            ];

            // Insert the test fortunes into the database
            await Fortune.insertMany(testFortunesData);

            console.log('Test fortunes added.');
            return next();
        } catch (error) {
            console.error('Error adding test fortunes:', error);
            return next({ error: 'Error adding test fortunes' });
        }
    },
};



module.exports = FortuneController;