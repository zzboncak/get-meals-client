import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../Popup/Popup';
import './HomePage.css';
import mapSample from '../Util/map.png';

class HomePage extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <section className="main-view home-page__section">
                    <Sidebar />
                    <div className="home-page__map">
                        <img className="map" src={mapSample} alt="map sample"/>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;