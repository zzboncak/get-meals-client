import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './Popup';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Popup component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Popup />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Popup />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
