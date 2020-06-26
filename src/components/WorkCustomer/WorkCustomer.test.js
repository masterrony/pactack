import React from 'react';
import { shallow } from 'enzyme';
import WorkCustomer from './WorkCustomer';

describe('WorkCustomer', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<WorkCustomer />);
    expect(wrapper).toMatchSnapshot();
  });
});
