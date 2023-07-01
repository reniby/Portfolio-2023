import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function BirdRing() {
  return (
    <PageLayout count={3} prev={'correst'} next={'ctrl0'}>
      <div className={styles.project}>
        <h1>Bird Ring</h1>
        <h4>Funded by Gallatin Undergraduate Research Fund</h4>

        <h2>Project Description</h2>
        <p>This project started as a summer research project funded by NYU Gallatin. For this project, I composed four pieces that were all inspired by various ornithological phenomenon, and recorded a short album demonstrating the ideas of each. This project then evolved into an interactive website, and has been displayed in multiple exhibitis in NYC.</p>
        <p>The website included the first three compositions from this album. The first piece used the Boid Flocking algorithm, which simulates bird flocking patterns with three simple parameters. I made it possible for this flock to "sing" based on location on a 2D grid, and connected it to my tenor saxophone. My saxophone input acted as a leader boid, that could direct where the flock moved and how to create a textural instrument. </p>
        <p>The second piece used an evolutionary algorithm to simulate nest parasitization, common in cowbird species. Cowbirds will place their eggs into songbird nests so that the songbirds will raise their young, often competing with the songbird hatchlings for food. Some songbirds have evolved to recognize cowbird eggs and can destroy them. This piece simulates how these populations react to various food levels, and varying genes among these two populations. The recording shows a sonification of the data produced by these simulations.</p>
        <p>The third piece, and final included in the website, sonically compares human neurons with bird neurons. Human neurons are often more complex than bird neurons, but bird brains have a much higher density of neurons. This piece is a duet between human neurons, which are longer, have a larger melodic range, and more are rhythmically complex, and bird neurons, which are shorter and less variated.</p>
        <p>Click the link below to view and play with the Bird Ring interactive website. Only available on desktop, mobile coming soon!</p>
        <a href={'https://reniby.github.io/index/index.html'} key={'Site'} target="_blank" rel="noopener noreferrer">Interactive Website</a>
        <br></br>
        <img className={styles.pagePic} src="/pages/birdring.png"></img>

        <h2>PHREATIC! Exhibition on Governors Island</h2>
        <p>The first three pieces composed as part of this project were turned into an interactive website that was displayed at the PHREATIC! Art / Science Exhibit on Governor's Island in 2021. This website included a section for each piece, and each piece had a textual background of the ideas involved, an interactive simulation for the user to experiment with, and a recorded performance of the piece. To explore this website, see the below link.</p>
        <a href={'https://www.nyvolcano.org/phreatic'} key={'Phreatic'} target="_blank" rel="noopener noreferrer">PHREATIC!</a>
        <br></br>
        <img className={styles.pagePic} src="/pages/phreatic.png"></img>

        <h2>Audobahn House on Governors Island</h2>
        <p>The fourth piece used the ideas of fractals in bird feather patterns to greate a glitch musical piece with accompanying visuals. This piece was displayed at the NYC Audobahn house on Governor's Island in 2022, inside a large dome projection. The video that was displayed as well as an gif of the dome in the exhibit can be seen below.</p>
        <img className={styles.pageGif} src="/pages/fractals.gif"></img>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RX1dhwofWe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h2>Technologies Used</h2>
        <ul>
          <li>p5.js (Javascript)</li>
          <li>Java</li>
          <li>Max/MSP/Jitter</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
