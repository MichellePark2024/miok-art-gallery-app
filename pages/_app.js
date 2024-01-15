


import React from 'react';
import Layout from '../components/Layout';
import useGlobalStore from '@/store';
import { useEffect, useState } from 'react';



const fetcher = (url) => fetch(url).then((response) => response.json())

function MyApp({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);
  console.log("art", artPieces)


  useEffect(() => {
    const getArtPieces = async () => {
      try {
        const data = await fetcher('https://example-apis.vercel.app/api/art');
        console.log(data)
        setArtPieces(data);
      } catch (error) {
        console.error('Error fetching art pieces', error);
      }
    };

    getArtPieces();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} artPieces={artPieces} />
    </Layout>
  );
}

export default MyApp;


// pages/_app.js
// import { useEffect, useState } from 'react';

// function MyApp({ Component, pageProps }) {
//   const [artPieces, setArtPieces] = useState([]);

//   // Data fetching logic
//   useEffect(() => {
//     // Your data fetching logic here
//   }, []);

//   return <Component {...pageProps} artPieces={artPieces} />;
// }

// export default MyApp;




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

