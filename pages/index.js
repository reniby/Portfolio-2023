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
