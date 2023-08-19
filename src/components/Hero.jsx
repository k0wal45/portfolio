import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BubleImg from './subcomponents/BubleImg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import TechStack from './TechStack'


const Hero = () => {
  return (
    <header id='header' className=" mx-auto min-h-screen flex flex-col justify-center items-start max-w-6xl gap-8 p-8 mt-24 lg:mt-0">
      <div className=' flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-0'>
        <div className="flex flex-col gap-8 max-w-xl">
          <h1 className="text-6xl font-montserrat-bold text-[#393939]">Front-End React<br/>Developer</h1>
          <p className="font-montserrat text-[#444] text-lg">Hi I'm Daniel Kowalski and I'm React Front-End Developer located in Katowice, Poland </p>
          <div className="flex mx-auto lg:mx-0">
            <div className="grid place-items-center p-4 rounded-l-xl bg-white">
              <FontAwesomeIcon icon={faGithub} size='2xl' className='text-[#2a2a2a] hover:text-blue-600 duration-200 '/>
            </div>
            <div className="border-[1px] border-[#2a2a2a]"></div>
            <div className="grid place-items-center p-4 rounded-r-xl bg-white">
              <FontAwesomeIcon icon={faLinkedin} size='2xl' className='text-[#2a2a2a] hover:text-blue-600 duration-200'/>
            </div>
          </div>
        </div>
        <BubleImg />
      </div>
      <TechStack />
    </header>
  )
}

export default Hero
