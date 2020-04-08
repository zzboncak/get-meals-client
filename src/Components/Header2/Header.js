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
                <div className="header-container">
                    <section>
                        {/* Placeholder for logo */}
                        <Link to='/'>Get Meals</Link>                
                    </section>
                    <section className="header-fullscreen">
                        <Link to='/'>Home Page</Link>
                    </section>
                    <section className="header-fullscreen"> 
                        <Link to='/about'>About Us</Link>
                    </section>
                    <section className="header-fullscreen"> 
                        <Link to='/add-location'>Add Location</Link>
                    </section>
                    <section className="header-mobile" onClick={this.menuDisplayChange}> 
                        <img className="header-mobile" src={menu} alt="menu button"/>
                    </section>
                </div>
                <div className="header-mobile" style={{display:this.state.headerMenuDisplay}}>
                    <ul className="header-mobile">
                        <li>
                            <Link to='/'>Home Page</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/add-location'>Add Location</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Header;