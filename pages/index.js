import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

const highlight = ['SuperCollider', 'C', 'Unity', 'Pure Data', 'p5js', 'Processing Java', 'Python', 'NLTK', 'MATLAB'];
const projects = [
  {
      link: 'thesis',
      title: 'SuperCollider as a Reactive Performer',
      descr: 'Built a Q-Learning system in SuperCollider (C++) that can generate beats of varying intensities while following an acoustic performer.',
      src: 'sc.png'
  },
  {
    link: 'correst',
    title: 'Correst',
    descr: 'Created a procedurally generated platformer in Unity. User choices are fed into a neural network in Pure Data which generates a live soundtrack.',
    src: 'cn.png'
  },
  {
    link: 'birdring',
    title: 'Bird Ring',
    descr: 'Composed and recorded an album and interactive website in p5.js, consisting of four songs based on ornithological data.',
    src: 'bird.jpg'
  },
  {
    link: 'extractive',
    title: 'Extractive Summarization',
    descr: 'Built an extractive summarizer using Python and NLTK, evaluated on ROGUE-1 and ROUGE-L scores. Used the Critical Role Dungeons and Dragons Dataset (CRD3).',
    src: 'es.jpeg'
  },
  {
      link: 'ctrl0',
      title: 'Ctrl 0',
      descr: 'Wrote a Processing (Java) program using the concepts of conduction created by Butch Morris. This piece was performed at ShapeShifter Lab in Brooklyn in 2019.',
      src: 'c0.png'
  },
  {
    link: 'circuits',
    title: 'Neurological Circuit Building',
    descr: 'Used Hodgkin-Huxley mathematical model to simulate neurons and synapses in MATLAB. Built logical gates (AND, OR, NOT, XOR) using simulated neural networks.',
    src: 'nc.jpeg'
  },
  {
    link: 'writing',
    title: 'Stravinsky and Stein',
    descr: 'Wrote an essay comparing the compositional styles and choices in Gertrude Stein’s Tender Button and Igor Stravinsky’s The Rite of Spring. Published in Confluence Spring 2022.',
    src: 'ec.jpeg'
  },
  {
      link: 'hjs',
      title: 'HJS Emerging Artist Showcase',
      descr: 'Selected as a finalist for this jazz competition for their tenor sax improvisation, and received the honor of performing in Bushnell Park in Hartford.',
      src: 'hjs.jpeg'
  },
  {
    link: 'tugofwords',
    title: 'Tug of Words',
    descr: 'Adapted the Tug of Words game show into a web game built in p5.js. Built two modes, endless and versus, where users are given a word clues and must guess the correct letter change.',
    src: 'tow.png'
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
      {projects.map((p) => (
          <a href={'research/'+p.link} className={styles.card} key={p.title}>
          <img className={styles.pic} src={p.src} alt={p.title} />
          <h3>{p.title}</h3>
          <p>
            {p.descr.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={highlight.includes(word.replace(/[^\w\s]/g, "")) ? styles.highlight : ""}
                >
                  {word}{" "}
                </span>
              );
            })}
          </p>
        </a>
        ))}
      </div>
    </Layout>
  )
}
