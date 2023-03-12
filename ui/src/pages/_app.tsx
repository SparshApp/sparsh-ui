// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
// import Button from "./components/Button";
// import Header from "./components/Header";


function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default App;
