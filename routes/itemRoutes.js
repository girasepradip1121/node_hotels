const express=require('express');
const router=express.Router();

const Item=require('./../models/Item')


router.post('/item',async(req,res)=>{
    try {
         const data=req.body;
     const newItem=Item(data);

     const savedItem=await newItem.save()
     res.status(200).json(savedItem)
 }catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error... '});
 }
});

 router.get('/item',async(req,res)=>{
     try{
       const data=await Item.find()
       console.log('data fetched');
       res.status(200).json(data)
       
     }catch(err){
         console.log(err);
         res.status(500).json({error:'internal server error... '});
     }
 })

 router.put('/item/:id',async(req,res)=>{
    try {
        const itemId=req.params.id;
        const itemData=req.body;

        const updatedItem=await Item.findByIdAndUpdate(itemId,itemData,{
            new:true,
            runValidators:true
        })

        if(!updatedItem){
            return res.status(400).json({error:'internal server error...'})
        }
        res.status(200).json(updatedItem);
        console.log('data updated');
        
    } catch (error) {
        console.log(err);
         res.status(500).json({error:'internal server error... '});
    }
 });

 router.delete('item/:id',async(req,res)=>{
    try {
        const itemId=req.params.id;

        const deletedItem=await Item.findByIdAndDelete(itemId);
        if(!deletedItem){
            return res.status(400).json({error:'internal server error...'})
        }
    } catch (error) {
        console.log(err);
         res.status(500).json({error:'internal server error... '});
    }
 })


  module.exports=router;

