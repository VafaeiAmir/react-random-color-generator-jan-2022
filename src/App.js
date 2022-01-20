import './App.css';
import { singularize } from 'i/lib/methods';
import React, { useState } from 'react';

//import logo from './logo.svg';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16000000).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <div>Generated Color: {hex}</div>
      <button onClick={randomizedHex}>Generate</button>
    </div>
  );
};

export default App;
