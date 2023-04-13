import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/adminhome.css';
import {AiOutlineLogout} from "react-icons/ai";

function AdminHome() {
    return (
    
        <div className='admin-body' >
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
              <Link to="/adminhome"> HOME</Link>
              </a>
            </li>
            <li className="nav-item">
           <a href="#" className="nav-link">
           <Link to="/dashboard">DASHBOARD</Link>
              </a>
            </li>
            <li className="nav-item">
           <a href="#" className="nav-link">
           <Link to="/management">PRODUCTS MANAGEMENT</Link>
              </a>
            </li>
            {/* <li className="nav-item">
           <a href="#" className="nav-link">
           <Link to="/medicine">PRODUCTS</Link>
              </a>
            </li> */}
            <li className="nav-item">
           <a href="#" className="nav-link">
           <Link to="/userdetails">USERS</Link>
              </a>
            </li>
          </ul>
          <li className="nav-item1">
           <a href="#" className="nav-link">
           <Link to="/"><AiOutlineLogout className='logout-icon'/></Link>
              </a>
            </li>
        </nav>
       


        </div>
    
      );
}

export default AdminHome