import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <Head>
            <title>Emma Waddell</title>
        </Head>

        <main>
          <div className={styles.mainContainer}>
            <Navbar prefix={''}/>
          </div>
          {children}
        </main>

        <Footer />
    </div>
  )
}