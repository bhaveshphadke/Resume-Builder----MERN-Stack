const { CatchAsyncError } = require('../middlewares/CatchAsyncError')
const Resume = require('../models/Resume')
const Users = require('../models/Users')
const { errorHandler } = require('../utils/ErrorHandler')


//Gathering and storing user personal information -- POST
exports.UploadPersonalInfo = CatchAsyncError(
    async (req, res, next) => {
        //Gathering user info from req.body object
        const { name, role, email, phone, location, about, careerobjective } = req.body

        let resume = await Resume.findOne({ user: req.user })
        if (resume) {
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: { personalInfo: req.body } }, { new: true })
            return res.status(200).json({
                success: true,
                resume
            })
        }

        // Creating Object from user inputs
        const userData = {
            user: req.user,
            personalInfo: {
                name,
                role,
                email,
                phone,
                location,
                about,
                careerobjective
            }
        }

        // Storing to the database
        resume = await Resume.create(userData)

        res.status(200).json({
            success: true,
            resume
        })
    }
)

// Uploading Education -- POST
exports.UploadEducation = CatchAsyncError(
    async (req, res, next) => {


        // FInding resume already exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler('Fill the personal information first', 500))
        }

        // Creating Object from user inputs
        const userData = {
            education: req.body
        }

        // Storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: userData }, { new: true })

        res.status(200).json({
            success: true,
            resume
        })

    }
)

// Uploading Experience in array format -- POST
exports.UploadExperience = CatchAsyncError(
    async (req, res, next) => {
        // FInding resume already exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler('Fill the personal information first', 500))
        }


        // Creating Object from user inputs
        // If req.for update then filter or simply add data
        let updatedData = [];
        let userData = {}
        if (req.body.id) {
            updatedData = resume.experience.filter((item) => {
                console.log();
                return item.id !== req.body.id
            })
            userData = {
                experience: [...updatedData, req.body]
            }
        } else {
            userData = {
                experience: [...resume.experience, req.body]
            }
        }

        // Storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: userData }, { new: true })

        res.status(200).json({
            success: true,
            resume
        })
    }
)

// Uploading th skills -- POST
exports.UploadSkills = CatchAsyncError(
    async (req, res, next) => {
        // Verifying User exists or not


        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }


        // Gathering information from the req.body object and storing it
        // If req.for update then filter or simply add data
        let updatedData = [];
        let userData = {}
        if (req.body.id) {
            updatedData = resume.skills.filter((item) => {
                console.log();
                return item.id !== req.body.id
            })
            userData = {
                skills: [...updatedData, req.body]
            }
        } else {
            userData = {
                skills: [...resume.skills, req.body]
            }
        }
        // storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, userData, { new: true })

        res.status(200).json({
            success: true,
            resume
        })
    }
)

// Uploading the Achievements
exports.UploadAchievements = CatchAsyncError(
    async (req, res, next) => {
        // Verifying User exists or not


        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }


        // Gathering information from the req.body object and storing it
        // If req.for update then filter or simply add data
        let updatedData = [];
        let userData = {}
        if (req.body.id) {
            updatedData = resume.achievements.filter((item) => {
                console.log();
                return item.id !== req.body.id
            })
            userData = {
                achievements: [...updatedData, req.body]
            }
        } else {
            userData = {
                achievements: [...resume.achievements, req.body]
            }
        }
        // storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, userData, { new: true })

        res.status(200).json({
            success: true,
            resume
        })
    }
)


// Uploading the Projects
exports.UploadProjects = CatchAsyncError(
    async (req, res, next) => {
        // Verifying User exists or not

        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }



        // Gathering information from the req.body object and storing it
        // If req.for update then filter or simply add data
        let updatedData = [];
        let userData = {}
        if (req.body.id) {
            updatedData = resume.projects.filter((item) => {
                console.log();
                return item.id !== req.body.id
            })
            userData = {
                projects: [...updatedData, req.body]
            }
        } else {
            userData = {
                projects: [...resume.projects, req.body]
            }
        }
        // storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, userData, { new: true })
        // console.log(resume);

        res.status(200).json({
            success: true,
            resume
        })
    }
)


// Get Resume Data
exports.GetResumeData = CatchAsyncError(
    async (req, res, next) => {

        const resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Create Resume First", 404))
        }
        res.status(200).json({
            success: true,
            resume
        })
    }
)