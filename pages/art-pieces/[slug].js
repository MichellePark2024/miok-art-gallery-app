import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ArtPieceDetails from '../../components/ArtPieceDetails';
import CommentForm from '../../components/CommentForm';
import Comments from '../../components/Comments';
import ColorPalette from '../../components/ColorPalette';
import FavoriteButton from '@/components/FavoriteButton';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPieceDetailsPage({ favorites, setFavorites, comments, setComments }) {
  const router = useRouter();
  const { slug } = router.query;

  const [artPiece, setArtPiece] = useState(null);
  const [colorPalette, setColorPalette] = useState([]);

  const handleCommentSubmit = (text) => {
    const newComment = { id: comments.length + 1, text, date: new Date().toLocaleString() };
    setComments([...comments, newComment]);
  };

  useEffect(() => {
    const getArtPiece = async () => {
      try {
        const data = await fetcher(`https://example-apis.vercel.app/api/art/${slug}`);
        setArtPiece(data);
        setColorPalette(data.colors || []); // Assuming the API provides a colors field
      } catch (error) {
        console.error('Error fetching art piece details', error);
      }
    };

    if (slug) {
      getArtPiece();
    }
  }, [slug]);

  if (!artPiece) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.title}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
      />
      <FavoriteButton
        isFavorite={favorites.includes(artPiece.slug)}
        onToggleFavorite={() => {
          if (favorites.includes(artPiece.slug)) {
            setFavorites(favorites.filter((slug) => slug !== artPiece.slug));
          } else {
            setFavorites([...favorites, artPiece.slug]);
          }
        }}
      />
      <ColorPalette colors={colorPalette} />
      <CommentForm onSubmitComment={handleCommentSubmit} />
      <Comments comments={comments} />
    </div>
  );
}
