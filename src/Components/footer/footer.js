import React, { Component } from 'react';
import './footer.css';
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
                        {/* <Link to='/AboutUs'>About Us</Link> */}
                        About Us
                    </section>
                </div>
            </>
        )
    }
}

export default Footer;