import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { NavLink } from "react-router-dom";
import './Toolbar.css';
import Logo from './Logo.png'


const toolbar = props => (
  <header className="toolbar">
  <nav className="toolbar_navigation">
  <div className="toolbar_toggle-button">
  <DrawerToggleButton click={props.drawerClickHandler} />
  </div>
  <img
    src= {Logo}
    alt="logo"
    className="logo-image" />
  {/* <div className="toolbar_logo"><a href="/">GET MEALS</a></div> */}
  <div className="spacer" />
  <div className="toolbar_navigation-items">
  <ul>
  
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/add-location">Add Location</NavLink></li>
  <li><NavLink to="/About">About Us</NavLink></li>
  </ul></div>
  </nav>
    </header>
);

export default toolbar;