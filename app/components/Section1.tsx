import React, { useEffect, useReducer, useRef, useState } from 'react'
import Image from "next/image"

import { height } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

import { Button, Form } from 'react-bootstrap'
import Section2 from './Section2'
import axios from 'axios'

const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "MlErqsUhwGwW87HRYRgJHy66qO2Bo7ByzZ59MjCXZEY";
const IMAGES_PER_PAGE = 20;

const Section1 = () => {
  // console.log(API_KEY);

  // useEffect(() => {
  //   const getImages = async () => {

  //   };
  //   getImages();
  // }, [])

  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
      // console.log("result", result.data);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  }


  const searchInput = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
    // console.log(searchInput.current.value);
    if (searchInput.current) {
      // console.log(searchInput.current.value)
      fetchImages();
    }
  }

  const addIntoSearch = (searchValue) => {
    searchInput.current.value = searchValue;
    fetchImages();
  }

  const randomQuote = "At DesktopWonders, we believe that your desktop should reflect your style and personality. Thats why we offer a diverse range of desktop wallpapers, catering to every taste and preference. Whether you're into breathtaking landscapes, abstract art, cute animals, or sleek minimalist designs, you'll find the perfect wallpaper to suit your mood and style";
  return (
    <div>
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
          <div className='flex flex-col gap-5 justify-evenly' style={{
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
              {/* <input className="w-full p-6 outline-none bg-gray-900 rounded-r-full" type="text" placeholder='Search here... Ex. dark' /> */}
              <Form onSubmit={handleSearch} className="w-full flex items-center text-white"><Form.Control className="w-full p-6 outline-none bg-gray-900 rounded-r-full" type="search" placeholder='Search here... Ex. Dark' ref={searchInput} /></Form>
            </div>
            <div className="w-full h-fit flex flex-row justify-evenly cursor-pointer">
              <span onClick={() => addIntoSearch('Mountain')} className='text-white p-2 hover:text-blue-400'>#Mountain</span>
              <span onClick={() => addIntoSearch('Dark')} className='text-white p-2 hover:text-blue-400'>#Dark</span>
              <span onClick={() => addIntoSearch('Nature')} className='text-white p-2 hover:text-blue-400'>#Nature</span>
              <span onClick={() => addIntoSearch('Night')} className='text-white p-2 hover:text-blue-400'>#Night</span>
              <span onClick={() => addIntoSearch('Pixel')} className='text-white p-2 hover:text-blue-400'>#Pixel</span>
              <span onClick={() => addIntoSearch('Summer')} className='text-white p-2 hover:text-blue-400'>#Summer</span>
              <span onClick={() => addIntoSearch('Region')} className='text-white p-2 hover:text-blue-400'>#Region</span>
              <span onClick={() => addIntoSearch('Culter')} className='text-white p-2 hover:text-blue-400'>#Culter</span>
              <span onClick={() => addIntoSearch('Animals')} className='text-white p-2 hover:text-blue-400'>#Animals</span>
              <span onClick={() => addIntoSearch('Winter')} className='text-white p-2 hover:text-blue-400'>#Winter</span>
            </div>
          </div>
        </div>
        <div className='text-white absolute bottom-4' style={{ left: "50%" }}> <a href="#section2"><FontAwesomeIcon icon={faAnglesUp} size='2xl' /></a> </div>
      </div>
      <div className='showImages bg-gray-900 justify-center pt-3 flex flex-wrap gap-5'>
        {
          images.map(image => {
            return (
              // <img src={image.urls.raw} alt={image.alt_description}/>
              <>
                <div key={Date.now.toString()} className='border border-gray-700 p-7 hover:border-2 hover:border-white' style={{ height: "40%", width: "30%" }}>
                  <img className='' src={image.urls.raw} alt={image.alt_description} style={{ backgroundSize: "cover" }} />
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default Section1