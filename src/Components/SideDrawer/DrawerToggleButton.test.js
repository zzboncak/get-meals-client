import React from 'react';
import ReactDOM from 'react-dom';
import DrawerToggleButton from './DrawerToggleButton';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`DrawerToggleButton component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<DrawerToggleButton />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <DrawerToggleButton />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
