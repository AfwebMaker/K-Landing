import { Fragment, useState } from 'react'
//headlessui
import { Listbox, Transition } from '@headlessui/react'
//react-icons
import { BsCheck } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';


const people = [
  { name: "تهران" },
  { name: "کهگیلویه و بویراحمد" },
  { name: "شیراز" },
  { name: "اصفهان" },
  { name: "تهران" },
  { name: "کهگیلویه و بویراحمد" },
  { name: "شیراز" },
  { name: "اصفهان" },
  { name: "تهران" },
  { name: "کهگیلویه و بویراحمد" },
  { name: "شیراز" },
  { name: "اصفهان" },
  
]

export default function Example() {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="absolute right-0 top-0 z-10 col-span-8 mb-5 flex items-center justify-start">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-16">
          <Listbox.Button className="relative flex items-center justify-start w-full h-10 cursor-pointer text-color-font-2 py-2 px-2 text-right focus:outline-none text-xs transition-all duration-300 outline-none border-left-dashed">
            <span className="pointer-events-none inset-y-0 flex items-center ml-1">
              <SlLocationPin className='text-sm' />
            </span>
            <span className="block truncate">{selected.name}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-32 w-60 flex flex-col items-start justify-start overflow-auto rounded-xl bg-white py-2 text-xs md:text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hideScroll">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 flex items-center justify-between w-full ${
                      active ? 'bg-[#45b6491d] transition-all duration-150 text-color-font-3' : 'text-color-Text3'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-color-main-1">
                            <BsCheck className='text-xl'/>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}