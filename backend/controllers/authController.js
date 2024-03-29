//All Imports
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { CatchAsyncError } = require('../middlewares/CatchAsyncError')
const Users = require('../models/Users')
const { errorHandler } = require('../utils/ErrorHandler')
const cloudinary = require('cloudinary')

// All Controllers
//Signup a User
exports.SignupUser = CatchAsyncError(async (req, res, next) => {
    // Taking All data from erquest 
    console.log(1);
    const { username, password, email } = req.body
    // Verifying whether user exists with the entered Username
    let user = await Users.findOne({ username})
    if (user) {
        return (next(errorHandler("Username or Email or Password already exists", 403)))
    }
    //Storing image to the cloudinary
    const output = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'a'
    })
    // Hashing the password
    const HashedPassword = await bcrypt.hash(password, 10)

    //Storing the data
    user = await Users.create({
        username, password: HashedPassword, email, role: 'user', avatar: {
            secure_url: output.secure_url,
            public_id: output.public_id
        }
    })

    //creasting token
    const token = await jwt.sign({ userID: user.id }, process.env.JWT_SECRETE)


    // sending response to the user and storing token into the cookies
    res.status(200).cookie('token', token).json({
        success: true,
        message: 'User created successfully',
        token
    })
})

//Login a User
exports.LoginUser = CatchAsyncError(async (req, res, next) => {
    // Taking All data from erquest 
    const { username, password } = req.body

    // Verifying whether user exists with the entered Username
    let user = await Users.findOne({ username })
    if (!user) {
        return (next(errorHandler("Username or Email or Password  doesn't exists", 403)))
    }

    // Verifying whether user exists with the entered password
    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
        return (next(errorHandler("Username or Email or Password  doesn't exists", 403)))
    }

    //creasting token
    const token = await jwt.sign({ userID: user.id }, process.env.JWT_SECRETE)


    // sending response to the user and storing token into the cookies
    res.status(200).cookie('token', token, {
        expiresIn: Date.now() + '1d',
        httpOnly: true
    }).json({
        success: true,
        message: 'Logged In Successfully!!',
        token
    })
})

// Singout a User -- DELETE
exports.SignoutUser = CatchAsyncError(async (req, res, next) => {
    res.status(200).cookie('token', null).json({
        success: true
    })
})


// Get User details -- GET
exports.GetUserDetails = CatchAsyncError(
    async (req, res, next) => {
        //Finding User
        const user = await Users.findById(req.user.id).select('-password')

        //Verifying if user exists
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        // sending the response
        res.status(200).json({
            success: true,
            user
        })
    }
)

// Get User details -- GET -- ADMIN
exports.GetUserDetailsAdmin = CatchAsyncError(
    async (req, res, next) => {
        //Finding User
        const user = await Users.findById(req.params.id).select('-password')

        //Verifying if user exists
        if (!user) {
            return next(errorHandler('Not Authorised', 403))
        }

        // sending the response
        res.status(200).json({
            success: true,
            user
        })
    }
)

// Verify User -- GET 
exports.VerifyUserAuth = async (req, res, next) => {
    const user = await Users.findById(req.user).select('-password');
    if (!user) {
        return next(errorHandler('Not Authorised', 403))
    }

    res.status(200).json({
        success: true,
        user
    })

}


// Change Profile Picture
exports.ChangeProfilePicture = CatchAsyncError(async(req,res,next)=>{
    const id = req.user.id

    let user = await Users.findById(id).select('-password')

    if(!user){
        return next(new errorHandler('Not Authorised',403))
    }
    
    const output = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:'a'
    })

    user.avatar[0].public_id = output.public_id
    user.avatar[0].secure_url = output.secure_url
    user.save();

    res.status(200).json({
        message:'Changed successfully!!',
        success:'true'
    })
})

// Forget Password

// Chnage Forgotten password

// Change Password

// Delete a User

// Update a User

// Delete a User -- ADMIN

// Update a User -- ADMIN