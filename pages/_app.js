// import React from 'react';
// import Layout from '../components/Layout';
// import useLocalStorageState from '../hooks/useLocalStorageState';

// function MyApp({ Component, pageProps }) {
//   const [favorites, setFavorites] = useLocalStorageState('favorites', []);
//   const [comments, setComments] = useLocalStorageState('comments', []);

//   return (
//     <Layout>
//       <Component {...pageProps} favorites={favorites} setFavorites={setFavorites} comments={comments} setComments={setComments} />
//     </Layout>
//   );
// }

// export default MyApp;



import React from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
