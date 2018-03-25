import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DecibelRange from '../';

const setup = () => {
  const wrapper = shallow(<DecibelRange />);
  return wrapper;
};

describe(('DecibelRange Component'), () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DecibelRange />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the range in the mock', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toEqual(4);
  });
});
