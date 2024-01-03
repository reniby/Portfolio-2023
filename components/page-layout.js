import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function PageLayout({ children, count, prev, next }) {
  let copy = `Research:   ${count} / 8`;
  return (
    <div className={styles.container}>
        <main>
          <Navbar prefix={'../'}/>

          <div className={styles.gallTop}>
            <a class={prev == '' ? styles.lGrayed : styles.lArrow} href={prev}></a>
            <p className={styles.gallery}>{copy}</p>
            <a class={next == '' ? styles.rGrayed : styles.rArrow} href={next}></a>
          </div>

          {children}

          <div className={styles.gallBottom}>
            <a class={prev == '' ? styles.lGrayed : styles.lArrow} href={prev}></a>
            <p className={styles.gallery}>{copy}</p>
            <a class={next == '' ? styles.rGrayed : styles.rArrow} href={next}></a>
          </div>
        </main>
    </div>
  )
}