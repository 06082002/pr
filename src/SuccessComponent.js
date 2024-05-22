// src/SuccessComponent.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessComponent = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      {formData && (
        <div>
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SuccessComponent;
