import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function BirdRing() {
  return (
    <PageLayout count={3} prev={'correst'} next={'ctrl0'}>
      <div className={styles.project}>
        <h1>Bird Ring</h1>
        <h3>Section 1</h3>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h3>Section 2</h3>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h3>List</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
