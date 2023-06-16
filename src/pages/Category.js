import React, { useState } from 'react'
// assets
import decorationsImage from "../assets/images/category/decorationsImage.png"
import Cards from '../components/category/Cards';

function Category() {
  const [openText, setOpenText] = useState(false);

  const clickHandler = () => {
    setOpenText(!openText)
  }

  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <div className="text-center flex items-center flex-col py-10 ">
        <div className="max-w-[1300px] px-[20px] md:px-[32px] w-full flex flex-col items-center justify-center">
          <div className={`flex fcc ${openText ? "mb-24" : "mb-10"}`}>
            <section className={`${openText ? "overscroll-none" : "overflow-hidden"} relative w-full bg-white flex flex-col fcc lg:inline`}>
              <img className='shape rounded-2xl max-w-xl mr-0 lg:mr-[3%] w-full lg:w-1/2 float-left' src={decorationsImage} alt='' />
              <div className='mt-10 lg:mt-0'>
                <h2 className='text-right font-bold text-xl mb-5'>
                  تزئینات ساختمانی :
                </h2>
                <p className={`text-justify leading-8 font-light text-sm transition-all duration-300 ${openText ? "h-auto" : "h-[350px]"}`}>
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی فرایندی است که با استفاده از مفاهیم هنری، رنگ‌شناسی، نورپردازی، مواد و فرم‌ها، فضاهای داخلی را به صورت جذاب و کارآمد طراحی می‌کند. این خدمات می‌توانند شامل طراحی داخلی منازل، دفاتر، رستوران‌ها، هتل‌ها، فضاهای تجاری و غیره باشد. با استفاده از خدمات طراحی داخلی، فضاهای داخلی می‌توانند به شکلی منحصر به فرد و همچنین متناسب با نیازها و سلیقه مشتری طراحی شوند. یکی دیگر از خدمات تزئینات، طراحی خارجی است. طراحی خارجی در واقع فرایند طراحی و بهینه‌سازی فضاهای باز و باغ‌ها است. این خدمات معمولاً برای منازل، ویلاها، هتل‌ها، پارک‌ها و محیط‌های عمومی دیگر ارائه می‌شوند. با استفاده از طراحی خارجی، فضاهای باز می‌توانند
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی 
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی فرایندی است که با استفاده از مفاهیم هنری، رنگ‌شناسی، نورپردازی، مواد و فرم‌ها، فضاهای داخلی را به صورت جذاب و کارآمد طراحی می‌کند. این خدمات می‌توانند شامل طراحی داخلی منازل، دفاتر، رستوران‌ها، هتل‌ها، فضاهای تجاری و غیره باشد. با استفاده از خدمات طراحی داخلی، فضاهای داخلی می‌توانند به شکلی منحصر به فرد و همچنین متناسب با نیازها و سلیقه مشتری طراحی شوند. یکی دیگر از خدمات تزئینات، طراحی خارجی است. طراحی خارجی در واقع فرایند طراحی و بهینه‌سازی فضاهای باز و باغ‌ها است. این خدمات معمولاً برای منازل، ویلاها، هتل‌ها، پارک‌ها و محیط‌های عمومی دیگر ارائه می‌شوند. با استفاده از طراحی خارجی، فضاهای باز می‌توانند
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی 
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی فرایندی است که با استفاده از مفاهیم هنری، رنگ‌شناسی، نورپردازی، مواد و فرم‌ها، فضاهای داخلی را به صورت جذاب و کارآمد طراحی می‌کند. این خدمات می‌توانند شامل طراحی داخلی منازل، دفاتر، رستوران‌ها، هتل‌ها، فضاهای تجاری و غیره باشد. با استفاده از خدمات طراحی داخلی، فضاهای داخلی می‌توانند به شکلی منحصر به فرد و همچنین متناسب با نیازها و سلیقه مشتری طراحی شوند. یکی دیگر از خدمات تزئینات، طراحی خارجی است. طراحی خارجی در واقع فرایند طراحی و بهینه‌سازی فضاهای باز و باغ‌ها است. این خدمات معمولاً برای منازل، ویلاها، هتل‌ها، پارک‌ها و محیط‌های عمومی دیگر ارائه می‌شوند. با استفاده از طراحی خارجی، فضاهای باز می‌توانند
                  هبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی خدمات تزئینات از مجموعه فعالیت‌هایی هستند که بهبود و تغییر زیبایی و ظاهر فضاهای داخلی و خارجی را هدف دارند. این خدمات معمولاً توسط تیم‌های حرفه‌ای و کارآزموده ارائه می‌شوند که دارای تجربه و تخصص لازم برای ایجاد تغییرات مناسب در فضاها هستند. یکی از خدمات تزئینات رایج، طراحی داخلی است. طراحی داخلی 
                </p>
                <div className={`absolute right-0 flex items-end justify-center h-40 ${openText ? "w-full -bottom-20 px-5" : "w-full lg:w-[50%] xl:w-[51%] bottom-0 pl-2 bg-gradient-to-t from-white to-transparent"}`}>
                  <div onClick={clickHandler} className='w-full font-bold text-sm text-color-font-3 fcc h-10 bg-color-1 rounded-lg cursor-pointer'>
                    {openText ? "مشاهده کم‌تر" : "مشاهده بیشتر"}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default Category;