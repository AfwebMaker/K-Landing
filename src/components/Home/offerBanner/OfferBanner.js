import React from 'react'

// react router dom
import { Link } from 'react-router-dom'

function offerBanner(props) {
  const { data } = props

  return (
    <div className="text-center flex items-center flex-col ">
      <div className="maxLayout px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
        <div className='w-full grid grid-cols-12 gap-y-5 md:gap-y-0 md:gap-x-5 items-center justify-between'>
          {
            data && data.map(item => (
              <Link to="#" key={item.id} className='relative col-span-12 fcc md:col-span-6 h-full overflow-hidden'>
                <div className='w-full h-full fcc  bg-red-500 max-w-xl rounded-xl overflow-hidden'>
                  <img src={item.imageSrc} alt='' />
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}



export default offerBanner