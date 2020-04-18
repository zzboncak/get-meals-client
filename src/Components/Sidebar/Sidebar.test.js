import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Sidebar component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Sidebar />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
