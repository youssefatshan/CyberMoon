"use client";
import React, {useState} from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false); 

  const openNavHandLer = ()=>setShowNav(true);
  const closeNavHandler = ()=>setShowNav(false);

  return (
    <div>
      <Nav openNav = {openNavHandLer}/>
      <MobileNav showNav = {showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav
