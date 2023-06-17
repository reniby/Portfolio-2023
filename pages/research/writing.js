import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Writing() {
  return (
    <PageLayout count={7} prev={'circuits'} next={'hjs'}>
      <div className={styles.project}>
        <h1>Experimental Composition</h1>
        <h4>Published Essay in Confluence</h4>

        <h2>Essay Summary</h2>
        <a href={'google.com'} key={'Essay'}>Read Full Essay</a>

        <p>The essay explores the connections between Igor Stravinsky's composition "The Rite of Spring" and Gertrude Stein's poetry collection "Tender Buttons." It examines how both works represent the experimental nature of the early 20th century and depart from traditional artistic norms. The essay focuses on the forms, rhythms, and dissonance employed in the two works. It discusses Stravinsky's ideas on contrast and similarity in art, and how both "The Rite of Spring" and "Tender Buttons" adhere to strict organization and repetition to convey a move away from figurative expression and melodic dominance. The essay also explores the rhythmic manipulation and rejection of traditional meter in both works. Additionally, it discusses the use of dissonance and the absence of resolution in order to create self-similarity and confusion. The essay concludes by drawing parallels between these artistic strategies and present-day algorithmic music, data sonification, live coding, and glitch music, suggesting that the core values of these works align with later developments in experimental music.</p>
        <img className={styles.pagePic} src="/pages/essay.jpeg"></img>
        <p>(Thumbnail image: Ether teeming with weighty happening III (1970) by Vivian Lynn, Te Papa, New Zealand (CC BY-NC-ND 4.0).)</p>

        <h2>Artists Referenced</h2>
        <ul>
          <li>Igor Stravinsky</li>
          <li>Gertrude Stein</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
