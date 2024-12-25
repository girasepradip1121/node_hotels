const mongoose=require('mongoose')

const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('mongodb connected with server');
})

db.on('error',()=>{
    console.log('error connecting to mongodb');  
})

db.on('disconnected',()=>{
    console.log('mongo db disconnected');
    
})

module.exports=db;