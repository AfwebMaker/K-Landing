import React from 'react'
// react router dom
import { Link } from "react-router-dom"

function Category(props) {
    const { src, title, link } = props
    return (
        <div className='mb-10'>
            <Link to={link}>
                <div className='w-32 h-32 bg-white boxShadowCustom hover:shadow-inner rounded-full fcc mb-5'>
                    <img src={src} alt='' />
                </div>
                <span className='w-36 h-40 text-color-font-2 text-xs'>
                    {title}
                </span>
            </Link>

        </div>
    )
}

export default Category