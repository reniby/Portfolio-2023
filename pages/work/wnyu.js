import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function WNYU() {
  return (
    <PageLayout count={3} prev={'mist'} next={''} section={'work'}>
      <div className={styles.project}>
        <h1>WNYU Radio</h1>
        <h4>Director of Technology</h4>

        <h2>Main Website</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Remote Tutorials</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Weekly Radio Show</h2>
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
