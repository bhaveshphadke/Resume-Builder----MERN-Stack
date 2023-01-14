// All Routers
const express = require('express')
const { UploadPersonalInfo, UploadExperience, UploadEducation, UploadSkills, UploadAchievements, UploadProjects, GetResumeData } = require('../controllers/resumeController')
const { FetchResume } = require('../middlewares/fetchresume')
const { VerifyUser } = require('../middlewares/fetchuser')


//All Initialization
const router = express.Router()

// All Routes
router.post('/personalinfo',VerifyUser,UploadPersonalInfo)
router.post('/experience',VerifyUser,FetchResume,UploadExperience)
router.post('/education',VerifyUser,FetchResume,UploadEducation)
router.post('/skills',VerifyUser,FetchResume,UploadSkills)
router.post('/achievements',VerifyUser,FetchResume,UploadAchievements)
router.post('/achievements',VerifyUser,FetchResume,UploadAchievements)
router.post('/projects',VerifyUser,FetchResume,UploadProjects)
router.get('/getresume',VerifyUser,GetResumeData)


module.exports = router