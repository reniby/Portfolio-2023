import PageLayout from '../../components/page-layout';
import styles from '../../styles/Home.module.css';

export default function Circuits() {
  return (
    <PageLayout count={6} prev={'extractive'} next={'writing'}>
      <div className={styles.project}>
        <h1>Neurological Circuit Building</h1>
        <h4>Mathematical Modeling in Medicine and Biology Final Research Project</h4>

        <h2>Research Paper Summary</h2>
        <p>This paper explores the application of the Hodgkin-Huxley model to simulate neuronal behavior and synapses.
        By incorporating a calcium channel and connecting neurons, the model can replicate excitatory and inhibitory synapses.
        An excititory synapse is viewed as a "1", or the presense of a current, while an inhibitory synapse would represent a "0", or no current.
        The paper then demonstrates the construction of basic logic gates, such as OR, AND, and NOT gates, using these synapses, and
        further showcases the creation of an XOR gate by combining the basic gates.
        The results demonstrate the potential of the model to simulate complex neural processes and build larger networks for logical operations.</p>     
        
        <p>Below are images showing the simple OR and AND gate created by chaining together three neurons. The OR gate is first; if both input neurons fire the output neuron fires, and if only one input neuron fires, the output neuron fires still.</p>
        <img className={styles.pagePic} src="/pages/OR.png"></img>
        <p>Next is the AND gate. If both inputs fire, the output fires as before. But if only one input neuron fires, the output neuron does not fire.</p>
        <img className={styles.pagePic} src="/pages/AND.png"></img>

        <a href={'https://docs.google.com/document/d/1Uda3_Y_T4JZ2Mf6SCW9WRSzgUK-1af-HycXOLS7RuuQ/edit'} key={'Paper'} target="_blank" rel="noopener noreferrer">Full Research Paper</a>
        <a href={'https://github.com/reniby/Biological-Neural-Networks-in-MATLAB'} key={'Code'} target="_blank" rel="noopener noreferrer">Source Code</a>


        <h2>Technologies Used</h2>
        <ul>
          <li>MATLAB</li>
          <li>Hodgkin Huxley Equations</li>
          <li>Frank C. Hoppensteadt, Charles S. Peskin, <i>Modeling and Simulation in Medicine and the Life Sciences</i></li>
        </ul>
      </div>
    </PageLayout>   
  )
}
