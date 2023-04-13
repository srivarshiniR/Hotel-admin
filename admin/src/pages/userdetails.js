import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import '../assets/user.css';

function Userdetails() {

  const [data, setData] = useState([])

  const user = async () => {
    try {
      let result=await Axios.get("http://localhost:5000/api/user/getallusers" )
      console.log("result=",result)
      setData(result.data.getallusers)
    } catch (err) {
      console.error(err);
    }
  };
  //  fetchPost();
  useEffect(()=> {
    user();
  }, [])
  return (
    <>
      <div className="user-tab">
             <Link to="/adminhome"> <AiOutlineHome className="home-icon"/></Link>
              <h1>USER DETAILS</h1></div><br />
      <div className='table1'>
        <table style={{ width: 600 }}>
          <tr>
            <th>NAME</th>
            <th>MAIL ID</th>
            <th>MUNBER</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>ADDRESS</th>
          </tr>
          {data.map(i => {
            return (
              <tr>
                <td>{i.username}</td>
                <td>{i.email}</td>
                <td>{i.mobileNumber}</td>
                <td>{i.age}</td>
                <td>{i.gender}</td>
                <td>{i.address}</td>

              </tr>
            )
          })}

        </table>

      </div>
    </>

  )
}

export default Userdetails