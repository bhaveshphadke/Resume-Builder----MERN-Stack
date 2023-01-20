const mongoose = require('mongoose')
const { Schema } = mongoose

const ResumeSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    personalInfo: [
        {
            name: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            about: {
                type: String,
                required: true
            },
            careerobjective:{
                type:String,
                required:true
            }
        }
    ],
    education: [
        {
            schoolname: {
                type: String,
                required: true
            },
            juniorcollege: {
                type: String
            },
            collegename: {
                type: String,
                required: true
            },
            yearofcompletion: {
                type: String,
                required: true
            },
            cgpa: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            }
        }
    ],
    experience: [
        {
            field: {
                type: String,
                required: true
            },
            years: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    skills: [
        {
            skill: {
                type: String,
                required: true
            },
            description: {
                type: String
            }
        }
    ],
    achievements: [
        {
            achievement: {
                type: String,
                required:true
            }
        }
    ],
    projects: [
        {
            projectname: {
                type: String,
                required: true
            },
            current:{
                type:Boolean,
                default:false
            },
            description:{
                type:String,
                required:true
            }
        }
    ],
    resumePDF:[
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
    ]
})

const Resume = mongoose.model('resume', ResumeSchema)

module.exports = Resume;