import React from 'react';
import { shallow } from 'enzyme';
import IntroImage from './IntroImage';

describe('IntroImage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<IntroImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
