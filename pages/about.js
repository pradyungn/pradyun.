import Link from "next/link"
import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css'

import {Pagination, Navigation, Keyboard} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {IoClose} from "react-icons/io5"
import NavBar from '../components/navbar'

export default function About() {
  const [theme, setTheme] = useState("light");
  const [direction, setDirection] = useState("vertical")
  const [displayCurrent, timeLine] = useState(0);

  const orientations = [styles.flat, styles.popUp]

  const stylesets = {"vertical": styles.vertical,
      "horizontal": styles.horizontal}

    function dirChange() {
        const width = window.innerWidth
        width > 768 ? setDirection("vertical") : setDirection("horizontal")
    }

    useEffect(() => {
            window.addEventListener('resize', dirChange)
        return () => {
            window.removeEventListener('resize', dirChange)
        }
        })

    function initTimeline() {
        timeLine(1)
        const width = window.innerWidth
        width > 768 ? setDirection("vertical") : setDirection("horizontal")
    }
  
  return (
      <main className={styles.split + " container " + theme + " " + orientations[displayCurrent]}>
        <div className={styles.hero}/>
        <div className={styles.spacer}/>
        <div className={styles.content}>
            <NavBar hook={setTheme} curr={theme} about="active"/>
            <div className={styles.shpiel + " content"}>
                <h1 className={styles.head + " emph"}>a little about me</h1>
                <p>
                    I'm a freshman at UIUC, pursuing a B.E in Computer Engineering. I'm passionate about making things for the sake of making things - be that as a solution, a hobby, or else.
                    Perhaps that's a bit vague? In that case, I encourage you to view this convenient <a className="orange" onClick={() => initTimeline()}>timeline</a>.
                </p>

                <p>
                    If you'd like to peruse my resume without the hassle of exploring my website, you can glean a good idea of what I'm all about on my <a className="blue" target="_blank" href="https://linkedin.com/in/pradyun">LinkedIn</a> and <a className={"red"} target="_blank" href="https://github.com/pradyungn">Github</a>.
                    However, for the programmer's equivalent of a "director's cut", check out <Link href="/files"><a className="bloo">the archive</a></Link> and my <Link href="/projects"><a className="purple">past projects</a></Link>. Happy hunting :)
                </p>

                <p>
                    In the event you ever need to contact me, my preferred form of communication (although exceedingly archaic) is email - shoot me one at <a href="mailto:pradyun2@illinois.edu" className="yellow">pradyun2@illinois.edu</a>!.
                </p>
            </div>
        </div>

        <div className={styles.overlay} onClick={() => timeLine(0)}/>
        <div className={styles.timeline}>
            <div className={styles.exitButton} onClick={() => timeLine(0)}>
                <IoClose/>
            </div>
            <Swiper modules={[Navigation, Pagination, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                direction={direction}
                navigation
                keyboard
                pagination={{clickable: "true"}}
                className={styles.swiper}>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.slideHero}/>
                    <div className={styles.slideSpacer}/>
                    <div className={styles.slideContent}>
                        <div className={styles.slideShpiel}>
                            <h1 className={ styles.slideHead + " or emph" }>hello</h1> 
                            <p> Over the years, I've made all kinds of things for a multitude of reasons - education. working towards a problem, or for my own satisfaction.</p>
                            <p> While my rapt fascination is held by autonomous robotics and their associated subfields, I'm still rather varied in my fields of interest. So far I've had the luxury of exploring full stack development, machine learning, IoT hardware development, and more - I hope to only expand that list in the future at UIUC. </p>
                            <p> Perhaps calling this a timeline is a bit inaccurate - it's more of a collection of some of the most significant and important experiences in my life as a maker... which basically sounds like a timeline. And honestly, it might be.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>

          {
              displayCurrent == 1 ? (
                  <style>{`
html,
body {
    height: 100%;
    overflow: hidden;
}
                      `} </style>
              )
            : ""
          }

          <style jsx global>{`
          :root {
                --swiper-pagination-bullet-vertical-gap: 5vh;
                --swiper-pagination-bullet-horizontal-gap: 2vw;
            }
            .swiper-pagination-bullet {
                background: var(--lfg);
                width: 12px;
                height: 12px;
                border-radius: 6px;
            }

            .swiper-pagination-bullets {
                right: calc(5% - 6px) !important;
            }

            @media(max-width: 768px) {
                .swiper-pagination {
                    position: absolute;
                    transform: rotate(-90deg) !important;
                    width: 12px !important;
                    height: calc(60px + 8vw);
                    left: calc(40% + 2vw + 40px) !important;
                    top: calc(100% - 64px) !important;
                }

                .swiper-pagination-bullet {
                    margin: 2vw !important;
                    overflow: visible;
                }

                .content {
                    max-height: calc(100% - 92px) !important;
                }
            }

            @media(max-width: 620px) {
                .swiper-pagination {
                    left: calc(50% + 2vw - 30px) !important;
                }
            }
              `} </style>
      </main>
  )
}
