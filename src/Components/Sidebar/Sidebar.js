import React, { Component } from 'react'


class Sidebar extends Component {
    render() {
        return(
            <>
                <div className="sidebar-container">
                    <form className="sidebar-form">
                        <div className="sidebar-search">
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
                    </form>


                </div>
            </>
        )
    }
}

export default Sidebar