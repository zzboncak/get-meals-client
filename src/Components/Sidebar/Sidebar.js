import React, { Component } from 'react'
import "./Sidebar.css"


class Sidebar extends Component {

    handleSubmit = e => {
        e.preventDefault()
        let {address, radius } = e.target
        console.log(address.value, radius.value)
    }
    
    
    render() {
        return(
            <>
                <div className="sidebar-container">
                    <form className="sidebar-form" onSubmit={this.handleSubmit}>
                        <div className="sidebar-search input">
                            <label htmlFor="sidebar-search">
                                Search by address:
                            </label>
                            <input className="sidebar-input" type="text" placeholder="seattle" id="address" required />
                        </div>

                        <div className="results-within">
                            <label htmlFor="results-within">
                                Show Results Within (Miles)
                            </label>
                            <input className="search-radius" type="text" placeholder="10" id="radius" />
                        </div>

                        <div className="button-container">
                        <button className="submit-button" type="submit"> Search</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Sidebar