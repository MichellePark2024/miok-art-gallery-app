
import React, { useState, useEffect } from 'react';
import ArtPieces from '../components/ArtPieces';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [favoriteArtPieces, setFavoriteArtPieces] = useState([]);

  useEffect(() => {
    const getArtPieces = async () => {
      try {
        const data = await fetcher('https://example-apis.vercel.app/api/art');
        setFavoriteArtPieces(data.filter((piece) => favorites.includes(piece.id)));
      } catch (error) {
        console.error('Error fetching favorite art pieces', error);
      }
    };

    getArtPieces();
  }, [favorites]);

  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
}
