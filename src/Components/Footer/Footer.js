import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <>
                <div className="footer-container">
                    <section> 
                        Thinkful Fullstack Capstone Project                  
                    </section>
                    <section> 
                        <Link to='/About' style={{ textDecoration: 'none' }}>About Us</Link>
                    </section>
                </div>
            </>
        )
    }
}

export default Footer;