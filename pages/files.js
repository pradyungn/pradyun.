import Link from "next/link"
import React, { useState } from 'react';
import styles from '../styles/Files.module.css'

import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
      <main className={styles.split + " container " + theme}>
        <div className={styles.hero}/>
        <div className={styles.spacer}/>
        <div className={styles.content}>
            <NavBar hook={setTheme} curr={theme}/>
            <div className={styles.shpiel}>
                <h1 className={styles.head + " emph"}>the file room</h1>

                <div>
                    Any (and all) documents that I find publishing to the masses of the vast internet. 
                    Resumes, project documentation, so on and so forth - who knows what the future holds?
                </div>
            </div>
        </div>
      </main>
  )
}
