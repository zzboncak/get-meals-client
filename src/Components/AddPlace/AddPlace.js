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
            dateOfOperation: {
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

    onDateChange = (newDate) => {
        this.setState({
            dateOfOperation: newDate
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

    validateDateOfOperation() {
        if (this.state.hourOfOperation === '') {
            return 'You must select date of operation'
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
        const dateError = this.validateDateOfOperation();
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

                    <label htmlFor='date-of-operation' className='place-form__date-of-operation'>Days of Operation:</label>
                    <br />
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Monday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Tuesday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Wednesday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Thursday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Friday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Saturday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
                    <br />
                    
                    <input 
                        type='checkbox' 
                        name='date-check' 
                        value={this.state.dateOfOperation.value}
                        className='place-form__day-input'
                        onChange={e => this.onDateChange(e.target.value)}
                    />
                    <label htmlFor='date-check'>Sunday</label>
                    <label>Open</label>
                    <input 
                        type='time' 
                        name='opening-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__open-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <label>Close</label>
                    <input 
                        type='time' 
                        name='closing-time'
                        value={this.state.hourOfOperation.value}
                        className='place-form__close-input'
                        onChange={e => this.onDateChange(e.target.value)}/>
                    <br />
                    {this.state.dateOfOperation.isTouched && stateError}
                    {this.state.hourOfOperation.isTouched && stateError}
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
                            this.validateDateOfOperation ||
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