import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function BirdRing() {
  return (
    <PageLayout count={3} prev={'correst'} next={'ctrl0'}>
      <div className={styles.project}>
        <h1>Bird Ring</h1>
        <h4>Interdisciplinary Research Project</h4>

        <h2>Gallatin Undergraduate Research Fund</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>PHREATIC! Exhibition on Governors Island</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Audobahn House on Governors Island</h2>
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
