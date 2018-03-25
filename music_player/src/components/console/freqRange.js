import React from 'react';
import mocks from '../../mocks';

const FreqRange = () => (
  <div className="sliderRange">
    {
      mocks.freqRange
        .map(freq => (
          <div key={freq}>{freq}</div>))
    }
  </div >);

export default FreqRange;
