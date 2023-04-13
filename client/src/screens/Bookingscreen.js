import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import '../screens/bookingscreen.css'
import Navbar from '../component/Navbar'

axios.defaults.baseURL = 'http://localhost:5005';

function Bookingscreen() {

const[loading,setloading]=useState(false);
const[error,seterror]=useState();
const[room,setroom]=useState([]);
const[user,setUser]=useState([]);
const {roomid} = useParams();

//get dates from user(room.js)

const location=useLocation();
console.log(location.state);
console.log(location.state.options);
console.log(location.state.startdate.getTime());
const stdate=String(location.state.startdate)
const endate=String(location.state.enddate)
const sttime=String(location.state.startdate.getTime())
const entime=String(location.state.enddate.getTime())

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference() {
    const timeDiff = Math.abs(entime - sttime);
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(endate,stdate);
  console.log(days,"hlooooo");

//get room details by id

async function api(){
const details= await axios.get(`/api/room/getroombyid/${roomid}`)
console.log("details",details.data.room.imgurl[0])
setroom(details.data.room);
setloading(false)
}

//post the generated token

async function userdetail(){
  await axios.post('http://localhost:5005/userData',{
  token: window.localStorage.getItem("token"),})
  .then((data)=>{
    console.log(data.data.data.email,"userdata")
    setUser(data.data.data)
  })

}

//useEffect state

useEffect(() => {
console.log("lett api get room",room)
 try{
  setloading(true);
  userdetail();
  api();
 
  
 }
 catch(err){
  setloading(true);
  seterror(true);
 }
    
},[])


//bookroom

async function bookroom(){
  const bookingdetails={
    room,
    user,
    fromdate,
    todate,
    totalamount,
    totaldays

  }

  try{
    const result=await axios.post('',bookingdetails)
  }
  catch(error){

  }
}

  
   
 return (
  <>
  <Navbar/>
    <div className='booking-page'>
     
      {loading ? <h2>loading..</h2>  : (
     <div className='row'>
      <div className='col-md-5'>
        <h2>{room.name}</h2>
        <img src={ room?.imgurl?.length &&room?.imgurl[0]} className='image'></img>
      </div>

      <div className='col-md-5'>
        <div className='booking-details'>
        <b><h2>BOOKING DETAILS</h2></b>
        <hr/>
        <p>Name :{user.name}</p>
        <p>Check-in Date :{stdate}</p>
        <p>Check-out Date :{endate}</p>
        <p>Room-Type : </p>
        </div>

        <div className='amount-details'>
          <b><h2>AMOUNT</h2></b>
          <hr/>
          <p>Total Days : {days} nights</p>
          <p>Rent per Day :{room.rent}</p>
          <p>Total Amount : <b>${days}</b></p>
        </div>

        <div>
          <button className='btnpay' onClick={bookroom}>Pay Now </button>
        </div>
      </div>

     </div>)}
    

    </div>
    </>
  )
}

export default Bookingscreen