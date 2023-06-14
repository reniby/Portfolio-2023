import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Extractive() {
  return (
    <PageLayout count={5} prev={'ctrl0'} next={'circuits'}>
      <div className={styles.project}>
        <h1>Extractive Summarization</h1>
        <h4>Natural Language Processing Final Research Project</h4>

        <h2>Extractive Summarization</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Creative Generation</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>NLTK (Natural Language Toolkit)</li>
          <li>CRD3 (Critical Role Dungeons & Dragons Dataset)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
