import React from 'react';
import { shallow } from 'enzyme';
import HappyCustomer from './HappyCustomer';

describe('HappyCustomer', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HappyCustomer />);
    expect(wrapper).toMatchSnapshot();
  });
});
