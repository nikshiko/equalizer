import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Preset from '../preset';

const setup = (presetValue = 'test') => {
  const wrapper = shallow(<Preset onSelect={_ => _} selectedPreset={presetValue} />);
  return wrapper;
};
describe(('Presets Component'), () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Preset onSelect={_ => _} selectedPreset="Test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the preset button', () => {
    const wrapper = setup();
    expect(wrapper.find('.presetButton').length).toEqual(1);
  });

  it('renders the preset button', () => {
    const wrapper = setup();
    expect(wrapper.find('.presetButton').length).toEqual(1);
  });

  it('toggles between revealing and hiding the options on click of the preset button', () => {
    const wrapper = setup();
    expect(wrapper.find('.closed').length).toEqual(1);
    wrapper.find('.presetButton').simulate('click');
    expect(wrapper.find('closed').length).toEqual(0);
  });

  it('applys the style on click of an option in the preset options', () => {
    const wrapper = setup('rock');
    expect(wrapper.find('.selectedOption').length).toEqual(1);
  });
});
