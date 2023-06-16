import React from 'react'
import { Link } from 'react-router-dom'

function MobileSubNavigationItem(props) {
    return (
        <li className='px-10 fcc h-[45px] cursor-pointer'>
            <Link className='h-full fcc' to={props.item.link}>
                {props.item.title}
            </Link>
        </li>
    )
}

export default MobileSubNavigationItem