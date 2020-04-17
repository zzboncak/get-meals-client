import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../Popup/Popup';
import './HomePage.css';
import mapSample from '../Util/map.png';
import Maps from '../Map/Map'



class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            locations: [],
        }
    }

    componentDidMount() {
        fetch('https://frozen-everglades-23155.herokuapp.com/api/locations')

        .then(res => res.json())
        .then(locations => {
            this.setState({ locations })
        })

    }

    
    render() {
        
        return (
            <div>
                <section className="main-view home-page__section">
                    <Sidebar updateLatLon={this.updateLatLon}/>
                    <div className="map">
                        <Maps locations={this.state.locations}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;