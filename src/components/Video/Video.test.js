import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('Video', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Video />);
    expect(wrapper).toMatchSnapshot();
  });
});
