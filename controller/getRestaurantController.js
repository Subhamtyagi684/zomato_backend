const res = require('express/lib/response');
const mongoose = require('mongoose');
const restaurant = require('../model/restuarantModel');
require('dotenv').config();
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority";


const getRestaurantController = async function(req,res,next){
    try{
        await mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true});
    }catch{
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    }
    let filter = {};

    if(req.query.mealtype_id){
        filter["mealtype_id"]=Number(req.query.mealtype_id)
    }

    if(req.query.location_id){
        filter["location_id"]=Number(req.query.location_id)
    }
    if(req.query.cuisine_id){
        filter["cuisine_id"]={$in:[Number(req.query.cuisine_id)]}
        
    }

    if(req.query.min_price || req.query.max_price){
        filter["min_price"]={$gte:req.query.min_price?Number(req.query.min_price):0,$lte:req.query.max_price?Number(req.query.max_price):""}
    }

    
    restaurant.find(filter).then((data)=>{
        mongoose.disconnect();
        res.send(data);
        res.end();
        
    }).catch((err)=>{
        mongoose.disconnect();
        res.status(500).send("mongodb couldn't be connected.");
        res.end();
    });

    
}

module.exports = getRestaurantController;