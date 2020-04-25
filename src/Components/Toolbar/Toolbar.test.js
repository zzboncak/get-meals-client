import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Toolbar component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter>
        <Toolbar />
    </BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Toolbar />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
