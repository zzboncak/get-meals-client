import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import About from './Components/About/About'
import AddPlace from './Components/AddPlace/AddPlace'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className='app__header'>
          <Header />
        </header>
        <main className='app__main'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/add-location' component={AddPlace} />
        </main>
        <footer className='app__footer'>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
