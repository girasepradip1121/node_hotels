const express=require('express');
const router=express.Router();

const menuItem = require('./../models/menuitem');




router.post('/menu',async(req,res)=>{
    try{
        const data=req.body;
        const menu=menuItem(data);
        const savedMenu=await menu.save();
        res.status(200).json(savedMenu);
        console.log('data stored');
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'});
    }
 });

 router.get('/menu',async(req,res)=>{
   try {
        const data=await menuItem.find();
    console.log('data fetched');
    res.status(200).json(data)
}
catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});  
}
 });
router.get('/menu/:tasteType',async(req,res)=>{
   try {
        const tasteType=req.params.tasteType;
    if(tasteType=='Sweet' || tasteType=='Spicy' || tasteType=='Sour'){
        const data=await menuItem.find({taste:tasteType})  
    }
    else{
        res.status(400).json({error:'Invalid work type'})
    }
}catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
    
}
})

router.put('/menu/:id',async(req,res)=>{
    try{
        const menuID=req.params.id;
        const menuData=req.body;

        const updateMenu=await menuItem.findByIdAndUpdate(menuID,menuData,{
            new:true,
            runValidators:true
        });
        if(! menuID){
           return res.status(400).json({error:'Internal server error'});
        }
        res.status(200).json(updateMenu);
        console.log('menu updatated');
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});

router.delete('menu/:id',async(req,res)=>{
    try{
        const menuId=req.params.id
        const deleteMenu=await menu.findByIdAndDelete(menuId)

        if(!menuId){
            return res.status(400).json({error:'Internal server error'});
         }

         res.status(200).json({message:"person deleted..."})
         console.log('person deleted...');
         
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
});
      

 

 module.exports=router;
