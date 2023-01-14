const Resume = require("../models/Resume")
const { errorHandler } = require("../utils/ErrorHandler")
const { CatchAsyncError } = require("./CatchAsyncError")

exports.FetchResume = CatchAsyncError(
    async (req, res, next) => {
        // FInding resume already exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler('Fill the personal information first', 500))
        }
        next();
    }
)