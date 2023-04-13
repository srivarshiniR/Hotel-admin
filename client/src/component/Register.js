import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../component/register.css";
import Registerimg from "../assets/images/register.jpeg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    address: "",
    aadhar: "",
  });
  const [registerStatus, setregisterStatus] = useState("");
  const [errors, setErrors] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    //setErrors(validateForm(formData)); validaiton on the go
  };

  // Validation

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.number.trim()) {
      errors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      errors.number = "Invalid phone number format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!formData.aadhar) {
      errors.aadhar = "aadharis required";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    return errors;
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    setErrors(validateForm(formData));
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.number == "" ||
      formData.password === "" ||
      formData.aadhar === "" ||
      formData.address == ""
    )
      alert("fill the details");
    else {
      console.log("if");
      Axios.post("http://localhost:5005/register", {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        password: formData.password,
        aadhar: formData.aadhar,
        address: formData.address,
      }).then((response) => {
        if (response.data.data=='User already Exists!!') {
         
          console.log(response.data)
          alert("User exist")
        } else {
          setregisterStatus(response.data.message);
          console.log(response.data.message)
        }
      });
    }
  };

  return (

    < div className="full-page">
      <div className="form-content">
       <div className="form-pic">
          <img src={Registerimg}></img></div>
        <div className="form-box">
          <form>
            <input
              type="text"
              id="name"
              name="name"
              className="input-field"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />

            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <input
              type="tel"
              id="number"
              name="number"
              className="input-field"
              placeholder="Contact Number"
              value={formData.number}
              onChange={handleInputChange}
            />
            {errors.number && <span className="error">{errors.number}</span>}

            <input
              type="text"
              id="aadhar"
              name="aadhar"
              className="input-field"
              placeholder="Aadhar"
              value={formData.aadhar}
              onChange={handleInputChange}
            />
            {errors.aadhar && <span className="error">{errors.aadhar}</span>}

            <textarea
              id="address"
              name="address"
              className="input-field"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}

            <button className="submit-btn" type="submit" onClick={submit}>
              Register
            </button>
            <Link to="/login"></Link>
            <br></br>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>

            <h2
              style={{
                color: "green",
                fontSize: "15px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {registerStatus}
            </h2>

          </form>

        </div>
      </div>

    </div>


    
       

  
       
  );
};

export default Register;
