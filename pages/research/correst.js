import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Correst() {
  return (
    <PageLayout count={2} prev={'thesis'} next={'birdring'}>
      <div className={styles.project}>
        <h1>Correst</h1>
        <h4>Research ... Game</h4>

        <h2>Procedurally Generated 2D Platformer</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Neural Network in Pure Data</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>IAWM Presentation</h2>
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
