import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Thesis() {
  return (
    <PageLayout count={1} prev={''} next={'correst'}>
      <div className={styles.project}>
        <h1>SuperCollider as a Reactive Performer</h1>
        <h4>Senior Undergraudate Thesis, Received Honors</h4>

        <h2>Project Description</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>NERD Sumit</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Harvestworks Performance</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>SuperCollider</li>
          <li>Q-Learning Reinforcement Learning Algorithm</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
