import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Better() {
  return (
    <PageLayout count={1} prev={''} next={'mist'} section={'work'}>
      <div className={styles.project}>
        <h1>Better Mortgage</h1>
        <h4>Full Stack Software Engineer</h4>

        <h2>Full Stack Features</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Data Dashboard Work</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Third Party Integrations</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>Backend:</li>
          <li>Frontend:</li>
          <li>Data:</li>
          <li>Apps:</li>
          <li>Full list of technologies used: Better Stackshare</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
