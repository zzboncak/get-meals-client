import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/">Add Location</a></li>
  <li><a href="/">Get Meals</a></li>
  <li><a href="/">About Us</a></li>
</ul>
</nav>);
};
export default sideDrawer;