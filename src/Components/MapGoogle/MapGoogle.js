import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapGoogle = withScriptjs(
    withGoogleMap(props => {
        const [selectedLocation, setSelectedLocation] = useState(null)
        return (

            <GoogleMap
                defaultZoom={9}
                defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
                center={{ lat: props.latlonArray[0], lng: props.latlonArray[1] }}
            >

                {props.locations.map(coordinates => (

                    <Marker
                        key={coordinates.id}
                        position={{
                            lat: coordinates.location_latitude,
                            lng: coordinates.location_longitude
                        }}
                        onClick={() => {
                            setSelectedLocation(coordinates);

                        }}

                    />
                ))}

                {selectedLocation && (
                    <InfoWindow
                        position={{
                            lat: selectedLocation.location_latitude,
                            lng: selectedLocation.location_longitude
                        }}
                        onCloseClick={() => {
                            setSelectedLocation(null);
                        }}
                    >
                        <>
                            <h3> {selectedLocation.location_name} </h3>
                            <div> Hours: {selectedLocation.open_hour} - {selectedLocation.close_hour} </div>
                            <div> Address: {`${selectedLocation.street_address} ${selectedLocation.city} ${selectedLocation.state} ${selectedLocation.zip}`} </div>
                            <div> Website: <a href={selectedLocation.website}>{selectedLocation.website}</a> </div>
                            <div> Description: {selectedLocation.location_description} </div>

                        </>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    })
)

export default MapGoogle