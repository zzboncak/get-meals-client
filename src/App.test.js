import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});