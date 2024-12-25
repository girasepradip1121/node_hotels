const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        },
        taste: {
        type: String,
        enum: ['Sweet', 'Spicy', 'Sour'],
        },
        is_drink: {
        type: Boolean,
        default: false,
        },
        ingredients: {
        type: [String],
        default: [],
        },
        num_sales: {
        type: Number,
        default: 0,
        }

})

const menuItem=mongoose.model('menuItem',menuSchema)
module.exports=menuItem;