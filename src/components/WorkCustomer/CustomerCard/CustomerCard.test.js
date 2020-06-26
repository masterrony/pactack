import React from 'react';
import { shallow } from 'enzyme';
import CustomerCard from './CustomerCard';

describe('CustomerCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CustomerCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
