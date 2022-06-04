import React, { useState } from 'react';
import styles from '../styles/Files.module.css'

import NavBar from '../components/navbar'

export default function Files() {
  const [theme, setTheme] = useState("light");

  function File(props) {
    return (
      <a href={"/static/" + props.path} className={styles.filecont}>
          <div className={styles.boxtext}>
            <div className={styles.filename}>{props.name}</div>
            <div className={styles.description}>{props.description}</div>
          </div>
      </a>
    )
  }

  return (
      <main className={styles.split + " container " + theme}>
        <div className={styles.hero}/>
        <div className={styles.spacer}/>
        <div className={styles.content}>
            <NavBar hook={setTheme} curr={theme} files="active"/>
            <div className={styles.shpiel}>
                <h1 className={styles.head + " emph"}>the archives</h1>

                <div>
                    Any documents that I found prudent to publish to the masses of the internet.
                </div>

              <div className={styles.filegrid}>
                <File path="Resume.pdf" name="resume"
                      description="a succinct summary of my work experience"/>
                <File path="Resume.pdf" name="resume"
                      description="a succinct summary of my work experience"/>
                <File path="Resume.pdf" name="resume"
                      description="a succinct summary of my work experience"/>
              </div>
            </div>
        </div>
      </main>
  )
}
