import React from 'react';
import './AddPlace.css';
import GetMealsContext from '../../GetMealsContext';

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
            zipcode: {
                value: '',
                isTouched: false
            },
            website: {
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

    static contextType = GetMealsContext;

    generatePlaceId = () => {
        let placeId = Math.ceil(Math.random()*1000000);
        return placeId;
    }

    handleSubmitAddPlace = (e) => {
        e.preventDefault();
        let newLocation = {
            location_name: this.state.name,
            street_address: this.state.placeAddress,
            city: this.state.city,
            state: this.state.usState,
            zip: this.state.zipcode
        };

        this.context.getGooglePlaceID(this.state.placeAddress + ' ' + this.state.city + ' ' + this.state.usState + ' ' + this.state.zipcode)

        const url = `https://frozen-everglades-23155.herokuapp.com/api/locations`;

        const options = {
            method: 'POST',
            body: JSON.stringify(newLocation),
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return res.json();
            })
            .then(data => {
                this.setState({
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
                    zipcode: {
                        value: '',
                        isTouched: false
                    },
                    website: {
                        value:'',
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
                });
                this.context.locationFetch();
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            });
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


    onWebsiteChange = (newWebsite) => {
        this.setState({
            website: newWebsite
        });
    }

    onZipcodeChange = (newZipcode) => {
        this.setState({
            zipcode: newZipcode
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

    validateWebsite() {
        if (this.state.website === '') {
            return 'You need to enter a website'
        }
    }

    validateZipcode() {
        if (this.state.zipcode === '') {
            return 'You need to enter a zipcode'
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
        const zipcodeError = this.validateZipcode();
        const websiteError = this.validateWebsite()
        const hoursError = this.validateHoursOfOperation();
        const dateError = this.validateDateOfOperation();
        const typeError = this.validateTypeOfFood();

        return (
            <div>
                {/* this is filler description, we can change it later*/}
                <h2>This is where you come in!</h2>
                <h4>We ask that if you know of any locations that provide free meals to add the contact information so that other users can easily find food by just searching a city in the US</h4>
            <div className='add-location-form'>
                <form onSubmit={e => this.handleSubmitAddPlace(e)} className='place-form__start'>
                    <label htmlFor='add-location' className='place-form__location-name'>Location name:<span>*</span> </label>
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

                    <label htmlFor='place-address' className='place-form__address'>Location:<span>* </span></label>
                    <input 
                        name='place-address' 
                        id='place-address' 
                        value={this.state.placeAddress.value} 
                        className='place-form__address-input'
                        onChange={e => this.onAddressChange(e.target.value)} 
                    />
                    <br />
                    {this.state.placeAddress.isTouched && addressError}
                    <br />

                    <label htmlFor='city-location' className='place-form__city'>City:<span>*</span> </label>
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

                    <label htmlFor='us-state' className='place-form__state'>State:<span>*</span> </label>
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

                    <label htmlFor='zipcode' className='place-form__state'>Zipcode:<span>*</span> </label>
                    <input
                        type='number'
                        name='zipcode' 
                        id='zipcode' 
                        value={this.state.zipcode.value} 
                        className='place-form__state-input'
                        onChange={e => this.onZipcodeChange(e.target.value)} 
                    />
                    <br />
                    {this.state.zipcode.isTouched && zipcodeError}
                    <br />
                    
                        <label htmlFor='website' className='place-form__website'>Website: </label>
                        <input
                            name='website'
                            id='website'
                            value={this.state.website.value}
                            className='place-form__website-input'
                            onChange={e => this.onWebsiteChane(e.target.value)}
                        />
                        <br />
                        <br />

                        <label htmlFor='date-of-operation' className='place-form__date-of-operation'>Days of Operation:</label>
                        <br />
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>
                        
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}
                                />
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>
                        
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>
                        
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>
                        
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>

                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>
                        
                        <div>
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
                                className='place-form__open-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onDateChange(e.target.value)}/>
                            <br />
                            {this.state.dateOfOperation.isTouched && stateError}
                            {this.state.hourOfOperation.isTouched && stateError}
                            <br />
                        </div>


                        <label htmlFor='location-type' className='place-form__location-types'>Location Type:</label>
                        <span>* </span>
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
                                this.validateWebsite() ||
                                this.validateHoursOfOperation() ||
                                this.validateDateOfOperation() ||
                                this.validateTypeOfFood() 
                        }>
                            Add this location
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


    

export default AddPage