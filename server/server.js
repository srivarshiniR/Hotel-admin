var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const userRoute=require("./router/userRoute");
const roomsRoute = require("./router/roomsRoute");
const roomstypeRoute=require("./router/roomstypeRoute")
const bookingsRoute= require('./router/bookingsRoute')
const { json } = require("body-parser");
require("./db");

app.use(cors());
app.use(express.json());


//routes

app.use("/api/user",userRoute);
app.use("/api/room", roomsRoute);
app.use("/api/roomstype",roomstypeRoute);
app.use("/api/bookings",bookingsRoute);



//import schemas

require("./model/user");
require("./model/room");
require("./model/roomtype");
require("./model/booking");

const port = 5003;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log("server started @" + port));
