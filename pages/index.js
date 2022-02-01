//  ____  _   _
// |  _ \| \ | | Pradyun Narkadamilli
// | |_) |  \| | https://pradyungn.tech
// |  __/| |\  | MIT License
// |_|   |_| \_| Copyright 2022 Pradyun Narkadamilli

import {
    FaGithubAlt,
    FaFacebookF,
    FaLinkedinIn,
} from "react-icons/fa"

import { GrMail } from "react-icons/gr"

import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [color, incrColor] = useState(0);

  const gh = "gh"
  const fb = "fb"
  const li = "li"
  const em = "em"

  const colors = ["blue", "green", "red", "yellow", "bloo", "purple", "bloo", "pink", "orange"]

  function headerClick() {
    incrColor((color+1)%colors.length)
  }

  if (typeof window !== 'undefined' && window.innerWidth < 620) {
      fb = ( <FaFacebookF/> )
      gh = ( <FaGithubAlt/> )
      li = ( <FaLinkedinIn/> )
      em = ( <GrMail/> )
  }

  return (
      <main className={"container " + theme}>
        <NavBar hook={setTheme} curr={theme}/>
        <div className={styles.main}>
            <div className={ `${colors[color]} emph ` + styles.header}
                 onClick={() => headerClick()}>
                pradyun narkadamilli
            </div>
            <div className={styles.shpiel}>
                developer. maker. engineer.
            </div>
            <div className={styles.bubbles}>
                <div className={styles.gh}>
                    <a target="_blank" href="https://github.com/pradyungn">{gh}</a>
                </div>
                <div className={styles.li}>
                    <a target="_blank" href="https://linkedin.com/in/pradyun">{li}</a>
                </div>
                <div className={styles.fa}>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100009257228843">
                        {fb}</a>
                </div>
                <div className={styles.em}>
                    <a target="_blank" href="mailto:pradyun2@illinois.edu">{em}</a>
                </div>
            </div>
        </div>
    </main>
  )
}
