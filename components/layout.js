import Navbar from './navbar';
import styles from '../styles/Home.module.css';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
        <main>
          <Navbar prefix={''}/>
          {children}
          <Analytics />
        </main>
    </div>
  )
}