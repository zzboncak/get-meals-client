import React from 'react';
import './App.css';
import Header from './Components/header/header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/footer/footer';
import AddPlace from './Components/AddPlace/AddPlace'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />
        <AddPlace />
      </div>
    );
  }
}

export default App;
