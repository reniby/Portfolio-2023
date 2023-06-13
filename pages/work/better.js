import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Better() {
  return (
    <PageLayout count={1} prev={''} next={'mist'} section={'work'}>
      <div className={styles.project}>
        <h1>Better Mortgage</h1>
        <h3>Section 1</h3>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h3>Section 2</h3>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <ul>
          <li>{1}</li>
          <li>{2}</li>
          <li>{3}</li>
        </ul> 
        
      </div>
    </PageLayout>   
  )
}
