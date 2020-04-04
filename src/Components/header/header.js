import React, { Component } from 'react';
import './Header.css';
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
                        <Link to='/'>Home Page</Link>
                    </section>
                    <section> 
                        <Link to='/about'>About Us</Link>
                    </section>
                    <section> 
                        <Link to='/add-location'>Add Location</Link>
                    </section>
                </div>
            </>
        )
    }
}

export default Header;