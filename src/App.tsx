// eslint-disable-next-line
import React from 'react';
import './App.css';
import RechargedCars from './component/RechargedCars';

function App() {
  return (
    <div className="App">
      <div className="components">
        <RechargedCars results={[]} />
      </div>
    </div>
  );
}

export default App;
