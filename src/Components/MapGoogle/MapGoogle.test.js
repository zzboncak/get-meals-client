import React from 'react';
import ReactDOM from 'react-dom';
import MapGoogle from './MapGoogle';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

describe(`Map component`, () => {
  const props = {
    locations: [],
  };

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MapGoogle 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
        ${process.env.REACT_APP_GOOGLE_KEY}
        `}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        {...props} />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <MapGoogle 
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
              ${process.env.REACT_APP_GOOGLE_KEY}
              `}
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "400px" }} />}
              mapElement={<div style={{ height: "100%" }} />}
              {...props} />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})