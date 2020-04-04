import React from 'react';
import ReactDOM from 'react-dom';
import AddPlace from './AddPlace';

describe(`AddPlace component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddPlace />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
})
