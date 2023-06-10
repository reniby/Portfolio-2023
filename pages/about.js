import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
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

        <div className={styles.about}>
            <a className={styles.aboutCard} key={'Bio'}>
                <h2>{'About Me'} &rarr;</h2>
                <p>{'talk about me... talk about me... talk about me... talk about me... talk about me... talk about me... talk about me... talk about me...'}</p>
                <img className={styles.socs}
                    src="/document.png"
                />
                <img className={styles.socs}
                    src="/github.png"
                />
                <img className={styles.socs}
                    src="/linkedin.svg"
                />
                <img className={styles.socs}
                    src="/youtube.png"
                />
            </a>
            <a className={styles.aboutCard} key={'Pic'}>
                <img className={styles.profile}
                    src="/bird.jpg"
                    alt="Picture of the author"
                />
            </a>
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
