'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {TiTickOutline} from 'react-icons/ti'
import { Button } from './ui/button';
import Link from 'next/link';
const Slider = () =>  {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{ 640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <div className="bg-orange-600 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
          <h1>Package 1</h1>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn CSS</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Html</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Javascript</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Bootsrap</p>
          <AiOutlineShoppingCart className=' w-10 h-10'/>
          <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
        </Button>

          
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-orange-500 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1>Package 2</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn CSS</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Html</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Javascript</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Bootsrap</p>
      <AiOutlineShoppingCart className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-orange-400 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1>Package 3</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn CSS</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Html</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Javascript</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Bootsrap</p>
      <AiOutlineShoppingCart className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-orange-300 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1>Package 4</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn CSS</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Html</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Javascript</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Bootsrap</p>
      <AiOutlineShoppingCart className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-orange-200 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1>Package 5</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn CSS</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Html</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Javascript</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Learn Bootsrap</p>
      <AiOutlineShoppingCart className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;