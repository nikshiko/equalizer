import React from 'react';
import PropTypes from 'prop-types';

import Slider from './slider/index';
import FreqRange from './freqRange';
import DecibelRange from './decibelRange';
import './console.css';

const Console = ({ onChange, sliderDetails }) => (
  <div className="console">
    <DecibelRange />
    <div className="sliderWithRange" >
      <div className="sliderContainer">
        <Slider onChange={onChange} idInput="slider60" value={sliderDetails.slider60.value} />
        <Slider onChange={onChange} idInput="slider310" value={sliderDetails.slider310.value} />
        <Slider onChange={onChange} idInput="slider1k" value={sliderDetails.slider1k.value} />
        <Slider onChange={onChange} idInput="slider6k" value={sliderDetails.slider6k.value} />
        <Slider onChange={onChange} idInput="slider16k" value={sliderDetails.slider16k.value} />
      </div>
      <FreqRange />
    </div>
  </div >
);

Console.propTypes = {
  onChange: PropTypes.func.isRequired,
  sliderDetails: PropTypes.object.isRequired
};

export default Console;
