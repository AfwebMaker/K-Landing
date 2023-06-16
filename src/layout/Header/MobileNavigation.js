import React from 'react'
import { Link } from 'react-router-dom'

function MobileNavigation(props) {
    const menuContent = [
        {
            title: 'تخریب و خاکبرداری',
            items: [
                {
                    title: 'تخریب',
                    link: 'https://saaland.ir'
                },
                {
                    title: 'خاکبرداری',
                    link: ''
                },
                {
                    title: 'حمل و نقل نخاله',
                    link: ''
                }
            ]
        },
        {
            title: 'اجرای سازه',
            items: [
                {
                    title: 'سازه',
                    link: ''
                },
                {
                    title: 'فوندانسیون',
                    link: ''
                },
                {
                    title: 'سقف',
                    link: ''
                },
                {
                    title: 'پایدارسازی',
                    link: ''
                }
            ]
        },
        {
            title: 'تاسیسات',
            items: [
                {
                    title: 'تاسیسات الکتریکی',
                    link: ''
                },
                {
                    title: 'تاسیسات مکانیکی',
                    link: ''
                },
                {
                    title: 'هوشمند سازی',
                    link: ''
                }
            ]
        },
        {
            title: 'امور ساختمانی',
            items: [
                {
                    title: 'سفت کاری',
                    link: ''
                },
                {
                    title: 'نازک کاری',
                    link: ''
                },
                {
                    title: 'عایق کاری',
                    link: ''
                },
                {
                    title: 'نما کاری',
                    link: ''
                },
                {
                    title: 'محوطه سازی',
                    link: ''
                },
                {
                    title: 'تزئینات',
                    link: ''
                }
            ]
        },
        {
            title: 'تعمیر و نگهداری',
            items: [
                {
                    title: 'تعمیر نگه داری',
                    link: ''
                }
            ]
        },
    ]

    //toggle subnav handler
    const mobileSubNav = document.getElementsByClassName('mobileSubNav')
    const subNavClickHandler = (i, e) => {
        if (mobileSubNav[i].style.display === 'flex') {
            mobileSubNav[i].style.display = 'none'
            // e.target.addClass('abcd')
        } else {
            mobileSubNav[i].style.display = 'flex'
        }

    }

    return (
        <div className={`bg-white overflow-y-auto lg:hidden h-[calc(100vh-100px)] transition-all absolute top-[100px] w-full ${props.hamburgerMenuIsActive ? 'left-0' : 'left-[100%]'}`}>
            <ul className='w-full fcc flex-col bg-white border-t'>
                {menuContent.map((items, i) => (
                    <>
                        <li onClick={(e) => { subNavClickHandler(i, e) }} className='fcc h-[45px] cursor-pointer'>
                            {items.title}
                        </li>
                        <ul className='mobileSubNav w-full justify-center items-center hidden flex-col bg-slate-100'>
                            {items.items.map((item) => (
                                <li className='fcc h-[45px] cursor-pointer'>
                                    <Link className='h-full fcc' to={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default MobileNavigation

