import React, { useState, useContext } from 'react';
import styles from '../../styles/Work.module.css'
import hover from '../../styles/Hover.module.css'

import matter from 'gray-matter'
import Link from 'next/link'

import NavBar from '../../components/navbar'
import ThemeCtx from '../../context/theme'

const colors = {
  "red": [hover.red, "re"],
  "cyan": [hover.blue, "cy"],
  "blue": [hover.bloo, "bl"],
  "purple": [hover.purple, "pu"],
  "yellow": [hover.yellow, "ye"],
  "green": [hover.green, "gr"],
  "pink": [hover.pink, "pi"],
  "orange": [hover.orange, "or"]
}

export default function Work(props) {
  const [theme, setTheme] = useContext(ThemeCtx)

  return (
      <main className={styles.split + " container " + theme}>
        <div className={styles.hero}/>
        <div className={styles.spacer}/>
        <div className={styles.content}>
            <NavBar work="active"/>
            <div className={styles.shpiel}>
                <h1 className={styles.head + " emph"}>past work</h1>

                <div>
                  Over the years, I've worked on a multitude of projects - some as a hobby, others with competition in mind. Here, I briefly detail the process and design of some of those works.
                </div>

              {props.projects.map(proj => (
                <Link href={`/work/${proj.slug}`}><a>{proj.document.data.title}</a></Link>
              ))}
            </div>
        </div>
      </main>
  )
}

Work.getInitialProps = async function() {
    const projects = (context => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key
                .replace(/^.*[\\\/]/, '')
                .split('.')
                .slice(0, -1)
                .join('.')
            const value = values[index]
            const document = matter(value.default)
            return {
                document,
                slug,
            }
        })
        return data
    })(require.context('../../projects', true, /\.md$/))
    return {
        projects
    }
}
