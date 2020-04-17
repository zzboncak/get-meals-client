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
            latlonArray: [40.7127753, -74.0059728]
        }
    }

    componentDidMount() {
        fetch('https://frozen-everglades-23155.herokuapp.com/api/locations')

        .then(res => res.json())
        .then(locations => {
            this.setState({ locations })
        })

    }

    updateLatLon = (inputArray) => {
        this.setState({
            latlonArray: inputArray
        })
    }

    
    render() {
        
        return (
            <div>
                <section className="main-view home-page__section">
                    <Sidebar updateLatLon={this.updateLatLon}/>
                    <div className="map">
                        <Maps 
                            locations={this.state.locations}
                            latlonArray={this.state.latlonArray}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;