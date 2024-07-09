const {StatusCodes} = require('http-status-codes');
const {AirPlaneService} = require('../services');

/*
* POST : /airplanes 
* req-body {modelNumber: 'airbus320', capacity: 200}
*/

async function createAirplane(req, res) {

    try {
        const airplane = await AirPlaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res
                  .status(StatusCodes.CREATED)
                  .json({success: true, message: "created", data:airplane})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({success: false, message: "created", data:[], error})
    }
   
}

module.exports = {
    createAirplane,

}