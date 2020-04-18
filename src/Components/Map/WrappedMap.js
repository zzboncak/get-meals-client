import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapGoogle = withScriptjs(
    withGoogleMap(props => {
        const [selectedLocation, setSelectedLocation] = useState(null)
        return (

            <GoogleMap
                defaultZoom={4}
                defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
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
                            <div> {selectedLocation.location_name} </div>
                            <div> can you see this? </div>
                        </>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    })
)

export default MapGoogle