import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    handleUser();
  }, []);

  function handleUser() {

    axios
      .post("http://localhost:5003/userData", {
        token: window.localStorage.getItem("token"),
      })
      .then((data) => {
        console.log(data.data.data.email, "userdata");
        setUser(data.data.data);
      });
  }

  function logout() {

    axios.put("http://localhost:5003/userData", {
      token: window.localStorage.removeItem("token"),
    });
  }

  return (

    <div className="user-body">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Royal Inn
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {user ? (
                <>

                {/* profile for user */}

                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fa-solid fa-user fa-fade fa-2xs">{user.name}</i>{" "}
                      {/* font-awesom classname for user icon */}
                    </button>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Bookings
                      </a>
                      <Link to="/login">
                        <a class="dropdown-item" href="#" onClick={logout}>
                          Logout
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <a class="nav-link active" href="/home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/register">
                      Register
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
