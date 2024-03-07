import React from 'react'
import StackItem from './subcomponents/StackItem'

// images
import html from '../assets/svg/html.svg'
import css3 from '../assets/svg/css3.svg'
import javascript from '../assets/svg/javascript.svg'
import react from '../assets/svg/react.svg'
import redux from '../assets/svg/redux.svg'
import tailwind from '../assets/svg/tailwind.svg'
import nextjs from '../assets/svg/next-js.svg'

const TechStack = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-start items-center w-full">
        <p className="font-montserrat text-[#2a2a2a] text-2xl lg:text-lg p-4 border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-[#2a2a2a] ">Tech Stack</p>
        <ul className='flex flex-wrap justify-center gap-8'>
          <li>
            <StackItem 
              image={html}
              altT='HTML Icon'
            />
          </li>
          <li>
            <StackItem 
              image={css3}
              altT='CSS Icon'
            />
          </li>
          <li>
            <StackItem 
              image={javascript}
              altT='JavaScript Icon'
            />
          </li>
          <li>
            <StackItem 
              image={react}
              altT='React Icon'
            />
          </li>
          <li>
            <StackItem 
              image={redux}
              altT='Redux Icon'
            />
          </li>
          <li>
            <StackItem 
              image={tailwind}
              altT='Tailwind CSS Icon'
            />
          </li>
          <li>
            <StackItem 
              image={nextjs}
              altT='NextJS Icon'
            />
          </li>
        </ul>
      </div>
  )
}

export default TechStack
