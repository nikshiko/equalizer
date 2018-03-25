import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Console from '../console';
import mocks from '../../../mocks';

const setup = () => {
  const wrapper = shallow(<Console onChange={_ => _} sliderDetails={mocks.defaultValues.rock} />);
  return wrapper;
};
describe(('Console Component'), () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Console onChange={_ => _} sliderDetails={mocks.defaultValues.rock} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders all the sliders', () => {
    const wrapper = setup();
    expect(wrapper.find('Slider').length).toEqual(5);
  });

  it('renders the slider range', () => {
    const wrapper = setup();
    expect(wrapper.find('FreqRange').length).toEqual(1);
  });

  it('renders the decibel value range', () => {
    const wrapper = setup();
    expect(wrapper.find('DecibelRange').length).toEqual(1);
  });
});
