
const mongoose = require('mongoose');
const locations = require('../model/locationModel');
require('dotenv').config();
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority";


const getLocation = async function(req,res,next){
    try{
        await mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true});
    }catch{
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    }
    
    
    locations.find({}).then((data)=>{

        console.log("all",data)
        // mongoose.disconnect();
        res.send(data);
        res.end();
        
    }).catch((err)=>{
        mongoose.disconnect();
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    });

    
}

module.exports = getLocation;