// basic functionality
import { useState, useContext } from 'react';
import styles from "../../styles/Note.module.css"

// Libraries
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

// My Components/Contexts
import ThemeCtx from '../../context/theme'
import Meta from '../../components/meta'
import NavBar from '../../components/navbar'

export default function Note(props) {
  const [theme, setTheme] = useContext(ThemeCtx)

  const mdb = props.content
  const fm = props.data

  const color = 'profile' in fm ? fm.profile : "purple"

  return (
    <main className={theme + " container " + styles.page}>
      <Meta siteTitle={fm.title} img={fm.banner  ? fm.banner : `${fm.profile}.webp` } path={`notes/${props.note}`}
            description={"blurb" in fm ? fm.blurb : `A thought directly sourced from my mind.`}/>
      <div className={styles.banner}>
        <Image layout="fill" objectFit="cover" objectPosition="center"
                src={"/" + ( fm.banner  ? fm.banner : `${fm.profile}.webp` )}
                loading="lazy"/>
      </div>
      <div className={styles.main}>
        <h1 className={styles.head + " " + fm.profile.slice(0,2)}>{fm.title}</h1>
        <div className={styles.md}>
          <ReactMarkdown children={mdb}/>
        </div>
      </div>
    </main>
  )
}

Note.getInitialProps = async function(context) {
    const { post } = context.query
    const content = await import(`../../posts/${post}.md`)
    const data = matter(content.default)
    return {
      ...data, "note": post
    }
}
