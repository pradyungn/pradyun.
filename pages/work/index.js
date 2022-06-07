import React, { useState, useContext } from 'react';
import styles from '../../styles/Work.module.css'
import hover from '../../styles/Hover.module.css'

import matter from 'gray-matter'
import Link from 'next/link'

import Container from '../../components/container'
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
    <Container active="work" theme={theme} hero={styles.hero}
               nba={{ "beta":"on" }}
               desc="A conveniently organized list of all of my major projects! I tend to update this list after I've completed new projects, so this list may not alwayas be up-to-date.">
      <h1 className={styles.head + " emph"}>past work</h1>

      <div style={{marginBottom: "10px"}}>
        Over the years, I've worked on a multitude of projects - some as a hobby, others with competition in mind. Here, I briefly detail the process and design of some of those works.
      </div>

      {props.projects.map(proj => (
        <div key={proj.slug} className={styles.proj}>
          <Link href={`/work/${proj.slug}`}><a className={`${ styles.pt } ${hover[proj.document.data.profile]}`}>{proj.document.data.title}</a></Link>
        </div>
      ))}
    </Container>
  )
}

Work.getInitialProps = async function() {
    const projects= (context => {
        const priority = ["./kami.md", "./flameless.md", "./vital.md"]
        var keys = context.keys()
        keys = keys.filter(el => !(priority.includes(el)))
        keys = priority.concat(keys)
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
