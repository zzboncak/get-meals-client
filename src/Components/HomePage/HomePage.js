import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../Popup/Popup';
import './HomePage.css';
import mapSample from '../Util/map.png';
import Maps from '../Map/Map'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <section className="main-view">
                    <Sidebar />
                    <div className="map">
                        <Maps />
                        {/* <img className="map" src={mapSample} alt="map sample"/> */}
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;