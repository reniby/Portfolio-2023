import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Thesis() {
  return (
    <PageLayout count={1} prev={''} next={'correst'}>
      <div className={styles.project}>
        <h1>Undergraduate Thesis (Honors)</h1>
        <h4>Senior project blah blah</h4>

        <h2>Senior Project</h2>
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
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
