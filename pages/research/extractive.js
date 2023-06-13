import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Extractive() {
  return (
    <PageLayout count={5} prev={'ctrl0'} next={'circuits'}>
      <div className={styles.project}>
        <h1>Extractive Summarization</h1>
        <h4>Natural Language Processing</h4>

        <h2>Extractive Summarization</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Dataset and Scoring</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Creative Generation</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
