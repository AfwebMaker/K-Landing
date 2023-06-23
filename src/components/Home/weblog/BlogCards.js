import React from 'react'
// components
import BlogCard from "./BlogCard"
// ASSETS
import blog1 from "../../../assets/images/home/weblog/1.png"
import blog2 from "../../../assets/images/home/weblog/2.png"
import blog3 from "../../../assets/images/home/weblog/3.png"
import blog4 from "../../../assets/images/home/weblog/4.png"

const products = [
  {
    id: 1,
    title: "هزینه نگهداری استخر خانگی چقدر است و چگونگی کاهش هزینه",
    description: "قبل از آنکه در محوطه خانه خود یک استخر زیبا احداث کنید، مهم است...",
    href: 'https://wiki.kargosha.com/%d9%87%d8%b2%db%8c%d9%86%d9%87-%d9%86%da%af%d9%87%d8%af%d8%a7%d8%b1%db%8c-%d8%a7%d8%b3%d8%aa%d8%ae%d8%b1-%d8%ae%d8%a7%d9%86%da%af%db%8c/',
    imageSrc: blog1,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 2,
    title: "شارژ گاز کولر گازی چیست و چه زمانی انجام می‌شود؟",
    description: "در این مقاله از ویکی ساختمون می‌خواهیم به شارژ گاز کولر گازی بپردازیم...",
    href: 'https://wiki.kargosha.com/%d8%b4%d8%a7%d8%b1%da%98-%da%af%d8%a7%d8%b2-%da%a9%d9%88%d9%84%d8%b1-%da%af%d8%a7%d8%b2%db%8c/',
    imageSrc: blog2,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 3,
    title: "برای داشتن بهترین آشپزخانه چی رو کجا بزاریم؟!",
    description: "چیدمان کابینت نه تنها کار دشواری نیست، بلکه برای بسیاری از بانوان و دختران...",
    href: 'https://wiki.kargosha.com/%da%86%db%8c%d8%af%d9%85%d8%a7%d9%86-%da%a9%d8%a7%d8%a8%db%8c%d9%86%d8%aa/',
    imageSrc: blog3,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 4,
    title: "راهنمای خرید چمن مصنوعی",
    description: "قبل از خرید چمن مصنوعی می بایست به راهنمای آن و کیفیت محصول توجه کرد...",
    href: 'https://wiki.kargosha.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%da%86%d9%85%d9%86-%d9%85%d8%b5%d9%86%d9%88%d8%b9%db%8c/',
    imageSrc: blog4,
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