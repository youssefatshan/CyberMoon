import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default Home
