import React from 'react';
import PropTypes from 'prop-types';

import './slider.css';

const Slider = ({ onChange, idInput, value }) => {
  const updateRed = number => (number >= 0 ? 255 : 255 + number * 20);
  const updateGreen = number => (number >= 0 ? 255 + number * -20 : 255);
  return (
    <div className="slider">
      <input
        type="range"
        min="-12"
        max="12"
        className="button"
        value={value}
        id={idInput}
        style={{ backgroundColor: `rgb(${updateRed(value)},${updateGreen(value)}, 0)` }}
        onChange={onChange}
      />
    </div >);
};

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  idInput: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default Slider;
