import React, { useState } from 'react';
import styles from '../styles/Work.module.css'

import NavBar from '../components/navbar'

export default function Files() {
  const [theme, setTheme] = useState("light");

  return (
      <main className={styles.split + " container " + theme}>
        <div className={styles.hero}/>
        <div className={styles.spacer}/>
        <div className={styles.content}>
            <NavBar hook={setTheme} curr={theme} work="active"/>
            <div className={styles.shpiel}>
                <h1 className={styles.head + " emph"}>past work</h1>

                <div>
                  Over the years, I've worked on a multitude of projects - some as a hobby, others with competition in mind. Here, I briefly detail the process and design of some of those works.
                </div>
            </div>
        </div>
      </main>
  )
}
