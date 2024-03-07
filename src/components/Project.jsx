
import logo from '../assets/img/logoSocial.webp'
import bezpieczni1 from '../assets/img/bezpieczni1.webp'
import bezpieczni2 from '../assets/img/bezpieczni2.webp'

const About = () => {


  return (
    <section id='about' className='py-12 p-8 flex flex-col lg:flex-row justify-center items-center gap-8'>
      <div className="grid grid-cols-2 max-w-[35rem] gap-8">
        <img src={logo} alt="Logo Bezpieczni w teorii" className='rounded-xl'/>
        <img src={bezpieczni2} alt="Logo Bezpieczni w teorii" className='rounded-xl object-cover aspect-square'/>
        <img src={bezpieczni1} alt="Logo Bezpieczni w teorii" className='rounded-xl col-span-2 max-h-[20rem] w-full object-cover'/>
        
      </div>
      <div className='flex flex-col items-start justify-center gap-4 max-w-[35rem]'>
      <h2 className="font-bold text-xl font-montserrat-black text-primary bg-primary bg-opacity-30 p-4 w-min whitespace-nowrap">
        Project Outside Web development
      </h2>

      <h3 className="font-montserrat-black text-3xl">
        Project "Bezpieczni w teorii" - cybersecurity
      </h3>

      <p className="text-lg font-montserrat text-neutral text-justify">
        "Bezpieczni w Teorii" is a cybersecurity initiative led by three 19-year-olds in Katowice, Poland. As part of the "Zwolnieni z Teorii" Olympiad, they organize impactful training sessions at schools in Katowice, featuring speakers from ING Bank Śląski, Kyndryl, and other tech companies. Throughout the project, we've been featured on national television shows and had the opportunity to meet with professionals in the IT field.
      </p>

      <a href="https://bezpieczniwteorii.pl/" className='font-bold text-xl font-montserrat-black text-white bg-primary p-4 w-min whitespace-nowrap' target='_blank' rel="noreferrer">Check out our website</a>
      <p className="opacity-75 mt-[-10px]">be aware that website is in polish</p>

    </div>
      
    </section>
  )
}

export default About
