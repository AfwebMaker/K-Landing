import React from 'react'
import QuestionsCards from './QuestionsCards'

const QuestionsData = [
    {
        id:1,
        title:"خدمات ساختمانی",
        description:"کارگشا ارائه دهنده 0 تا 100 خدمات تخصصی ساختمان"
    },
    {
        id:2,
        title:"جلب اعتماد مشتری",
        description:"احراز هویت و احراز صلاحیت متخصصین"
    },
    {
        id:3,
        title:"پشتیبانی",
        description:"پشتیبانی تخصصی و حقوقی مشتری و متخصص"
    },
]

function QuestionsCard() {
  return (
    <div className='w-full flex flex-wrap items-center justify-around gap-y-5'>
        {
            QuestionsData && QuestionsData.map(item => (
                <QuestionsCards key={item.id} id={item.id} title={item.title} description={item.description} />
            ))
        }
    </div>
  )
}

export default QuestionsCard
