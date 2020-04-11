import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import './Map.css';



function Map() {
  return (

    // default view for map on first load, (want to change to geolocation in future)
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }} >


      {/** Using example for testing a marker, (update to map through database in json form) */}
      <Marker
        key={1}
        position={{
          lat: 47.6062,
          lng: -122.3321
        }}
      />


    </GoogleMap>
  )
}

//required to get the google maps to display on page
const WrappedMap = withScriptjs(withGoogleMap(Map))


export default function Maps() {
  return (
    <div className="mapContainer">
      {/** The css must be explicit for these cases! */}
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
        ${process.env.REACT_APP_GOOGLE_KEY}
        `}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}

      />
    </div>
  )
}