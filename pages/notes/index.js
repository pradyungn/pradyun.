
import React, { useContext } from 'react';
import styles from '../../styles/Notes.module.css'
import hover from '../../styles/Hover.module.css'

import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

import NavBar from '../../components/navbar'
import Meta from '../../components/meta'
import ThemeCtx from '../../context/theme'

const colors = {
  "red": [ hover.red, styles.re],
  "cyan": [ hover.blue, styles.cy],
  "blue": [ hover.bloo, styles.bl],
  "purple": [ hover.purple, styles.pu],
  "yellow": [ hover.yellow, styles.ye],
  "green": [ hover.green, styles.gr],
  "pink": [ hover.pink, styles.pi],
  "orange": [ hover.orange, styles.or],
}

export default function Notes(props) {
  const [theme, setTheme] = useContext(ThemeCtx)

  function Tile(props) {
    return (
      <div className={styles.tile}>
        <div className={styles.tileimg}>
          <Image layout="fill" objectFit="cover" objectPosition="center"
                 src={"/" + ( props.banner  ? props.banner : `${props.profile}.webp` )}
                 loading="lazy"/>
        </div>
        <div className={styles.tiletent}>
          <div className={styles.tiledate}>{props.date}</div>
          <Link href={"/notes/"+props.slug}>
            <div className={`${styles.tiletle} ${colors[props.profile][0]}`}>{props.title}</div>
          </Link>
          <div className={styles.tileder}/>
          <div className={styles.tiledesc}>{props.blurb}</div>
        </div>
      </div>
    )
  }

  return (
    <main className={styles.contr + " container " + theme}>
        <Meta siteTitle="Notebook" description="A glimpse into my (albeit chaotic) frame of mind"/>
        <NavBar blog="active" beta="on"/>
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.head + " emph"}>Notebook</div>
            <div className={styles.desc}>This is basically my version of a blog - except I'm not lazy enough to use wordpress. I want to write all kinds of things - ethics, technology, keyboards, linux - whatever interests me at the moment :)</div>
            <div className={styles.gct}>
              <div className={styles.gallery}>
                {props.posts.map((post) => (<Tile {...post}/>))}
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

Notes.getInitialProps = async function() {
    const posts = (context => {
        var keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            const slug = key
                .replace(/^.*[\\\/]/, '')
                .split('.')
                .slice(0, -1)
                .join('.')
            const value = values[index]
            const init = matter(value.default)
            return {
              slug,
              "profile": init.data.profile,
              "title": init.data.title,
              "blurb": init.data.blurb,
              "banner": init.data.banner,
              "date": init.data.date
            }
        })
        return data
    })(require.context('../../posts', true, /\.md$/))

    return {
        posts
    }
}
