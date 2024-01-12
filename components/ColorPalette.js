// components/ColorPalette.js
import React from 'react';

function ColorPalette({ colors }) {
  return (
    <div>
      <h2>Color Palette</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: color,
              marginRight: '5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPalette;
