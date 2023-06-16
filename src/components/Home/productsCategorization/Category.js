import React from 'react'
// react router dom
import { Link } from "react-router-dom"

function Category(props) {
    const { src, title, link } = props
    return (
        <div className='col-span-4 sm:col-span-3 lg:col-span-2 mt-5 flex items-center justify-center'>
            <Link className='h-full w-full flex flex-col items-center justify-center' to={link}>
                <div className='w-20 sm:w-28 h-20 sm:h-28 bg-white boxShadowCustom hover:shadow-inner rounded-full fcc'>
                    <img className='w-14 sm:w-16' src={src} alt='' />
                </div>
                <span className='w-full h-14 text-color-font-2 font-bold text-[10px] fcc px-2'>
                    {title}
                </span>
            </Link>
        </div>
    )
}

export default Category