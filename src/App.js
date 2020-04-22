import React from 'react';

import StripePaymentWidget from './components/StripePaymentWidget';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='body'>
        <StripePaymentWidget/>
      </div>
    </div>
  );
}

export default App;
