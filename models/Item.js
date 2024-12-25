const mongoose=require('mongoose');

const itemschema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    },
    rate:{
        type:String,
        required:true
    },
    taste:{
        type:String
    }
})
//commented.....

const Item=mongoose.model('Item',itemschema)
module.exports=Item;