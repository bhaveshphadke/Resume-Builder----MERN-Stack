const { CatchAsyncError } = require("../middlewares/CatchAsyncError");
const { GenerateResume } = require("../templates/template1");
const Resume = require('../models/Resume')
exports.Template1 = CatchAsyncError(
    async(req,res,next)=>{

        const resume = await Resume.findOne({user:req.user})
        console.log(1111);
        const cloud = await GenerateResume(resume.id,req.body.url,req.body.html)
        console.log(1111);

        const data = {
            public_id:cloud.public_id,
            secure_url:cloud.secure_url
        }
        resume.resumePDF = [{...data}];

        resume.save()
        res.status(200).json({
            success:true,
            data
        })
    }
)