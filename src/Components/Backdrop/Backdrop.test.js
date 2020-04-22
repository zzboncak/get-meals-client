import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Backdrop component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Backdrop />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Backdrop />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
