import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapGoogle = withScriptjs(
    withGoogleMap(props => {
        return (
            <>
                <GoogleMap
                    defaultZoom={4}
                    defaultCenter={{ lat: 37.0902, lng: -95.7129 }} >


                </GoogleMap>
                

                {props.locations.map(coordinates => (
                    <Marker 
                        key={coordinates.id}
                        position={{
                            lat: coordinates.location_latitude,
                            lng: coordinates.location_longitude
                        }}
                    />
                ))}
            </>
        )
    })
)

export default MapGoogle