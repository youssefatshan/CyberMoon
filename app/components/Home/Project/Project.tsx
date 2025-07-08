import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto'>
      {/* Section Heading */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div>
            <h1 className='text-lg sm:text-md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
              Latest Work
            </h1>
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
              Driving Change with Innovative Successful Projects
            </h1>
          </div>
          <div className='lg:ml-auto'>
            <a href="#_" className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-color'>
              All Projects
            </a>
          </div>
        </div>
        {/* Project images */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p1.png" alt='image' width={600} height={600} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p2.png" alt='image' width={600} height={600} />
        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p3.png" alt='image' width={600} height={600} />
        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p4.png" alt='image' width={600} height={600} />
        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p5.png" alt='image' width={600} height={600} />
        </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
          <Image src="/assets/images/p6.png" alt='image' width={600} height={600} />
        </div>
      </div>
    </div>
  )
}

export default Project
