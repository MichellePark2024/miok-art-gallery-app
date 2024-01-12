
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ArtPiecePreview ({ image, title, artist })
 {
//      if (!image) {
//     // Handle the case when image is missing or null
//     return <div>No Image Available</div>;
//   }
  return (
    <div>
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
      />
    </div>
  );
};


