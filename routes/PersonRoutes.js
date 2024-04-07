const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
const { findByIdAndDelete } = require('../models/pizza');
//employee data
//post method to save data
router.post('/', async (req,res)=>{
    try{
      const data = req.body;
      const newPerson = new Person(data);
    
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(400).json({message:"Error in saving data"});
    
    }
  })
  
  //get method to fetch data
  
  router.get('/', async (req,res)=>{
    try{
      const getData = await Person.find();
      res.status(200).json(getData);
    }catch(err){
      console.log(err);
      res.status(400).json({message:"Error in fetching data"});
    }
  });

  //parameterized api to fetch data based on work type
router.get('/:workType', async (req,res)=>{
    try{
      const workType = req.params.workType;
      if(workType=="chef" || workType=="waiter" || workType=="manager" || workType=="delivery"){
        const getworkType = await Person.find({work:workType});
        console.log(`${workType} data fetched`);
        res.status(200).json(getworkType);
    }
    else{
      res.status(400).json({message:"Invalid work type"});
    }
  }catch(err){
      console.log(err);
      res.status(400).json({message:"Error in fetching data"});
    
    }});

    //updating data based on id

    router.put('/:id',async (req,res)=>{
        try{
            const id=req.params.id;
            const updateData = req.body;
            const updatedPerson = await Person.findByIdAndUpdate(id,updateData,{
                new:true, //return the modified document rather than the original
                runValidators:true //to run the Mongoose validators
            });
            if(!updatedPerson){
                res.status(400).json({message:"Invalid id, Person not found"});
            }
            else{
                console.log("data updated");
                res.status(200).json(updatedPerson);
            }
            
        }catch(err){
            console.log(err);
            res.status(400).json({message:"Error in updating data"});
        }
    });

    //delete data based on id
    router.delete('/:id', async (req, res) => {
        try {
         const PersonId = req.params.id;
            const deletedData = await Person.findByIdAndDelete(PersonId);
            if (!deletedData) {
                return res.status(400).json({ message: "Invalid id, Data not found" });

          }
          
          console.log('Data deleted');
          return res.status(200).json({ message: "Data deleted successfully!" });
        } catch (err) {
          console.error(err);
          return res.status(400).json({ message: "Error in updating data" });
        }
      });
      

module.exports = router;
  
  