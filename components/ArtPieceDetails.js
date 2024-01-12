
import React from 'react';

function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <h2>Art Piece Details</h2>
      <img src={image} alt={title} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default ArtPieceDetails;
