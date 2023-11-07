import React from 'react'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
const about = () => {
  return (
    <>
    <div className='w-full lg:w-[100%] flex flex-col lg:flex-row mx-auto px-4 lg:px-10 bg-about bg-cover'>
  <div className='lg:flex-1  bg-no-repeat h-[200px] lg:h-[70vh] '>
  {/* <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mt-[25%]">Velisa Africa Academy</h1> */}
  <img src='https://velisaafrica.co.za/wp-content/uploads/2018/03/Velisa-Landscape-Logo.png' alt='logo'className='w-[90%] h-[100%] flex justify-center lg:w-[50%] lg:h-[50%]  lg:mb-2 lg:mt-[15%]' />
  </div>
  <div className='lg:flex-1  bg-opacity-0'>

    

    <p className="text-base lg:text-lg xl:text-xl mt-6 mb-6">
      Welcome to Velisa Africa Academy for Learners Portal, your trusted source for high-quality online education and professional development. We are dedicated to empowering learners across Africa with the skills and knowledge they need to excel.
    </p>
    
    <p className="text-base lg:text-lg xl:text-xl mb-6">
      Our mission is to provide a dynamic online learning platform that offers a wide range of courses and programs, enabling individuals and organizations to grow, learn, and thrive.
    </p>
    
    <Button variant="default" className=' w-[100%] flex justify-center'>
      <Link href='/services'>Our Services</Link>
    </Button>
  </div>

  
</div>

    
    </>
  )
}

export default about