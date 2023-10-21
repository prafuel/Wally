import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'

import { Form } from 'react-bootstrap'

import homebg from "../../public/home_background.jpg"

const Navbar = () => {
    return (
        <>
            <div className='h-16 w-screen bg-black flex items-center justify-between fixed top-0'>
                <div className='w-full flex items-center gap-5 ml-3'>
                    <FontAwesomeIcon className='h-12 w-12 text-white' icon={faFire} size='2xl' />
                    <div className="search-section w-full flex items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='pt-3 pb-3 pl-3 bg-gray-900 h-full rounded-l-full text-white' />
                        {/* <input className="w-full p-3 outline-none rounded-r-full" type="text" placeholder='Search here... Ex. dark' /> */}
                        <Form.Control className="text-white w-full p-2 outline-none rounded-r-full bg-gray-900" type="search" placeholder='Search here... Ex. Dark' />
                        {/* <button className='p-3 pr-4 bg-blue-300 rounded-r-full'>GO</button> */}
                    </div>
                </div>
                <ul className='flex justify-evenly text-white' style={{ width: "50%" }}>
                    <li>
                        <FontAwesomeIcon icon={faHome} />
                        <Link href={"/"}> Home </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faMugHot} />
                        <Link href={"/n/about"}> About</Link></li>
                    <li>
                        <FontAwesomeIcon icon={faGlobe} />
                        <Link href={"/n/signup"}> Sign up</Link>
                        </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar