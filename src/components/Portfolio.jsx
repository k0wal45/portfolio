import React from 'react'
import PortfolioItem from './subcomponents/PortfolioItem'
import cyrptoNight from '../assets/img/CryptoNight.png'
import tastyCourtyard from '../assets/img/tastyCourtyard.png'

const Portfolio = () => {
  return (
    <section id="projects" className='mx-auto flex flex-col gap-4 p-4'>
      <h4 className="text-primary text-xl font-montserrat-black bg-primary bg-opacity-30 p-4 w-min">Projects</h4>
      <h5 className="text-3xl font-montserrat-black">Projects that showcase my comercial skills</h5>
      <div className="flex flex-col gap-8 justify-center items-center mt-8">
        <PortfolioItem 
          image={tastyCourtyard}
          title="Tasty Courtyard - Resturant's Website"
          text='Tasty Courtyard is a restaurant located in Australia and USA where you can eat fancy dishes and eat some nice deserts'
          technologies={['React', 'Tailwind CSS']}
          codelink='https://github.com/k0wal45/restaurant-site'
          demolink='https://tastycourtyard.netlify.app/'
        />
        <PortfolioItem 
          image={cyrptoNight}
          title='CryptoNight - Cryptocurrency app'
          text='CyrptoNight is cyrptocurrency app where visitor can look for most popular cryptocurrency and read about them'
          technologies={['React', 'Tailwind CSS']}
          codelink='https://github.com/k0wal45/crypto-app'
          demolink='https://cryptonight-app.netlify.app/'
        />
        

      </div>
      
    </section>
  )
}

export default Portfolio
