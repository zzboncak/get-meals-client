import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import About from './Components/About/About';
import AddPlace from './Components/AddPlace/AddPlace'
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends React.Component {

// start code added by Peggy for the Nav Bar.

state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

// End Code added by Peggy for the Nav Bar

  render() {

    // Start code added by Peggy for the Nav Bar

let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

  //  End code added by Peggy for the Nav Bar

    return (
      
      // Start code added by Peggy for the Nav Bar

       <React.Fragment>


<div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        </div>

      // End Code added by Peggy for the Nav Bar
      
            
      <div className="App">
        
        <main className='app__main'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/add-location' component={AddPlace} />
        </main>
        <footer className='app__footer'>
          <Footer />
        </footer>
      </div>

      </React.Fragment> 
    );
  }
}

export default App;
