import {useState} from 'react'
import {FiImage, FiMinimize2} from "react-icons/fi"

import styles from '../styles/Gallery.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Keyboard} from 'swiper'

import 'swiper/css';
import 'swiper/css/pagination'

const Overlay = ({images, hook, data}) => (
  <div className={styles.overlay}>
    <div className={styles.bgmask} onClick={()=>hook(false)}/>
      <div className={styles.carousel}>
        <Swiper className={styles.swiper} modules={[Pagination, Keyboard]}
            spaceBetween={0} slidesPerView={1}
            direction="horizontal"
            keyboard pagination={{clickable:"true"}}>
            {
            images.map(link=>(<SwiperSlide className={styles.swipe}>
            <img className={styles.coverimg} loading="lazy" src={"/"+data[link]}/>
                </SwiperSlide>))
            }
        </Swiper>

        <div className={styles.exit} onClick={()=>hook(false)}><FiMinimize2/></div>
      </div>

    <style jsx global>{`
      .swiper-pagination {
        width: auto!important;
        background: var(--lbg);
        padding: 0px 10px;
        border-radius: 15px;
        height: 24px;

        padding-top: 6px;

        left: 10px!important;
        align-items: center;

        --swiper-pagination-bullet-size: 12px;
        --swiper-pagination-color: var(--lfg);
      }

      .swiper-pagination-bullet {
        background: var(--fg);
      }
    `}</style>
  </div>
)

export default function ImageGallery({images, data}) {
  const [caro, carrot] = useState(false);

  return (
    <div className={styles.img_container}>
      <div className={styles.imgbutton} onClick={() => carrot(true)}>
        <FiImage/></div>
      { caro ? (<Overlay images={images} hook={carrot} data={data}/>) : null }
    </div>
  )
}
