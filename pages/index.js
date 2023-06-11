import Head from 'next/head';
import styles from '../styles/Home.module.css';

const projects = [
  {
      link: 'birdring',
      title: 'Bird Ring',
      descr: 'bird ring blah blah blah blah'
  },
  {
      link: 'toxicinstruments',
      title: 'Honors Thesis',
      descr: 'bird ring blah blah blah blah'
  },
  {
    link: 'correst',
    title: 'Video Game',
    descr: 'bird ring blah blah blah blah'
  },
  {
      link: 'ctrl0',
      title: 'Ctrl 0',
      descr: 'bird ring blah blah blah blah'
  },
  {
    link: 'extractive',
    title: 'Extractive Summ',
    descr: 'bird ring blah blah blah blah'
  },
  {
    link: 'circuits',
    title: 'Neuro Circuits',
    descr: 'bird ring blah blah blah blah'
  },
  {
    link: 'confluence',
    title: 'Stravinsky Stein',
    descr: 'bird ring blah blah blah blah'
  },
  {
      link: 'hjs',
      title: 'HJS Contest',
      descr: 'bird ring blah blah blah blah'
  },
  {
    link: 'tugofwords',
    title: 'Tug of Words',
    descr: 'bird ring blah blah blah blah'
  },
]

export default function Home() {
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

        <div className={styles.grid}>
          {projects.map((p) => (
            <a href={p.link} className={styles.card} key={p.title}>
              <img className={styles.pic} src="/bird.jpg"></img>
              <h3>{p.title}</h3>
              <p>{p.descr}</p>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <p>Copyright © Emma Waddell 2023</p>
      </footer>
    </div>
  )
}
