import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MapGoogle = withScriptjs(
    withGoogleMap(props => {
        return (
            <>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: props.latlonArray[0], lng: props.latlonArray[1] }}
                    center={{ lat: props.latlonArray[0], lng: props.latlonArray[1] }}
                >
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