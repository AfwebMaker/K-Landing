import React from 'react'
//assets
import KargoshaLogo from '../../assets/images/header/Kargosha-Logo.svg'
import person from '../../assets/images/header/person.svg'

function Header() {
  return (
    <header className='w-full fcc' >
      <nav className='maxLayout flex justify-between items-center w-full h-[70px] py-5 mx-5'>
        <div className='h-full'>
          <img className='h-full' src={KargoshaLogo} alt="لوگو کارگشا" />
        </div>

        <div className='fcc text-sm'>
          <div className='ml-4'>
            <span>متخصص هستم</span>
            <img src={person} alt="ایکون شخص" />
          </div>
          <button className='bg-color-font-3 rounded-md text-white p-2'>
            ورود یا عضویت
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header