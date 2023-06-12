
import React from 'react'
//react router dom
import { Link } from 'react-router-dom'
// image
import questionPoster from "../../../assets/images/home/questions/Image.png"

function QuestionsCards(props) {
    const { imageSrc, imageAlt, title, description } = props

    return (
        <div className="group block mt-0">
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
            <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
    )
}

export default QuestionsCards