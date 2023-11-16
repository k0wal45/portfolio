import React from 'react'

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer class="footer footer-center p-4 bg-neutral-700 shadow-inner text-base-content">
      <p className='font-montserrat-bold text-lg text-base-100'>Copyright © {year} - All right reserved</p>
    </footer>
  )
}

export default Footer
