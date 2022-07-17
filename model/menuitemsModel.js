
const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuItemsSchema = new Schema({
    name:String,
    description:String,
    ingredients:Array,
    restaurantId:String,
    image:String,
    qty:Number,
    price:String
    
})

const MenuItems = mongoose.model('items',menuItemsSchema);
module.exports = MenuItems;