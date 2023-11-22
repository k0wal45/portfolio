import React from 'react'
import AText from './subcomponents/about/AText'
import AImg from './subcomponents/about/AImg'

import photo from '../assets/img/img2.webp'

const About = () => {

  function yearsPassedSince() {
    // Parse the target date string into a Date object
    const targetDateObj = new Date('08/08/2004');
    // Get the current date
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - targetDateObj;
    // Calculate the number of milliseconds in a year
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    // Calculate the number of years passed
    const yearsPassed = timeDiff / millisecondsInYear;
    // Round down to the nearest whole number
    const roundedYears = Math.floor(yearsPassed);
    return roundedYears;
  }

  return (
    <section id='about' className='py-12 p-8 flex flex-col lg:flex-row justify-center items-center gap-8'>
      <AImg 
        image={photo}
        alt='Daniel Kowalski Photo'
      />
      <AText 
        title='About Me'
        header='From Intership in Kyndryl to Front-End Developer'
        text={`Hi, I'm a ${yearsPassedSince()}-year-old front-end developer who delved into web development during a 2021 internship at KYNDRYL. Inspired, I took courses on Udemy, unleashing my passion for coding. Proficient in vanilla HTML, CSS, Tailwind CSS, and JavaScript, I've also dived into React, Redux, and Redux Toolkit. I've crafted websites for commercial and non-profit projects, including a car rental site and "Bezpieczni w Teorii," an educational initiative on cybersecurity. Constantly evolving, I'm dedicated to refining my coding skills and exploring new horizons. Let's create something awesome together!`}
      />
      
    </section>
  )
}

export default About
