import React from "react"
// assets
import AcademyMedium from "../../src/assets/images/home/brands/Academy Medium.svg"
import AutoSazeMedium from "../../src/assets/images/home/brands/Auto Saze Medium.svg"
import KargoshaMedium from "../../src/assets/images/home/brands/Kargosha Medium.svg"
import MekaMedium from "../../src/assets/images/home/brands/Meka Medium.svg"
import MetriChandMedium from "../../src/assets/images/home/brands/Metri Chand Medium.svg"
import SindbadMedium from "../../src/assets/images/home/brands/Sindbad Medium.svg"
import TabletAndStatue from "../../src/assets/images/about_us/TabletAndStatue.jpg"

import aboutImage_1 from "../../src/assets/images/about_us/aboutImage_1.png"
import aboutImage_2 from "../../src/assets/images/about_us/aboutImage_2.png"
import aboutImage_3 from "../../src/assets/images/about_us/aboutImage_3.png"
import aboutImage_4 from "../../src/assets/images/about_us/aboutImage_4.png"
import aboutImage_5 from "../../src/assets/images/about_us/aboutImage_5.png"
// react router dom 
import { Link } from 'react-router-dom'



export default function AboutUs() {

    return (
        <div className="bg-white w-full m-auto">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#45B649] to-[#45B649] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl pb-32 pt-36 sm:pt-40 lg:pt-32">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="max-w-xl lg:shrink-0 xl:max-w-2xl px-[20px] md:px-[32px]">
                                    <h1 className="text-3xl font-bold tracking-tight text-color-font-1 sm:text-5xl">
                                        ما کارگشا هستیم
                                    </h1>
                                    <p className="relative mt-6 pl-10 text-base leading-8 text-color-font-2 sm:max-w-md lg:max-w-none">
                                        این سامانه در جهت ارتباط کاربر و متخصص راه اندازی شده است، تا افراد به موقع و به درستی بتوانند نیروی تخصصی مورد نظر خود را برای انجام کارهای ساختمانی پیدا کنند.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 px-[20px] md:px-[32px]">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                src={aboutImage_1}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                src={aboutImage_2}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={aboutImage_3}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                src={aboutImage_4}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src={aboutImage_5}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 maxLayout px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-color-font-1 sm:text-4xl">
                            شروع فعالیت
                        </h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="w-full flex">
                                <p className="text-base md:text-lg leading-10 text-color-font-2">
                                    شرکت آینده پژوهانن نوآور کارگشا از سال 1396 فعالیت خود را با تمرکز بر ارائه خدمات فنی و مهندسی ساختمان بر بستر وب آغاز کرده است. ماموریت ما ماموریت ما ارائه راهکارهای متناسب با چالش های موجود در صنعت ساختمان است. ما برآنیم، که با استفاده از فناوری روز، خدمت رسانی به موقع و درستی را به شما ارائه دهیم.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-10 sm:mt-20 xl:mx-auto xl:max-w-[1300px] xl:px-8">
                    <img
                        src={TabletAndStatue}
                        alt=""
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-20 w-full px-6 sm:mt-40 lg:px-8 maxLayout">
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-color-font-1 sm:text-4xl">
                            خدمات
                        </h2>
                        <p className="mt-6 text-base md:text-lg leading-7 text-color-font-2">
                            این سامانه در درجه اول موظف به ارائه خدمات به تمامی شهروندانی است، که به نوعی نیاز به خدمات فنی و مهندسی در ساختمان، از نقاشی تا بازسازی کامل، در حال بهره برداری را دارند. این سامانه با شناسایی، احراز هویت، بررسی صلاحیت، رتبه بندی، عقد قرارداد و اخذ ضمانت از متخصصان مجرب، امکان ارجاع درخواست های مشتریان به متخصصان را به روش کاملا اتوماتیک مهیا ساخته است. در درجه دوم، کلیه فعالین در حوزه صنعت ساختمان از دانشجو تا پیمانکاران، کارفرمایان و مشاوران می توانند از امکانات گسترده موجود در سامانه مانند: فروشگاه فایل، دیده شو، حقوق و دستمزد و قیمت مصالح و تجهیزات بهره مند شوند. در این سامانه سعی در محاسبه دقیق هزینه های ساخت و بازسازی، بروز بودن قیمت مصالح و تجهیزات و حقوق دستمزد شده است تا نیاز شما همراهان را هر چه بهتر و دقیق تر مرتفع کند.
                        </p>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="relative isolate -z-10 mt-20 sm:mt-48 maxLayout m-auto">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[20rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
                            <defs>
                                <pattern
                                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y="50%"
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="translate(-100 0)"
                                >
                                    <path d="M.5 200V.5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
                        </svg>
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
                        <h2 className="text-center text-2xl font-bold text-color-font-1 mb-10">
                            شعار ما به موقع به درستی
                        </h2>
                        <div className="grid grid-cols-12 items-center justify-between w-full h-full ">
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={AcademyMedium} alt='برند آکادمی' />
                            </Link>
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={AutoSazeMedium} alt='برند اتوسازه' />
                            </Link>
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={KargoshaMedium} alt='برند اتو سازه' />
                            </Link>
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={MekaMedium} alt='برند مکا' />
                            </Link>
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={MetriChandMedium} alt='برند متری چند' />
                            </Link>
                            <Link to="#" className='h-16 col-span-6 sm:col-span-4 lg:col-span-2 fcc mb-5 hover:animate-pulse'>
                                <img className='w-28' src={SindbadMedium} alt='برند سیندباد' />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
