import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../Popup/Popup';
import './HomePage.css';
import mapSample from '../Util/map.png';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <section className="main-view">
                    <Sidebar />
                    <div className="map">
                        <img src={mapSample} alt="map sample"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;