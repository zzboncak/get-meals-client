import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
