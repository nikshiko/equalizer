import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mock from '../../mocks';
import './preset.css';

class Preset extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayOptions: false
    };
    this.onClick = this.onClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  onClick () {
    this.setState({
      displayOptions: !this.state.displayOptions
    });
  }

  renderButton () {
    return (
      <div className="presetButton" onClick={this.onClick}>Presets</div>
    );
  }

  renderOptions (renderOptions) {
    const { selectedPreset, onSelect } = this.props;
    return (
      <div className={this.state.displayOptions ? 'selectOptions' : 'closed'}>
        {mock.options.map(({ name, displayName }) => (
          <div
            key={name}
            className={classNames('optionDiv', { selectedOption: selectedPreset === name })}
            id={name}
            onClick={this.state.displayOptions ? onSelect : _ => _}
          >
            {displayName}
          </div>
        ))
        }
      </div>

    );
  }

  render () {
    return (
      <div className="preset">
        {this.renderButton()}
        {this.renderOptions()}
      </div >
    );
  }
}

Preset.propTypes = {
  selectedPreset: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Preset;
