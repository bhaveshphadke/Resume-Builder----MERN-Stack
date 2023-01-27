const mongoose = require('mongoose')

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGOURI,(err)=>{
        if(err) return console.log("Error Occured!!");
        console.log('Connected to MongoDB!!');
    })
}

module.exports = connectToMongo