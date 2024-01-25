import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Correst() {
  return (
    <PageLayout count={2} prev={'thesis'} next={'birdring'}>
      <div className={styles.project}>
        <h1>Correst</h1>
        <h4>Funded by Dean's Award for Summer Research</h4>

        <h2>Project Description</h2>
        <p>The first part of this project is a procedurally generated platformer game built in Unity. The user can play randomized levels where they can choose to collect energy cells using puzzles or using combat. These choices, as well as other user data like time taken, and amount of map explored, are then fed into a creative neural network built in Pure Data. This neural network then generates a live soundtrack for the game that is individualized to each player, and that evolves as more user data is sent in. Unity and Pure Data are collected through Kalimba, which allows Pure Data to access stored user data taken from Unity.</p>
        <div>
          <a href={'https://github.com/reniby/Creative-Neural-Network'} key={'Code'} target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href={'https://sites.gallatin.nyu.edu/dasr/author/erw364/'} key={'Blog'} target="_blank" rel="noopener noreferrer">Blog Posts</a>
          <a href={'https://docs.google.com/document/d/1-niZXkwcgNgtpviwokYuK3WOfayPpk55wnwlTvyHRT8/edit'} key={'Paper'} target="_blank" rel="noopener noreferrer">Research Paper</a>
        </div>
        <h2>IAWM Presentation</h2>
        <p>This project was selected as a presentation at the IAWM (International Alliance of Women in Music) conference in 2022. It was also presented at the NYU Gallatin Keynote Research Conference. See this presentation below:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cK72-FnE6X0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <h2>Technologies Used</h2>
        <ul>
          <li>Unity</li>
          <li>Pure Data</li>
          <li>Kalimba</li>
          <li>A* Pathfinding Algorithm</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
