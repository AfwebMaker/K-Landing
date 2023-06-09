import React from 'react'
// components
import BlogCard from './BlogCard'

function BlogCards() {
  return (
    <div className='w-full grid grid-cols-12 items-center justify-center gap-x-3'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
  )
}

export default BlogCards