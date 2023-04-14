const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const roomModel = require("../model/room");


//get room details

router.get("/getrooms", async (req, res) => {
  try {
    const rooms = await roomModel.find({});
    return res.json({ rooms });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

//get room details by id

router.get("/getroombyid/:roomid", async (req, res) => {
  const roomid = req.params.roomid;

  try {
    const room = await roomModel.findOne({ _id: roomid });
    return res.send({ room });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});




//post Api for rooms

router.post("/room", async (req, res) => {
  console.log("enter value");
  try {
    console.log("start");
    const { name, maxcount, rent, type, destination, imgurl ,ratings} = req.body;
    const newroom = await Room.create({
      name,
      maxcount,
      rent,
      destination,
      type,
      imgurl,
      ratings
    });

    console.log({ status: "ok" });
    res.send({ status: "ok", data: newroom });
  } catch (err) {
    console.log("err", err);
  }
});

router.get("/room", async (req, res) => {
  console.log("enters");
  res.send({ status: "ok" });
});







module.exports = router;
