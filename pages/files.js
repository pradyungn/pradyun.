import styles from '../styles/Files.module.css'
import { useContext } from 'react'
import ThemeCtx from '../context/theme'

import Container from '../components/container'

export default function Files() {

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

  const [theme, setTheme] = useContext(ThemeCtx)

  return (
    <Container active="files" theme={theme} hero={styles.hero}
      desc="A collection of documents that I found worth sharing :)">
      <h1 className={styles.head + " emph"}>the archives</h1>

      <div>
        Any documents that I found prudent to publish to the masses of the internet.
      </div>

      <div className={styles.filegrid}>
        <File path="Resume.pdf" name="resume"
              description="a succinct summary of my work experience"/>
      </div>
    </Container>
  )
}
