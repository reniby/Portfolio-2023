import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Extractive() {
  return (
    <PageLayout count={4} prev={'birdring'} next={'ctrl0'}>
      <div className={styles.project}>
        <h1>Extractive Summarization</h1>
        <h4>Natural Language Processing Final Research Project</h4>

        <h2>Project Information</h2>
        <div>
          <a href={'/pages/extractive.pdf'} key={'Paper'} target="_blank" rel="noopener noreferrer">Read Full Paper</a>
          <a href={'https://github.com/reniby/Extractive-Summarizer'} key={'Code'} target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a href={'https://github.com/RevanthRameshkumar/CRD3'} key={'Dataset'} target="_blank" rel="noopener noreferrer">CRD3 Dataset</a> 
        </div>
        <p>In this paper, we describe our applications of extractive summarization techniques toward the Critical Role Dungeons and Dragons (CRD3). Critical Role is an unscripted, live-streamed show where a group of individuals play Dungeons and Dragons 5th Edition, an open-ended tabletop role-playing game. Using this dataset, collected from 398,682 episodes, we extract summaries of whole scenes into concise summaries using extractive models, where they are evaluated based on ROUGE-1 and ROUGE-L scores. In addition, we utilize an Ad-Hoc Information Retrieval System using TF-IDF weights and cosine similarity scores to retrieve information that assists Dungeon and Dragons 5th Edition world-building and narrative creation, based on a defined set of user queries.</p>
        
        <h2>Creative Generation</h2>
        <p>Our project also included a creative generation section, using the techniques from the extractive summarizer. Since the CRD3 corpus contains lots of Dungeons and Dragons environmental and scene descriptions, the purpose of this system would be to aid the game master create their world and guide their players. A potential dungeon/game master could input keywords, and a related summarization would be outputted.
To achieve this, the input keywords are tuned into a sentence, and the most similar sentences (using cosine similarity) from the corpus are outputted. Two examples can be seen below:</p>
        
        <div className={styles.example}>
        <p><b>input: ['music', 'performance', 'circus',
'stage', 'dance']</b><br></br>
There's a faint bit of music as two slovenly-looking musicians in the corner are trying to work for tips with a small hat on the floor that it looks like nobody's thrown any coin into it. The music suddenly comes to a stop. Their rigid form becomes fluid to the eye as they move and shift to the music the violin now sourceless once again not seeing where this Desmond is placed but they seem to move as it picks up speed. She matches the pace of the music drawing to a crescendo and leaps and barrel-turns and climaxes with her striking a powerful pose as the lights rocket to a victorious luminescence.
<br></br><br></br>
<b>input: ['trees', 'forest', 'jungle', 'plants',
'overgrown', 'grass']</b><br></br>
Now coming across the Gravid
Archipelago-- and you'd know this a little bit though you've not actually traveled to these before-- you can see this trio of islands are rather rocky and are only marked with small pockets of trees and jungle. The jungle line begins about 40 feet before you and immediately grows dense and tangled with vines root and various jungle tropical trees that choke the sky above. As you guys make your way up cresting the hill down into this small localized valley toward where the shack is with the clusters of trees and the edge of a small forest cluster is a little bit past it. There are bits of trees and clusters of them nothing that would be considered a major forest. Unable to make out any other details other than the tops of these trees and there's a few spots in between where you can see overgrown grass and general ground rock.</p>
        </div>

        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>NLTK (Natural Language Toolkit)</li>
          <li>CRD3 (Critical Role Dungeons & Dragons Dataset)</li>
        </ul>
      </div>
    </PageLayout>   
  )
}
