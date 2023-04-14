import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../component/login.css";
import Loginimg from "../assets/images/login.jpeg";

function Login() {
  const [loginStatus, setloginStatus] = useState("");
  const nav = useNavigate();
  const [variable, setVariable] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVariable({ ...variable, [name]: value });
  };
  const login = (e) => {
    e.preventDefault();
    if (variable.email == "" || variable.password == "") {
      alert("Please fill out the fields");
    } else {
      console.log("vv");
      Axios.post("http://localhost:5003/api/user/login", {
        email: variable.email,
        password: variable.password,
      }).then((response) => {
        if (response.data.message === "Invalid user and password") {
          setloginStatus("Invalid user and password");
        } else {
          console.log(response.data.token);
          window.localStorage.setItem("token", response.data.token); //setting a token
          
          //setloginStatus(response.data.message);
          nav("/home");
        }
      });
    }
  };

  return (
    <div className="full-page">
      <div className="login-content">
        <div className="form-login">
          <form id="login" className="input-group-login">
            <input
              type="email"
              className="input-field"
              placeholder="Email Id"
              name="email"
              value={variable.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              name="password"
              value={variable.password}
              onChange={handleChange}
              required
            /><br></br><br></br><br></br>
            <button type="submit" className="submit-btn" onClick={login}>
              Log in
            </button>
          </form>
        </div>
        <div className="login-image">
          <img src={Loginimg}></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
