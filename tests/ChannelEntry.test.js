/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChannelEntry from '../client/src/components/ChannelEntry.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ChannelEntry', () => {
  it('should find a component', () => {
    const wrapper = shallow(<App />);
    const component = wrapper.find('div div');
    expect(component.)
  });
});
