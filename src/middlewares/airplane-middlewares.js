const { StatusCodes } = require('http-status-codes');

function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ explanation: "model Number is not correct" });
    }
    next();
}

module.exports = {
    validateCreateRequest
}