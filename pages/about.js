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
                <h2>{'About Me'}</h2>
                <p>{`Emma Waddell is a computer scientist and musician studying at NYU Gallatin. Their concentration is focused on how natural and biological processes influence algorithmic and computer music. This includes simulations and the use of neural networks, as well as the study of communication from a musical/visual and linguistic standpoint.
They have received multiple research grants to study these ideas, and create new music using their computer and their saxophone. Additionally they have studied extensive music theory through jazz saxophone and classical piano. They are also interested in video game development and woodworking!
Look through this portfolio to read about their research and listen to some notable live performances.`}</p>
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
                    src="/profile.jpg"
                    alt="Picture of the author"
                />
            </a>
        </div>
      </main>

      <footer>
        <p>Copyright © Emma Waddell 2023</p>
      </footer>
    </div>
  )
}
