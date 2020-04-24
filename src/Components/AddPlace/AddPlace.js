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
            openHours: {
                value: null,
                isTouched: false
            },
            closeHours: {
                value: null,
                isTouched: false
            },
            dateOfOperation: {
                value: '',
                isTouched: false
            },
            typeOfFood: {
                value: 'Food Bank',
                isTouched: false
            },
            submitButtonStatus: '',
            error: null,
        }
    }

    static contextType = GetMealsContext;

    generatePlaceId = () => {
        let placeId = Math.ceil(Math.random()*1000000);
        return placeId;
    }

    handleSubmitAddPlace = (e) => {
        e.preventDefault();

        // if (!!(this.validatePlaceName() ||
        //     this.validatePlaceAddress() ||
        //     this.validateCity() ||
        //     this.validateUsState() ||
        //     this.validateZipcode() ||
        //     this.validateTypeOfFood())) {
        //         console.log(this.validatePlaceName())
        //         console.log(this.validatePlaceAddress())
        //         console.log(this.validateCity())
        //         console.log(this.validateUsState())
        //         console.log(this.validateZipcode())
        //         console.log(this.validateTypeOfFood())
        //         console.log('there is an error, please fix')
        //         return
        // }

        let newLocation = {
            location_name: this.state.name.value,
            street_address: this.state.placeAddress.value,
            city: this.state.city.value,
            state: this.state.usState.value,
            zip: this.state.zipcode.value,
            website: this.state.website.value,
            open_hour: this.state.openHours.value,
            close_hour: this.state.closeHours.value
        };

        console.log(newLocation)

        this.context.getGooglePlaceID(this.state.placeAddress.value + ' ' + this.state.city.value + ' ' + this.state.usState.value + ' ' + this.state.zipcode.value)

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
                    return res.json().then(error => Promise.reject(error))
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
            .catch(error => {
                console.error(error)
                this.setState({ error })
            });
    }
    
    onNameChange = (newName) => {
        this.setState({
            name: {
                value: newName,
                isTouched: true
            }
        });
    }

    onAddressChange = (newAddress) => {
        this.setState({
            placeAddress: {
                value: newAddress,
                isTouched: true
            }
        });
    }

    onCityChange = (newCity) => {
        this.setState({
            city: {
                value: newCity,
                isTouched: true
            }
        });
    }

    onUsStateChange = (newState) => {
        this.setState({
            usState: {
                value: newState,
                isTouched: true
            }
        });
    }

    onWebsiteChange = (newWebsite) => {
        this.setState({
            website: {
                value: newWebsite,
                isTouched: true
            }
        });
    }

    onZipcodeChange = (newZipcode) => {
        this.setState({
            zipcode: {
                value: newZipcode,
                isTouched: true
            }
        });
    }

    onOpenHoursChange = (newHours) => {
        this.setState({
            openHours: {
                value: newHours,
                isTouched: true
            }
        });
    }

    onCloseHoursChange = (newHours) => {
        this.setState({
            closeHours: {
                value: newHours,
                isTouched: true
            }
        });
    }

    onDateChange = (newDate) => {
        this.setState({
            dateOfOperation: {
                value: newDate,
                isTouched: true
            }
        });
    }

    onTypeChange = (newFood) => {
        this.setState({
            typeOfFood: {
                value: newFood,
                isTouched: true
            }
        });
    }

    validatePlaceName() {
        const name = this.state.name.value.trim()
        if(name.length === 0 || name.length < 3){
            return 'You must enter a location name that is longer than 3 characters';
        }
    }

    validatePlaceAddress() {
        const address = this.state.placeAddress.value.trim()
        if (address.length === 0) {
            return 'You need to enter an Address';
        }
    }

    validateCity() {
        const city = this.state.city.value.trim()
        if (city.length === 0) {
            return 'You need to enter a City'
        }
    }

    validateUsState() {
        const usState = this.state.usState.value.trim()
        if (usState.length === 0) {
            return 'You need to enter a State'
        }
    }

    // validateWebsite() {
    //     const website = this.state.website.value.trim()
    //     if (website.length === 0) {
    //         return 'You need to enter a website'
    //     }
    // }

    validateZipcode() {
        const zipcode = this.state.zipcode.value.trim()
        if (zipcode.length === 0 || zipcode.length !== 5 ) {
            return 'You need to enter a valid zipcode'
        } else if (isNaN(zipcode)) {
            return 'Zipcode must be a number'
        }
    }

    // validateHoursOfOperation() {
    //     if (this.state.hourOfOperation.value === '') {
    //         return 'You must select hours of operation'
    //     }
    // }

    // Removed the Date of Operation functionality
    // validateDateOfOperation() {
    //     if (this.state.hourOfOperation === '') {
    //         return 'You must select date of operation'
    //     }
    // }

    validateTypeOfFood() {
        const typeOfFood = this.state.typeOfFood.value.trim()
        if (typeOfFood.length === 0) {
            return 'You must select location type'
        }
    }

    render() {

        const nameError = this.validatePlaceName();
        const addressError = this.validatePlaceAddress();
        const cityError = this.validateCity();
        const stateError = this.validateUsState();
        const zipcodeError = this.validateZipcode();
        const typeError = this.validateTypeOfFood();
        const { error } = this.state
        
        if(this.state.error) {
            console.log(error)
            return <h1>{error.error.message}. Please refresh.</h1>
        }

        return (
            <div>
                {/* this is filler description, we can change it later*/}
                <h2>This is where you come in!</h2>
                <h4>We ask that if you know of any locations that provide free meals to add the contact information so that other users can easily find food by just searching a city in the US</h4>
                <div className='add-location-form'>
                    <form onSubmit={e => this.handleSubmitAddPlace(e)} className='place-form__start'>
                        <div className='place-form__inputs'>
                            <label htmlFor='add-location' className='place-form__location-name place-form__label'>Location name:<span>* </span></label>
                            <input 
                                type='text' 
                                placeholder='name of location' 
                                name='add-location' 
                                value={this.state.name.value} 
                                className='place-form__input'
                                onChange={e => this.onNameChange(e.target.value)} 
                            />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.name.isTouched && nameError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='place-address' className='place-form__address place-form__label'>Address:<span>* </span></label>
                            <input 
                                name='place-address' 
                                id='place-address' 
                                value={this.state.placeAddress.value} 
                                className='place-form__input'
                                onChange={e => this.onAddressChange(e.target.value)} 
                            />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.placeAddress.isTouched && addressError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='city-location' className='place-form__city place-form__label'>City:<span>*</span> </label>
                            <input 
                                name='city-location' 
                                id='city-location' 
                                value={this.state.city.value} 
                                className='place-form__input'
                                onChange={e => this.onCityChange(e.target.value)} 
                            />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.city.isTouched && cityError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='us-state' className='place-form__state place-form__label'>State:<span>*</span> </label>
                            <input
                                name='us-state' 
                                id='us-state' 
                                value={this.state.usState.value} 
                                className='place-form__input'
                                onChange={e => this.onUsStateChange(e.target.value)} 
                            />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.usState.isTouched && stateError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='zipcode' className='place-form__state place-form__label'>Zipcode:<span>*</span> </label>
                            <input
                                type='number'
                                name='zipcode' 
                                id='zipcode' 
                                value={this.state.zipcode.value} 
                                className='place-form__input'
                                onChange={e => this.onZipcodeChange(e.target.value)} 
                            />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.zipcode.isTouched && zipcodeError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='website' className='place-form__website place-form__label'>Website: </label>
                            <input
                                name='website'
                                id='website'
                                value={this.state.website.value}
                                className='place-form__6input'
                                onChange={e => this.onWebsiteChange(e.target.value)}
                            />
                        </div>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='date-of-operation' className='place-form__date-of-operation place-form__label'>Hours of Operation:</label>
                            <label>Open</label>
                            <input 
                                type='time' 
                                name='opening-time'
                                className='place-form__open-input'
                                onChange={e => this.onOpenHoursChange(e.target.value)}/>
                            <br />
                            <label>Close</label>
                            <input 
                                type='time' 
                                name='closing-time'
                                className='place-form__close-input'
                                onChange={e => this.onCloseHoursChange(e.target.value)}/>
                            <br />
                            <br />
                        </div>
                        <span className='add-location-form-error-message'>{this.state.hourOfOperation.isTouched && stateError}</span>
                        <br />
                        <br />

                        <div className='place-form__inputs'>
                            <label htmlFor='location-type' className='place-form__location-types place-form__label'>Location Type:<span>* </span></label>
                            <div className='place-form__select'>
                                <select value={this.state.typeOfFood.value} onChange={e => this.onTypeChange(e.target.value)}>
                                    <option className='place-form__location-type' value='Food Bank'>Food Bank</option>
                                    <option className='place-form__location-type' value='Restaurant'>Restaurant</option>
                                    <option className='place-form__location-type' value='School'>School</option>
                                    <option className='place-form__location-type' value='Other Non-Profit'>Other Non-Profit</option>
                                </select>
                            </div>
                        </div>
                        <span className='add-location-form-error-message'>{this.state.typeOfFood.isTouched && typeError}</span>
                        <br />
                        <br />
                            
                        <button
                            type='submit' 
                            className='place-form__button-submit'
                        >
                            Add this location
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}


    

export default AddPage