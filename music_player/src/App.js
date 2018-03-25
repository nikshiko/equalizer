import React, { Component } from 'react';
import './App.css';
import Console from './components/console';
import Preset from './components/preset';
import mock from './mocks';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ...mock.defaultValues,
      selected: 'none'
    };
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  onChange (event) {
    event.preventDefault();
    const { id, value } = event.target;

    this.setState({
      [this.state.selected]: {
        ...this.state[this.state.selected],
        [id]: {
          value: Number(value)
        }
      }
    });
  }
  onSelect (event) {
    event.preventDefault();
    this.setState({
      selected: event.target.id
    });
  }

  render () {
    return (
      <div className="wrapper">
        <Console onChange={this.onChange} sliderDetails={this.state[this.state.selected]} />
        <Preset onSelect={this.onSelect} selectedPreset={this.state.selected} />
      </div>
    );
  }
}

export default App;
