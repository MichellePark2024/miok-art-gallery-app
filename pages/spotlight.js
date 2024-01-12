
import React, { useState, useEffect } from 'react';
import Spotlight from '../components/Spotlight';
import FavoriteButton from '../components/FavoriteButton';
// import randomItem from "@/lib/random-Item"

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SpotlightPage({ favorites, setFavorites }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    const getArtPieces = async () => {
      try {
        const data = await fetcher('https://example-apis.vercel.app/api/art');
        setArtPieces(data);
      } catch (error) {
        console.error('Error fetching art pieces', error);
      }
    };

    getArtPieces();
  }, []);

  const randomPiece = artPieces[Math.floor(Math.random() * artPieces.length)];

  const handleToggleFavorite = () => {
    if (favorites.includes(randomPiece.id)) {
      setFavorites(favorites.filter((id) => id !== randomPiece.id));
    } else {
      setFavorites([...favorites, randomPiece.id]);
    }
  };

  return (
    <div>
      <Spotlight image={randomPiece.image} artist={randomPiece.artist} />
      <FavoriteButton
        isFavorite={favorites.includes(randomPiece.id)}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
