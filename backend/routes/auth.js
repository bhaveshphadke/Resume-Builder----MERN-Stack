// All Imports
const express = require('express')
const { LoginUser, SignupUser, SignoutUser, GetUserDetails, GetUserDetailsAdmin, VerifyUserAuth, ChangeProfilePicture } = require('../controllers/authController')
const {VerifyUser, VerifyUserRole} = require('../middlewares/fetchuser')
//All Utils
const router = express.Router()


//All Routes
router.post('/signup',SignupUser)
router.post('/login',LoginUser)
router.delete('/signout',SignoutUser)
router.get('/getuserdetails',VerifyUser,GetUserDetails)
router.put('/changeprofilepicture',VerifyUser,ChangeProfilePicture)
router.get('/verifyuser',VerifyUser,VerifyUserAuth)
router.get('/admin/getuserdetails/:id',VerifyUser,VerifyUserRole('admin'),GetUserDetailsAdmin)

//Exporting router
module.exports = router