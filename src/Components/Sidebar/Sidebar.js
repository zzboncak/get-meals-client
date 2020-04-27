import React, { Component } from 'react';
import "./Sidebar.css";
import GetMealsContext from '../../GetMealsContext';

class Sidebar extends Component {

    static contextType = GetMealsContext;

    handleSubmit = e => {
        e.preventDefault()
        let {address} = e.target;
        this.context.getGooglePlaceID(address.value);
    }
    
    render() {
        return(
            <>
                <div className="sidebar-container">
                    <form className="sidebar-form" onSubmit={this.handleSubmit}>
                        <div className="sidebar-form__search">
                            <label htmlFor="sidebar-form__label">
                                Search by address, city, or zip code:
                            </label>
                            <input className="sidebar-form__input" type="text" placeholder="New York, NY" id="address" required />
                        </div>

                        <div className="sidebar-form__button-container">
                        <button className="sidebar-form__submit-button" type="submit"> Search</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Sidebar