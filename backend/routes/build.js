// All Routers
const express = require('express')
const { Template1 } = require('../controllers/buildContoller')
const { GetResumeData } = require('../controllers/resumeController')
const { VerifyUser } = require('../middlewares/fetchuser')
const { GenerateResume } = require('../templates/template1')


//All Initialization
const router = express.Router()

// All Routes
router.post('/template1',VerifyUser,Template1)


module.exports = router