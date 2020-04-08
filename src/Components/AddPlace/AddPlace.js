import React from 'react'
import './AddPlace.css'

class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                isTouched: false
            },
            placeAddress: {
                value: '',
                isTouched: false
            },
            city: {
                value: '',
                isTouched: false
            },
            usState: {
                value: '',
                isTouched: false
            },
            hourOfOperation: {
                value: '',
                isTouched: false
            },
            typeOfFood: {
                value: '',
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
        let newName = {
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

    onHoursChange = (newHours) => {
        this.setState({
            hourOfOperation: newHours
        });
    }

    onTypeChange = (newFood) => {
        this.setState({
            typeOfFood: newFood
        });
    }

    validatePlaceName() {
        if(this.state.name.length < 1){
            return 'You must enter a location name';
        }
    }

    validatePlaceAddress() {
        if (this.state.placeAddress === '') {
            return 'Your address needs content';
        }
    }

    validateCity() {
        if (this.state.city === '') {
            return 'You need to enter a City'
        }
    }

    validateUsState() {
        if (this.state.usState === '') {
            return 'You need to enter a State'
        }
    }

    validateHoursOfOperation() {
        if (this.state.hourOfOperation === '') {
            return 'You must select hours of operation'
        }
    }

    validateTypeOfFood() {
        if (this.state.typeOfFood === '') {
            return 'You must select location type'
        }
    }

    render() {

        const nameError = this.validatePlaceName();
        const addressError = this.validatePlaceAddress();
        const cityError = this.validateCity();
        const stateError = this.validateUsState();
        const hoursError = this.validateHoursOfOperation();
        const typeError = this.validateTypeOfFood();

        return (
            <div className='add-location-form'>
                <form onSubmit={e => this.handleSubmitAddPlace(e)} className='place-form__start'>
                    <label htmlFor='add-location' className='place-form__location-name'>Location name: </label>
                    <input 
                        type='text' 
                        placeholder='name of location' 
                        name='add-location' 
                        value={this.state.name.value} 
                        className='place-form__location-input'
                        onChange={e => this.onNameChange(e.target.value)} 
                    />
                    <br />
                    {this.state.name.isTouched && nameError}
                    <br />

                    <label htmlFor='place-address' className='place-form__address'>Location: </label>
                    <textarea 
                        name='place-address' 
                        id='place-address' 
                        value={this.state.placeAddress.value} 
                        className='place-form__address-input'
                        onChange={e => this.onAddressChange(e.target.value)} 
                    />
                    <br />
                    {this.state.placeAddress.isTouched && addressError}
                    <br />

                    <label htmlFor='city-location' className='place-form__city'>City: </label>
                    <input 
                        name='city-location' 
                        id='city-location' 
                        value={this.state.city.value} 
                        className='place-form__city-input'
                        onChange={e => this.onCityChange(e.target.value)} 
                    />
                    <br />
                    {this.state.city.isTouched && cityError}
                    <br />

                    <label htmlFor='us-state' className='place-form__state'>State: </label>
                    <input
                        name='us-state' 
                        id='us-state' 
                        value={this.state.usState.value} 
                        className='place-form__state-input'
                        onChange={e => this.onUsStateChange(e.target.value)} 
                    />
                    <br />
                    {this.state.usState.isTouched && stateError}
                    <br />

                    <label htmlFor='hours-of-operation' className='place-form__hour-of-operation'>Hours of Operation:</label>
                    <br />
                    <label htmlFor='hours-start' className='place-form__open-hours'>Open:</label>
                    <select>
                        <option className='place-form__open-hour'>12:00AM</option>
                        <option className='place-form__open-hour'>12:30AM</option>
                        <option className='place-form__open-hour'>1:00AM</option>
                        <option className='place-form__open-hour'>1:30AM</option>
                        <option className='place-form__open-hour'>2:00AM</option>
                        <option className='place-form__open-hour'>2:30AM</option>
                        <option className='place-form__open-hour'>3:00AM</option>
                        <option className='place-form__open-hour'>3:30AM</option>
                        <option className='place-form__open-hour'>4:00AM</option>
                        <option className='place-form__open-hour'>4:30AM</option>
                        <option className='place-form__open-hour'>5:00AM</option>
                        <option className='place-form__open-hour'>5:30AM</option>
                        <option className='place-form__open-hour'>6:00AM</option>
                        <option className='place-form__open-hour'>6:30AM</option>
                        <option className='place-form__open-hour'>7:00AM</option>
                        <option className='place-form__open-hour'>7:30AM</option>
                        <option className='place-form__open-hour'>8:00AM</option>
                        <option className='place-form__open-hour'>8:30AM</option>
                        <option className='place-form__open-hour'>9:00AM</option>
                        <option className='place-form__open-hour'>9:30AM</option>
                        <option className='place-form__open-hour'>10:00AM</option>
                        <option className='place-form__open-hour'>10:30AM</option>
                        <option className='place-form__open-hour'>11:00AM</option>
                        <option className='place-form__open-hour'>11:30AM</option>
                        <option className='place-form__open-hour'>12:00PM</option>
                        <option className='place-form__open-hour'>12:30PM</option>
                        <option className='place-form__open-hour'>1:00PM</option>
                        <option className='place-form__open-hour'>1:30PM</option>
                        <option className='place-form__open-hour'>2:00PM</option>
                        <option className='place-form__open-hour'>2:30PM</option>
                        <option className='place-form__open-hour'>3:00PM</option>
                        <option className='place-form__open-hour'>3:30PM</option>
                        <option className='place-form__open-hour'>4:00PM</option>
                        <option className='place-form__open-hour'>4:30PM</option>
                        <option className='place-form__open-hour'>5:00PM</option>
                        <option className='place-form__open-hour'>5:30PM</option>
                        <option className='place-form__open-hour'>6:00PM</option>
                        <option className='place-form__open-hour'>6:30PM</option>
                        <option className='place-form__open-hour'>7:00PM</option>
                        <option className='place-form__open-hour'>7:30PM</option>
                        <option className='place-form__open-hour'>8:00PM</option>
                        <option className='place-form__open-hour'>8:30PM</option>
                        <option className='place-form__open-hour'>9:00PM</option>
                        <option className='place-form__open-hour'>9:30PM</option>
                        <option className='place-form__open-hour'>10:00PM</option>
                        <option className='place-form__open-hour'>10:30PM</option>
                        <option className='place-form__open-hour'>11:00PM</option>
                        <option className='place-form__open-hour'>11:30PM</option>
                    </select>
                    <br />
                    {this.state.hourOfOperation.isTouched && hoursError}
                    <br />

                    <label htmlFor='hours-end' className='place-form__close-hours'>Close:</label>
                    <select>
                        <option className='place-form__close-hour'>12:00AM</option>
                        <option className='place-form__close-hour'>12:30AM</option>
                        <option className='place-form__close-hour'>1:00AM</option>
                        <option className='place-form__close-hour'>1:30AM</option>
                        <option className='place-form__close-hour'>2:00AM</option>
                        <option className='place-form__close-hour'>2:30AM</option>
                        <option className='place-form__close-hour'>3:00AM</option>
                        <option className='place-form__close-hour'>3:30AM</option>
                        <option className='place-form__close-hour'>4:00AM</option>
                        <option className='place-form__close-hour'>4:30AM</option>
                        <option className='place-form__close-hour'>5:00AM</option>
                        <option className='place-form__close-hour'>5:30AM</option>
                        <option className='place-form__close-hour'>6:00AM</option>
                        <option className='place-form__close-hour'>6:30AM</option>
                        <option className='place-form__close-hour'>7:00AM</option>
                        <option className='place-form__close-hour'>7:30AM</option>
                        <option className='place-form__close-hour'>8:00AM</option>
                        <option className='place-form__close-hour'>8:30AM</option>
                        <option className='place-form__close-hour'>9:00AM</option>
                        <option className='place-form__close-hour'>9:30AM</option>
                        <option className='place-form__close-hour'>10:00AM</option>
                        <option className='place-form__close-hour'>10:30AM</option>
                        <option className='place-form__close-hour'>11:00AM</option>
                        <option className='place-form__close-hour'>11:30AM</option>
                        <option className='place-form__close-hour'>12:00PM</option>
                        <option className='place-form__close-hour'>12:30PM</option>
                        <option className='place-form__close-hour'>1:00PM</option>
                        <option className='place-form__close-hour'>1:30PM</option>
                        <option className='place-form__close-hour'>2:00PM</option>
                        <option className='place-form__close-hour'>2:30PM</option>
                        <option className='place-form__close-hour'>3:00PM</option>
                        <option className='place-form__close-hour'>3:30PM</option>
                        <option className='place-form__close-hour'>4:00PM</option>
                        <option className='place-form__close-hour'>4:30PM</option>
                        <option className='place-form__close-hour'>5:00PM</option>
                        <option className='place-form__close-hour'>5:30PM</option>
                        <option className='place-form__close-hour'>6:00PM</option>
                        <option className='place-form__close-hour'>6:30PM</option>
                        <option className='place-form__close-hour'>7:00PM</option>
                        <option className='place-form__close-hour'>7:30PM</option>
                        <option className='place-form__close-hour'>8:00PM</option>
                        <option className='place-form__close-hour'>8:30PM</option>
                        <option className='place-form__close-hour'>9:00PM</option>
                        <option className='place-form__close-hour'>9:30PM</option>
                        <option className='place-form__close-hour'>10:00PM</option>
                        <option className='place-form__close-hour'>10:30PM</option>
                        <option className='place-form__close-hour'>11:00PM</option>
                        <option className='place-form__close-hour'>11:30PM</option>
                    </select>  
                    <br />
                    {this.state.hourOfOperation.isTouched && hoursError}
                    <br />

                    <label htmlFor='location-type' className='place-form__location-types'>Location Type:</label>
                    <select>
                        <option className='place-form__location-type'>Restaurant</option>
                        <option className='place-form__location-type'>Food Bank</option>
                        <option className='place-form__location-type'>School</option>
                        <option className='place-form__location-type'>Other Non-Profit</option>
                    </select>
                    <br />
                    {this.state.typeOfFood.isTouched && typeError}
                    <br />
                    
                    <button onClick={this.context.addNewPlace}
                        type='submit' 
                        className='place-form__button-submit'
                        disabled={
                            this.validatePlaceName() ||
                            this.validatePlaceAddress() ||
                            this.validateCity() ||
                            this.validateUsState() ||
                            this.validateHoursOfOperation() ||
                            this.validateTypeOfFood() 
                    }>
                        Add this location
                    </button>
                </form>
            </div>
        );
    }
}


    

export default AddPage