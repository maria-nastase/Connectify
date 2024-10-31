"use client"
import Link from "next/link";
import AudioProcessor from './callAPIs.jsx';
import Head from 'next/head';
import './globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <link rel="icon" href="/path/to/your/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

const HomePage = () => {
  return (
    <div>
      {<AudioProcessor />}
    </div>
  );
};

export default HomePage;
