const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_Secretkey = "thisistoken";
const User = require("../model/user")


router.post("/login", async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (password) {
    const token = jwt.sign({ email: user.email }, JWT_Secretkey, {
      expiresIn: "5d",
    });

    if (res.status(200)) {
      return res.json({ status: "ok", token: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});



//post api for registration

router.post("/register", async (req, res) => {
    const { name, email, password, number, aadhar, address } = req.body;
  
    const usermail = await User.findOne({ email });
    try {
      if (usermail) {
        res.send({ data: "User already Exists!!" });
      }
  
      await User.create({
        name,
        email,
        password,
        number,
        aadhar,
        address,
      });
      res.json({ message: "successfully registered", status: "ok" });
      return res;
    } catch (error) {
      console.log(error);
      res.json({ status: "error" });
    }
  });



  
  //post Api for login
  



  
  //Api to get user data using token
  
  router.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_Secretkey, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user === "token expired") {
        return res.send({ status: "error", data: "token expired", error });
      }
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });




  
  
  
  
  
 //get all users
  
 router.get("/getallusers",async(req,res)=>{
    try{
      const users=await User.find()
      res.send(users)
    }
    catch(error){
      return res.status(400).json({error});
    }
  })
  
  
  module.exports = router;