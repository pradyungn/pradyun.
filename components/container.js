import NavBar from "./navbar"
import styles from "../styles/Container.module.css"

export default function Container(props) {
  var prop = {}
  if ("active" in props) {
    prop[props.active] = "active"
  }

  return (
    <main className={`${styles.split} container ${props.theme}`}>
    <div className={`${styles.hero} ${props.hero}`}/>
      <div className={styles.spacer}/>
      <div className={styles.content}>
        <NavBar {...prop} />
        <div className={`${styles.shpiel} content`}>
          {props.children}
        </div>
      </div>
    </main>
  )
}
