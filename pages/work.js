import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

const highlight = ['Ruby on Rails', 'Typescript', 'React', 'Go'];
const work = [
  {
    link: 'https://1password.com/',
    title: '1Password',
    year: '2024 - Present',
    descr: 'Backend software engineer on the Infrastructure Services Foundations team. Primary language: Go',
    src: '1Password.jpeg'
  },
  {
    link: 'https://better.com/',
    title: 'Better Mortgage',
    year: '2022 - 2023',
    descr: 'Full stack software engineer on the Credit, Income, and Assets team. Primary languages: Typescript, React',
    src: 'better.jpg'
  },
  {
    link: 'https://wnyu.org/',
    title: 'WNYU Radio',
    year: '2020 - 2021',
    descr: 'Director of Technology for the station, website, and live stream. Primary language: Ruby on Rails',
    src: 'wnyu.jpeg'
  }
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        {work.map((p) => (
          <a href={`${p.link}`} className={styles.card} key={p.title} target="_blank" rel="noopener noreferrer">
            <img className={styles.pic} src={p.src} alt={p.title} />
            <h3>{p.title}</h3>
            <h4>{p.year}</h4>
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
