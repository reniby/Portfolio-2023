import Head from 'next/head';
import styles from '../styles/Home.module.css';

const projects = [
  {
      link: 'thesis',
      title: 'Honors Thesis',
      descr: 'Built a Q-Learning system in SuperCollider that can generate beats of varying intensities while following an acoustic performer. ',
      src: 'sc.png'
  },
  {
    link: 'correst',
    title: 'Correst',
    descr: 'Created a procedurally generated platformer in Unity. User choices are fed into a neural network in Pure Data which generates a live soundtrack.',
    src: 'cn.jpeg'
  },
  {
    link: 'birdring',
    title: 'Bird Ring',
    descr: 'Composed and recorded an album and interactive website in p5.js, consisting of four songs based on ornithological data.',
    src: 'bird.jpg'
},
  {
      link: 'ctrl0',
      title: 'Ctrl 0',
      descr: 'This piece was performed at ShapeShifter Lab in Brooklyn in 2019. Emma wrote a Processing (Java) program using the concepts of conduction created by Butch Morris.',
      src: 'c0.png'
  },
  {
    link: 'extractive',
    title: 'Extractive Summ',
    descr: 'Built an extractive summarizer using Python and NLTK, evaluated on ROGUE-1 and ROUGE-L scores. Used the Critical Role Dungeons and Dragons Dataset (CRD3), colleced from 398,682 turns.',
    src: 'es.jpeg'
  },
  {
    link: 'circuits',
    title: 'Neuro Circuits',
    descr: 'Used Hodgkin-Huxley mathematical model of a system on neurons and synapses in MATLAB. Simulated logical gates (AND, OR, NOT, XOR) using the modeled current through the neurons.',
    src: 'nc.jpeg'
  },
  {
    link: 'writing',
    title: 'Stravinsky Stein',
    descr: 'An essay comparing the compositional styles and choices in Gertrude Stein’s Tender Button and Igor Stravinsky’s The Rite of Spring. Published in Confluence Spring 2022.',
    src: 'ec.jpeg'
  },
  {
      link: 'hjs',
      title: 'HJS Contest',
      descr: 'Emma was selected as a finalist for this jazz competition for their tenor sax improvisation, and received the honor of performing in Bushnell Park in Hartford.',
      src: 'hjs.jpeg'
  },
  {
    link: 'tugofwords',
    title: 'Tug of Words',
    descr: 'bird ring blah blah blah blah',
    src: 'tow.png'
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
              <img className={styles.pic} src={p.src}></img>
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
