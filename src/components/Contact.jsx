import React from 'react'
import ContactItem from './subcomponents/ContactItem'
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  return (
    <section id="contact" className='flex flex-col mx-auto gap-4 p-4'>
      <h6 className="text-xl text-primary font-montserrat-black bg-primary bg-opacity-30 p-4 w-min whitespace-nowrap">Contact</h6>
      <h7 className="text-3xl font-montserrat-black">If you want more info. Contact Me!</h7>
      <div className="flex gap-8 flex-wrap my-8">
        <ContactItem 
          title='Location'
          text='Katowice, Poland'
          icon={faBuilding}
        />
        <ContactItem 
          title='E-mail'
          text='d.kowal.com@gmail.com'
          icon={faEnvelope}
        />
        <ContactItem 
          title='Phone Number'
          text='+48 664 447 556'
          icon={faPhone}
        />

      </div>
    </section>
  )
}

export default Contact
