import React, { useEffect, useReducer, useRef, useState } from 'react'
import Image from "next/image"

import { height } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faExchange } from '@fortawesome/free-solid-svg-icons'

import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

const API_URL = "https://api.unsplash.com/search/photos/";
const API_KEY = "MlErqsUhwGwW87HRYRgJHy66qO2Bo7ByzZ59MjCXZEY";
const IMAGES_PER_PAGE = 21;

const hashtagArr = [
  "Dark", "Nature", "Night", "Tree", "Space", "Mountain", "Hill", "Sea", "River", "Technology", "Animals", "Dolphins", "Sharks", "Chocolate", "Bridge", "Galaxy", "Sport"
]

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


  // Image Swapper
  const bgImage = [
    "mountain.png",
    "download1.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const randomQuote = "At Wally, we believe that your screen should reflect your style and personality. Thats why we offer a diverse range of desktop wallpapers, catering to every taste and preference. Whether you're into breathtaking landscapes, abstract art, cute animals, or sleek minimalist designs, you'll find the perfect wallpaper to suit your mood and style";
  return (
    <div>

      <div className='bg-slate-500 scroll-smooth' style={{ height: '90vh', position: 'relative' }}>

        <div className='h-full w-full'>
          <Image
            src={`/${bgImage[currentIndex]}`} // Replace with the actual image URL
            alt="Your Image"
            layout="fill" // Fill the available spacete
            objectFit="cover" // Adjust this based on your needs
          />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} className='flex items-center justify-center'>
          <div className='flex flex-col gap-5 justify-evenly' style={{
            height: "60%",
            width: "70%",
          }}>
            <div className="gap-72 bigHeading flex items-center">
              <kbd className='text-md text-justify p-5 text-white rounded-xl' style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)"
              }}> {randomQuote} </kbd>
            </div>
            <div className="w-full flex items-center text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} className='pt-5 pb-5 pl-6 bg-gray-900 h-full rounded-l-full' />
              {/* <input className="w-full p-6 outline-none bg-gray-900 rounded-r-full" type="text" placeholder='Search here... Ex. dark' /> */}
              <Form onSubmit={handleSearch} className="w-full flex items-center text-white"><Form.Control className="w-full p-4 outline-none bg-gray-900 rounded-r-full" type="search" placeholder='Search here... Ex. Dark' ref={searchInput} /></Form>
            </div>
            <div className="w-full h-fit flex flex-row justify-evenly cursor-pointer flex-wrap">
              {
                hashtagArr.map(item => {
                  return (
                    <span key={Date.now.toString()} onClick={() => addIntoSearch(item)} className='text-white p-2 hover:text-blue-400'>#{item}</span>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div onClick={() => {
          if (currentIndex === bgImage.length - 1) {
            setCurrentIndex(0);
          }
          else {
            setCurrentIndex(currentIndex + 1);
          };
        }} className="switchBg absolute bottom-4 right-4 h-10 w-28 flex items-center justify-evenly text-white text-bold cursor-pointer hover:border hover:border-gray-200">
          <FontAwesomeIcon icon={faExchange} />
          <span>Switch</span>
        </div>
        <div className='text-white absolute bottom-4' style={{ left: "50%" }}> <a href="#section1"><FontAwesomeIcon icon={faAnglesUp} size='2xl' /></a> </div>
      </div>
      <div className='showImages bg-gray-900 justify-center pt-3 flex flex-wrap gap-3'>
        {
          images.map(image => {
            return (
              // <img src={image.urls.raw} alt={image.alt_description}/>
              <>
                <div id="section1" key={image.id} className='border border-gray-700 p-4 inline rounded-xl mb-10 mt-3 hover:border-2 hover:border-white' style={{ width: "30%" }}>
                  <div className="download p-2 mb-3 flex justify-end items-center gap-3">
                    <FontAwesomeIcon icon={faDownload} className='text-xl text-white' />
                    <FontAwesomeIcon icon={faShare} className='text-xl text-white' />
                  </div>
                  <img className='rounded-xl' src={image.urls.full} alt={image.alt_description} style={{ backgroundSize: "contain" }} />
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