import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Ctrl0() {
  return (
    <PageLayout count={5} prev={'extractive'} next={'circuits'}>
      <div className={styles.project}>
        <h1>CTRL-0</h1>
        <h4>Performance at Shapeshifter Lab (Brooklyn, NY)</h4>

        <h2>Project Description</h2>
        <p>This project included a Processing (Java) program using the concepts of conduction created by Butch Morris. The program conducted live improvisation of a trio of tenor sax, guitar, and accordion. Generated visuals included moving circles, and the density, color, and movement style of these circles directed the style and genre of the instrumentalists' improvisation.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gfpNdYSXnks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <a href={'https://en.wikipedia.org/wiki/Butch_Morris'} key={'Morris'} target="_blank" rel="noopener noreferrer">Butch Morris Info</a>   
        <a href={'https://github.com/reniby/Ctrl-O'} key={'Code'} target="_blank" rel="noopener noreferrer">View Source Code</a>   

        <h2>Technologies Used</h2>
        <ul>
          <li>Java (Processing)</li>
          <li>Conduction (Butch Morris)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
