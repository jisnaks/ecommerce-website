import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider1.jpg'
import slider3 from '../assets/slider3.jpg'

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={slider1} className='w-100' alt='img' />
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} className='w-100 h-25' alt='img' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Header
