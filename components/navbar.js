import {RiLightbulbFlashLine, RiLightbulbFlashFill} from "react-icons/ri"
import Link from 'next/link'
import styles from "../styles/NavBar.module.css"

export default function NavBar(props) {

    function HRLink(props) {
        return (
            <div className={styles.link + " " + props.active}>
                <Link href={props.name}
                    className={styles.link}>{props.name}</Link>
                <div className={styles.bar}/>
            </div> 
        )
    }

    const buttontext = props.curr=="light" ? (<RiLightbulbFlashLine/>) : (<RiLightbulbFlashFill/>)

    return (
        <div className={styles.navbar}>
            <div className={"emph " + styles.mainlink}
                ><Link href="/">pradyun.</Link></div>

            <div className={styles.links}>
                <HRLink name="about" active={props.about}/>
                <HRLink name="files" active={props.files}/>
                <HRLink name="work" active={props.work}/>
                <HRLink name="blog" active={props.blog}/>
                <div className={styles.toggle}>
                    <div onClick={() => props.hook(props.curr=="light" ? "dark" : "light")}
                        className={styles.link}>{buttontext}</div>
                </div> 
            </div>
          <div className={styles.betac}>
            <div className={styles.bmsg}>This website is a work in progress 🔨</div>
            <a href="#" className={styles.beta}>β</a>
          </div>
        </div>
    )
}
