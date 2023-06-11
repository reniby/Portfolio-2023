import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emma Waddell</title>
      </Head>

      <main>
        <div className={styles.hContainer}>
            <div className={styles.title}>
                <b>Emma Waddell</b>
            </div>
            <div className={styles.navGrid}>
                <a href={'/'} className={styles.nav} key={'Projects'}>
                    <p>Projects</p>
                </a>
                <a href={'about'} className={styles.nav} key={'About'}>
                    <p>About</p>
                </a>
            </div>
        </div>

        <div className={styles.about}>
            <div className={styles.aboutCard} key={'Bio'}>
                <h2>{'About Me'}</h2>
                <p>{`Emma Waddell is a computer scientist and musician studying at NYU Gallatin. Their concentration is focused on how natural and biological processes influence algorithmic and computer music. This includes simulations and the use of neural networks, as well as the study of communication from a musical/visual and linguistic standpoint.
They have received multiple research grants to study these ideas, and create new music using their computer and their saxophone. Additionally they have studied extensive music theory through jazz saxophone and classical piano. They are also interested in video game development and woodworking!
Look through this portfolio to read about their research and listen to some notable live performances.`}</p>
                <a href={"/document.png"}>
                    <img title="Resume" className={styles.socs} src="/document.png"/>
                </a>
                <a href={"https://github.com/reniby"}>
                    <img title="GitHub" className={styles.socs} src="/github.png"/>
                </a>
                <a href={"https://www.linkedin.com/in/emma-waddell-863aa1186/"}>
                    <img title="LinkedIn" className={styles.socs} src="/linkedin.svg"/>
                </a>
                <a title="YouTube" href={"https://www.youtube.com/channel/UCzhakXMptvcgeyvDMVI9ZVA"}>
                    <img title="YouTube" className={styles.socs} src="/youtube.png"/>
                </a>
            </div>
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
