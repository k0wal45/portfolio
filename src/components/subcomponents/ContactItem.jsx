import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactItem = ({title, text, icon}) => {
  return (
    <div className="flex p-4 gap-4">
      <div className="bg-primary flex justify-center items-center w-16 h-16 rounded-full">
        <FontAwesomeIcon icon={icon} className='text-white' size='2x'/>
      </div>
      <div className="flex flex-col justify-center">
        <h7 className="text-xl font-montserrat-black">{title}</h7> 
        <p className="text-xl font-montserrat-light">{text}</p>
      </div>
    </div>
  )
}

export default ContactItem
