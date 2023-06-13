import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home({ prefix }) {
  const router = useRouter();
  const currentUrl = router.asPath;
  const classes = [styles.nav, styles.nav, styles.nav];

  if (currentUrl == '/') {
    classes[0] = styles.navActive;
  } else if (currentUrl.includes('research')) {
    classes[0] = styles.navGallery;
  } else if (currentUrl.includes('work')) {
    if (currentUrl == '/work') { classes[1] = styles.navActive; }
    else { classes[1] = styles.navGallery; }
  } else {
    classes[2] = styles.navActive;
  }
  

  return (
    <div className={styles.navContainer}>
        <div className={styles.title}>
            <b>Emma Waddell</b>
        </div>
        <div className={styles.navGrid}>
            <a href={'/'} className={classes[0]} key={'Projects'}>
                <p>Research</p>
            </a>
            <a href={`${prefix}work`} className={classes[1]} key={'About'}>
                <p>Work Experience</p>
            </a>
            <a href={`${prefix}about`} className={classes[2]} key={'About'}>
                <p>About</p>
            </a>
        </div>
    </div>
  )
}
