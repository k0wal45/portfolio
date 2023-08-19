import React from 'react'

const AText = ({title, header, text}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 max-w-[35rem]'>
      <h2 className="font-bold text-xl font-montserrat-black text-primary">
        {title}
      </h2>

      <h3 className="font-montserrat-black text-2xl">
        {header}
      </h3>

      <p className="text-lg text-neutral-700">
        {text}
      </p>
    </div>
  )
}

export default AText
