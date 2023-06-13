import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Better() {
  return (
    <PageLayout count={1} prev={''} next={'mist'} section={'work'}>
      <div className={styles.project}>
        <h1>Better Mortgage</h1>
        <h4>Full Stack Software Engineer</h4>

        <h2>Fraud Detection</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>OCR Dashboard</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Income Calculator</h2>
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
