// ALl Imports
const jwt = require('jsonwebtoken')
const { errorHandler } = require('../utils/ErrorHandler')
const { CatchAsyncError } = require('./CatchAsyncError')
const Users = require('../models/Users')


// ALl Middlewares
exports.VerifyUser = CatchAsyncError(
    
    async(req,res,next)=>{
        // Getting token from the cookies
        console.log(7)
        const {token} = req.cookies
        // verifying token
        if( token === 'j:null' ||token===undefined || token === null || !token){
            return next(errorHandler("Not Authorised please sign in with valid credentials",403))
        }

        //verifying token jwt
        const data = await jwt.verify(token,process.env.JWT_SECRETE)
        if(!data){
            return next(errorHandler("Not Authorised please sign in with valid credentials",403))
        }

        //Finding  the user
        const user = await Users.findById(data.userID)

        // Storing userID inside the req.user
        req.user = user
        next()
    }
)

exports.VerifyUserRole = (role)=>(req,res,next)=>{

    //Validating User Role
    if(role===req.user.role){
     return next()   
    }

    next(errorHandler('Not authorised',403))

}