
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Spotlight from '../components/Spotlight';
// import FavoriteButton from '../components/FavoriteButton';
// import randomItem from '@/resources/lib/random-Item';

// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function SpotlightPage({ favorites, setFavorites }) {
//   const [artPieces, setArtPieces] = useState([]);

//   useEffect(() => {
//     const getArtPieces = async () => {
//       try {
//         const data = await fetcher('https://example-apis.vercel.app/api/art');
//         setArtPieces(data);
//       } catch (error) {
//         console.error('Error fetching art pieces', error);
//       }
//     };

//     getArtPieces();
//   }, []);

//   const randomPiece = artPieces[Math.floor(Math.random() * artPieces.length)];

//   const handleToggleFavorite = () => {
//     if (favorites.includes(randomPiece.id)) {
//       setFavorites(favorites.filter((id) => id !== randomPiece.id));
//     } else {
//       setFavorites([...favorites, randomPiece.id]);
//     }
//   };

//   return (
//     <div>
//       <Spotlight image={randomPiece.image} artist={randomPiece.artist} />
//       {/* <Spotlight image={image} slug={slug} artist={artist} /> */}
//       <FavoriteButton
//         isFavorite={favorites.includes(randomPiece.id)}
//         onToggleFavorite={handleToggleFavorite}
//       />
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Spotlight from '../components/Spotlight';
import FavoriteButton from '../components/FavoriteButton';
import randomItem from '@/resources/lib/randomItem';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SpotlightPage({ favorites = [], setFavorites }) {
  const [artPieces, setArtPieces] = useState([]);
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    const getArtPieces = async () => {
      try {
        const data = await fetcher('https://example-apis.vercel.app/api/art');
        setArtPieces(data);

        // Set a random piece when data is fetched
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomPiece(data[randomIndex]);
      } catch (error) {
        console.error('Error fetching art pieces', error);
      }
    };

    getArtPieces();
  }, []);

  const handleToggleFavorite = () => {
    if (randomPiece && favorites && favorites.includes(randomPiece.id)) {
      setFavorites(favorites.filter((id) => id !== randomPiece.id));
    } else if (randomPiece && favorites) {
      setFavorites([...favorites, randomPiece.id]);
    }
  };

  // Check if randomPiece is defined before accessing its properties
  if (!randomPiece) {
    return <div>Loading...</div>;
  }
  const image = randomPiece.imageSource
  const slug = randomPiece.slug
  const artist = randomPiece.artist

  return (
    <div>
      <Spotlight image={image} slug={slug}  artist={artist} />
      <FavoriteButton
        isFavorite={favorites && favorites.includes(randomPiece.id)}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
