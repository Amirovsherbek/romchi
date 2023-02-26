import React from 'react'
import "./sidebar.scss"

//img
import houseIcon  from "../../assets/Images/house.svg"
import buildingIcon  from "../../assets/Images/building.svg"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {



  return (
    <nav className="wrapper " style={{width:'22%',height:'80%'}}>
    <ul className="d-flex flex-column">
      <li className="mt-3 d-flex align-items-center">
        <img className='me-3' src={houseIcon} alt="dashboard" />
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active text-white fs-4" : "text-white fs-4")}>Dashboard</NavLink>
      </li>
      <li className="mt-3 d-flex align-items-center">
        <img className='me-3' src={buildingIcon} alt="korxonalar" />
        <NavLink   to={"/korxonalar"} className={({isActive}) => (isActive ? "active text-white fs-4" : "text-white fs-4")}>Korxonalar</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Sidebar