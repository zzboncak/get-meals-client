import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Popup from '../Popup/Popup';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>I am the home page
                <section className="main-view">
                    <Sidebar />
                    <div className="map">Placeholder for Map</div>
                </section>
            </div>
        )
    }
}

export default HomePage;