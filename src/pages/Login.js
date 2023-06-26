import { useState } from 'react'
import { Link } from 'react-router-dom'
//formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
//assets
import loginImage from '../assets/images/login/loginImage.jpg'
import kargoshaLogo from '../assets/images/header/Kargosha-Logo.svg'
import Arrow_right from '../assets/images/login/Arrow_right.svg'
//react icon
import { FaKey } from 'react-icons/fa'
import { HiEye } from 'react-icons/hi'
import { HiPhone } from 'react-icons/hi'
import { HiXCircle } from 'react-icons/hi'

const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .required('لطفا یک شماره تلفن وارد کنید')
        .min(1, 'لطفا یک شماره تلفن معتبر وارد کنید')
        .matches(/^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$/, 'لطفا یک شماره تلفن معتبر وارد کنید'),
    password: Yup.string()
        .required('لطفا پسورد خود را وارد کنید')
        .min(8, 'پسورد باید حداقل شامل ۸ کاراکتر باشد')
        .matches(/[A-Z]/, 'پسورد باید شامل حداقل یک حرف بزرگ باشد')
        .matches(/[a-z]/, 'پسورد باید شامل حداقل یک حرف کوچک باشد')
        .matches(/[0-9]/, 'پسورد باید شامل حداقل یک عدد باشد')
});

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    //formik submit handler
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div className="flex min-h-full flex-1">
                <div style={{ direction: 'ltr' }} className='customScrollbar h-screen overflow-hidden overflow-y-auto w-full lg:w-auto'>
                    <Link to={'/'} className='relative pt-4 w-full text-color-font-3 fcc'>
                        برگشت
                        <img className='absolute right-4' src={Arrow_right} alt="برگشت" />
                    </Link>
                    <div style={{ direction: 'rtl' }} className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">

                        <div className="mx-auto w-full max-w-sm lg:w-96">
                            <div className='w-full fcc flex-col'>
                                <img
                                    className="h-10 w-auto"
                                    src={kargoshaLogo}
                                    alt="Your Company"
                                />
                                <div className="mt-8 font-regular leading-9 tracking-tight text-gray-900">
                                    <button className='bg-[#D1FAE5] text-color-font-3 px-4 m-2 rounded-md'>ورود کاربران</button>
                                    <button className='px-4 m-2 rounded-md'>ثبت نام کاربران</button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div>
                                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                شماره تلفن
                                            </label>
                                            <div className="mt-2 relative flex items-center">
                                                <HiPhone size={18} className='absolute right-3 text-color-2' />
                                                <input
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="number"
                                                    placeholder='به طور مثال : ۰۹۱۲۸٤٦۳٥۱۲'
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.phoneNumber}
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-3 focus:outline-none sm:text-sm sm:leading-6 pr-10"
                                                />
                                                <HiXCircle onClick={() => { formik.setFieldValue("phoneNumber", '') }} size={18} className='absolute left-3 text-color-2 cursor-pointer' />
                                            </div>
                                            {formik.touched.phoneNumber && formik.errors.phoneNumber &&
                                                <span className='error text-[#FB923C] flex mt-2 text-xs'>
                                                    {formik.errors.phoneNumber}
                                                </span>
                                            }
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                رمز عبور
                                            </label>
                                            <div className="mt-2 relative flex items-center">
                                                <FaKey size={16} className='absolute right-3 text-color-2' />
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type={passwordVisible ? "text" : "password"}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color-3 focus:outline-none pr-10 sm:text-sm sm:leading-6"
                                                />
                                                <HiEye onClick={() => { setPasswordVisible(!passwordVisible) }} size={18} className='cursor-pointer absolute left-3 text-color-2' />
                                            </div>
                                            {formik.touched.password && formik.errors.password &&
                                                <span className='error text-[#FB923C] flex mt-2 text-xs'>
                                                    {formik.errors.password}
                                                </span>
                                            }
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="ml-2 h-4 w-4 rounded border-gray-300 text-color-font-3 focus:ring-color-3"
                                                />
                                                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                                                    مرا به خاطر بسپار
                                                </label>
                                            </div>

                                            <div className="text-sm leading-6">
                                                <Link to="/" className="font-semibold text-color-font-3">
                                                    رمز عبور خود را فراموش کردید؟
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-color-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4cc751] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                ورود به پنل کاربری
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="mt-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-[#9CA3AF]" />
                                        </div>
                                        <div className="relative flex justify-center text-sm font-medium leading-6">
                                            <span className="bg-white px-6 text-color-font-2">یا ادامه دهید با</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-3 gap-4">
                                        <Link
                                            to="/"
                                            className="shadow-lg flex w-full items-center justify-center gap-3 rounded-md bg-[#e5e7e8] px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            <span className="text-sm text-black font-semibold leading-6">تست</span>
                                        </Link>

                                        <Link
                                            to="/"
                                            className="shadow-lg flex w-full items-center justify-center gap-3 rounded-md bg-[#e5e7e8] px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            <span className="text-sm text-black font-semibold leading-6">تست</span>
                                        </Link>

                                        <Link
                                            to="/"
                                            className="shadow-lg flex w-full items-center justify-center gap-3 rounded-md bg-[#e5e7e8] px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            <span className="text-sm text-black font-semibold leading-6">تست</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={loginImage}
                        alt="login"
                    />
                </div>
            </div>
        </>
    )
}
