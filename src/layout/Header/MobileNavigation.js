import React from 'react'
import { Link } from 'react-router-dom'
//react icon
import { BsBuildingGear } from 'react-icons/bs'
//react icons
import { BiTimer } from 'react-icons/bi'
//assets
import kargoshText from '../../assets/images/header/kargoshText.svg'
import file from '../../assets/images/header/File.svg'
import friends from '../../assets/images/header/Friends.svg'
import wallet from '../../assets/images/header/Wallet.svg'
import MobileSubNavigation from './MobileSubNavigation'

function MobileNavigation(props) {

    //toggle subNav handler
    const mobileSubNav = document.getElementsByClassName('mobileSubNav')
    const navItem = document.getElementsByClassName('navItem')
    const arrowItem = document.getElementsByClassName('arrowItem')
    const subNavClickHandler = (i) => {
        if (mobileSubNav[i].style.display === 'flex') {
            mobileSubNav[i].style.display = 'none'
            arrowItem[i].style.transform = 'rotate(0deg)'
            navItem[i].style.color = '#636466'

        } else {
            mobileSubNav[i].style.display = 'flex'
            navItem[i].style.color = '#45B649'
            arrowItem[i].style.transform = 'rotate(180deg)'
        }

    }

    return (
        <div className={`top-0 right-0 w-full h-screen absolute z-40 flex lg:hidden ${props.hamburgerMenuIsActive ? 'flex' : 'hidden'}`}>
            <div onClick={() => { props.setHamburgerMenuIsActive(false) }} className={`cursor-pointer w-full h-full bg-[#00000078]`}></div>
            <div className={`customScrollbar bg-white overflow-y-auto absolute h-screen z-30 transition-all py-4 top-0 w-[312px] ${props.hamburgerMenuIsActive ? 'right-0' : 'right-[-100%]'} text-color-font-2`}>

                <div className='h-10 border-b pb-4 px-4'>
                    <Link className='flex h-full w-auto' to='https://kargosha.com/'>
                        <img className='h-full' src={kargoshText} alt="کارگشا لوگو" />
                    </Link>
                </div>
                <ul className='w-full flex items-start justify-center flex-col bg-white text-sm border-b py-4'>
                    <li className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                        <BiTimer size={22} className='ml-2' />
                        خدمات فوری
                    </li>
                    <li className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                        <BsBuildingGear size={20} className='ml-2' />
                        بازسازی
                    </li>
                    <li className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                        <img className='ml-2' src={file} alt="فروشگاه فایل" />
                        فروشگاه فایل
                    </li>
                    <li className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                        <img className='ml-2' src={friends} alt="دیده شو" />
                        دیده شو
                    </li>
                    <li className='px-4 flex justify-start items-center h-[45px] cursor-pointer w-full relative'>
                        <img className='ml-2' src={wallet} alt="قیمت های روز" />
                        قیمت های روز
                    </li>
                </ul>
                <ul className='w-full flex items-start justify-center flex-col bg-white text-sm py-2'>
                    <span className='px-4 py-4 text-black font-semibold text-sm flex '>
                        <svg className='ml-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_24_556)">
                                <path d="M13.1501 9.18754C13.5655 8.91036 14.0556 8.79231 14.5353 8.84611L19.9998 3.38008L16.9396 0.319824L11.4743 5.78585C11.5296 6.27149 11.407 6.76758 11.1187 7.18822L13.1501 9.18754Z" fill="#45B649" />
                                <path d="M3.61775 15.8445L3.41976 15.6465L2.38349 16.484L0.638184 19.2342L1.08497 19.681L3.83741 17.9357L4.6742 16.9024L4.47546 16.7014L7.95112 13.225L7.08743 12.3733L3.61775 15.8445Z" fill="#45B649" />
                                <path d="M8.37073 6.20632C8.77194 4.77182 8.40808 3.16847 7.28215 2.0403C6.15996 0.922593 4.57529 0.555751 3.14901 0.942766L5.56449 3.3575L4.93093 5.72292L2.56251 6.35649L0.147781 3.94325C-0.23774 5.36878 0.128355 6.95345 1.24831 8.07415C2.42205 9.24864 4.11356 9.59307 5.59289 9.11192L5.60633 9.12537L15.5425 19.0615C15.9354 19.4537 16.451 19.6525 16.9657 19.6525C17.4813 19.6525 17.9953 19.4537 18.3898 19.0615C19.175 18.2777 19.175 17.0039 18.3898 16.2142L8.37073 6.20632ZM17.1391 18.7238C16.7162 18.7238 16.3733 18.3794 16.3733 17.955C16.3733 17.5291 16.7162 17.1862 17.1391 17.1862C17.5649 17.1862 17.9094 17.5291 17.9094 17.955C17.9101 18.3794 17.5657 18.7238 17.1391 18.7238Z" fill="#45B649" />
                            </g>
                            <defs>
                                <clipPath id="clip0_24_556">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        خدمات ساختمانی
                    </span>
                    {props.menuContent.map((items, i) => (
                        <MobileSubNavigation
                            key={i}
                            id={i}
                            items={items}
                            subNavClickHandler={subNavClickHandler}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation

