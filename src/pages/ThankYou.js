// ThankYou.js
import React from 'react';

import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Thank You for Booking!</h1>
      <p>Your appointment has been successfully booked. We will contact you soon.</p>
      <button onClick={() => navigate('/')} style={{marginTop: '20px'}}>Back to Home</button>
    </div>
  );
};

export default ThankYou;
