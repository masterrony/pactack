import React from 'react';
import { shallow } from 'enzyme';
import Toggler from './Toggler';

describe('Toggler', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Toggler />);
    expect(wrapper).toMatchSnapshot();
  });
});
