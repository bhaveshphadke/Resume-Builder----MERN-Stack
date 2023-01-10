// All Routers
const express = require('express')
const { UploadPersonalInfo, UploadExperience, UploadEducation, UploadSkills, UploadAchievements, UploadProjects } = require('../controllers/resumeController')
const { VerifyUser } = require('../middlewares/fetchuser')


//All Initialization
const router = express.Router()

// All Routes
router.post('/personalinfo',VerifyUser,UploadPersonalInfo)
router.post('/experience',VerifyUser,UploadExperience)
router.post('/education',VerifyUser,UploadEducation)
router.post('/skills',VerifyUser,UploadSkills)
router.post('/achievements',VerifyUser,UploadAchievements)
router.post('/achievements',VerifyUser,UploadAchievements)
router.post('/projects',VerifyUser,UploadProjects)


module.exports = router