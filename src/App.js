import React from 'react';
import './App.css';
import Sidebar from './Components/sidebar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <header className="App-header">
          Get Meals
        </header>
      </div>
    );
  }
}

export default App;
