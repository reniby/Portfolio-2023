import Layout from '../components/layout'
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <Layout>
    <div className={styles.about}>
        <div className={styles.aboutCard} key={'Bio'}>
            <h2>{'About Me'}</h2>
            <p>{`Emma Waddell is a computer scientist and musician studying at NYU Gallatin. Their concentration is focused on how natural and biological processes influence algorithmic and computer music. This includes simulations and the use of neural networks, as well as the study of communication from a musical/visual and linguistic standpoint.
They have received multiple research grants to study these ideas, and create new music using their computer and their saxophone. Additionally they have studied extensive music theory through jazz saxophone and classical piano. They are also interested in video game development and woodworking!
Look through this portfolio to read about their research and listen to some notable live performances.`}</p>
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
