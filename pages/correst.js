import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function BirdRing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emma Waddell</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Emma Waddell
        </h1>

        <div className={styles.grid}>
          <a href={'/'} className={styles.nav} key={'Projects'}>
            <p>Projects</p>
          </a>
          <a href={'about'} className={styles.nav} key={'Projects'}>
            <p>About</p>
          </a>
        </div>

        <div className={styles.gallGrid}>
          <a class={styles.lArrow} href={'thesis'}></a>
          <p className={styles.gallery}>{"Gallery"}</p>
          <a class={styles.rGrayed}></a>
        </div>
        
        
        
        <div className={styles.project}>
            <h1>Correst</h1>
            <h3>Section 1</h3>
            <p>asofij aspodfijasodifap s</p>
            <img className={styles.pic} src="/bird.jpg"></img>

            <h3>Section 2</h3>
            <p>asofij aspodfijasodifap s</p>
            <img className={styles.pic} src="/bird.jpg"></img>

            <h3>List</h3>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
        </div>
      </main>

      <footer>
        <p>Copyright © Emma Waddell 2023</p>
      </footer>
    </div>
  )
}
