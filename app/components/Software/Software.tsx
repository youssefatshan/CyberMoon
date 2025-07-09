import React from 'react'
import SoftwareCard from './SoftwareCard'

const Software = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-center'>
            {/* Subheading */}
            <h1 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500'>
                Software
            </h1>
            {/* Heading */}
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>Driving Change with Innovative <br/>Successful Software</h1>
        </div>
        {/* Cards */}
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <div>
                <SoftwareCard icon='/assets/images/i1.png' title="Best Marketing Software" />
            </div>
                        <div>
                <SoftwareCard icon='/assets/images/i2.png' title="Product Sales Software" />
            </div>
                        <div>
                <SoftwareCard icon='/assets/images/i3.png' title="Best Marketing Software" />
            </div>
        </div>
    </div>
  )
}

export default Software
