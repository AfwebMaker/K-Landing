import React from 'react'
// assets
import cardPoster from "../../../assets/images/home/weblog/Card Image.png"
// components
import BlogCard from "./BlogCard"

const products = [
  {
    id: 1,
    title: "قوانین جدید اتحادیه جوشکاران",
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    href: '#',
    imageSrc: cardPoster,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 2,
    title: "پروژه های جدید انبوه سازی",
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    href: '#',
    imageSrc: cardPoster,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 3,
    title: "افزایش قیمت طراحی",
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    href: '#',
    imageSrc: cardPoster,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 4,
    title: "فناوری جدید در طراحی لوله",
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    href: '#',
    imageSrc: cardPoster,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-0 lg:max-w-7xl lg:px-0">
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products && products.map((product) => (
            <BlogCard
              key={product.id}
              title={product.title}
              description={product.description}
              href={product.href}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}