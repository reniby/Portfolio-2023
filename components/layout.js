import Navbar from './navbar';
import styles from '../styles/Home.module.css';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { useKonami } from 'react-konami-code';
const easterEgg = () => {
  window.open("http://sarikatatineni.com/");
}

export default function Layout({ children }) {
  useKonami(easterEgg);
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