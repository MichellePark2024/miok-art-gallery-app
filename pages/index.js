import React, { useState, useEffect } from 'react';
import ArtPieces from '../components/ArtPieces';
import Spotlight from '@/components/Spotlight';


// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage({artPieces}) {
 
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

