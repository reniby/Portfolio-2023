import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home({ prefix }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <><div className={styles.title}>
        <b>Emma Waddell</b>
    </div>
    <div className={styles.navGrid}>
        <a href={'/'} className={currentUrl == '/' ? styles.navActive : styles.nav} key={'Projects'}>
            <p>Research</p>
        </a>
        <a href={`${prefix}work`} className={currentUrl == '/work' ? styles.navActive : styles.nav} key={'About'}>
            <p>Work Experience</p>
        </a>
        <a href={`${prefix}about`} className={currentUrl == '/about' ? styles.navActive : styles.nav} key={'About'}>
            <p>About</p>
        </a>
    </div></>
  )
}
