import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function TugOfWords() {
  return (
    <PageLayout count={9} prev={'hjs'} next={''}>
      <div className={styles.project}>
        <h1>Tug of Words</h1>
        <h4>Video Game Built for Fun 🕹️👾</h4>

        <h2>Design and Development</h2>
        <a href={'https://editor.p5js.org/Reniby/full/uFZVyf7DW'} key={'Play'} target="_blank" rel="noopener noreferrer">Play Here!</a>

        <p>This was just a fun project using p5.js so that I could play the Tug of Words gameshow from home with my friends. There are two modes. Versus is like the original game, where two users attempt to guess the word correctly in order to pull the points flag to their side of the screen. Users can choose how long each team has to guess and how many points are required to win. I also added a timed version where a single user can try to guess 31 words as quickly as possible.
        (In the image below, quid would become quid, there is always only a single letter changed)</p>
        <img className={styles.pagePic} src="/pages/tow.png"></img>

        <h2>Database creation</h2>
        <p>I used Python to create a dictionary containing a large selection of ~3000 English four letter words. Each word was a key, where the value was every four letter word with only one letter difference. A seperate dictionary had each word with its definition, which I automatically added using the PyDictionary library. Both of these dictionaries were then used in the p5.js program.</p>
        <a href={'https://pypi.org/project/PyDictionary/'} key={'PyDict'} target="_blank" rel="noopener noreferrer">PyDictionary</a>
        <a href={'https://www.gameshownetwork.com/tug-of-words'} key={'PyDict'} target="_blank" rel="noopener noreferrer">Tug of Words Gameshow</a>

        <h2>Technologies Used</h2>
        <ul>
          <li>p5.js</li>
          <li>Python (for database creation)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
