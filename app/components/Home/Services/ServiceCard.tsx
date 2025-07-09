import Image from 'next/image';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

type Props = {
  image:string;
  title:string;
}

const ServiceCard = ( { image, title }: Props) => {
  return (
    <div className='p-6 cursor-pointer hover:bg-blue-800 transition-all duration-500 group relative bg-gray-100 dark:bg-blue-950 shadow rounded-xl'>
      <Image 
        src={image} 
        alt={title} 
        width={60} 
        height={60} 
        className='object-contain'/>
      <h1 className='text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500'>{title}</h1>
      <p className='mt-4 font-medium text-gray-500 dark:text-gray-200 group-hover:text-gray-300 transition-all duration-500 '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem aperiam ad eligendi. Similique sed qui optio. Nesciunt, aut deleniti et officia ea repellat accusantium fugit, consequuntur molestiae ducimus qui ullam?
      </p>
      <div className='mt-6 text-xl font-medium flex items-center gap-1 group-hover:text-white transition-all duration-500'>
        <span>Learn More</span>
        <span><GoArrowUpRight /></span>
      </div>
    </div>
  )
}

export default ServiceCard