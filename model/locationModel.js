
const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
    name:String,
    city_id:Number,
    location_id:Number,
    city:String,
    country_name:String
    
})

const Locations = mongoose.model('locations',locationSchema);
module.exports = Locations;