import React from 'react';
import { shallow } from 'enzyme';
import Faq from './Faq';

describe('Faq', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Faq />);
    expect(wrapper).toMatchSnapshot();
  });
});
