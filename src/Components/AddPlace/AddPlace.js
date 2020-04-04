import React from 'react'
import './AddPage.css'

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                isTouched: false
            },
            placeAddress: {
                value: "",
                isTouched: false
            },
            city: {
                value: "",
                isTouched: false
            },
            usState: {
                value: "",
                isTouched: false
            },
        }
    }

    generatePlaceId = () => {
        let placeId = Math.ceil(Math.random()*1000000);
        return placeId;
    }

    handleSubmitAddPlace = (e) => {
        e.preventDefault();
        let newPlace = {
            id: this.generatePlaceId().toString(),
            name: this.state.name,
            modified: new Date(),
            content: this.state.placeAddress
        };
    }
    
    onNameChange = (newName) => {
        this.setState({
            name: newName
        });
    }

    onAddressChange = (newAddress) => {
        this.setState({
            placeAddress: newAddress
        });
    }

    onCityChange = (newCity) => {
        this.setState({
            city: newCity
        });
    }

    onUsStateChange = (newState) => {
        this.setState({
            usState: newState
        });
    }

    validatePlaceName() {
        if(this.state.name.length < 1){
            return "You must enter a location name";
        }
    }

    validatePlaceAddress() {
        if (this.state.placeAddress === "") {
            return "Your address needs content";
        }
    }

    validateCity() {
        if (this.state.city === "") {
            return "You need to enter a City"
        }
    }

    validateUsState() {
        if (this.state.usState === "") {
            return "You need to enter a State"
        }
    }

    render() {

        const nameError = this.validatePlaceName();
        const addressError = this.validatePlaceAddress();
        const cityError = this.validateCity();
        const stateError = this.validateUsState();

        return (
            <div className="add-location-form">
                <form onSubmit={e => this.handleSubmitAddPlace(e)}>
                    <label htmlFor="add-location">Location name: </label>
                    <input 
                        type="text" 
                        placeholder="name of location" 
                        name="add-location" 
                        value={this.state.name.value} 
                        onChange={e => this.onNameChange(e.target.value)} 
                    />
                    <br />
                    {this.state.name.isTouched && nameError}
                    <br />

                    <label htmlFor='place-address'>Location: </label>
                    <textarea 
                        name='place-address' 
                        id='place-address' 
                        value={this.state.placeAddress.value} 
                        onChange={e => this.onAddressChange(e.target.value)} 
                    />
                    <br />
                    {this.state.placeAddress.isTouched && addressError}
                    <br />

                    <label htmlFor='city-location'>City: </label>
                    <textarea 
                        name='city-location' 
                        id='city-location' 
                        value={this.state.city.value} 
                        onChange={e => this.onCityChange(e.target.value)} 
                    />
                    <br />
                    {this.state.city.isTouched && cityError}
                    <br />

                    <label htmlFor='us-state'>State: </label>
                    <textarea 
                        name='us-state' 
                        id='us-state' 
                        value={this.state.usState.value} 
                        onChange={e => this.onUsStateChange(e.target.value)} 
                    />
                    <br />
                    {this.state.usState.isTouched && stateError}
                    <br />

                    <button onClick={this.context.addNewPlace}
                        type="submit" 
                        disabled={
                            this.validatePlaceName() ||
                            this.validatePlaceAddress() ||
                            this.validateCity() ||
                            this.validateUsState()
                    }>
                        Add this location
                    </button>
                </form>
                <button onClick={this.context.togglePlaceFormView}>Go Back</button>
            </div>
        );
    }
}

AddPlace.propTypes ={
    addNewPlace: PropTypes.func.isRequired,
    togglePlaceFormView: PropTypes.func.isRequired
}
    

export default AddPage