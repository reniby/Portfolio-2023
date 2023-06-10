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
          <div class={styles.lArrow}></div>
          <p className={styles.gallery}>{"Gallery"}</p>
          <div class={styles.rArrow}></div>
        </div>
        
        
        
        <div className={styles.project}>
            <h1>Bird Ring</h1>
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

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
