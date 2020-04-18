import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`About component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<About />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <About />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
