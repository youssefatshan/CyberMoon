import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-center'> 
            {/* Subheading */}
            <h1 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500'>
                Latest Blog
            </h1>
            {/* Heading */}
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
                Ready Our Latest Insights from <br/>Our Blog Posts
            </h1>
        </div>
        <div className='w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            <div>
                <BlogCard image="/assets/images/b1.png" title="Expert Advice for Growing Your Digital Presence" />
            </div>
                        <div>
                <BlogCard image="/assets/images/b2.png" title="Data-Driven Strategies and Case Studies Success" />
            </div>
            <div>
                <BlogCard image="/assets/images/b3.png" title="The Complete SEO Blog for Digital Success" />
            </div>
        </div>
    </div>
  )
}

export default Blog
