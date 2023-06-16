import React from 'react'
// assets
import cardPoster from "../../../assets/images/home/weblog/Card Image.png"
// components
import BlogCard from "./BlogCard"

const products = [
  {
    id: 1,
    title: "هزینه نگهداری استخر خانگی چقدر است و چگونگی کاهش هزینه",
    description: "قبل از آنکه در محوطه خانه خود یک استخر زیبا احداث کنید، مهم است که هزینه نگهداری استخر خانگی را بسنجید. لذت بردن از یک استخر زیبا یک طرف قضیه...",
    href: 'https://wiki.kargosha.com/%d9%87%d8%b2%db%8c%d9%86%d9%87-%d9%86%da%af%d9%87%d8%af%d8%a7%d8%b1%db%8c-%d8%a7%d8%b3%d8%aa%d8%ae%d8%b1-%d8%ae%d8%a7%d9%86%da%af%db%8c/',
    imageSrc: "https://cdn.kargosha.com/user/2022-11/1-18-780x470-1.jpg",
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 2,
    title: "شارژ گاز کولر گازی چیست و چه زمانی انجام می‌شود؟",
    description: "در این مقاله از ویکی ساختمون می‌خواهیم به شارژ گاز کولر گازی بپردازیم. مبرد، گاز کولر گازی، وظیفه خنک کردن محیط اطراف و سرد کردن کمپرسور کولر را به عهده...",
    href: 'https://wiki.kargosha.com/%d8%b4%d8%a7%d8%b1%da%98-%da%af%d8%a7%d8%b2-%da%a9%d9%88%d9%84%d8%b1-%da%af%d8%a7%d8%b2%db%8c/',
    imageSrc: "https://cdn.kargosha.com/user/2022-11/7-780x470.jpeg",
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 3,
    title: "چیدمان کابینت : برای داشتن بهترین آشپزخانه چی رو کجا بزاریم؟!",
    description: "چیدمان کابینت نه تنها کار دشواری نیست، بلکه برای بسیاری از بانوان و دختران جوان، کاری لذت بخش است. همین که ظروف و وسایل، به طور سازمان یافته درون...",
    href: 'https://wiki.kargosha.com/%da%86%db%8c%d8%af%d9%85%d8%a7%d9%86-%da%a9%d8%a7%d8%a8%db%8c%d9%86%d8%aa/',
    imageSrc: "https://wiki.kargosha.com/wp-content/uploads/2020/07/2-11-780x470.jpg",
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 4,
    title: "فناوری جدید در طراحی لوله",
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ',
    href: '#',
    imageSrc: "https://cdn.kargosha.com/user/2022-11/1-18-780x470-1.jpg",
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