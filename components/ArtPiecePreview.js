// components/ArtPiecePreview.js
import React from 'react';
import FavoriteButton from './FavoriteButton';
import Image from 'next/image';

function ArtPiecePreview({ image, title, artist, isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Image src={image} width={240} height={240} alt={title} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}

export default ArtPiecePreview;
