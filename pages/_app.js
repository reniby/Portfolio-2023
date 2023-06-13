import Head from 'next/head';
import Footer from '../components/footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Emma Waddell</title>
    </Head>
    <Component {...pageProps} />
    <Footer />
    </>
  )
}