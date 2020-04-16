import React, { Component } from 'react'
import "./Sidebar.css"


class Sidebar extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleSubmit = e => {
        e.preventDefault()
        let {address, radius } = e.target;
        console.log(address.value, radius.value);
        this.getGooglePlaceID(address.value);
    }
    
    //formatting query params
    formatQueryParams = (params) => {
        const queryItems = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
    }

    // get the lat and lng values from the place ID
    getLatlng = (placeIdInput) => {
        console.log('start get lat lng function');
        //potential firewall situation with using a work laptop. Still need to determine the why
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const searchUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
    
        const params = {
            place_id: placeIdInput,
            key: 'AIzaSyAbECAb48REfQsdVoXir49X8MEo7PYieSs'
        };
    
        const queryString = this.formatQueryParams(params)
        const url = searchUrl + '?' + queryString;
        
        fetch(proxyurl + url)
        .then(response => {
            if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson => {
                let locationLat = responseJson.results[0].geometry.location.lat;
                let locationLon = responseJson.results[0].geometry.location.lng;
                console.log(`top result lat: ${locationLat} and lon: ${locationLon}`);
                let latlonArray = [locationLat, locationLon];
                this.props.updateLatLon(latlonArray);
            })
            .catch(err => {
                console.log('Error ocurred')
            });
    }

    // get the place ID from the user input address
    getGooglePlaceID = (userInput) => {
        console.log('start get google place ID function');
        //potential firewall situation with using a work laptop. Still need to determine the why
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        const searchUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'
        
        const params = {
            input: userInput,
            key: 'AIzaSyAbECAb48REfQsdVoXir49X8MEo7PYieSs'
        };
    
        const queryString = this.formatQueryParams(params)
        const url = searchUrl + '?' + queryString;
    
        fetch(proxyurl + url)
        .then(response => {
                if (response.ok) {
                    console.log('response ok')
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson => {
                console.log(responseJson);
                console.log(responseJson.predictions[0].place_id);
                let googleAddressPlaceID = responseJson.predictions[0].place_id;
                this.getLatlng(googleAddressPlaceID);
            })
            .catch(err => {
                console.log(`Error ocurred getting place ID`);
            });
    }
    
    render() {
        return(
            <>
                <div className="sidebar-container">
                    <form className="sidebar-form" onSubmit={this.handleSubmit}>
                        <div className="sidebar-form__search">
                            <label htmlFor="sidebar-form__label">
                                Search by address:
                            </label>
                            <input className="sidebar-form__input" type="text" placeholder="seattle" id="address" required />
                        </div>

                        <div className="sidebar-form__results-within">
                            <label htmlFor="sidebar-form__results-within-label">
                                Show Results Within (Miles)
                            </label>
                            <input className="sidebar-form__results-with-input" type="text" placeholder="10" id="radius" />
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