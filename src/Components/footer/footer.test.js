import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

describe(`Footer component`, () => {
    const props = {
        className: 'test-class-name'
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Header component as expected', () => {
        const tree = renderer
          .create(<Footer />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    // it('renders a Footer component by default', () => {
    //     const wrapper = shallow(<Footer />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // })

    // it('renders the Footer component from props', () => {
    //     const wrapper = shallow(<Footer {...props} />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // })
})
