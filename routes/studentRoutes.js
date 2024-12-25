const express=require('express');
const router=express.Router();

const Student=require('./../models/student');


router.post('/student',async(req,res)=>{
    try {
     const data=req.body;
     const studentData=Student(data);
     const savedData=await studentData.save();
     console.log('Student Data Added');
     res.status(200).json(savedData);
 }
 catch(err){
     console.log(err);
     res.status(500).json({err:'internal server error'});  
 } 
  })

  router.get('/student',async(req,res)=>{
   try  {const data=await Student.find()
     console.log('data fetched');
     res.status(200).json(data);}
     catch(err){
         console.log(err);
         res.status(500).json({err:'internal server error'});  
     }
     
  })

  router.put('/student/:id',async(req,res)=>{
    try{
        const studentId=req.params.id;
        const updatedStudentdata=req.body;

        const updatedStudent=await Student.findByIdAndUpdate(studentId,updatedStudentdata,{
            new:true,
            runValidators:true
        })

        if(!updatedStudent){
        res.status(404).json({error:'internal server error'})
        }
        console.log('student updated');
        res.status(200).json(updatedStudent)
        
    }

    
    catch(err){
        console.log(err);
        res.status(500).json({err:'internal server error'}); 
    }
  })

  module.exports=router;
