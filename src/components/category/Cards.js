import React from 'react'
// assets
import questionPoster from "../../assets/images/home/questions/Image.png"
//components
import Card from './Card'


const categories = [
    {
        id: 1,
        title: "دسته بندی",
        href: '#',
        imageSrc: questionPoster,
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    },
    {
        id: 2,
        title: "دسته بندی",
        href: '#',
        imageSrc: questionPoster,
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    },
    {
        id: 3,
        title: "دسته بندی",
        href: '#',
        imageSrc: questionPoster,
        imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    },
]

export default function Cards() {
    return (
        <>
            <div className='flex items-center justify-center flex-col w-full my-10'>
                <h2 className="text-2xl font-bold tracking-tight text-color-font-3">
                    {`
                    دسته بندی خدمات ${"slug"}

                    `}
                </h2>
                <p className="mt-4 text-sm md:text-base text-color-font-2 max-w-md md:max-w-max md:px-10">
                    برای مشاهده سرویس مورد نطر بر روی آن کلیک کنید.
                </p>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl md:max-w-7xl">

                    <div className="md:grid md:grid-cols-3 md:gap-x-8">
                        {categories && categories.map((category) => (
                            <Card
                                key={category.id}
                                title={category.title}
                                imageSrc={category.imageSrc}
                                imageAlt={category.imageAlt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}
