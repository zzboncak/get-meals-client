import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <h2 className="popup__location-title">{this.props.locationName}</h2>
                <p className="popus__location-address">{this.props.address}</p>
                <p className="popus__location-description">{this.props.description}</p>
                <p className="popus__location-hours">{this.props.hours}</p>
            </div>
        )
    }
}

export default Popup;