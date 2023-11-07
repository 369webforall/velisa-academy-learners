'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {TiTickOutline} from 'react-icons/ti'
import { Button } from './ui/button';
import Link from 'next/link';
import {SiWoocommerce} from "react-icons/si";
import {GrCloudSoftware} from "react-icons/gr";
import {GiReceiveMoney} from "react-icons/gi";
import {BsCodeSlash} from 'react-icons/bs';
import {TbSeo} from 'react-icons/tb'
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
        <div className="bg-green-600 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
          <h1 className='text-sm md:text-2xl font-bold text'>Starter Website Package</h1>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Responsive Design</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Content Management System</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Domain and Hosting Setup</p>
          <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Customized Website Design</p>
           
          
          <BsCodeSlash className=' w-10 h-10 '/>
          <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
        </Button>

          
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-green-500 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1 className='text-sm md:text-2xl font-bold text'>E-Commerce Solution</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Online Store Creation</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Payment Gateway Integration</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Inventory Management</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Product Reviews and Ratings</p>
      <AiOutlineShoppingCart className='w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-green-400 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1 className='text-sm md:text-2xl font-bold text'>Custom Web App</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Custom Development</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Scalability and Integration</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>User Training</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Ongoing Maintenance </p>
      <GiReceiveMoney className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-green-300 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1 className='text-sm md:text-2xl font-bold text'>SEO & Digital Marketing</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Pay-Per-Click Advertising</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Social Media Marketing</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Email Marketing</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Analytics and Reporting</p>
      <TbSeo className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-green-200 h-[70vh]  lg:h-[65vh] flex flex-col items-center justify-center gap-3 font-semibold rounded-lg shadow-md">
      
      <h1 className='text-sm md:text-2xl font-bold text'>Maintenance & Support</h1>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Regular updates</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>24/7 Technical Support</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Security Monitoring</p>
      <p className='flex-row flex gap-3 items-center'><TiTickOutline/>Performance Optimization</p>
      <GrCloudSoftware className=' w-10 h-10'/>
      <Button variant="outline" className=' w-[50%] flex justify-center'>
        <Link href='/'>Select</Link>
      </Button>
    </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;