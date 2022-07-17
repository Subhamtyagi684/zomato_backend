
const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealTypeSchema = new Schema({
    name:String,
    content:String,
    image:String,
    meal_type:Number
    
})

const MealTypes = mongoose.model('mealtypes',mealTypeSchema);
module.exports = MealTypes