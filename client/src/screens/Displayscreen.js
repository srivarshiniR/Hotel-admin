import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../screens/bookingscreen.css';
import Navbar from '../component/Navbar'
import "./displayscreen.css";
import { BiRupee } from "react-icons/bi";
axios.defaults.baseURL = 'http://localhost:5003';

function Displayscreen() {

const[loading,setloading]=useState(false);
const[error,seterror]=useState();
const[room,setroom]=useState([]);
const {roomid} = useParams();

async function api(){
const details= await axios.get(`/api/room/getroombyid/${roomid}`)
console.log("details",details.data.room.imgurl[0])
setroom(details.data.room);
setloading(false)
}



useEffect(() => {
console.log("lett api get room",room)
 try{
  setloading(true);
  api();
  
 }
 catch(err){
  setloading(true);
  seterror(true);
 }
    
},[])



  return (
    <>
    <Navbar/>
    <div className='display-area'>
      {loading ? <h2>loading..</h2>  : (
   
   <div className='display-page'>
    <div><h2>{room.name}</h2></div>
    <div className='display-content'>
    <div className='img1'><img src={ room?.imgurl?.length &&room?.imgurl[0]}></img></div>
      <div className='display-value'>
      <div className='img2'><img src={ room?.imgurl?.length &&room?.imgurl[1]}></img></div>
      <div className='img3'><img src={ room?.imgurl?.length &&room?.imgurl[2]}></img></div> </div>
     
      <div className='img4'>  <img src={ room?.imgurl?.length &&room?.imgurl[3]}></img></div>
    </div><br></br><br></br>
    <div className='display-desc'>
      <h4><b>About the Property</b></h4>
      <h5>{room.desc}</h5>
    </div>
    {/* <div className='display-rent'>
     <h3><BiRupee size={70} />{room.rent}/-</h3>
    </div> */}
    </div>
    )}
    </div>
    </>
  )
}

export default Displayscreen