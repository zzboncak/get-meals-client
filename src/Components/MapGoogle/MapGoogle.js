import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"


const MapGoogle = withScriptjs(
    withGoogleMap(props => {
        const [selectedLocation, setSelectedLocation] = useState(null)
        return (

            <GoogleMap
                defaultZoom={9}
                defaultCenter={{ lat: 37.0902, lng: -95.7129 }} //map centere with inital laod
                center={{ lat: props.latlonArray[0], lng: props.latlonArray[1] }} //centers onto searched location
            >

                {props.locations.map(coordinates => (
                    //maps through database to create markers for each location
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
                    <InfoWindow //simple popup window on each marker that shows information about location using information from database
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
                            <div> Location Type: {selectedLocation.location_type} </div>

                        </>
                    </InfoWindow>
                )}
            </GoogleMap>
        )
    })
)

export default MapGoogle