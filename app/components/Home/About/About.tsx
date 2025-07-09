import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Image content */}
        <div>
            <Image src="/assets/images/about.png" alt="image" width={700} height={700}/>
        </div>
        {/* Text Content */}
        <div>
            <p className='text-sm sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase'>
                About Us
            </p>
            <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]'>Innovations Excellence Building</h1>
            <p className='mt-3 text-gray-700 dark:text-gray-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/images/a1.png" alt='icon' width={50} height={50} />
                    <h1 className='text-lg sm:text-xl font-bold leading-5'>IT Infrastructure <br/>Management</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/images/a2.png" alt='icon' width={50} height={50} />
                    <h1 className='text-lg sm:text-xl font-bold leading-5'>Cloud Integration <br/> Service Provide</h1>
                </div>
            </div>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/images/a3.png" alt='icon' width={50} height={50} />
                    <h1 className='text-lg sm:text-xl font-bold leading-5'>Custom Software <br/>Development</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/images/a4.png" alt='icon' width={50} height={50} />
                    <h1 className='text-lg sm:text-xl font-bold leading-5'>Instant Supports <br/>any Queries</h1>
                </div>
            </div>
            <div className='mt-12'>
                <a href="#_" className='w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto'>About More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About;