import React, { useState } from 'react';
import styles from '../../styles/Markdown.module.css'
import Link from 'next/link';
import {FiArrowUpLeft} from 'react-icons/fi'
import Image from 'next/image'

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import { useContext } from 'react'
import ThemeCtx from '../../context/theme'

export default function Project(props) {
  const [theme, setTheme] = useContext(ThemeCtx)

  const mdb = props.content
  const fm = props.data
  console.log(fm)

  const color = 'profile' in fm ? fm.profile : "purple"

  return (
    <main className={theme + " container " + styles.page}>
      <Link href="/work"><a className={styles.back}><FiArrowUpLeft/></a></Link>
      <div className={`${styles.image} ${styles[color]}`}/>
      <div className={styles.content}>
        <h1 className={color.slice(0,2)}>{fm.title}</h1>
        <ReactMarkdown children={mdb}/>
      </div>
    </main>
  )
}

Project.getInitialProps = async function(context) {
    const { project } = context.query
    const content = await import(`../../projects/${project}.md`)
    const data = matter(content.default)
    return {
        ...data,
    }
}
