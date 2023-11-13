import React from 'react'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
const about = () => {
  return (
    <>
    <div className='w-full lg:w-[100%] lg:h-[100vh] flex flex-col lg:flex-row mx-auto px-4 lg:px-10 bg-about bg-cover  bg-opacity-[30%]'>
  <div className='lg:flex-1  bg-no-repeat h-[200px] lg:h-[70vh] '>
  {/* <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mt-[25%]">Velisa Africa Academy</h1> */}
  <img src='https://velisaafrica.co.za/wp-content/uploads/2018/03/Velisa-Landscape-Logo.png' alt='logo'className='w-[90%] h-[100%] flex justify-center lg:w-[50%] lg:h-[50%]  lg:mb-2 lg:mt-[15%]' />
  </div>
  <div className='lg:flex-1  '>

    
    <h1 className='text-xl md:text-2xl font-bold text-green-700 lg:mt-5'>Velisa Africa Web Agency</h1>
    <p className="text-base lg:text-lg xl:text-xl mt-6 mb-6 ">
    
We pride ourselves on delivering compelling Web Services that include modern web design. We do website design, development, hosting (through a third party hosting company) and maintenance.
    </p>
    
    <p className="text-base lg:text-lg xl:text-xl mb-6">
    Our design and copywriting processes follow SEO guidelines, so your beautiful website is seen by your target market. Good design, affordability and customer care are our priorities.
    </p>

    <p className="text-base lg:text-lg xl:text-xl mb-6">
    Innovation meets your business essence. Our approach seamlessly blends remarkable design, practical functionality, and user engagement.
    </p>
    
    <Button variant="destructive" className=' w-[100%] flex justify-center lg:mt-10'>
      <Link href='/services'>Our Services</Link>
    </Button>
  </div>

  
</div>

    
    </>
  )
}

export default about