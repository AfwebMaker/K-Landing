import React, { useEffect, useState } from 'react'
//assets
import screwdriver from '../../assets/images/header/Screwdriver.svg'
import file from '../../assets/images/header/File.svg'
import friends from '../../assets/images/header/Friends.svg'
import wallet from '../../assets/images/header/Wallet.svg'
import SubNavigation from './SubNavigation'

function Navigation(props) {
    const [subNavIsActive, setSunNavIsActive] = useState(false);

    //detect subNav active for add header padding 
    useEffect(() => {
        props.onActiveSubNav(subNavIsActive)
    }, [props, subNavIsActive])

    //disable body scroll when hamburger menu active
    const body = document.getElementsByTagName('body')[0]
    useEffect(() => {
        if (subNavIsActive) {
            body.style.overflowY = "hidden"
        } else {
            body.style.overflowY = "auto"
        }
    }, [subNavIsActive, body.style])

    return (
        <>
            <nav className='absolute maxLayout w-full lg:flex hidden transition-all right-0 bg-white h-[40px] top-[60px] px-5 text-sm'>
                <ul className='fcc h-full text-color-font-2 font-regular'>
                    <li onMouseLeave={() => {setSunNavIsActive(false)}} onMouseEnter={() => { setSunNavIsActive(true) }} className='group fcc pl-6 cursor-pointer h-full'>
                        <img className='ml-2' src={screwdriver} alt="ایکون خدمات ساختمانی" />
                        <span>خدمات ساختمانی</span>
                        {subNavIsActive && <SubNavigation setSunNavIsActive={setSunNavIsActive} />}
                    </li>
                    <li className='fcc px-6 cursor-pointer'>
                        <span>خدمات فوری</span>
                    </li>
                    <li className='fcc px-6 cursor-pointer'>
                        <span>بازسازی</span>
                    </li>
                    <div className='w-[2px] h-3 bg-color-2'></div>
                    <li className='fcc px-6 cursor-pointer'>
                        <img className='ml-2' src={file} alt="ایکون فروشگاه فایل" />
                        <span>فروشگاه فایل</span>
                    </li>
                    <li className='fcc px-6 cursor-pointer'>
                        <img className='ml-2' src={friends} alt="ایکون دیده شو" />
                        <span>دیده شو</span>
                    </li>
                    <li className='fcc px-6 cursor-pointer'>
                        <img className='ml-2' src={wallet} alt="ایکون قیمت های روز" />
                        <span>قیمت های روز</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation