import Navbar from './navbar';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <main>
          <Navbar prefix={''}/>
          {children}
        </main>
    </div>
  )
}