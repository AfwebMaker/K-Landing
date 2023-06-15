import React from 'react'
// assets
import decorationsImage from "../assets/images/category/decorationsImage.png"

function Category() {
  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <div className="text-center flex items-center flex-col py-10">
        <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex items-center justify-center">

          <div className='flex flex-col items-start justify-center w-full'>
            <h2 className='text-lg font-bold mb-5'>
              تزئینات ساختمانی :
            </h2>
            <p className='text-sm font-light text-right leading-7'>
              هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی فرایندی است که با استفاده از مفاهیم هنری، رنگ‌شناسی، نورپردازی، مواد و فرم‌ها، فضاهای داخلی را به صورت جذاب و کارآمد طراحی می‌کند. این خدمات می‌توانند شامل طراحی داخلی منازل، دفاتر، رستوران‌ها، هتل‌ها، فضاهای تجاری و غیره باشد. با استفاده از خدمات طراحی داخلی، فضاهای داخلی می‌توانند به شکلی منحصر به فرد و همچنین متناسب با نیازها و سلیقه مشتری طراحی شوند. یکی دیگر از خدمات تزئینات، طراحی خارجی است. طراحی خارجی در واقع فرایند طراحی و بهینه‌سازی فضاهای باز و باغ‌ها است. این خدمات معمولاً برای منازل، ویلاها، هتل‌ها، پارک‌ها و محیط‌های عمومی دیگر ارائه می‌شوند. با استفاده از طراحی خارجی، فضاهای باز می‌توانند
            </p>
          </div>
          <div className='flex items-center justify-center w-full overflow-hidden rounded-lg'>
            <img className='w-full' src={decorationsImage} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;