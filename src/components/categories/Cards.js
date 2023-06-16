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
    slug: "decorations",
  },
  {
    id: 2,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    slug: "car",
  },
  {
    id: 3,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    slug: "#",
  },
  {
    id: 4,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    slug: "#",
  },
  {
    id: 5,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    slug: "#",
  },
  {
    id: 6,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    slug: "#",
  },
  {
    id: 7,
    title: "دسته بندی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    slug: "#",
  },
]

export default function Cards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl md:max-w-7xl">
        <div className="md:grid md:grid-cols-3 md:gap-x-8">
          {categories && categories.map((category) => (
            <Card
              key={category.id}
              title={category.title}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
