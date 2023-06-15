import React from 'react'
import Cards from './Cards'

function MainCategories() {
    return (
        <div className="text-center flex items-center flex-col py-10">
            <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
                <div className='flex items-center justify-center flex-col w-full mb-14'>
                    <h2 className="text-2xl font-bold tracking-tight text-color-font-3">
                        دسته بندی
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-color-font-2 max-w-md md:max-w-max md:px-10">
                        برای مشاهده دسته بندی مورد نطر بر روی آن کلیک کنید.
                    </p>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default MainCategories