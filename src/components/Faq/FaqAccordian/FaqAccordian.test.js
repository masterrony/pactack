import React from 'react';
import { shallow } from 'enzyme';
import FaqAccordian from './FaqAccordian';

describe('FaqAccordian', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FaqAccordian />);
    expect(wrapper).toMatchSnapshot();
  });
});
