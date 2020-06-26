import React from 'react';
import { shallow } from 'enzyme';
import CustomerBrand from './CustomerBrand';

describe('CustomerBrand', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CustomerBrand />);
    expect(wrapper).toMatchSnapshot();
  });
});
