import React from 'react'
import Pimage from './subcomponents/portfolio/Pimage'
import lunaris from '../assets/img/lunaris.webp'

const Company = () => {
  return (
    <section id='about' className='py-12 p-8 flex flex-col lg:flex-row justify-center items-center gap-8'>
      <div className='flex flex-col items-start justify-center gap-4 max-w-[35rem]'>
      <h2 className="font-bold text-xl font-montserrat-black text-primary bg-primary bg-opacity-30 p-4 w-min whitespace-nowrap">
        Company Website
      </h2>

      <h3 className="font-montserrat-black text-3xl">
        I also freelance!
      </h3>

      <p className="text-lg font-montserrat text-neutral text-justify">
        As a developer and graphic designer I freelance with my small company. You can checkout my offers and commercial portfolio. So far I've wroked with charity clinic and few more companies. Now mainly I study and I treat this as a side-hustle to raise some comercial experience
      </p>

      <a href="https://lunarisweb.pl/" className='font-bold text-xl font-montserrat-black text-white bg-primary p-4 w-min whitespace-nowrap' target='_blank' rel="noreferrer">Check out my website</a>
      <p className="opacity-75 mt-[-10px]">be aware that website is in polish</p>

    </div>
    <div className="flex flex-col">
      <Pimage image={lunaris}/>
      <p className="opacity-75">website will be rebuilt in the near future</p>
    </div>
      
    </section>
  )
}

export default Company
