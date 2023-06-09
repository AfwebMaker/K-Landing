import React from 'react'
//react router dom
import { Link } from 'react-router-dom'
// image
import cardPoster from "../../../assets/images/home/weblog/Card Image.png"

function BlogCard(props) {
    const { id, title, description } = props

    return (
        <div className='bg-color-1 h-72 overflow-hidden rounded-xl cursor-pointer max-w-[300px]'>
            <Link to="#" className='w-full h-full flex flex-col items-center justify-center'>
                <div className='fcc w-full relative h-[60%] flex items-start justify-center'>
                    <img className='h-full object-cover' src={cardPoster} alt='' />
                </div>
                <div className='w-full h-[40%] flex flex-col items-start justify-center px-3 py-4'>
                    <span className='text-color-font-3 text-sm font-bold flex items-center justify-start mb-2'>
                        {title}
                    </span>
                    <p className='text-color-font-2 text-right text-xs'>
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard