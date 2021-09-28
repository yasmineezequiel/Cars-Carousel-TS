// eslint-disable-next-line
import React from 'react';
import './App.css';
import RechargedCarsMain from './component/RechargedCarsMain';

function App() {
  return (
    <div className="App">
      <div className="components">
        <RechargedCarsMain results={[]} />
      </div>
    </div>
  );
}

export default App;
