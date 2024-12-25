const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    birthYear:{
        type:Number,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }
});

const Student=mongoose.model('Student',studentSchema);
module.exports=Student;