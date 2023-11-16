import React from 'react'
import Pimage from './portfolio/Pimage'
import Ptext from './portfolio/Ptext'

const PortfolioItem = ({image, title, text, technologies, codelink, demolink}) => {
  return (
    <a href={demolink} className="flex flex-col lg:flex-row lg:odd:flex-row-reverse gap-4 bg-white p-4 rounded-lg shadow-lg">
      <Pimage 
        image={image}
      />
      <Ptext 
        title={title}
        text={text}
        technologies={technologies}
        codelink={codelink}
        demolink={demolink}
      />
    </a>
  )
}

export default PortfolioItem
