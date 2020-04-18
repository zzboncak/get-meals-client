import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import About from './Components/About/About'
import AddPlace from './Components/AddPlace/AddPlace';
import GetMealsContext from './GetMealsContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      locations: [],
      latlonArray: [40.7127753, -74.0059728]
    }
  }

  locationFetch = () => {
    fetch('https://frozen-everglades-23155.herokuapp.com/api/locations')
      .then(res => res.json())
      .then(locations => {
          this.setState({ locations })
      })
  }

  //formatting query params
  formatQueryParams = (params) => {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
  }

  // get the lat and lng values from the place ID
  getLatlng = (placeIdInput) => {
    //potential firewall situation with using a work laptop. Still need to determine the why
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const searchUrl = 'https://maps.googleapis.com/maps/api/geocode/json'

    const params = {
        place_id: placeIdInput,
        key: process.env.REACT_APP_GEOCODE_KEY
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
            let latlonArray = [locationLat, locationLon];
            this.setState({
              latlonArray
            })
        })
        .catch(err => {
            console.log('Error ocurred')
        });
  }

  // get the place ID from the user input address
  getGooglePlaceID = (userInput) => {
    //potential firewall situation with using a work laptop. Still need to determine the why
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    const searchUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'
    
    const params = {
        input: userInput,
        key: process.env.REACT_APP_GEOCODE_KEY
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
            let googleAddressPlaceID = responseJson.predictions[0].place_id;
            this.getLatlng(googleAddressPlaceID);
        })
        .catch(err => {
            console.log(`Error ocurred getting place ID`);
        });
  }

  render() {
    const contextValue = {
      locations: this.state.locations,
      latlonArray: this.state.latlonArray,
      locationFetch: this.locationFetch,
      formatQueryParams: this.formatQueryParams,
      getLatlng: this.getLatlng,
      getGooglePlaceID: this.getGooglePlaceID,
    }

    return (
      <div className="App">
        <GetMealsContext.Provider value={contextValue}>
          <header className='app__header'>
            <Header />
          </header>
          <main className='app__main'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/add-location' component={AddPlace} />
          </main>
          <footer className='app__footer'>
            <Footer />
          </footer>
        </GetMealsContext.Provider>
      </div>
    );
  }
}

export default App;
