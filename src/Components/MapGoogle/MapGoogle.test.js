import React from 'react';
import ReactDOM from 'react-dom';
import MapGoogle from './MapGoogle';

describe(`Map component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MapGoogle />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})