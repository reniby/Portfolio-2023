import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Writing() {
  return (
    <PageLayout count={7} prev={'circuits'} next={'hjs'}>
      <div className={styles.project}>
        <h1>Experimental Composition</h1>
        <h4>Mathematical Modeling in Medicine and Biology</h4>

        <h2>Stravinsky and Stein</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Confluence</h2>
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
