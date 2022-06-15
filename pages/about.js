import Link from "next/link"
import React, { useState, useContext } from 'react';
import styles from '../styles/About.module.css'
import hover from '../styles/Hover.module.css'

import Container from '../components/container'
import ThemeCtx from '../context/theme'

export default function About() {
  const [theme, setTheme] = useContext(ThemeCtx)
  const [direction, setDirection] = useState("vertical")
  const [displayCurrent, timeLine] = useState(0);

  return (
      <Container active="about" theme={theme} hero={styles.hero}
                 desc="an (exceedingly brief) 21st century myspace page">
          <h1 className={styles.head + " emph"}>a little about me</h1>
          <p>
              I'm a sophomore at UIUC, pursuing a B.E in Computer Engineering. I'm passionate about making things for the sake of making things - be that as a solution, a hobby, or else.
          </p>

          <p>
            If you'd like to peruse my resume without the hassle of exploring this website, you can glean a good idea of what I'm all about on my <a className={hover.blue} target="_blank" href="https://linkedin.com/in/pradyun">LinkedIn</a> and <a className={hover.red} target="_blank" href="https://github.com/pradyungn">Github</a>.
            However, for the programmer's equivalent of a "director's cut", check out <Link href="/files"><a className={hover.cyan}>the archive</a></Link> and my <Link href="/work"><a className={hover.purple}>past projects</a></Link>. Happy hunting :)
          </p>

          <p>
            In the event you ever need to contact me, my preferred form of communication (although exceedingly archaic) is email - shoot me one at <a href="mailto:pradyun2@illinois.edu" className={hover.yellow}>pradyun2@illinois.edu</a>!.
          </p>
    </Container>
  )
}
