import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Slider from '../';

const setup = () => {
  const wrapper = shallow(<Slider onChange={_ => _} idInput="slider60" value={12} />);
  return wrapper;
};

describe(('DecibelRange Component'), () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Slider onChange={_ => _} idInput="slider60" value={12} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the slider', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toEqual(1);
  });
});
