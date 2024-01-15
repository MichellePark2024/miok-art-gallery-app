import React from 'react';
import ArtPiecePreview from './ArtPiecePreview';
import Image from "next/image"
import Link from "next/link"

function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        // <ArtPiecePreview key={piece.id} {...piece} />
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          ></ArtPiecePreview>
        </li>
      ))}
    </div>
  );
}

export default ArtPieces;
