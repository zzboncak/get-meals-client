import React from 'react';
import { NavLink } from "react-router-dom";
import './SideDrawer.css';


const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><NavLink to="/" onClick={props.drawerClickHandler}>Home</NavLink></li>
        <li><NavLink to="/add-location" onClick={props.drawerClickHandler}>Add Location</NavLink></li>
        <li><NavLink to="/About" onClick={props.drawerClickHandler}>About Us</NavLink></li>
      </ul>
    </nav>
);
};

export default sideDrawer;