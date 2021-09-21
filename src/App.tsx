import React from 'react';
import './App.css';

// need to declare FC (functional component for typescript)
function App() {
  return (
    <div className="App">
      {/* make sure that my fetch function gets called inside of a useEffect or it won't be triggered
      useEffect(() => {
        fetchData()
      }, []) */}
    </div>
  );
}

export default App;
