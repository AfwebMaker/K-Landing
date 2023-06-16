import React from 'react'
import { Link } from 'react-router-dom'

function MobileSubNavigationItem(props) {
    return (
        <li className='px-10 flex justify-start items-center h-[45px] cursor-pointer w-full'>
            <Link className='h-full w-full flex justify-start items-center' to={props.item.link}>
                {props.item.title}
            </Link>
        </li>
    )
}

export default MobileSubNavigationItem