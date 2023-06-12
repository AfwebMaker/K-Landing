import React from 'react'
import QuestionsCard from './QuestionsCard'
import T from './ThreeColumnWithDescription'

function Questions() {
    return (
        <div className="text-center flex items-center flex-col py-10">
            <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
                <div className='flex items-center justify-center flex-col w-full mb-10'>
                    <h2 className="text-2xl font-bold tracking-tight text-color-font-3">
                        چرا کارگشا ؟
                    </h2>
                    <p className="mt-4 text-base text-color-font-2">
                        کارگشا تنها پلتفرم تخصصی در حوزه ساختمان است که همه متخصصین این صنعت را زیر یک سقف جمع کرده است.
                    </p>
                </div>
                {/* <QuestionsCard /> */}
                <T />
            </div>
        </div>
    )
}

export default Questions