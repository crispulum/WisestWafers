const Fortune = require('../models/fortuneModel');


const FortuneController = {

    async createFortune(request, response, next) {
        try {
            const newFortune = new Fortune({
                fortuneText: request.body.fortuneText,
            })
            const savedFortune = await newFortune.save();
            response.status(200).json(savedFortune);
            // might need to return next in order to add savedFortune to the user
        }
        catch (error) {
            console.log('error in fortune creation: ' + error)
            return next({ error: 'error in fortune creation' })
        }


    }

}

module.exports = FortuneController;