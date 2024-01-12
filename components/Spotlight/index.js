import Image from "next/image";
import React from "react";

export default function Spotlight(image, artist){

    const currentPieceSlug = data.find((piece) => piece.slug === slug).slug;
    console.log("currentPiece: ", currentPieceSlug);
  
    // const currentPieceIsFavorite = artPiecesInfo?.find(
    //   (piece) => piece.slug === slug
    // ).isFavorite;
  

    return (
        <div>
    <h2>Spotlight Piece</h2>
    <Image src={image} alt="Artwork" />
    <p>Artist: {artist}</p>
  </div>
      );

}