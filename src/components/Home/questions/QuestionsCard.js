// assets
import questionPoster from "../../../assets/images/home/questions/Image.png"
//components
import QuestionsCards from "./QuestionsCards"

const categories = [
  {
    id: 1,
    title: "خدمات ساختمانی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:"پشتیبانی تخصصی و حقوقی مشتری و متخصص"
  },
  {
    id: 2,
    title: "جلب اعتماد مشتری",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:"احراز هویت و احراز صلاحیت متخصصین"
  },
  {
    id: 3,
    title: "پشتیبانی",
    href: '#',
    imageSrc: questionPoster,
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:"کارگشا ارائه دهنده 0 تا 100 خدمات تخصصی ساختمان"  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl md:max-w-7xl">

        <div className="space-y-12 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
          {categories.map((category) => (
            <QuestionsCards
              key={category.id}
              title={category.title}
              imageSrc={category.imageSrc}
              imageAlt={category.imageAlt}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
