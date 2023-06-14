import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Correst() {
  return (
    <PageLayout count={2} prev={'thesis'} next={'birdring'}>
      <div className={styles.project}>
        <h1>Correst</h1>
        <h4>Funded by Dean's Award for Summer Research</h4>

        <h2>Project Description</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>IAWM Presentation</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>Unity</li>
          <li>Pure Data</li>
          <li>Kalimba</li>
          <li>A* Pathfinding Algorithm</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
