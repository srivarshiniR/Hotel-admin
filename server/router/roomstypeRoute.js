const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const roomtypeModel = require("../model/roomtype");

//get roomtype details

router.get("/getroomstype", async (req, res) => {
  try {
    const roomstype = await roomtypeModel.find({});
    return res.json({ roomstype });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});


 



//post roomstype details by id

router.get("/getRoomById/:id", async (req, res) => {
  
  const {roomtypeid} = req.params
  

  try {
    const roomstype = await roomtypeModel.find({hotel_id:roomtypeid});
    return res.json({roomstype});
  } catch (error) {

    return res.status(400).json({ message: error });
  }
});

//post room_type

router.post("/roomtype", async (req, res) => {
  console.log("enter value");
  try {
  
    const { hotel_id, max_member, rent, type, bed } = req.body;

    const newroom = await roomtypeModel.create({
      hotel_id,
      max_member,
      rent,
      type,
      bed,
    });

    console.log({ status: "ok" });
    res.send({ status: "ok", data: newroom });
  } catch (err) {
    console.log("err", err);
  }
});

//put api

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const detail = await roomtypeModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.send(detail);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
