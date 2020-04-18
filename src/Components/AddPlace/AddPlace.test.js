import React from 'react';
import ReactDOM from 'react-dom';
import AddPlace from './AddPlace';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`AddPlace component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<AddPlace />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <AddPlace />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
