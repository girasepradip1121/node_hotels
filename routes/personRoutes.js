const express=require('express');
const router=express.Router();

const Person=require('./../models/Person')


router.post('/person',async(req,res)=>{
    try{
        const data=req.body              //data re.body me store ho raha he ....
    
        //Create a new person document using the mongoose model
        const newPerson=Person(data)

        //save new person to database
        const savedPerson= await newPerson.save()
        res.status(200).json(savedPerson)
       }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error... '});
    }

     })

     router.get('/person',async(req,res)=>{
        try{
        const data=await Person.find();
        console.log('Data fetched');
        
        res.status(200).json(data)
    }

        catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error... '});
        }
     }) 

     router.get('/person/:worktype',async(req,res)=>{
        try{
            const worktype=req.params.worktype;
            if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
                const data=await Person.find({work:worktype})
                console.log('response fetched');
                res.status(200).json(data);
            }else{
                res.status(400).json({err:'invalid work type'})
            }
        }
        catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error... '});
        }
     })

     router.put('/person/:id', async(req,res)=>{
        try{
            const personId=req.params.id;
            const updateUserInfo=req.body;

            const updatedPerson=await Person.findByIdAndUpdate(personId,updateUserInfo,{
                new:true,
                runValidators:true 
            })

            if(!updatedPerson){
                return res.status(404).json({error:'server side error'})
            }
            res.status(200).json(updatedPerson);
            console.log('Person Updated...');
            }


        catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error... '});
        }
     })

     router.delete('/person/:id',async(req,res)=>{
        try{
            const personId=req.params.id;
            const deletedPerson=await Person.findByIdAndDelete(personId);

            if(!deletedPerson) {
                return res.status(404).json({error:'server side error'})
            }

            console.log('person deleted');
            res.status(200).json({message:'person deleted'});
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error... '});
        }
     })

     module.exports=router;

