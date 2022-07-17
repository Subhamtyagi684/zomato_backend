const mongoose = require('mongoose');
const menuitems = require('../model/menuitemsModel');
require('dotenv').config();
const uri = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.uatx21n.mongodb.net/?retryWrites=true&w=majority";


const getMenuItemsByResIdController = async function(req,res,next){
    const resId= req.params.resId
    if(resId){
        try{
            await mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true});
        }catch{
            res.status(500).send("mongodb couldn't be connected.");
            res.end();
        }
        
        
        menuitems.find({"restaurantId":String(resId)}).then((data)=>{
            mongoose.disconnect();
            res.send(data);
            res.end();
            
        }).catch((err)=>{
            mongoose.disconnect();
            res.status(500).send("mongodb couldn't be connected.");
            res.end();
        });
    }else{
        res.status(500).send("No restaurant id found");
        res.end();
    }
    
}

module.exports = getMenuItemsByResIdController;