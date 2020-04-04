import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <>
                <div className="header-container">
                    <section>
                        {/* Placeholder for logo */}
                        GetMealz                   
                    </section>
                    <section>
                        {/* <Link to='/'>Home Page</Link>*/}
                        Home Page
                    </section>
                    <section> 
                        {/* <Link to='/AboutUs'>About Us</Link> */}
                        About Us
                    </section>
                    <section> 
                        {/* <Link to='/AddLocation'>Add Location</Link> */}
                        Add Location
                    </section>
                </div>
            </>
        )
    }
}

export default Header;