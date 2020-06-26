import React from 'react';
import { shallow } from 'enzyme';
import LangSwitch from './LangSwitch';

describe('LangSwitch', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LangSwitch />);
    expect(wrapper).toMatchSnapshot();
  });
});
