import React, { useEffect, useReducer, useRef, useState } from 'react'
import Image from "next/image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faExchange } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

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

  const [images, setImages]: [any, any] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);


  const fetchImages = async () => {
    try {
      if (searchInput.current) {
        const { data } = await axios.get(`${API_URL}?query=${searchInput.current['value']}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
        setImages(data.results);
        setTotalPages(data.total_pages);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }


  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleSearch = (event: any) => {
    event.preventDefault();
    // console.log(searchInput.current.value);
    if (searchInput.current) {
      // console.log(searchInput.current.value)
      fetchImages();
    }
  }

  const addIntoSearch = (searchValue: string) => {
    if (searchInput.current != null) {
      searchInput.current['value'] = searchValue;
      fetchImages();
      // console.log(searchInput.current['value'])
    }
  }


  // Image Swapper
  const bgImage = [
    "download1.jpg",
    "mountain.png",
    "nature.jpg",
    "summer.jpg",
    "waterfall.jpg"
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
                // backgroundColor: "rgba(0,0,0,0.4)",
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
                hashtagArr.map((item: string, index) => {
                  return (
                    <span key={index} onClick={() => addIntoSearch(item)} className='text-white p-2 hover:text-blue-400'>#{item}</span>
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
        }} className="switchBg rounded-xl absolute bottom-4 right-4 h-10 w-28 flex items-center justify-evenly text-white text-bold cursor-pointer hover:border hover:border-gray-200" style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)"
        }}>
          <FontAwesomeIcon icon={faExchange} />
          <span>Switch</span>
        </div>
        <div className='text-white absolute bottom-4' style={{ left: "50%" }}> <a href="#section1"><FontAwesomeIcon icon={faAnglesUp} size='2xl' /></a> </div>
      </div>
      <div className='showImages bg-gray-900 justify-center pt-3 flex flex-wrap gap-3'>
        {
          images.map((image: any) => {
            console.log(`link=${image.links.html}`)
            return (
              // <img src={image.urls.raw} alt={image.alt_description}/>
              <>
                <div id="section1" key={Date.toString()} className='border border-gray-700 p-4 inline rounded-xl mb-10 mt-3 hover:border-2  hover:border-white' style={{ width: "30%" }}>
                  <div className="optionSection flex flex-row-reverse items-center w-full justify-between">
                    <div className="download p-2 mb-3 flex justify-end items-center gap-3 text-xl text-white">

                      <a href={image.links.html} target='blank'><FontAwesomeIcon className='cursor-pointer' icon={faDownload} /></a>
                      <FontAwesomeIcon icon={faShare} />
                      {/* <FontAwesomeIcon icon={faCircleInfo} /> */}
                    </div>
                    <div className="likes p-2 mb-3 flex flex-row items-center gap-2 text-white">
                      <FontAwesomeIcon icon={faHeart} />
                      <span className='text-lg'>{image.likes}</span>
                    </div>
                  </div>
                  <img id={image.id} className='rounded-xl drop-shadow-xl blur-md hover:blur-none' src={image.urls.full} alt={image.alt_description} style={{ backgroundSize: "contain" }} />
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