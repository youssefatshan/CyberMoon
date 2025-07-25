import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-blue-950'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* 1st Part */}
            <div>
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center flex-col'>
                        <Image src="/Cyber Moon - Logo.svg" alt="Cyber Moon Logo" width={32} height={32} className="object-contain" />   
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Cyber Moon</h1>
                </div>
                <p className='mt-4 text-gray-200 font-medium'>
                    Cyber Moon is a forward-thinking, tech-driven digital agency specializing in building custom software solutions, web and mobile applications, and branding experiences for businesses across industries.
                </p>            
                {/* Socials Links */}
                <div className='mt-6 flex items-center space-x-2'>
                    <div className='flex items-center justify-center flex-col w-8 h-8 bg-blue-600 text-white rounded-full'>
                        <FaFacebookF />
                    </div>
                    <div className='flex items-center justify-center flex-col w-8 h-8 bg-pink-500 text-white rounded-full'>
                        <FaInstagram />
                    </div>
                    <div className='flex items-center justify-center flex-col w-8 h-8 bg-black text-white rounded-full'>
                        <FaXTwitter />
                    </div>
                    <div className='flex items-center justify-center flex-col w-8 h-8 bg-red-600 text-white rounded-full'>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
            {/* 2nd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold text-white'>Company</h1>
                <p className='footer__link'>About</p>
                <p className='footer__link'>News & Press</p>
                <p className='footer__link'>Our Customer</p>
                <p className='footer__link'>Leadership</p>
                <p className='footer__link'>Careers</p>
            </div>
            {/* 3rd part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold text-white'>Resources</h1>
                <p className='footer__link'>Blog</p>
                <p className='footer__link'>Webinar & Events</p>
                <p className='footer__link'>Podcast</p>
                <p className='footer__link'>E-book & Guides</p>
            </div>
            {/* 4th part */}
            <div>
                <h1 className='text-lg font-bold text-white'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-white'>Our Mobile Phone</h1>
                    <h1 className='text-base font-bold text-yellow-300 mt-1'>+963-930341045</h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm text-white'>Our Email</h1>
                    <h1 className='text-base font-bold text-yellow-300 mt-1'>Engr.YoussefYA7@Gmail.com</h1>
                </div>
            </div>
        </div>
        {/* Bottom part */}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center text-white md:text-left'>
                Copyright © {new Date().getFullYear()} Engr. Mohamad Yousef Atshan. All rights reserved
            </p>
            <div className='flex items-center text-white space-x-4 mt-4 md:mt-0'>
                <span>Social: </span>
                <a href='https://facebook.com/YouzarsifYA7' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 text-white'>
                    <FaFacebook />
                </a>
                <a href='https://x.com/YouzarsifYA7' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 text-white'>
                    <FaXTwitter/>
                </a>
                <a href='https://linkedin.com/in/YouzarsifYA7' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500 text-white'>
                    <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
