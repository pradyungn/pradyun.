import {RiLightbulbFlashLine, RiLightbulbFlashFill} from "react-icons/ri"
import Link from 'next/link'
import styles from "../styles/NavBar.module.css"

export default function NavBar(props) {

    function HRLink(props) {
        return (
            <div className={styles.link}>
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
                <HRLink name="about"/>
                <HRLink name="files"/>
                <HRLink name="projects"/>
                <HRLink name="blog"/>
                <div className={styles.toggle}>
                    <div onClick={() => props.hook(props.curr=="light" ? "dark" : "light")}
                        className={styles.link}>{buttontext}</div>
                </div> 
            </div>
        </div>
    )
}
