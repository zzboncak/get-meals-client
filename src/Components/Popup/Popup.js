import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <h2 className="location-title">{this.props.locationName}</h2>
                <p className="location-address">{this.props.address}</p>
                <p className="location-description">{this.props.description}</p>
                <p className="location-hours">{this.props.hours}</p>
            </div>
        )
    }
}

export default Popup;