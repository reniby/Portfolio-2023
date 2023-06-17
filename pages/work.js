import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

const highlight = ['Ruby on Rails', 'p5js', 'Typescript', 'Python', 'React', 'Ember', 'Nextjs', 'Nestjs', 'TypeORM'];
const work = [
  {
      link: 'better',
      title: 'Better Mortgage',
      descr: 'Developed backend applications using primarily Typescript and Python, and built frontend features using React, Ember, & Next.js. Communicated and integrated with third party vendors, and built relational databases using TypeORM and Nest.js. Read more for full tech stack.',
      src: 'better.jpg'
  },
  {
    link: 'mist',
    title: 'MIST - Trinity College',
    descr: 'Digitized the MIST (diagnostic memory test for people with neurological disorders), to aid with administering remotely. Collected user data to be used in the diagnostic process. Modified program to include a children\'s version, a Spanish version, and a short form version.',
    src: 'mist.png'
  },
  {
    link: 'wnyu',
    title: 'WNYU Radio',
    descr: 'Updated and maintained the WNYU website (Ruby on Rails), the stations physical technology, and the online live stream. Created tutorials for station members to host their shows remotely. Hosted a two hour long weekly radio show called Imaginary Landscapes.',
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
                console.log(word, word.replace(/[^\w\s]/g, ""), highlight.includes(word.replace(/[^\w\s]/g, "")));
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
