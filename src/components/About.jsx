import React from 'react'
import AText from './subcomponents/AText'
import AImg from './subcomponents/AImg'

import photo from '../assets/img/img1.png'

const About = () => {
  return (
    <section id='about' className='py-12 p-8 flex flex-col lg:flex-row justify-center items-center gap-8'>
      <AImg 
        image={photo}
        alt=''
      />
      <AText 
        title='About Me'
        header='lorem ipsum dolor same douno'
        text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, laboriosam voluptatem impedit hic voluptates corporis necessitatibus voluptate aperiam commodi vero consequuntur provident numquam, facilis aliquam exercitationem quis corrupti! Totam numquam quam tempora ipsum, laborum sequi iusto asperiores unde accusantium? Error quidem magni sint maiores dolor reiciendis tenetur in. Fugit, consequuntur.'
      />
      
    </section>
  )
}

export default About
