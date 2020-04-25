import React from 'react';
import ReactDOM from 'react-dom';
import SideDrawer from './SideDrawer';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`SideDrawer component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BrowserRouter>
        <SideDrawer />
    </BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <SideDrawer />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
