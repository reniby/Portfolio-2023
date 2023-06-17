import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function HJS() {
  return (
    <PageLayout count={8} prev={'writing'} next={'tugofwords'}>
      <div className={styles.project}>
        <h1>Hartford Jazz Society Emerging Artist Competition</h1>
        <h4>and Performance at Bushnell Park</h4>

        <h2>Submitted Video Performance</h2>
        <p>This video is a collaboration with composer Sawyer Adler. I played a improvisatory jazz solo on this piece, and submitted the video to the Hartford Jazz Society Emerging Artist Showcase. Through community voting we were selected as a finalist for this competition and received the honor of performing live in Bushnell Park in Hartford for their annual Paul Brown Monday Night Jazz series.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HOv8VBIDJyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <a href={'google.com'} key={'Essay'}>See All Finalists</a>

        <h2>Instrumentation</h2>
        <ul>
          <li>Tenor Saxophone</li>
          <li>Double Bass</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
