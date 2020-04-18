import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Map component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Map />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Map />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})