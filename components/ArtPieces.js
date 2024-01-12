import Link from "next/link";
import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";



export default function ArtPieces({pieces}) {

    console.log("hi", pieces)
    return (
    //     <div>
    //     <ul>
    //   {pieces.map((art) => (
    //     <>
    //     <li key={art.slug}>
    //       <h1>  {art.artist} </h1>
    //       <p>{art.name}</p>
    //     <p>
    //     <img src={art.imageSourc} />
    //     </p>
    //     </li>
        
    //     </>
    //   ))}
    // </ul>
        
    //   </div>
    <div>
      <h1>All Art Pieces</h1>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.title}
          artist={piece.artist}
        />
      ))}
    </div>
    );
  }
