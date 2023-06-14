import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Ctrl0() {
  return (
    <PageLayout count={4} prev={'birdring'} next={'extractive'}>
      <div className={styles.project}>
        <h1>CTRL-0</h1>
        <h4>Performance at Shapeshifter Lab (Brooklyn, NY)</h4>

        <h2>Project Description</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Shapeshifter Lab Performance</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>Java (Processing)</li>
          <li>Conduction (Butch Morris)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
