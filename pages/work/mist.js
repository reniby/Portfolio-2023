import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function MIST() {
  return (
    <PageLayout count={2} prev={'better'} next={'wnyu'} section={'work'}>
      <div className={styles.project}>
        <h1>MIST (Memory for Intentions Test)</h1>
        <h4>Software Designer and Developer</h4>

        <h2>MIST During Covid Lockdown</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Design and Implementation</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>MISTY, MIST Shortform, Spanish MIST</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>p5.js</li>
          <li>MIST</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
