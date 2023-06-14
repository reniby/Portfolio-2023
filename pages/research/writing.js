import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Writing() {
  return (
    <PageLayout count={7} prev={'circuits'} next={'hjs'}>
      <div className={styles.project}>
        <h1>Experimental Composition</h1>
        <h4>Published Essay in Confluence</h4>

        <h2>Essay Information</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Artists Referenced</h2>
        <ul>
          <li>Igor Stravinsky</li>
          <li>Gertrude Stein</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
