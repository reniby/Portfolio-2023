import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Circuits() {
  return (
    <PageLayout count={6} prev={'extractive'} next={'writing'}>
      <div className={styles.project}>
        <h1>Neurological Circuit Building</h1>
        <h4>Mathematical Modeling in Medicine and Biology</h4>

        <h2>Modeling One Neuron</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Adding Synapses</h2>
        <p>asofij aspodfijasodifap s</p>
        <img className={styles.pagePic} src="/bird.jpg"></img>

        <h2>Building Logic Gates</h2>
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
