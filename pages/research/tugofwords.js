import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function TugOfWords() {
  return (
    <PageLayout count={9} prev={'hjs'} next={''}>
      <div className={styles.project}>
        <h1>Tug of Words</h1>
        <h4>Video Game Built for Fun 🕹️👾</h4>

        <h2>Design and Development</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Data Cleaning</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>p5.js</li>
          <li>Python (for data cleaning)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
