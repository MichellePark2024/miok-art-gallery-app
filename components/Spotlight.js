import React from 'react';
import { useRouter } from "next/router"
import Image from "next/image";
import Link from 'next/link';
// import FavoriteButton from './FavoriteButton';

function Spotlight({ image, artist, slug  }) {
    const router = useRouter()
  return (
    <div>
      
      <h2>Spotlight</h2>
      <Link href={`/art-pieces/${slug}`}>
      <Image src={image} width={500} height={500} alt="Spotlight" />
      </Link>
      <p>Artist: {artist}</p>
      <button onClick={()=> {router.back()}}>Back</button>
    </div>
  );
}

export default Spotlight;
