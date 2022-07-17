const mongoose = require('mongoose');
const restaurants = require('../model/restuarantModel');
require('dotenv').config();
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority";


const getRestaurantByLocId = async function(req,res,next){
    const locId= req.params.locId;
    if(locId){
        try{
            await mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true});
        }catch{
            res.status(500).send("mongodb couldn't be connected.");
            res.end();
        }
        
        
        restaurants.find({"location_id":locId}).then((data)=>{
            mongoose.disconnect();
            res.send(data);
            res.end();
            
        }).catch((err)=>{
            mongoose.disconnect();
            res.status(500).send("mongodb couldn't be connected.");
            res.end();
        });
    }else{
        res.status(500).send("No location id found");
        res.end();
    }
    
}

module.exports = getRestaurantByLocId;