import React from 'react'
// components
import Category from './Category'
//assets
import icon1 from "../../../assets/images/home/hero/Drill_Icon.svg"
import icon2 from "../../../assets/images/home/hero/Screw_Icon.svg"


const categoriesData = [
    { id: 1, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 2, src: icon2, title: "لوله کشی ساختمان", link: "" },
    { id: 3, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 4, src: icon2, title: "لوله کشی ساختمان", link: "" },
    { id: 5, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 6, src: icon2, title: "لوله کشی ساختمان", link: "" },
    { id: 7, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 8, src: icon2, title: "لوله کشی ساختمان", link: "" },
    { id: 9, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 10, src: icon2, title: "لوله کشی ساختمان", link: "" },
    { id: 11, src: icon1, title: "نقاشی ساختمان", link: "" },
    { id: 12, src: icon2, title: "لوله کشی ساختمان", link: "" },
]

function Categories() {
    return (
        <div className='w-full flex flex-wrap items-center justify-center gap-x-10 px-24'>
            {
                categoriesData && categoriesData.map(item => (
                    <Category
                        key={item.id}
                        src={item.src}
                        title={item.title}
                        link={item.link}
                    />
                ))
            }
        </div>
    )
}

export default Categories