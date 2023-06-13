import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function HJS() {
  return (
    <PageLayout count={8} prev={'writing'} next={'tugofwords'}>
      <div className={styles.project}>
        <h1>Hartford Jazz Society Emerging Artist Competition</h1>
        <h4>Tenor Saxophone</h4>

        <h2>Community Voting</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Live Performance in Bushnell Park</h2>
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
