import React from 'react';
import "../Catagore/Admin.css"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid d-flex">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav-light">

            <br/>
            <li className="nav-item">
               <NavLink  className={(active)=>active ? "nav-link":"nav-link qizil"}  to="/admin">
                Dashboard 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/hisobot">
                Hisobot
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
