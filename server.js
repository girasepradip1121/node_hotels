const express=require('express');
const db=require('./db');
const app=express();


const bodyparser=require('body-parser');

app.use(bodyparser.json()) //req.body


app.get('/',(req,res)=>{
    res.send("Welcome to my hotel.... How Can I Help You ?")
})


//import person routes

const personRoutes=require('./routes/personRoutes');
app.use('/',personRoutes)
  
const itemRoutes=require('./routes/itemRoutes');
app.use('/',itemRoutes)

const studentRoutes=require('./routes/studentRoutes')
app.use('/',studentRoutes);

const menuRoutes=require('./routes/menuRoutes')
app.use('/',menuRoutes);
       
     


app.listen(3000,()=>{
    console.log("server is listening on port 3000");
})
