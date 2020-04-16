import React from 'react'
import MapGoogle from './WrappedMap'
import './Map.css';


export default function Maps(props) {

  return (
    <div className="mapContainer">
      {/** The css must be explicit for these cases! */}
      <MapGoogle
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
        ${process.env.REACT_APP_GOOGLE_KEY}
        `}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        locations={props.locations}

      />
    </div>
  )
}