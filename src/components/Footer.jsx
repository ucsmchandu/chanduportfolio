import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear(); // Get current year
  return (
    <div id="footer" className='pt-4 pb-6'>
       <p className='pl-6'>© chandra sai mahesh {year}</p>
    </div>
  )
}

export default Footer;