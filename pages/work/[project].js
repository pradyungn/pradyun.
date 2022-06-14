import React, { useState, useContext } from 'react';
import styles from '../../styles/Markdown.module.css'
import Link from 'next/link';
import {FiArrowUpLeft, FiLink} from 'react-icons/fi'
import Image from 'next/image'

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import ThemeCtx from '../../context/theme'

import Meta from '../../components/meta'

export default function Project(props) {
  const [theme, setTheme] = useContext(ThemeCtx)
  const [open, toggle] = useState(false)

  const mdb = props.content
  const fm = props.data

  const color = 'profile' in fm ? fm.profile : "purple"

  function Links() {
    const links = Object.keys(fm).filter(ob => ob.includes("link-"))

    if (links.length > 0){
      return (
        <div className={styles.links}>
            <div className={styles.hyper}>
            {
              links.map(link => (
                <a href={fm[link]}>
                <div className={`${styles.link} ${open ? styles.open : styles.close}`} key={link}>
                    {link.replace("link-", "")}
                  </div>
                </a>
              ))
            }
            </div>
        <div className={styles.linkbutton} onClick={() => toggle(!open)}><FiLink/></div>

        </div>
      )}
    else return (null)
  }

  return (
    <main className={theme + " container " + styles.page}>
    <Meta siteTitle={fm.title} img={`${color}.webp`} path={`work/${props.project}`}
        description={"blurb" in fm ? fm.blurb : `a brief description of my ${fm.title} project!`}/>
      <Link href="/work"><a className={styles.back}><FiArrowUpLeft/></a></Link>
      <div className={`${styles.image} ${styles[color]}`}/>
      <div className={styles.content}>
        <h1 className={color.slice(0,2)}>{fm.title}</h1>
        <ReactMarkdown children={mdb}/>
      </div>
      <Links/>
    </main>
  )
}

Project.getInitialProps = async function(context) {
    const { project } = context.query
    const content = await import(`../../projects/${project}.md`)
    const data = matter(content.default)
    return {
      ...data, "project": project
    }
}
