import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PageLayout({ children, count, prev, next, section }) {
  let copy = '';
  if (section == 'work') {
    copy = `Work Experience:   ${count} / 3`;
  } else {
    copy = `Research:   ${count} / 9`;
  }
  return (
    <div className={styles.container}>
        <Head>
            <title>Emma Waddell</title>
        </Head>

        <main>
          <div className={styles.mainContainer}>
            <Navbar prefix={'../'}/>
          </div>

          <div className={styles.gallGrid}>
            <a class={prev == '' ? styles.lGrayed : styles.lArrow} href={prev}></a>
            <p className={styles.gallery}>{copy}</p>
            <a class={next == '' ? styles.rGrayed : styles.rArrow} href={next}></a>
          </div>

          {children}

          <div className={styles.gallGrid}>
            <a class={prev == '' ? styles.lGrayed : styles.lArrow} href={prev}></a>
            <p className={styles.gallery}>{copy}</p>
            <a class={next == '' ? styles.rGrayed : styles.rArrow} href={next}></a>
          </div>
        </main>

        <Footer />
    </div>
  )
}