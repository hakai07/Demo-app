import React from 'react';
import './App.css';

function App() {
  return (
    <div className="time-div">The is React<br/>
      <p>{new Date().toLocaleTimeString()}</p>
  </div>
  );
}

export default App;
