import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
    <div className={styles.about}>
        <div className={styles.aboutCard} key={'Bio'}>
            <h2>{'About Me'}</h2>
            <p>{`Emma Waddell is a full stack software engineer who recently graduated from NYU Gallatin with a concentration in computer science, music composition, and mathematics. Their research has focused on how natural and biological processes influence algorithmic and computer music. Through their work they have leveraged biological simulations, the use of neural networks, human computer interaction, and video game development, and have received multiple research grants to study these ideas. They also have been working full time as a full stack software engineer for the past year, learning a lot about developing backend and frontend features, integrating with third party APIs, and building data dashboards.`}</p>
            <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                <img title="Resume" className={styles.socs} src="/doc.png"/>
            </a>
            <a href={"https://github.com/reniby"} target="_blank" rel="noopener noreferrer">
                <img title="GitHub" className={styles.socs} src="/github.png"/>
            </a>
            <a href={"https://www.linkedin.com/in/emma-waddell-863aa1186/"} target="_blank" rel="noopener noreferrer">
                <img title="LinkedIn" className={styles.socs} src="/linkedin.svg"/>
            </a>
            <a href={"https://www.youtube.com/channel/UCzhakXMptvcgeyvDMVI9ZVA"} target="_blank" rel="noopener noreferrer">
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
    </Layout>
  )
}
