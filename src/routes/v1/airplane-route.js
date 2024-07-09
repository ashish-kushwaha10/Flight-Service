const { AirPlaneController } = require('../../controllers');
const express = require('express');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();

router.post("/",
    AirplaneMiddlewares.validateCreateRequest,
    AirPlaneController.createAirplane);

module.exports = router;