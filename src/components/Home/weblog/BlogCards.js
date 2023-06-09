import React from 'react'
// components
import BlogCard from './BlogCard'

const blogData = [
    {
        id:1,
        title:"پروژه های جدید انبوه سازی",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ..."
    },
    {
        id:2,
        title:"قوانین جدید اتحادیه جوشکاران",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ..."
    },
    {
        id:3,
        title:"افزایش قیمت طراحی",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ..."
    },
    {
        id:4,
        title:"فناوری جدید در طراحی لوله",
        description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ..."
    },
]

function BlogCards() {
  return (
    <div className='w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-5'>
        {
            blogData && blogData.map(item => (
                <BlogCard key={item.id} id={item.id} title={item.title} description={item.description} />
            ))
        }
    </div>
  )
}

export default BlogCards