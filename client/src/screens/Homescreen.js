import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Room from "../screens/Room";

function Homescreen() {
  //initialize variables

  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    setloading(true); //loading

    //get values from db to ui

    axios
      .get("http://localhost:5003/api/room/getrooms")
      .then(
        (res) => {
          setrooms(res.data.rooms);
        }, //set all the data

        setloading(false)
      )
      .catch((err) => {
        seterror(error);

        console.log(err);

        setloading(false); //while error will come loading is false
      });
  });

  return loading ? <h1>load</h1> : <Room rooms={rooms} />;
}
export default Homescreen;
