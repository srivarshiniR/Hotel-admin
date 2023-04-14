const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Booking= require("../model/booking")

router.post("/bookroom",async(req,res)=>{
      const{
        room,
        userid,
        roomid,
        fromdate,
        todate,totalamount,totaldays
      } =req.body

      try{
        const newbooking=new Booking({
           room,
           roomid,
           userid,
           fromdate,
           todate,
           totalamount,
           totaldays
        })

        const booking=await newbooking.save()
      }
      catch(error){

      }
});

module.exports=router