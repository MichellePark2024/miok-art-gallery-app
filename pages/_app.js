import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
// import Layout from "@/components/Layout/Layout";
// import { uid } from "uid";
// import useLocalStorageState from "use-local-storage-state";


const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
  
}

export default function App({ Component, pageProps }) {

  
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} 
      />
    </>
  );
}
