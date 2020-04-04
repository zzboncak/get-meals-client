import React from 'react';
import './App.css';
import Header from './Components/header/header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/footer/footer';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={/**fill in later */} />
        <Route exact path='/add-location' component={/**fill in later */} />
        <Footer />
      </div>
    );
  }
}

export default App;
