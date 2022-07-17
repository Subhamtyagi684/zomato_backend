
const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
    name:String,
    city:String,
    location_id:Number,
    city_id:Number,
    locality:String,
    thumb:Array,
    aggregate_rating:Number,
    rating_text:String,
    min_price:Number,
    contact_number:String,
    cuisine_id:Array,
    cuisine:[{
        id:Number,
        name:String
    }],
    image:String,
    mealtype_id:Number
})

const Restaurant = mongoose.model('restaurant',restaurantSchema);
module.exports = Restaurant