import React, { Component }  from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './Map.css'


class Maps extends Component {

    componentDidMount() {
        var map = new Map({
            view: new View({
              center: [0, 0],
              zoom: 1
            }),
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            target: "mapContainer"
          });
          
    }

    render () {
        return (
            <div className="mapContainer" id="mapContainer"> </div>
        )
    }


}

export default Maps