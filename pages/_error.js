import { useContext } from 'react'
import ThemeCtx from '../context/theme'

import NavBar from '../components/navbar'
import styles from '../styles/Error.module.css'

export default function fourohfour() {
  const [theme, setTheme] = useContext(ThemeCtx)

  return (
    <main className={`container ${theme}`}>
      <NavBar/>
      <div className={styles.main}>
        <div className={styles.text}>
          <div className={styles.header}>404</div>
          <div className={styles.bar}/>
          <div className={styles.msg}>You seem to be lost in space</div>
        </div>
      </div>
    </main>
  )
}
