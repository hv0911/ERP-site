const ErrorHandler = require("../utils/errorhander");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModels/User");

exports.isAuthenticated = async (req, res, next) => {

    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login first to access this resources", 401))
    }

    const decodeData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodeData.id)

    next();

}