import React from 'react';

function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight</h2>
      <img src={image} alt="Spotlight" />
      <p>Artist: {artist}</p>
    </div>
  );
}

export default Spotlight;
