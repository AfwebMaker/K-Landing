import React from 'react'
import { Link } from 'react-router-dom'

function SubNavigationItem(props) {
    return (
        <div className='flex flex-col h-full w-1/5'>
            <span className='text-color-font-3 text-sm'>{props.values.title}</span>
            <div>
                <ul className='flex flex-col'>
                    {props.values.items.map((item, i) => (
                        <li key={i} className='my-3 text-xs hover:text-red-600'>
                            <Link to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SubNavigationItem