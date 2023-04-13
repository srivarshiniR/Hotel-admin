import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import '../assets/management.css';
Axios.defaults.baseURL = 'http://localhost:5000';
// import { useParams } from 'react-router-dom';
function Management() {
//   const { userId } = useParams()
  const [data, setData] = useState([])
//api to view medicine:
  const med = async () => {
    try {
      let result=await Axios.get("http://localhost:5000/api/medicine/getallmedicine" )
      console.log("result=",result)
      setData(result.data.getallmedicine)
    } catch (err) {
      console.error(err);
    }
  };
  




  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      const response = await Axios.delete(`/api/delete/deleteProduct/${id}`);
      if (response.status === 200) {
        med(); // Refresh the product list
      }
    }
  };

  useEffect(() => {
    med();
  }, []);



  return (
    <>
      <div className="medicine-tab">
        <div className='icn'>
             <Link to="/adminhome"> <AiOutlineHome className="home-icon"/></Link></div>
            
             <div className='text-med'>
              <h1>PRODUCTS MANAGEMENT</h1></div>
              </div><br />
      <div className='table1'>
        <table style={{ width: 600 }}>
          <tr>
            <th style={{ padding: " 0 50px" }}>Name</th>
            <th style={{ width: "100px" }}>Picture</th>
            <th style={{ width: "100px" }}>Cost</th>
            <th >Category</th>
            <th >Mfg_Date</th>
            <th >Exp_Date</th>
            <th style={{ width: "100px" }}>Availability</th>
            <th style={{ width: "100px" }}>Remove</th>
          </tr>
          {data.map(i => {
            return (
              <tr>
                <td>{i.drugName}</td>
                <td><img src={i.image} style={{width: "70px"}}/></td>
                <td>{i.price}</td>
                <td>{i.category}</td>
                <td>{i.manufacturingDate}</td>
                <td>{i.expiryDate}</td>
                <td>{i.stock}</td>
                <td><button className='DeleteProduct' onClick={()=>handleDelete(i._id)}>Delete</button></td>
              </tr>
             
            )
          })}

        </table>
        <Link to="/add"><button className='addProduct' >Add New Medicine</button></Link>

      </div>
    </>

  )
}

export default Management