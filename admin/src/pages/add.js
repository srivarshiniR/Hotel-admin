import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import {AiOutlineHome} from 'react-icons/ai';

import '../assets/add.css';

function Add() {
  const [registerStatus, setregisterStatus] = useState("");
  const [variable,setVariable]= useState({
    drugName:"",
    price:"",
    image:"",
    category:"",
    manufacturingDate:"",
    expiryDate:"",
    stock:""
  })
  const handleChange = (e)=>{
   const {name,value}=e.target
   setVariable({...variable,[name]:value});
  }
   const add = (e) => {
    e.preventDefault();
    console.log("connected");
    if(variable.drugName=="" || variable.price=="" ||variable.image=="" ||variable.category=="" 
    ||variable.manufacturingDate=="" || variable.expiryDate=="" || variable.stock==""){
        alert("fill the details")
    }
   else{ Axios.post("http://localhost:5000/medicine",{
        drugName:variable.drugName,
        price:variable.price,
        image:variable.image,
        category:variable.category,
        manufacturingDate:variable.manufacturingDate,
        expiryDate:variable.expiryDate,
        stock:variable.stock

    }).then((response) => {
        if(response.data.message){
            setregisterStatus(response.data.message);
            console.log(response.data.message)
        }else{
            setregisterStatus("DETAILS UPDATED SUCCESSFULLY");
        }
        
     });
    }
}
   
  return (
    <div className='adminManage'>
    <nav className="navbarM">
    <ul className="navbar-nav">
       
      <li className="nav-item">
        <Link to="/adminhome"> <AiOutlineHome className="home-icon"/></Link>
      </li>
    
      </ul>
      <div className='head'>
      <h1>Products Management</h1>
      </div>
      </nav>
      <div className='add-medicine-container'>
        <h3>NEW MEDICNE DETAILS</h3>
    <form>
        <div className='add-medicine'>
        <input type ="text"  name="drugName" value={variable.drugName} placeholder="Name of the medicine" onChange={handleChange}></input>
       <br/><br/>
       <input type ="text"  name="price" value={variable.price} placeholder="Price of the medicine" onChange={handleChange}></input>
       <br/><br/>
       <input type ="text"  name="image" value={variable.image} placeholder="insert the image" onChange={handleChange}></input>
       <br/><br/>
       <input type ="text"  name="category" value={variable.category} placeholder="Category of the medicine" onChange={handleChange}></input>
       <br/><br/>
       <label for="manufacturingDate">Manufactured Date</label><br></br>
       <input type="date" name="manufacturingDate"  value={variable.manufacturingDate}  onChange={handleChange}/>
        <br /><br/> 
        <label for="expiryDate">Expiry Date</label><br></br>
        <input type="date" name="expiryDate"  value={variable.expiryDate} onChange={handleChange}/>
        <br /><br/> 
        <label for="stock">Availability</label><br></br>
        <input type="text" name="stock"  value={variable.stock} onChange={handleChange}/>
        <br /><br/> 
       
        <button className="medicine-btn" onClick={add}>Add Item</button>
        </div>
        <h2 style={{color:'green',fontSize:'15px', textAlign:'center', marginTop:'20px'}}>{registerStatus}</h2>
    </form><br/>
  
</div>
  




      </div>
  )
}

export default Add