const express = require('express');
const router = express.Router();

const Pizza = require('./../models/pizza')

//order/menu data
router.post('/', async (req,res)=>{
    try{
      const orderData = req.body;
      const newOrder = new Pizza(orderData);
  
      const response = await newOrder.save();
      console.log("order saved");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(400).json({message:"Error in saving order"});
    
    }
  });
  
  router.get('/', async (req,res)=>{
    try{
      const getOrder = await Pizza.find();
      res.status(200).json(getOrder);
    }catch(err){
      console.log(err);
      res.status(400).json({message:"Error in fetching order"});
    }
  });

  module.exports = router;