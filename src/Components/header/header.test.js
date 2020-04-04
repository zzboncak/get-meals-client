import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './header';

describe(`Header component`, () => {
    const props = {
        className: 'test-class-name'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Header component as expected', () => {
        const tree = renderer
          .create(<Header />)
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
