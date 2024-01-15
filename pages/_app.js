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
import useGlobalStore from '@/store';
// import useGlobalStore from '@/store';

// const queryClient = new QueryClient();

const fetcher = (url) => fetch(url).then((response) => response.json())

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;


// 3rd
// import { QueryClient, QueryClientProvider } from 'react-query';
// import useGlobalStore from '../path-to-your-store/store';

// const queryClient = new QueryClient();

// function MyApp({ Component, pageProps }) {
//   return (
    // <QueryClientProvider client={queryClient}>
    //   <useGlobalStore.Provider>
    //     <Component {...pageProps} />
    //   </useGlobalStore.Provider>
    // </QueryClientProvider>
//   );
// }

// export default MyApp;

