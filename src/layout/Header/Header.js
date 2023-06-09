import React, { useState, useEffect } from 'react'
//assets
import KargoshaLogo from '../../assets/images/header/Kargosha-Logo.svg'
import person from '../../assets/images/header/person.svg'
import search from '../../assets/images/header/Search.svg'
import Navigation from './Navigation'

function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  //detect scrollTop largest 100 or not
  useEffect(() => {
    const onScroll = window.addEventListener('scroll', (e) => {
      setMenuIsActive(e.target.documentElement.scrollTop > 100);
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, [menuIsActive]);

  return (
    <header className={`w-full flex justify-start items-center fixed z-20 bg-white flex-col h-[100px] ${menuIsActive ? 'shadow-xl' : ''}`} >
      <div className={`maxLayout flex justify-between items-center w-full px-5 z-10 transition-all bg-white ${menuIsActive ? 'h-[60px]' : 'h-full'}`}>
        <div className='h-full fcc'>
          <img className='h-[36px] ml-6' src={KargoshaLogo} alt="لوگو کارگشا" />
          <div className={`relative transition-all overflow-hidden fcc h-[37px] ${menuIsActive ? 'w-[550px]' : 'w-0'}`}>
            <img className='h-[50%] m-4 right-0 absolute' src={search} alt="ایکون سرچ" />
            <input className={`bg-color-1 h-full w-full font-light text-sm rounded-lg pr-12 focus:outline-0 `} type="text" placeholder='خدمت ساختمانی که به دنبال آن هستید را وارد کنید.' />
          </div>
        </div>
        <div className='fcc text-sm'>
          <div className='ml-4 fcc'>
            <img className='h-4' src={person} alt="ایکون متخصص هستم" />
            <span className='mr-2 text-color-font-2'>متخصص هستم</span>
          </div>
          <button className='bg-color-font-3 rounded-md text-white p-2 font-thin'>
            <span className='font-medium m-1'>ورود</span>
            یا
            <span className='font-medium m-1'>عضویت</span>
          </button>
        </div>
      </div>

      <Navigation />
    </header>
  )
}

export default Header