import React from 'react';
import Link from 'next/link';

// function Navigation() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/spotlight">
//             <a>Spotlight</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/">
//             <a>All Pieces</a>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;


// components/Navigation.js

function Navigation() {
  return (
    <nav>
      <h1><Link href="/spotlight">
        Spotlight
      </Link></h1>
      <h1><Link href="/art-pieces">
        Pieces
      </Link></h1>
      <h1><Link href="/favorites">
        Favorites
      </Link></h1>
    </nav>
  );
}

export default Navigation;
