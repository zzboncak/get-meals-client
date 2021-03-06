import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import menu from '../Util/menuHamburger.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerMenuDisplay: 'none'
        }
    }

    menuDisplayChange = () => {
        let desiredDisplay = (this.state.headerMenuDisplay === 'none') ? 'block' : 'none';
        this.setState({
            headerMenuDisplay: desiredDisplay
        })
    }

    render() {
        return(
            <>
                <div className="header-section__links">
                    <div>
                        <section className="header-section__link-homepage">
                        {/* Placeholder for logo */}
                        <Link to='/' style={{ textDecoration: 'none' }}>Get Meals</Link>                
                        </section>
                    </div>
                    <div className='header-section__nav'>
                        <section className="header-section__link header-fullscreen">
                            <Link to='/' style={{ textDecoration: 'none' }}>Home Page</Link>
                        </section>
                        <section className="header-section__link header-fullscreen"> 
                            <Link to='/about' style={{ textDecoration: 'none' }}>About Us</Link>
                        </section>
                        <section className="header-section__link header-fullscreen"> 
                            <Link to='/add-location' style={{ textDecoration: 'none' }}>Add Location</Link>
                        </section>
                        <section className="header-section__button header-mobile" onClick={this.menuDisplayChange}> 
                            {/* <img className="header-section__button-img" src={menu} alt="menu button"/> */}
                        </section>
                        
                    </div>
                </div>
                <div className="header-mobile__links" style={{display:this.state.headerMenuDisplay}}>
                    <ul className="header-mobile__list">
                        <li>
                            <Link to='/'  className='header-mobile__home-page'>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/about' className='heaer-mobile__about-us'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/add-location' className='header-mobile__add-location-cta'>Add Location</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Header;