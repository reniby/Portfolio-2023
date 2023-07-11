import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
    <div className={styles.about}>
        <div className={styles.aboutCard} key={'Bio'}>
            <h1>{'About Me'}</h1>
            <p>{`Emma Waddell is a full stack software engineer who graduated in 2022 from NYU Gallatin with a concentration in computer science, music composition, and mathematics.
            They have experience working full time as a full stack software engineer, developing backend and frontend features, integrating with third party APIs, and building relational databases and data dashboards.
            They have also received multiple research grants, and given various conference lectures and presentations focused on how natural and biological processes influence algorithmic and computer music. Through their work they have leveraged biological simulations, the use of neural networks, human computer interaction, and video game development.`}</p>
            <a href={"/Emma Waddell Resume.pdf"} target="_blank" rel="noopener noreferrer">
                <img title="Resume" className={styles.socs} src="/doc.png"/>
            </a>
            <a href={"https://github.com/reniby"} target="_blank" rel="noopener noreferrer">
                <img title="GitHub" className={styles.socs} src="/github.png"/>
            </a>
            <a href={"https://www.linkedin.com/in/emma-waddell-863aa1186/"} target="_blank" rel="noopener noreferrer">
                <img title="LinkedIn" className={styles.socs} src="/linkedin.png"/>
            </a>
            <a href={"https://www.youtube.com/channel/UCzhakXMptvcgeyvDMVI9ZVA"} target="_blank" rel="noopener noreferrer">
                <img title="YouTube" className={styles.socs} src="/youtube.png"/>
            </a>
            <a href="mailto:emmarwaddell@gmail.com">
                <img title="Email" className={styles.socs} src="/mail.png"/>
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
