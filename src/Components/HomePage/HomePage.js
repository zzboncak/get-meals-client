import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './HomePage.css';
import mapSample from '../Util/map.png';
import Maps from '../Map/Map';
import GetMealsContext from '../../GetMealsContext';


class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    static contextType = GetMealsContext;

    componentDidMount() {
        this.context.locationFetch();
    }

    updateLatLon = (inputArray) => {
        this.setState({
            latlonArray: inputArray
        })
    }

    render() {
        return (
            <div>
                <section className="main-view home-page__section">
                    <Sidebar/>
                    <div className="map">
                        <Maps 
                            locations={this.context.locations}
                            latlonArray={this.context.latlonArray}
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;