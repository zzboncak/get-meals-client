import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Sidebar from './Components/Sidebar/sidebar';
import Footer from './Components/footer/footer';
import About from './Components/About/About'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
