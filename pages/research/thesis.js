import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Thesis() {
  return (
    <PageLayout count={1} prev={''} next={'correst'}>
      <div className={styles.project}>
        <h1>SuperCollider as a Reactive Performer</h1>
        <h4>Senior Undergraudate Thesis, Received Honors</h4>

        <h2>Project Description</h2>
        <p>This project uses SuperCollider, which is a real-time audio synthesis engine, to create a artificially intelligence musical collaborator. A Q-Learning system uses reinforcement learning to create more intense or less intense versions of inputted LiveCode beat patterns. It also allows for a connection between these outputted beats and input from an acoustic instrumentalist, by tracking the instrumental input's intensity and moving through a "score" of beat patterns that match that intensity.</p>
        <a href={'https://github.com/reniby/Undergraduate-Thesis'} key={'Code'} target="_blank" rel="noopener noreferrer">Source Code</a>
        <a href={'https://docs.google.com/document/d/1gJ78Fv5dCYOiwybwLy9JsN0oJ9Za9XyFjcMEeG08S30'} key={'Paper'} target="_blank" rel="noopener noreferrer">Research Paper</a>

        <h2>NERD Sumit (UMass)</h2>
        <p>This project evolved into a collaboration with Sarika Doppalapudi. Sarika created two homemade toys made out of recycled plastic, which were used as electronic music controllers to control the system Emma built. They gave a presentation on this work at UMass as part of the NERD Summit 2023. Their talk can be seen below.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZDvb0WHoxhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>Harvestworks Performance</h2>
        <p>Sarika and Emma also did a performance at Harvestworks through a residency with LiveCode NYC, to showcase this system and the plastic toy instruments, with saxophone input and audience interaction. Below are the poster for the event they performed at, as well as a photo of their performance with the program projected behind them.</p>
        <img className={styles.pagePic} src="/pages/hw_poster.png"></img>
        <br></br>
        <img className={styles.pagePic} src="/pages/hw_live.png"></img>

        <h2>Technologies Used</h2>
        <ul>
          <li>SuperCollider</li>
          <li>Q-Learning Reinforcement Learning Algorithm</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
