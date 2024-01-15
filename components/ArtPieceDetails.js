
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router"
import FavoriteButton from './FavoriteButton';
// import { useArtPieces}

function ArtPieceDetails({ image, title, artist, year, genre }) {
    const router = useRouter()
    return (
        <>
    <div>
      <h2>Art Piece Details</h2>
      <Image src={image} alt={title} />
      <h1>Title: {title}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
    </div>
    </>
  );
}

export default ArtPieceDetails;
