const {AirPlaneController} = require('../../controllers');
const express = require('express');
const router = express.Router();

router.post("/", AirPlaneController.createAirplane);

module.exports = router;