import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`HomePage component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<HomePage />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
