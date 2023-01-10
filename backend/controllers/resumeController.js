const { CatchAsyncError } = require('../middlewares/CatchAsyncError')
const Resume = require('../models/Resume')
const Users = require('../models/Users')
const { errorHandler } = require('../utils/ErrorHandler')

//Gathering and storing user personal information -- POST
exports.UploadPersonalInfo = CatchAsyncError(
    async (req, res, next) => {
        // Verifying the User
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        //Gathering user info from req.body object
        const { name, role, email, phone, location, about } = req.body

        let resume = await Resume.findOne({ user: user.id })
        if (resume) {
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: { personalInfo: req.body } }, { new: true })
            return res.status(200).json({
                success: true,
                resume
            })
        }

        // Creating Object from user inputs
        const userData = {
            user: user.id,
            personalInfo: {
                name,
                role,
                email,
                phone,
                location,
                about
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
        // Verifying the User
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

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
        // Verifying the User
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        //Gathering user info from req.body object
        // const { field, years, role, description } = req.body

        // FInding resume already exists or not
        let resume = await Resume.findOne({ user: user.id })
        if (!resume) {
            return next(errorHandler('Fill the personal information first', 500))
        }

        // If resume..experience is not empty
        if (resume.experience.length != 0) {
            //overriding the data
            let data = [
                ...resume.experience,
                req.body
            ]
            // storing to the database
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: {experience: data} }, { new: true })
            
            return res.status(200).json({
                success: true,
                resume
            })
        }

        // Creating Object from user inputs
        const userData = {
            experience:[ req.body]
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
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }

          // If resume..experience is not empty
          if (resume.skills.length != 0) {
            //overriding the data
            let data = [
                ...resume.skills,
                req.body
            ]
            // storing to the database
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: {skills: data} }, { new: true })
            
            return res.status(200).json({
                success: true,
                resume
            })
        }


        // Gathering information from the req.body object and storing it
        const userData = {
            skills: req.body
        }
        // storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, userData, { new: true })

        res.status(200).json({
            success: true,
            resume
        })
    }
)

// Uploading the Acievements
exports.UploadAchievements = CatchAsyncError(
    async (req, res, next) => {
        // Verifying User exists or not
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }
        
         // If resume..experience is not empty
         if (resume.achievements.length != 0) {
            //overriding the data
            let data = [
                ...resume.achievements,
                req.body
            ]
            // storing to the database
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: {achievements: data} }, { new: true })
            
            return res.status(200).json({
                success: true,
                resume
            })
        }

        // Gathering information from the req.body object and storing it
        const userData = {
            achievements: req.body
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
        const user = await Users.findById(req.user)
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        // Finding resume exists or not
        let resume = await Resume.findOne({ user: req.user })
        if (!resume) {
            return next(errorHandler("Please fill personla information first", 500))
        }

         // If resume..experience is not empty
         if (resume.projects.length != 0) {
            //overriding the data
            let data = [
                ...resume.projects,
                req.body
            ]
            // storing to the database
            resume = await Resume.findOneAndUpdate({ user: req.user }, { $set: {projects: data} }, { new: true })
            
            return res.status(200).json({
                success: true,
                resume
            })
        }

        // Gathering information from the req.body object and storing it
        const userData = {
            projects: req.body
        }
        // storing to the database
        resume = await Resume.findOneAndUpdate({ user: req.user }, userData, { new: true })

        res.status(200).json({
            success: true,
            resume
        })
    }
)