import {RiLightbulbFlashLine, RiLightbulbFlashFill} from "react-icons/ri"
import Link from 'next/link'
import styles from "../styles/NavBar.module.css"
import {useContext} from 'react'
import Beta from './beta-badge'
import ThemeCtx from '../context/theme'

export default function NavBar(props) {

    function HRLink(props) {
        return (
            <div className={styles.link + " " + props.active}>
            <Link href={`/${props.name}`}
                    className={styles.link}>{props.name}</Link>
                <div className={styles.bar}/>
            </div> 
        )
    }

    const [theme, setTheme] = useContext(ThemeCtx)
    const buttontext = theme=="light" ? (<RiLightbulbFlashLine/>) : (<RiLightbulbFlashFill/>)

    return (
        <div className={styles.navbar}>
            <div className={"emph " + styles.mainlink}
                ><Link href="/">pradyun.</Link></div>

            <div className={styles.links}>
                <HRLink name="about" active={props.about}/>
                <HRLink name="files" active={props.files}/>
                <HRLink name="work" active={props.work}/>
                <HRLink name="notes" active={props.blog}/>
                <div className={styles.toggle}>
                    <div onClick={() => setTheme(theme=="light" ? "dark" : "light")}
                        className={styles.link}>{buttontext}</div>
                </div> 
            </div>
            {
              "beta" in props && props["beta"]=="on" ? (<Beta/>) : (null)
            }
        </div>
    )
}
