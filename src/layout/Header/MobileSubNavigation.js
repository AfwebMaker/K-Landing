import React from 'react'
//react icon
import { RiArrowDownSLine } from 'react-icons/ri'
import MobileSubNavigationItem from './MobileSubNavigationItem'

function MobileSubNavigation(props) {
    return (
        <>
            <li onClick={() => { props.subNavClickHandler(props.id) }} className='navItem px-4 flex justify-between items-center h-[45px] cursor-pointer w-full relative'>
                {props.items.title}
                <div className='transition-all arrowItem flex'><RiArrowDownSLine size={20} /></div>
            </li>
            <ul className='mobileSubNav w-full justify-center items-start hidden flex-col bg-[#F1F2F4]'>
                {props.items.items.map((item, i) => (
                    <MobileSubNavigationItem
                        key={i}
                        item={item}
                    />
                ))}
            </ul>
        </>
    )
}

export default MobileSubNavigation