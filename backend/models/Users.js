//All Imports
const mongoose = require('mongoose')

// Utils 
const { Schema } = mongoose

// Schema 
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    avatar: [
        {
            public_id:{
                type:String,
                required:true
            },
            secure_url:{
                type:String,
                required:true
            }
        }
    ],
    ForgetPasswordToken:String,
    ForgetAPsswordExpiry:String
})


// compling into model and exporting
const Users = mongoose.model('user',UserSchema)
module.exports = Users