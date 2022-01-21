import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    const randomColor =
      '#' +
      Math.floor(Math.random() * 16000000)
        .toString(16)
        .slice(2, 8);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
      }}
    >
      <div style={{ backgroundColor: `${hex}` }}>Generated Color: {hex}</div>
      <button onClick={randomizedHex}>Generate</button>
    </div>
  );
};

export default App;
