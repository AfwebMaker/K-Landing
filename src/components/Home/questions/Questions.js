import React from 'react'
import QuestionsCard from './QuestionsCard'

function Questions() {
    return (
        <div className="text-center flex items-center flex-col py-10">
            <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
                <div className='flex items-center justify-center flex-col w-full mb-10'>
                    <span className='text-color-font-3 font-bold text-lg mb-5'>
                        چرا کارگشا ؟
                    </span>
                    <p className='text-color-font-2 text-xs'>
                        کارگشا تنها پلتفرم تخصصی در حوزه ساختمان است که همه متخصصین این صنعت را زیر یک سقف جمع کرده است.
                    </p>
                </div>
                <QuestionsCard />
            </div>
        </div>
    )
}

export default Questions