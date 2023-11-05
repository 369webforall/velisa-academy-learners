import React from 'react'

import { Button } from '@/components/ui/button';
import Link from 'next/link';
const about = () => {
  return (
    <>
    <div className='w-full lg:w-[100%] flex flex-col lg:flex-row mx-auto px-4 lg:px-10'>
  <div className='lg:flex-1 bg-hero bg-cover bg-no-repeat h-[300px] lg:h-[70vh]'>
  </div>
  <div className='lg:flex-1  bg-opacity-0'>

    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Velisa Africa Academy</h1>

    <p className="text-base lg:text-lg xl:text-xl mb-6">
      Welcome to Velisa Africa Academy for Learners Portal, your trusted source for high-quality online education and professional development. We are dedicated to empowering learners across Africa with the skills and knowledge they need to excel.
    </p>
    
    <p className="text-base lg:text-lg xl:text-xl mb-6">
      Our mission is to provide a dynamic online learning platform that offers a wide range of courses and programs, enabling individuals and organizations to grow, learn, and thrive.
    </p>
    
    <Button variant="default">
      <Link href='/services'>Our Services</Link>
    </Button>
  </div>
</div>
    
    </>
  )
}

export default about