const mongoose = require('mongoose');
const mealtypes = require('../model/mealTypeModel');
require('dotenv').config();
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority"


const getMealTypes = async function(req,res,next){
    try{
        await mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true});
    }catch{
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    }
        
    mealtypes.find({}).then((data)=>{
        mongoose.disconnect();
        res.send(data);
        res.end();
        
    }).catch((err)=>{
        mongoose.disconnect();
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    });

    
}

module.exports = getMealTypes;
