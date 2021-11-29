import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  const [theme, setTheme] = useState("light");
  return (
      <main className={"container " + theme}>
        <NavBar hook={setTheme} curr={theme}/>
        <div className={styles.main}>
            <div className={ "emph " + styles.header}>
                pradyun narkadamilli
            </div>
            <div className={styles.shpiel}>
                developer. maker. engineer.
            </div>
            <div className={styles.bubbles}>
                <div className={styles.gh}>
                    <a target="_blank" href="https://github.com/pradyungn">gh</a>
                </div>
                <div className={styles.li}>
                    <a target="_blank" href="https://linkedin.com/in/pradyun">li</a>
                </div>
                <div className={styles.fa}>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100009257228843">
                        fb</a>
                </div>
                <div className={styles.em}>
                    <a target="_blank" href="mailto:pradyun2@illinois.edu">em</a>
                </div>
            </div>
        </div>
    </main>
  )
}
