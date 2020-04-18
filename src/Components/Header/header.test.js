import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe(`Header component`, () => {
    const props = {
        className: 'test-class-name'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Header component as expected', () => {
        const tree = renderer
          .create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    // it('renders a Header component by default', () => {
    //     const wrapper = shallow(<Header />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // })

    // it('renders the Header component from props', () => {
    //     const wrapper = shallow(<Header {...props} />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // })
})
