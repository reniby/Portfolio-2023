import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

const highlight = ['SuperCollider', 'Unity', 'Pure Data', 'p5js', 'Processing Java', 'Python', 'NLTK', 'MATLAB'];
const work = [
  {
      link: 'better',
      title: 'Better Mortgage',
      descr: 'Built a Q-Learning system in SuperCollider that can generate beats of varying intensities while following an acoustic performer.',
      src: 'better.jpg'
  },
  {
    link: 'mist',
    title: 'MIST - Trinity College',
    descr: 'Created a procedurally generated platformer in Unity. User choices are fed into a neural network in Pure Data which generates a live soundtrack.',
    src: 'trinity.jpeg'
  },
  {
    link: 'wnyu',
    title: 'WNYU Radio',
    descr: 'Composed and recorded an album and interactive website in p5.js, consisting of four songs based on ornithological data.',
    src: 'wnyu.jpeg'
  }
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        {work.map((p) => (
          <a href={`work/${p.link}`} className={styles.card} key={p.title}>
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
