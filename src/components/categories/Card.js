
import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    const { imageSrc, imageAlt, title } = props

    return (
        <div className="group block mb-10">
            <Link className='w-full h-full' to="/categories/decorations">
                <div
                    aria-hidden="true"
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <h3 className="mt-4 text-base font-semibold text-color-font-1">{title}</h3>
            </Link>
        </div>
    )
}

export default Card;