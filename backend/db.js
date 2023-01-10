const mongoose = require('mongoose')

const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGOURI,(err)=>{
        if(err) return console.log('Failed to connect!!');
        console.log('Connected to MongoDB!!');
    })
}

module.exports = connectToMongo