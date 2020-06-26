import React from 'react';
import { shallow } from 'enzyme';
import Youtube from './Youtube';

describe('Youtube', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Youtube />);
    expect(wrapper).toMatchSnapshot();
  });
});
