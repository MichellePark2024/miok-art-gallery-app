import React from 'react';
import { useRouter } from "next/router"
import Image from "next/image";
import FavoriteButton from './FavoriteButton';

function Spotlight({ image, artist }) {
    const router = useRouter()
  return (
    <div>
      <h2>Spotlight</h2>
      <Image src={image} width={500} height={500} alt="Spotlight" />
      <p>Artist: {artist}</p>
      <button onClick={()=> {router.back()}}>Back</button>
    </div>
  );
}

export default Spotlight;
