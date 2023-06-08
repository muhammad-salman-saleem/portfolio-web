import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../Images/avatar1.jpg'
import AVTR2 from '../../Images/avatar2.jpg'
import AVTR3 from '../../Images/avatar3.jpg'
import AVTR4 from '../../Images/avatar4.jpg'


// import required modules
import { Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const data = [
  {
    avatar: AVTR1,
    name: 'Arnet Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque, explicabo natus sequi soluta doloremque exercitationem eos quae molestias. Corporis tempora porro ad? Harum excepturi quae fugit soluta, ex maiores!',

  },
  {
    avatar: AVTR2,
    name: 'Arnet Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque, explicabo natus sequi soluta doloremque exercitationem eos quae molestias. Corporis tempora porro ad? Harum excepturi quae fugit soluta, ex maiores!',

  },
  {
    avatar: AVTR3,
    name: 'Arnet Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque, explicabo natus sequi soluta doloremque exercitationem eos quae molestias. Corporis tempora porro ad? Harum excepturi quae fugit soluta, ex maiores!',

  },
  {
    avatar: AVTR4,
    name: 'Arnet Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque, explicabo natus sequi soluta doloremque exercitationem eos quae molestias. Corporis tempora porro ad? Harum excepturi quae fugit soluta, ex maiores!',

  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper  modules={[Pagination]} className="container testimonials__container"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable:true}}>
        {
          data.map(({ avatar, name, review },index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="clint__avtar">
                  <img src={avatar} alt="Avatar1" />
                </div>
                <h5 className='clint__name'>{name}</h5>
                <small className='clint__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
