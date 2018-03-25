import React from 'react';
import mock from '../../../mocks';
import './decibelRange.css';

const DecibelRange = () => (
  <div className="decibelValueRange">
    {mock.decibelRange.map(db => (
      <div key={`${db}db`}>
        {`${db} db`}
      </div>
    ))}

  </div>);

export default DecibelRange;
