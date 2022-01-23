import './App.css';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#ffffff');
  const getRgb = () => Math.floor(Math.random() * 256);
  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  const handleGenerate = () => {
    // eslint-disable-next-line no-shadow
    const color = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbToHex(color.r, color.g, color.b));
  };
  return (
    <div
      className="App"
      style={{
        margin: 60,
        backgroundColor: color,
        minHeight: '33.34vh',
        overflow: 'hidden',
      }}
    >
      <div style={{ margin: 10, fontSize: 25, backgroundColor: color }}>
        Generated Color: {color}
      </div>
      <button onClick={handleGenerate}>Generate</button>
    </div>
  );
};
export default RandomColor;
