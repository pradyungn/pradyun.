// basic functionality
import { useState, useContext } from 'react';
import styles from "../../styles/Note.module.css"
import {ImArrowRight2} from "react-icons/im"

// Libraries
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-mathjax'

// My Components/Contexts
import ThemeCtx from '../../context/theme'
import Meta from '../../components/meta'
import NavBar from '../../components/navbar'
import CodeBlock from '../../components/codeblock'

export default function Note(props) {
  const [theme, setTheme] = useContext(ThemeCtx)

  const mdb = props.content
  const fm = props.data

  const color = 'profile' in fm ? fm.profile : "purple"

  return (
    <main className={theme + " container " + styles.page}>
      <Meta siteTitle={fm.title} img={fm.banner  ? fm.banner : `${fm.profile}.webp` } path={`notes/${props.note}`}
            description={"blurb" in fm ? fm.blurb : `A thought directly sourced from my mind.`}/>
        <Link href="/notes"><a>
            <div className={styles.backbutton}>Go back to Notebook&nbsp;<ImArrowRight2/></div>
        </a></Link>
      <div className={styles.banner}>
        <Image layout="fill" objectFit="cover" objectPosition="center"
                src={"/" + ( fm.banner  ? fm.banner : `${fm.profile}.webp` )}
                loading="lazy"/>
      </div>
      <div className={styles.main}>
        <h1 className={styles.head + " " + fm.profile.slice(0,2)}>{fm.title}</h1>
        <div className={styles.blurb}>{fm.blurb}</div>

        <div className={styles.dasher}/>
        <div className={styles.md}>
          <ReactMarkdown children={mdb}
            remarkPlugins = {[remarkMath]} rehypePlugins={[rehypeKatex]}
            components={{code({...stuff}) {return CodeBlock(stuff)}}} />
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
