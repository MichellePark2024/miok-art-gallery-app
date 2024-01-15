import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <h1><li><Link href="/spotlight">
        Spotlight </Link> </li>
        <li> <Link href="/art-pieces">
        Pieces </Link> </li>
        <li><Link href="/favorites">
        Favorites </Link></li></h1>
    </nav>
  );
}

export default Navigation;
