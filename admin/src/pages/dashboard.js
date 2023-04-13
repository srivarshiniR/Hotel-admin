import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/dashboard.css';

function Dashboard() {
  return (
    <div>
    <nav className="navbarA">
    <ul className="navbar-nav">
       
      <li className="nav-item">
        <a href="#" className="nav-link">
        <Link to="/adminhome"> Home</Link>
        </a>
      </li>
    
      </ul>
      <div className='head'>
      <h1>DASHBOARD</h1>
      </div>
      </nav>

      </div>
  )
}

export default Dashboard