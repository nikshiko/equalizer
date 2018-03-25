import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App';

const setup = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};
describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Console component', () => {
    const wrapper = setup();
    expect(wrapper.find('Console').length).toEqual(1);
  });

  it('renders the Preset component', () => {
    const wrapper = setup();
    expect(wrapper.find('Preset').length).toEqual(1);
  });

  it('updtes selected state variable on select', () => {
    const wrapper = mount(<App />);
    wrapper.find('.presetButton').simulate('click');
    wrapper.find('#rock').simulate('click');
    expect(wrapper.state().selected).toEqual('rock');
  });
});
