import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import About from './Components/About/About'
import AddPlace from './Components/AddPlace/AddPlace'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <AddPlace />
      </div>
    );
  }
}

export default App;
