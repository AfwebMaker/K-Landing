import React from 'react'
//react router dom
import { Link } from 'react-router-dom'

function BlogCard(props) {
    const { title, description, imageSrc, imageAlt } = props
    return (
        <div className="group relative bg-color-1 rounded-lg overflow-hidden pb-4 max-w-[300px]">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100">
                <img src={imageSrc} alt={imageAlt} className="object-cover object-center" />
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3 className="text-color-font-3 text-sm px-2">
                    <Link to="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {title}
                    </Link>
                </h3>
            </div>
            <p className="mt-1 text-color-font-2 text-right p-2 text-xs ">
                {description}
            </p>
        </div>
    )
}

export default BlogCard