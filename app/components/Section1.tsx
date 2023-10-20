import React from 'react'
import Image from "next/image"

import { height } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'


const Section1 = () => {
  const randomQuote = "At DesktopWonders, we believe that your desktop should reflect your style and personality. Thats why we offer a diverse range of desktop wallpapers, catering to every taste and preference. Whether you're into breathtaking landscapes, abstract art, cute animals, or sleek minimalist designs, you'll find the perfect wallpaper to suit your mood and style";
  
  return (
    <div className='bg-slate-500 scroll-smooth' style={{ height: '90vh', position: 'relative' }}>
      <div>  
        <Image 
          src="/download1.jpg" // Replace with the actual image URL
          alt="Your Image"
          layout="fill" // Fill the available space
          objectFit="cover" // Adjust this based on your needs
        />
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className='flex items-center justify-center'>
        <div className='flex flex-col gap-3 justify-evenly' style={{
          height: "60%",
          width: "70%",
        }}>
          <div className="gap-72 bigHeading flex items-center">
            <kbd className='text-xl text-justify p-10 text-white rounded-xl' style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)"
            }}> {randomQuote} </kbd>
          </div>
          <div className="w-full flex items-center text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='pt-7 pb-7 pl-6 bg-gray-900 h-full rounded-l-full' />
            <input className="w-full p-6 outline-none bg-gray-900 rounded-r-full" type="text" placeholder='Search here... Ex. #dark' />
          </div>
        </div>
      </div>
      <div className='text-white absolute bottom-4' style={{left:"50%"}}> <a href="#section2"><FontAwesomeIcon icon={faAnglesUp} size='2xl' /></a> </div>
    </div>
  )
}

export default Section1