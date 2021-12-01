import Link from "next/link"
import React, { useState } from 'react';
import styles from '../styles/About.module.css'

import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
      <main className={styles.split + " container " + theme}>
        <div className={styles.hero}/>
        <div className={styles.content}>
            <NavBar hook={setTheme} curr={theme}/>
            <div className={styles.shpiel}>
                <h1 className={styles.head + " emph"}>a little about me</h1>

                <div>
                    I'm a freshman at UIUC, pursuing a B.E in Computer Engineering. I'm passionate about making things for the sake of making things - be that as a solution, a hobby, or else.
                 
                    While my rapt fascination is held by autonomous robotics and their associated subfields, I'm still rather varied in my fields of interest. So far I've had the luxury of exploring full stack development, machine learning, IoT hardware development, and more - I hope to only expand that list in the future at UIUC.
                </div>

                <div>
                    If you'd like to peruse my resume without the hassle of exploring my website, you can glean a good idea of what I'm all about on my <a className="blue" target="_blank" href="https://linkedin.com/in/pradyun">LinkedIn</a> and <a className={"red"} target="_blank" href="https://github.com/pradyungn">Github</a>.
                    However, for the programmer's equivalent of a "director's cut", check out <Link href="/files"><a className="yellow">the archive</a></Link> and my <Link href="/projects"><a className="purple">past projects</a></Link>. Happy hunting :)
                </div>
            </div>
        </div>
      </main>
  )
}
