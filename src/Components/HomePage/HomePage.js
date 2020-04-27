import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './HomePage.css';
import mapSample from '../Util/map.png';
import Maps from '../Map/Map';
import GetMealsContext from '../../GetMealsContext';


class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    static contextType = GetMealsContext;

    componentDidMount() {
        this.context.locationFetch();
    }

    updateLatLon = (inputArray) => {
        this.setState({
            latlonArray: inputArray
        })
    }

    render() {
        console.log(this.context.locations);
        return (
            <div>
                <section className="app-description">
                    <h1 className="hero-header">Welcome to Get Meals</h1>
                    <p>A platform to find and share locations serving food and meals to those in need.</p>
                    <p>Enter your location on the left to find places serving free food near you. Or, click on the "Add Location" in the nav bar above to report a place that you know is serving free food.</p>
                    <p>Let's all do our part in letting no one go hungry.</p>
                </section>
                <section className="main-view home-page__section">
                    <Sidebar/>
                    <div className="map">
                        <Maps 
                            locations={this.context.locations}
                            latlonArray={this.context.latlonArray}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;