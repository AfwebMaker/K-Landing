
import React from 'react'
//react router dom
import { Link } from 'react-router-dom'
// image
import questionPoster from "../../../assets/images/home/questions/Image.png"

function QuestionsCards(props) {
    const { title, description } = props

    return (
        <div className=' h-[350px] overflow-hidden cursor-pointer w-[370px] max-w-[370px]'>
            <Link to="#" className='w-full h-full flex flex-col items-center justify-center'>
                <div className='fcc w-full relative h-[75%] flex items-start justify-center bg-color-1 rounded-xl'>
                    <img className='h-full object-cover rounded-xl' src={questionPoster} alt='' />
                </div>
                <div className='w-full h-[22%] flex flex-col items-start justify-center px-3 pt-4'>
                    <span className='text-color-font-3 text-sm font-bold flex items-center justify-start mb-5'>
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

export default QuestionsCards