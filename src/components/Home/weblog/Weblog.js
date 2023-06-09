import React from 'react'
// components
import BlogCards from './BlogCards';

function Weblog() {
  return (
    <div className="text-center flex items-center flex-col py-10">
      <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <div className='w-full flex items-center justify-between mb-10'>
          <h2 className='text-color-font-3 font-bold text-lg fcc'>
            وبلاگ
          </h2>
          <span className='text-color-font-4 font-bold text-sm fcc'>
            بیشتر...
          </span>
        </div>
        <BlogCards />
      </div>
    </div>
  )
}

export default Weblog;