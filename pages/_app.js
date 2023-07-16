import Head from 'next/head';
import Footer from '../components/footer';
import '../styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  let title = 'Emma Waddell';
  if (currentUrl == '/' || currentUrl.includes('research')) {
    title += '';
  } else if (currentUrl.includes('work')) {
    title += ' | Experience';
  } else {
    title += ' | About';
  }

  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon.png"></link>
    </Head>
    <Component {...pageProps} />
    <Footer />
    </>
  )
}