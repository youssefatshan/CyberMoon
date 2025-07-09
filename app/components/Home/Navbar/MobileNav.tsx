import { NavLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import Image from 'next/image';

type Props = {
  showNav:boolean;
  closeNav: () => void;
};

const MobileNav = ({closeNav,showNav}:Props) => {

  const navOpen = showNav ?'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* Navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 z-[1050]`}>
        {/* Logo */}
        <div className="flex flex-col items-center mt-8 mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-2">
            <Image src="/Cyber Moon - Logo.svg" alt="Cyber Moon Logo" width={48} height={48} className="object-contain" />
          </div>
          <span className="text-xl font-bold text-white">Cyber Moon</span>
        </div>
        {/* Nav Links */}
        {NavLinks.map((link)=> {
          return <Link key={link.id} href={link.url} >
            <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-blue-400 sm:text-[30px] mb-4'>
              {link.label}
            </p>
          </Link>
        })}
        {/* Cross icon for close the navbar */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
      </div>
    </div>
  )
}

export default MobileNav
