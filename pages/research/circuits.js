import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Circuits() {
  return (
    <PageLayout count={6} prev={'extractive'} next={'writing'}>
      <div className={styles.project}>
        <h1>Neurological Circuit Building</h1>
        <h4>Mathematical Modeling in Medicine and Biology Final Research Project</h4>

        <h2>Modeling a Neural Network</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Building Logic Gates</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>MATLAB</li>
          <li>Hodgkin Huxley Equations</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
