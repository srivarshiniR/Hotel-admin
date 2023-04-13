import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import Axios  from 'axios';
import '../assets/adminLogin.css';
const AdminLogin=()=>{
   
    const [loginStatus,setloginStatus]=useState("")
    const navi = useNavigate();
    const[variable,setVariable]=useState({
      email:"",
      password:"",
    })
    const handleChange = e=>{
      const {name,value}=e.target
      setVariable({...variable,[name]:value});
    }
    const login = (e) =>{
      e.preventDefault();
      if(variable.email == "" || variable.password == ""){
          alert("Please fill out the fields")
      }
        else{
        Axios.post("http://localhost:5000/adminlogin", {
            email: variable.email,
           password: variable.password,
           
        }).then((res)=> {

        console.log(res);
          console.log(res.data);
          if(res.data.isAdmin ===true) {
         console.log("ans",res.data.isAdmin);         
  alert(" Admin Login Successfully");         
    window.open('/adminhome', "_self");
  }         
          else if(res.data.message ==="Invalid email or password"){
           alert("Login failed")
          }         
          else if(res.data.message ==="Logged in successfully"){
          alert(" Login Successfully");
           window.open('/homepage', "_self");
        }        
          })        
          .catch((err) => {       
          console.log(err);
          }
          );
      }
    }
  
    

return(
  <div className='form-login'>
  
  <div className='container-login'>
     
    <div className='container-1'>
      <img src ="https://images.unsplash.com/photo-1583088580067-16d1109aeacb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" style={{width:"450px"}} ></img>
    </div>
    <div className='form'>
    <form >
     
        <input type="email" name="email" placeholder="enter your mail" value={variable.email} onChange={handleChange} />
      
      <br />
   
        <input type="password" name="password" placeholder="enter your password" value={variable.password} onChange={handleChange} />
     
      <br />
      <button type="submit" onClick={login}>Login</button>
    </form></div>
    <h2 style={{color:'red',fontSize:'15px', textAlign:'center', marginTop:'20px'}}>{loginStatus}</h2>
    </div>
    </div>
 
  
);
};

export default AdminLogin

