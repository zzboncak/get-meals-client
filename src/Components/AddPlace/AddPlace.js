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
            placeContent: {
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
            content: this.state.placeContent
        };
    }
    
    onNameChange = (newName) => {
        this.setState({
            name: newName
        });
    }

    onContentChange = (newContent) => {
        this.setState({
            placeContent: newContent
        });
    }

    validatePlaceName() {
        if(this.state.name.length < 1){
            return "You must enter a name";
        }
    }

    validatePlaceContent() {
        if (this.state.placeContent === "") {
            return "Your location needs content";
        }
    }

    render() {

        const nameError = this.validatePlaceName();
        const contentError = this.validatePlaceContent();

        return (
            <div className="add-place-form">
                <form onSubmit={e => this.handleSubmitAddPlace(e)}>
                    <label htmlFor="add-place">Location name: </label>
                    <input 
                        type="text" 
                        placeholder="name of place" 
                        name="add-place" 
                        value={this.state.name.value} 
                        onChange={e => this.onNameChange(e.target.value)} 
                    />
                    <br />
                    {this.state.name.isTouched && nameError}
                    <br />

                    <label htmlFor='place-content'>Location: </label>
                    <textarea 
                        name='place-content' 
                        id='place-content' 
                        value={this.state.placeContent.value} 
                        onChange={e => this.onContentChange(e.target.value)} 
                    />
                    <br />
                    {this.state.placeContent.isTouched && contentError}
                    <br />

                    <button onClick={this.context.addNewPlace}
                        type="submit" 
                        disabled={
                            this.validatePlaceName() ||
                            this.validatePlaceContent()
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