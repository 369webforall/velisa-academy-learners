import React from 'react'
import Slider from '@/components/Slider'

const page = () => {
  return (
    <div className='lg:mt-6 lg:h-full '>
      <h2 className=" text-2xl md:text-2xl mb-5 flex lg:w-full justify-center font-bold mt-5 animate-bounce text-green-700">
              Choose The Right Package For You
            </h2>
        <Slider/>
    </div>
  )
}

export default page