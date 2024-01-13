import React, { useState, useEffect } from 'react';
import ArtPieces from '../components/ArtPieces';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
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

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
