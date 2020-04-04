import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';

describe(`Popup component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Popup />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
