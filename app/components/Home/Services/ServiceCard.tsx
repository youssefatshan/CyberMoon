import Image from 'next/image';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

type Props = {
  image:string;
  title:string;
}

const serviceDescriptions: { [key: string]: string } = {
  'Custom Software Development': 'We design and build tailored software solutions to meet your unique business needs, ensuring scalability and performance.',
  'Website Design & Development': 'Our team creates visually stunning, user-friendly websites that engage your audience and drive results.',
  'Cloud Computing and Hosting Service': 'Leverage secure, reliable cloud infrastructure to power your business and enable seamless remote access.',
  'Ai & Machine Learning Integration': 'Integrate advanced AI and machine learning to automate processes and gain actionable insights.',
  'Android & IOS App Development': 'We develop robust, intuitive mobile apps for Android and iOS to expand your digital reach.',
  '3D Graphics & Vector Designing': 'Enhance your brand with custom 3D graphics and vector designs for marketing, products, and more.'
};

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
        {serviceDescriptions[title] || 'We provide innovative solutions to help your business grow.'}
      </p>
      <div className='mt-6 text-xl font-medium flex items-center gap-1 group-hover:text-white transition-all duration-500'>
        <span>Learn More</span>
        <span><GoArrowUpRight /></span>
      </div>
    </div>
  )
}

export default ServiceCard